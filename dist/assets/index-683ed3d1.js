var TS = Object.defineProperty;
var RS = (e, t, a) =>
  t in e ? TS(e, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : (e[t] = a);
var mr = (e, t, a) => (RS(e, typeof t != 'symbol' ? t + '' : t, a), a);
function AS(e, t) {
  for (var a = 0; a < t.length; a++) {
    const n = t[a];
    if (typeof n != 'string' && !Array.isArray(n)) {
      for (const i in n)
        if (i !== 'default' && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(n, i);
          o && Object.defineProperty(e, i, o.get ? o : { enumerable: !0, get: () => n[i] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const r of o.addedNodes) r.tagName === 'LINK' && r.rel === 'modulepreload' && n(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = a(i);
    fetch(i.href, o);
  }
})();
function xg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
var Tv = { exports: {} },
  Uu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var MS = Symbol.for('react.transitional.element'),
  OS = Symbol.for('react.fragment');
function Rv(e, t, a) {
  var n = null;
  if ((a !== void 0 && (n = '' + a), t.key !== void 0 && (n = '' + t.key), 'key' in t)) {
    a = {};
    for (var i in t) i !== 'key' && (a[i] = t[i]);
  } else a = t;
  return ((t = a.ref), { $$typeof: MS, type: e, key: n, ref: t !== void 0 ? t : null, props: a });
}
Uu.Fragment = OS;
Uu.jsx = Rv;
Uu.jsxs = Rv;
Tv.exports = Uu;
var w = Tv.exports,
  Av = { exports: {} },
  oe = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wg = Symbol.for('react.transitional.element'),
  NS = Symbol.for('react.portal'),
  zS = Symbol.for('react.fragment'),
  BS = Symbol.for('react.strict_mode'),
  LS = Symbol.for('react.profiler'),
  $S = Symbol.for('react.consumer'),
  DS = Symbol.for('react.context'),
  jS = Symbol.for('react.forward_ref'),
  US = Symbol.for('react.suspense'),
  HS = Symbol.for('react.memo'),
  Mv = Symbol.for('react.lazy'),
  VS = Symbol.for('react.activity'),
  vm = Symbol.iterator;
function GS(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (vm && e[vm]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Ov = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Nv = Object.assign,
  zv = {};
function Xo(e, t, a) {
  ((this.props = e), (this.context = t), (this.refs = zv), (this.updater = a || Ov));
}
Xo.prototype.isReactComponent = {};
Xo.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Xo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Bv() {}
Bv.prototype = Xo.prototype;
function Cg(e, t, a) {
  ((this.props = e), (this.context = t), (this.refs = zv), (this.updater = a || Ov));
}
var kg = (Cg.prototype = new Bv());
kg.constructor = Cg;
Nv(kg, Xo.prototype);
kg.isPureReactComponent = !0;
var _m = Array.isArray;
function Zd() {}
var Pe = { H: null, A: null, T: null, S: null },
  Lv = Object.prototype.hasOwnProperty;
function Eg(e, t, a) {
  var n = a.ref;
  return { $$typeof: wg, type: e, key: t, ref: n !== void 0 ? n : null, props: a };
}
function IS(e, t) {
  return Eg(e.type, t, e.props);
}
function Fg(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === wg;
}
function PS(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (a) {
      return t[a];
    })
  );
}
var ym = /\/+/g;
function Wc(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? PS('' + e.key) : t.toString(36);
}
function qS(e) {
  switch (e.status) {
    case 'fulfilled':
      return e.value;
    case 'rejected':
      throw e.reason;
    default:
      switch (
        (typeof e.status == 'string'
          ? e.then(Zd, Zd)
          : ((e.status = 'pending'),
            e.then(
              function (t) {
                e.status === 'pending' && ((e.status = 'fulfilled'), (e.value = t));
              },
              function (t) {
                e.status === 'pending' && ((e.status = 'rejected'), (e.reason = t));
              }
            )),
        e.status)
      ) {
        case 'fulfilled':
          return e.value;
        case 'rejected':
          throw e.reason;
      }
  }
  throw e;
}
function oo(e, t, a, n, i) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var r = !1;
  if (e === null) r = !0;
  else
    switch (o) {
      case 'bigint':
      case 'string':
      case 'number':
        r = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case wg:
          case NS:
            r = !0;
            break;
          case Mv:
            return ((r = e._init), oo(r(e._payload), t, a, n, i));
        }
    }
  if (r)
    return (
      (i = i(e)),
      (r = n === '' ? '.' + Wc(e, 0) : n),
      _m(i)
        ? ((a = ''),
          r != null && (a = r.replace(ym, '$&/') + '/'),
          oo(i, t, a, '', function (u) {
            return u;
          }))
        : i != null &&
          (Fg(i) &&
            (i = IS(
              i,
              a +
                (i.key == null || (e && e.key === i.key)
                  ? ''
                  : ('' + i.key).replace(ym, '$&/') + '/') +
                r
            )),
          t.push(i)),
      1
    );
  r = 0;
  var l = n === '' ? '.' : n + ':';
  if (_m(e))
    for (var s = 0; s < e.length; s++) ((n = e[s]), (o = l + Wc(n, s)), (r += oo(n, t, a, o, i)));
  else if (((s = GS(e)), typeof s == 'function'))
    for (e = s.call(e), s = 0; !(n = e.next()).done; )
      ((n = n.value), (o = l + Wc(n, s++)), (r += oo(n, t, a, o, i)));
  else if (o === 'object') {
    if (typeof e.then == 'function') return oo(qS(e), t, a, n, i);
    throw (
      (t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      )
    );
  }
  return r;
}
function es(e, t, a) {
  if (e == null) return e;
  var n = [],
    i = 0;
  return (
    oo(e, n, '', '', function (o) {
      return t.call(a, o, i++);
    }),
    n
  );
}
function KS(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (a) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = a));
        },
        function (a) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = a));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var bm =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' && e !== null && typeof e.message == 'string'
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', e);
            return;
          }
          console.error(e);
        },
  YS = {
    map: es,
    forEach: function (e, t, a) {
      es(
        e,
        function () {
          t.apply(this, arguments);
        },
        a
      );
    },
    count: function (e) {
      var t = 0;
      return (
        es(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        es(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!Fg(e))
        throw Error('React.Children.only expected to receive a single React element child.');
      return e;
    },
  };
oe.Activity = VS;
oe.Children = YS;
oe.Component = Xo;
oe.Fragment = zS;
oe.Profiler = LS;
oe.PureComponent = Cg;
oe.StrictMode = BS;
oe.Suspense = US;
oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Pe;
oe.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function (e) {
    return Pe.H.useMemoCache(e);
  },
};
oe.cache = function (e) {
  return function () {
    return e.apply(null, arguments);
  };
};
oe.cacheSignal = function () {
  return null;
};
oe.cloneElement = function (e, t, a) {
  if (e == null) throw Error('The argument must be a React element, but you passed ' + e + '.');
  var n = Nv({}, e.props),
    i = e.key;
  if (t != null)
    for (o in (t.key !== void 0 && (i = '' + t.key), t))
      !Lv.call(t, o) ||
        o === 'key' ||
        o === '__self' ||
        o === '__source' ||
        (o === 'ref' && t.ref === void 0) ||
        (n[o] = t[o]);
  var o = arguments.length - 2;
  if (o === 1) n.children = a;
  else if (1 < o) {
    for (var r = Array(o), l = 0; l < o; l++) r[l] = arguments[l + 2];
    n.children = r;
  }
  return Eg(e.type, i, n);
};
oe.createContext = function (e) {
  return (
    (e = {
      $$typeof: DS,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (e.Provider = e),
    (e.Consumer = { $$typeof: $S, _context: e }),
    e
  );
};
oe.createElement = function (e, t, a) {
  var n,
    i = {},
    o = null;
  if (t != null)
    for (n in (t.key !== void 0 && (o = '' + t.key), t))
      Lv.call(t, n) && n !== 'key' && n !== '__self' && n !== '__source' && (i[n] = t[n]);
  var r = arguments.length - 2;
  if (r === 1) i.children = a;
  else if (1 < r) {
    for (var l = Array(r), s = 0; s < r; s++) l[s] = arguments[s + 2];
    i.children = l;
  }
  if (e && e.defaultProps) for (n in ((r = e.defaultProps), r)) i[n] === void 0 && (i[n] = r[n]);
  return Eg(e, o, i);
};
oe.createRef = function () {
  return { current: null };
};
oe.forwardRef = function (e) {
  return { $$typeof: jS, render: e };
};
oe.isValidElement = Fg;
oe.lazy = function (e) {
  return { $$typeof: Mv, _payload: { _status: -1, _result: e }, _init: KS };
};
oe.memo = function (e, t) {
  return { $$typeof: HS, type: e, compare: t === void 0 ? null : t };
};
oe.startTransition = function (e) {
  var t = Pe.T,
    a = {};
  Pe.T = a;
  try {
    var n = e(),
      i = Pe.S;
    (i !== null && i(a, n),
      typeof n == 'object' && n !== null && typeof n.then == 'function' && n.then(Zd, bm));
  } catch (o) {
    bm(o);
  } finally {
    (t !== null && a.types !== null && (t.types = a.types), (Pe.T = t));
  }
};
oe.unstable_useCacheRefresh = function () {
  return Pe.H.useCacheRefresh();
};
oe.use = function (e) {
  return Pe.H.use(e);
};
oe.useActionState = function (e, t, a) {
  return Pe.H.useActionState(e, t, a);
};
oe.useCallback = function (e, t) {
  return Pe.H.useCallback(e, t);
};
oe.useContext = function (e) {
  return Pe.H.useContext(e);
};
oe.useDebugValue = function () {};
oe.useDeferredValue = function (e, t) {
  return Pe.H.useDeferredValue(e, t);
};
oe.useEffect = function (e, t) {
  return Pe.H.useEffect(e, t);
};
oe.useEffectEvent = function (e) {
  return Pe.H.useEffectEvent(e);
};
oe.useId = function () {
  return Pe.H.useId();
};
oe.useImperativeHandle = function (e, t, a) {
  return Pe.H.useImperativeHandle(e, t, a);
};
oe.useInsertionEffect = function (e, t) {
  return Pe.H.useInsertionEffect(e, t);
};
oe.useLayoutEffect = function (e, t) {
  return Pe.H.useLayoutEffect(e, t);
};
oe.useMemo = function (e, t) {
  return Pe.H.useMemo(e, t);
};
oe.useOptimistic = function (e, t) {
  return Pe.H.useOptimistic(e, t);
};
oe.useReducer = function (e, t, a) {
  return Pe.H.useReducer(e, t, a);
};
oe.useRef = function (e) {
  return Pe.H.useRef(e);
};
oe.useState = function (e) {
  return Pe.H.useState(e);
};
oe.useSyncExternalStore = function (e, t, a) {
  return Pe.H.useSyncExternalStore(e, t, a);
};
oe.useTransition = function () {
  return Pe.H.useTransition();
};
oe.version = '19.2.3';
Av.exports = oe;
var y = Av.exports;
const J = xg(y),
  Wd = AS({ __proto__: null, default: J }, [y]);
var $v = { exports: {} },
  Hu = {},
  Dv = { exports: {} },
  jv = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(R, j) {
    var B = R.length;
    R.push(j);
    e: for (; 0 < B; ) {
      var U = (B - 1) >>> 1,
        q = R[U];
      if (0 < i(q, j)) ((R[U] = j), (R[B] = q), (B = U));
      else break e;
    }
  }
  function a(R) {
    return R.length === 0 ? null : R[0];
  }
  function n(R) {
    if (R.length === 0) return null;
    var j = R[0],
      B = R.pop();
    if (B !== j) {
      R[0] = B;
      e: for (var U = 0, q = R.length, X = q >>> 1; U < X; ) {
        var ye = 2 * (U + 1) - 1,
          le = R[ye],
          Ee = ye + 1,
          je = R[Ee];
        if (0 > i(le, B))
          Ee < q && 0 > i(je, le)
            ? ((R[U] = je), (R[Ee] = B), (U = Ee))
            : ((R[U] = le), (R[ye] = B), (U = ye));
        else if (Ee < q && 0 > i(je, B)) ((R[U] = je), (R[Ee] = B), (U = Ee));
        else break e;
      }
    }
    return j;
  }
  function i(R, j) {
    var B = R.sortIndex - j.sortIndex;
    return B !== 0 ? B : R.id - j.id;
  }
  if (
    ((e.unstable_now = void 0),
    typeof performance == 'object' && typeof performance.now == 'function')
  ) {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var r = Date,
      l = r.now();
    e.unstable_now = function () {
      return r.now() - l;
    };
  }
  var s = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    _ = !1,
    x = !1,
    S = !1,
    m = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null;
  function v(R) {
    for (var j = a(u); j !== null; ) {
      if (j.callback === null) n(u);
      else if (j.startTime <= R) (n(u), (j.sortIndex = j.expirationTime), t(s, j));
      else break;
      j = a(u);
    }
  }
  function C(R) {
    if (((x = !1), v(R), !_))
      if (a(s) !== null) ((_ = !0), k || ((k = !0), b()));
      else {
        var j = a(u);
        j !== null && N(C, j.startTime - R);
      }
  }
  var k = !1,
    E = -1,
    M = 5,
    z = -1;
  function $() {
    return S ? !0 : !(e.unstable_now() - z < M);
  }
  function V() {
    if (((S = !1), k)) {
      var R = e.unstable_now();
      z = R;
      var j = !0;
      try {
        e: {
          ((_ = !1), x && ((x = !1), p(E), (E = -1)), (g = !0));
          var B = d;
          try {
            t: {
              for (v(R), f = a(s); f !== null && !(f.expirationTime > R && $()); ) {
                var U = f.callback;
                if (typeof U == 'function') {
                  ((f.callback = null), (d = f.priorityLevel));
                  var q = U(f.expirationTime <= R);
                  if (((R = e.unstable_now()), typeof q == 'function')) {
                    ((f.callback = q), v(R), (j = !0));
                    break t;
                  }
                  (f === a(s) && n(s), v(R));
                } else n(s);
                f = a(s);
              }
              if (f !== null) j = !0;
              else {
                var X = a(u);
                (X !== null && N(C, X.startTime - R), (j = !1));
              }
            }
            break e;
          } finally {
            ((f = null), (d = B), (g = !1));
          }
          j = void 0;
        }
      } finally {
        j ? b() : (k = !1);
      }
    }
  }
  var b;
  if (typeof h == 'function')
    b = function () {
      h(V);
    };
  else if (typeof MessageChannel < 'u') {
    var O = new MessageChannel(),
      A = O.port2;
    ((O.port1.onmessage = V),
      (b = function () {
        A.postMessage(null);
      }));
  } else
    b = function () {
      m(V, 0);
    };
  function N(R, j) {
    E = m(function () {
      R(e.unstable_now());
    }, j);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (R) {
      R.callback = null;
    }),
    (e.unstable_forceFrameRate = function (R) {
      0 > R || 125 < R
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (M = 0 < R ? Math.floor(1e3 / R) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_next = function (R) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = d;
      }
      var B = d;
      d = j;
      try {
        return R();
      } finally {
        d = B;
      }
    }),
    (e.unstable_requestPaint = function () {
      S = !0;
    }),
    (e.unstable_runWithPriority = function (R, j) {
      switch (R) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          R = 3;
      }
      var B = d;
      d = R;
      try {
        return j();
      } finally {
        d = B;
      }
    }),
    (e.unstable_scheduleCallback = function (R, j, B) {
      var U = e.unstable_now();
      switch (
        (typeof B == 'object' && B !== null
          ? ((B = B.delay), (B = typeof B == 'number' && 0 < B ? U + B : U))
          : (B = U),
        R)
      ) {
        case 1:
          var q = -1;
          break;
        case 2:
          q = 250;
          break;
        case 5:
          q = 1073741823;
          break;
        case 4:
          q = 1e4;
          break;
        default:
          q = 5e3;
      }
      return (
        (q = B + q),
        (R = {
          id: c++,
          callback: j,
          priorityLevel: R,
          startTime: B,
          expirationTime: q,
          sortIndex: -1,
        }),
        B > U
          ? ((R.sortIndex = B),
            t(u, R),
            a(s) === null && R === a(u) && (x ? (p(E), (E = -1)) : (x = !0), N(C, B - U)))
          : ((R.sortIndex = q), t(s, R), _ || g || ((_ = !0), k || ((k = !0), b()))),
        R
      );
    }),
    (e.unstable_shouldYield = $),
    (e.unstable_wrapCallback = function (R) {
      var j = d;
      return function () {
        var B = d;
        d = j;
        try {
          return R.apply(this, arguments);
        } finally {
          d = B;
        }
      };
    }));
})(jv);
Dv.exports = jv;
var XS = Dv.exports,
  Uv = { exports: {} },
  qt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var QS = y;
function Hv(e) {
  var t = 'https://react.dev/errors/' + e;
  if (1 < arguments.length) {
    t += '?args[]=' + encodeURIComponent(arguments[1]);
    for (var a = 2; a < arguments.length; a++) t += '&args[]=' + encodeURIComponent(arguments[a]);
  }
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
function $n() {}
var Pt = {
    d: {
      f: $n,
      r: function () {
        throw Error(Hv(522));
      },
      D: $n,
      C: $n,
      L: $n,
      m: $n,
      X: $n,
      S: $n,
      M: $n,
    },
    p: 0,
    findDOMNode: null,
  },
  ZS = Symbol.for('react.portal');
function WS(e, t, a) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ZS,
    key: n == null ? null : '' + n,
    children: e,
    containerInfo: t,
    implementation: a,
  };
}
var Hr = QS.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function Vu(e, t) {
  if (e === 'font') return '';
  if (typeof t == 'string') return t === 'use-credentials' ? t : '';
}
qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Pt;
qt.createPortal = function (e, t) {
  var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)) throw Error(Hv(299));
  return WS(e, t, null, a);
};
qt.flushSync = function (e) {
  var t = Hr.T,
    a = Pt.p;
  try {
    if (((Hr.T = null), (Pt.p = 2), e)) return e();
  } finally {
    ((Hr.T = t), (Pt.p = a), Pt.d.f());
  }
};
qt.preconnect = function (e, t) {
  typeof e == 'string' &&
    (t
      ? ((t = t.crossOrigin),
        (t = typeof t == 'string' ? (t === 'use-credentials' ? t : '') : void 0))
      : (t = null),
    Pt.d.C(e, t));
};
qt.prefetchDNS = function (e) {
  typeof e == 'string' && Pt.d.D(e);
};
qt.preinit = function (e, t) {
  if (typeof e == 'string' && t && typeof t.as == 'string') {
    var a = t.as,
      n = Vu(a, t.crossOrigin),
      i = typeof t.integrity == 'string' ? t.integrity : void 0,
      o = typeof t.fetchPriority == 'string' ? t.fetchPriority : void 0;
    a === 'style'
      ? Pt.d.S(e, typeof t.precedence == 'string' ? t.precedence : void 0, {
          crossOrigin: n,
          integrity: i,
          fetchPriority: o,
        })
      : a === 'script' &&
        Pt.d.X(e, {
          crossOrigin: n,
          integrity: i,
          fetchPriority: o,
          nonce: typeof t.nonce == 'string' ? t.nonce : void 0,
        });
  }
};
qt.preinitModule = function (e, t) {
  if (typeof e == 'string')
    if (typeof t == 'object' && t !== null) {
      if (t.as == null || t.as === 'script') {
        var a = Vu(t.as, t.crossOrigin);
        Pt.d.M(e, {
          crossOrigin: a,
          integrity: typeof t.integrity == 'string' ? t.integrity : void 0,
          nonce: typeof t.nonce == 'string' ? t.nonce : void 0,
        });
      }
    } else t == null && Pt.d.M(e);
};
qt.preload = function (e, t) {
  if (typeof e == 'string' && typeof t == 'object' && t !== null && typeof t.as == 'string') {
    var a = t.as,
      n = Vu(a, t.crossOrigin);
    Pt.d.L(e, a, {
      crossOrigin: n,
      integrity: typeof t.integrity == 'string' ? t.integrity : void 0,
      nonce: typeof t.nonce == 'string' ? t.nonce : void 0,
      type: typeof t.type == 'string' ? t.type : void 0,
      fetchPriority: typeof t.fetchPriority == 'string' ? t.fetchPriority : void 0,
      referrerPolicy: typeof t.referrerPolicy == 'string' ? t.referrerPolicy : void 0,
      imageSrcSet: typeof t.imageSrcSet == 'string' ? t.imageSrcSet : void 0,
      imageSizes: typeof t.imageSizes == 'string' ? t.imageSizes : void 0,
      media: typeof t.media == 'string' ? t.media : void 0,
    });
  }
};
qt.preloadModule = function (e, t) {
  if (typeof e == 'string')
    if (t) {
      var a = Vu(t.as, t.crossOrigin);
      Pt.d.m(e, {
        as: typeof t.as == 'string' && t.as !== 'script' ? t.as : void 0,
        crossOrigin: a,
        integrity: typeof t.integrity == 'string' ? t.integrity : void 0,
      });
    } else Pt.d.m(e);
};
qt.requestFormReset = function (e) {
  Pt.d.r(e);
};
qt.unstable_batchedUpdates = function (e, t) {
  return e(t);
};
qt.useFormState = function (e, t, a) {
  return Hr.H.useFormState(e, t, a);
};
qt.useFormStatus = function () {
  return Hr.H.useHostTransitionStatus();
};
qt.version = '19.2.3';
function Vv() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vv);
    } catch (e) {
      console.error(e);
    }
}
(Vv(), (Uv.exports = qt));
var Tg = Uv.exports;
const ts = xg(Tg);
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bt = XS,
  Gv = y,
  JS = Tg;
function H(e) {
  var t = 'https://react.dev/errors/' + e;
  if (1 < arguments.length) {
    t += '?args[]=' + encodeURIComponent(arguments[1]);
    for (var a = 2; a < arguments.length; a++) t += '&args[]=' + encodeURIComponent(arguments[a]);
  }
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
function Iv(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Rl(e) {
  var t = e,
    a = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (a = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? a : null;
}
function Pv(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function qv(e) {
  if (e.tag === 31) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
      return t.dehydrated;
  }
  return null;
}
function Sm(e) {
  if (Rl(e) !== e) throw Error(H(188));
}
function ex(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Rl(e)), t === null)) throw Error(H(188));
    return t !== e ? null : e;
  }
  for (var a = e, n = t; ; ) {
    var i = a.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((n = i.return), n !== null)) {
        a = n;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === a) return (Sm(i), e);
        if (o === n) return (Sm(i), t);
        o = o.sibling;
      }
      throw Error(H(188));
    }
    if (a.return !== n.return) ((a = i), (n = o));
    else {
      for (var r = !1, l = i.child; l; ) {
        if (l === a) {
          ((r = !0), (a = i), (n = o));
          break;
        }
        if (l === n) {
          ((r = !0), (n = i), (a = o));
          break;
        }
        l = l.sibling;
      }
      if (!r) {
        for (l = o.child; l; ) {
          if (l === a) {
            ((r = !0), (a = o), (n = i));
            break;
          }
          if (l === n) {
            ((r = !0), (n = o), (a = i));
            break;
          }
          l = l.sibling;
        }
        if (!r) throw Error(H(189));
      }
    }
    if (a.alternate !== n) throw Error(H(190));
  }
  if (a.tag !== 3) throw Error(H(188));
  return a.stateNode.current === a ? e : t;
}
function Kv(e) {
  var t = e.tag;
  if (t === 5 || t === 26 || t === 27 || t === 6) return e;
  for (e = e.child; e !== null; ) {
    if (((t = Kv(e)), t !== null)) return t;
    e = e.sibling;
  }
  return null;
}
var qe = Object.assign,
  tx = Symbol.for('react.element'),
  as = Symbol.for('react.transitional.element'),
  Or = Symbol.for('react.portal'),
  fo = Symbol.for('react.fragment'),
  Yv = Symbol.for('react.strict_mode'),
  Jd = Symbol.for('react.profiler'),
  Xv = Symbol.for('react.consumer'),
  yn = Symbol.for('react.context'),
  Rg = Symbol.for('react.forward_ref'),
  ef = Symbol.for('react.suspense'),
  tf = Symbol.for('react.suspense_list'),
  Ag = Symbol.for('react.memo'),
  Dn = Symbol.for('react.lazy'),
  af = Symbol.for('react.activity'),
  ax = Symbol.for('react.memo_cache_sentinel'),
  xm = Symbol.iterator;
function hr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (xm && e[xm]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var nx = Symbol.for('react.client.reference');
function nf(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.$$typeof === nx ? null : e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case fo:
      return 'Fragment';
    case Jd:
      return 'Profiler';
    case Yv:
      return 'StrictMode';
    case ef:
      return 'Suspense';
    case tf:
      return 'SuspenseList';
    case af:
      return 'Activity';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Or:
        return 'Portal';
      case yn:
        return e.displayName || 'Context';
      case Xv:
        return (e._context.displayName || 'Context') + '.Consumer';
      case Rg:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Ag:
        return ((t = e.displayName || null), t !== null ? t : nf(e.type) || 'Memo');
      case Dn:
        ((t = e._payload), (e = e._init));
        try {
          return nf(e(t));
        } catch {}
    }
  return null;
}
var Nr = Array.isArray,
  ae = Gv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  ke = JS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  Fi = { pending: !1, data: null, method: null, action: null },
  of = [],
  go = -1;
function rn(e) {
  return { current: e };
}
function Ft(e) {
  0 > go || ((e.current = of[go]), (of[go] = null), go--);
}
function He(e, t) {
  (go++, (of[go] = e.current), (e.current = t));
}
var an = rn(null),
  ll = rn(null),
  Xn = rn(null),
  Ys = rn(null);
function Xs(e, t) {
  switch ((He(Xn, t), He(ll, e), He(an, null), t.nodeType)) {
    case 9:
    case 11:
      e = (e = t.documentElement) && (e = e.namespaceURI) ? Th(e) : 0;
      break;
    default:
      if (((e = t.tagName), (t = t.namespaceURI))) ((t = Th(t)), (e = mb(t, e)));
      else
        switch (e) {
          case 'svg':
            e = 1;
            break;
          case 'math':
            e = 2;
            break;
          default:
            e = 0;
        }
  }
  (Ft(an), He(an, e));
}
function zo() {
  (Ft(an), Ft(ll), Ft(Xn));
}
function rf(e) {
  e.memoizedState !== null && He(Ys, e);
  var t = an.current,
    a = mb(t, e.type);
  t !== a && (He(ll, e), He(an, a));
}
function Qs(e) {
  (ll.current === e && (Ft(an), Ft(ll)), Ys.current === e && (Ft(Ys), (_l._currentValue = Fi)));
}
var Jc, wm;
function _i(e) {
  if (Jc === void 0)
    try {
      throw Error();
    } catch (a) {
      var t = a.stack.trim().match(/\n( *(at )?)/);
      ((Jc = (t && t[1]) || ''),
        (wm =
          -1 <
          a.stack.indexOf(`
    at`)
            ? ' (<anonymous>)'
            : -1 < a.stack.indexOf('@')
              ? '@unknown:0:0'
              : ''));
    }
  return (
    `
` +
    Jc +
    e +
    wm
  );
}
var ed = !1;
function td(e, t) {
  if (!e || ed) return '';
  ed = !0;
  var a = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var n = {
      DetermineComponentFrameRoot: function () {
        try {
          if (t) {
            var f = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(f.prototype, 'props', {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect == 'object' && Reflect.construct)
            ) {
              try {
                Reflect.construct(f, []);
              } catch (g) {
                var d = g;
              }
              Reflect.construct(e, [], f);
            } else {
              try {
                f.call();
              } catch (g) {
                d = g;
              }
              e.call(f.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (g) {
              d = g;
            }
            (f = e()) && typeof f.catch == 'function' && f.catch(function () {});
          }
        } catch (g) {
          if (g && d && typeof g.stack == 'string') return [g.stack, d.stack];
        }
        return [null, null];
      },
    };
    n.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
    var i = Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot, 'name');
    i &&
      i.configurable &&
      Object.defineProperty(n.DetermineComponentFrameRoot, 'name', {
        value: 'DetermineComponentFrameRoot',
      });
    var o = n.DetermineComponentFrameRoot(),
      r = o[0],
      l = o[1];
    if (r && l) {
      var s = r.split(`
`),
        u = l.split(`
`);
      for (i = n = 0; n < s.length && !s[n].includes('DetermineComponentFrameRoot'); ) n++;
      for (; i < u.length && !u[i].includes('DetermineComponentFrameRoot'); ) i++;
      if (n === s.length || i === u.length)
        for (n = s.length - 1, i = u.length - 1; 1 <= n && 0 <= i && s[n] !== u[i]; ) i--;
      for (; 1 <= n && 0 <= i; n--, i--)
        if (s[n] !== u[i]) {
          if (n !== 1 || i !== 1)
            do
              if ((n--, i--, 0 > i || s[n] !== u[i])) {
                var c =
                  `
` + s[n].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    c.includes('<anonymous>') &&
                    (c = c.replace('<anonymous>', e.displayName)),
                  c
                );
              }
            while (1 <= n && 0 <= i);
          break;
        }
    }
  } finally {
    ((ed = !1), (Error.prepareStackTrace = a));
  }
  return (a = e ? e.displayName || e.name : '') ? _i(a) : '';
}
function ix(e, t) {
  switch (e.tag) {
    case 26:
    case 27:
    case 5:
      return _i(e.type);
    case 16:
      return _i('Lazy');
    case 13:
      return e.child !== t && t !== null ? _i('Suspense Fallback') : _i('Suspense');
    case 19:
      return _i('SuspenseList');
    case 0:
    case 15:
      return td(e.type, !1);
    case 11:
      return td(e.type.render, !1);
    case 1:
      return td(e.type, !0);
    case 31:
      return _i('Activity');
    default:
      return '';
  }
}
function Cm(e) {
  try {
    var t = '',
      a = null;
    do ((t += ix(e, a)), (a = e), (e = e.return));
    while (e);
    return t;
  } catch (n) {
    return (
      `
Error generating stack: ` +
      n.message +
      `
` +
      n.stack
    );
  }
}
var lf = Object.prototype.hasOwnProperty,
  Mg = bt.unstable_scheduleCallback,
  ad = bt.unstable_cancelCallback,
  ox = bt.unstable_shouldYield,
  rx = bt.unstable_requestPaint,
  ca = bt.unstable_now,
  lx = bt.unstable_getCurrentPriorityLevel,
  Qv = bt.unstable_ImmediatePriority,
  Zv = bt.unstable_UserBlockingPriority,
  Zs = bt.unstable_NormalPriority,
  sx = bt.unstable_LowPriority,
  Wv = bt.unstable_IdlePriority,
  ux = bt.log,
  cx = bt.unstable_setDisableYieldValue,
  Al = null,
  da = null;
function In(e) {
  if ((typeof ux == 'function' && cx(e), da && typeof da.setStrictMode == 'function'))
    try {
      da.setStrictMode(Al, e);
    } catch {}
}
var fa = Math.clz32 ? Math.clz32 : gx,
  dx = Math.log,
  fx = Math.LN2;
function gx(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((dx(e) / fx) | 0)) | 0);
}
var ns = 256,
  is = 262144,
  os = 4194304;
function yi(e) {
  var t = e & 42;
  if (t !== 0) return t;
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
      return 64;
    case 128:
      return 128;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
      return e & 261888;
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 3932160;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return e & 62914560;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return e;
  }
}
function Gu(e, t, a) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var i = 0,
    o = e.suspendedLanes,
    r = e.pingedLanes;
  e = e.warmLanes;
  var l = n & 134217727;
  return (
    l !== 0
      ? ((n = l & ~o),
        n !== 0
          ? (i = yi(n))
          : ((r &= l), r !== 0 ? (i = yi(r)) : a || ((a = l & ~e), a !== 0 && (i = yi(a)))))
      : ((l = n & ~o),
        l !== 0
          ? (i = yi(l))
          : r !== 0
            ? (i = yi(r))
            : a || ((a = n & ~e), a !== 0 && (i = yi(a)))),
    i === 0
      ? 0
      : t !== 0 &&
          t !== i &&
          !(t & o) &&
          ((o = i & -i), (a = t & -t), o >= a || (o === 32 && (a & 4194048) !== 0))
        ? t
        : i
  );
}
function Ml(e, t) {
  return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
}
function px(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
    case 8:
    case 64:
      return t + 250;
    case 16:
    case 32:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Jv() {
  var e = os;
  return ((os <<= 1), !(os & 62914560) && (os = 4194304), e);
}
function nd(e) {
  for (var t = [], a = 0; 31 > a; a++) t.push(e);
  return t;
}
function Ol(e, t) {
  ((e.pendingLanes |= t),
    t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
}
function mx(e, t, a, n, i, o) {
  var r = e.pendingLanes;
  ((e.pendingLanes = a),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.warmLanes = 0),
    (e.expiredLanes &= a),
    (e.entangledLanes &= a),
    (e.errorRecoveryDisabledLanes &= a),
    (e.shellSuspendCounter = 0));
  var l = e.entanglements,
    s = e.expirationTimes,
    u = e.hiddenUpdates;
  for (a = r & ~a; 0 < a; ) {
    var c = 31 - fa(a),
      f = 1 << c;
    ((l[c] = 0), (s[c] = -1));
    var d = u[c];
    if (d !== null)
      for (u[c] = null, c = 0; c < d.length; c++) {
        var g = d[c];
        g !== null && (g.lane &= -536870913);
      }
    a &= ~f;
  }
  (n !== 0 && e_(e, n, 0),
    o !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(r & ~t)));
}
function e_(e, t, a) {
  ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
  var n = 31 - fa(t);
  ((e.entangledLanes |= t), (e.entanglements[n] = e.entanglements[n] | 1073741824 | (a & 261930)));
}
function t_(e, t) {
  var a = (e.entangledLanes |= t);
  for (e = e.entanglements; a; ) {
    var n = 31 - fa(a),
      i = 1 << n;
    ((i & t) | (e[n] & t) && (e[n] |= t), (a &= ~i));
  }
}
function a_(e, t) {
  var a = t & -t;
  return ((a = a & 42 ? 1 : Og(a)), a & (e.suspendedLanes | t) ? 0 : a);
}
function Og(e) {
  switch (e) {
    case 2:
      e = 1;
      break;
    case 8:
      e = 4;
      break;
    case 32:
      e = 16;
      break;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      e = 128;
      break;
    case 268435456:
      e = 134217728;
      break;
    default:
      e = 0;
  }
  return e;
}
function Ng(e) {
  return ((e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2);
}
function n_() {
  var e = ke.p;
  return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Eb(e.type));
}
function km(e, t) {
  var a = ke.p;
  try {
    return ((ke.p = e), t());
  } finally {
    ke.p = a;
  }
}
var di = Math.random().toString(36).slice(2),
  Bt = '__reactFiber$' + di,
  ea = '__reactProps$' + di,
  Qo = '__reactContainer$' + di,
  sf = '__reactEvents$' + di,
  hx = '__reactListeners$' + di,
  vx = '__reactHandles$' + di,
  Em = '__reactResources$' + di,
  Nl = '__reactMarker$' + di;
function zg(e) {
  (delete e[Bt], delete e[ea], delete e[sf], delete e[hx], delete e[vx]);
}
function po(e) {
  var t = e[Bt];
  if (t) return t;
  for (var a = e.parentNode; a; ) {
    if ((t = a[Qo] || a[Bt])) {
      if (((a = t.alternate), t.child !== null || (a !== null && a.child !== null)))
        for (e = Nh(e); e !== null; ) {
          if ((a = e[Bt])) return a;
          e = Nh(e);
        }
      return t;
    }
    ((e = a), (a = e.parentNode));
  }
  return null;
}
function Zo(e) {
  if ((e = e[Bt] || e[Qo])) {
    var t = e.tag;
    if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
  }
  return null;
}
function zr(e) {
  var t = e.tag;
  if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
  throw Error(H(33));
}
function Co(e) {
  var t = e[Em];
  return (t || (t = e[Em] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
}
function Et(e) {
  e[Nl] = !0;
}
var i_ = new Set(),
  o_ = {};
function ji(e, t) {
  (Bo(e, t), Bo(e + 'Capture', t));
}
function Bo(e, t) {
  for (o_[e] = t, e = 0; e < t.length; e++) i_.add(t[e]);
}
var _x = RegExp(
    '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
  ),
  Fm = {},
  Tm = {};
function yx(e) {
  return lf.call(Tm, e) ? !0 : lf.call(Fm, e) ? !1 : _x.test(e) ? (Tm[e] = !0) : ((Fm[e] = !0), !1);
}
function Es(e, t, a) {
  if (yx(t))
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
          e.removeAttribute(t);
          return;
        case 'boolean':
          var n = t.toLowerCase().slice(0, 5);
          if (n !== 'data-' && n !== 'aria-') {
            e.removeAttribute(t);
            return;
          }
      }
      e.setAttribute(t, '' + a);
    }
}
function rs(e, t, a) {
  if (a === null) e.removeAttribute(t);
  else {
    switch (typeof a) {
      case 'undefined':
      case 'function':
      case 'symbol':
      case 'boolean':
        e.removeAttribute(t);
        return;
    }
    e.setAttribute(t, '' + a);
  }
}
function un(e, t, a, n) {
  if (n === null) e.removeAttribute(a);
  else {
    switch (typeof n) {
      case 'undefined':
      case 'function':
      case 'symbol':
      case 'boolean':
        e.removeAttribute(a);
        return;
    }
    e.setAttributeNS(t, a, '' + n);
  }
}
function xa(e) {
  switch (typeof e) {
    case 'bigint':
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function r_(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function bx(e, t, a) {
  var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (r) {
          ((a = '' + r), o.call(this, r));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return a;
        },
        setValue: function (r) {
          a = '' + r;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function uf(e) {
  if (!e._valueTracker) {
    var t = r_(e) ? 'checked' : 'value';
    e._valueTracker = bx(e, t, '' + e[t]);
  }
}
function l_(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var a = t.getValue(),
    n = '';
  return (
    e && (n = r_(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = n),
    e !== a ? (t.setValue(e), !0) : !1
  );
}
function Ws(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
var Sx = /[\n"\\]/g;
function Ea(e) {
  return e.replace(Sx, function (t) {
    return '\\' + t.charCodeAt(0).toString(16) + ' ';
  });
}
function cf(e, t, a, n, i, o, r, l) {
  ((e.name = ''),
    r != null && typeof r != 'function' && typeof r != 'symbol' && typeof r != 'boolean'
      ? (e.type = r)
      : e.removeAttribute('type'),
    t != null
      ? r === 'number'
        ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + xa(t))
        : e.value !== '' + xa(t) && (e.value = '' + xa(t))
      : (r !== 'submit' && r !== 'reset') || e.removeAttribute('value'),
    t != null
      ? df(e, r, xa(t))
      : a != null
        ? df(e, r, xa(a))
        : n != null && e.removeAttribute('value'),
    i == null && o != null && (e.defaultChecked = !!o),
    i != null && (e.checked = i && typeof i != 'function' && typeof i != 'symbol'),
    l != null && typeof l != 'function' && typeof l != 'symbol' && typeof l != 'boolean'
      ? (e.name = '' + xa(l))
      : e.removeAttribute('name'));
}
function s_(e, t, a, n, i, o, r, l) {
  if (
    (o != null &&
      typeof o != 'function' &&
      typeof o != 'symbol' &&
      typeof o != 'boolean' &&
      (e.type = o),
    t != null || a != null)
  ) {
    if (!((o !== 'submit' && o !== 'reset') || t != null)) {
      uf(e);
      return;
    }
    ((a = a != null ? '' + xa(a) : ''),
      (t = t != null ? '' + xa(t) : a),
      l || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = n ?? i),
    (n = typeof n != 'function' && typeof n != 'symbol' && !!n),
    (e.checked = l ? e.checked : !!n),
    (e.defaultChecked = !!n),
    r != null &&
      typeof r != 'function' &&
      typeof r != 'symbol' &&
      typeof r != 'boolean' &&
      (e.name = r),
    uf(e));
}
function df(e, t, a) {
  (t === 'number' && Ws(e.ownerDocument) === e) ||
    e.defaultValue === '' + a ||
    (e.defaultValue = '' + a);
}
function ko(e, t, a, n) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < a.length; i++) t['$' + a[i]] = !0;
    for (a = 0; a < e.length; a++)
      ((i = t.hasOwnProperty('$' + e[a].value)),
        e[a].selected !== i && (e[a].selected = i),
        i && n && (e[a].defaultSelected = !0));
  } else {
    for (a = '' + xa(a), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === a) {
        ((e[i].selected = !0), n && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function u_(e, t, a) {
  if (t != null && ((t = '' + xa(t)), t !== e.value && (e.value = t), a == null)) {
    e.defaultValue !== t && (e.defaultValue = t);
    return;
  }
  e.defaultValue = a != null ? '' + xa(a) : '';
}
function c_(e, t, a, n) {
  if (t == null) {
    if (n != null) {
      if (a != null) throw Error(H(92));
      if (Nr(n)) {
        if (1 < n.length) throw Error(H(93));
        n = n[0];
      }
      a = n;
    }
    (a == null && (a = ''), (t = a));
  }
  ((a = xa(t)),
    (e.defaultValue = a),
    (n = e.textContent),
    n === a && n !== '' && n !== null && (e.value = n),
    uf(e));
}
function Lo(e, t) {
  if (t) {
    var a = e.firstChild;
    if (a && a === e.lastChild && a.nodeType === 3) {
      a.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var xx = new Set(
  'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
    ' '
  )
);
function Rm(e, t, a) {
  var n = t.indexOf('--') === 0;
  a == null || typeof a == 'boolean' || a === ''
    ? n
      ? e.setProperty(t, '')
      : t === 'float'
        ? (e.cssFloat = '')
        : (e[t] = '')
    : n
      ? e.setProperty(t, a)
      : typeof a != 'number' || a === 0 || xx.has(t)
        ? t === 'float'
          ? (e.cssFloat = a)
          : (e[t] = ('' + a).trim())
        : (e[t] = a + 'px');
}
function d_(e, t, a) {
  if (t != null && typeof t != 'object') throw Error(H(62));
  if (((e = e.style), a != null)) {
    for (var n in a)
      !a.hasOwnProperty(n) ||
        (t != null && t.hasOwnProperty(n)) ||
        (n.indexOf('--') === 0
          ? e.setProperty(n, '')
          : n === 'float'
            ? (e.cssFloat = '')
            : (e[n] = ''));
    for (var i in t) ((n = t[i]), t.hasOwnProperty(i) && a[i] !== n && Rm(e, i, n));
  } else for (var o in t) t.hasOwnProperty(o) && Rm(e, o, t[o]);
}
function Bg(e) {
  if (e.indexOf('-') === -1) return !1;
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var wx = new Map([
    ['acceptCharset', 'accept-charset'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
    ['crossOrigin', 'crossorigin'],
    ['accentHeight', 'accent-height'],
    ['alignmentBaseline', 'alignment-baseline'],
    ['arabicForm', 'arabic-form'],
    ['baselineShift', 'baseline-shift'],
    ['capHeight', 'cap-height'],
    ['clipPath', 'clip-path'],
    ['clipRule', 'clip-rule'],
    ['colorInterpolation', 'color-interpolation'],
    ['colorInterpolationFilters', 'color-interpolation-filters'],
    ['colorProfile', 'color-profile'],
    ['colorRendering', 'color-rendering'],
    ['dominantBaseline', 'dominant-baseline'],
    ['enableBackground', 'enable-background'],
    ['fillOpacity', 'fill-opacity'],
    ['fillRule', 'fill-rule'],
    ['floodColor', 'flood-color'],
    ['floodOpacity', 'flood-opacity'],
    ['fontFamily', 'font-family'],
    ['fontSize', 'font-size'],
    ['fontSizeAdjust', 'font-size-adjust'],
    ['fontStretch', 'font-stretch'],
    ['fontStyle', 'font-style'],
    ['fontVariant', 'font-variant'],
    ['fontWeight', 'font-weight'],
    ['glyphName', 'glyph-name'],
    ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
    ['glyphOrientationVertical', 'glyph-orientation-vertical'],
    ['horizAdvX', 'horiz-adv-x'],
    ['horizOriginX', 'horiz-origin-x'],
    ['imageRendering', 'image-rendering'],
    ['letterSpacing', 'letter-spacing'],
    ['lightingColor', 'lighting-color'],
    ['markerEnd', 'marker-end'],
    ['markerMid', 'marker-mid'],
    ['markerStart', 'marker-start'],
    ['overlinePosition', 'overline-position'],
    ['overlineThickness', 'overline-thickness'],
    ['paintOrder', 'paint-order'],
    ['panose-1', 'panose-1'],
    ['pointerEvents', 'pointer-events'],
    ['renderingIntent', 'rendering-intent'],
    ['shapeRendering', 'shape-rendering'],
    ['stopColor', 'stop-color'],
    ['stopOpacity', 'stop-opacity'],
    ['strikethroughPosition', 'strikethrough-position'],
    ['strikethroughThickness', 'strikethrough-thickness'],
    ['strokeDasharray', 'stroke-dasharray'],
    ['strokeDashoffset', 'stroke-dashoffset'],
    ['strokeLinecap', 'stroke-linecap'],
    ['strokeLinejoin', 'stroke-linejoin'],
    ['strokeMiterlimit', 'stroke-miterlimit'],
    ['strokeOpacity', 'stroke-opacity'],
    ['strokeWidth', 'stroke-width'],
    ['textAnchor', 'text-anchor'],
    ['textDecoration', 'text-decoration'],
    ['textRendering', 'text-rendering'],
    ['transformOrigin', 'transform-origin'],
    ['underlinePosition', 'underline-position'],
    ['underlineThickness', 'underline-thickness'],
    ['unicodeBidi', 'unicode-bidi'],
    ['unicodeRange', 'unicode-range'],
    ['unitsPerEm', 'units-per-em'],
    ['vAlphabetic', 'v-alphabetic'],
    ['vHanging', 'v-hanging'],
    ['vIdeographic', 'v-ideographic'],
    ['vMathematical', 'v-mathematical'],
    ['vectorEffect', 'vector-effect'],
    ['vertAdvY', 'vert-adv-y'],
    ['vertOriginX', 'vert-origin-x'],
    ['vertOriginY', 'vert-origin-y'],
    ['wordSpacing', 'word-spacing'],
    ['writingMode', 'writing-mode'],
    ['xmlnsXlink', 'xmlns:xlink'],
    ['xHeight', 'x-height'],
  ]),
  Cx =
    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function Fs(e) {
  return Cx.test('' + e)
    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
    : e;
}
function bn() {}
var ff = null;
function Lg(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var mo = null,
  Eo = null;
function Am(e) {
  var t = Zo(e);
  if (t && (e = t.stateNode)) {
    var a = e[ea] || null;
    e: switch (((e = t.stateNode), t.type)) {
      case 'input':
        if (
          (cf(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ),
          (t = a.name),
          a.type === 'radio' && t != null)
        ) {
          for (a = e; a.parentNode; ) a = a.parentNode;
          for (
            a = a.querySelectorAll('input[name="' + Ea('' + t) + '"][type="radio"]'), t = 0;
            t < a.length;
            t++
          ) {
            var n = a[t];
            if (n !== e && n.form === e.form) {
              var i = n[ea] || null;
              if (!i) throw Error(H(90));
              cf(
                n,
                i.value,
                i.defaultValue,
                i.defaultValue,
                i.checked,
                i.defaultChecked,
                i.type,
                i.name
              );
            }
          }
          for (t = 0; t < a.length; t++) ((n = a[t]), n.form === e.form && l_(n));
        }
        break e;
      case 'textarea':
        u_(e, a.value, a.defaultValue);
        break e;
      case 'select':
        ((t = a.value), t != null && ko(e, !!a.multiple, t, !1));
    }
  }
}
var id = !1;
function f_(e, t, a) {
  if (id) return e(t, a);
  id = !0;
  try {
    var n = e(t);
    return n;
  } finally {
    if (
      ((id = !1),
      (mo !== null || Eo !== null) &&
        (tc(), mo && ((t = mo), (e = Eo), (Eo = mo = null), Am(t), e)))
    )
      for (t = 0; t < e.length; t++) Am(e[t]);
  }
}
function sl(e, t) {
  var a = e.stateNode;
  if (a === null) return null;
  var n = a[ea] || null;
  if (n === null) return null;
  a = n[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ((n = !n.disabled) ||
        ((e = e.type),
        (n = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !n));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (a && typeof a != 'function') throw Error(H(231, t, typeof a));
  return a;
}
var Fn = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  gf = !1;
if (Fn)
  try {
    var vr = {};
    (Object.defineProperty(vr, 'passive', {
      get: function () {
        gf = !0;
      },
    }),
      window.addEventListener('test', vr, vr),
      window.removeEventListener('test', vr, vr));
  } catch {
    gf = !1;
  }
var Pn = null,
  $g = null,
  Ts = null;
function g_() {
  if (Ts) return Ts;
  var e,
    t = $g,
    a = t.length,
    n,
    i = 'value' in Pn ? Pn.value : Pn.textContent,
    o = i.length;
  for (e = 0; e < a && t[e] === i[e]; e++);
  var r = a - e;
  for (n = 1; n <= r && t[a - n] === i[o - n]; n++);
  return (Ts = i.slice(e, 1 < n ? 1 - n : void 0));
}
function Rs(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ls() {
  return !0;
}
function Mm() {
  return !1;
}
function aa(e) {
  function t(a, n, i, o, r) {
    ((this._reactName = a),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = o),
      (this.target = r),
      (this.currentTarget = null));
    for (var l in e) e.hasOwnProperty(l) && ((a = e[l]), (this[l] = a ? a(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ls
        : Mm),
      (this.isPropagationStopped = Mm),
      this
    );
  }
  return (
    qe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a &&
          (a.preventDefault
            ? a.preventDefault()
            : typeof a.returnValue != 'unknown' && (a.returnValue = !1),
          (this.isDefaultPrevented = ls));
      },
      stopPropagation: function () {
        var a = this.nativeEvent;
        a &&
          (a.stopPropagation
            ? a.stopPropagation()
            : typeof a.cancelBubble != 'unknown' && (a.cancelBubble = !0),
          (this.isPropagationStopped = ls));
      },
      persist: function () {},
      isPersistent: ls,
    }),
    t
  );
}
var Ui = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Iu = aa(Ui),
  zl = qe({}, Ui, { view: 0, detail: 0 }),
  kx = aa(zl),
  od,
  rd,
  _r,
  Pu = qe({}, zl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Dg,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== _r &&
            (_r && e.type === 'mousemove'
              ? ((od = e.screenX - _r.screenX), (rd = e.screenY - _r.screenY))
              : (rd = od = 0),
            (_r = e)),
          od);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : rd;
    },
  }),
  Om = aa(Pu),
  Ex = qe({}, Pu, { dataTransfer: 0 }),
  Fx = aa(Ex),
  Tx = qe({}, zl, { relatedTarget: 0 }),
  ld = aa(Tx),
  Rx = qe({}, Ui, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ax = aa(Rx),
  Mx = qe({}, Ui, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Ox = aa(Mx),
  Nx = qe({}, Ui, { data: 0 }),
  Nm = aa(Nx),
  zx = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Bx = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Lx = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function $x(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Lx[e]) ? !!t[e] : !1;
}
function Dg() {
  return $x;
}
var Dx = qe({}, zl, {
    key: function (e) {
      if (e.key) {
        var t = zx[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Rs(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Bx[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Dg,
    charCode: function (e) {
      return e.type === 'keypress' ? Rs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Rs(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0;
    },
  }),
  jx = aa(Dx),
  Ux = qe({}, Pu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  zm = aa(Ux),
  Hx = qe({}, zl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Dg,
  }),
  Vx = aa(Hx),
  Gx = qe({}, Ui, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ix = aa(Gx),
  Px = qe({}, Pu, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  qx = aa(Px),
  Kx = qe({}, Ui, { newState: 0, oldState: 0 }),
  Yx = aa(Kx),
  Xx = [9, 13, 27, 32],
  jg = Fn && 'CompositionEvent' in window,
  Vr = null;
Fn && 'documentMode' in document && (Vr = document.documentMode);
var Qx = Fn && 'TextEvent' in window && !Vr,
  p_ = Fn && (!jg || (Vr && 8 < Vr && 11 >= Vr)),
  Bm = String.fromCharCode(32),
  Lm = !1;
function m_(e, t) {
  switch (e) {
    case 'keyup':
      return Xx.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function h_(e) {
  return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
}
var ho = !1;
function Zx(e, t) {
  switch (e) {
    case 'compositionend':
      return h_(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Lm = !0), Bm);
    case 'textInput':
      return ((e = t.data), e === Bm && Lm ? null : e);
    default:
      return null;
  }
}
function Wx(e, t) {
  if (ho)
    return e === 'compositionend' || (!jg && m_(e, t))
      ? ((e = g_()), (Ts = $g = Pn = null), (ho = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return p_ && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Jx = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function $m(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Jx[e.type] : t === 'textarea';
}
function v_(e, t, a, n) {
  (mo ? (Eo ? Eo.push(n) : (Eo = [n])) : (mo = n),
    (t = hu(t, 'onChange')),
    0 < t.length &&
      ((a = new Iu('onChange', 'change', null, a, n)), e.push({ event: a, listeners: t })));
}
var Gr = null,
  ul = null;
function ew(e) {
  fb(e, 0);
}
function qu(e) {
  var t = zr(e);
  if (l_(t)) return e;
}
function Dm(e, t) {
  if (e === 'change') return t;
}
var __ = !1;
if (Fn) {
  var sd;
  if (Fn) {
    var ud = 'oninput' in document;
    if (!ud) {
      var jm = document.createElement('div');
      (jm.setAttribute('oninput', 'return;'), (ud = typeof jm.oninput == 'function'));
    }
    sd = ud;
  } else sd = !1;
  __ = sd && (!document.documentMode || 9 < document.documentMode);
}
function Um() {
  Gr && (Gr.detachEvent('onpropertychange', y_), (ul = Gr = null));
}
function y_(e) {
  if (e.propertyName === 'value' && qu(ul)) {
    var t = [];
    (v_(t, ul, e, Lg(e)), f_(ew, t));
  }
}
function tw(e, t, a) {
  e === 'focusin'
    ? (Um(), (Gr = t), (ul = a), Gr.attachEvent('onpropertychange', y_))
    : e === 'focusout' && Um();
}
function aw(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return qu(ul);
}
function nw(e, t) {
  if (e === 'click') return qu(t);
}
function iw(e, t) {
  if (e === 'input' || e === 'change') return qu(t);
}
function ow(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ma = typeof Object.is == 'function' ? Object.is : ow;
function cl(e, t) {
  if (ma(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var a = Object.keys(e),
    n = Object.keys(t);
  if (a.length !== n.length) return !1;
  for (n = 0; n < a.length; n++) {
    var i = a[n];
    if (!lf.call(t, i) || !ma(e[i], t[i])) return !1;
  }
  return !0;
}
function Hm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Vm(e, t) {
  var a = Hm(e);
  e = 0;
  for (var n; a; ) {
    if (a.nodeType === 3) {
      if (((n = e + a.textContent.length), e <= t && n >= t)) return { node: a, offset: t - e };
      e = n;
    }
    e: {
      for (; a; ) {
        if (a.nextSibling) {
          a = a.nextSibling;
          break e;
        }
        a = a.parentNode;
      }
      a = void 0;
    }
    a = Hm(a);
  }
}
function b_(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? b_(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function S_(e) {
  e =
    e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
      ? e.ownerDocument.defaultView
      : window;
  for (var t = Ws(e.document); t instanceof e.HTMLIFrameElement; ) {
    try {
      var a = typeof t.contentWindow.location.href == 'string';
    } catch {
      a = !1;
    }
    if (a) e = t.contentWindow;
    else break;
    t = Ws(e.document);
  }
  return t;
}
function Ug(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
var rw = Fn && 'documentMode' in document && 11 >= document.documentMode,
  vo = null,
  pf = null,
  Ir = null,
  mf = !1;
function Gm(e, t, a) {
  var n = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
  mf ||
    vo == null ||
    vo !== Ws(n) ||
    ((n = vo),
    'selectionStart' in n && Ug(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = ((n.ownerDocument && n.ownerDocument.defaultView) || window).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (Ir && cl(Ir, n)) ||
      ((Ir = n),
      (n = hu(pf, 'onSelect')),
      0 < n.length &&
        ((t = new Iu('onSelect', 'select', null, t, a)),
        e.push({ event: t, listeners: n }),
        (t.target = vo))));
}
function pi(e, t) {
  var a = {};
  return (
    (a[e.toLowerCase()] = t.toLowerCase()),
    (a['Webkit' + e] = 'webkit' + t),
    (a['Moz' + e] = 'moz' + t),
    a
  );
}
var _o = {
    animationend: pi('Animation', 'AnimationEnd'),
    animationiteration: pi('Animation', 'AnimationIteration'),
    animationstart: pi('Animation', 'AnimationStart'),
    transitionrun: pi('Transition', 'TransitionRun'),
    transitionstart: pi('Transition', 'TransitionStart'),
    transitioncancel: pi('Transition', 'TransitionCancel'),
    transitionend: pi('Transition', 'TransitionEnd'),
  },
  cd = {},
  x_ = {};
Fn &&
  ((x_ = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete _o.animationend.animation,
    delete _o.animationiteration.animation,
    delete _o.animationstart.animation),
  'TransitionEvent' in window || delete _o.transitionend.transition);
function Hi(e) {
  if (cd[e]) return cd[e];
  if (!_o[e]) return e;
  var t = _o[e],
    a;
  for (a in t) if (t.hasOwnProperty(a) && a in x_) return (cd[e] = t[a]);
  return e;
}
var w_ = Hi('animationend'),
  C_ = Hi('animationiteration'),
  k_ = Hi('animationstart'),
  lw = Hi('transitionrun'),
  sw = Hi('transitionstart'),
  uw = Hi('transitioncancel'),
  E_ = Hi('transitionend'),
  F_ = new Map(),
  hf =
    'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
hf.push('scrollEnd');
function Pa(e, t) {
  (F_.set(e, t), ji(t, [e]));
}
var Js =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var t = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == 'object' && e !== null && typeof e.message == 'string'
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', e);
            return;
          }
          console.error(e);
        },
  ba = [],
  yo = 0,
  Hg = 0;
function Ku() {
  for (var e = yo, t = (Hg = yo = 0); t < e; ) {
    var a = ba[t];
    ba[t++] = null;
    var n = ba[t];
    ba[t++] = null;
    var i = ba[t];
    ba[t++] = null;
    var o = ba[t];
    if (((ba[t++] = null), n !== null && i !== null)) {
      var r = n.pending;
      (r === null ? (i.next = i) : ((i.next = r.next), (r.next = i)), (n.pending = i));
    }
    o !== 0 && T_(a, i, o);
  }
}
function Yu(e, t, a, n) {
  ((ba[yo++] = e),
    (ba[yo++] = t),
    (ba[yo++] = a),
    (ba[yo++] = n),
    (Hg |= n),
    (e.lanes |= n),
    (e = e.alternate),
    e !== null && (e.lanes |= n));
}
function Vg(e, t, a, n) {
  return (Yu(e, t, a, n), eu(e));
}
function Vi(e, t) {
  return (Yu(e, null, null, t), eu(e));
}
function T_(e, t, a) {
  e.lanes |= a;
  var n = e.alternate;
  n !== null && (n.lanes |= a);
  for (var i = !1, o = e.return; o !== null; )
    ((o.childLanes |= a),
      (n = o.alternate),
      n !== null && (n.childLanes |= a),
      o.tag === 22 && ((e = o.stateNode), e === null || e._visibility & 1 || (i = !0)),
      (e = o),
      (o = o.return));
  return e.tag === 3
    ? ((o = e.stateNode),
      i &&
        t !== null &&
        ((i = 31 - fa(a)),
        (e = o.hiddenUpdates),
        (n = e[i]),
        n === null ? (e[i] = [t]) : n.push(t),
        (t.lane = a | 536870912)),
      o)
    : null;
}
function eu(e) {
  if (50 < Jr) throw ((Jr = 0), ($f = null), Error(H(185)));
  for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
  return e.tag === 3 ? e.stateNode : null;
}
var bo = {};
function cw(e, t, a, n) {
  ((this.tag = e),
    (this.key = a),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.refCleanup = this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function ra(e, t, a, n) {
  return new cw(e, t, a, n);
}
function Gg(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function wn(e, t) {
  var a = e.alternate;
  return (
    a === null
      ? ((a = ra(e.tag, t, e.key, e.mode)),
        (a.elementType = e.elementType),
        (a.type = e.type),
        (a.stateNode = e.stateNode),
        (a.alternate = e),
        (e.alternate = a))
      : ((a.pendingProps = t),
        (a.type = e.type),
        (a.flags = 0),
        (a.subtreeFlags = 0),
        (a.deletions = null)),
    (a.flags = e.flags & 65011712),
    (a.childLanes = e.childLanes),
    (a.lanes = e.lanes),
    (a.child = e.child),
    (a.memoizedProps = e.memoizedProps),
    (a.memoizedState = e.memoizedState),
    (a.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (a.sibling = e.sibling),
    (a.index = e.index),
    (a.ref = e.ref),
    (a.refCleanup = e.refCleanup),
    a
  );
}
function R_(e, t) {
  e.flags &= 65011714;
  var a = e.alternate;
  return (
    a === null
      ? ((e.childLanes = 0),
        (e.lanes = t),
        (e.child = null),
        (e.subtreeFlags = 0),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.updateQueue = null),
        (e.dependencies = null),
        (e.stateNode = null))
      : ((e.childLanes = a.childLanes),
        (e.lanes = a.lanes),
        (e.child = a.child),
        (e.subtreeFlags = 0),
        (e.deletions = null),
        (e.memoizedProps = a.memoizedProps),
        (e.memoizedState = a.memoizedState),
        (e.updateQueue = a.updateQueue),
        (e.type = a.type),
        (t = a.dependencies),
        (e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
    e
  );
}
function As(e, t, a, n, i, o) {
  var r = 0;
  if (((n = e), typeof e == 'function')) Gg(e) && (r = 1);
  else if (typeof e == 'string')
    r = m2(e, a, an.current) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5;
  else
    e: switch (e) {
      case af:
        return ((e = ra(31, a, t, i)), (e.elementType = af), (e.lanes = o), e);
      case fo:
        return Ti(a.children, i, o, t);
      case Yv:
        ((r = 8), (i |= 24));
        break;
      case Jd:
        return ((e = ra(12, a, t, i | 2)), (e.elementType = Jd), (e.lanes = o), e);
      case ef:
        return ((e = ra(13, a, t, i)), (e.elementType = ef), (e.lanes = o), e);
      case tf:
        return ((e = ra(19, a, t, i)), (e.elementType = tf), (e.lanes = o), e);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case yn:
              r = 10;
              break e;
            case Xv:
              r = 9;
              break e;
            case Rg:
              r = 11;
              break e;
            case Ag:
              r = 14;
              break e;
            case Dn:
              ((r = 16), (n = null));
              break e;
          }
        ((r = 29), (a = Error(H(130, e === null ? 'null' : typeof e, ''))), (n = null));
    }
  return ((t = ra(r, a, t, i)), (t.elementType = e), (t.type = n), (t.lanes = o), t);
}
function Ti(e, t, a, n) {
  return ((e = ra(7, e, n, t)), (e.lanes = a), e);
}
function dd(e, t, a) {
  return ((e = ra(6, e, null, t)), (e.lanes = a), e);
}
function A_(e) {
  var t = ra(18, null, null, 0);
  return ((t.stateNode = e), t);
}
function fd(e, t, a) {
  return (
    (t = ra(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = a),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
var Im = new WeakMap();
function Fa(e, t) {
  if (typeof e == 'object' && e !== null) {
    var a = Im.get(e);
    return a !== void 0 ? a : ((t = { value: e, source: t, stack: Cm(t) }), Im.set(e, t), t);
  }
  return { value: e, source: t, stack: Cm(t) };
}
var So = [],
  xo = 0,
  tu = null,
  dl = 0,
  wa = [],
  Ca = 0,
  oi = null,
  Wa = 1,
  Ja = '';
function vn(e, t) {
  ((So[xo++] = dl), (So[xo++] = tu), (tu = e), (dl = t));
}
function M_(e, t, a) {
  ((wa[Ca++] = Wa), (wa[Ca++] = Ja), (wa[Ca++] = oi), (oi = e));
  var n = Wa;
  e = Ja;
  var i = 32 - fa(n) - 1;
  ((n &= ~(1 << i)), (a += 1));
  var o = 32 - fa(t) + i;
  if (30 < o) {
    var r = i - (i % 5);
    ((o = (n & ((1 << r) - 1)).toString(32)),
      (n >>= r),
      (i -= r),
      (Wa = (1 << (32 - fa(t) + i)) | (a << i) | n),
      (Ja = o + e));
  } else ((Wa = (1 << o) | (a << i) | n), (Ja = e));
}
function Ig(e) {
  e.return !== null && (vn(e, 1), M_(e, 1, 0));
}
function Pg(e) {
  for (; e === tu; ) ((tu = So[--xo]), (So[xo] = null), (dl = So[--xo]), (So[xo] = null));
  for (; e === oi; )
    ((oi = wa[--Ca]),
      (wa[Ca] = null),
      (Ja = wa[--Ca]),
      (wa[Ca] = null),
      (Wa = wa[--Ca]),
      (wa[Ca] = null));
}
function O_(e, t) {
  ((wa[Ca++] = Wa), (wa[Ca++] = Ja), (wa[Ca++] = oi), (Wa = t.id), (Ja = t.overflow), (oi = e));
}
var Lt = null,
  Ie = null,
  pe = !1,
  Qn = null,
  Ta = !1,
  vf = Error(H(519));
function ri(e) {
  var t = Error(
    H(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? 'text' : 'HTML', '')
  );
  throw (fl(Fa(t, e)), vf);
}
function Pm(e) {
  var t = e.stateNode,
    a = e.type,
    n = e.memoizedProps;
  switch (((t[Bt] = e), (t[ea] = n), a)) {
    case 'dialog':
      (ue('cancel', t), ue('close', t));
      break;
    case 'iframe':
    case 'object':
    case 'embed':
      ue('load', t);
      break;
    case 'video':
    case 'audio':
      for (a = 0; a < hl.length; a++) ue(hl[a], t);
      break;
    case 'source':
      ue('error', t);
      break;
    case 'img':
    case 'image':
    case 'link':
      (ue('error', t), ue('load', t));
      break;
    case 'details':
      ue('toggle', t);
      break;
    case 'input':
      (ue('invalid', t),
        s_(t, n.value, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name, !0));
      break;
    case 'select':
      ue('invalid', t);
      break;
    case 'textarea':
      (ue('invalid', t), c_(t, n.value, n.defaultValue, n.children));
  }
  ((a = n.children),
    (typeof a != 'string' && typeof a != 'number' && typeof a != 'bigint') ||
    t.textContent === '' + a ||
    n.suppressHydrationWarning === !0 ||
    pb(t.textContent, a)
      ? (n.popover != null && (ue('beforetoggle', t), ue('toggle', t)),
        n.onScroll != null && ue('scroll', t),
        n.onScrollEnd != null && ue('scrollend', t),
        n.onClick != null && (t.onclick = bn),
        (t = !0))
      : (t = !1),
    t || ri(e, !0));
}
function qm(e) {
  for (Lt = e.return; Lt; )
    switch (Lt.tag) {
      case 5:
      case 31:
      case 13:
        Ta = !1;
        return;
      case 27:
      case 3:
        Ta = !0;
        return;
      default:
        Lt = Lt.return;
    }
}
function Ki(e) {
  if (e !== Lt) return !1;
  if (!pe) return (qm(e), (pe = !0), !1);
  var t = e.tag,
    a;
  if (
    ((a = t !== 3 && t !== 27) &&
      ((a = t === 5) &&
        ((a = e.type), (a = !(a !== 'form' && a !== 'button') || Vf(e.type, e.memoizedProps))),
      (a = !a)),
    a && Ie && ri(e),
    qm(e),
    t === 13)
  ) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(H(317));
    Ie = Oh(e);
  } else if (t === 31) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(H(317));
    Ie = Oh(e);
  } else
    t === 27
      ? ((t = Ie), fi(e.type) ? ((e = qf), (qf = null), (Ie = e)) : (Ie = t))
      : (Ie = Lt ? Aa(e.stateNode.nextSibling) : null);
  return !0;
}
function Ni() {
  ((Ie = Lt = null), (pe = !1));
}
function gd() {
  var e = Qn;
  return (e !== null && (Zt === null ? (Zt = e) : Zt.push.apply(Zt, e), (Qn = null)), e);
}
function fl(e) {
  Qn === null ? (Qn = [e]) : Qn.push(e);
}
var _f = rn(null),
  Gi = null,
  Sn = null;
function Un(e, t, a) {
  (He(_f, t._currentValue), (t._currentValue = a));
}
function Cn(e) {
  ((e._currentValue = _f.current), Ft(_f));
}
function yf(e, t, a) {
  for (; e !== null; ) {
    var n = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
        : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
      e === a)
    )
      break;
    e = e.return;
  }
}
function bf(e, t, a, n) {
  var i = e.child;
  for (i !== null && (i.return = e); i !== null; ) {
    var o = i.dependencies;
    if (o !== null) {
      var r = i.child;
      o = o.firstContext;
      e: for (; o !== null; ) {
        var l = o;
        o = i;
        for (var s = 0; s < t.length; s++)
          if (l.context === t[s]) {
            ((o.lanes |= a),
              (l = o.alternate),
              l !== null && (l.lanes |= a),
              yf(o.return, a, e),
              n || (r = null));
            break e;
          }
        o = l.next;
      }
    } else if (i.tag === 18) {
      if (((r = i.return), r === null)) throw Error(H(341));
      ((r.lanes |= a), (o = r.alternate), o !== null && (o.lanes |= a), yf(r, a, e), (r = null));
    } else r = i.child;
    if (r !== null) r.return = i;
    else
      for (r = i; r !== null; ) {
        if (r === e) {
          r = null;
          break;
        }
        if (((i = r.sibling), i !== null)) {
          ((i.return = r.return), (r = i));
          break;
        }
        r = r.return;
      }
    i = r;
  }
}
function Wo(e, t, a, n) {
  e = null;
  for (var i = t, o = !1; i !== null; ) {
    if (!o) {
      if (i.flags & 524288) o = !0;
      else if (i.flags & 262144) break;
    }
    if (i.tag === 10) {
      var r = i.alternate;
      if (r === null) throw Error(H(387));
      if (((r = r.memoizedProps), r !== null)) {
        var l = i.type;
        ma(i.pendingProps.value, r.value) || (e !== null ? e.push(l) : (e = [l]));
      }
    } else if (i === Ys.current) {
      if (((r = i.alternate), r === null)) throw Error(H(387));
      r.memoizedState.memoizedState !== i.memoizedState.memoizedState &&
        (e !== null ? e.push(_l) : (e = [_l]));
    }
    i = i.return;
  }
  (e !== null && bf(t, e, a, n), (t.flags |= 262144));
}
function au(e) {
  for (e = e.firstContext; e !== null; ) {
    if (!ma(e.context._currentValue, e.memoizedValue)) return !0;
    e = e.next;
  }
  return !1;
}
function zi(e) {
  ((Gi = e), (Sn = null), (e = e.dependencies), e !== null && (e.firstContext = null));
}
function $t(e) {
  return N_(Gi, e);
}
function ss(e, t) {
  return (Gi === null && zi(e), N_(e, t));
}
function N_(e, t) {
  var a = t._currentValue;
  if (((t = { context: t, memoizedValue: a, next: null }), Sn === null)) {
    if (e === null) throw Error(H(308));
    ((Sn = t), (e.dependencies = { lanes: 0, firstContext: t }), (e.flags |= 524288));
  } else Sn = Sn.next = t;
  return a;
}
var dw =
    typeof AbortController < 'u'
      ? AbortController
      : function () {
          var e = [],
            t = (this.signal = {
              aborted: !1,
              addEventListener: function (a, n) {
                e.push(n);
              },
            });
          this.abort = function () {
            ((t.aborted = !0),
              e.forEach(function (a) {
                return a();
              }));
          };
        },
  fw = bt.unstable_scheduleCallback,
  gw = bt.unstable_NormalPriority,
  pt = {
    $$typeof: yn,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0,
  };
function qg() {
  return { controller: new dw(), data: new Map(), refCount: 0 };
}
function Bl(e) {
  (e.refCount--,
    e.refCount === 0 &&
      fw(gw, function () {
        e.controller.abort();
      }));
}
var Pr = null,
  Sf = 0,
  $o = 0,
  Fo = null;
function pw(e, t) {
  if (Pr === null) {
    var a = (Pr = []);
    ((Sf = 0),
      ($o = vp()),
      (Fo = {
        status: 'pending',
        value: void 0,
        then: function (n) {
          a.push(n);
        },
      }));
  }
  return (Sf++, t.then(Km, Km), t);
}
function Km() {
  if (--Sf === 0 && Pr !== null) {
    Fo !== null && (Fo.status = 'fulfilled');
    var e = Pr;
    ((Pr = null), ($o = 0), (Fo = null));
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
}
function mw(e, t) {
  var a = [],
    n = {
      status: 'pending',
      value: null,
      reason: null,
      then: function (i) {
        a.push(i);
      },
    };
  return (
    e.then(
      function () {
        ((n.status = 'fulfilled'), (n.value = t));
        for (var i = 0; i < a.length; i++) (0, a[i])(t);
      },
      function (i) {
        for (n.status = 'rejected', n.reason = i, i = 0; i < a.length; i++) (0, a[i])(void 0);
      }
    ),
    n
  );
}
var Ym = ae.S;
ae.S = function (e, t) {
  ((Ky = ca()),
    typeof t == 'object' && t !== null && typeof t.then == 'function' && pw(e, t),
    Ym !== null && Ym(e, t));
};
var Ri = rn(null);
function Kg() {
  var e = Ri.current;
  return e !== null ? e : $e.pooledCache;
}
function Ms(e, t) {
  t === null ? He(Ri, Ri.current) : He(Ri, t.pool);
}
function z_() {
  var e = Kg();
  return e === null ? null : { parent: pt._currentValue, pool: e };
}
var Jo = Error(H(460)),
  Yg = Error(H(474)),
  Xu = Error(H(542)),
  nu = { then: function () {} };
function Xm(e) {
  return ((e = e.status), e === 'fulfilled' || e === 'rejected');
}
function B_(e, t, a) {
  switch (((a = e[a]), a === void 0 ? e.push(t) : a !== t && (t.then(bn, bn), (t = a)), t.status)) {
    case 'fulfilled':
      return t.value;
    case 'rejected':
      throw ((e = t.reason), Zm(e), e);
    default:
      if (typeof t.status == 'string') t.then(bn, bn);
      else {
        if (((e = $e), e !== null && 100 < e.shellSuspendCounter)) throw Error(H(482));
        ((e = t),
          (e.status = 'pending'),
          e.then(
            function (n) {
              if (t.status === 'pending') {
                var i = t;
                ((i.status = 'fulfilled'), (i.value = n));
              }
            },
            function (n) {
              if (t.status === 'pending') {
                var i = t;
                ((i.status = 'rejected'), (i.reason = n));
              }
            }
          ));
      }
      switch (t.status) {
        case 'fulfilled':
          return t.value;
        case 'rejected':
          throw ((e = t.reason), Zm(e), e);
      }
      throw ((Ai = t), Jo);
  }
}
function bi(e) {
  try {
    var t = e._init;
    return t(e._payload);
  } catch (a) {
    throw a !== null && typeof a == 'object' && typeof a.then == 'function' ? ((Ai = a), Jo) : a;
  }
}
var Ai = null;
function Qm() {
  if (Ai === null) throw Error(H(459));
  var e = Ai;
  return ((Ai = null), e);
}
function Zm(e) {
  if (e === Jo || e === Xu) throw Error(H(483));
}
var To = null,
  gl = 0;
function us(e) {
  var t = gl;
  return ((gl += 1), To === null && (To = []), B_(To, e, t));
}
function yr(e, t) {
  ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
}
function cs(e, t) {
  throw t.$$typeof === tx
    ? Error(H(525))
    : ((e = Object.prototype.toString.call(t)),
      Error(
        H(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)
      ));
}
function L_(e) {
  function t(m, p) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [p]), (m.flags |= 16)) : h.push(p);
    }
  }
  function a(m, p) {
    if (!e) return null;
    for (; p !== null; ) (t(m, p), (p = p.sibling));
    return null;
  }
  function n(m) {
    for (var p = new Map(); m !== null; )
      (m.key !== null ? p.set(m.key, m) : p.set(m.index, m), (m = m.sibling));
    return p;
  }
  function i(m, p) {
    return ((m = wn(m, p)), (m.index = 0), (m.sibling = null), m);
  }
  function o(m, p, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < p ? ((m.flags |= 67108866), p) : h)
            : ((m.flags |= 67108866), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function r(m) {
    return (e && m.alternate === null && (m.flags |= 67108866), m);
  }
  function l(m, p, h, v) {
    return p === null || p.tag !== 6
      ? ((p = dd(h, m.mode, v)), (p.return = m), p)
      : ((p = i(p, h)), (p.return = m), p);
  }
  function s(m, p, h, v) {
    var C = h.type;
    return C === fo
      ? c(m, p, h.props.children, v, h.key)
      : p !== null &&
          (p.elementType === C ||
            (typeof C == 'object' && C !== null && C.$$typeof === Dn && bi(C) === p.type))
        ? ((p = i(p, h.props)), yr(p, h), (p.return = m), p)
        : ((p = As(h.type, h.key, h.props, null, m.mode, v)), yr(p, h), (p.return = m), p);
  }
  function u(m, p, h, v) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== h.containerInfo ||
      p.stateNode.implementation !== h.implementation
      ? ((p = fd(h, m.mode, v)), (p.return = m), p)
      : ((p = i(p, h.children || [])), (p.return = m), p);
  }
  function c(m, p, h, v, C) {
    return p === null || p.tag !== 7
      ? ((p = Ti(h, m.mode, v, C)), (p.return = m), p)
      : ((p = i(p, h)), (p.return = m), p);
  }
  function f(m, p, h) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number' || typeof p == 'bigint')
      return ((p = dd('' + p, m.mode, h)), (p.return = m), p);
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case as:
          return ((h = As(p.type, p.key, p.props, null, m.mode, h)), yr(h, p), (h.return = m), h);
        case Or:
          return ((p = fd(p, m.mode, h)), (p.return = m), p);
        case Dn:
          return ((p = bi(p)), f(m, p, h));
      }
      if (Nr(p) || hr(p)) return ((p = Ti(p, m.mode, h, null)), (p.return = m), p);
      if (typeof p.then == 'function') return f(m, us(p), h);
      if (p.$$typeof === yn) return f(m, ss(m, p), h);
      cs(m, p);
    }
    return null;
  }
  function d(m, p, h, v) {
    var C = p !== null ? p.key : null;
    if ((typeof h == 'string' && h !== '') || typeof h == 'number' || typeof h == 'bigint')
      return C !== null ? null : l(m, p, '' + h, v);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case as:
          return h.key === C ? s(m, p, h, v) : null;
        case Or:
          return h.key === C ? u(m, p, h, v) : null;
        case Dn:
          return ((h = bi(h)), d(m, p, h, v));
      }
      if (Nr(h) || hr(h)) return C !== null ? null : c(m, p, h, v, null);
      if (typeof h.then == 'function') return d(m, p, us(h), v);
      if (h.$$typeof === yn) return d(m, p, ss(m, h), v);
      cs(m, h);
    }
    return null;
  }
  function g(m, p, h, v, C) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number' || typeof v == 'bigint')
      return ((m = m.get(h) || null), l(p, m, '' + v, C));
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case as:
          return ((m = m.get(v.key === null ? h : v.key) || null), s(p, m, v, C));
        case Or:
          return ((m = m.get(v.key === null ? h : v.key) || null), u(p, m, v, C));
        case Dn:
          return ((v = bi(v)), g(m, p, h, v, C));
      }
      if (Nr(v) || hr(v)) return ((m = m.get(h) || null), c(p, m, v, C, null));
      if (typeof v.then == 'function') return g(m, p, h, us(v), C);
      if (v.$$typeof === yn) return g(m, p, h, ss(p, v), C);
      cs(p, v);
    }
    return null;
  }
  function _(m, p, h, v) {
    for (var C = null, k = null, E = p, M = (p = 0), z = null; E !== null && M < h.length; M++) {
      E.index > M ? ((z = E), (E = null)) : (z = E.sibling);
      var $ = d(m, E, h[M], v);
      if ($ === null) {
        E === null && (E = z);
        break;
      }
      (e && E && $.alternate === null && t(m, E),
        (p = o($, p, M)),
        k === null ? (C = $) : (k.sibling = $),
        (k = $),
        (E = z));
    }
    if (M === h.length) return (a(m, E), pe && vn(m, M), C);
    if (E === null) {
      for (; M < h.length; M++)
        ((E = f(m, h[M], v)),
          E !== null && ((p = o(E, p, M)), k === null ? (C = E) : (k.sibling = E), (k = E)));
      return (pe && vn(m, M), C);
    }
    for (E = n(E); M < h.length; M++)
      ((z = g(E, m, M, h[M], v)),
        z !== null &&
          (e && z.alternate !== null && E.delete(z.key === null ? M : z.key),
          (p = o(z, p, M)),
          k === null ? (C = z) : (k.sibling = z),
          (k = z)));
    return (
      e &&
        E.forEach(function (V) {
          return t(m, V);
        }),
      pe && vn(m, M),
      C
    );
  }
  function x(m, p, h, v) {
    if (h == null) throw Error(H(151));
    for (
      var C = null, k = null, E = p, M = (p = 0), z = null, $ = h.next();
      E !== null && !$.done;
      M++, $ = h.next()
    ) {
      E.index > M ? ((z = E), (E = null)) : (z = E.sibling);
      var V = d(m, E, $.value, v);
      if (V === null) {
        E === null && (E = z);
        break;
      }
      (e && E && V.alternate === null && t(m, E),
        (p = o(V, p, M)),
        k === null ? (C = V) : (k.sibling = V),
        (k = V),
        (E = z));
    }
    if ($.done) return (a(m, E), pe && vn(m, M), C);
    if (E === null) {
      for (; !$.done; M++, $ = h.next())
        (($ = f(m, $.value, v)),
          $ !== null && ((p = o($, p, M)), k === null ? (C = $) : (k.sibling = $), (k = $)));
      return (pe && vn(m, M), C);
    }
    for (E = n(E); !$.done; M++, $ = h.next())
      (($ = g(E, m, M, $.value, v)),
        $ !== null &&
          (e && $.alternate !== null && E.delete($.key === null ? M : $.key),
          (p = o($, p, M)),
          k === null ? (C = $) : (k.sibling = $),
          (k = $)));
    return (
      e &&
        E.forEach(function (b) {
          return t(m, b);
        }),
      pe && vn(m, M),
      C
    );
  }
  function S(m, p, h, v) {
    if (
      (typeof h == 'object' &&
        h !== null &&
        h.type === fo &&
        h.key === null &&
        (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case as:
          e: {
            for (var C = h.key; p !== null; ) {
              if (p.key === C) {
                if (((C = h.type), C === fo)) {
                  if (p.tag === 7) {
                    (a(m, p.sibling), (v = i(p, h.props.children)), (v.return = m), (m = v));
                    break e;
                  }
                } else if (
                  p.elementType === C ||
                  (typeof C == 'object' && C !== null && C.$$typeof === Dn && bi(C) === p.type)
                ) {
                  (a(m, p.sibling), (v = i(p, h.props)), yr(v, h), (v.return = m), (m = v));
                  break e;
                }
                a(m, p);
                break;
              } else t(m, p);
              p = p.sibling;
            }
            h.type === fo
              ? ((v = Ti(h.props.children, m.mode, v, h.key)), (v.return = m), (m = v))
              : ((v = As(h.type, h.key, h.props, null, m.mode, v)),
                yr(v, h),
                (v.return = m),
                (m = v));
          }
          return r(m);
        case Or:
          e: {
            for (C = h.key; p !== null; ) {
              if (p.key === C)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === h.containerInfo &&
                  p.stateNode.implementation === h.implementation
                ) {
                  (a(m, p.sibling), (v = i(p, h.children || [])), (v.return = m), (m = v));
                  break e;
                } else {
                  a(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            ((v = fd(h, m.mode, v)), (v.return = m), (m = v));
          }
          return r(m);
        case Dn:
          return ((h = bi(h)), S(m, p, h, v));
      }
      if (Nr(h)) return _(m, p, h, v);
      if (hr(h)) {
        if (((C = hr(h)), typeof C != 'function')) throw Error(H(150));
        return ((h = C.call(h)), x(m, p, h, v));
      }
      if (typeof h.then == 'function') return S(m, p, us(h), v);
      if (h.$$typeof === yn) return S(m, p, ss(m, h), v);
      cs(m, h);
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number' || typeof h == 'bigint'
      ? ((h = '' + h),
        p !== null && p.tag === 6
          ? (a(m, p.sibling), (v = i(p, h)), (v.return = m), (m = v))
          : (a(m, p), (v = dd(h, m.mode, v)), (v.return = m), (m = v)),
        r(m))
      : a(m, p);
  }
  return function (m, p, h, v) {
    try {
      gl = 0;
      var C = S(m, p, h, v);
      return ((To = null), C);
    } catch (E) {
      if (E === Jo || E === Xu) throw E;
      var k = ra(29, E, null, m.mode);
      return ((k.lanes = v), (k.return = m), k);
    } finally {
    }
  };
}
var Bi = L_(!0),
  $_ = L_(!1),
  jn = !1;
function Xg(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null,
  };
}
function xf(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null,
      }));
}
function Zn(e) {
  return { lane: e, tag: 0, payload: null, callback: null, next: null };
}
function Wn(e, t, a) {
  var n = e.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), Ce & 2)) {
    var i = n.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (n.pending = t),
      (t = eu(e)),
      T_(e, null, a),
      t
    );
  }
  return (Yu(e, n, t, a), eu(e));
}
function qr(e, t, a) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))) {
    var n = t.lanes;
    ((n &= e.pendingLanes), (a |= n), (t.lanes = a), t_(e, a));
  }
}
function pd(e, t) {
  var a = e.updateQueue,
    n = e.alternate;
  if (n !== null && ((n = n.updateQueue), a === n)) {
    var i = null,
      o = null;
    if (((a = a.firstBaseUpdate), a !== null)) {
      do {
        var r = { lane: a.lane, tag: a.tag, payload: a.payload, callback: null, next: null };
        (o === null ? (i = o = r) : (o = o.next = r), (a = a.next));
      } while (a !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    ((a = {
      baseState: n.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: n.shared,
      callbacks: n.callbacks,
    }),
      (e.updateQueue = a));
    return;
  }
  ((e = a.lastBaseUpdate),
    e === null ? (a.firstBaseUpdate = t) : (e.next = t),
    (a.lastBaseUpdate = t));
}
var wf = !1;
function Kr() {
  if (wf) {
    var e = Fo;
    if (e !== null) throw e;
  }
}
function Yr(e, t, a, n) {
  wf = !1;
  var i = e.updateQueue;
  jn = !1;
  var o = i.firstBaseUpdate,
    r = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var s = l,
      u = s.next;
    ((s.next = null), r === null ? (o = u) : (r.next = u), (r = s));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== r && (l === null ? (c.firstBaseUpdate = u) : (l.next = u), (c.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var f = i.baseState;
    ((r = 0), (c = u = s = null), (l = o));
    do {
      var d = l.lane & -536870913,
        g = d !== l.lane;
      if (g ? (fe & d) === d : (n & d) === d) {
        (d !== 0 && d === $o && (wf = !0),
          c !== null &&
            (c = c.next = { lane: 0, tag: l.tag, payload: l.payload, callback: null, next: null }));
        e: {
          var _ = e,
            x = l;
          d = t;
          var S = a;
          switch (x.tag) {
            case 1:
              if (((_ = x.payload), typeof _ == 'function')) {
                f = _.call(S, f, d);
                break e;
              }
              f = _;
              break e;
            case 3:
              _.flags = (_.flags & -65537) | 128;
            case 0:
              if (((_ = x.payload), (d = typeof _ == 'function' ? _.call(S, f, d) : _), d == null))
                break e;
              f = qe({}, f, d);
              break e;
            case 2:
              jn = !0;
          }
        }
        ((d = l.callback),
          d !== null &&
            ((e.flags |= 64),
            g && (e.flags |= 8192),
            (g = i.callbacks),
            g === null ? (i.callbacks = [d]) : g.push(d)));
      } else
        ((g = { lane: d, tag: l.tag, payload: l.payload, callback: l.callback, next: null }),
          c === null ? ((u = c = g), (s = f)) : (c = c.next = g),
          (r |= d));
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        ((g = l), (l = g.next), (g.next = null), (i.lastBaseUpdate = g), (i.shared.pending = null));
      }
    } while (1);
    (c === null && (s = f),
      (i.baseState = s),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      o === null && (i.shared.lanes = 0),
      (si |= r),
      (e.lanes = r),
      (e.memoizedState = f));
  }
}
function D_(e, t) {
  if (typeof e != 'function') throw Error(H(191, e));
  e.call(t);
}
function j_(e, t) {
  var a = e.callbacks;
  if (a !== null) for (e.callbacks = null, e = 0; e < a.length; e++) D_(a[e], t);
}
var Do = rn(null),
  iu = rn(0);
function Wm(e, t) {
  ((e = Mn), He(iu, e), He(Do, t), (Mn = e | t.baseLanes));
}
function Cf() {
  (He(iu, Mn), He(Do, Do.current));
}
function Qg() {
  ((Mn = iu.current), Ft(Do), Ft(iu));
}
var ha = rn(null),
  Ra = null;
function Hn(e) {
  var t = e.alternate;
  (He(ot, ot.current & 1),
    He(ha, e),
    Ra === null && (t === null || Do.current !== null || t.memoizedState !== null) && (Ra = e));
}
function kf(e) {
  (He(ot, ot.current), He(ha, e), Ra === null && (Ra = e));
}
function U_(e) {
  e.tag === 22 ? (He(ot, ot.current), He(ha, e), Ra === null && (Ra = e)) : Vn();
}
function Vn() {
  (He(ot, ot.current), He(ha, ha.current));
}
function oa(e) {
  (Ft(ha), Ra === e && (Ra = null), Ft(ot));
}
var ot = rn(0);
function ou(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var a = t.memoizedState;
      if (a !== null && ((a = a.dehydrated), a === null || If(a) || Pf(a))) return t;
    } else if (
      t.tag === 19 &&
      (t.memoizedProps.revealOrder === 'forwards' ||
        t.memoizedProps.revealOrder === 'backwards' ||
        t.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
        t.memoizedProps.revealOrder === 'together')
    ) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Tn = 0,
  re = null,
  Be = null,
  dt = null,
  ru = !1,
  Ro = !1,
  Li = !1,
  lu = 0,
  pl = 0,
  Ao = null,
  hw = 0;
function tt() {
  throw Error(H(321));
}
function Zg(e, t) {
  if (t === null) return !1;
  for (var a = 0; a < t.length && a < e.length; a++) if (!ma(e[a], t[a])) return !1;
  return !0;
}
function Wg(e, t, a, n, i, o) {
  return (
    (Tn = o),
    (re = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ae.H = e === null || e.memoizedState === null ? vy : up),
    (Li = !1),
    (o = a(n, i)),
    (Li = !1),
    Ro && (o = V_(t, a, n, i)),
    H_(e),
    o
  );
}
function H_(e) {
  ae.H = ml;
  var t = Be !== null && Be.next !== null;
  if (((Tn = 0), (dt = Be = re = null), (ru = !1), (pl = 0), (Ao = null), t)) throw Error(H(300));
  e === null || vt || ((e = e.dependencies), e !== null && au(e) && (vt = !0));
}
function V_(e, t, a, n) {
  re = e;
  var i = 0;
  do {
    if ((Ro && (Ao = null), (pl = 0), (Ro = !1), 25 <= i)) throw Error(H(301));
    if (((i += 1), (dt = Be = null), e.updateQueue != null)) {
      var o = e.updateQueue;
      ((o.lastEffect = null),
        (o.events = null),
        (o.stores = null),
        o.memoCache != null && (o.memoCache.index = 0));
    }
    ((ae.H = _y), (o = t(a, n)));
  } while (Ro);
  return o;
}
function vw() {
  var e = ae.H,
    t = e.useState()[0];
  return (
    (t = typeof t.then == 'function' ? Ll(t) : t),
    (e = e.useState()[0]),
    (Be !== null ? Be.memoizedState : null) !== e && (re.flags |= 1024),
    t
  );
}
function Jg() {
  var e = lu !== 0;
  return ((lu = 0), e);
}
function ep(e, t, a) {
  ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a));
}
function tp(e) {
  if (ru) {
    for (e = e.memoizedState; e !== null; ) {
      var t = e.queue;
      (t !== null && (t.pending = null), (e = e.next));
    }
    ru = !1;
  }
  ((Tn = 0), (dt = Be = re = null), (Ro = !1), (pl = lu = 0), (Ao = null));
}
function Vt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return (dt === null ? (re.memoizedState = dt = e) : (dt = dt.next = e), dt);
}
function rt() {
  if (Be === null) {
    var e = re.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Be.next;
  var t = dt === null ? re.memoizedState : dt.next;
  if (t !== null) ((dt = t), (Be = e));
  else {
    if (e === null) throw re.alternate === null ? Error(H(467)) : Error(H(310));
    ((Be = e),
      (e = {
        memoizedState: Be.memoizedState,
        baseState: Be.baseState,
        baseQueue: Be.baseQueue,
        queue: Be.queue,
        next: null,
      }),
      dt === null ? (re.memoizedState = dt = e) : (dt = dt.next = e));
  }
  return dt;
}
function Qu() {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
}
function Ll(e) {
  var t = pl;
  return (
    (pl += 1),
    Ao === null && (Ao = []),
    (e = B_(Ao, e, t)),
    (t = re),
    (dt === null ? t.memoizedState : dt.next) === null &&
      ((t = t.alternate), (ae.H = t === null || t.memoizedState === null ? vy : up)),
    e
  );
}
function Zu(e) {
  if (e !== null && typeof e == 'object') {
    if (typeof e.then == 'function') return Ll(e);
    if (e.$$typeof === yn) return $t(e);
  }
  throw Error(H(438, String(e)));
}
function ap(e) {
  var t = null,
    a = re.updateQueue;
  if ((a !== null && (t = a.memoCache), t == null)) {
    var n = re.alternate;
    n !== null &&
      ((n = n.updateQueue),
      n !== null &&
        ((n = n.memoCache),
        n != null &&
          (t = {
            data: n.data.map(function (i) {
              return i.slice();
            }),
            index: 0,
          })));
  }
  if (
    (t == null && (t = { data: [], index: 0 }),
    a === null && ((a = Qu()), (re.updateQueue = a)),
    (a.memoCache = t),
    (a = t.data[t.index]),
    a === void 0)
  )
    for (a = t.data[t.index] = Array(e), n = 0; n < e; n++) a[n] = ax;
  return (t.index++, a);
}
function Rn(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Os(e) {
  var t = rt();
  return np(t, Be, e);
}
function np(e, t, a) {
  var n = e.queue;
  if (n === null) throw Error(H(311));
  n.lastRenderedReducer = a;
  var i = e.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var r = i.next;
      ((i.next = o.next), (o.next = r));
    }
    ((t.baseQueue = i = o), (n.pending = null));
  }
  if (((o = e.baseState), i === null)) e.memoizedState = o;
  else {
    t = i.next;
    var l = (r = null),
      s = null,
      u = t,
      c = !1;
    do {
      var f = u.lane & -536870913;
      if (f !== u.lane ? (fe & f) === f : (Tn & f) === f) {
        var d = u.revertLane;
        if (d === 0)
          (s !== null &&
            (s = s.next =
              {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
            f === $o && (c = !0));
        else if ((Tn & d) === d) {
          ((u = u.next), d === $o && (c = !0));
          continue;
        } else
          ((f = {
            lane: 0,
            revertLane: u.revertLane,
            gesture: null,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          }),
            s === null ? ((l = s = f), (r = o)) : (s = s.next = f),
            (re.lanes |= d),
            (si |= d));
        ((f = u.action), Li && a(o, f), (o = u.hasEagerState ? u.eagerState : a(o, f)));
      } else
        ((d = {
          lane: f,
          revertLane: u.revertLane,
          gesture: u.gesture,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }),
          s === null ? ((l = s = d), (r = o)) : (s = s.next = d),
          (re.lanes |= f),
          (si |= f));
      u = u.next;
    } while (u !== null && u !== t);
    if (
      (s === null ? (r = o) : (s.next = l),
      !ma(o, e.memoizedState) && ((vt = !0), c && ((a = Fo), a !== null)))
    )
      throw a;
    ((e.memoizedState = o), (e.baseState = r), (e.baseQueue = s), (n.lastRenderedState = o));
  }
  return (i === null && (n.lanes = 0), [e.memoizedState, n.dispatch]);
}
function md(e) {
  var t = rt(),
    a = t.queue;
  if (a === null) throw Error(H(311));
  a.lastRenderedReducer = e;
  var n = a.dispatch,
    i = a.pending,
    o = t.memoizedState;
  if (i !== null) {
    a.pending = null;
    var r = (i = i.next);
    do ((o = e(o, r.action)), (r = r.next));
    while (r !== i);
    (ma(o, t.memoizedState) || (vt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (a.lastRenderedState = o));
  }
  return [o, n];
}
function G_(e, t, a) {
  var n = re,
    i = rt(),
    o = pe;
  if (o) {
    if (a === void 0) throw Error(H(407));
    a = a();
  } else a = t();
  var r = !ma((Be || i).memoizedState, a);
  if (
    (r && ((i.memoizedState = a), (vt = !0)),
    (i = i.queue),
    ip(q_.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || r || (dt !== null && dt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048), jo(9, { destroy: void 0 }, P_.bind(null, n, i, a, t), null), $e === null)
    )
      throw Error(H(349));
    o || Tn & 127 || I_(n, t, a);
  }
  return a;
}
function I_(e, t, a) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: a }),
    (t = re.updateQueue),
    t === null
      ? ((t = Qu()), (re.updateQueue = t), (t.stores = [e]))
      : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
}
function P_(e, t, a, n) {
  ((t.value = a), (t.getSnapshot = n), K_(t) && Y_(e));
}
function q_(e, t, a) {
  return a(function () {
    K_(t) && Y_(e);
  });
}
function K_(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var a = t();
    return !ma(e, a);
  } catch {
    return !0;
  }
}
function Y_(e) {
  var t = Vi(e, 2);
  t !== null && Jt(t, e, 2);
}
function Ef(e) {
  var t = Vt();
  if (typeof e == 'function') {
    var a = e;
    if (((e = a()), Li)) {
      In(!0);
      try {
        a();
      } finally {
        In(!1);
      }
    }
  }
  return (
    (t.memoizedState = t.baseState = e),
    (t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rn,
      lastRenderedState: e,
    }),
    t
  );
}
function X_(e, t, a, n) {
  return ((e.baseState = a), np(e, Be, typeof n == 'function' ? n : Rn));
}
function _w(e, t, a, n, i) {
  if (Ju(e)) throw Error(H(485));
  if (((e = t.action), e !== null)) {
    var o = {
      payload: i,
      action: e,
      next: null,
      isTransition: !0,
      status: 'pending',
      value: null,
      reason: null,
      listeners: [],
      then: function (r) {
        o.listeners.push(r);
      },
    };
    (ae.T !== null ? a(!0) : (o.isTransition = !1),
      n(o),
      (a = t.pending),
      a === null
        ? ((o.next = t.pending = o), Q_(t, o))
        : ((o.next = a.next), (t.pending = a.next = o)));
  }
}
function Q_(e, t) {
  var a = t.action,
    n = t.payload,
    i = e.state;
  if (t.isTransition) {
    var o = ae.T,
      r = {};
    ae.T = r;
    try {
      var l = a(i, n),
        s = ae.S;
      (s !== null && s(r, l), Jm(e, t, l));
    } catch (u) {
      Ff(e, t, u);
    } finally {
      (o !== null && r.types !== null && (o.types = r.types), (ae.T = o));
    }
  } else
    try {
      ((o = a(i, n)), Jm(e, t, o));
    } catch (u) {
      Ff(e, t, u);
    }
}
function Jm(e, t, a) {
  a !== null && typeof a == 'object' && typeof a.then == 'function'
    ? a.then(
        function (n) {
          eh(e, t, n);
        },
        function (n) {
          return Ff(e, t, n);
        }
      )
    : eh(e, t, a);
}
function eh(e, t, a) {
  ((t.status = 'fulfilled'),
    (t.value = a),
    Z_(t),
    (e.state = a),
    (t = e.pending),
    t !== null &&
      ((a = t.next), a === t ? (e.pending = null) : ((a = a.next), (t.next = a), Q_(e, a))));
}
function Ff(e, t, a) {
  var n = e.pending;
  if (((e.pending = null), n !== null)) {
    n = n.next;
    do ((t.status = 'rejected'), (t.reason = a), Z_(t), (t = t.next));
    while (t !== n);
  }
  e.action = null;
}
function Z_(e) {
  e = e.listeners;
  for (var t = 0; t < e.length; t++) (0, e[t])();
}
function W_(e, t) {
  return t;
}
function th(e, t) {
  if (pe) {
    var a = $e.formState;
    if (a !== null) {
      e: {
        var n = re;
        if (pe) {
          if (Ie) {
            t: {
              for (var i = Ie, o = Ta; i.nodeType !== 8; ) {
                if (!o) {
                  i = null;
                  break t;
                }
                if (((i = Aa(i.nextSibling)), i === null)) {
                  i = null;
                  break t;
                }
              }
              ((o = i.data), (i = o === 'F!' || o === 'F' ? i : null));
            }
            if (i) {
              ((Ie = Aa(i.nextSibling)), (n = i.data === 'F!'));
              break e;
            }
          }
          ri(n);
        }
        n = !1;
      }
      n && (t = a[0]);
    }
  }
  return (
    (a = Vt()),
    (a.memoizedState = a.baseState = t),
    (n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: W_,
      lastRenderedState: t,
    }),
    (a.queue = n),
    (a = py.bind(null, re, n)),
    (n.dispatch = a),
    (n = Ef(!1)),
    (o = sp.bind(null, re, !1, n.queue)),
    (n = Vt()),
    (i = { state: t, dispatch: null, action: e, pending: null }),
    (n.queue = i),
    (a = _w.bind(null, re, i, o, a)),
    (i.dispatch = a),
    (n.memoizedState = e),
    [t, a, !1]
  );
}
function ah(e) {
  var t = rt();
  return J_(t, Be, e);
}
function J_(e, t, a) {
  if (
    ((t = np(e, t, W_)[0]),
    (e = Os(Rn)[0]),
    typeof t == 'object' && t !== null && typeof t.then == 'function')
  )
    try {
      var n = Ll(t);
    } catch (r) {
      throw r === Jo ? Xu : r;
    }
  else n = t;
  t = rt();
  var i = t.queue,
    o = i.dispatch;
  return (
    a !== t.memoizedState &&
      ((re.flags |= 2048), jo(9, { destroy: void 0 }, yw.bind(null, i, a), null)),
    [n, o, e]
  );
}
function yw(e, t) {
  e.action = t;
}
function nh(e) {
  var t = rt(),
    a = Be;
  if (a !== null) return J_(t, a, e);
  (rt(), (t = t.memoizedState), (a = rt()));
  var n = a.queue.dispatch;
  return ((a.memoizedState = e), [t, n, !1]);
}
function jo(e, t, a, n) {
  return (
    (e = { tag: e, create: a, deps: n, inst: t, next: null }),
    (t = re.updateQueue),
    t === null && ((t = Qu()), (re.updateQueue = t)),
    (a = t.lastEffect),
    a === null
      ? (t.lastEffect = e.next = e)
      : ((n = a.next), (a.next = e), (e.next = n), (t.lastEffect = e)),
    e
  );
}
function ey() {
  return rt().memoizedState;
}
function Ns(e, t, a, n) {
  var i = Vt();
  ((re.flags |= e), (i.memoizedState = jo(1 | t, { destroy: void 0 }, a, n === void 0 ? null : n)));
}
function Wu(e, t, a, n) {
  var i = rt();
  n = n === void 0 ? null : n;
  var o = i.memoizedState.inst;
  Be !== null && n !== null && Zg(n, Be.memoizedState.deps)
    ? (i.memoizedState = jo(t, o, a, n))
    : ((re.flags |= e), (i.memoizedState = jo(1 | t, o, a, n)));
}
function ih(e, t) {
  Ns(8390656, 8, e, t);
}
function ip(e, t) {
  Wu(2048, 8, e, t);
}
function bw(e) {
  re.flags |= 4;
  var t = re.updateQueue;
  if (t === null) ((t = Qu()), (re.updateQueue = t), (t.events = [e]));
  else {
    var a = t.events;
    a === null ? (t.events = [e]) : a.push(e);
  }
}
function ty(e) {
  var t = rt().memoizedState;
  return (
    bw({ ref: t, nextImpl: e }),
    function () {
      if (Ce & 2) throw Error(H(440));
      return t.impl.apply(void 0, arguments);
    }
  );
}
function ay(e, t) {
  return Wu(4, 2, e, t);
}
function ny(e, t) {
  return Wu(4, 4, e, t);
}
function iy(e, t) {
  if (typeof t == 'function') {
    e = e();
    var a = t(e);
    return function () {
      typeof a == 'function' ? a() : t(null);
    };
  }
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function oy(e, t, a) {
  ((a = a != null ? a.concat([e]) : null), Wu(4, 4, iy.bind(null, t, e), a));
}
function op() {}
function ry(e, t) {
  var a = rt();
  t = t === void 0 ? null : t;
  var n = a.memoizedState;
  return t !== null && Zg(t, n[1]) ? n[0] : ((a.memoizedState = [e, t]), e);
}
function ly(e, t) {
  var a = rt();
  t = t === void 0 ? null : t;
  var n = a.memoizedState;
  if (t !== null && Zg(t, n[1])) return n[0];
  if (((n = e()), Li)) {
    In(!0);
    try {
      e();
    } finally {
      In(!1);
    }
  }
  return ((a.memoizedState = [n, t]), n);
}
function rp(e, t, a) {
  return a === void 0 || (Tn & 1073741824 && !(fe & 261930))
    ? (e.memoizedState = t)
    : ((e.memoizedState = a), (e = Xy()), (re.lanes |= e), (si |= e), a);
}
function sy(e, t, a, n) {
  return ma(a, t)
    ? a
    : Do.current !== null
      ? ((e = rp(e, a, n)), ma(e, t) || (vt = !0), e)
      : !(Tn & 42) || (Tn & 1073741824 && !(fe & 261930))
        ? ((vt = !0), (e.memoizedState = a))
        : ((e = Xy()), (re.lanes |= e), (si |= e), t);
}
function uy(e, t, a, n, i) {
  var o = ke.p;
  ke.p = o !== 0 && 8 > o ? o : 8;
  var r = ae.T,
    l = {};
  ((ae.T = l), sp(e, !1, t, a));
  try {
    var s = i(),
      u = ae.S;
    if (
      (u !== null && u(l, s), s !== null && typeof s == 'object' && typeof s.then == 'function')
    ) {
      var c = mw(s, n);
      Xr(e, t, c, ga(e));
    } else Xr(e, t, n, ga(e));
  } catch (f) {
    Xr(e, t, { then: function () {}, status: 'rejected', reason: f }, ga());
  } finally {
    ((ke.p = o), r !== null && l.types !== null && (r.types = l.types), (ae.T = r));
  }
}
function Sw() {}
function Tf(e, t, a, n) {
  if (e.tag !== 5) throw Error(H(476));
  var i = cy(e).queue;
  uy(
    e,
    i,
    t,
    Fi,
    a === null
      ? Sw
      : function () {
          return (dy(e), a(n));
        }
  );
}
function cy(e) {
  var t = e.memoizedState;
  if (t !== null) return t;
  t = {
    memoizedState: Fi,
    baseState: Fi,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rn,
      lastRenderedState: Fi,
    },
    next: null,
  };
  var a = {};
  return (
    (t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Rn,
        lastRenderedState: a,
      },
      next: null,
    }),
    (e.memoizedState = t),
    (e = e.alternate),
    e !== null && (e.memoizedState = t),
    t
  );
}
function dy(e) {
  var t = cy(e);
  (t.next === null && (t = e.alternate.memoizedState), Xr(e, t.next.queue, {}, ga()));
}
function lp() {
  return $t(_l);
}
function fy() {
  return rt().memoizedState;
}
function gy() {
  return rt().memoizedState;
}
function xw(e) {
  for (var t = e.return; t !== null; ) {
    switch (t.tag) {
      case 24:
      case 3:
        var a = ga();
        e = Zn(a);
        var n = Wn(t, e, a);
        (n !== null && (Jt(n, t, a), qr(n, t, a)), (t = { cache: qg() }), (e.payload = t));
        return;
    }
    t = t.return;
  }
}
function ww(e, t, a) {
  var n = ga();
  ((a = {
    lane: n,
    revertLane: 0,
    gesture: null,
    action: a,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  }),
    Ju(e) ? my(t, a) : ((a = Vg(e, t, a, n)), a !== null && (Jt(a, e, n), hy(a, t, n))));
}
function py(e, t, a) {
  var n = ga();
  Xr(e, t, a, n);
}
function Xr(e, t, a, n) {
  var i = {
    lane: n,
    revertLane: 0,
    gesture: null,
    action: a,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  };
  if (Ju(e)) my(t, i);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
      try {
        var r = t.lastRenderedState,
          l = o(r, a);
        if (((i.hasEagerState = !0), (i.eagerState = l), ma(l, r)))
          return (Yu(e, t, i, 0), $e === null && Ku(), !1);
      } catch {
      } finally {
      }
    if (((a = Vg(e, t, i, n)), a !== null)) return (Jt(a, e, n), hy(a, t, n), !0);
  }
  return !1;
}
function sp(e, t, a, n) {
  if (
    ((n = {
      lane: 2,
      revertLane: vp(),
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ju(e))
  ) {
    if (t) throw Error(H(479));
  } else ((t = Vg(e, a, n, 2)), t !== null && Jt(t, e, 2));
}
function Ju(e) {
  var t = e.alternate;
  return e === re || (t !== null && t === re);
}
function my(e, t) {
  Ro = ru = !0;
  var a = e.pending;
  (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)), (e.pending = t));
}
function hy(e, t, a) {
  if (a & 4194048) {
    var n = t.lanes;
    ((n &= e.pendingLanes), (a |= n), (t.lanes = a), t_(e, a));
  }
}
var ml = {
  readContext: $t,
  use: Zu,
  useCallback: tt,
  useContext: tt,
  useEffect: tt,
  useImperativeHandle: tt,
  useLayoutEffect: tt,
  useInsertionEffect: tt,
  useMemo: tt,
  useReducer: tt,
  useRef: tt,
  useState: tt,
  useDebugValue: tt,
  useDeferredValue: tt,
  useTransition: tt,
  useSyncExternalStore: tt,
  useId: tt,
  useHostTransitionStatus: tt,
  useFormState: tt,
  useActionState: tt,
  useOptimistic: tt,
  useMemoCache: tt,
  useCacheRefresh: tt,
};
ml.useEffectEvent = tt;
var vy = {
    readContext: $t,
    use: Zu,
    useCallback: function (e, t) {
      return ((Vt().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: $t,
    useEffect: ih,
    useImperativeHandle: function (e, t, a) {
      ((a = a != null ? a.concat([e]) : null), Ns(4194308, 4, iy.bind(null, t, e), a));
    },
    useLayoutEffect: function (e, t) {
      return Ns(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      Ns(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var a = Vt();
      t = t === void 0 ? null : t;
      var n = e();
      if (Li) {
        In(!0);
        try {
          e();
        } finally {
          In(!1);
        }
      }
      return ((a.memoizedState = [n, t]), n);
    },
    useReducer: function (e, t, a) {
      var n = Vt();
      if (a !== void 0) {
        var i = a(t);
        if (Li) {
          In(!0);
          try {
            a(t);
          } finally {
            In(!1);
          }
        }
      } else i = t;
      return (
        (n.memoizedState = n.baseState = i),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: i,
        }),
        (n.queue = e),
        (e = e.dispatch = ww.bind(null, re, e)),
        [n.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Vt();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: function (e) {
      e = Ef(e);
      var t = e.queue,
        a = py.bind(null, re, t);
      return ((t.dispatch = a), [e.memoizedState, a]);
    },
    useDebugValue: op,
    useDeferredValue: function (e, t) {
      var a = Vt();
      return rp(a, e, t);
    },
    useTransition: function () {
      var e = Ef(!1);
      return ((e = uy.bind(null, re, e.queue, !0, !1)), (Vt().memoizedState = e), [!1, e]);
    },
    useSyncExternalStore: function (e, t, a) {
      var n = re,
        i = Vt();
      if (pe) {
        if (a === void 0) throw Error(H(407));
        a = a();
      } else {
        if (((a = t()), $e === null)) throw Error(H(349));
        fe & 127 || I_(n, t, a);
      }
      i.memoizedState = a;
      var o = { value: a, getSnapshot: t };
      return (
        (i.queue = o),
        ih(q_.bind(null, n, o, e), [e]),
        (n.flags |= 2048),
        jo(9, { destroy: void 0 }, P_.bind(null, n, o, a, t), null),
        a
      );
    },
    useId: function () {
      var e = Vt(),
        t = $e.identifierPrefix;
      if (pe) {
        var a = Ja,
          n = Wa;
        ((a = (n & ~(1 << (32 - fa(n) - 1))).toString(32) + a),
          (t = '_' + t + 'R_' + a),
          (a = lu++),
          0 < a && (t += 'H' + a.toString(32)),
          (t += '_'));
      } else ((a = hw++), (t = '_' + t + 'r_' + a.toString(32) + '_'));
      return (e.memoizedState = t);
    },
    useHostTransitionStatus: lp,
    useFormState: th,
    useActionState: th,
    useOptimistic: function (e) {
      var t = Vt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return ((t.queue = a), (t = sp.bind(null, re, !0, a)), (a.dispatch = t), [e, t]);
    },
    useMemoCache: ap,
    useCacheRefresh: function () {
      return (Vt().memoizedState = xw.bind(null, re));
    },
    useEffectEvent: function (e) {
      var t = Vt(),
        a = { impl: e };
      return (
        (t.memoizedState = a),
        function () {
          if (Ce & 2) throw Error(H(440));
          return a.impl.apply(void 0, arguments);
        }
      );
    },
  },
  up = {
    readContext: $t,
    use: Zu,
    useCallback: ry,
    useContext: $t,
    useEffect: ip,
    useImperativeHandle: oy,
    useInsertionEffect: ay,
    useLayoutEffect: ny,
    useMemo: ly,
    useReducer: Os,
    useRef: ey,
    useState: function () {
      return Os(Rn);
    },
    useDebugValue: op,
    useDeferredValue: function (e, t) {
      var a = rt();
      return sy(a, Be.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Os(Rn)[0],
        t = rt().memoizedState;
      return [typeof e == 'boolean' ? e : Ll(e), t];
    },
    useSyncExternalStore: G_,
    useId: fy,
    useHostTransitionStatus: lp,
    useFormState: ah,
    useActionState: ah,
    useOptimistic: function (e, t) {
      var a = rt();
      return X_(a, Be, e, t);
    },
    useMemoCache: ap,
    useCacheRefresh: gy,
  };
up.useEffectEvent = ty;
var _y = {
  readContext: $t,
  use: Zu,
  useCallback: ry,
  useContext: $t,
  useEffect: ip,
  useImperativeHandle: oy,
  useInsertionEffect: ay,
  useLayoutEffect: ny,
  useMemo: ly,
  useReducer: md,
  useRef: ey,
  useState: function () {
    return md(Rn);
  },
  useDebugValue: op,
  useDeferredValue: function (e, t) {
    var a = rt();
    return Be === null ? rp(a, e, t) : sy(a, Be.memoizedState, e, t);
  },
  useTransition: function () {
    var e = md(Rn)[0],
      t = rt().memoizedState;
    return [typeof e == 'boolean' ? e : Ll(e), t];
  },
  useSyncExternalStore: G_,
  useId: fy,
  useHostTransitionStatus: lp,
  useFormState: nh,
  useActionState: nh,
  useOptimistic: function (e, t) {
    var a = rt();
    return Be !== null ? X_(a, Be, e, t) : ((a.baseState = e), [e, a.queue.dispatch]);
  },
  useMemoCache: ap,
  useCacheRefresh: gy,
};
_y.useEffectEvent = ty;
function hd(e, t, a, n) {
  ((t = e.memoizedState),
    (a = a(n, t)),
    (a = a == null ? t : qe({}, t, a)),
    (e.memoizedState = a),
    e.lanes === 0 && (e.updateQueue.baseState = a));
}
var Rf = {
  enqueueSetState: function (e, t, a) {
    e = e._reactInternals;
    var n = ga(),
      i = Zn(n);
    ((i.payload = t),
      a != null && (i.callback = a),
      (t = Wn(e, i, n)),
      t !== null && (Jt(t, e, n), qr(t, e, n)));
  },
  enqueueReplaceState: function (e, t, a) {
    e = e._reactInternals;
    var n = ga(),
      i = Zn(n);
    ((i.tag = 1),
      (i.payload = t),
      a != null && (i.callback = a),
      (t = Wn(e, i, n)),
      t !== null && (Jt(t, e, n), qr(t, e, n)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var a = ga(),
      n = Zn(a);
    ((n.tag = 2),
      t != null && (n.callback = t),
      (t = Wn(e, n, a)),
      t !== null && (Jt(t, e, a), qr(t, e, a)));
  },
};
function oh(e, t, a, n, i, o, r) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(n, o, r)
      : t.prototype && t.prototype.isPureReactComponent
        ? !cl(a, n) || !cl(i, o)
        : !0
  );
}
function rh(e, t, a, n) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(a, n),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(a, n),
    t.state !== e && Rf.enqueueReplaceState(t, t.state, null));
}
function $i(e, t) {
  var a = t;
  if ('ref' in t) {
    a = {};
    for (var n in t) n !== 'ref' && (a[n] = t[n]);
  }
  if ((e = e.defaultProps)) {
    a === t && (a = qe({}, a));
    for (var i in e) a[i] === void 0 && (a[i] = e[i]);
  }
  return a;
}
function yy(e) {
  Js(e);
}
function by(e) {
  console.error(e);
}
function Sy(e) {
  Js(e);
}
function su(e, t) {
  try {
    var a = e.onUncaughtError;
    a(t.value, { componentStack: t.stack });
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
function lh(e, t, a) {
  try {
    var n = e.onCaughtError;
    n(a.value, { componentStack: a.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
  } catch (i) {
    setTimeout(function () {
      throw i;
    });
  }
}
function Af(e, t, a) {
  return (
    (a = Zn(a)),
    (a.tag = 3),
    (a.payload = { element: null }),
    (a.callback = function () {
      su(e, t);
    }),
    a
  );
}
function xy(e) {
  return ((e = Zn(e)), (e.tag = 3), e);
}
function wy(e, t, a, n) {
  var i = a.type.getDerivedStateFromError;
  if (typeof i == 'function') {
    var o = n.value;
    ((e.payload = function () {
      return i(o);
    }),
      (e.callback = function () {
        lh(t, a, n);
      }));
  }
  var r = a.stateNode;
  r !== null &&
    typeof r.componentDidCatch == 'function' &&
    (e.callback = function () {
      (lh(t, a, n),
        typeof i != 'function' && (Jn === null ? (Jn = new Set([this])) : Jn.add(this)));
      var l = n.stack;
      this.componentDidCatch(n.value, { componentStack: l !== null ? l : '' });
    });
}
function Cw(e, t, a, n, i) {
  if (((a.flags |= 32768), n !== null && typeof n == 'object' && typeof n.then == 'function')) {
    if (((t = a.alternate), t !== null && Wo(t, a, i, !0), (a = ha.current), a !== null)) {
      switch (a.tag) {
        case 31:
        case 13:
          return (
            Ra === null ? gu() : a.alternate === null && it === 0 && (it = 3),
            (a.flags &= -257),
            (a.flags |= 65536),
            (a.lanes = i),
            n === nu
              ? (a.flags |= 16384)
              : ((t = a.updateQueue),
                t === null ? (a.updateQueue = new Set([n])) : t.add(n),
                Fd(e, n, i)),
            !1
          );
        case 22:
          return (
            (a.flags |= 65536),
            n === nu
              ? (a.flags |= 16384)
              : ((t = a.updateQueue),
                t === null
                  ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([n]) }),
                    (a.updateQueue = t))
                  : ((a = t.retryQueue), a === null ? (t.retryQueue = new Set([n])) : a.add(n)),
                Fd(e, n, i)),
            !1
          );
      }
      throw Error(H(435, a.tag));
    }
    return (Fd(e, n, i), gu(), !1);
  }
  if (pe)
    return (
      (t = ha.current),
      t !== null
        ? (!(t.flags & 65536) && (t.flags |= 256),
          (t.flags |= 65536),
          (t.lanes = i),
          n !== vf && ((e = Error(H(422), { cause: n })), fl(Fa(e, a))))
        : (n !== vf && ((t = Error(H(423), { cause: n })), fl(Fa(t, a))),
          (e = e.current.alternate),
          (e.flags |= 65536),
          (i &= -i),
          (e.lanes |= i),
          (n = Fa(n, a)),
          (i = Af(e.stateNode, n, i)),
          pd(e, i),
          it !== 4 && (it = 2)),
      !1
    );
  var o = Error(H(520), { cause: n });
  if (((o = Fa(o, a)), Wr === null ? (Wr = [o]) : Wr.push(o), it !== 4 && (it = 2), t === null))
    return !0;
  ((n = Fa(n, a)), (a = t));
  do {
    switch (a.tag) {
      case 3:
        return (
          (a.flags |= 65536),
          (e = i & -i),
          (a.lanes |= e),
          (e = Af(a.stateNode, n, e)),
          pd(a, e),
          !1
        );
      case 1:
        if (
          ((t = a.type),
          (o = a.stateNode),
          (a.flags & 128) === 0 &&
            (typeof t.getDerivedStateFromError == 'function' ||
              (o !== null &&
                typeof o.componentDidCatch == 'function' &&
                (Jn === null || !Jn.has(o)))))
        )
          return (
            (a.flags |= 65536),
            (i &= -i),
            (a.lanes |= i),
            (i = xy(i)),
            wy(i, e, a, n),
            pd(a, i),
            !1
          );
    }
    a = a.return;
  } while (a !== null);
  return !1;
}
var cp = Error(H(461)),
  vt = !1;
function Nt(e, t, a, n) {
  t.child = e === null ? $_(t, null, a, n) : Bi(t, e.child, a, n);
}
function sh(e, t, a, n, i) {
  a = a.render;
  var o = t.ref;
  if ('ref' in n) {
    var r = {};
    for (var l in n) l !== 'ref' && (r[l] = n[l]);
  } else r = n;
  return (
    zi(t),
    (n = Wg(e, t, a, r, o, i)),
    (l = Jg()),
    e !== null && !vt
      ? (ep(e, t, i), An(e, t, i))
      : (pe && l && Ig(t), (t.flags |= 1), Nt(e, t, n, i), t.child)
  );
}
function uh(e, t, a, n, i) {
  if (e === null) {
    var o = a.type;
    return typeof o == 'function' && !Gg(o) && o.defaultProps === void 0 && a.compare === null
      ? ((t.tag = 15), (t.type = o), Cy(e, t, o, n, i))
      : ((e = As(a.type, null, n, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((o = e.child), !dp(e, i))) {
    var r = o.memoizedProps;
    if (((a = a.compare), (a = a !== null ? a : cl), a(r, n) && e.ref === t.ref))
      return An(e, t, i);
  }
  return ((t.flags |= 1), (e = wn(o, n)), (e.ref = t.ref), (e.return = t), (t.child = e));
}
function Cy(e, t, a, n, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (cl(o, n) && e.ref === t.ref)
      if (((vt = !1), (t.pendingProps = n = o), dp(e, i))) e.flags & 131072 && (vt = !0);
      else return ((t.lanes = e.lanes), An(e, t, i));
  }
  return Mf(e, t, a, n, i);
}
function ky(e, t, a, n) {
  var i = n.children,
    o = e !== null ? e.memoizedState : null;
  if (
    (e === null &&
      t.stateNode === null &&
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
    n.mode === 'hidden')
  ) {
    if (t.flags & 128) {
      if (((o = o !== null ? o.baseLanes | a : a), e !== null)) {
        for (n = t.child = e.child, i = 0; n !== null; )
          ((i = i | n.lanes | n.childLanes), (n = n.sibling));
        n = i & ~o;
      } else ((n = 0), (t.child = null));
      return ch(e, t, o, a, n);
    }
    if (a & 536870912)
      ((t.memoizedState = { baseLanes: 0, cachePool: null }),
        e !== null && Ms(t, o !== null ? o.cachePool : null),
        o !== null ? Wm(t, o) : Cf(),
        U_(t));
    else return ((n = t.lanes = 536870912), ch(e, t, o !== null ? o.baseLanes | a : a, a, n));
  } else
    o !== null
      ? (Ms(t, o.cachePool), Wm(t, o), Vn(), (t.memoizedState = null))
      : (e !== null && Ms(t, null), Cf(), Vn());
  return (Nt(e, t, i, a), t.child);
}
function Br(e, t) {
  return (
    (e !== null && e.tag === 22) ||
      t.stateNode !== null ||
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
    t.sibling
  );
}
function ch(e, t, a, n, i) {
  var o = Kg();
  return (
    (o = o === null ? null : { parent: pt._currentValue, pool: o }),
    (t.memoizedState = { baseLanes: a, cachePool: o }),
    e !== null && Ms(t, null),
    Cf(),
    U_(t),
    e !== null && Wo(e, t, n, !0),
    (t.childLanes = i),
    null
  );
}
function zs(e, t) {
  return (
    (t = uu({ mode: t.mode, children: t.children }, e.mode)),
    (t.ref = e.ref),
    (e.child = t),
    (t.return = e),
    t
  );
}
function dh(e, t, a) {
  return (
    Bi(t, e.child, null, a),
    (e = zs(t, t.pendingProps)),
    (e.flags |= 2),
    oa(t),
    (t.memoizedState = null),
    e
  );
}
function kw(e, t, a) {
  var n = t.pendingProps,
    i = (t.flags & 128) !== 0;
  if (((t.flags &= -129), e === null)) {
    if (pe) {
      if (n.mode === 'hidden') return ((e = zs(t, n)), (t.lanes = 536870912), Br(null, e));
      if (
        (kf(t),
        (e = Ie)
          ? ((e = vb(e, Ta)),
            (e = e !== null && e.data === '&' ? e : null),
            e !== null &&
              ((t.memoizedState = {
                dehydrated: e,
                treeContext: oi !== null ? { id: Wa, overflow: Ja } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (a = A_(e)),
              (a.return = t),
              (t.child = a),
              (Lt = t),
              (Ie = null)))
          : (e = null),
        e === null)
      )
        throw ri(t);
      return ((t.lanes = 536870912), null);
    }
    return zs(t, n);
  }
  var o = e.memoizedState;
  if (o !== null) {
    var r = o.dehydrated;
    if ((kf(t), i))
      if (t.flags & 256) ((t.flags &= -257), (t = dh(e, t, a)));
      else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
      else throw Error(H(558));
    else if ((vt || Wo(e, t, a, !1), (i = (a & e.childLanes) !== 0), vt || i)) {
      if (((n = $e), n !== null && ((r = a_(n, a)), r !== 0 && r !== o.retryLane)))
        throw ((o.retryLane = r), Vi(e, r), Jt(n, e, r), cp);
      (gu(), (t = dh(e, t, a)));
    } else
      ((e = o.treeContext),
        (Ie = Aa(r.nextSibling)),
        (Lt = t),
        (pe = !0),
        (Qn = null),
        (Ta = !1),
        e !== null && O_(t, e),
        (t = zs(t, n)),
        (t.flags |= 4096));
    return t;
  }
  return (
    (e = wn(e.child, { mode: n.mode, children: n.children })),
    (e.ref = t.ref),
    (t.child = e),
    (e.return = t),
    e
  );
}
function Bs(e, t) {
  var a = t.ref;
  if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
  else {
    if (typeof a != 'function' && typeof a != 'object') throw Error(H(284));
    (e === null || e.ref !== a) && (t.flags |= 4194816);
  }
}
function Mf(e, t, a, n, i) {
  return (
    zi(t),
    (a = Wg(e, t, a, n, void 0, i)),
    (n = Jg()),
    e !== null && !vt
      ? (ep(e, t, i), An(e, t, i))
      : (pe && n && Ig(t), (t.flags |= 1), Nt(e, t, a, i), t.child)
  );
}
function fh(e, t, a, n, i, o) {
  return (
    zi(t),
    (t.updateQueue = null),
    (a = V_(t, n, a, i)),
    H_(e),
    (n = Jg()),
    e !== null && !vt
      ? (ep(e, t, o), An(e, t, o))
      : (pe && n && Ig(t), (t.flags |= 1), Nt(e, t, a, o), t.child)
  );
}
function gh(e, t, a, n, i) {
  if ((zi(t), t.stateNode === null)) {
    var o = bo,
      r = a.contextType;
    (typeof r == 'object' && r !== null && (o = $t(r)),
      (o = new a(n, o)),
      (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
      (o.updater = Rf),
      (t.stateNode = o),
      (o._reactInternals = t),
      (o = t.stateNode),
      (o.props = n),
      (o.state = t.memoizedState),
      (o.refs = {}),
      Xg(t),
      (r = a.contextType),
      (o.context = typeof r == 'object' && r !== null ? $t(r) : bo),
      (o.state = t.memoizedState),
      (r = a.getDerivedStateFromProps),
      typeof r == 'function' && (hd(t, a, r, n), (o.state = t.memoizedState)),
      typeof a.getDerivedStateFromProps == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function' ||
        (typeof o.UNSAFE_componentWillMount != 'function' &&
          typeof o.componentWillMount != 'function') ||
        ((r = o.state),
        typeof o.componentWillMount == 'function' && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount(),
        r !== o.state && Rf.enqueueReplaceState(o, o.state, null),
        Yr(t, n, o, i),
        Kr(),
        (o.state = t.memoizedState)),
      typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
      (n = !0));
  } else if (e === null) {
    o = t.stateNode;
    var l = t.memoizedProps,
      s = $i(a, l);
    o.props = s;
    var u = o.context,
      c = a.contextType;
    ((r = bo), typeof c == 'object' && c !== null && (r = $t(c)));
    var f = a.getDerivedStateFromProps;
    ((c = typeof f == 'function' || typeof o.getSnapshotBeforeUpdate == 'function'),
      (l = t.pendingProps !== l),
      c ||
        (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof o.componentWillReceiveProps != 'function') ||
        ((l || u !== r) && rh(t, o, n, r)),
      (jn = !1));
    var d = t.memoizedState;
    ((o.state = d),
      Yr(t, n, o, i),
      Kr(),
      (u = t.memoizedState),
      l || d !== u || jn
        ? (typeof f == 'function' && (hd(t, a, f, n), (u = t.memoizedState)),
          (s = jn || oh(t, a, s, n, d, u, r))
            ? (c ||
                (typeof o.UNSAFE_componentWillMount != 'function' &&
                  typeof o.componentWillMount != 'function') ||
                (typeof o.componentWillMount == 'function' && o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == 'function' && o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = n),
              (t.memoizedState = u)),
          (o.props = n),
          (o.state = u),
          (o.context = r),
          (n = s))
        : (typeof o.componentDidMount == 'function' && (t.flags |= 4194308), (n = !1)));
  } else {
    ((o = t.stateNode),
      xf(e, t),
      (r = t.memoizedProps),
      (c = $i(a, r)),
      (o.props = c),
      (f = t.pendingProps),
      (d = o.context),
      (u = a.contextType),
      (s = bo),
      typeof u == 'object' && u !== null && (s = $t(u)),
      (l = a.getDerivedStateFromProps),
      (u = typeof l == 'function' || typeof o.getSnapshotBeforeUpdate == 'function') ||
        (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof o.componentWillReceiveProps != 'function') ||
        ((r !== f || d !== s) && rh(t, o, n, s)),
      (jn = !1),
      (d = t.memoizedState),
      (o.state = d),
      Yr(t, n, o, i),
      Kr());
    var g = t.memoizedState;
    r !== f || d !== g || jn || (e !== null && e.dependencies !== null && au(e.dependencies))
      ? (typeof l == 'function' && (hd(t, a, l, n), (g = t.memoizedState)),
        (c =
          jn ||
          oh(t, a, c, n, d, g, s) ||
          (e !== null && e.dependencies !== null && au(e.dependencies)))
          ? (u ||
              (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                typeof o.componentWillUpdate != 'function') ||
              (typeof o.componentWillUpdate == 'function' && o.componentWillUpdate(n, g, s),
              typeof o.UNSAFE_componentWillUpdate == 'function' &&
                o.UNSAFE_componentWillUpdate(n, g, s)),
            typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != 'function' ||
              (r === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != 'function' ||
              (r === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = n),
            (t.memoizedState = g)),
        (o.props = n),
        (o.state = g),
        (o.context = s),
        (n = c))
      : (typeof o.componentDidUpdate != 'function' ||
          (r === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != 'function' ||
          (r === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (n = !1));
  }
  return (
    (o = n),
    Bs(e, t),
    (n = (t.flags & 128) !== 0),
    o || n
      ? ((o = t.stateNode),
        (a = n && typeof a.getDerivedStateFromError != 'function' ? null : o.render()),
        (t.flags |= 1),
        e !== null && n
          ? ((t.child = Bi(t, e.child, null, i)), (t.child = Bi(t, null, a, i)))
          : Nt(e, t, a, i),
        (t.memoizedState = o.state),
        (e = t.child))
      : (e = An(e, t, i)),
    e
  );
}
function ph(e, t, a, n) {
  return (Ni(), (t.flags |= 256), Nt(e, t, a, n), t.child);
}
var vd = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
function _d(e) {
  return { baseLanes: e, cachePool: z_() };
}
function yd(e, t, a) {
  return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= ua), e);
}
function Ey(e, t, a) {
  var n = t.pendingProps,
    i = !1,
    o = (t.flags & 128) !== 0,
    r;
  if (
    ((r = o) || (r = e !== null && e.memoizedState === null ? !1 : (ot.current & 2) !== 0),
    r && ((i = !0), (t.flags &= -129)),
    (r = (t.flags & 32) !== 0),
    (t.flags &= -33),
    e === null)
  ) {
    if (pe) {
      if (
        (i ? Hn(t) : Vn(),
        (e = Ie)
          ? ((e = vb(e, Ta)),
            (e = e !== null && e.data !== '&' ? e : null),
            e !== null &&
              ((t.memoizedState = {
                dehydrated: e,
                treeContext: oi !== null ? { id: Wa, overflow: Ja } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (a = A_(e)),
              (a.return = t),
              (t.child = a),
              (Lt = t),
              (Ie = null)))
          : (e = null),
        e === null)
      )
        throw ri(t);
      return (Pf(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
    }
    var l = n.children;
    return (
      (n = n.fallback),
      i
        ? (Vn(),
          (i = t.mode),
          (l = uu({ mode: 'hidden', children: l }, i)),
          (n = Ti(n, i, a, null)),
          (l.return = t),
          (n.return = t),
          (l.sibling = n),
          (t.child = l),
          (n = t.child),
          (n.memoizedState = _d(a)),
          (n.childLanes = yd(e, r, a)),
          (t.memoizedState = vd),
          Br(null, n))
        : (Hn(t), Of(t, l))
    );
  }
  var s = e.memoizedState;
  if (s !== null && ((l = s.dehydrated), l !== null)) {
    if (o)
      t.flags & 256
        ? (Hn(t), (t.flags &= -257), (t = bd(e, t, a)))
        : t.memoizedState !== null
          ? (Vn(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (Vn(),
            (l = n.fallback),
            (i = t.mode),
            (n = uu({ mode: 'visible', children: n.children }, i)),
            (l = Ti(l, i, a, null)),
            (l.flags |= 2),
            (n.return = t),
            (l.return = t),
            (n.sibling = l),
            (t.child = n),
            Bi(t, e.child, null, a),
            (n = t.child),
            (n.memoizedState = _d(a)),
            (n.childLanes = yd(e, r, a)),
            (t.memoizedState = vd),
            (t = Br(null, n)));
    else if ((Hn(t), Pf(l))) {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
      ((r = u),
        (n = Error(H(419))),
        (n.stack = ''),
        (n.digest = r),
        fl({ value: n, source: null, stack: null }),
        (t = bd(e, t, a)));
    } else if ((vt || Wo(e, t, a, !1), (r = (a & e.childLanes) !== 0), vt || r)) {
      if (((r = $e), r !== null && ((n = a_(r, a)), n !== 0 && n !== s.retryLane)))
        throw ((s.retryLane = n), Vi(e, n), Jt(r, e, n), cp);
      (If(l) || gu(), (t = bd(e, t, a)));
    } else
      If(l)
        ? ((t.flags |= 192), (t.child = e.child), (t = null))
        : ((e = s.treeContext),
          (Ie = Aa(l.nextSibling)),
          (Lt = t),
          (pe = !0),
          (Qn = null),
          (Ta = !1),
          e !== null && O_(t, e),
          (t = Of(t, n.children)),
          (t.flags |= 4096));
    return t;
  }
  return i
    ? (Vn(),
      (l = n.fallback),
      (i = t.mode),
      (s = e.child),
      (u = s.sibling),
      (n = wn(s, { mode: 'hidden', children: n.children })),
      (n.subtreeFlags = s.subtreeFlags & 65011712),
      u !== null ? (l = wn(u, l)) : ((l = Ti(l, i, a, null)), (l.flags |= 2)),
      (l.return = t),
      (n.return = t),
      (n.sibling = l),
      (t.child = n),
      Br(null, n),
      (n = t.child),
      (l = e.child.memoizedState),
      l === null
        ? (l = _d(a))
        : ((i = l.cachePool),
          i !== null
            ? ((s = pt._currentValue), (i = i.parent !== s ? { parent: s, pool: s } : i))
            : (i = z_()),
          (l = { baseLanes: l.baseLanes | a, cachePool: i })),
      (n.memoizedState = l),
      (n.childLanes = yd(e, r, a)),
      (t.memoizedState = vd),
      Br(e.child, n))
    : (Hn(t),
      (a = e.child),
      (e = a.sibling),
      (a = wn(a, { mode: 'visible', children: n.children })),
      (a.return = t),
      (a.sibling = null),
      e !== null &&
        ((r = t.deletions), r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = a),
      (t.memoizedState = null),
      a);
}
function Of(e, t) {
  return ((t = uu({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
}
function uu(e, t) {
  return ((e = ra(22, e, null, t)), (e.lanes = 0), e);
}
function bd(e, t, a) {
  return (
    Bi(t, e.child, null, a),
    (e = Of(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function mh(e, t, a) {
  e.lanes |= t;
  var n = e.alternate;
  (n !== null && (n.lanes |= t), yf(e.return, t, a));
}
function Sd(e, t, a, n, i, o) {
  var r = e.memoizedState;
  r === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: a,
        tailMode: i,
        treeForkCount: o,
      })
    : ((r.isBackwards = t),
      (r.rendering = null),
      (r.renderingStartTime = 0),
      (r.last = n),
      (r.tail = a),
      (r.tailMode = i),
      (r.treeForkCount = o));
}
function Fy(e, t, a) {
  var n = t.pendingProps,
    i = n.revealOrder,
    o = n.tail;
  n = n.children;
  var r = ot.current,
    l = (r & 2) !== 0;
  if (
    (l ? ((r = (r & 1) | 2), (t.flags |= 128)) : (r &= 1),
    He(ot, r),
    Nt(e, t, n, a),
    (n = pe ? dl : 0),
    !l && e !== null && e.flags & 128)
  )
    e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && mh(e, a, t);
      else if (e.tag === 19) mh(e, a, t);
      else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
  switch (i) {
    case 'forwards':
      for (a = t.child, i = null; a !== null; )
        ((e = a.alternate), e !== null && ou(e) === null && (i = a), (a = a.sibling));
      ((a = i),
        a === null ? ((i = t.child), (t.child = null)) : ((i = a.sibling), (a.sibling = null)),
        Sd(t, !1, i, a, o, n));
      break;
    case 'backwards':
    case 'unstable_legacy-backwards':
      for (a = null, i = t.child, t.child = null; i !== null; ) {
        if (((e = i.alternate), e !== null && ou(e) === null)) {
          t.child = i;
          break;
        }
        ((e = i.sibling), (i.sibling = a), (a = i), (i = e));
      }
      Sd(t, !0, a, null, o, n);
      break;
    case 'together':
      Sd(t, !1, null, null, void 0, n);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function An(e, t, a) {
  if ((e !== null && (t.dependencies = e.dependencies), (si |= t.lanes), !(a & t.childLanes)))
    if (e !== null) {
      if ((Wo(e, t, a, !1), (a & t.childLanes) === 0)) return null;
    } else return null;
  if (e !== null && t.child !== e.child) throw Error(H(153));
  if (t.child !== null) {
    for (e = t.child, a = wn(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
      ((e = e.sibling), (a = a.sibling = wn(e, e.pendingProps)), (a.return = t));
    a.sibling = null;
  }
  return t.child;
}
function dp(e, t) {
  return e.lanes & t ? !0 : ((e = e.dependencies), !!(e !== null && au(e)));
}
function Ew(e, t, a) {
  switch (t.tag) {
    case 3:
      (Xs(t, t.stateNode.containerInfo), Un(t, pt, e.memoizedState.cache), Ni());
      break;
    case 27:
    case 5:
      rf(t);
      break;
    case 4:
      Xs(t, t.stateNode.containerInfo);
      break;
    case 10:
      Un(t, t.type, t.memoizedProps.value);
      break;
    case 31:
      if (t.memoizedState !== null) return ((t.flags |= 128), kf(t), null);
      break;
    case 13:
      var n = t.memoizedState;
      if (n !== null)
        return n.dehydrated !== null
          ? (Hn(t), (t.flags |= 128), null)
          : a & t.child.childLanes
            ? Ey(e, t, a)
            : (Hn(t), (e = An(e, t, a)), e !== null ? e.sibling : null);
      Hn(t);
      break;
    case 19:
      var i = (e.flags & 128) !== 0;
      if (
        ((n = (a & t.childLanes) !== 0), n || (Wo(e, t, a, !1), (n = (a & t.childLanes) !== 0)), i)
      ) {
        if (n) return Fy(e, t, a);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        He(ot, ot.current),
        n)
      )
        break;
      return null;
    case 22:
      return ((t.lanes = 0), ky(e, t, a, t.pendingProps));
    case 24:
      Un(t, pt, e.memoizedState.cache);
  }
  return An(e, t, a);
}
function Ty(e, t, a) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps) vt = !0;
    else {
      if (!dp(e, a) && !(t.flags & 128)) return ((vt = !1), Ew(e, t, a));
      vt = !!(e.flags & 131072);
    }
  else ((vt = !1), pe && t.flags & 1048576 && M_(t, dl, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 16:
      e: {
        var n = t.pendingProps;
        if (((e = bi(t.elementType)), (t.type = e), typeof e == 'function'))
          Gg(e)
            ? ((n = $i(e, n)), (t.tag = 1), (t = gh(null, t, e, n, a)))
            : ((t.tag = 0), (t = Mf(null, t, e, n, a)));
        else {
          if (e != null) {
            var i = e.$$typeof;
            if (i === Rg) {
              ((t.tag = 11), (t = sh(null, t, e, n, a)));
              break e;
            } else if (i === Ag) {
              ((t.tag = 14), (t = uh(null, t, e, n, a)));
              break e;
            }
          }
          throw ((t = nf(e) || e), Error(H(306, t, '')));
        }
      }
      return t;
    case 0:
      return Mf(e, t, t.type, t.pendingProps, a);
    case 1:
      return ((n = t.type), (i = $i(n, t.pendingProps)), gh(e, t, n, i, a));
    case 3:
      e: {
        if ((Xs(t, t.stateNode.containerInfo), e === null)) throw Error(H(387));
        n = t.pendingProps;
        var o = t.memoizedState;
        ((i = o.element), xf(e, t), Yr(t, n, null, a));
        var r = t.memoizedState;
        if (
          ((n = r.cache),
          Un(t, pt, n),
          n !== o.cache && bf(t, [pt], a, !0),
          Kr(),
          (n = r.element),
          o.isDehydrated)
        )
          if (
            ((o = { element: n, isDehydrated: !1, cache: r.cache }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            t = ph(e, t, n, a);
            break e;
          } else if (n !== i) {
            ((i = Fa(Error(H(424)), t)), fl(i), (t = ph(e, t, n, a)));
            break e;
          } else {
            switch (((e = t.stateNode.containerInfo), e.nodeType)) {
              case 9:
                e = e.body;
                break;
              default:
                e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
            }
            for (
              Ie = Aa(e.firstChild),
                Lt = t,
                pe = !0,
                Qn = null,
                Ta = !0,
                a = $_(t, null, n, a),
                t.child = a;
              a;
            )
              ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          }
        else {
          if ((Ni(), n === i)) {
            t = An(e, t, a);
            break e;
          }
          Nt(e, t, n, a);
        }
        t = t.child;
      }
      return t;
    case 26:
      return (
        Bs(e, t),
        e === null
          ? (a = Bh(t.type, null, t.pendingProps, null))
            ? (t.memoizedState = a)
            : pe ||
              ((a = t.type),
              (e = t.pendingProps),
              (n = vu(Xn.current).createElement(a)),
              (n[Bt] = t),
              (n[ea] = e),
              Dt(n, a, e),
              Et(n),
              (t.stateNode = n))
          : (t.memoizedState = Bh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
        null
      );
    case 27:
      return (
        rf(t),
        e === null &&
          pe &&
          ((n = t.stateNode = _b(t.type, t.pendingProps, Xn.current)),
          (Lt = t),
          (Ta = !0),
          (i = Ie),
          fi(t.type) ? ((qf = i), (Ie = Aa(n.firstChild))) : (Ie = i)),
        Nt(e, t, t.pendingProps.children, a),
        Bs(e, t),
        e === null && (t.flags |= 4194304),
        t.child
      );
    case 5:
      return (
        e === null &&
          pe &&
          ((i = n = Ie) &&
            ((n = a2(n, t.type, t.pendingProps, Ta)),
            n !== null
              ? ((t.stateNode = n), (Lt = t), (Ie = Aa(n.firstChild)), (Ta = !1), (i = !0))
              : (i = !1)),
          i || ri(t)),
        rf(t),
        (i = t.type),
        (o = t.pendingProps),
        (r = e !== null ? e.memoizedProps : null),
        (n = o.children),
        Vf(i, o) ? (n = null) : r !== null && Vf(i, r) && (t.flags |= 32),
        t.memoizedState !== null && ((i = Wg(e, t, vw, null, null, a)), (_l._currentValue = i)),
        Bs(e, t),
        Nt(e, t, n, a),
        t.child
      );
    case 6:
      return (
        e === null &&
          pe &&
          ((e = a = Ie) &&
            ((a = n2(a, t.pendingProps, Ta)),
            a !== null ? ((t.stateNode = a), (Lt = t), (Ie = null), (e = !0)) : (e = !1)),
          e || ri(t)),
        null
      );
    case 13:
      return Ey(e, t, a);
    case 4:
      return (
        Xs(t, t.stateNode.containerInfo),
        (n = t.pendingProps),
        e === null ? (t.child = Bi(t, null, n, a)) : Nt(e, t, n, a),
        t.child
      );
    case 11:
      return sh(e, t, t.type, t.pendingProps, a);
    case 7:
      return (Nt(e, t, t.pendingProps, a), t.child);
    case 8:
      return (Nt(e, t, t.pendingProps.children, a), t.child);
    case 12:
      return (Nt(e, t, t.pendingProps.children, a), t.child);
    case 10:
      return ((n = t.pendingProps), Un(t, t.type, n.value), Nt(e, t, n.children, a), t.child);
    case 9:
      return (
        (i = t.type._context),
        (n = t.pendingProps.children),
        zi(t),
        (i = $t(i)),
        (n = n(i)),
        (t.flags |= 1),
        Nt(e, t, n, a),
        t.child
      );
    case 14:
      return uh(e, t, t.type, t.pendingProps, a);
    case 15:
      return Cy(e, t, t.type, t.pendingProps, a);
    case 19:
      return Fy(e, t, a);
    case 31:
      return kw(e, t, a);
    case 22:
      return ky(e, t, a, t.pendingProps);
    case 24:
      return (
        zi(t),
        (n = $t(pt)),
        e === null
          ? ((i = Kg()),
            i === null &&
              ((i = $e),
              (o = qg()),
              (i.pooledCache = o),
              o.refCount++,
              o !== null && (i.pooledCacheLanes |= a),
              (i = o)),
            (t.memoizedState = { parent: n, cache: i }),
            Xg(t),
            Un(t, pt, i))
          : (e.lanes & a && (xf(e, t), Yr(t, null, null, a), Kr()),
            (i = e.memoizedState),
            (o = t.memoizedState),
            i.parent !== n
              ? ((i = { parent: n, cache: n }),
                (t.memoizedState = i),
                t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i),
                Un(t, pt, n))
              : ((n = o.cache), Un(t, pt, n), n !== i.cache && bf(t, [pt], a, !0))),
        Nt(e, t, t.pendingProps.children, a),
        t.child
      );
    case 29:
      throw t.pendingProps;
  }
  throw Error(H(156, t.tag));
}
function cn(e) {
  e.flags |= 4;
}
function xd(e, t, a, n, i) {
  if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
    if (((e.flags |= 16777216), (i & 335544128) === i))
      if (e.stateNode.complete) e.flags |= 8192;
      else if (Wy()) e.flags |= 8192;
      else throw ((Ai = nu), Yg);
  } else e.flags &= -16777217;
}
function hh(e, t) {
  if (t.type !== 'stylesheet' || t.state.loading & 4) e.flags &= -16777217;
  else if (((e.flags |= 16777216), !Sb(t)))
    if (Wy()) e.flags |= 8192;
    else throw ((Ai = nu), Yg);
}
function ds(e, t) {
  (t !== null && (e.flags |= 4),
    e.flags & 16384 && ((t = e.tag !== 22 ? Jv() : 536870912), (e.lanes |= t), (Uo |= t)));
}
function br(e, t) {
  if (!pe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var a = null; t !== null; ) (t.alternate !== null && (a = t), (t = t.sibling));
        a === null ? (e.tail = null) : (a.sibling = null);
        break;
      case 'collapsed':
        a = e.tail;
        for (var n = null; a !== null; ) (a.alternate !== null && (n = a), (a = a.sibling));
        n === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (n.sibling = null);
    }
}
function Ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    a = 0,
    n = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((a |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags & 65011712),
        (n |= i.flags & 65011712),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((a |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags),
        (n |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= n), (e.childLanes = a), t);
}
function Fw(e, t, a) {
  var n = t.pendingProps;
  switch ((Pg(t), t.tag)) {
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (Ge(t), null);
    case 1:
      return (Ge(t), null);
    case 3:
      return (
        (a = t.stateNode),
        (n = null),
        e !== null && (n = e.memoizedState.cache),
        t.memoizedState.cache !== n && (t.flags |= 2048),
        Cn(pt),
        zo(),
        a.pendingContext && ((a.context = a.pendingContext), (a.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ki(t)
            ? cn(t)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), gd())),
        Ge(t),
        null
      );
    case 26:
      var i = t.type,
        o = t.memoizedState;
      return (
        e === null
          ? (cn(t), o !== null ? (Ge(t), hh(t, o)) : (Ge(t), xd(t, i, null, n, a)))
          : o
            ? o !== e.memoizedState
              ? (cn(t), Ge(t), hh(t, o))
              : (Ge(t), (t.flags &= -16777217))
            : ((e = e.memoizedProps), e !== n && cn(t), Ge(t), xd(t, i, e, n, a)),
        null
      );
    case 27:
      if ((Qs(t), (a = Xn.current), (i = t.type), e !== null && t.stateNode != null))
        e.memoizedProps !== n && cn(t);
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(H(166));
          return (Ge(t), null);
        }
        ((e = an.current), Ki(t) ? Pm(t) : ((e = _b(i, n, a)), (t.stateNode = e), cn(t)));
      }
      return (Ge(t), null);
    case 5:
      if ((Qs(t), (i = t.type), e !== null && t.stateNode != null)) e.memoizedProps !== n && cn(t);
      else {
        if (!n) {
          if (t.stateNode === null) throw Error(H(166));
          return (Ge(t), null);
        }
        if (((o = an.current), Ki(t))) Pm(t);
        else {
          var r = vu(Xn.current);
          switch (o) {
            case 1:
              o = r.createElementNS('http://www.w3.org/2000/svg', i);
              break;
            case 2:
              o = r.createElementNS('http://www.w3.org/1998/Math/MathML', i);
              break;
            default:
              switch (i) {
                case 'svg':
                  o = r.createElementNS('http://www.w3.org/2000/svg', i);
                  break;
                case 'math':
                  o = r.createElementNS('http://www.w3.org/1998/Math/MathML', i);
                  break;
                case 'script':
                  ((o = r.createElement('div')),
                    (o.innerHTML = '<script><\/script>'),
                    (o = o.removeChild(o.firstChild)));
                  break;
                case 'select':
                  ((o =
                    typeof n.is == 'string'
                      ? r.createElement('select', { is: n.is })
                      : r.createElement('select')),
                    n.multiple ? (o.multiple = !0) : n.size && (o.size = n.size));
                  break;
                default:
                  o =
                    typeof n.is == 'string' ? r.createElement(i, { is: n.is }) : r.createElement(i);
              }
          }
          ((o[Bt] = t), (o[ea] = n));
          e: for (r = t.child; r !== null; ) {
            if (r.tag === 5 || r.tag === 6) o.appendChild(r.stateNode);
            else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
              ((r.child.return = r), (r = r.child));
              continue;
            }
            if (r === t) break e;
            for (; r.sibling === null; ) {
              if (r.return === null || r.return === t) break e;
              r = r.return;
            }
            ((r.sibling.return = r.return), (r = r.sibling));
          }
          t.stateNode = o;
          e: switch ((Dt(o, i, n), i)) {
            case 'button':
            case 'input':
            case 'select':
            case 'textarea':
              n = !!n.autoFocus;
              break e;
            case 'img':
              n = !0;
              break e;
            default:
              n = !1;
          }
          n && cn(t);
        }
      }
      return (Ge(t), xd(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a), null);
    case 6:
      if (e && t.stateNode != null) e.memoizedProps !== n && cn(t);
      else {
        if (typeof n != 'string' && t.stateNode === null) throw Error(H(166));
        if (((e = Xn.current), Ki(t))) {
          if (((e = t.stateNode), (a = t.memoizedProps), (n = null), (i = Lt), i !== null))
            switch (i.tag) {
              case 27:
              case 5:
                n = i.memoizedProps;
            }
          ((e[Bt] = t),
            (e = !!(
              e.nodeValue === a ||
              (n !== null && n.suppressHydrationWarning === !0) ||
              pb(e.nodeValue, a)
            )),
            e || ri(t, !0));
        } else ((e = vu(e).createTextNode(n)), (e[Bt] = t), (t.stateNode = e));
      }
      return (Ge(t), null);
    case 31:
      if (((a = t.memoizedState), e === null || e.memoizedState !== null)) {
        if (((n = Ki(t)), a !== null)) {
          if (e === null) {
            if (!n) throw Error(H(318));
            if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
              throw Error(H(557));
            e[Bt] = t;
          } else (Ni(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
          (Ge(t), (e = !1));
        } else
          ((a = gd()),
            e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
            (e = !0));
        if (!e) return t.flags & 256 ? (oa(t), t) : (oa(t), null);
        if (t.flags & 128) throw Error(H(558));
      }
      return (Ge(t), null);
    case 13:
      if (
        ((n = t.memoizedState),
        e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (((i = Ki(t)), n !== null && n.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(H(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i))
              throw Error(H(317));
            i[Bt] = t;
          } else (Ni(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4));
          (Ge(t), (i = !1));
        } else
          ((i = gd()),
            e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i),
            (i = !0));
        if (!i) return t.flags & 256 ? (oa(t), t) : (oa(t), null);
      }
      return (
        oa(t),
        t.flags & 128
          ? ((t.lanes = a), t)
          : ((a = n !== null),
            (e = e !== null && e.memoizedState !== null),
            a &&
              ((n = t.child),
              (i = null),
              n.alternate !== null &&
                n.alternate.memoizedState !== null &&
                n.alternate.memoizedState.cachePool !== null &&
                (i = n.alternate.memoizedState.cachePool.pool),
              (o = null),
              n.memoizedState !== null &&
                n.memoizedState.cachePool !== null &&
                (o = n.memoizedState.cachePool.pool),
              o !== i && (n.flags |= 2048)),
            a !== e && a && (t.child.flags |= 8192),
            ds(t, t.updateQueue),
            Ge(t),
            null)
      );
    case 4:
      return (zo(), e === null && _p(t.stateNode.containerInfo), Ge(t), null);
    case 10:
      return (Cn(t.type), Ge(t), null);
    case 19:
      if ((Ft(ot), (n = t.memoizedState), n === null)) return (Ge(t), null);
      if (((i = (t.flags & 128) !== 0), (o = n.rendering), o === null))
        if (i) br(n, !1);
        else {
          if (it !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = ou(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    br(n, !1),
                    e = o.updateQueue,
                    t.updateQueue = e,
                    ds(t, e),
                    t.subtreeFlags = 0,
                    e = a,
                    a = t.child;
                  a !== null;
                )
                  (R_(a, e), (a = a.sibling));
                return (He(ot, (ot.current & 1) | 2), pe && vn(t, n.treeForkCount), t.child);
              }
              e = e.sibling;
            }
          n.tail !== null &&
            ca() > du &&
            ((t.flags |= 128), (i = !0), br(n, !1), (t.lanes = 4194304));
        }
      else {
        if (!i)
          if (((e = ou(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (i = !0),
              (e = e.updateQueue),
              (t.updateQueue = e),
              ds(t, e),
              br(n, !0),
              n.tail === null && n.tailMode === 'hidden' && !o.alternate && !pe)
            )
              return (Ge(t), null);
          } else
            2 * ca() - n.renderingStartTime > du &&
              a !== 536870912 &&
              ((t.flags |= 128), (i = !0), br(n, !1), (t.lanes = 4194304));
        n.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((e = n.last), e !== null ? (e.sibling = o) : (t.child = o), (n.last = o));
      }
      return n.tail !== null
        ? ((e = n.tail),
          (n.rendering = e),
          (n.tail = e.sibling),
          (n.renderingStartTime = ca()),
          (e.sibling = null),
          (a = ot.current),
          He(ot, i ? (a & 1) | 2 : a & 1),
          pe && vn(t, n.treeForkCount),
          e)
        : (Ge(t), null);
    case 22:
    case 23:
      return (
        oa(t),
        Qg(),
        (n = t.memoizedState !== null),
        e !== null ? (e.memoizedState !== null) !== n && (t.flags |= 8192) : n && (t.flags |= 8192),
        n
          ? a & 536870912 && !(t.flags & 128) && (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ge(t),
        (a = t.updateQueue),
        a !== null && ds(t, a.retryQueue),
        (a = null),
        e !== null &&
          e.memoizedState !== null &&
          e.memoizedState.cachePool !== null &&
          (a = e.memoizedState.cachePool.pool),
        (n = null),
        t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (n = t.memoizedState.cachePool.pool),
        n !== a && (t.flags |= 2048),
        e !== null && Ft(Ri),
        null
      );
    case 24:
      return (
        (a = null),
        e !== null && (a = e.memoizedState.cache),
        t.memoizedState.cache !== a && (t.flags |= 2048),
        Cn(pt),
        Ge(t),
        null
      );
    case 25:
      return null;
    case 30:
      return null;
  }
  throw Error(H(156, t.tag));
}
function Tw(e, t) {
  switch ((Pg(t), t.tag)) {
    case 1:
      return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
    case 3:
      return (
        Cn(pt),
        zo(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 26:
    case 27:
    case 5:
      return (Qs(t), null);
    case 31:
      if (t.memoizedState !== null) {
        if ((oa(t), t.alternate === null)) throw Error(H(340));
        Ni();
      }
      return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
    case 13:
      if ((oa(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(H(340));
        Ni();
      }
      return ((e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null);
    case 19:
      return (Ft(ot), null);
    case 4:
      return (zo(), null);
    case 10:
      return (Cn(t.type), null);
    case 22:
    case 23:
      return (
        oa(t),
        Qg(),
        e !== null && Ft(Ri),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 24:
      return (Cn(pt), null);
    case 25:
      return null;
    default:
      return null;
  }
}
function Ry(e, t) {
  switch ((Pg(t), t.tag)) {
    case 3:
      (Cn(pt), zo());
      break;
    case 26:
    case 27:
    case 5:
      Qs(t);
      break;
    case 4:
      zo();
      break;
    case 31:
      t.memoizedState !== null && oa(t);
      break;
    case 13:
      oa(t);
      break;
    case 19:
      Ft(ot);
      break;
    case 10:
      Cn(t.type);
      break;
    case 22:
    case 23:
      (oa(t), Qg(), e !== null && Ft(Ri));
      break;
    case 24:
      Cn(pt);
  }
}
function $l(e, t) {
  try {
    var a = t.updateQueue,
      n = a !== null ? a.lastEffect : null;
    if (n !== null) {
      var i = n.next;
      a = i;
      do {
        if ((a.tag & e) === e) {
          n = void 0;
          var o = a.create,
            r = a.inst;
          ((n = o()), (r.destroy = n));
        }
        a = a.next;
      } while (a !== i);
    }
  } catch (l) {
    Me(t, t.return, l);
  }
}
function li(e, t, a) {
  try {
    var n = t.updateQueue,
      i = n !== null ? n.lastEffect : null;
    if (i !== null) {
      var o = i.next;
      n = o;
      do {
        if ((n.tag & e) === e) {
          var r = n.inst,
            l = r.destroy;
          if (l !== void 0) {
            ((r.destroy = void 0), (i = t));
            var s = a,
              u = l;
            try {
              u();
            } catch (c) {
              Me(i, s, c);
            }
          }
        }
        n = n.next;
      } while (n !== o);
    }
  } catch (c) {
    Me(t, t.return, c);
  }
}
function Ay(e) {
  var t = e.updateQueue;
  if (t !== null) {
    var a = e.stateNode;
    try {
      j_(t, a);
    } catch (n) {
      Me(e, e.return, n);
    }
  }
}
function My(e, t, a) {
  ((a.props = $i(e.type, e.memoizedProps)), (a.state = e.memoizedState));
  try {
    a.componentWillUnmount();
  } catch (n) {
    Me(e, t, n);
  }
}
function Qr(e, t) {
  try {
    var a = e.ref;
    if (a !== null) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          var n = e.stateNode;
          break;
        case 30:
          n = e.stateNode;
          break;
        default:
          n = e.stateNode;
      }
      typeof a == 'function' ? (e.refCleanup = a(n)) : (a.current = n);
    }
  } catch (i) {
    Me(e, t, i);
  }
}
function en(e, t) {
  var a = e.ref,
    n = e.refCleanup;
  if (a !== null)
    if (typeof n == 'function')
      try {
        n();
      } catch (i) {
        Me(e, t, i);
      } finally {
        ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
      }
    else if (typeof a == 'function')
      try {
        a(null);
      } catch (i) {
        Me(e, t, i);
      }
    else a.current = null;
}
function Oy(e) {
  var t = e.type,
    a = e.memoizedProps,
    n = e.stateNode;
  try {
    e: switch (t) {
      case 'button':
      case 'input':
      case 'select':
      case 'textarea':
        a.autoFocus && n.focus();
        break e;
      case 'img':
        a.src ? (n.src = a.src) : a.srcSet && (n.srcset = a.srcSet);
    }
  } catch (i) {
    Me(e, e.return, i);
  }
}
function wd(e, t, a) {
  try {
    var n = e.stateNode;
    (Qw(n, e.type, a, t), (n[ea] = t));
  } catch (i) {
    Me(e, e.return, i);
  }
}
function Ny(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && fi(e.type)) || e.tag === 4;
}
function Cd(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ny(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if ((e.tag === 27 && fi(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
        continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Nf(e, t, a) {
  var n = e.tag;
  if (n === 5 || n === 6)
    ((e = e.stateNode),
      t
        ? (a.nodeType === 9
            ? a.body
            : a.nodeName === 'HTML'
              ? a.ownerDocument.body
              : a
          ).insertBefore(e, t)
        : ((t = a.nodeType === 9 ? a.body : a.nodeName === 'HTML' ? a.ownerDocument.body : a),
          t.appendChild(e),
          (a = a._reactRootContainer),
          a != null || t.onclick !== null || (t.onclick = bn)));
  else if (
    n !== 4 &&
    (n === 27 && fi(e.type) && ((a = e.stateNode), (t = null)), (e = e.child), e !== null)
  )
    for (Nf(e, t, a), e = e.sibling; e !== null; ) (Nf(e, t, a), (e = e.sibling));
}
function cu(e, t, a) {
  var n = e.tag;
  if (n === 5 || n === 6) ((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e));
  else if (n !== 4 && (n === 27 && fi(e.type) && (a = e.stateNode), (e = e.child), e !== null))
    for (cu(e, t, a), e = e.sibling; e !== null; ) (cu(e, t, a), (e = e.sibling));
}
function zy(e) {
  var t = e.stateNode,
    a = e.memoizedProps;
  try {
    for (var n = e.type, i = t.attributes; i.length; ) t.removeAttributeNode(i[0]);
    (Dt(t, n, a), (t[Bt] = e), (t[ea] = a));
  } catch (o) {
    Me(e, e.return, o);
  }
}
var _n = !1,
  ft = !1,
  kd = !1,
  vh = typeof WeakSet == 'function' ? WeakSet : Set,
  Ct = null;
function Rw(e, t) {
  if (((e = e.containerInfo), (Uf = Su), (e = S_(e)), Ug(e))) {
    if ('selectionStart' in e) var a = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        a = ((a = e.ownerDocument) && a.defaultView) || window;
        var n = a.getSelection && a.getSelection();
        if (n && n.rangeCount !== 0) {
          a = n.anchorNode;
          var i = n.anchorOffset,
            o = n.focusNode;
          n = n.focusOffset;
          try {
            (a.nodeType, o.nodeType);
          } catch {
            a = null;
            break e;
          }
          var r = 0,
            l = -1,
            s = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              f !== a || (i !== 0 && f.nodeType !== 3) || (l = r + i),
                f !== o || (n !== 0 && f.nodeType !== 3) || (s = r + n),
                f.nodeType === 3 && (r += f.nodeValue.length),
                (g = f.firstChild) !== null;
            )
              ((d = f), (f = g));
            for (;;) {
              if (f === e) break t;
              if (
                (d === a && ++u === i && (l = r),
                d === o && ++c === n && (s = r),
                (g = f.nextSibling) !== null)
              )
                break;
              ((f = d), (d = f.parentNode));
            }
            f = g;
          }
          a = l === -1 || s === -1 ? null : { start: l, end: s };
        } else a = null;
      }
    a = a || { start: 0, end: 0 };
  } else a = null;
  for (Hf = { focusedElem: e, selectionRange: a }, Su = !1, Ct = t; Ct !== null; )
    if (((t = Ct), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (Ct = e));
    else
      for (; Ct !== null; ) {
        switch (((t = Ct), (o = t.alternate), (e = t.flags), t.tag)) {
          case 0:
            if (e & 4 && ((e = t.updateQueue), (e = e !== null ? e.events : null), e !== null))
              for (a = 0; a < e.length; a++) ((i = e[a]), (i.ref.impl = i.nextImpl));
            break;
          case 11:
          case 15:
            break;
          case 1:
            if (e & 1024 && o !== null) {
              ((e = void 0),
                (a = t),
                (i = o.memoizedProps),
                (o = o.memoizedState),
                (n = a.stateNode));
              try {
                var _ = $i(a.type, i);
                ((e = n.getSnapshotBeforeUpdate(_, o)),
                  (n.__reactInternalSnapshotBeforeUpdate = e));
              } catch (x) {
                Me(a, a.return, x);
              }
            }
            break;
          case 3:
            if (e & 1024) {
              if (((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)) Gf(e);
              else if (a === 1)
                switch (e.nodeName) {
                  case 'HEAD':
                  case 'HTML':
                  case 'BODY':
                    Gf(e);
                    break;
                  default:
                    e.textContent = '';
                }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if (e & 1024) throw Error(H(163));
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (Ct = e));
          break;
        }
        Ct = t.return;
      }
}
function By(e, t, a) {
  var n = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 15:
      (fn(e, a), n & 4 && $l(5, a));
      break;
    case 1:
      if ((fn(e, a), n & 4))
        if (((e = a.stateNode), t === null))
          try {
            e.componentDidMount();
          } catch (r) {
            Me(a, a.return, r);
          }
        else {
          var i = $i(a.type, t.memoizedProps);
          t = t.memoizedState;
          try {
            e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
          } catch (r) {
            Me(a, a.return, r);
          }
        }
      (n & 64 && Ay(a), n & 512 && Qr(a, a.return));
      break;
    case 3:
      if ((fn(e, a), n & 64 && ((e = a.updateQueue), e !== null))) {
        if (((t = null), a.child !== null))
          switch (a.child.tag) {
            case 27:
            case 5:
              t = a.child.stateNode;
              break;
            case 1:
              t = a.child.stateNode;
          }
        try {
          j_(e, t);
        } catch (r) {
          Me(a, a.return, r);
        }
      }
      break;
    case 27:
      t === null && n & 4 && zy(a);
    case 26:
    case 5:
      (fn(e, a), t === null && n & 4 && Oy(a), n & 512 && Qr(a, a.return));
      break;
    case 12:
      fn(e, a);
      break;
    case 31:
      (fn(e, a), n & 4 && Dy(e, a));
      break;
    case 13:
      (fn(e, a),
        n & 4 && jy(e, a),
        n & 64 &&
          ((e = a.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null && ((a = Dw.bind(null, a)), i2(e, a)))));
      break;
    case 22:
      if (((n = a.memoizedState !== null || _n), !n)) {
        ((t = (t !== null && t.memoizedState !== null) || ft), (i = _n));
        var o = ft;
        ((_n = n),
          (ft = t) && !o ? hn(e, a, (a.subtreeFlags & 8772) !== 0) : fn(e, a),
          (_n = i),
          (ft = o));
      }
      break;
    case 30:
      break;
    default:
      fn(e, a);
  }
}
function Ly(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), Ly(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 && ((t = e.stateNode), t !== null && zg(t)),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
var Ye = null,
  Qt = !1;
function dn(e, t, a) {
  for (a = a.child; a !== null; ) ($y(e, t, a), (a = a.sibling));
}
function $y(e, t, a) {
  if (da && typeof da.onCommitFiberUnmount == 'function')
    try {
      da.onCommitFiberUnmount(Al, a);
    } catch {}
  switch (a.tag) {
    case 26:
      (ft || en(a, t),
        dn(e, t, a),
        a.memoizedState
          ? a.memoizedState.count--
          : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
      break;
    case 27:
      ft || en(a, t);
      var n = Ye,
        i = Qt;
      (fi(a.type) && ((Ye = a.stateNode), (Qt = !1)),
        dn(e, t, a),
        el(a.stateNode),
        (Ye = n),
        (Qt = i));
      break;
    case 5:
      ft || en(a, t);
    case 6:
      if (((n = Ye), (i = Qt), (Ye = null), dn(e, t, a), (Ye = n), (Qt = i), Ye !== null))
        if (Qt)
          try {
            (Ye.nodeType === 9
              ? Ye.body
              : Ye.nodeName === 'HTML'
                ? Ye.ownerDocument.body
                : Ye
            ).removeChild(a.stateNode);
          } catch (o) {
            Me(a, t, o);
          }
        else
          try {
            Ye.removeChild(a.stateNode);
          } catch (o) {
            Me(a, t, o);
          }
      break;
    case 18:
      Ye !== null &&
        (Qt
          ? ((e = Ye),
            Ah(
              e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
              a.stateNode
            ),
            Io(e))
          : Ah(Ye, a.stateNode));
      break;
    case 4:
      ((n = Ye),
        (i = Qt),
        (Ye = a.stateNode.containerInfo),
        (Qt = !0),
        dn(e, t, a),
        (Ye = n),
        (Qt = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      (li(2, a, t), ft || li(4, a, t), dn(e, t, a));
      break;
    case 1:
      (ft ||
        (en(a, t), (n = a.stateNode), typeof n.componentWillUnmount == 'function' && My(a, t, n)),
        dn(e, t, a));
      break;
    case 21:
      dn(e, t, a);
      break;
    case 22:
      ((ft = (n = ft) || a.memoizedState !== null), dn(e, t, a), (ft = n));
      break;
    default:
      dn(e, t, a);
  }
}
function Dy(e, t) {
  if (
    t.memoizedState === null &&
    ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
  ) {
    e = e.dehydrated;
    try {
      Io(e);
    } catch (a) {
      Me(t, t.return, a);
    }
  }
}
function jy(e, t) {
  if (
    t.memoizedState === null &&
    ((e = t.alternate),
    e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
  )
    try {
      Io(e);
    } catch (a) {
      Me(t, t.return, a);
    }
}
function Aw(e) {
  switch (e.tag) {
    case 31:
    case 13:
    case 19:
      var t = e.stateNode;
      return (t === null && (t = e.stateNode = new vh()), t);
    case 22:
      return (
        (e = e.stateNode),
        (t = e._retryCache),
        t === null && (t = e._retryCache = new vh()),
        t
      );
    default:
      throw Error(H(435, e.tag));
  }
}
function fs(e, t) {
  var a = Aw(e);
  t.forEach(function (n) {
    if (!a.has(n)) {
      a.add(n);
      var i = jw.bind(null, e, n);
      n.then(i, i);
    }
  });
}
function Yt(e, t) {
  var a = t.deletions;
  if (a !== null)
    for (var n = 0; n < a.length; n++) {
      var i = a[n],
        o = e,
        r = t,
        l = r;
      e: for (; l !== null; ) {
        switch (l.tag) {
          case 27:
            if (fi(l.type)) {
              ((Ye = l.stateNode), (Qt = !1));
              break e;
            }
            break;
          case 5:
            ((Ye = l.stateNode), (Qt = !1));
            break e;
          case 3:
          case 4:
            ((Ye = l.stateNode.containerInfo), (Qt = !0));
            break e;
        }
        l = l.return;
      }
      if (Ye === null) throw Error(H(160));
      ($y(o, r, i),
        (Ye = null),
        (Qt = !1),
        (o = i.alternate),
        o !== null && (o.return = null),
        (i.return = null));
    }
  if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) (Uy(t, e), (t = t.sibling));
}
var $a = null;
function Uy(e, t) {
  var a = e.alternate,
    n = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      (Yt(t, e), Xt(e), n & 4 && (li(3, e, e.return), $l(3, e), li(5, e, e.return)));
      break;
    case 1:
      (Yt(t, e),
        Xt(e),
        n & 512 && (ft || a === null || en(a, a.return)),
        n & 64 &&
          _n &&
          ((e = e.updateQueue),
          e !== null &&
            ((n = e.callbacks),
            n !== null &&
              ((a = e.shared.hiddenCallbacks),
              (e.shared.hiddenCallbacks = a === null ? n : a.concat(n))))));
      break;
    case 26:
      var i = $a;
      if ((Yt(t, e), Xt(e), n & 512 && (ft || a === null || en(a, a.return)), n & 4)) {
        var o = a !== null ? a.memoizedState : null;
        if (((n = e.memoizedState), a === null))
          if (n === null)
            if (e.stateNode === null) {
              e: {
                ((n = e.type), (a = e.memoizedProps), (i = i.ownerDocument || i));
                t: switch (n) {
                  case 'title':
                    ((o = i.getElementsByTagName('title')[0]),
                      (!o ||
                        o[Nl] ||
                        o[Bt] ||
                        o.namespaceURI === 'http://www.w3.org/2000/svg' ||
                        o.hasAttribute('itemprop')) &&
                        ((o = i.createElement(n)),
                        i.head.insertBefore(o, i.querySelector('head > title'))),
                      Dt(o, n, a),
                      (o[Bt] = e),
                      Et(o),
                      (n = o));
                    break e;
                  case 'link':
                    var r = $h('link', 'href', i).get(n + (a.href || ''));
                    if (r) {
                      for (var l = 0; l < r.length; l++)
                        if (
                          ((o = r[l]),
                          o.getAttribute('href') ===
                            (a.href == null || a.href === '' ? null : a.href) &&
                            o.getAttribute('rel') === (a.rel == null ? null : a.rel) &&
                            o.getAttribute('title') === (a.title == null ? null : a.title) &&
                            o.getAttribute('crossorigin') ===
                              (a.crossOrigin == null ? null : a.crossOrigin))
                        ) {
                          r.splice(l, 1);
                          break t;
                        }
                    }
                    ((o = i.createElement(n)), Dt(o, n, a), i.head.appendChild(o));
                    break;
                  case 'meta':
                    if ((r = $h('meta', 'content', i).get(n + (a.content || '')))) {
                      for (l = 0; l < r.length; l++)
                        if (
                          ((o = r[l]),
                          o.getAttribute('content') ===
                            (a.content == null ? null : '' + a.content) &&
                            o.getAttribute('name') === (a.name == null ? null : a.name) &&
                            o.getAttribute('property') ===
                              (a.property == null ? null : a.property) &&
                            o.getAttribute('http-equiv') ===
                              (a.httpEquiv == null ? null : a.httpEquiv) &&
                            o.getAttribute('charset') === (a.charSet == null ? null : a.charSet))
                        ) {
                          r.splice(l, 1);
                          break t;
                        }
                    }
                    ((o = i.createElement(n)), Dt(o, n, a), i.head.appendChild(o));
                    break;
                  default:
                    throw Error(H(468, n));
                }
                ((o[Bt] = e), Et(o), (n = o));
              }
              e.stateNode = n;
            } else Dh(i, e.type, e.stateNode);
          else e.stateNode = Lh(i, n, e.memoizedProps);
        else
          o !== n
            ? (o === null
                ? a.stateNode !== null && ((a = a.stateNode), a.parentNode.removeChild(a))
                : o.count--,
              n === null ? Dh(i, e.type, e.stateNode) : Lh(i, n, e.memoizedProps))
            : n === null && e.stateNode !== null && wd(e, e.memoizedProps, a.memoizedProps);
      }
      break;
    case 27:
      (Yt(t, e),
        Xt(e),
        n & 512 && (ft || a === null || en(a, a.return)),
        a !== null && n & 4 && wd(e, e.memoizedProps, a.memoizedProps));
      break;
    case 5:
      if ((Yt(t, e), Xt(e), n & 512 && (ft || a === null || en(a, a.return)), e.flags & 32)) {
        i = e.stateNode;
        try {
          Lo(i, '');
        } catch (_) {
          Me(e, e.return, _);
        }
      }
      (n & 4 &&
        e.stateNode != null &&
        ((i = e.memoizedProps), wd(e, i, a !== null ? a.memoizedProps : i)),
        n & 1024 && (kd = !0));
      break;
    case 6:
      if ((Yt(t, e), Xt(e), n & 4)) {
        if (e.stateNode === null) throw Error(H(162));
        ((n = e.memoizedProps), (a = e.stateNode));
        try {
          a.nodeValue = n;
        } catch (_) {
          Me(e, e.return, _);
        }
      }
      break;
    case 3:
      if (
        ((Ds = null),
        (i = $a),
        ($a = _u(t.containerInfo)),
        Yt(t, e),
        ($a = i),
        Xt(e),
        n & 4 && a !== null && a.memoizedState.isDehydrated)
      )
        try {
          Io(t.containerInfo);
        } catch (_) {
          Me(e, e.return, _);
        }
      kd && ((kd = !1), Hy(e));
      break;
    case 4:
      ((n = $a), ($a = _u(e.stateNode.containerInfo)), Yt(t, e), Xt(e), ($a = n));
      break;
    case 12:
      (Yt(t, e), Xt(e));
      break;
    case 31:
      (Yt(t, e),
        Xt(e),
        n & 4 && ((n = e.updateQueue), n !== null && ((e.updateQueue = null), fs(e, n))));
      break;
    case 13:
      (Yt(t, e),
        Xt(e),
        e.child.flags & 8192 &&
          (e.memoizedState !== null) != (a !== null && a.memoizedState !== null) &&
          (ec = ca()),
        n & 4 && ((n = e.updateQueue), n !== null && ((e.updateQueue = null), fs(e, n))));
      break;
    case 22:
      i = e.memoizedState !== null;
      var s = a !== null && a.memoizedState !== null,
        u = _n,
        c = ft;
      if (((_n = u || i), (ft = c || s), Yt(t, e), (ft = c), (_n = u), Xt(e), n & 8192))
        e: for (
          t = e.stateNode,
            t._visibility = i ? t._visibility & -2 : t._visibility | 1,
            i && (a === null || s || _n || ft || Si(e)),
            a = null,
            t = e;
          ;
        ) {
          if (t.tag === 5 || t.tag === 26) {
            if (a === null) {
              s = a = t;
              try {
                if (((o = s.stateNode), i))
                  ((r = o.style),
                    typeof r.setProperty == 'function'
                      ? r.setProperty('display', 'none', 'important')
                      : (r.display = 'none'));
                else {
                  l = s.stateNode;
                  var f = s.memoizedProps.style,
                    d = f != null && f.hasOwnProperty('display') ? f.display : null;
                  l.style.display = d == null || typeof d == 'boolean' ? '' : ('' + d).trim();
                }
              } catch (_) {
                Me(s, s.return, _);
              }
            }
          } else if (t.tag === 6) {
            if (a === null) {
              s = t;
              try {
                s.stateNode.nodeValue = i ? '' : s.memoizedProps;
              } catch (_) {
                Me(s, s.return, _);
              }
            }
          } else if (t.tag === 18) {
            if (a === null) {
              s = t;
              try {
                var g = s.stateNode;
                i ? Mh(g, !0) : Mh(s.stateNode, !1);
              } catch (_) {
                Me(s, s.return, _);
              }
            }
          } else if (
            ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
            t.child !== null
          ) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === e) break e;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break e;
            (a === t && (a = null), (t = t.return));
          }
          (a === t && (a = null), (t.sibling.return = t.return), (t = t.sibling));
        }
      n & 4 &&
        ((n = e.updateQueue),
        n !== null && ((a = n.retryQueue), a !== null && ((n.retryQueue = null), fs(e, a))));
      break;
    case 19:
      (Yt(t, e),
        Xt(e),
        n & 4 && ((n = e.updateQueue), n !== null && ((e.updateQueue = null), fs(e, n))));
      break;
    case 30:
      break;
    case 21:
      break;
    default:
      (Yt(t, e), Xt(e));
  }
}
function Xt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      for (var a, n = e.return; n !== null; ) {
        if (Ny(n)) {
          a = n;
          break;
        }
        n = n.return;
      }
      if (a == null) throw Error(H(160));
      switch (a.tag) {
        case 27:
          var i = a.stateNode,
            o = Cd(e);
          cu(e, o, i);
          break;
        case 5:
          var r = a.stateNode;
          a.flags & 32 && (Lo(r, ''), (a.flags &= -33));
          var l = Cd(e);
          cu(e, l, r);
          break;
        case 3:
        case 4:
          var s = a.stateNode.containerInfo,
            u = Cd(e);
          Nf(e, u, s);
          break;
        default:
          throw Error(H(161));
      }
    } catch (c) {
      Me(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Hy(e) {
  if (e.subtreeFlags & 1024)
    for (e = e.child; e !== null; ) {
      var t = e;
      (Hy(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
    }
}
function fn(e, t) {
  if (t.subtreeFlags & 8772)
    for (t = t.child; t !== null; ) (By(e, t.alternate, t), (t = t.sibling));
}
function Si(e) {
  for (e = e.child; e !== null; ) {
    var t = e;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (li(4, t, t.return), Si(t));
        break;
      case 1:
        en(t, t.return);
        var a = t.stateNode;
        (typeof a.componentWillUnmount == 'function' && My(t, t.return, a), Si(t));
        break;
      case 27:
        el(t.stateNode);
      case 26:
      case 5:
        (en(t, t.return), Si(t));
        break;
      case 22:
        t.memoizedState === null && Si(t);
        break;
      case 30:
        Si(t);
        break;
      default:
        Si(t);
    }
    e = e.sibling;
  }
}
function hn(e, t, a) {
  for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
    var n = t.alternate,
      i = e,
      o = t,
      r = o.flags;
    switch (o.tag) {
      case 0:
      case 11:
      case 15:
        (hn(i, o, a), $l(4, o));
        break;
      case 1:
        if ((hn(i, o, a), (n = o), (i = n.stateNode), typeof i.componentDidMount == 'function'))
          try {
            i.componentDidMount();
          } catch (u) {
            Me(n, n.return, u);
          }
        if (((n = o), (i = n.updateQueue), i !== null)) {
          var l = n.stateNode;
          try {
            var s = i.shared.hiddenCallbacks;
            if (s !== null)
              for (i.shared.hiddenCallbacks = null, i = 0; i < s.length; i++) D_(s[i], l);
          } catch (u) {
            Me(n, n.return, u);
          }
        }
        (a && r & 64 && Ay(o), Qr(o, o.return));
        break;
      case 27:
        zy(o);
      case 26:
      case 5:
        (hn(i, o, a), a && n === null && r & 4 && Oy(o), Qr(o, o.return));
        break;
      case 12:
        hn(i, o, a);
        break;
      case 31:
        (hn(i, o, a), a && r & 4 && Dy(i, o));
        break;
      case 13:
        (hn(i, o, a), a && r & 4 && jy(i, o));
        break;
      case 22:
        (o.memoizedState === null && hn(i, o, a), Qr(o, o.return));
        break;
      case 30:
        break;
      default:
        hn(i, o, a);
    }
    t = t.sibling;
  }
}
function fp(e, t) {
  var a = null;
  (e !== null &&
    e.memoizedState !== null &&
    e.memoizedState.cachePool !== null &&
    (a = e.memoizedState.cachePool.pool),
    (e = null),
    t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (e = t.memoizedState.cachePool.pool),
    e !== a && (e != null && e.refCount++, a != null && Bl(a)));
}
function gp(e, t) {
  ((e = null),
    t.alternate !== null && (e = t.alternate.memoizedState.cache),
    (t = t.memoizedState.cache),
    t !== e && (t.refCount++, e != null && Bl(e)));
}
function Ba(e, t, a, n) {
  if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (Vy(e, t, a, n), (t = t.sibling));
}
function Vy(e, t, a, n) {
  var i = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
      (Ba(e, t, a, n), i & 2048 && $l(9, t));
      break;
    case 1:
      Ba(e, t, a, n);
      break;
    case 3:
      (Ba(e, t, a, n),
        i & 2048 &&
          ((e = null),
          t.alternate !== null && (e = t.alternate.memoizedState.cache),
          (t = t.memoizedState.cache),
          t !== e && (t.refCount++, e != null && Bl(e))));
      break;
    case 12:
      if (i & 2048) {
        (Ba(e, t, a, n), (e = t.stateNode));
        try {
          var o = t.memoizedProps,
            r = o.id,
            l = o.onPostCommit;
          typeof l == 'function' &&
            l(r, t.alternate === null ? 'mount' : 'update', e.passiveEffectDuration, -0);
        } catch (s) {
          Me(t, t.return, s);
        }
      } else Ba(e, t, a, n);
      break;
    case 31:
      Ba(e, t, a, n);
      break;
    case 13:
      Ba(e, t, a, n);
      break;
    case 23:
      break;
    case 22:
      ((o = t.stateNode),
        (r = t.alternate),
        t.memoizedState !== null
          ? o._visibility & 2
            ? Ba(e, t, a, n)
            : Zr(e, t)
          : o._visibility & 2
            ? Ba(e, t, a, n)
            : ((o._visibility |= 2), ro(e, t, a, n, (t.subtreeFlags & 10256) !== 0 || !1)),
        i & 2048 && fp(r, t));
      break;
    case 24:
      (Ba(e, t, a, n), i & 2048 && gp(t.alternate, t));
      break;
    default:
      Ba(e, t, a, n);
  }
}
function ro(e, t, a, n, i) {
  for (i = i && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
    var o = e,
      r = t,
      l = a,
      s = n,
      u = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        (ro(o, r, l, s, i), $l(8, r));
        break;
      case 23:
        break;
      case 22:
        var c = r.stateNode;
        (r.memoizedState !== null
          ? c._visibility & 2
            ? ro(o, r, l, s, i)
            : Zr(o, r)
          : ((c._visibility |= 2), ro(o, r, l, s, i)),
          i && u & 2048 && fp(r.alternate, r));
        break;
      case 24:
        (ro(o, r, l, s, i), i && u & 2048 && gp(r.alternate, r));
        break;
      default:
        ro(o, r, l, s, i);
    }
    t = t.sibling;
  }
}
function Zr(e, t) {
  if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null; ) {
      var a = e,
        n = t,
        i = n.flags;
      switch (n.tag) {
        case 22:
          (Zr(a, n), i & 2048 && fp(n.alternate, n));
          break;
        case 24:
          (Zr(a, n), i & 2048 && gp(n.alternate, n));
          break;
        default:
          Zr(a, n);
      }
      t = t.sibling;
    }
}
var Lr = 8192;
function Yi(e, t, a) {
  if (e.subtreeFlags & Lr) for (e = e.child; e !== null; ) (Gy(e, t, a), (e = e.sibling));
}
function Gy(e, t, a) {
  switch (e.tag) {
    case 26:
      (Yi(e, t, a),
        e.flags & Lr && e.memoizedState !== null && h2(a, $a, e.memoizedState, e.memoizedProps));
      break;
    case 5:
      Yi(e, t, a);
      break;
    case 3:
    case 4:
      var n = $a;
      (($a = _u(e.stateNode.containerInfo)), Yi(e, t, a), ($a = n));
      break;
    case 22:
      e.memoizedState === null &&
        ((n = e.alternate),
        n !== null && n.memoizedState !== null
          ? ((n = Lr), (Lr = 16777216), Yi(e, t, a), (Lr = n))
          : Yi(e, t, a));
      break;
    default:
      Yi(e, t, a);
  }
}
function Iy(e) {
  var t = e.alternate;
  if (t !== null && ((e = t.child), e !== null)) {
    t.child = null;
    do ((t = e.sibling), (e.sibling = null), (e = t));
    while (e !== null);
  }
}
function Sr(e) {
  var t = e.deletions;
  if (e.flags & 16) {
    if (t !== null)
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        ((Ct = n), qy(n, e));
      }
    Iy(e);
  }
  if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Py(e), (e = e.sibling));
}
function Py(e) {
  switch (e.tag) {
    case 0:
    case 11:
    case 15:
      (Sr(e), e.flags & 2048 && li(9, e, e.return));
      break;
    case 3:
      Sr(e);
      break;
    case 12:
      Sr(e);
      break;
    case 22:
      var t = e.stateNode;
      e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)
        ? ((t._visibility &= -3), Ls(e))
        : Sr(e);
      break;
    default:
      Sr(e);
  }
}
function Ls(e) {
  var t = e.deletions;
  if (e.flags & 16) {
    if (t !== null)
      for (var a = 0; a < t.length; a++) {
        var n = t[a];
        ((Ct = n), qy(n, e));
      }
    Iy(e);
  }
  for (e = e.child; e !== null; ) {
    switch (((t = e), t.tag)) {
      case 0:
      case 11:
      case 15:
        (li(8, t, t.return), Ls(t));
        break;
      case 22:
        ((a = t.stateNode), a._visibility & 2 && ((a._visibility &= -3), Ls(t)));
        break;
      default:
        Ls(t);
    }
    e = e.sibling;
  }
}
function qy(e, t) {
  for (; Ct !== null; ) {
    var a = Ct;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        li(8, a, t);
        break;
      case 23:
      case 22:
        if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
          var n = a.memoizedState.cachePool.pool;
          n != null && n.refCount++;
        }
        break;
      case 24:
        Bl(a.memoizedState.cache);
    }
    if (((n = a.child), n !== null)) ((n.return = a), (Ct = n));
    else
      e: for (a = e; Ct !== null; ) {
        n = Ct;
        var i = n.sibling,
          o = n.return;
        if ((Ly(n), n === a)) {
          Ct = null;
          break e;
        }
        if (i !== null) {
          ((i.return = o), (Ct = i));
          break e;
        }
        Ct = o;
      }
  }
}
var Mw = {
    getCacheForType: function (e) {
      var t = $t(pt),
        a = t.data.get(e);
      return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
    },
    cacheSignal: function () {
      return $t(pt).controller.signal;
    },
  },
  Ow = typeof WeakMap == 'function' ? WeakMap : Map,
  Ce = 0,
  $e = null,
  ce = null,
  fe = 0,
  Ae = 0,
  na = null,
  qn = !1,
  er = !1,
  pp = !1,
  Mn = 0,
  it = 0,
  si = 0,
  Mi = 0,
  mp = 0,
  ua = 0,
  Uo = 0,
  Wr = null,
  Zt = null,
  zf = !1,
  ec = 0,
  Ky = 0,
  du = 1 / 0,
  fu = null,
  Jn = null,
  yt = 0,
  ei = null,
  Ho = null,
  kn = 0,
  Bf = 0,
  Lf = null,
  Yy = null,
  Jr = 0,
  $f = null;
function ga() {
  return Ce & 2 && fe !== 0 ? fe & -fe : ae.T !== null ? vp() : n_();
}
function Xy() {
  if (ua === 0)
    if (!(fe & 536870912) || pe) {
      var e = is;
      ((is <<= 1), !(is & 3932160) && (is = 262144), (ua = e));
    } else ua = 536870912;
  return ((e = ha.current), e !== null && (e.flags |= 32), ua);
}
function Jt(e, t, a) {
  (((e === $e && (Ae === 2 || Ae === 9)) || e.cancelPendingCommit !== null) &&
    (Vo(e, 0), Kn(e, fe, ua, !1)),
    Ol(e, a),
    (!(Ce & 2) || e !== $e) &&
      (e === $e && (!(Ce & 2) && (Mi |= a), it === 4 && Kn(e, fe, ua, !1)), ln(e)));
}
function Qy(e, t, a) {
  if (Ce & 6) throw Error(H(327));
  var n = (!a && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Ml(e, t),
    i = n ? Bw(e, t) : Ed(e, t, !0),
    o = n;
  do {
    if (i === 0) {
      er && !n && Kn(e, t, 0, !1);
      break;
    } else {
      if (((a = e.current.alternate), o && !Nw(a))) {
        ((i = Ed(e, t, !1)), (o = !1));
        continue;
      }
      if (i === 2) {
        if (((o = t), e.errorRecoveryDisabledLanes & o)) var r = 0;
        else ((r = e.pendingLanes & -536870913), (r = r !== 0 ? r : r & 536870912 ? 536870912 : 0));
        if (r !== 0) {
          t = r;
          e: {
            var l = e;
            i = Wr;
            var s = l.current.memoizedState.isDehydrated;
            if ((s && (Vo(l, r).flags |= 256), (r = Ed(l, r, !1)), r !== 2)) {
              if (pp && !s) {
                ((l.errorRecoveryDisabledLanes |= o), (Mi |= o), (i = 4));
                break e;
              }
              ((o = Zt), (Zt = i), o !== null && (Zt === null ? (Zt = o) : Zt.push.apply(Zt, o)));
            }
            i = r;
          }
          if (((o = !1), i !== 2)) continue;
        }
      }
      if (i === 1) {
        (Vo(e, 0), Kn(e, t, 0, !0));
        break;
      }
      e: {
        switch (((n = e), (o = i), o)) {
          case 0:
          case 1:
            throw Error(H(345));
          case 4:
            if ((t & 4194048) !== t) break;
          case 6:
            Kn(n, t, ua, !qn);
            break e;
          case 2:
            Zt = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(H(329));
        }
        if ((t & 62914560) === t && ((i = ec + 300 - ca()), 10 < i)) {
          if ((Kn(n, t, ua, !qn), Gu(n, 0, !0) !== 0)) break e;
          ((kn = t),
            (n.timeoutHandle = hb(
              _h.bind(null, n, a, Zt, fu, zf, t, ua, Mi, Uo, qn, o, 'Throttled', -0, 0),
              i
            )));
          break e;
        }
        _h(n, a, Zt, fu, zf, t, ua, Mi, Uo, qn, o, null, -0, 0);
      }
    }
    break;
  } while (1);
  ln(e);
}
function _h(e, t, a, n, i, o, r, l, s, u, c, f, d, g) {
  if (((e.timeoutHandle = -1), (f = t.subtreeFlags), f & 8192 || (f & 16785408) === 16785408)) {
    ((f = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: bn,
    }),
      Gy(t, o, f));
    var _ = (o & 62914560) === o ? ec - ca() : (o & 4194048) === o ? Ky - ca() : 0;
    if (((_ = v2(f, _)), _ !== null)) {
      ((kn = o),
        (e.cancelPendingCommit = _(bh.bind(null, e, t, o, a, n, i, r, l, s, c, f, null, d, g))),
        Kn(e, o, r, !u));
      return;
    }
  }
  bh(e, t, o, a, n, i, r, l, s);
}
function Nw(e) {
  for (var t = e; ; ) {
    var a = t.tag;
    if (
      (a === 0 || a === 11 || a === 15) &&
      t.flags & 16384 &&
      ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
    )
      for (var n = 0; n < a.length; n++) {
        var i = a[n],
          o = i.getSnapshot;
        i = i.value;
        try {
          if (!ma(o(), i)) return !1;
        } catch {
          return !1;
        }
      }
    if (((a = t.child), t.subtreeFlags & 16384 && a !== null)) ((a.return = t), (t = a));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function Kn(e, t, a, n) {
  ((t &= ~mp),
    (t &= ~Mi),
    (e.suspendedLanes |= t),
    (e.pingedLanes &= ~t),
    n && (e.warmLanes |= t),
    (n = e.expirationTimes));
  for (var i = t; 0 < i; ) {
    var o = 31 - fa(i),
      r = 1 << o;
    ((n[o] = -1), (i &= ~r));
  }
  a !== 0 && e_(e, a, t);
}
function tc() {
  return Ce & 6 ? !0 : (Dl(0, !1), !1);
}
function hp() {
  if (ce !== null) {
    if (Ae === 0) var e = ce.return;
    else ((e = ce), (Sn = Gi = null), tp(e), (To = null), (gl = 0), (e = ce));
    for (; e !== null; ) (Ry(e.alternate, e), (e = e.return));
    ce = null;
  }
}
function Vo(e, t) {
  var a = e.timeoutHandle;
  (a !== -1 && ((e.timeoutHandle = -1), Jw(a)),
    (a = e.cancelPendingCommit),
    a !== null && ((e.cancelPendingCommit = null), a()),
    (kn = 0),
    hp(),
    ($e = e),
    (ce = a = wn(e.current, null)),
    (fe = t),
    (Ae = 0),
    (na = null),
    (qn = !1),
    (er = Ml(e, t)),
    (pp = !1),
    (Uo = ua = mp = Mi = si = it = 0),
    (Zt = Wr = null),
    (zf = !1),
    t & 8 && (t |= t & 32));
  var n = e.entangledLanes;
  if (n !== 0)
    for (e = e.entanglements, n &= t; 0 < n; ) {
      var i = 31 - fa(n),
        o = 1 << i;
      ((t |= e[i]), (n &= ~o));
    }
  return ((Mn = t), Ku(), a);
}
function Zy(e, t) {
  ((re = null),
    (ae.H = ml),
    t === Jo || t === Xu
      ? ((t = Qm()), (Ae = 3))
      : t === Yg
        ? ((t = Qm()), (Ae = 4))
        : (Ae =
            t === cp
              ? 8
              : t !== null && typeof t == 'object' && typeof t.then == 'function'
                ? 6
                : 1),
    (na = t),
    ce === null && ((it = 1), su(e, Fa(t, e.current))));
}
function Wy() {
  var e = ha.current;
  return e === null
    ? !0
    : (fe & 4194048) === fe
      ? Ra === null
      : (fe & 62914560) === fe || fe & 536870912
        ? e === Ra
        : !1;
}
function Jy() {
  var e = ae.H;
  return ((ae.H = ml), e === null ? ml : e);
}
function eb() {
  var e = ae.A;
  return ((ae.A = Mw), e);
}
function gu() {
  ((it = 4),
    qn || ((fe & 4194048) !== fe && ha.current !== null) || (er = !0),
    (!(si & 134217727) && !(Mi & 134217727)) || $e === null || Kn($e, fe, ua, !1));
}
function Ed(e, t, a) {
  var n = Ce;
  Ce |= 2;
  var i = Jy(),
    o = eb();
  (($e !== e || fe !== t) && ((fu = null), Vo(e, t)), (t = !1));
  var r = it;
  e: do
    try {
      if (Ae !== 0 && ce !== null) {
        var l = ce,
          s = na;
        switch (Ae) {
          case 8:
            (hp(), (r = 6));
            break e;
          case 3:
          case 2:
          case 9:
          case 6:
            ha.current === null && (t = !0);
            var u = Ae;
            if (((Ae = 0), (na = null), wo(e, l, s, u), a && er)) {
              r = 0;
              break e;
            }
            break;
          default:
            ((u = Ae), (Ae = 0), (na = null), wo(e, l, s, u));
        }
      }
      (zw(), (r = it));
      break;
    } catch (c) {
      Zy(e, c);
    }
  while (1);
  return (
    t && e.shellSuspendCounter++,
    (Sn = Gi = null),
    (Ce = n),
    (ae.H = i),
    (ae.A = o),
    ce === null && (($e = null), (fe = 0), Ku()),
    r
  );
}
function zw() {
  for (; ce !== null; ) tb(ce);
}
function Bw(e, t) {
  var a = Ce;
  Ce |= 2;
  var n = Jy(),
    i = eb();
  $e !== e || fe !== t ? ((fu = null), (du = ca() + 500), Vo(e, t)) : (er = Ml(e, t));
  e: do
    try {
      if (Ae !== 0 && ce !== null) {
        t = ce;
        var o = na;
        t: switch (Ae) {
          case 1:
            ((Ae = 0), (na = null), wo(e, t, o, 1));
            break;
          case 2:
          case 9:
            if (Xm(o)) {
              ((Ae = 0), (na = null), yh(t));
              break;
            }
            ((t = function () {
              ((Ae !== 2 && Ae !== 9) || $e !== e || (Ae = 7), ln(e));
            }),
              o.then(t, t));
            break e;
          case 3:
            Ae = 7;
            break e;
          case 4:
            Ae = 5;
            break e;
          case 7:
            Xm(o) ? ((Ae = 0), (na = null), yh(t)) : ((Ae = 0), (na = null), wo(e, t, o, 7));
            break;
          case 5:
            var r = null;
            switch (ce.tag) {
              case 26:
                r = ce.memoizedState;
              case 5:
              case 27:
                var l = ce;
                if (r ? Sb(r) : l.stateNode.complete) {
                  ((Ae = 0), (na = null));
                  var s = l.sibling;
                  if (s !== null) ce = s;
                  else {
                    var u = l.return;
                    u !== null ? ((ce = u), ac(u)) : (ce = null);
                  }
                  break t;
                }
            }
            ((Ae = 0), (na = null), wo(e, t, o, 5));
            break;
          case 6:
            ((Ae = 0), (na = null), wo(e, t, o, 6));
            break;
          case 8:
            (hp(), (it = 6));
            break e;
          default:
            throw Error(H(462));
        }
      }
      Lw();
      break;
    } catch (c) {
      Zy(e, c);
    }
  while (1);
  return (
    (Sn = Gi = null),
    (ae.H = n),
    (ae.A = i),
    (Ce = a),
    ce !== null ? 0 : (($e = null), (fe = 0), Ku(), it)
  );
}
function Lw() {
  for (; ce !== null && !ox(); ) tb(ce);
}
function tb(e) {
  var t = Ty(e.alternate, e, Mn);
  ((e.memoizedProps = e.pendingProps), t === null ? ac(e) : (ce = t));
}
function yh(e) {
  var t = e,
    a = t.alternate;
  switch (t.tag) {
    case 15:
    case 0:
      t = fh(a, t, t.pendingProps, t.type, void 0, fe);
      break;
    case 11:
      t = fh(a, t, t.pendingProps, t.type.render, t.ref, fe);
      break;
    case 5:
      tp(t);
    default:
      (Ry(a, t), (t = ce = R_(t, Mn)), (t = Ty(a, t, Mn)));
  }
  ((e.memoizedProps = e.pendingProps), t === null ? ac(e) : (ce = t));
}
function wo(e, t, a, n) {
  ((Sn = Gi = null), tp(t), (To = null), (gl = 0));
  var i = t.return;
  try {
    if (Cw(e, i, t, a, fe)) {
      ((it = 1), su(e, Fa(a, e.current)), (ce = null));
      return;
    }
  } catch (o) {
    if (i !== null) throw ((ce = i), o);
    ((it = 1), su(e, Fa(a, e.current)), (ce = null));
    return;
  }
  t.flags & 32768
    ? (pe || n === 1
        ? (e = !0)
        : er || fe & 536870912
          ? (e = !1)
          : ((qn = e = !0),
            (n === 2 || n === 9 || n === 3 || n === 6) &&
              ((n = ha.current), n !== null && n.tag === 13 && (n.flags |= 16384))),
      ab(t, e))
    : ac(t);
}
function ac(e) {
  var t = e;
  do {
    if (t.flags & 32768) {
      ab(t, qn);
      return;
    }
    e = t.return;
    var a = Fw(t.alternate, t, Mn);
    if (a !== null) {
      ce = a;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ce = t;
      return;
    }
    ce = t = e;
  } while (t !== null);
  it === 0 && (it = 5);
}
function ab(e, t) {
  do {
    var a = Tw(e.alternate, e);
    if (a !== null) {
      ((a.flags &= 32767), (ce = a));
      return;
    }
    if (
      ((a = e.return),
      a !== null && ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
      !t && ((e = e.sibling), e !== null))
    ) {
      ce = e;
      return;
    }
    ce = e = a;
  } while (e !== null);
  ((it = 6), (ce = null));
}
function bh(e, t, a, n, i, o, r, l, s) {
  e.cancelPendingCommit = null;
  do nc();
  while (yt !== 0);
  if (Ce & 6) throw Error(H(327));
  if (t !== null) {
    if (t === e.current) throw Error(H(177));
    if (
      ((o = t.lanes | t.childLanes),
      (o |= Hg),
      mx(e, a, o, r, l, s),
      e === $e && ((ce = $e = null), (fe = 0)),
      (Ho = t),
      (ei = e),
      (kn = a),
      (Bf = o),
      (Lf = i),
      (Yy = n),
      t.subtreeFlags & 10256 || t.flags & 10256
        ? ((e.callbackNode = null),
          (e.callbackPriority = 0),
          Uw(Zs, function () {
            return (lb(), null);
          }))
        : ((e.callbackNode = null), (e.callbackPriority = 0)),
      (n = (t.flags & 13878) !== 0),
      t.subtreeFlags & 13878 || n)
    ) {
      ((n = ae.T), (ae.T = null), (i = ke.p), (ke.p = 2), (r = Ce), (Ce |= 4));
      try {
        Rw(e, t, a);
      } finally {
        ((Ce = r), (ke.p = i), (ae.T = n));
      }
    }
    ((yt = 1), nb(), ib(), ob());
  }
}
function nb() {
  if (yt === 1) {
    yt = 0;
    var e = ei,
      t = Ho,
      a = (t.flags & 13878) !== 0;
    if (t.subtreeFlags & 13878 || a) {
      ((a = ae.T), (ae.T = null));
      var n = ke.p;
      ke.p = 2;
      var i = Ce;
      Ce |= 4;
      try {
        Uy(t, e);
        var o = Hf,
          r = S_(e.containerInfo),
          l = o.focusedElem,
          s = o.selectionRange;
        if (r !== l && l && l.ownerDocument && b_(l.ownerDocument.documentElement, l)) {
          if (s !== null && Ug(l)) {
            var u = s.start,
              c = s.end;
            if ((c === void 0 && (c = u), 'selectionStart' in l))
              ((l.selectionStart = u), (l.selectionEnd = Math.min(c, l.value.length)));
            else {
              var f = l.ownerDocument || document,
                d = (f && f.defaultView) || window;
              if (d.getSelection) {
                var g = d.getSelection(),
                  _ = l.textContent.length,
                  x = Math.min(s.start, _),
                  S = s.end === void 0 ? x : Math.min(s.end, _);
                !g.extend && x > S && ((r = S), (S = x), (x = r));
                var m = Vm(l, x),
                  p = Vm(l, S);
                if (
                  m &&
                  p &&
                  (g.rangeCount !== 1 ||
                    g.anchorNode !== m.node ||
                    g.anchorOffset !== m.offset ||
                    g.focusNode !== p.node ||
                    g.focusOffset !== p.offset)
                ) {
                  var h = f.createRange();
                  (h.setStart(m.node, m.offset),
                    g.removeAllRanges(),
                    x > S
                      ? (g.addRange(h), g.extend(p.node, p.offset))
                      : (h.setEnd(p.node, p.offset), g.addRange(h)));
                }
              }
            }
          }
          for (f = [], g = l; (g = g.parentNode); )
            g.nodeType === 1 && f.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
          for (typeof l.focus == 'function' && l.focus(), l = 0; l < f.length; l++) {
            var v = f[l];
            ((v.element.scrollLeft = v.left), (v.element.scrollTop = v.top));
          }
        }
        ((Su = !!Uf), (Hf = Uf = null));
      } finally {
        ((Ce = i), (ke.p = n), (ae.T = a));
      }
    }
    ((e.current = t), (yt = 2));
  }
}
function ib() {
  if (yt === 2) {
    yt = 0;
    var e = ei,
      t = Ho,
      a = (t.flags & 8772) !== 0;
    if (t.subtreeFlags & 8772 || a) {
      ((a = ae.T), (ae.T = null));
      var n = ke.p;
      ke.p = 2;
      var i = Ce;
      Ce |= 4;
      try {
        By(e, t.alternate, t);
      } finally {
        ((Ce = i), (ke.p = n), (ae.T = a));
      }
    }
    yt = 3;
  }
}
function ob() {
  if (yt === 4 || yt === 3) {
    ((yt = 0), rx());
    var e = ei,
      t = Ho,
      a = kn,
      n = Yy;
    t.subtreeFlags & 10256 || t.flags & 10256
      ? (yt = 5)
      : ((yt = 0), (Ho = ei = null), rb(e, e.pendingLanes));
    var i = e.pendingLanes;
    if (
      (i === 0 && (Jn = null),
      Ng(a),
      (t = t.stateNode),
      da && typeof da.onCommitFiberRoot == 'function')
    )
      try {
        da.onCommitFiberRoot(Al, t, void 0, (t.current.flags & 128) === 128);
      } catch {}
    if (n !== null) {
      ((t = ae.T), (i = ke.p), (ke.p = 2), (ae.T = null));
      try {
        for (var o = e.onRecoverableError, r = 0; r < n.length; r++) {
          var l = n[r];
          o(l.value, { componentStack: l.stack });
        }
      } finally {
        ((ae.T = t), (ke.p = i));
      }
    }
    (kn & 3 && nc(),
      ln(e),
      (i = e.pendingLanes),
      a & 261930 && i & 42 ? (e === $f ? Jr++ : ((Jr = 0), ($f = e))) : (Jr = 0),
      Dl(0, !1));
  }
}
function rb(e, t) {
  (e.pooledCacheLanes &= t) === 0 &&
    ((t = e.pooledCache), t != null && ((e.pooledCache = null), Bl(t)));
}
function nc() {
  return (nb(), ib(), ob(), lb());
}
function lb() {
  if (yt !== 5) return !1;
  var e = ei,
    t = Bf;
  Bf = 0;
  var a = Ng(kn),
    n = ae.T,
    i = ke.p;
  try {
    ((ke.p = 32 > a ? 32 : a), (ae.T = null), (a = Lf), (Lf = null));
    var o = ei,
      r = kn;
    if (((yt = 0), (Ho = ei = null), (kn = 0), Ce & 6)) throw Error(H(331));
    var l = Ce;
    if (
      ((Ce |= 4),
      Py(o.current),
      Vy(o, o.current, r, a),
      (Ce = l),
      Dl(0, !1),
      da && typeof da.onPostCommitFiberRoot == 'function')
    )
      try {
        da.onPostCommitFiberRoot(Al, o);
      } catch {}
    return !0;
  } finally {
    ((ke.p = i), (ae.T = n), rb(e, t));
  }
}
function Sh(e, t, a) {
  ((t = Fa(a, t)), (t = Af(e.stateNode, t, 2)), (e = Wn(e, t, 2)), e !== null && (Ol(e, 2), ln(e)));
}
function Me(e, t, a) {
  if (e.tag === 3) Sh(e, e, a);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Sh(t, e, a);
        break;
      } else if (t.tag === 1) {
        var n = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof n.componentDidCatch == 'function' && (Jn === null || !Jn.has(n)))
        ) {
          ((e = Fa(a, e)),
            (a = xy(2)),
            (n = Wn(t, a, 2)),
            n !== null && (wy(a, n, t, e), Ol(n, 2), ln(n)));
          break;
        }
      }
      t = t.return;
    }
}
function Fd(e, t, a) {
  var n = e.pingCache;
  if (n === null) {
    n = e.pingCache = new Ow();
    var i = new Set();
    n.set(t, i);
  } else ((i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i)));
  i.has(a) || ((pp = !0), i.add(a), (e = $w.bind(null, e, t, a)), t.then(e, e));
}
function $w(e, t, a) {
  var n = e.pingCache;
  (n !== null && n.delete(t),
    (e.pingedLanes |= e.suspendedLanes & a),
    (e.warmLanes &= ~a),
    $e === e &&
      (fe & a) === a &&
      (it === 4 || (it === 3 && (fe & 62914560) === fe && 300 > ca() - ec)
        ? !(Ce & 2) && Vo(e, 0)
        : (mp |= a),
      Uo === fe && (Uo = 0)),
    ln(e));
}
function sb(e, t) {
  (t === 0 && (t = Jv()), (e = Vi(e, t)), e !== null && (Ol(e, t), ln(e)));
}
function Dw(e) {
  var t = e.memoizedState,
    a = 0;
  (t !== null && (a = t.retryLane), sb(e, a));
}
function jw(e, t) {
  var a = 0;
  switch (e.tag) {
    case 31:
    case 13:
      var n = e.stateNode,
        i = e.memoizedState;
      i !== null && (a = i.retryLane);
      break;
    case 19:
      n = e.stateNode;
      break;
    case 22:
      n = e.stateNode._retryCache;
      break;
    default:
      throw Error(H(314));
  }
  (n !== null && n.delete(t), sb(e, a));
}
function Uw(e, t) {
  return Mg(e, t);
}
var pu = null,
  lo = null,
  Df = !1,
  mu = !1,
  Td = !1,
  Yn = 0;
function ln(e) {
  (e !== lo && e.next === null && (lo === null ? (pu = lo = e) : (lo = lo.next = e)),
    (mu = !0),
    Df || ((Df = !0), Vw()));
}
function Dl(e, t) {
  if (!Td && mu) {
    Td = !0;
    do
      for (var a = !1, n = pu; n !== null; ) {
        if (!t)
          if (e !== 0) {
            var i = n.pendingLanes;
            if (i === 0) var o = 0;
            else {
              var r = n.suspendedLanes,
                l = n.pingedLanes;
              ((o = (1 << (31 - fa(42 | e) + 1)) - 1),
                (o &= i & ~(r & ~l)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0));
            }
            o !== 0 && ((a = !0), xh(n, o));
          } else
            ((o = fe),
              (o = Gu(
                n,
                n === $e ? o : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1
              )),
              !(o & 3) || Ml(n, o) || ((a = !0), xh(n, o)));
        n = n.next;
      }
    while (a);
    Td = !1;
  }
}
function Hw() {
  ub();
}
function ub() {
  mu = Df = !1;
  var e = 0;
  Yn !== 0 && Ww() && (e = Yn);
  for (var t = ca(), a = null, n = pu; n !== null; ) {
    var i = n.next,
      o = cb(n, t);
    (o === 0
      ? ((n.next = null), a === null ? (pu = i) : (a.next = i), i === null && (lo = a))
      : ((a = n), (e !== 0 || o & 3) && (mu = !0)),
      (n = i));
  }
  ((yt !== 0 && yt !== 5) || Dl(e, !1), Yn !== 0 && (Yn = 0));
}
function cb(e, t) {
  for (
    var a = e.suspendedLanes,
      n = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes & -62914561;
    0 < o;
  ) {
    var r = 31 - fa(o),
      l = 1 << r,
      s = i[r];
    (s === -1 ? (!(l & a) || l & n) && (i[r] = px(l, t)) : s <= t && (e.expiredLanes |= l),
      (o &= ~l));
  }
  if (
    ((t = $e),
    (a = fe),
    (a = Gu(e, e === t ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
    (n = e.callbackNode),
    a === 0 || (e === t && (Ae === 2 || Ae === 9)) || e.cancelPendingCommit !== null)
  )
    return (n !== null && n !== null && ad(n), (e.callbackNode = null), (e.callbackPriority = 0));
  if (!(a & 3) || Ml(e, a)) {
    if (((t = a & -a), t === e.callbackPriority)) return t;
    switch ((n !== null && ad(n), Ng(a))) {
      case 2:
      case 8:
        a = Zv;
        break;
      case 32:
        a = Zs;
        break;
      case 268435456:
        a = Wv;
        break;
      default:
        a = Zs;
    }
    return (
      (n = db.bind(null, e)),
      (a = Mg(a, n)),
      (e.callbackPriority = t),
      (e.callbackNode = a),
      t
    );
  }
  return (n !== null && n !== null && ad(n), (e.callbackPriority = 2), (e.callbackNode = null), 2);
}
function db(e, t) {
  if (yt !== 0 && yt !== 5) return ((e.callbackNode = null), (e.callbackPriority = 0), null);
  var a = e.callbackNode;
  if (nc() && e.callbackNode !== a) return null;
  var n = fe;
  return (
    (n = Gu(e, e === $e ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1)),
    n === 0
      ? null
      : (Qy(e, n, t),
        cb(e, ca()),
        e.callbackNode != null && e.callbackNode === a ? db.bind(null, e) : null)
  );
}
function xh(e, t) {
  if (nc()) return null;
  Qy(e, t, !0);
}
function Vw() {
  e2(function () {
    Ce & 6 ? Mg(Qv, Hw) : ub();
  });
}
function vp() {
  if (Yn === 0) {
    var e = $o;
    (e === 0 && ((e = ns), (ns <<= 1), !(ns & 261888) && (ns = 256)), (Yn = e));
  }
  return Yn;
}
function wh(e) {
  return e == null || typeof e == 'symbol' || typeof e == 'boolean'
    ? null
    : typeof e == 'function'
      ? e
      : Fs('' + e);
}
function Ch(e, t) {
  var a = t.ownerDocument.createElement('input');
  return (
    (a.name = t.name),
    (a.value = t.value),
    e.id && a.setAttribute('form', e.id),
    t.parentNode.insertBefore(a, t),
    (e = new FormData(e)),
    a.parentNode.removeChild(a),
    e
  );
}
function Gw(e, t, a, n, i) {
  if (t === 'submit' && a && a.stateNode === i) {
    var o = wh((i[ea] || null).action),
      r = n.submitter;
    r &&
      ((t = (t = r[ea] || null) ? wh(t.formAction) : r.getAttribute('formAction')),
      t !== null && ((o = t), (r = null)));
    var l = new Iu('action', 'action', null, n, i);
    e.push({
      event: l,
      listeners: [
        {
          instance: null,
          listener: function () {
            if (n.defaultPrevented) {
              if (Yn !== 0) {
                var s = r ? Ch(i, r) : new FormData(i);
                Tf(a, { pending: !0, data: s, method: i.method, action: o }, null, s);
              }
            } else
              typeof o == 'function' &&
                (l.preventDefault(),
                (s = r ? Ch(i, r) : new FormData(i)),
                Tf(a, { pending: !0, data: s, method: i.method, action: o }, o, s));
          },
          currentTarget: i,
        },
      ],
    });
  }
}
for (var Rd = 0; Rd < hf.length; Rd++) {
  var Ad = hf[Rd],
    Iw = Ad.toLowerCase(),
    Pw = Ad[0].toUpperCase() + Ad.slice(1);
  Pa(Iw, 'on' + Pw);
}
Pa(w_, 'onAnimationEnd');
Pa(C_, 'onAnimationIteration');
Pa(k_, 'onAnimationStart');
Pa('dblclick', 'onDoubleClick');
Pa('focusin', 'onFocus');
Pa('focusout', 'onBlur');
Pa(lw, 'onTransitionRun');
Pa(sw, 'onTransitionStart');
Pa(uw, 'onTransitionCancel');
Pa(E_, 'onTransitionEnd');
Bo('onMouseEnter', ['mouseout', 'mouseover']);
Bo('onMouseLeave', ['mouseout', 'mouseover']);
Bo('onPointerEnter', ['pointerout', 'pointerover']);
Bo('onPointerLeave', ['pointerout', 'pointerover']);
ji('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
ji(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')
);
ji('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
ji('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
ji('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
ji('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var hl =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  qw = new Set(
    'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(hl)
  );
function fb(e, t) {
  t = (t & 4) !== 0;
  for (var a = 0; a < e.length; a++) {
    var n = e[a],
      i = n.event;
    n = n.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var r = n.length - 1; 0 <= r; r--) {
          var l = n[r],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== o && i.isPropagationStopped())) break e;
          ((o = l), (i.currentTarget = u));
          try {
            o(i);
          } catch (c) {
            Js(c);
          }
          ((i.currentTarget = null), (o = s));
        }
      else
        for (r = 0; r < n.length; r++) {
          if (
            ((l = n[r]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== o && i.isPropagationStopped())
          )
            break e;
          ((o = l), (i.currentTarget = u));
          try {
            o(i);
          } catch (c) {
            Js(c);
          }
          ((i.currentTarget = null), (o = s));
        }
    }
  }
}
function ue(e, t) {
  var a = t[sf];
  a === void 0 && (a = t[sf] = new Set());
  var n = e + '__bubble';
  a.has(n) || (gb(t, e, 2, !1), a.add(n));
}
function Md(e, t, a) {
  var n = 0;
  (t && (n |= 4), gb(a, e, n, t));
}
var gs = '_reactListening' + Math.random().toString(36).slice(2);
function _p(e) {
  if (!e[gs]) {
    ((e[gs] = !0),
      i_.forEach(function (a) {
        a !== 'selectionchange' && (qw.has(a) || Md(a, !1, e), Md(a, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gs] || ((t[gs] = !0), Md('selectionchange', !1, t));
  }
}
function gb(e, t, a, n) {
  switch (Eb(t)) {
    case 2:
      var i = b2;
      break;
    case 8:
      i = S2;
      break;
    default:
      i = xp;
  }
  ((a = i.bind(null, t, a, e)),
    (i = void 0),
    !gf || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (i = !0),
    n
      ? i !== void 0
        ? e.addEventListener(t, a, { capture: !0, passive: i })
        : e.addEventListener(t, a, !0)
      : i !== void 0
        ? e.addEventListener(t, a, { passive: i })
        : e.addEventListener(t, a, !1));
}
function Od(e, t, a, n, i) {
  var o = n;
  if (!(t & 1) && !(t & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var r = n.tag;
      if (r === 3 || r === 4) {
        var l = n.stateNode.containerInfo;
        if (l === i) break;
        if (r === 4)
          for (r = n.return; r !== null; ) {
            var s = r.tag;
            if ((s === 3 || s === 4) && r.stateNode.containerInfo === i) return;
            r = r.return;
          }
        for (; l !== null; ) {
          if (((r = po(l)), r === null)) return;
          if (((s = r.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
            n = o = r;
            continue e;
          }
          l = l.parentNode;
        }
      }
      n = n.return;
    }
  f_(function () {
    var u = o,
      c = Lg(a),
      f = [];
    e: {
      var d = F_.get(e);
      if (d !== void 0) {
        var g = Iu,
          _ = e;
        switch (e) {
          case 'keypress':
            if (Rs(a) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = jx;
            break;
          case 'focusin':
            ((_ = 'focus'), (g = ld));
            break;
          case 'focusout':
            ((_ = 'blur'), (g = ld));
            break;
          case 'beforeblur':
          case 'afterblur':
            g = ld;
            break;
          case 'click':
            if (a.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = Om;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = Fx;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = Vx;
            break;
          case w_:
          case C_:
          case k_:
            g = Ax;
            break;
          case E_:
            g = Ix;
            break;
          case 'scroll':
          case 'scrollend':
            g = kx;
            break;
          case 'wheel':
            g = qx;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = Ox;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = zm;
            break;
          case 'toggle':
          case 'beforetoggle':
            g = Yx;
        }
        var x = (t & 4) !== 0,
          S = !x && (e === 'scroll' || e === 'scrollend'),
          m = x ? (d !== null ? d + 'Capture' : null) : d;
        x = [];
        for (var p = u, h; p !== null; ) {
          var v = p;
          if (
            ((h = v.stateNode),
            (v = v.tag),
            (v !== 5 && v !== 26 && v !== 27) ||
              h === null ||
              m === null ||
              ((v = sl(p, m)), v != null && x.push(vl(p, v, h))),
            S)
          )
            break;
          p = p.return;
        }
        0 < x.length && ((d = new g(d, _, null, a, c)), f.push({ event: d, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          d && a !== ff && (_ = a.relatedTarget || a.fromElement) && (po(_) || _[Qo]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window),
          g
            ? ((_ = a.relatedTarget || a.toElement),
              (g = u),
              (_ = _ ? po(_) : null),
              _ !== null &&
                ((S = Rl(_)), (x = _.tag), _ !== S || (x !== 5 && x !== 27 && x !== 6)) &&
                (_ = null))
            : ((g = null), (_ = u)),
          g !== _)
        ) {
          if (
            ((x = Om),
            (v = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((x = zm), (v = 'onPointerLeave'), (m = 'onPointerEnter'), (p = 'pointer')),
            (S = g == null ? d : zr(g)),
            (h = _ == null ? d : zr(_)),
            (d = new x(v, p + 'leave', g, a, c)),
            (d.target = S),
            (d.relatedTarget = h),
            (v = null),
            po(c) === u &&
              ((x = new x(m, p + 'enter', _, a, c)),
              (x.target = h),
              (x.relatedTarget = S),
              (v = x)),
            (S = v),
            g && _)
          )
            t: {
              for (x = Kw, m = g, p = _, h = 0, v = m; v; v = x(v)) h++;
              v = 0;
              for (var C = p; C; C = x(C)) v++;
              for (; 0 < h - v; ) ((m = x(m)), h--);
              for (; 0 < v - h; ) ((p = x(p)), v--);
              for (; h--; ) {
                if (m === p || (p !== null && m === p.alternate)) {
                  x = m;
                  break t;
                }
                ((m = x(m)), (p = x(p)));
              }
              x = null;
            }
          else x = null;
          (g !== null && kh(f, d, g, x, !1), _ !== null && S !== null && kh(f, S, _, x, !0));
        }
      }
      e: {
        if (
          ((d = u ? zr(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && d.type === 'file'))
        )
          var k = Dm;
        else if ($m(d))
          if (__) k = iw;
          else {
            k = aw;
            var E = tw;
          }
        else
          ((g = d.nodeName),
            !g || g.toLowerCase() !== 'input' || (d.type !== 'checkbox' && d.type !== 'radio')
              ? u && Bg(u.elementType) && (k = Dm)
              : (k = nw));
        if (k && (k = k(e, u))) {
          v_(f, k, a, c);
          break e;
        }
        (E && E(e, d, u),
          e === 'focusout' &&
            u &&
            d.type === 'number' &&
            u.memoizedProps.value != null &&
            df(d, 'number', d.value));
      }
      switch (((E = u ? zr(u) : window), e)) {
        case 'focusin':
          ($m(E) || E.contentEditable === 'true') && ((vo = E), (pf = u), (Ir = null));
          break;
        case 'focusout':
          Ir = pf = vo = null;
          break;
        case 'mousedown':
          mf = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ((mf = !1), Gm(f, a, c));
          break;
        case 'selectionchange':
          if (rw) break;
        case 'keydown':
        case 'keyup':
          Gm(f, a, c);
      }
      var M;
      if (jg)
        e: {
          switch (e) {
            case 'compositionstart':
              var z = 'onCompositionStart';
              break e;
            case 'compositionend':
              z = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              z = 'onCompositionUpdate';
              break e;
          }
          z = void 0;
        }
      else
        ho
          ? m_(e, a) && (z = 'onCompositionEnd')
          : e === 'keydown' && a.keyCode === 229 && (z = 'onCompositionStart');
      (z &&
        (p_ &&
          a.locale !== 'ko' &&
          (ho || z !== 'onCompositionStart'
            ? z === 'onCompositionEnd' && ho && (M = g_())
            : ((Pn = c), ($g = 'value' in Pn ? Pn.value : Pn.textContent), (ho = !0))),
        (E = hu(u, z)),
        0 < E.length &&
          ((z = new Nm(z, e, null, a, c)),
          f.push({ event: z, listeners: E }),
          M ? (z.data = M) : ((M = h_(a)), M !== null && (z.data = M)))),
        (M = Qx ? Zx(e, a) : Wx(e, a)) &&
          ((z = hu(u, 'onBeforeInput')),
          0 < z.length &&
            ((E = new Nm('onBeforeInput', 'beforeinput', null, a, c)),
            f.push({ event: E, listeners: z }),
            (E.data = M))),
        Gw(f, e, u, a, c));
    }
    fb(f, t);
  });
}
function vl(e, t, a) {
  return { instance: e, listener: t, currentTarget: a };
}
function hu(e, t) {
  for (var a = t + 'Capture', n = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    if (
      ((i = i.tag),
      (i !== 5 && i !== 26 && i !== 27) ||
        o === null ||
        ((i = sl(e, a)),
        i != null && n.unshift(vl(e, i, o)),
        (i = sl(e, t)),
        i != null && n.push(vl(e, i, o))),
      e.tag === 3)
    )
      return n;
    e = e.return;
  }
  return [];
}
function Kw(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5 && e.tag !== 27);
  return e || null;
}
function kh(e, t, a, n, i) {
  for (var o = t._reactName, r = []; a !== null && a !== n; ) {
    var l = a,
      s = l.alternate,
      u = l.stateNode;
    if (((l = l.tag), s !== null && s === n)) break;
    ((l !== 5 && l !== 26 && l !== 27) ||
      u === null ||
      ((s = u),
      i
        ? ((u = sl(a, o)), u != null && r.unshift(vl(a, u, s)))
        : i || ((u = sl(a, o)), u != null && r.push(vl(a, u, s)))),
      (a = a.return));
  }
  r.length !== 0 && e.push({ event: t, listeners: r });
}
var Yw = /\r\n?/g,
  Xw = /\u0000|\uFFFD/g;
function Eh(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Yw,
      `
`
    )
    .replace(Xw, '');
}
function pb(e, t) {
  return ((t = Eh(t)), Eh(e) === t);
}
function ze(e, t, a, n, i, o) {
  switch (a) {
    case 'children':
      typeof n == 'string'
        ? t === 'body' || (t === 'textarea' && n === '') || Lo(e, n)
        : (typeof n == 'number' || typeof n == 'bigint') && t !== 'body' && Lo(e, '' + n);
      break;
    case 'className':
      rs(e, 'class', n);
      break;
    case 'tabIndex':
      rs(e, 'tabindex', n);
      break;
    case 'dir':
    case 'role':
    case 'viewBox':
    case 'width':
    case 'height':
      rs(e, a, n);
      break;
    case 'style':
      d_(e, n, o);
      break;
    case 'data':
      if (t !== 'object') {
        rs(e, 'data', n);
        break;
      }
    case 'src':
    case 'href':
      if (n === '' && (t !== 'a' || a !== 'href')) {
        e.removeAttribute(a);
        break;
      }
      if (n == null || typeof n == 'function' || typeof n == 'symbol' || typeof n == 'boolean') {
        e.removeAttribute(a);
        break;
      }
      ((n = Fs('' + n)), e.setAttribute(a, n));
      break;
    case 'action':
    case 'formAction':
      if (typeof n == 'function') {
        e.setAttribute(
          a,
          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
        );
        break;
      } else
        typeof o == 'function' &&
          (a === 'formAction'
            ? (t !== 'input' && ze(e, t, 'name', i.name, i, null),
              ze(e, t, 'formEncType', i.formEncType, i, null),
              ze(e, t, 'formMethod', i.formMethod, i, null),
              ze(e, t, 'formTarget', i.formTarget, i, null))
            : (ze(e, t, 'encType', i.encType, i, null),
              ze(e, t, 'method', i.method, i, null),
              ze(e, t, 'target', i.target, i, null)));
      if (n == null || typeof n == 'symbol' || typeof n == 'boolean') {
        e.removeAttribute(a);
        break;
      }
      ((n = Fs('' + n)), e.setAttribute(a, n));
      break;
    case 'onClick':
      n != null && (e.onclick = bn);
      break;
    case 'onScroll':
      n != null && ue('scroll', e);
      break;
    case 'onScrollEnd':
      n != null && ue('scrollend', e);
      break;
    case 'dangerouslySetInnerHTML':
      if (n != null) {
        if (typeof n != 'object' || !('__html' in n)) throw Error(H(61));
        if (((a = n.__html), a != null)) {
          if (i.children != null) throw Error(H(60));
          e.innerHTML = a;
        }
      }
      break;
    case 'multiple':
      e.multiple = n && typeof n != 'function' && typeof n != 'symbol';
      break;
    case 'muted':
      e.muted = n && typeof n != 'function' && typeof n != 'symbol';
      break;
    case 'suppressContentEditableWarning':
    case 'suppressHydrationWarning':
    case 'defaultValue':
    case 'defaultChecked':
    case 'innerHTML':
    case 'ref':
      break;
    case 'autoFocus':
      break;
    case 'xlinkHref':
      if (n == null || typeof n == 'function' || typeof n == 'boolean' || typeof n == 'symbol') {
        e.removeAttribute('xlink:href');
        break;
      }
      ((a = Fs('' + n)), e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', a));
      break;
    case 'contentEditable':
    case 'spellCheck':
    case 'draggable':
    case 'value':
    case 'autoReverse':
    case 'externalResourcesRequired':
    case 'focusable':
    case 'preserveAlpha':
      n != null && typeof n != 'function' && typeof n != 'symbol'
        ? e.setAttribute(a, '' + n)
        : e.removeAttribute(a);
      break;
    case 'inert':
    case 'allowFullScreen':
    case 'async':
    case 'autoPlay':
    case 'controls':
    case 'default':
    case 'defer':
    case 'disabled':
    case 'disablePictureInPicture':
    case 'disableRemotePlayback':
    case 'formNoValidate':
    case 'hidden':
    case 'loop':
    case 'noModule':
    case 'noValidate':
    case 'open':
    case 'playsInline':
    case 'readOnly':
    case 'required':
    case 'reversed':
    case 'scoped':
    case 'seamless':
    case 'itemScope':
      n && typeof n != 'function' && typeof n != 'symbol'
        ? e.setAttribute(a, '')
        : e.removeAttribute(a);
      break;
    case 'capture':
    case 'download':
      n === !0
        ? e.setAttribute(a, '')
        : n !== !1 && n != null && typeof n != 'function' && typeof n != 'symbol'
          ? e.setAttribute(a, n)
          : e.removeAttribute(a);
      break;
    case 'cols':
    case 'rows':
    case 'size':
    case 'span':
      n != null && typeof n != 'function' && typeof n != 'symbol' && !isNaN(n) && 1 <= n
        ? e.setAttribute(a, n)
        : e.removeAttribute(a);
      break;
    case 'rowSpan':
    case 'start':
      n == null || typeof n == 'function' || typeof n == 'symbol' || isNaN(n)
        ? e.removeAttribute(a)
        : e.setAttribute(a, n);
      break;
    case 'popover':
      (ue('beforetoggle', e), ue('toggle', e), Es(e, 'popover', n));
      break;
    case 'xlinkActuate':
      un(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', n);
      break;
    case 'xlinkArcrole':
      un(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', n);
      break;
    case 'xlinkRole':
      un(e, 'http://www.w3.org/1999/xlink', 'xlink:role', n);
      break;
    case 'xlinkShow':
      un(e, 'http://www.w3.org/1999/xlink', 'xlink:show', n);
      break;
    case 'xlinkTitle':
      un(e, 'http://www.w3.org/1999/xlink', 'xlink:title', n);
      break;
    case 'xlinkType':
      un(e, 'http://www.w3.org/1999/xlink', 'xlink:type', n);
      break;
    case 'xmlBase':
      un(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', n);
      break;
    case 'xmlLang':
      un(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', n);
      break;
    case 'xmlSpace':
      un(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', n);
      break;
    case 'is':
      Es(e, 'is', n);
      break;
    case 'innerText':
    case 'textContent':
      break;
    default:
      (!(2 < a.length) || (a[0] !== 'o' && a[0] !== 'O') || (a[1] !== 'n' && a[1] !== 'N')) &&
        ((a = wx.get(a) || a), Es(e, a, n));
  }
}
function jf(e, t, a, n, i, o) {
  switch (a) {
    case 'style':
      d_(e, n, o);
      break;
    case 'dangerouslySetInnerHTML':
      if (n != null) {
        if (typeof n != 'object' || !('__html' in n)) throw Error(H(61));
        if (((a = n.__html), a != null)) {
          if (i.children != null) throw Error(H(60));
          e.innerHTML = a;
        }
      }
      break;
    case 'children':
      typeof n == 'string'
        ? Lo(e, n)
        : (typeof n == 'number' || typeof n == 'bigint') && Lo(e, '' + n);
      break;
    case 'onScroll':
      n != null && ue('scroll', e);
      break;
    case 'onScrollEnd':
      n != null && ue('scrollend', e);
      break;
    case 'onClick':
      n != null && (e.onclick = bn);
      break;
    case 'suppressContentEditableWarning':
    case 'suppressHydrationWarning':
    case 'innerHTML':
    case 'ref':
      break;
    case 'innerText':
    case 'textContent':
      break;
    default:
      if (!o_.hasOwnProperty(a))
        e: {
          if (
            a[0] === 'o' &&
            a[1] === 'n' &&
            ((i = a.endsWith('Capture')),
            (t = a.slice(2, i ? a.length - 7 : void 0)),
            (o = e[ea] || null),
            (o = o != null ? o[a] : null),
            typeof o == 'function' && e.removeEventListener(t, o, i),
            typeof n == 'function')
          ) {
            (typeof o != 'function' &&
              o !== null &&
              (a in e ? (e[a] = null) : e.hasAttribute(a) && e.removeAttribute(a)),
              e.addEventListener(t, n, i));
            break e;
          }
          a in e ? (e[a] = n) : n === !0 ? e.setAttribute(a, '') : Es(e, a, n);
        }
  }
}
function Dt(e, t, a) {
  switch (t) {
    case 'div':
    case 'span':
    case 'svg':
    case 'path':
    case 'a':
    case 'g':
    case 'p':
    case 'li':
      break;
    case 'img':
      (ue('error', e), ue('load', e));
      var n = !1,
        i = !1,
        o;
      for (o in a)
        if (a.hasOwnProperty(o)) {
          var r = a[o];
          if (r != null)
            switch (o) {
              case 'src':
                n = !0;
                break;
              case 'srcSet':
                i = !0;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(H(137, t));
              default:
                ze(e, t, o, r, a, null);
            }
        }
      (i && ze(e, t, 'srcSet', a.srcSet, a, null), n && ze(e, t, 'src', a.src, a, null));
      return;
    case 'input':
      ue('invalid', e);
      var l = (o = r = i = null),
        s = null,
        u = null;
      for (n in a)
        if (a.hasOwnProperty(n)) {
          var c = a[n];
          if (c != null)
            switch (n) {
              case 'name':
                i = c;
                break;
              case 'type':
                r = c;
                break;
              case 'checked':
                s = c;
                break;
              case 'defaultChecked':
                u = c;
                break;
              case 'value':
                o = c;
                break;
              case 'defaultValue':
                l = c;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (c != null) throw Error(H(137, t));
                break;
              default:
                ze(e, t, n, c, a, null);
            }
        }
      s_(e, o, l, s, u, r, i, !1);
      return;
    case 'select':
      (ue('invalid', e), (n = r = o = null));
      for (i in a)
        if (a.hasOwnProperty(i) && ((l = a[i]), l != null))
          switch (i) {
            case 'value':
              o = l;
              break;
            case 'defaultValue':
              r = l;
              break;
            case 'multiple':
              n = l;
            default:
              ze(e, t, i, l, a, null);
          }
      ((t = o),
        (a = r),
        (e.multiple = !!n),
        t != null ? ko(e, !!n, t, !1) : a != null && ko(e, !!n, a, !0));
      return;
    case 'textarea':
      (ue('invalid', e), (o = i = n = null));
      for (r in a)
        if (a.hasOwnProperty(r) && ((l = a[r]), l != null))
          switch (r) {
            case 'value':
              n = l;
              break;
            case 'defaultValue':
              i = l;
              break;
            case 'children':
              o = l;
              break;
            case 'dangerouslySetInnerHTML':
              if (l != null) throw Error(H(91));
              break;
            default:
              ze(e, t, r, l, a, null);
          }
      c_(e, n, i, o);
      return;
    case 'option':
      for (s in a)
        if (a.hasOwnProperty(s) && ((n = a[s]), n != null))
          switch (s) {
            case 'selected':
              e.selected = n && typeof n != 'function' && typeof n != 'symbol';
              break;
            default:
              ze(e, t, s, n, a, null);
          }
      return;
    case 'dialog':
      (ue('beforetoggle', e), ue('toggle', e), ue('cancel', e), ue('close', e));
      break;
    case 'iframe':
    case 'object':
      ue('load', e);
      break;
    case 'video':
    case 'audio':
      for (n = 0; n < hl.length; n++) ue(hl[n], e);
      break;
    case 'image':
      (ue('error', e), ue('load', e));
      break;
    case 'details':
      ue('toggle', e);
      break;
    case 'embed':
    case 'source':
    case 'link':
      (ue('error', e), ue('load', e));
    case 'area':
    case 'base':
    case 'br':
    case 'col':
    case 'hr':
    case 'keygen':
    case 'meta':
    case 'param':
    case 'track':
    case 'wbr':
    case 'menuitem':
      for (u in a)
        if (a.hasOwnProperty(u) && ((n = a[u]), n != null))
          switch (u) {
            case 'children':
            case 'dangerouslySetInnerHTML':
              throw Error(H(137, t));
            default:
              ze(e, t, u, n, a, null);
          }
      return;
    default:
      if (Bg(t)) {
        for (c in a) a.hasOwnProperty(c) && ((n = a[c]), n !== void 0 && jf(e, t, c, n, a, void 0));
        return;
      }
  }
  for (l in a) a.hasOwnProperty(l) && ((n = a[l]), n != null && ze(e, t, l, n, a, null));
}
function Qw(e, t, a, n) {
  switch (t) {
    case 'div':
    case 'span':
    case 'svg':
    case 'path':
    case 'a':
    case 'g':
    case 'p':
    case 'li':
      break;
    case 'input':
      var i = null,
        o = null,
        r = null,
        l = null,
        s = null,
        u = null,
        c = null;
      for (g in a) {
        var f = a[g];
        if (a.hasOwnProperty(g) && f != null)
          switch (g) {
            case 'checked':
              break;
            case 'value':
              break;
            case 'defaultValue':
              s = f;
            default:
              n.hasOwnProperty(g) || ze(e, t, g, null, n, f);
          }
      }
      for (var d in n) {
        var g = n[d];
        if (((f = a[d]), n.hasOwnProperty(d) && (g != null || f != null)))
          switch (d) {
            case 'type':
              o = g;
              break;
            case 'name':
              i = g;
              break;
            case 'checked':
              u = g;
              break;
            case 'defaultChecked':
              c = g;
              break;
            case 'value':
              r = g;
              break;
            case 'defaultValue':
              l = g;
              break;
            case 'children':
            case 'dangerouslySetInnerHTML':
              if (g != null) throw Error(H(137, t));
              break;
            default:
              g !== f && ze(e, t, d, g, n, f);
          }
      }
      cf(e, r, l, s, u, c, o, i);
      return;
    case 'select':
      g = r = l = d = null;
      for (o in a)
        if (((s = a[o]), a.hasOwnProperty(o) && s != null))
          switch (o) {
            case 'value':
              break;
            case 'multiple':
              g = s;
            default:
              n.hasOwnProperty(o) || ze(e, t, o, null, n, s);
          }
      for (i in n)
        if (((o = n[i]), (s = a[i]), n.hasOwnProperty(i) && (o != null || s != null)))
          switch (i) {
            case 'value':
              d = o;
              break;
            case 'defaultValue':
              l = o;
              break;
            case 'multiple':
              r = o;
            default:
              o !== s && ze(e, t, i, o, n, s);
          }
      ((t = l),
        (a = r),
        (n = g),
        d != null
          ? ko(e, !!a, d, !1)
          : !!n != !!a && (t != null ? ko(e, !!a, t, !0) : ko(e, !!a, a ? [] : '', !1)));
      return;
    case 'textarea':
      g = d = null;
      for (l in a)
        if (((i = a[l]), a.hasOwnProperty(l) && i != null && !n.hasOwnProperty(l)))
          switch (l) {
            case 'value':
              break;
            case 'children':
              break;
            default:
              ze(e, t, l, null, n, i);
          }
      for (r in n)
        if (((i = n[r]), (o = a[r]), n.hasOwnProperty(r) && (i != null || o != null)))
          switch (r) {
            case 'value':
              d = i;
              break;
            case 'defaultValue':
              g = i;
              break;
            case 'children':
              break;
            case 'dangerouslySetInnerHTML':
              if (i != null) throw Error(H(91));
              break;
            default:
              i !== o && ze(e, t, r, i, n, o);
          }
      u_(e, d, g);
      return;
    case 'option':
      for (var _ in a)
        if (((d = a[_]), a.hasOwnProperty(_) && d != null && !n.hasOwnProperty(_)))
          switch (_) {
            case 'selected':
              e.selected = !1;
              break;
            default:
              ze(e, t, _, null, n, d);
          }
      for (s in n)
        if (((d = n[s]), (g = a[s]), n.hasOwnProperty(s) && d !== g && (d != null || g != null)))
          switch (s) {
            case 'selected':
              e.selected = d && typeof d != 'function' && typeof d != 'symbol';
              break;
            default:
              ze(e, t, s, d, n, g);
          }
      return;
    case 'img':
    case 'link':
    case 'area':
    case 'base':
    case 'br':
    case 'col':
    case 'embed':
    case 'hr':
    case 'keygen':
    case 'meta':
    case 'param':
    case 'source':
    case 'track':
    case 'wbr':
    case 'menuitem':
      for (var x in a)
        ((d = a[x]),
          a.hasOwnProperty(x) && d != null && !n.hasOwnProperty(x) && ze(e, t, x, null, n, d));
      for (u in n)
        if (((d = n[u]), (g = a[u]), n.hasOwnProperty(u) && d !== g && (d != null || g != null)))
          switch (u) {
            case 'children':
            case 'dangerouslySetInnerHTML':
              if (d != null) throw Error(H(137, t));
              break;
            default:
              ze(e, t, u, d, n, g);
          }
      return;
    default:
      if (Bg(t)) {
        for (var S in a)
          ((d = a[S]),
            a.hasOwnProperty(S) &&
              d !== void 0 &&
              !n.hasOwnProperty(S) &&
              jf(e, t, S, void 0, n, d));
        for (c in n)
          ((d = n[c]),
            (g = a[c]),
            !n.hasOwnProperty(c) ||
              d === g ||
              (d === void 0 && g === void 0) ||
              jf(e, t, c, d, n, g));
        return;
      }
  }
  for (var m in a)
    ((d = a[m]),
      a.hasOwnProperty(m) && d != null && !n.hasOwnProperty(m) && ze(e, t, m, null, n, d));
  for (f in n)
    ((d = n[f]),
      (g = a[f]),
      !n.hasOwnProperty(f) || d === g || (d == null && g == null) || ze(e, t, f, d, n, g));
}
function Fh(e) {
  switch (e) {
    case 'css':
    case 'script':
    case 'font':
    case 'img':
    case 'image':
    case 'input':
    case 'link':
      return !0;
    default:
      return !1;
  }
}
function Zw() {
  if (typeof performance.getEntriesByType == 'function') {
    for (var e = 0, t = 0, a = performance.getEntriesByType('resource'), n = 0; n < a.length; n++) {
      var i = a[n],
        o = i.transferSize,
        r = i.initiatorType,
        l = i.duration;
      if (o && l && Fh(r)) {
        for (r = 0, l = i.responseEnd, n += 1; n < a.length; n++) {
          var s = a[n],
            u = s.startTime;
          if (u > l) break;
          var c = s.transferSize,
            f = s.initiatorType;
          c && Fh(f) && ((s = s.responseEnd), (r += c * (s < l ? 1 : (l - u) / (s - u))));
        }
        if ((--n, (t += (8 * (o + r)) / (i.duration / 1e3)), e++, 10 < e)) break;
      }
    }
    if (0 < e) return t / e / 1e6;
  }
  return navigator.connection && ((e = navigator.connection.downlink), typeof e == 'number')
    ? e
    : 5;
}
var Uf = null,
  Hf = null;
function vu(e) {
  return e.nodeType === 9 ? e : e.ownerDocument;
}
function Th(e) {
  switch (e) {
    case 'http://www.w3.org/2000/svg':
      return 1;
    case 'http://www.w3.org/1998/Math/MathML':
      return 2;
    default:
      return 0;
  }
}
function mb(e, t) {
  if (e === 0)
    switch (t) {
      case 'svg':
        return 1;
      case 'math':
        return 2;
      default:
        return 0;
    }
  return e === 1 && t === 'foreignObject' ? 0 : e;
}
function Vf(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    typeof t.children == 'bigint' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Nd = null;
function Ww() {
  var e = window.event;
  return e && e.type === 'popstate' ? (e === Nd ? !1 : ((Nd = e), !0)) : ((Nd = null), !1);
}
var hb = typeof setTimeout == 'function' ? setTimeout : void 0,
  Jw = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Rh = typeof Promise == 'function' ? Promise : void 0,
  e2 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Rh < 'u'
        ? function (e) {
            return Rh.resolve(null).then(e).catch(t2);
          }
        : hb;
function t2(e) {
  setTimeout(function () {
    throw e;
  });
}
function fi(e) {
  return e === 'head';
}
function Ah(e, t) {
  var a = t,
    n = 0;
  do {
    var i = a.nextSibling;
    if ((e.removeChild(a), i && i.nodeType === 8))
      if (((a = i.data), a === '/$' || a === '/&')) {
        if (n === 0) {
          (e.removeChild(i), Io(t));
          return;
        }
        n--;
      } else if (a === '$' || a === '$?' || a === '$~' || a === '$!' || a === '&') n++;
      else if (a === 'html') el(e.ownerDocument.documentElement);
      else if (a === 'head') {
        ((a = e.ownerDocument.head), el(a));
        for (var o = a.firstChild; o; ) {
          var r = o.nextSibling,
            l = o.nodeName;
          (o[Nl] ||
            l === 'SCRIPT' ||
            l === 'STYLE' ||
            (l === 'LINK' && o.rel.toLowerCase() === 'stylesheet') ||
            a.removeChild(o),
            (o = r));
        }
      } else a === 'body' && el(e.ownerDocument.body);
    a = i;
  } while (a);
  Io(t);
}
function Mh(e, t) {
  var a = e;
  e = 0;
  do {
    var n = a.nextSibling;
    if (
      (a.nodeType === 1
        ? t
          ? ((a._stashedDisplay = a.style.display), (a.style.display = 'none'))
          : ((a.style.display = a._stashedDisplay || ''),
            a.getAttribute('style') === '' && a.removeAttribute('style'))
        : a.nodeType === 3 &&
          (t
            ? ((a._stashedText = a.nodeValue), (a.nodeValue = ''))
            : (a.nodeValue = a._stashedText || '')),
      n && n.nodeType === 8)
    )
      if (((a = n.data), a === '/$')) {
        if (e === 0) break;
        e--;
      } else (a !== '$' && a !== '$?' && a !== '$~' && a !== '$!') || e++;
    a = n;
  } while (a);
}
function Gf(e) {
  var t = e.firstChild;
  for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
    var a = t;
    switch (((t = t.nextSibling), a.nodeName)) {
      case 'HTML':
      case 'HEAD':
      case 'BODY':
        (Gf(a), zg(a));
        continue;
      case 'SCRIPT':
      case 'STYLE':
        continue;
      case 'LINK':
        if (a.rel.toLowerCase() === 'stylesheet') continue;
    }
    e.removeChild(a);
  }
}
function a2(e, t, a, n) {
  for (; e.nodeType === 1; ) {
    var i = a;
    if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
      if (!n && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
    } else if (n) {
      if (!e[Nl])
        switch (t) {
          case 'meta':
            if (!e.hasAttribute('itemprop')) break;
            return e;
          case 'link':
            if (
              ((o = e.getAttribute('rel')), o === 'stylesheet' && e.hasAttribute('data-precedence'))
            )
              break;
            if (
              o !== i.rel ||
              e.getAttribute('href') !== (i.href == null || i.href === '' ? null : i.href) ||
              e.getAttribute('crossorigin') !== (i.crossOrigin == null ? null : i.crossOrigin) ||
              e.getAttribute('title') !== (i.title == null ? null : i.title)
            )
              break;
            return e;
          case 'style':
            if (e.hasAttribute('data-precedence')) break;
            return e;
          case 'script':
            if (
              ((o = e.getAttribute('src')),
              (o !== (i.src == null ? null : i.src) ||
                e.getAttribute('type') !== (i.type == null ? null : i.type) ||
                e.getAttribute('crossorigin') !== (i.crossOrigin == null ? null : i.crossOrigin)) &&
                o &&
                e.hasAttribute('async') &&
                !e.hasAttribute('itemprop'))
            )
              break;
            return e;
          default:
            return e;
        }
    } else if (t === 'input' && e.type === 'hidden') {
      var o = i.name == null ? null : '' + i.name;
      if (i.type === 'hidden' && e.getAttribute('name') === o) return e;
    } else return e;
    if (((e = Aa(e.nextSibling)), e === null)) break;
  }
  return null;
}
function n2(e, t, a) {
  if (t === '') return null;
  for (; e.nodeType !== 3; )
    if (
      ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !a) ||
      ((e = Aa(e.nextSibling)), e === null)
    )
      return null;
  return e;
}
function vb(e, t) {
  for (; e.nodeType !== 8; )
    if (
      ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !t) ||
      ((e = Aa(e.nextSibling)), e === null)
    )
      return null;
  return e;
}
function If(e) {
  return e.data === '$?' || e.data === '$~';
}
function Pf(e) {
  return e.data === '$!' || (e.data === '$?' && e.ownerDocument.readyState !== 'loading');
}
function i2(e, t) {
  var a = e.ownerDocument;
  if (e.data === '$~') e._reactRetry = t;
  else if (e.data !== '$?' || a.readyState !== 'loading') t();
  else {
    var n = function () {
      (t(), a.removeEventListener('DOMContentLoaded', n));
    };
    (a.addEventListener('DOMContentLoaded', n), (e._reactRetry = n));
  }
}
function Aa(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (
        ((t = e.data),
        t === '$' || t === '$!' || t === '$?' || t === '$~' || t === '&' || t === 'F!' || t === 'F')
      )
        break;
      if (t === '/$' || t === '/&') return null;
    }
  }
  return e;
}
var qf = null;
function Oh(e) {
  e = e.nextSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var a = e.data;
      if (a === '/$' || a === '/&') {
        if (t === 0) return Aa(e.nextSibling);
        t--;
      } else (a !== '$' && a !== '$!' && a !== '$?' && a !== '$~' && a !== '&') || t++;
    }
    e = e.nextSibling;
  }
  return null;
}
function Nh(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var a = e.data;
      if (a === '$' || a === '$!' || a === '$?' || a === '$~' || a === '&') {
        if (t === 0) return e;
        t--;
      } else (a !== '/$' && a !== '/&') || t++;
    }
    e = e.previousSibling;
  }
  return null;
}
function _b(e, t, a) {
  switch (((t = vu(a)), e)) {
    case 'html':
      if (((e = t.documentElement), !e)) throw Error(H(452));
      return e;
    case 'head':
      if (((e = t.head), !e)) throw Error(H(453));
      return e;
    case 'body':
      if (((e = t.body), !e)) throw Error(H(454));
      return e;
    default:
      throw Error(H(451));
  }
}
function el(e) {
  for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
  zg(e);
}
var Ma = new Map(),
  zh = new Set();
function _u(e) {
  return typeof e.getRootNode == 'function'
    ? e.getRootNode()
    : e.nodeType === 9
      ? e
      : e.ownerDocument;
}
var zn = ke.d;
ke.d = { f: o2, r: r2, D: l2, C: s2, L: u2, m: c2, X: f2, S: d2, M: g2 };
function o2() {
  var e = zn.f(),
    t = tc();
  return e || t;
}
function r2(e) {
  var t = Zo(e);
  t !== null && t.tag === 5 && t.type === 'form' ? dy(t) : zn.r(e);
}
var tr = typeof document > 'u' ? null : document;
function yb(e, t, a) {
  var n = tr;
  if (n && typeof t == 'string' && t) {
    var i = Ea(t);
    ((i = 'link[rel="' + e + '"][href="' + i + '"]'),
      typeof a == 'string' && (i += '[crossorigin="' + a + '"]'),
      zh.has(i) ||
        (zh.add(i),
        (e = { rel: e, crossOrigin: a, href: t }),
        n.querySelector(i) === null &&
          ((t = n.createElement('link')), Dt(t, 'link', e), Et(t), n.head.appendChild(t))));
  }
}
function l2(e) {
  (zn.D(e), yb('dns-prefetch', e, null));
}
function s2(e, t) {
  (zn.C(e, t), yb('preconnect', e, t));
}
function u2(e, t, a) {
  zn.L(e, t, a);
  var n = tr;
  if (n && e && t) {
    var i = 'link[rel="preload"][as="' + Ea(t) + '"]';
    t === 'image' && a && a.imageSrcSet
      ? ((i += '[imagesrcset="' + Ea(a.imageSrcSet) + '"]'),
        typeof a.imageSizes == 'string' && (i += '[imagesizes="' + Ea(a.imageSizes) + '"]'))
      : (i += '[href="' + Ea(e) + '"]');
    var o = i;
    switch (t) {
      case 'style':
        o = Go(e);
        break;
      case 'script':
        o = ar(e);
    }
    Ma.has(o) ||
      ((e = qe(
        { rel: 'preload', href: t === 'image' && a && a.imageSrcSet ? void 0 : e, as: t },
        a
      )),
      Ma.set(o, e),
      n.querySelector(i) !== null ||
        (t === 'style' && n.querySelector(jl(o))) ||
        (t === 'script' && n.querySelector(Ul(o))) ||
        ((t = n.createElement('link')), Dt(t, 'link', e), Et(t), n.head.appendChild(t)));
  }
}
function c2(e, t) {
  zn.m(e, t);
  var a = tr;
  if (a && e) {
    var n = t && typeof t.as == 'string' ? t.as : 'script',
      i = 'link[rel="modulepreload"][as="' + Ea(n) + '"][href="' + Ea(e) + '"]',
      o = i;
    switch (n) {
      case 'audioworklet':
      case 'paintworklet':
      case 'serviceworker':
      case 'sharedworker':
      case 'worker':
      case 'script':
        o = ar(e);
    }
    if (
      !Ma.has(o) &&
      ((e = qe({ rel: 'modulepreload', href: e }, t)), Ma.set(o, e), a.querySelector(i) === null)
    ) {
      switch (n) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          if (a.querySelector(Ul(o))) return;
      }
      ((n = a.createElement('link')), Dt(n, 'link', e), Et(n), a.head.appendChild(n));
    }
  }
}
function d2(e, t, a) {
  zn.S(e, t, a);
  var n = tr;
  if (n && e) {
    var i = Co(n).hoistableStyles,
      o = Go(e);
    t = t || 'default';
    var r = i.get(o);
    if (!r) {
      var l = { loading: 0, preload: null };
      if ((r = n.querySelector(jl(o)))) l.loading = 5;
      else {
        ((e = qe({ rel: 'stylesheet', href: e, 'data-precedence': t }, a)),
          (a = Ma.get(o)) && yp(e, a));
        var s = (r = n.createElement('link'));
        (Et(s),
          Dt(s, 'link', e),
          (s._p = new Promise(function (u, c) {
            ((s.onload = u), (s.onerror = c));
          })),
          s.addEventListener('load', function () {
            l.loading |= 1;
          }),
          s.addEventListener('error', function () {
            l.loading |= 2;
          }),
          (l.loading |= 4),
          $s(r, t, n));
      }
      ((r = { type: 'stylesheet', instance: r, count: 1, state: l }), i.set(o, r));
    }
  }
}
function f2(e, t) {
  zn.X(e, t);
  var a = tr;
  if (a && e) {
    var n = Co(a).hoistableScripts,
      i = ar(e),
      o = n.get(i);
    o ||
      ((o = a.querySelector(Ul(i))),
      o ||
        ((e = qe({ src: e, async: !0 }, t)),
        (t = Ma.get(i)) && bp(e, t),
        (o = a.createElement('script')),
        Et(o),
        Dt(o, 'link', e),
        a.head.appendChild(o)),
      (o = { type: 'script', instance: o, count: 1, state: null }),
      n.set(i, o));
  }
}
function g2(e, t) {
  zn.M(e, t);
  var a = tr;
  if (a && e) {
    var n = Co(a).hoistableScripts,
      i = ar(e),
      o = n.get(i);
    o ||
      ((o = a.querySelector(Ul(i))),
      o ||
        ((e = qe({ src: e, async: !0, type: 'module' }, t)),
        (t = Ma.get(i)) && bp(e, t),
        (o = a.createElement('script')),
        Et(o),
        Dt(o, 'link', e),
        a.head.appendChild(o)),
      (o = { type: 'script', instance: o, count: 1, state: null }),
      n.set(i, o));
  }
}
function Bh(e, t, a, n) {
  var i = (i = Xn.current) ? _u(i) : null;
  if (!i) throw Error(H(446));
  switch (e) {
    case 'meta':
    case 'title':
      return null;
    case 'style':
      return typeof a.precedence == 'string' && typeof a.href == 'string'
        ? ((t = Go(a.href)),
          (a = Co(i).hoistableStyles),
          (n = a.get(t)),
          n || ((n = { type: 'style', instance: null, count: 0, state: null }), a.set(t, n)),
          n)
        : { type: 'void', instance: null, count: 0, state: null };
    case 'link':
      if (a.rel === 'stylesheet' && typeof a.href == 'string' && typeof a.precedence == 'string') {
        e = Go(a.href);
        var o = Co(i).hoistableStyles,
          r = o.get(e);
        if (
          (r ||
            ((i = i.ownerDocument || i),
            (r = {
              type: 'stylesheet',
              instance: null,
              count: 0,
              state: { loading: 0, preload: null },
            }),
            o.set(e, r),
            (o = i.querySelector(jl(e))) && !o._p && ((r.instance = o), (r.state.loading = 5)),
            Ma.has(e) ||
              ((a = {
                rel: 'preload',
                as: 'style',
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy,
              }),
              Ma.set(e, a),
              o || p2(i, e, a, r.state))),
          t && n === null)
        )
          throw Error(H(528, ''));
        return r;
      }
      if (t && n !== null) throw Error(H(529, ''));
      return null;
    case 'script':
      return (
        (t = a.async),
        (a = a.src),
        typeof a == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
          ? ((t = ar(a)),
            (a = Co(i).hoistableScripts),
            (n = a.get(t)),
            n || ((n = { type: 'script', instance: null, count: 0, state: null }), a.set(t, n)),
            n)
          : { type: 'void', instance: null, count: 0, state: null }
      );
    default:
      throw Error(H(444, e));
  }
}
function Go(e) {
  return 'href="' + Ea(e) + '"';
}
function jl(e) {
  return 'link[rel="stylesheet"][' + e + ']';
}
function bb(e) {
  return qe({}, e, { 'data-precedence': e.precedence, precedence: null });
}
function p2(e, t, a, n) {
  e.querySelector('link[rel="preload"][as="style"][' + t + ']')
    ? (n.loading = 1)
    : ((t = e.createElement('link')),
      (n.preload = t),
      t.addEventListener('load', function () {
        return (n.loading |= 1);
      }),
      t.addEventListener('error', function () {
        return (n.loading |= 2);
      }),
      Dt(t, 'link', a),
      Et(t),
      e.head.appendChild(t));
}
function ar(e) {
  return '[src="' + Ea(e) + '"]';
}
function Ul(e) {
  return 'script[async]' + e;
}
function Lh(e, t, a) {
  if ((t.count++, t.instance === null))
    switch (t.type) {
      case 'style':
        var n = e.querySelector('style[data-href~="' + Ea(a.href) + '"]');
        if (n) return ((t.instance = n), Et(n), n);
        var i = qe({}, a, {
          'data-href': a.href,
          'data-precedence': a.precedence,
          href: null,
          precedence: null,
        });
        return (
          (n = (e.ownerDocument || e).createElement('style')),
          Et(n),
          Dt(n, 'style', i),
          $s(n, a.precedence, e),
          (t.instance = n)
        );
      case 'stylesheet':
        i = Go(a.href);
        var o = e.querySelector(jl(i));
        if (o) return ((t.state.loading |= 4), (t.instance = o), Et(o), o);
        ((n = bb(a)),
          (i = Ma.get(i)) && yp(n, i),
          (o = (e.ownerDocument || e).createElement('link')),
          Et(o));
        var r = o;
        return (
          (r._p = new Promise(function (l, s) {
            ((r.onload = l), (r.onerror = s));
          })),
          Dt(o, 'link', n),
          (t.state.loading |= 4),
          $s(o, a.precedence, e),
          (t.instance = o)
        );
      case 'script':
        return (
          (o = ar(a.src)),
          (i = e.querySelector(Ul(o)))
            ? ((t.instance = i), Et(i), i)
            : ((n = a),
              (i = Ma.get(o)) && ((n = qe({}, a)), bp(n, i)),
              (e = e.ownerDocument || e),
              (i = e.createElement('script')),
              Et(i),
              Dt(i, 'link', n),
              e.head.appendChild(i),
              (t.instance = i))
        );
      case 'void':
        return null;
      default:
        throw Error(H(443, t.type));
    }
  else
    t.type === 'stylesheet' &&
      !(t.state.loading & 4) &&
      ((n = t.instance), (t.state.loading |= 4), $s(n, a.precedence, e));
  return t.instance;
}
function $s(e, t, a) {
  for (
    var n = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
      i = n.length ? n[n.length - 1] : null,
      o = i,
      r = 0;
    r < n.length;
    r++
  ) {
    var l = n[r];
    if (l.dataset.precedence === t) o = l;
    else if (o !== i) break;
  }
  o
    ? o.parentNode.insertBefore(e, o.nextSibling)
    : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
}
function yp(e, t) {
  (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
    e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
    e.title == null && (e.title = t.title));
}
function bp(e, t) {
  (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
    e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
    e.integrity == null && (e.integrity = t.integrity));
}
var Ds = null;
function $h(e, t, a) {
  if (Ds === null) {
    var n = new Map(),
      i = (Ds = new Map());
    i.set(a, n);
  } else ((i = Ds), (n = i.get(a)), n || ((n = new Map()), i.set(a, n)));
  if (n.has(e)) return n;
  for (n.set(e, null), a = a.getElementsByTagName(e), i = 0; i < a.length; i++) {
    var o = a[i];
    if (
      !(o[Nl] || o[Bt] || (e === 'link' && o.getAttribute('rel') === 'stylesheet')) &&
      o.namespaceURI !== 'http://www.w3.org/2000/svg'
    ) {
      var r = o.getAttribute(t) || '';
      r = e + r;
      var l = n.get(r);
      l ? l.push(o) : n.set(r, [o]);
    }
  }
  return n;
}
function Dh(e, t, a) {
  ((e = e.ownerDocument || e),
    e.head.insertBefore(a, t === 'title' ? e.querySelector('head > title') : null));
}
function m2(e, t, a) {
  if (a === 1 || t.itemProp != null) return !1;
  switch (e) {
    case 'meta':
    case 'title':
      return !0;
    case 'style':
      if (typeof t.precedence != 'string' || typeof t.href != 'string' || t.href === '') break;
      return !0;
    case 'link':
      if (
        typeof t.rel != 'string' ||
        typeof t.href != 'string' ||
        t.href === '' ||
        t.onLoad ||
        t.onError
      )
        break;
      switch (t.rel) {
        case 'stylesheet':
          return ((e = t.disabled), typeof t.precedence == 'string' && e == null);
        default:
          return !0;
      }
    case 'script':
      if (
        t.async &&
        typeof t.async != 'function' &&
        typeof t.async != 'symbol' &&
        !t.onLoad &&
        !t.onError &&
        t.src &&
        typeof t.src == 'string'
      )
        return !0;
  }
  return !1;
}
function Sb(e) {
  return !(e.type === 'stylesheet' && !(e.state.loading & 3));
}
function h2(e, t, a, n) {
  if (
    a.type === 'stylesheet' &&
    (typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
    !(a.state.loading & 4)
  ) {
    if (a.instance === null) {
      var i = Go(n.href),
        o = t.querySelector(jl(i));
      if (o) {
        ((t = o._p),
          t !== null &&
            typeof t == 'object' &&
            typeof t.then == 'function' &&
            (e.count++, (e = yu.bind(e)), t.then(e, e)),
          (a.state.loading |= 4),
          (a.instance = o),
          Et(o));
        return;
      }
      ((o = t.ownerDocument || t),
        (n = bb(n)),
        (i = Ma.get(i)) && yp(n, i),
        (o = o.createElement('link')),
        Et(o));
      var r = o;
      ((r._p = new Promise(function (l, s) {
        ((r.onload = l), (r.onerror = s));
      })),
        Dt(o, 'link', n),
        (a.instance = o));
    }
    (e.stylesheets === null && (e.stylesheets = new Map()),
      e.stylesheets.set(a, t),
      (t = a.state.preload) &&
        !(a.state.loading & 3) &&
        (e.count++,
        (a = yu.bind(e)),
        t.addEventListener('load', a),
        t.addEventListener('error', a)));
  }
}
var zd = 0;
function v2(e, t) {
  return (
    e.stylesheets && e.count === 0 && js(e, e.stylesheets),
    0 < e.count || 0 < e.imgCount
      ? function (a) {
          var n = setTimeout(function () {
            if ((e.stylesheets && js(e, e.stylesheets), e.unsuspend)) {
              var o = e.unsuspend;
              ((e.unsuspend = null), o());
            }
          }, 6e4 + t);
          0 < e.imgBytes && zd === 0 && (zd = 62500 * Zw());
          var i = setTimeout(
            function () {
              if (
                ((e.waitingForImages = !1),
                e.count === 0 && (e.stylesheets && js(e, e.stylesheets), e.unsuspend))
              ) {
                var o = e.unsuspend;
                ((e.unsuspend = null), o());
              }
            },
            (e.imgBytes > zd ? 50 : 800) + t
          );
          return (
            (e.unsuspend = a),
            function () {
              ((e.unsuspend = null), clearTimeout(n), clearTimeout(i));
            }
          );
        }
      : null
  );
}
function yu() {
  if ((this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))) {
    if (this.stylesheets) js(this, this.stylesheets);
    else if (this.unsuspend) {
      var e = this.unsuspend;
      ((this.unsuspend = null), e());
    }
  }
}
var bu = null;
function js(e, t) {
  ((e.stylesheets = null),
    e.unsuspend !== null &&
      (e.count++, (bu = new Map()), t.forEach(_2, e), (bu = null), yu.call(e)));
}
function _2(e, t) {
  if (!(t.state.loading & 4)) {
    var a = bu.get(e);
    if (a) var n = a.get(null);
    else {
      ((a = new Map()), bu.set(e, a));
      for (
        var i = e.querySelectorAll('link[data-precedence],style[data-precedence]'), o = 0;
        o < i.length;
        o++
      ) {
        var r = i[o];
        (r.nodeName === 'LINK' || r.getAttribute('media') !== 'not all') &&
          (a.set(r.dataset.precedence, r), (n = r));
      }
      n && a.set(null, n);
    }
    ((i = t.instance),
      (r = i.getAttribute('data-precedence')),
      (o = a.get(r) || n),
      o === n && a.set(null, i),
      a.set(r, i),
      this.count++,
      (n = yu.bind(this)),
      i.addEventListener('load', n),
      i.addEventListener('error', n),
      o
        ? o.parentNode.insertBefore(i, o.nextSibling)
        : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(i, e.firstChild)),
      (t.state.loading |= 4));
  }
}
var _l = {
  $$typeof: yn,
  Provider: null,
  Consumer: null,
  _currentValue: Fi,
  _currentValue2: Fi,
  _threadCount: 0,
};
function y2(e, t, a, n, i, o, r, l, s) {
  ((this.tag = 1),
    (this.containerInfo = e),
    (this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode =
      this.next =
      this.pendingContext =
      this.context =
      this.cancelPendingCommit =
        null),
    (this.callbackPriority = 0),
    (this.expirationTimes = nd(-1)),
    (this.entangledLanes =
      this.shellSuspendCounter =
      this.errorRecoveryDisabledLanes =
      this.expiredLanes =
      this.warmLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = nd(0)),
    (this.hiddenUpdates = nd(null)),
    (this.identifierPrefix = n),
    (this.onUncaughtError = i),
    (this.onCaughtError = o),
    (this.onRecoverableError = r),
    (this.pooledCache = null),
    (this.pooledCacheLanes = 0),
    (this.formState = s),
    (this.incompleteTransitions = new Map()));
}
function xb(e, t, a, n, i, o, r, l, s, u, c, f) {
  return (
    (e = new y2(e, t, a, r, s, u, c, f, l)),
    (t = 1),
    o === !0 && (t |= 24),
    (o = ra(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (t = qg()),
    t.refCount++,
    (e.pooledCache = t),
    t.refCount++,
    (o.memoizedState = { element: n, isDehydrated: a, cache: t }),
    Xg(o),
    e
  );
}
function wb(e) {
  return e ? ((e = bo), e) : bo;
}
function Cb(e, t, a, n, i, o) {
  ((i = wb(i)),
    n.context === null ? (n.context = i) : (n.pendingContext = i),
    (n = Zn(t)),
    (n.payload = { element: a }),
    (o = o === void 0 ? null : o),
    o !== null && (n.callback = o),
    (a = Wn(e, n, t)),
    a !== null && (Jt(a, e, t), qr(a, e, t)));
}
function jh(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var a = e.retryLane;
    e.retryLane = a !== 0 && a < t ? a : t;
  }
}
function Sp(e, t) {
  (jh(e, t), (e = e.alternate) && jh(e, t));
}
function kb(e) {
  if (e.tag === 13 || e.tag === 31) {
    var t = Vi(e, 67108864);
    (t !== null && Jt(t, e, 67108864), Sp(e, 67108864));
  }
}
function Uh(e) {
  if (e.tag === 13 || e.tag === 31) {
    var t = ga();
    t = Og(t);
    var a = Vi(e, t);
    (a !== null && Jt(a, e, t), Sp(e, t));
  }
}
var Su = !0;
function b2(e, t, a, n) {
  var i = ae.T;
  ae.T = null;
  var o = ke.p;
  try {
    ((ke.p = 2), xp(e, t, a, n));
  } finally {
    ((ke.p = o), (ae.T = i));
  }
}
function S2(e, t, a, n) {
  var i = ae.T;
  ae.T = null;
  var o = ke.p;
  try {
    ((ke.p = 8), xp(e, t, a, n));
  } finally {
    ((ke.p = o), (ae.T = i));
  }
}
function xp(e, t, a, n) {
  if (Su) {
    var i = Kf(n);
    if (i === null) (Od(e, t, n, xu, a), Hh(e, n));
    else if (w2(i, e, t, a, n)) n.stopPropagation();
    else if ((Hh(e, n), t & 4 && -1 < x2.indexOf(e))) {
      for (; i !== null; ) {
        var o = Zo(i);
        if (o !== null)
          switch (o.tag) {
            case 3:
              if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                var r = yi(o.pendingLanes);
                if (r !== 0) {
                  var l = o;
                  for (l.pendingLanes |= 2, l.entangledLanes |= 2; r; ) {
                    var s = 1 << (31 - fa(r));
                    ((l.entanglements[1] |= s), (r &= ~s));
                  }
                  (ln(o), !(Ce & 6) && ((du = ca() + 500), Dl(0, !1)));
                }
              }
              break;
            case 31:
            case 13:
              ((l = Vi(o, 2)), l !== null && Jt(l, o, 2), tc(), Sp(o, 2));
          }
        if (((o = Kf(n)), o === null && Od(e, t, n, xu, a), o === i)) break;
        i = o;
      }
      i !== null && n.stopPropagation();
    } else Od(e, t, n, null, a);
  }
}
function Kf(e) {
  return ((e = Lg(e)), wp(e));
}
var xu = null;
function wp(e) {
  if (((xu = null), (e = po(e)), e !== null)) {
    var t = Rl(e);
    if (t === null) e = null;
    else {
      var a = t.tag;
      if (a === 13) {
        if (((e = Pv(t)), e !== null)) return e;
        e = null;
      } else if (a === 31) {
        if (((e = qv(t)), e !== null)) return e;
        e = null;
      } else if (a === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    }
  }
  return ((xu = e), null);
}
function Eb(e) {
  switch (e) {
    case 'beforetoggle':
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'toggle':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 2;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 8;
    case 'message':
      switch (lx()) {
        case Qv:
          return 2;
        case Zv:
          return 8;
        case Zs:
        case sx:
          return 32;
        case Wv:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var Yf = !1,
  ti = null,
  ai = null,
  ni = null,
  yl = new Map(),
  bl = new Map(),
  Gn = [],
  x2 =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
      ' '
    );
function Hh(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      ti = null;
      break;
    case 'dragenter':
    case 'dragleave':
      ai = null;
      break;
    case 'mouseover':
    case 'mouseout':
      ni = null;
      break;
    case 'pointerover':
    case 'pointerout':
      yl.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      bl.delete(t.pointerId);
  }
}
function xr(e, t, a, n, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: n,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Zo(t)), t !== null && kb(t)),
      e)
    : ((e.eventSystemFlags |= n),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function w2(e, t, a, n, i) {
  switch (t) {
    case 'focusin':
      return ((ti = xr(ti, e, t, a, n, i)), !0);
    case 'dragenter':
      return ((ai = xr(ai, e, t, a, n, i)), !0);
    case 'mouseover':
      return ((ni = xr(ni, e, t, a, n, i)), !0);
    case 'pointerover':
      var o = i.pointerId;
      return (yl.set(o, xr(yl.get(o) || null, e, t, a, n, i)), !0);
    case 'gotpointercapture':
      return ((o = i.pointerId), bl.set(o, xr(bl.get(o) || null, e, t, a, n, i)), !0);
  }
  return !1;
}
function Fb(e) {
  var t = po(e.target);
  if (t !== null) {
    var a = Rl(t);
    if (a !== null) {
      if (((t = a.tag), t === 13)) {
        if (((t = Pv(a)), t !== null)) {
          ((e.blockedOn = t),
            km(e.priority, function () {
              Uh(a);
            }));
          return;
        }
      } else if (t === 31) {
        if (((t = qv(a)), t !== null)) {
          ((e.blockedOn = t),
            km(e.priority, function () {
              Uh(a);
            }));
          return;
        }
      } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Us(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var a = Kf(e.nativeEvent);
    if (a === null) {
      a = e.nativeEvent;
      var n = new a.constructor(a.type, a);
      ((ff = n), a.target.dispatchEvent(n), (ff = null));
    } else return ((t = Zo(a)), t !== null && kb(t), (e.blockedOn = a), !1);
    t.shift();
  }
  return !0;
}
function Vh(e, t, a) {
  Us(e) && a.delete(t);
}
function C2() {
  ((Yf = !1),
    ti !== null && Us(ti) && (ti = null),
    ai !== null && Us(ai) && (ai = null),
    ni !== null && Us(ni) && (ni = null),
    yl.forEach(Vh),
    bl.forEach(Vh));
}
function ps(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Yf || ((Yf = !0), bt.unstable_scheduleCallback(bt.unstable_NormalPriority, C2)));
}
var ms = null;
function Gh(e) {
  ms !== e &&
    ((ms = e),
    bt.unstable_scheduleCallback(bt.unstable_NormalPriority, function () {
      ms === e && (ms = null);
      for (var t = 0; t < e.length; t += 3) {
        var a = e[t],
          n = e[t + 1],
          i = e[t + 2];
        if (typeof n != 'function') {
          if (wp(n || a) === null) continue;
          break;
        }
        var o = Zo(a);
        o !== null &&
          (e.splice(t, 3),
          (t -= 3),
          Tf(o, { pending: !0, data: i, method: a.method, action: n }, n, i));
      }
    }));
}
function Io(e) {
  function t(s) {
    return ps(s, e);
  }
  (ti !== null && ps(ti, e),
    ai !== null && ps(ai, e),
    ni !== null && ps(ni, e),
    yl.forEach(t),
    bl.forEach(t));
  for (var a = 0; a < Gn.length; a++) {
    var n = Gn[a];
    n.blockedOn === e && (n.blockedOn = null);
  }
  for (; 0 < Gn.length && ((a = Gn[0]), a.blockedOn === null); )
    (Fb(a), a.blockedOn === null && Gn.shift());
  if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
    for (n = 0; n < a.length; n += 3) {
      var i = a[n],
        o = a[n + 1],
        r = i[ea] || null;
      if (typeof o == 'function') r || Gh(a);
      else if (r) {
        var l = null;
        if (o && o.hasAttribute('formAction')) {
          if (((i = o), (r = o[ea] || null))) l = r.formAction;
          else if (wp(i) !== null) continue;
        } else l = r.action;
        (typeof l == 'function' ? (a[n + 1] = l) : (a.splice(n, 3), (n -= 3)), Gh(a));
      }
    }
}
function Tb() {
  function e(o) {
    o.canIntercept &&
      o.info === 'react-transition' &&
      o.intercept({
        handler: function () {
          return new Promise(function (r) {
            return (i = r);
          });
        },
        focusReset: 'manual',
        scroll: 'manual',
      });
  }
  function t() {
    (i !== null && (i(), (i = null)), n || setTimeout(a, 20));
  }
  function a() {
    if (!n && !navigation.transition) {
      var o = navigation.currentEntry;
      o &&
        o.url != null &&
        navigation.navigate(o.url, {
          state: o.getState(),
          info: 'react-transition',
          history: 'replace',
        });
    }
  }
  if (typeof navigation == 'object') {
    var n = !1,
      i = null;
    return (
      navigation.addEventListener('navigate', e),
      navigation.addEventListener('navigatesuccess', t),
      navigation.addEventListener('navigateerror', t),
      setTimeout(a, 100),
      function () {
        ((n = !0),
          navigation.removeEventListener('navigate', e),
          navigation.removeEventListener('navigatesuccess', t),
          navigation.removeEventListener('navigateerror', t),
          i !== null && (i(), (i = null)));
      }
    );
  }
}
function Cp(e) {
  this._internalRoot = e;
}
ic.prototype.render = Cp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(H(409));
  var a = t.current,
    n = ga();
  Cb(a, n, e, t, null, null);
};
ic.prototype.unmount = Cp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (Cb(e.current, 2, null, e, null, null), tc(), (t[Qo] = null));
  }
};
function ic(e) {
  this._internalRoot = e;
}
ic.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = n_();
    e = { blockedOn: null, target: e, priority: t };
    for (var a = 0; a < Gn.length && t !== 0 && t < Gn[a].priority; a++);
    (Gn.splice(a, 0, e), a === 0 && Fb(e));
  }
};
var Ih = Gv.version;
if (Ih !== '19.2.3') throw Error(H(527, Ih, '19.2.3'));
ke.findDOMNode = function (e) {
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(H(188))
      : ((e = Object.keys(e).join(',')), Error(H(268, e)));
  return ((e = ex(t)), (e = e !== null ? Kv(e) : null), (e = e === null ? null : e.stateNode), e);
};
var k2 = {
  bundleType: 0,
  version: '19.2.3',
  rendererPackageName: 'react-dom',
  currentDispatcherRef: ae,
  reconcilerVersion: '19.2.3',
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var hs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hs.isDisabled && hs.supportsFiber)
    try {
      ((Al = hs.inject(k2)), (da = hs));
    } catch {}
}
Hu.createRoot = function (e, t) {
  if (!Iv(e)) throw Error(H(299));
  var a = !1,
    n = '',
    i = yy,
    o = by,
    r = Sy;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (a = !0),
      t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
      t.onUncaughtError !== void 0 && (i = t.onUncaughtError),
      t.onCaughtError !== void 0 && (o = t.onCaughtError),
      t.onRecoverableError !== void 0 && (r = t.onRecoverableError)),
    (t = xb(e, 1, !1, null, null, a, n, null, i, o, r, Tb)),
    (e[Qo] = t.current),
    _p(e),
    new Cp(t)
  );
};
Hu.hydrateRoot = function (e, t, a) {
  if (!Iv(e)) throw Error(H(299));
  var n = !1,
    i = '',
    o = yy,
    r = by,
    l = Sy,
    s = null;
  return (
    a != null &&
      (a.unstable_strictMode === !0 && (n = !0),
      a.identifierPrefix !== void 0 && (i = a.identifierPrefix),
      a.onUncaughtError !== void 0 && (o = a.onUncaughtError),
      a.onCaughtError !== void 0 && (r = a.onCaughtError),
      a.onRecoverableError !== void 0 && (l = a.onRecoverableError),
      a.formState !== void 0 && (s = a.formState)),
    (t = xb(e, 1, !0, t, a ?? null, n, i, s, o, r, l, Tb)),
    (t.context = wb(null)),
    (a = t.current),
    (n = ga()),
    (n = Og(n)),
    (i = Zn(n)),
    (i.callback = null),
    Wn(a, i, n),
    (a = n),
    (t.current.lanes = a),
    Ol(t, a),
    ln(t),
    (e[Qo] = t.current),
    _p(e),
    new ic(t)
  );
};
Hu.version = '19.2.3';
function Rb() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rb);
    } catch (e) {
      console.error(e);
    }
}
(Rb(), ($v.exports = Hu));
var E2 = $v.exports;
const F2 = xg(E2);
const T2 = 'modulepreload',
  R2 = function (e) {
    return '/' + e;
  },
  Ph = {},
  A2 = function (t, a, n) {
    if (!a || a.length === 0) return t();
    const i = document.getElementsByTagName('link');
    return Promise.all(
      a.map((o) => {
        if (((o = R2(o)), o in Ph)) return;
        Ph[o] = !0;
        const r = o.endsWith('.css'),
          l = r ? '[rel="stylesheet"]' : '';
        if (!!n)
          for (let c = i.length - 1; c >= 0; c--) {
            const f = i[c];
            if (f.href === o && (!r || f.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${o}"]${l}`)) return;
        const u = document.createElement('link');
        if (
          ((u.rel = r ? 'stylesheet' : T2),
          r || ((u.as = 'script'), (u.crossOrigin = '')),
          (u.href = o),
          document.head.appendChild(u),
          r)
        )
          return new Promise((c, f) => {
            (u.addEventListener('load', c),
              u.addEventListener('error', () => f(new Error(`Unable to preload CSS for ${o}`))));
          });
      })
    )
      .then(() => t())
      .catch((o) => {
        const r = new Event('vite:preloadError', { cancelable: !0 });
        if (((r.payload = o), window.dispatchEvent(r), !r.defaultPrevented)) throw o;
      });
  };
var qh = 'popstate';
function M2(e = {}) {
  function t(n, i) {
    let { pathname: o, search: r, hash: l } = n.location;
    return Xf(
      '',
      { pathname: o, search: r, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default'
    );
  }
  function a(n, i) {
    return typeof i == 'string' ? i : Sl(i);
  }
  return N2(t, a, null, e);
}
function We(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function on(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function O2() {
  return Math.random().toString(36).substring(2, 10);
}
function Kh(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Xf(e, t, a = null, n) {
  return {
    pathname: typeof e == 'string' ? e : e.pathname,
    search: '',
    hash: '',
    ...(typeof t == 'string' ? nr(t) : t),
    state: a,
    key: (t && t.key) || n || O2(),
  };
}
function Sl({ pathname: e = '/', search: t = '', hash: a = '' }) {
  return (
    t && t !== '?' && (e += t.charAt(0) === '?' ? t : '?' + t),
    a && a !== '#' && (e += a.charAt(0) === '#' ? a : '#' + a),
    e
  );
}
function nr(e) {
  let t = {};
  if (e) {
    let a = e.indexOf('#');
    a >= 0 && ((t.hash = e.substring(a)), (e = e.substring(0, a)));
    let n = e.indexOf('?');
    (n >= 0 && ((t.search = e.substring(n)), (e = e.substring(0, n))), e && (t.pathname = e));
  }
  return t;
}
function N2(e, t, a, n = {}) {
  let { window: i = document.defaultView, v5Compat: o = !1 } = n,
    r = i.history,
    l = 'POP',
    s = null,
    u = c();
  u == null && ((u = 0), r.replaceState({ ...r.state, idx: u }, ''));
  function c() {
    return (r.state || { idx: null }).idx;
  }
  function f() {
    l = 'POP';
    let S = c(),
      m = S == null ? null : S - u;
    ((u = S), s && s({ action: l, location: x.location, delta: m }));
  }
  function d(S, m) {
    l = 'PUSH';
    let p = Xf(x.location, S, m);
    (a && a(p, S), (u = c() + 1));
    let h = Kh(p, u),
      v = x.createHref(p);
    try {
      r.pushState(h, '', v);
    } catch (C) {
      if (C instanceof DOMException && C.name === 'DataCloneError') throw C;
      i.location.assign(v);
    }
    o && s && s({ action: l, location: x.location, delta: 1 });
  }
  function g(S, m) {
    l = 'REPLACE';
    let p = Xf(x.location, S, m);
    (a && a(p, S), (u = c()));
    let h = Kh(p, u),
      v = x.createHref(p);
    (r.replaceState(h, '', v), o && s && s({ action: l, location: x.location, delta: 0 }));
  }
  function _(S) {
    return z2(S);
  }
  let x = {
    get action() {
      return l;
    },
    get location() {
      return e(i, r);
    },
    listen(S) {
      if (s) throw new Error('A history only accepts one active listener');
      return (
        i.addEventListener(qh, f),
        (s = S),
        () => {
          (i.removeEventListener(qh, f), (s = null));
        }
      );
    },
    createHref(S) {
      return t(i, S);
    },
    createURL: _,
    encodeLocation(S) {
      let m = _(S);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: d,
    replace: g,
    go(S) {
      return r.go(S);
    },
  };
  return x;
}
function z2(e, t = !1) {
  let a = 'http://localhost';
  (typeof window < 'u' &&
    (a = window.location.origin !== 'null' ? window.location.origin : window.location.href),
    We(a, 'No window.location.(origin|href) available to create URL'));
  let n = typeof e == 'string' ? e : Sl(e);
  return ((n = n.replace(/ $/, '%20')), !t && n.startsWith('//') && (n = a + n), new URL(n, a));
}
function Ab(e, t, a = '/') {
  return B2(e, t, a, !1);
}
function B2(e, t, a, n) {
  let i = typeof t == 'string' ? nr(t) : t,
    o = On(i.pathname || '/', a);
  if (o == null) return null;
  let r = Mb(e);
  L2(r);
  let l = null;
  for (let s = 0; l == null && s < r.length; ++s) {
    let u = K2(o);
    l = P2(r[s], u, n);
  }
  return l;
}
function Mb(e, t = [], a = [], n = '', i = !1) {
  let o = (r, l, s = i, u) => {
    let c = {
      relativePath: u === void 0 ? r.path || '' : u,
      caseSensitive: r.caseSensitive === !0,
      childrenIndex: l,
      route: r,
    };
    if (c.relativePath.startsWith('/')) {
      if (!c.relativePath.startsWith(n) && s) return;
      (We(
        c.relativePath.startsWith(n),
        `Absolute route path "${c.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (c.relativePath = c.relativePath.slice(n.length)));
    }
    let f = En([n, c.relativePath]),
      d = a.concat(c);
    (r.children &&
      r.children.length > 0 &&
      (We(
        r.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${f}".`
      ),
      Mb(r.children, t, d, f, s)),
      !(r.path == null && !r.index) && t.push({ path: f, score: G2(f, r.index), routesMeta: d }));
  };
  return (
    e.forEach((r, l) => {
      var s;
      if (r.path === '' || !((s = r.path) != null && s.includes('?'))) o(r, l);
      else for (let u of Ob(r.path)) o(r, l, !0, u);
    }),
    t
  );
}
function Ob(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [a, ...n] = t,
    i = a.endsWith('?'),
    o = a.replace(/\?$/, '');
  if (n.length === 0) return i ? [o, ''] : [o];
  let r = Ob(n.join('/')),
    l = [];
  return (
    l.push(...r.map((s) => (s === '' ? o : [o, s].join('/')))),
    i && l.push(...r),
    l.map((s) => (e.startsWith('/') && s === '' ? '/' : s))
  );
}
function L2(e) {
  e.sort((t, a) =>
    t.score !== a.score
      ? a.score - t.score
      : I2(
          t.routesMeta.map((n) => n.childrenIndex),
          a.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
var $2 = /^:[\w-]+$/,
  D2 = 3,
  j2 = 2,
  U2 = 1,
  H2 = 10,
  V2 = -2,
  Yh = (e) => e === '*';
function G2(e, t) {
  let a = e.split('/'),
    n = a.length;
  return (
    a.some(Yh) && (n += V2),
    t && (n += j2),
    a.filter((i) => !Yh(i)).reduce((i, o) => i + ($2.test(o) ? D2 : o === '' ? U2 : H2), n)
  );
}
function I2(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, i) => n === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function P2(e, t, a = !1) {
  let { routesMeta: n } = e,
    i = {},
    o = '/',
    r = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      u = l === n.length - 1,
      c = o === '/' ? t : t.slice(o.length) || '/',
      f = wu({ path: s.relativePath, caseSensitive: s.caseSensitive, end: u }, c),
      d = s.route;
    if (
      (!f &&
        u &&
        a &&
        !n[n.length - 1].route.index &&
        (f = wu({ path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 }, c)),
      !f)
    )
      return null;
    (Object.assign(i, f.params),
      r.push({
        params: i,
        pathname: En([o, f.pathname]),
        pathnameBase: Z2(En([o, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== '/' && (o = En([o, f.pathnameBase])));
  }
  return r;
}
function wu(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [a, n] = q2(e.path, e.caseSensitive, e.end),
    i = t.match(a);
  if (!i) return null;
  let o = i[0],
    r = o.replace(/(.)\/+$/, '$1'),
    l = i.slice(1);
  return {
    params: n.reduce((u, { paramName: c, isOptional: f }, d) => {
      if (c === '*') {
        let _ = l[d] || '';
        r = o.slice(0, o.length - _.length).replace(/(.)\/+$/, '$1');
      }
      const g = l[d];
      return (f && !g ? (u[c] = void 0) : (u[c] = (g || '').replace(/%2F/g, '/')), u);
    }, {}),
    pathname: o,
    pathnameBase: r,
    pattern: e,
  };
}
function q2(e, t = !1, a = !0) {
  on(
    e === '*' || !e.endsWith('*') || e.endsWith('/*'),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, '/*')}".`
  );
  let n = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (r, l, s) => (
            n.push({ paramName: l, isOptional: s != null }),
            s ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    e.endsWith('*')
      ? (n.push({ paramName: '*' }), (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : a
        ? (i += '\\/*$')
        : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), n]
  );
}
function K2(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      on(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
      ),
      e
    );
  }
}
function On(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let a = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(a);
  return n && n !== '/' ? null : e.slice(a) || '/';
}
var Y2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function X2(e, t = '/') {
  let { pathname: a, search: n = '', hash: i = '' } = typeof e == 'string' ? nr(e) : e,
    o;
  return (
    a
      ? ((a = a.replace(/\/\/+/g, '/')),
        a.startsWith('/') ? (o = Xh(a.substring(1), '/')) : (o = Xh(a, t)))
      : (o = t),
    { pathname: o, search: W2(n), hash: J2(i) }
  );
}
function Xh(e, t) {
  let a = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((i) => {
      i === '..' ? a.length > 1 && a.pop() : i !== '.' && a.push(i);
    }),
    a.length > 1 ? a.join('/') : '/'
  );
}
function Bd(e, t, a, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Q2(e) {
  return e.filter((t, a) => a === 0 || (t.route.path && t.route.path.length > 0));
}
function Nb(e) {
  let t = Q2(e);
  return t.map((a, n) => (n === t.length - 1 ? a.pathname : a.pathnameBase));
}
function zb(e, t, a, n = !1) {
  let i;
  typeof e == 'string'
    ? (i = nr(e))
    : ((i = { ...e }),
      We(!i.pathname || !i.pathname.includes('?'), Bd('?', 'pathname', 'search', i)),
      We(!i.pathname || !i.pathname.includes('#'), Bd('#', 'pathname', 'hash', i)),
      We(!i.search || !i.search.includes('#'), Bd('#', 'search', 'hash', i)));
  let o = e === '' || i.pathname === '',
    r = o ? '/' : i.pathname,
    l;
  if (r == null) l = a;
  else {
    let f = t.length - 1;
    if (!n && r.startsWith('..')) {
      let d = r.split('/');
      for (; d[0] === '..'; ) (d.shift(), (f -= 1));
      i.pathname = d.join('/');
    }
    l = f >= 0 ? t[f] : '/';
  }
  let s = X2(i, l),
    u = r && r !== '/' && r.endsWith('/'),
    c = (o || r === '.') && a.endsWith('/');
  return (!s.pathname.endsWith('/') && (u || c) && (s.pathname += '/'), s);
}
var En = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Z2 = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  W2 = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  J2 = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e),
  eC = class {
    constructor(e, t, a, n = !1) {
      ((this.status = e),
        (this.statusText = t || ''),
        (this.internal = n),
        a instanceof Error ? ((this.data = a.toString()), (this.error = a)) : (this.data = a));
    }
  };
function tC(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
function aC(e) {
  return (
    e
      .map((t) => t.route.path)
      .filter(Boolean)
      .join('/')
      .replace(/\/\/*/g, '/') || '/'
  );
}
var Bb =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
function Lb(e, t) {
  let a = e;
  if (typeof a != 'string' || !Y2.test(a)) return { absoluteURL: void 0, isExternal: !1, to: a };
  let n = a,
    i = !1;
  if (Bb)
    try {
      let o = new URL(window.location.href),
        r = a.startsWith('//') ? new URL(o.protocol + a) : new URL(a),
        l = On(r.pathname, t);
      r.origin === o.origin && l != null ? (a = l + r.search + r.hash) : (i = !0);
    } catch {
      on(
        !1,
        `<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return { absoluteURL: n, isExternal: i, to: a };
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var $b = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set($b);
var nC = ['GET', ...$b];
new Set(nC);
var ir = y.createContext(null);
ir.displayName = 'DataRouter';
var oc = y.createContext(null);
oc.displayName = 'DataRouterState';
var iC = y.createContext(!1),
  Db = y.createContext({ isTransitioning: !1 });
Db.displayName = 'ViewTransition';
var oC = y.createContext(new Map());
oC.displayName = 'Fetchers';
var rC = y.createContext(null);
rC.displayName = 'Await';
var Oa = y.createContext(null);
Oa.displayName = 'Navigation';
var Hl = y.createContext(null);
Hl.displayName = 'Location';
var sn = y.createContext({ outlet: null, matches: [], isDataRoute: !1 });
sn.displayName = 'Route';
var kp = y.createContext(null);
kp.displayName = 'RouteError';
var jb = 'REACT_ROUTER_ERROR',
  lC = 'REDIRECT',
  sC = 'ROUTE_ERROR_RESPONSE';
function uC(e) {
  if (e.startsWith(`${jb}:${lC}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (
        typeof t == 'object' &&
        t &&
        typeof t.status == 'number' &&
        typeof t.statusText == 'string' &&
        typeof t.location == 'string' &&
        typeof t.reloadDocument == 'boolean' &&
        typeof t.replace == 'boolean'
      )
        return t;
    } catch {}
}
function cC(e) {
  if (e.startsWith(`${jb}:${sC}:{`))
    try {
      let t = JSON.parse(e.slice(40));
      if (
        typeof t == 'object' &&
        t &&
        typeof t.status == 'number' &&
        typeof t.statusText == 'string'
      )
        return new eC(t.status, t.statusText, t.data);
    } catch {}
}
function dC(e, { relative: t } = {}) {
  We(Vl(), 'useHref() may be used only in the context of a <Router> component.');
  let { basename: a, navigator: n } = y.useContext(Oa),
    { hash: i, pathname: o, search: r } = Gl(e, { relative: t }),
    l = o;
  return (
    a !== '/' && (l = o === '/' ? a : En([a, o])),
    n.createHref({ pathname: l, search: r, hash: i })
  );
}
function Vl() {
  return y.useContext(Hl) != null;
}
function Ii() {
  return (
    We(Vl(), 'useLocation() may be used only in the context of a <Router> component.'),
    y.useContext(Hl).location
  );
}
var Ub =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function Hb(e) {
  y.useContext(Oa).static || y.useLayoutEffect(e);
}
function fC() {
  let { isDataRoute: e } = y.useContext(sn);
  return e ? EC() : gC();
}
function gC() {
  We(Vl(), 'useNavigate() may be used only in the context of a <Router> component.');
  let e = y.useContext(ir),
    { basename: t, navigator: a } = y.useContext(Oa),
    { matches: n } = y.useContext(sn),
    { pathname: i } = Ii(),
    o = JSON.stringify(Nb(n)),
    r = y.useRef(!1);
  return (
    Hb(() => {
      r.current = !0;
    }),
    y.useCallback(
      (s, u = {}) => {
        if ((on(r.current, Ub), !r.current)) return;
        if (typeof s == 'number') {
          a.go(s);
          return;
        }
        let c = zb(s, JSON.parse(o), i, u.relative === 'path');
        (e == null && t !== '/' && (c.pathname = c.pathname === '/' ? t : En([t, c.pathname])),
          (u.replace ? a.replace : a.push)(c, u.state, u));
      },
      [t, a, o, i, e]
    )
  );
}
y.createContext(null);
function pC() {
  let { matches: e } = y.useContext(sn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Gl(e, { relative: t } = {}) {
  let { matches: a } = y.useContext(sn),
    { pathname: n } = Ii(),
    i = JSON.stringify(Nb(a));
  return y.useMemo(() => zb(e, JSON.parse(i), n, t === 'path'), [e, i, n, t]);
}
function mC(e, t) {
  return Vb(e, t);
}
function Vb(e, t, a, n, i) {
  var p;
  We(Vl(), 'useRoutes() may be used only in the context of a <Router> component.');
  let { navigator: o } = y.useContext(Oa),
    { matches: r } = y.useContext(sn),
    l = r[r.length - 1],
    s = l ? l.params : {},
    u = l ? l.pathname : '/',
    c = l ? l.pathnameBase : '/',
    f = l && l.route;
  {
    let h = (f && f.path) || '';
    Ib(
      u,
      !f || h.endsWith('*') || h.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${h}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${h}"> to <Route path="${h === '/' ? '*' : `${h}/*`}">.`
    );
  }
  let d = Ii(),
    g;
  if (t) {
    let h = typeof t == 'string' ? nr(t) : t;
    (We(
      c === '/' || ((p = h.pathname) == null ? void 0 : p.startsWith(c)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${h.pathname}" was given in the \`location\` prop.`
    ),
      (g = h));
  } else g = d;
  let _ = g.pathname || '/',
    x = _;
  if (c !== '/') {
    let h = c.replace(/^\//, '').split('/');
    x = '/' + _.replace(/^\//, '').split('/').slice(h.length).join('/');
  }
  let S = Ab(e, { pathname: x });
  (on(f || S != null, `No routes matched location "${g.pathname}${g.search}${g.hash}" `),
    on(
      S == null ||
        S[S.length - 1].route.element !== void 0 ||
        S[S.length - 1].route.Component !== void 0 ||
        S[S.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let m = bC(
    S &&
      S.map((h) =>
        Object.assign({}, h, {
          params: Object.assign({}, s, h.params),
          pathname: En([
            c,
            o.encodeLocation
              ? o.encodeLocation(h.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23')).pathname
              : h.pathname,
          ]),
          pathnameBase:
            h.pathnameBase === '/'
              ? c
              : En([
                  c,
                  o.encodeLocation
                    ? o.encodeLocation(h.pathnameBase.replace(/\?/g, '%3F').replace(/#/g, '%23'))
                        .pathname
                    : h.pathnameBase,
                ]),
        })
      ),
    r,
    a,
    n,
    i
  );
  return t && m
    ? y.createElement(
        Hl.Provider,
        {
          value: {
            location: { pathname: '/', search: '', hash: '', state: null, key: 'default', ...g },
            navigationType: 'POP',
          },
        },
        m
      )
    : m;
}
function hC() {
  let e = kC(),
    t = tC(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e),
    a = e instanceof Error ? e.stack : null,
    n = 'rgba(200,200,200, 0.5)',
    i = { padding: '0.5rem', backgroundColor: n },
    o = { padding: '2px 4px', backgroundColor: n },
    r = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', e),
    (r = y.createElement(
      y.Fragment,
      null,
      y.createElement('p', null, '💿 Hey developer 👋'),
      y.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        y.createElement('code', { style: o }, 'ErrorBoundary'),
        ' or',
        ' ',
        y.createElement('code', { style: o }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    y.createElement(
      y.Fragment,
      null,
      y.createElement('h2', null, 'Unexpected Application Error!'),
      y.createElement('h3', { style: { fontStyle: 'italic' } }, t),
      a ? y.createElement('pre', { style: i }, a) : null,
      r
    )
  );
}
var vC = y.createElement(hC, null),
  Gb = class extends y.Component {
    constructor(e) {
      (super(e),
        (this.state = { location: e.location, revalidation: e.revalidation, error: e.error }));
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      return t.location !== e.location || (t.revalidation !== 'idle' && e.revalidation === 'idle')
        ? { error: e.error, location: e.location, revalidation: e.revalidation }
        : {
            error: e.error !== void 0 ? e.error : t.error,
            location: t.location,
            revalidation: e.revalidation || t.revalidation,
          };
    }
    componentDidCatch(e, t) {
      this.props.onError
        ? this.props.onError(e, t)
        : console.error('React Router caught the following error during render', e);
    }
    render() {
      let e = this.state.error;
      if (
        this.context &&
        typeof e == 'object' &&
        e &&
        'digest' in e &&
        typeof e.digest == 'string'
      ) {
        const a = cC(e.digest);
        a && (e = a);
      }
      let t =
        e !== void 0
          ? y.createElement(
              sn.Provider,
              { value: this.props.routeContext },
              y.createElement(kp.Provider, { value: e, children: this.props.component })
            )
          : this.props.children;
      return this.context ? y.createElement(_C, { error: e }, t) : t;
    }
  };
Gb.contextType = iC;
var Ld = new WeakMap();
function _C({ children: e, error: t }) {
  let { basename: a } = y.useContext(Oa);
  if (typeof t == 'object' && t && 'digest' in t && typeof t.digest == 'string') {
    let n = uC(t.digest);
    if (n) {
      let i = Ld.get(t);
      if (i) throw i;
      let o = Lb(n.location, a);
      if (Bb && !Ld.get(t))
        if (o.isExternal || n.reloadDocument) window.location.href = o.absoluteURL || o.to;
        else {
          const r = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(o.to, { replace: n.replace })
          );
          throw (Ld.set(t, r), r);
        }
      return y.createElement('meta', {
        httpEquiv: 'refresh',
        content: `0;url=${o.absoluteURL || o.to}`,
      });
    }
  }
  return e;
}
function yC({ routeContext: e, match: t, children: a }) {
  let n = y.useContext(ir);
  return (
    n &&
      n.static &&
      n.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (n.staticContext._deepestRenderedBoundaryId = t.route.id),
    y.createElement(sn.Provider, { value: e }, a)
  );
}
function bC(e, t = [], a = null, n = null, i = null) {
  if (e == null) {
    if (!a) return null;
    if (a.errors) e = a.matches;
    else if (t.length === 0 && !a.initialized && a.matches.length > 0) e = a.matches;
    else return null;
  }
  let o = e,
    r = a == null ? void 0 : a.errors;
  if (r != null) {
    let c = o.findIndex((f) => f.route.id && (r == null ? void 0 : r[f.route.id]) !== void 0);
    (We(
      c >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(r).join(',')}`
    ),
      (o = o.slice(0, Math.min(o.length, c + 1))));
  }
  let l = !1,
    s = -1;
  if (a)
    for (let c = 0; c < o.length; c++) {
      let f = o[c];
      if (((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (s = c), f.route.id)) {
        let { loaderData: d, errors: g } = a,
          _ = f.route.loader && !d.hasOwnProperty(f.route.id) && (!g || g[f.route.id] === void 0);
        if (f.route.lazy || _) {
          ((l = !0), s >= 0 ? (o = o.slice(0, s + 1)) : (o = [o[0]]));
          break;
        }
      }
    }
  let u =
    a && n
      ? (c, f) => {
          var d, g;
          n(c, {
            location: a.location,
            params:
              ((g = (d = a.matches) == null ? void 0 : d[0]) == null ? void 0 : g.params) ?? {},
            unstable_pattern: aC(a.matches),
            errorInfo: f,
          });
        }
      : void 0;
  return o.reduceRight((c, f, d) => {
    let g,
      _ = !1,
      x = null,
      S = null;
    a &&
      ((g = r && f.route.id ? r[f.route.id] : void 0),
      (x = f.route.errorElement || vC),
      l &&
        (s < 0 && d === 0
          ? (Ib(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (_ = !0),
            (S = null))
          : s === d && ((_ = !0), (S = f.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, d + 1)),
      p = () => {
        let h;
        return (
          g
            ? (h = x)
            : _
              ? (h = S)
              : f.route.Component
                ? (h = y.createElement(f.route.Component, null))
                : f.route.element
                  ? (h = f.route.element)
                  : (h = c),
          y.createElement(yC, {
            match: f,
            routeContext: { outlet: c, matches: m, isDataRoute: a != null },
            children: h,
          })
        );
      };
    return a && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? y.createElement(Gb, {
          location: a.location,
          revalidation: a.revalidation,
          component: x,
          error: g,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          onError: u,
        })
      : p();
  }, null);
}
function Ep(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function SC(e) {
  let t = y.useContext(ir);
  return (We(t, Ep(e)), t);
}
function xC(e) {
  let t = y.useContext(oc);
  return (We(t, Ep(e)), t);
}
function wC(e) {
  let t = y.useContext(sn);
  return (We(t, Ep(e)), t);
}
function Fp(e) {
  let t = wC(e),
    a = t.matches[t.matches.length - 1];
  return (We(a.route.id, `${e} can only be used on routes that contain a unique "id"`), a.route.id);
}
function CC() {
  return Fp('useRouteId');
}
function kC() {
  var n;
  let e = y.useContext(kp),
    t = xC('useRouteError'),
    a = Fp('useRouteError');
  return e !== void 0 ? e : (n = t.errors) == null ? void 0 : n[a];
}
function EC() {
  let { router: e } = SC('useNavigate'),
    t = Fp('useNavigate'),
    a = y.useRef(!1);
  return (
    Hb(() => {
      a.current = !0;
    }),
    y.useCallback(
      async (i, o = {}) => {
        (on(a.current, Ub),
          a.current &&
            (typeof i == 'number'
              ? await e.navigate(i)
              : await e.navigate(i, { fromRouteId: t, ...o })));
      },
      [e, t]
    )
  );
}
var Qh = {};
function Ib(e, t, a) {
  !t && !Qh[e] && ((Qh[e] = !0), on(!1, a));
}
y.memo(FC);
function FC({ routes: e, future: t, state: a, onError: n }) {
  return Vb(e, void 0, a, n, t);
}
function so(e) {
  We(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function TC({
  basename: e = '/',
  children: t = null,
  location: a,
  navigationType: n = 'POP',
  navigator: i,
  static: o = !1,
  unstable_useTransitions: r,
}) {
  We(
    !Vl(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let l = e.replace(/^\/*/, '/'),
    s = y.useMemo(
      () => ({ basename: l, navigator: i, static: o, unstable_useTransitions: r, future: {} }),
      [l, i, o, r]
    );
  typeof a == 'string' && (a = nr(a));
  let { pathname: u = '/', search: c = '', hash: f = '', state: d = null, key: g = 'default' } = a,
    _ = y.useMemo(() => {
      let x = On(u, l);
      return x == null
        ? null
        : { location: { pathname: x, search: c, hash: f, state: d, key: g }, navigationType: n };
    }, [l, u, c, f, d, g, n]);
  return (
    on(
      _ != null,
      `<Router basename="${l}"> is not able to match the URL "${u}${c}${f}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    _ == null
      ? null
      : y.createElement(
          Oa.Provider,
          { value: s },
          y.createElement(Hl.Provider, { children: t, value: _ })
        )
  );
}
function RC({ children: e, location: t }) {
  return mC(Qf(e), t);
}
function Qf(e, t = []) {
  let a = [];
  return (
    y.Children.forEach(e, (n, i) => {
      if (!y.isValidElement(n)) return;
      let o = [...t, i];
      if (n.type === y.Fragment) {
        a.push.apply(a, Qf(n.props.children, o));
        return;
      }
      (We(
        n.type === so,
        `[${typeof n.type == 'string' ? n.type : n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        We(!n.props.index || !n.props.children, 'An index route cannot have child routes.'));
      let r = {
        id: n.props.id || o.join('-'),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        middleware: n.props.middleware,
        loader: n.props.loader,
        action: n.props.action,
        hydrateFallbackElement: n.props.hydrateFallbackElement,
        HydrateFallback: n.props.HydrateFallback,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.hasErrorBoundary === !0 ||
          n.props.ErrorBoundary != null ||
          n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      (n.props.children && (r.children = Qf(n.props.children, o)), a.push(r));
    }),
    a
  );
}
var Hs = 'get',
  Vs = 'application/x-www-form-urlencoded';
function rc(e) {
  return typeof HTMLElement < 'u' && e instanceof HTMLElement;
}
function AC(e) {
  return rc(e) && e.tagName.toLowerCase() === 'button';
}
function MC(e) {
  return rc(e) && e.tagName.toLowerCase() === 'form';
}
function OC(e) {
  return rc(e) && e.tagName.toLowerCase() === 'input';
}
function NC(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function zC(e, t) {
  return e.button === 0 && (!t || t === '_self') && !NC(e);
}
var vs = null;
function BC() {
  if (vs === null)
    try {
      (new FormData(document.createElement('form'), 0), (vs = !1));
    } catch {
      vs = !0;
    }
  return vs;
}
var LC = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function $d(e) {
  return e != null && !LC.has(e)
    ? (on(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Vs}"`
      ),
      null)
    : e;
}
function $C(e, t) {
  let a, n, i, o, r;
  if (MC(e)) {
    let l = e.getAttribute('action');
    ((n = l ? On(l, t) : null),
      (a = e.getAttribute('method') || Hs),
      (i = $d(e.getAttribute('enctype')) || Vs),
      (o = new FormData(e)));
  } else if (AC(e) || (OC(e) && (e.type === 'submit' || e.type === 'image'))) {
    let l = e.form;
    if (l == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let s = e.getAttribute('formaction') || l.getAttribute('action');
    if (
      ((n = s ? On(s, t) : null),
      (a = e.getAttribute('formmethod') || l.getAttribute('method') || Hs),
      (i = $d(e.getAttribute('formenctype')) || $d(l.getAttribute('enctype')) || Vs),
      (o = new FormData(l, e)),
      !BC())
    ) {
      let { name: u, type: c, value: f } = e;
      if (c === 'image') {
        let d = u ? `${u}.` : '';
        (o.append(`${d}x`, '0'), o.append(`${d}y`, '0'));
      } else u && o.append(u, f);
    }
  } else {
    if (rc(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((a = Hs), (n = null), (i = Vs), (r = e));
  }
  return (
    o && i === 'text/plain' && ((r = o), (o = void 0)),
    { action: n, method: a.toLowerCase(), encType: i, formData: o, body: r }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function Tp(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function DC(e, t, a, n) {
  let i =
    typeof e == 'string'
      ? new URL(e, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin)
      : e;
  return (
    a
      ? i.pathname.endsWith('/')
        ? (i.pathname = `${i.pathname}_.${n}`)
        : (i.pathname = `${i.pathname}.${n}`)
      : i.pathname === '/'
        ? (i.pathname = `_root.${n}`)
        : t && On(i.pathname, t) === '/'
          ? (i.pathname = `${t.replace(/\/$/, '')}/_root.${n}`)
          : (i.pathname = `${i.pathname.replace(/\/$/, '')}.${n}`),
    i
  );
}
async function jC(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let a = await A2(() => import(e.module), []);
    return ((t[e.id] = a), a);
  } catch (a) {
    return (
      console.error(`Error loading route module \`${e.module}\`, reloading page...`),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function UC(e) {
  return e != null && typeof e.page == 'string';
}
function HC(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' && typeof e.imageSrcSet == 'string' && typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function VC(e, t, a) {
  let n = await Promise.all(
    e.map(async (i) => {
      let o = t.routes[i.route.id];
      if (o) {
        let r = await jC(o, a);
        return r.links ? r.links() : [];
      }
      return [];
    })
  );
  return qC(
    n
      .flat(1)
      .filter(HC)
      .filter((i) => i.rel === 'stylesheet' || i.rel === 'preload')
      .map((i) =>
        i.rel === 'stylesheet' ? { ...i, rel: 'prefetch', as: 'style' } : { ...i, rel: 'prefetch' }
      )
  );
}
function Zh(e, t, a, n, i, o) {
  let r = (s, u) => (a[u] ? s.route.id !== a[u].route.id : !0),
    l = (s, u) => {
      var c;
      return (
        a[u].pathname !== s.pathname ||
        (((c = a[u].route.path) == null ? void 0 : c.endsWith('*')) &&
          a[u].params['*'] !== s.params['*'])
      );
    };
  return o === 'assets'
    ? t.filter((s, u) => r(s, u) || l(s, u))
    : o === 'data'
      ? t.filter((s, u) => {
          var f;
          let c = n.routes[s.route.id];
          if (!c || !c.hasLoader) return !1;
          if (r(s, u) || l(s, u)) return !0;
          if (s.route.shouldRevalidate) {
            let d = s.route.shouldRevalidate({
              currentUrl: new URL(i.pathname + i.search + i.hash, window.origin),
              currentParams: ((f = a[0]) == null ? void 0 : f.params) || {},
              nextUrl: new URL(e, window.origin),
              nextParams: s.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof d == 'boolean') return d;
          }
          return !0;
        })
      : [];
}
function GC(e, t, { includeHydrateFallback: a } = {}) {
  return IC(
    e
      .map((n) => {
        let i = t.routes[n.route.id];
        if (!i) return [];
        let o = [i.module];
        return (
          i.clientActionModule && (o = o.concat(i.clientActionModule)),
          i.clientLoaderModule && (o = o.concat(i.clientLoaderModule)),
          a && i.hydrateFallbackModule && (o = o.concat(i.hydrateFallbackModule)),
          i.imports && (o = o.concat(i.imports)),
          o
        );
      })
      .flat(1)
  );
}
function IC(e) {
  return [...new Set(e)];
}
function PC(e) {
  let t = {},
    a = Object.keys(e).sort();
  for (let n of a) t[n] = e[n];
  return t;
}
function qC(e, t) {
  let a = new Set(),
    n = new Set(t);
  return e.reduce((i, o) => {
    if (t && !UC(o) && o.as === 'script' && o.href && n.has(o.href)) return i;
    let l = JSON.stringify(PC(o));
    return (a.has(l) || (a.add(l), i.push({ key: l, link: o })), i);
  }, []);
}
function Pb() {
  let e = y.useContext(ir);
  return (Tp(e, 'You must render this element inside a <DataRouterContext.Provider> element'), e);
}
function KC() {
  let e = y.useContext(oc);
  return (
    Tp(e, 'You must render this element inside a <DataRouterStateContext.Provider> element'),
    e
  );
}
var Rp = y.createContext(void 0);
Rp.displayName = 'FrameworkContext';
function qb() {
  let e = y.useContext(Rp);
  return (Tp(e, 'You must render this element inside a <HydratedRouter> element'), e);
}
function YC(e, t) {
  let a = y.useContext(Rp),
    [n, i] = y.useState(!1),
    [o, r] = y.useState(!1),
    { onFocus: l, onBlur: s, onMouseEnter: u, onMouseLeave: c, onTouchStart: f } = t,
    d = y.useRef(null);
  (y.useEffect(() => {
    if ((e === 'render' && r(!0), e === 'viewport')) {
      let x = (m) => {
          m.forEach((p) => {
            r(p.isIntersecting);
          });
        },
        S = new IntersectionObserver(x, { threshold: 0.5 });
      return (
        d.current && S.observe(d.current),
        () => {
          S.disconnect();
        }
      );
    }
  }, [e]),
    y.useEffect(() => {
      if (n) {
        let x = setTimeout(() => {
          r(!0);
        }, 100);
        return () => {
          clearTimeout(x);
        };
      }
    }, [n]));
  let g = () => {
      i(!0);
    },
    _ = () => {
      (i(!1), r(!1));
    };
  return a
    ? e !== 'intent'
      ? [o, d, {}]
      : [
          o,
          d,
          {
            onFocus: wr(l, g),
            onBlur: wr(s, _),
            onMouseEnter: wr(u, g),
            onMouseLeave: wr(c, _),
            onTouchStart: wr(f, g),
          },
        ]
    : [!1, d, {}];
}
function wr(e, t) {
  return (a) => {
    (e && e(a), a.defaultPrevented || t(a));
  };
}
function XC({ page: e, ...t }) {
  let { router: a } = Pb(),
    n = y.useMemo(() => Ab(a.routes, e, a.basename), [a.routes, e, a.basename]);
  return n ? y.createElement(ZC, { page: e, matches: n, ...t }) : null;
}
function QC(e) {
  let { manifest: t, routeModules: a } = qb(),
    [n, i] = y.useState([]);
  return (
    y.useEffect(() => {
      let o = !1;
      return (
        VC(e, t, a).then((r) => {
          o || i(r);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, a]),
    n
  );
}
function ZC({ page: e, matches: t, ...a }) {
  let n = Ii(),
    { future: i, manifest: o, routeModules: r } = qb(),
    { basename: l } = Pb(),
    { loaderData: s, matches: u } = KC(),
    c = y.useMemo(() => Zh(e, t, u, o, n, 'data'), [e, t, u, o, n]),
    f = y.useMemo(() => Zh(e, t, u, o, n, 'assets'), [e, t, u, o, n]),
    d = y.useMemo(() => {
      if (e === n.pathname + n.search + n.hash) return [];
      let x = new Set(),
        S = !1;
      if (
        (t.forEach((p) => {
          var v;
          let h = o.routes[p.route.id];
          !h ||
            !h.hasLoader ||
            ((!c.some((C) => C.route.id === p.route.id) &&
              p.route.id in s &&
              (v = r[p.route.id]) != null &&
              v.shouldRevalidate) ||
            h.hasClientLoader
              ? (S = !0)
              : x.add(p.route.id));
        }),
        x.size === 0)
      )
        return [];
      let m = DC(e, l, i.unstable_trailingSlashAwareDataRequests, 'data');
      return (
        S &&
          x.size > 0 &&
          m.searchParams.set(
            '_routes',
            t
              .filter((p) => x.has(p.route.id))
              .map((p) => p.route.id)
              .join(',')
          ),
        [m.pathname + m.search]
      );
    }, [l, i.unstable_trailingSlashAwareDataRequests, s, n, o, c, t, e, r]),
    g = y.useMemo(() => GC(f, o), [f, o]),
    _ = QC(f);
  return y.createElement(
    y.Fragment,
    null,
    d.map((x) => y.createElement('link', { key: x, rel: 'prefetch', as: 'fetch', href: x, ...a })),
    g.map((x) => y.createElement('link', { key: x, rel: 'modulepreload', href: x, ...a })),
    _.map(({ key: x, link: S }) =>
      y.createElement('link', {
        key: x,
        nonce: a.nonce,
        ...S,
        crossOrigin: S.crossOrigin ?? a.crossOrigin,
      })
    )
  );
}
function WC(...e) {
  return (t) => {
    e.forEach((a) => {
      typeof a == 'function' ? a(t) : a != null && (a.current = t);
    });
  };
}
var JC =
  typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u';
try {
  JC && (window.__reactRouterVersion = '7.13.0');
} catch {}
function ek({ basename: e, children: t, unstable_useTransitions: a, window: n }) {
  let i = y.useRef();
  i.current == null && (i.current = M2({ window: n, v5Compat: !0 }));
  let o = i.current,
    [r, l] = y.useState({ action: o.action, location: o.location }),
    s = y.useCallback(
      (u) => {
        a === !1 ? l(u) : y.startTransition(() => l(u));
      },
      [a]
    );
  return (
    y.useLayoutEffect(() => o.listen(s), [o, s]),
    y.createElement(TC, {
      basename: e,
      children: t,
      location: r.location,
      navigationType: r.action,
      navigator: o,
      unstable_useTransitions: a,
    })
  );
}
var Kb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Yb = y.forwardRef(function (
    {
      onClick: t,
      discover: a = 'render',
      prefetch: n = 'none',
      relative: i,
      reloadDocument: o,
      replace: r,
      state: l,
      target: s,
      to: u,
      preventScrollReset: c,
      viewTransition: f,
      unstable_defaultShouldRevalidate: d,
      ...g
    },
    _
  ) {
    let { basename: x, unstable_useTransitions: S } = y.useContext(Oa),
      m = typeof u == 'string' && Kb.test(u),
      p = Lb(u, x);
    u = p.to;
    let h = dC(u, { relative: i }),
      [v, C, k] = YC(n, g),
      E = ik(u, {
        replace: r,
        state: l,
        target: s,
        preventScrollReset: c,
        relative: i,
        viewTransition: f,
        unstable_defaultShouldRevalidate: d,
        unstable_useTransitions: S,
      });
    function M($) {
      (t && t($), $.defaultPrevented || E($));
    }
    let z = y.createElement('a', {
      ...g,
      ...k,
      href: p.absoluteURL || h,
      onClick: p.isExternal || o ? t : M,
      ref: WC(_, C),
      target: s,
      'data-discover': !m && a === 'render' ? 'true' : void 0,
    });
    return v && !m ? y.createElement(y.Fragment, null, z, y.createElement(XC, { page: h })) : z;
  });
Yb.displayName = 'Link';
var tk = y.forwardRef(function (
  {
    'aria-current': t = 'page',
    caseSensitive: a = !1,
    className: n = '',
    end: i = !1,
    style: o,
    to: r,
    viewTransition: l,
    children: s,
    ...u
  },
  c
) {
  let f = Gl(r, { relative: u.relative }),
    d = Ii(),
    g = y.useContext(oc),
    { navigator: _, basename: x } = y.useContext(Oa),
    S = g != null && uk(f) && l === !0,
    m = _.encodeLocation ? _.encodeLocation(f).pathname : f.pathname,
    p = d.pathname,
    h = g && g.navigation && g.navigation.location ? g.navigation.location.pathname : null;
  (a || ((p = p.toLowerCase()), (h = h ? h.toLowerCase() : null), (m = m.toLowerCase())),
    h && x && (h = On(h, x) || h));
  const v = m !== '/' && m.endsWith('/') ? m.length - 1 : m.length;
  let C = p === m || (!i && p.startsWith(m) && p.charAt(v) === '/'),
    k = h != null && (h === m || (!i && h.startsWith(m) && h.charAt(m.length) === '/')),
    E = { isActive: C, isPending: k, isTransitioning: S },
    M = C ? t : void 0,
    z;
  typeof n == 'function'
    ? (z = n(E))
    : (z = [n, C ? 'active' : null, k ? 'pending' : null, S ? 'transitioning' : null]
        .filter(Boolean)
        .join(' '));
  let $ = typeof o == 'function' ? o(E) : o;
  return y.createElement(
    Yb,
    { ...u, 'aria-current': M, className: z, ref: c, style: $, to: r, viewTransition: l },
    typeof s == 'function' ? s(E) : s
  );
});
tk.displayName = 'NavLink';
var ak = y.forwardRef(
  (
    {
      discover: e = 'render',
      fetcherKey: t,
      navigate: a,
      reloadDocument: n,
      replace: i,
      state: o,
      method: r = Hs,
      action: l,
      onSubmit: s,
      relative: u,
      preventScrollReset: c,
      viewTransition: f,
      unstable_defaultShouldRevalidate: d,
      ...g
    },
    _
  ) => {
    let { unstable_useTransitions: x } = y.useContext(Oa),
      S = lk(),
      m = sk(l, { relative: u }),
      p = r.toLowerCase() === 'get' ? 'get' : 'post',
      h = typeof l == 'string' && Kb.test(l),
      v = (C) => {
        if ((s && s(C), C.defaultPrevented)) return;
        C.preventDefault();
        let k = C.nativeEvent.submitter,
          E = (k == null ? void 0 : k.getAttribute('formmethod')) || r,
          M = () =>
            S(k || C.currentTarget, {
              fetcherKey: t,
              method: E,
              navigate: a,
              replace: i,
              state: o,
              relative: u,
              preventScrollReset: c,
              viewTransition: f,
              unstable_defaultShouldRevalidate: d,
            });
        x && a !== !1 ? y.startTransition(() => M()) : M();
      };
    return y.createElement('form', {
      ref: _,
      method: p,
      action: m,
      onSubmit: n ? s : v,
      ...g,
      'data-discover': !h && e === 'render' ? 'true' : void 0,
    });
  }
);
ak.displayName = 'Form';
function nk(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Xb(e) {
  let t = y.useContext(ir);
  return (We(t, nk(e)), t);
}
function ik(
  e,
  {
    target: t,
    replace: a,
    state: n,
    preventScrollReset: i,
    relative: o,
    viewTransition: r,
    unstable_defaultShouldRevalidate: l,
    unstable_useTransitions: s,
  } = {}
) {
  let u = fC(),
    c = Ii(),
    f = Gl(e, { relative: o });
  return y.useCallback(
    (d) => {
      if (zC(d, t)) {
        d.preventDefault();
        let g = a !== void 0 ? a : Sl(c) === Sl(f),
          _ = () =>
            u(e, {
              replace: g,
              state: n,
              preventScrollReset: i,
              relative: o,
              viewTransition: r,
              unstable_defaultShouldRevalidate: l,
            });
        s ? y.startTransition(() => _()) : _();
      }
    },
    [c, u, f, a, n, t, e, i, o, r, l, s]
  );
}
var ok = 0,
  rk = () => `__${String(++ok)}__`;
function lk() {
  let { router: e } = Xb('useSubmit'),
    { basename: t } = y.useContext(Oa),
    a = CC(),
    n = e.fetch,
    i = e.navigate;
  return y.useCallback(
    async (o, r = {}) => {
      let { action: l, method: s, encType: u, formData: c, body: f } = $C(o, t);
      if (r.navigate === !1) {
        let d = r.fetcherKey || rk();
        await n(d, a, r.action || l, {
          unstable_defaultShouldRevalidate: r.unstable_defaultShouldRevalidate,
          preventScrollReset: r.preventScrollReset,
          formData: c,
          body: f,
          formMethod: r.method || s,
          formEncType: r.encType || u,
          flushSync: r.flushSync,
        });
      } else
        await i(r.action || l, {
          unstable_defaultShouldRevalidate: r.unstable_defaultShouldRevalidate,
          preventScrollReset: r.preventScrollReset,
          formData: c,
          body: f,
          formMethod: r.method || s,
          formEncType: r.encType || u,
          replace: r.replace,
          state: r.state,
          fromRouteId: a,
          flushSync: r.flushSync,
          viewTransition: r.viewTransition,
        });
    },
    [n, i, t, a]
  );
}
function sk(e, { relative: t } = {}) {
  let { basename: a } = y.useContext(Oa),
    n = y.useContext(sn);
  We(n, 'useFormAction must be used inside a RouteContext');
  let [i] = n.matches.slice(-1),
    o = { ...Gl(e || '.', { relative: t }) },
    r = Ii();
  if (e == null) {
    o.search = r.search;
    let l = new URLSearchParams(o.search),
      s = l.getAll('index');
    if (s.some((c) => c === '')) {
      (l.delete('index'), s.filter((f) => f).forEach((f) => l.append('index', f)));
      let c = l.toString();
      o.search = c ? `?${c}` : '';
    }
  }
  return (
    (!e || e === '.') &&
      i.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, '?index&') : '?index'),
    a !== '/' && (o.pathname = o.pathname === '/' ? a : En([a, o.pathname])),
    Sl(o)
  );
}
function uk(e, { relative: t } = {}) {
  let a = y.useContext(Db);
  We(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: n } = Xb('useViewTransitionState'),
    i = Gl(e, { relative: t });
  if (!a.isTransitioning) return !1;
  let o = On(a.currentLocation.pathname, n) || a.currentLocation.pathname,
    r = On(a.nextLocation.pathname, n) || a.nextLocation.pathname;
  return wu(i.pathname, r) != null || wu(i.pathname, o) != null;
}
const ck = { black: '#000', white: '#fff' },
  xl = ck,
  dk = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  },
  Xi = dk,
  fk = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
  },
  Qi = fk,
  gk = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  },
  Zi = gk,
  pk = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
  },
  Wi = pk,
  mk = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  },
  Ji = mk,
  hk = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  },
  Cr = hk,
  vk = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  _k = vk;
function Nn(e, ...t) {
  const a = new URL(`https://mui.com/production-error/?code=${e}`);
  return (
    t.forEach((n) => a.searchParams.append('args[]', n)),
    `Minified MUI error #${e}; visit ${a} for the full message.`
  );
}
const lc = '$$material';
function Cu() {
  return (
    (Cu = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t];
            for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
          }
          return e;
        }),
    Cu.apply(null, arguments)
  );
}
var yk = !1;
function bk(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Sk(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var xk = (function () {
    function e(a) {
      var n = this;
      ((this._insertTag = function (i) {
        var o;
        (n.tags.length === 0
          ? n.insertionPoint
            ? (o = n.insertionPoint.nextSibling)
            : n.prepend
              ? (o = n.container.firstChild)
              : (o = n.before)
          : (o = n.tags[n.tags.length - 1].nextSibling),
          n.container.insertBefore(i, o),
          n.tags.push(i));
      }),
        (this.isSpeedy = a.speedy === void 0 ? !yk : a.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = a.nonce),
        (this.key = a.key),
        (this.container = a.container),
        (this.prepend = a.prepend),
        (this.insertionPoint = a.insertionPoint),
        (this.before = null));
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (n) {
        n.forEach(this._insertTag);
      }),
      (t.insert = function (n) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Sk(this));
        var i = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var o = bk(i);
          try {
            o.insertRule(n, o.cssRules.length);
          } catch {}
        } else i.appendChild(document.createTextNode(n));
        this.ctr++;
      }),
      (t.flush = function () {
        (this.tags.forEach(function (n) {
          var i;
          return (i = n.parentNode) == null ? void 0 : i.removeChild(n);
        }),
          (this.tags = []),
          (this.ctr = 0));
      }),
      e
    );
  })(),
  jt = '-ms-',
  ku = '-moz-',
  xe = '-webkit-',
  Qb = 'comm',
  Ap = 'rule',
  Mp = 'decl',
  wk = '@import',
  Zb = '@keyframes',
  Ck = '@layer',
  kk = Math.abs,
  sc = String.fromCharCode,
  Ek = Object.assign;
function Fk(e, t) {
  return zt(e, 0) ^ 45
    ? (((((((t << 2) ^ zt(e, 0)) << 2) ^ zt(e, 1)) << 2) ^ zt(e, 2)) << 2) ^ zt(e, 3)
    : 0;
}
function Wb(e) {
  return e.trim();
}
function Tk(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function we(e, t, a) {
  return e.replace(t, a);
}
function Zf(e, t) {
  return e.indexOf(t);
}
function zt(e, t) {
  return e.charCodeAt(t) | 0;
}
function wl(e, t, a) {
  return e.slice(t, a);
}
function Ya(e) {
  return e.length;
}
function Op(e) {
  return e.length;
}
function _s(e, t) {
  return (t.push(e), e);
}
function Rk(e, t) {
  return e.map(t).join('');
}
var uc = 1,
  Po = 1,
  Jb = 0,
  ta = 0,
  mt = 0,
  or = '';
function cc(e, t, a, n, i, o, r) {
  return {
    value: e,
    root: t,
    parent: a,
    type: n,
    props: i,
    children: o,
    line: uc,
    column: Po,
    length: r,
    return: '',
  };
}
function kr(e, t) {
  return Ek(cc('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function Ak() {
  return mt;
}
function Mk() {
  return ((mt = ta > 0 ? zt(or, --ta) : 0), Po--, mt === 10 && ((Po = 1), uc--), mt);
}
function pa() {
  return ((mt = ta < Jb ? zt(or, ta++) : 0), Po++, mt === 10 && ((Po = 1), uc++), mt);
}
function nn() {
  return zt(or, ta);
}
function Gs() {
  return ta;
}
function Il(e, t) {
  return wl(or, e, t);
}
function Cl(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function e1(e) {
  return ((uc = Po = 1), (Jb = Ya((or = e))), (ta = 0), []);
}
function t1(e) {
  return ((or = ''), e);
}
function Is(e) {
  return Wb(Il(ta - 1, Wf(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ok(e) {
  for (; (mt = nn()) && mt < 33; ) pa();
  return Cl(e) > 2 || Cl(mt) > 3 ? '' : ' ';
}
function Nk(e, t) {
  for (; --t && pa() && !(mt < 48 || mt > 102 || (mt > 57 && mt < 65) || (mt > 70 && mt < 97)); );
  return Il(e, Gs() + (t < 6 && nn() == 32 && pa() == 32));
}
function Wf(e) {
  for (; pa(); )
    switch (mt) {
      case e:
        return ta;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Wf(mt);
        break;
      case 40:
        e === 41 && Wf(e);
        break;
      case 92:
        pa();
        break;
    }
  return ta;
}
function zk(e, t) {
  for (; pa() && e + mt !== 47 + 10; ) if (e + mt === 42 + 42 && nn() === 47) break;
  return '/*' + Il(t, ta - 1) + '*' + sc(e === 47 ? e : pa());
}
function Bk(e) {
  for (; !Cl(nn()); ) pa();
  return Il(e, ta);
}
function Lk(e) {
  return t1(Ps('', null, null, null, [''], (e = e1(e)), 0, [0], e));
}
function Ps(e, t, a, n, i, o, r, l, s) {
  for (
    var u = 0,
      c = 0,
      f = r,
      d = 0,
      g = 0,
      _ = 0,
      x = 1,
      S = 1,
      m = 1,
      p = 0,
      h = '',
      v = i,
      C = o,
      k = n,
      E = h;
    S;
  )
    switch (((_ = p), (p = pa()))) {
      case 40:
        if (_ != 108 && zt(E, f - 1) == 58) {
          Zf((E += we(Is(p), '&', '&\f')), '&\f') != -1 && (m = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Is(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += Ok(_);
        break;
      case 92:
        E += Nk(Gs() - 1, 7);
        continue;
      case 47:
        switch (nn()) {
          case 42:
          case 47:
            _s($k(zk(pa(), Gs()), t, a), s);
            break;
          default:
            E += '/';
        }
        break;
      case 123 * x:
        l[u++] = Ya(E) * m;
      case 125 * x:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            S = 0;
          case 59 + c:
            (m == -1 && (E = we(E, /\f/g, '')),
              g > 0 &&
                Ya(E) - f &&
                _s(g > 32 ? Jh(E + ';', n, a, f - 1) : Jh(we(E, ' ', '') + ';', n, a, f - 2), s));
            break;
          case 59:
            E += ';';
          default:
            if ((_s((k = Wh(E, t, a, u, c, i, l, h, (v = []), (C = []), f)), o), p === 123))
              if (c === 0) Ps(E, t, k, k, v, o, f, l, C);
              else
                switch (d === 99 && zt(E, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ps(
                      e,
                      k,
                      k,
                      n && _s(Wh(e, k, k, 0, 0, i, l, h, i, (v = []), f), C),
                      i,
                      C,
                      f,
                      l,
                      n ? v : C
                    );
                    break;
                  default:
                    Ps(E, k, k, k, [''], C, 0, l, C);
                }
        }
        ((u = c = g = 0), (x = m = 1), (h = E = ''), (f = r));
        break;
      case 58:
        ((f = 1 + Ya(E)), (g = _));
      default:
        if (x < 1) {
          if (p == 123) --x;
          else if (p == 125 && x++ == 0 && Mk() == 125) continue;
        }
        switch (((E += sc(p)), p * x)) {
          case 38:
            m = c > 0 ? 1 : ((E += '\f'), -1);
            break;
          case 44:
            ((l[u++] = (Ya(E) - 1) * m), (m = 1));
            break;
          case 64:
            (nn() === 45 && (E += Is(pa())), (d = nn()), (c = f = Ya((h = E += Bk(Gs())))), p++);
            break;
          case 45:
            _ === 45 && Ya(E) == 2 && (x = 0);
        }
    }
  return o;
}
function Wh(e, t, a, n, i, o, r, l, s, u, c) {
  for (var f = i - 1, d = i === 0 ? o : [''], g = Op(d), _ = 0, x = 0, S = 0; _ < n; ++_)
    for (var m = 0, p = wl(e, f + 1, (f = kk((x = r[_])))), h = e; m < g; ++m)
      (h = Wb(x > 0 ? d[m] + ' ' + p : we(p, /&\f/g, d[m]))) && (s[S++] = h);
  return cc(e, t, a, i === 0 ? Ap : l, s, u, c);
}
function $k(e, t, a) {
  return cc(e, t, a, Qb, sc(Ak()), wl(e, 2, -2), 0);
}
function Jh(e, t, a, n) {
  return cc(e, t, a, Mp, wl(e, 0, n), wl(e, n + 1, -1), n);
}
function Mo(e, t) {
  for (var a = '', n = Op(e), i = 0; i < n; i++) a += t(e[i], i, e, t) || '';
  return a;
}
function Dk(e, t, a, n) {
  switch (e.type) {
    case Ck:
      if (e.children.length) break;
    case wk:
    case Mp:
      return (e.return = e.return || e.value);
    case Qb:
      return '';
    case Zb:
      return (e.return = e.value + '{' + Mo(e.children, n) + '}');
    case Ap:
      e.value = e.props.join(',');
  }
  return Ya((a = Mo(e.children, n))) ? (e.return = e.value + '{' + a + '}') : '';
}
function jk(e) {
  var t = Op(e);
  return function (a, n, i, o) {
    for (var r = '', l = 0; l < t; l++) r += e[l](a, n, i, o) || '';
    return r;
  };
}
function Uk(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function a1(e) {
  var t = Object.create(null);
  return function (a) {
    return (t[a] === void 0 && (t[a] = e(a)), t[a]);
  };
}
var Hk = function (t, a, n) {
    for (var i = 0, o = 0; (i = o), (o = nn()), i === 38 && o === 12 && (a[n] = 1), !Cl(o); ) pa();
    return Il(t, ta);
  },
  Vk = function (t, a) {
    var n = -1,
      i = 44;
    do
      switch (Cl(i)) {
        case 0:
          (i === 38 && nn() === 12 && (a[n] = 1), (t[n] += Hk(ta - 1, a, n)));
          break;
        case 2:
          t[n] += Is(i);
          break;
        case 4:
          if (i === 44) {
            ((t[++n] = nn() === 58 ? '&\f' : ''), (a[n] = t[n].length));
            break;
          }
        default:
          t[n] += sc(i);
      }
    while ((i = pa()));
    return t;
  },
  Gk = function (t, a) {
    return t1(Vk(e1(t), a));
  },
  e0 = new WeakMap(),
  Ik = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var a = t.value, n = t.parent, i = t.column === n.column && t.line === n.line;
        n.type !== 'rule';
      )
        if (((n = n.parent), !n)) return;
      if (!(t.props.length === 1 && a.charCodeAt(0) !== 58 && !e0.get(n)) && !i) {
        e0.set(t, !0);
        for (var o = [], r = Gk(a, o), l = n.props, s = 0, u = 0; s < r.length; s++)
          for (var c = 0; c < l.length; c++, u++)
            t.props[u] = o[s] ? r[s].replace(/&\f/g, l[c]) : l[c] + ' ' + r[s];
      }
    }
  },
  Pk = function (t) {
    if (t.type === 'decl') {
      var a = t.value;
      a.charCodeAt(0) === 108 && a.charCodeAt(2) === 98 && ((t.return = ''), (t.value = ''));
    }
  };
function n1(e, t) {
  switch (Fk(e, t)) {
    case 5103:
      return xe + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return xe + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return xe + e + ku + e + jt + e + e;
    case 6828:
    case 4268:
      return xe + e + jt + e + e;
    case 6165:
      return xe + e + jt + 'flex-' + e + e;
    case 5187:
      return xe + e + we(e, /(\w+).+(:[^]+)/, xe + 'box-$1$2' + jt + 'flex-$1$2') + e;
    case 5443:
      return xe + e + jt + 'flex-item-' + we(e, /flex-|-self/, '') + e;
    case 4675:
      return xe + e + jt + 'flex-line-pack' + we(e, /align-content|flex-|-self/, '') + e;
    case 5548:
      return xe + e + jt + we(e, 'shrink', 'negative') + e;
    case 5292:
      return xe + e + jt + we(e, 'basis', 'preferred-size') + e;
    case 6060:
      return xe + 'box-' + we(e, '-grow', '') + xe + e + jt + we(e, 'grow', 'positive') + e;
    case 4554:
      return xe + we(e, /([^-])(transform)/g, '$1' + xe + '$2') + e;
    case 6187:
      return we(we(we(e, /(zoom-|grab)/, xe + '$1'), /(image-set)/, xe + '$1'), e, '') + e;
    case 5495:
    case 3959:
      return we(e, /(image-set\([^]*)/, xe + '$1$`$1');
    case 4968:
      return (
        we(
          we(e, /(.+:)(flex-)?(.*)/, xe + 'box-pack:$3' + jt + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        xe +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return we(e, /(.+)-inline(.+)/, xe + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Ya(e) - 1 - t > 6)
        switch (zt(e, t + 1)) {
          case 109:
            if (zt(e, t + 4) !== 45) break;
          case 102:
            return (
              we(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' + xe + '$2-$3$1' + ku + (zt(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~Zf(e, 'stretch') ? n1(we(e, 'stretch', 'fill-available'), t) + e : e;
        }
      break;
    case 4949:
      if (zt(e, t + 1) !== 115) break;
    case 6444:
      switch (zt(e, Ya(e) - 3 - (~Zf(e, '!important') && 10))) {
        case 107:
          return we(e, ':', ':' + xe) + e;
        case 101:
          return (
            we(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                xe +
                (zt(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                xe +
                '$2$3$1' +
                jt +
                '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (zt(e, t + 11)) {
        case 114:
          return xe + e + jt + we(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return xe + e + jt + we(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return xe + e + jt + we(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return xe + e + jt + e + e;
  }
  return e;
}
var qk = function (t, a, n, i) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Mp:
          t.return = n1(t.value, t.length);
          break;
        case Zb:
          return Mo([kr(t, { value: we(t.value, '@', '@' + xe) })], i);
        case Ap:
          if (t.length)
            return Rk(t.props, function (o) {
              switch (Tk(o, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return Mo([kr(t, { props: [we(o, /:(read-\w+)/, ':' + ku + '$1')] })], i);
                case '::placeholder':
                  return Mo(
                    [
                      kr(t, { props: [we(o, /:(plac\w+)/, ':' + xe + 'input-$1')] }),
                      kr(t, { props: [we(o, /:(plac\w+)/, ':' + ku + '$1')] }),
                      kr(t, { props: [we(o, /:(plac\w+)/, jt + 'input-$1')] }),
                    ],
                    i
                  );
              }
              return '';
            });
      }
  },
  Kk = [qk],
  Yk = function (t) {
    var a = t.key;
    if (a === 'css') {
      var n = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(n, function (x) {
        var S = x.getAttribute('data-emotion');
        S.indexOf(' ') !== -1 && (document.head.appendChild(x), x.setAttribute('data-s', ''));
      });
    }
    var i = t.stylisPlugins || Kk,
      o = {},
      r,
      l = [];
    ((r = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + a + ' "]'),
        function (x) {
          for (var S = x.getAttribute('data-emotion').split(' '), m = 1; m < S.length; m++)
            o[S[m]] = !0;
          l.push(x);
        }
      ));
    var s,
      u = [Ik, Pk];
    {
      var c,
        f = [
          Dk,
          Uk(function (x) {
            c.insert(x);
          }),
        ],
        d = jk(u.concat(i, f)),
        g = function (S) {
          return Mo(Lk(S), d);
        };
      s = function (S, m, p, h) {
        ((c = p), g(S ? S + '{' + m.styles + '}' : m.styles), h && (_.inserted[m.name] = !0));
      };
    }
    var _ = {
      key: a,
      sheet: new xk({
        key: a,
        container: r,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: o,
      registered: {},
      insert: s,
    };
    return (_.sheet.hydrate(l), _);
  },
  i1 = { exports: {} },
  Ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rt = typeof Symbol == 'function' && Symbol.for,
  Np = Rt ? Symbol.for('react.element') : 60103,
  zp = Rt ? Symbol.for('react.portal') : 60106,
  dc = Rt ? Symbol.for('react.fragment') : 60107,
  fc = Rt ? Symbol.for('react.strict_mode') : 60108,
  gc = Rt ? Symbol.for('react.profiler') : 60114,
  pc = Rt ? Symbol.for('react.provider') : 60109,
  mc = Rt ? Symbol.for('react.context') : 60110,
  Bp = Rt ? Symbol.for('react.async_mode') : 60111,
  hc = Rt ? Symbol.for('react.concurrent_mode') : 60111,
  vc = Rt ? Symbol.for('react.forward_ref') : 60112,
  _c = Rt ? Symbol.for('react.suspense') : 60113,
  Xk = Rt ? Symbol.for('react.suspense_list') : 60120,
  yc = Rt ? Symbol.for('react.memo') : 60115,
  bc = Rt ? Symbol.for('react.lazy') : 60116,
  Qk = Rt ? Symbol.for('react.block') : 60121,
  Zk = Rt ? Symbol.for('react.fundamental') : 60117,
  Wk = Rt ? Symbol.for('react.responder') : 60118,
  Jk = Rt ? Symbol.for('react.scope') : 60119;
function va(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Np:
        switch (((e = e.type), e)) {
          case Bp:
          case hc:
          case dc:
          case gc:
          case fc:
          case _c:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case mc:
              case vc:
              case bc:
              case yc:
              case pc:
                return e;
              default:
                return t;
            }
        }
      case zp:
        return t;
    }
  }
}
function o1(e) {
  return va(e) === hc;
}
Ne.AsyncMode = Bp;
Ne.ConcurrentMode = hc;
Ne.ContextConsumer = mc;
Ne.ContextProvider = pc;
Ne.Element = Np;
Ne.ForwardRef = vc;
Ne.Fragment = dc;
Ne.Lazy = bc;
Ne.Memo = yc;
Ne.Portal = zp;
Ne.Profiler = gc;
Ne.StrictMode = fc;
Ne.Suspense = _c;
Ne.isAsyncMode = function (e) {
  return o1(e) || va(e) === Bp;
};
Ne.isConcurrentMode = o1;
Ne.isContextConsumer = function (e) {
  return va(e) === mc;
};
Ne.isContextProvider = function (e) {
  return va(e) === pc;
};
Ne.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Np;
};
Ne.isForwardRef = function (e) {
  return va(e) === vc;
};
Ne.isFragment = function (e) {
  return va(e) === dc;
};
Ne.isLazy = function (e) {
  return va(e) === bc;
};
Ne.isMemo = function (e) {
  return va(e) === yc;
};
Ne.isPortal = function (e) {
  return va(e) === zp;
};
Ne.isProfiler = function (e) {
  return va(e) === gc;
};
Ne.isStrictMode = function (e) {
  return va(e) === fc;
};
Ne.isSuspense = function (e) {
  return va(e) === _c;
};
Ne.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === dc ||
    e === hc ||
    e === gc ||
    e === fc ||
    e === _c ||
    e === Xk ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === bc ||
        e.$$typeof === yc ||
        e.$$typeof === pc ||
        e.$$typeof === mc ||
        e.$$typeof === vc ||
        e.$$typeof === Zk ||
        e.$$typeof === Wk ||
        e.$$typeof === Jk ||
        e.$$typeof === Qk))
  );
};
Ne.typeOf = va;
i1.exports = Ne;
var eE = i1.exports,
  r1 = eE,
  tE = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
  aE = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  l1 = {};
l1[r1.ForwardRef] = tE;
l1[r1.Memo] = aE;
var nE = !0;
function s1(e, t, a) {
  var n = '';
  return (
    a.split(' ').forEach(function (i) {
      e[i] !== void 0 ? t.push(e[i] + ';') : i && (n += i + ' ');
    }),
    n
  );
}
var Lp = function (t, a, n) {
    var i = t.key + '-' + a.name;
    (n === !1 || nE === !1) && t.registered[i] === void 0 && (t.registered[i] = a.styles);
  },
  $p = function (t, a, n) {
    Lp(t, a, n);
    var i = t.key + '-' + a.name;
    if (t.inserted[a.name] === void 0) {
      var o = a;
      do (t.insert(a === o ? '.' + i : '', o, t.sheet, !0), (o = o.next));
      while (o !== void 0);
    }
  };
function iE(e) {
  for (var t = 0, a, n = 0, i = e.length; i >= 4; ++n, i -= 4)
    ((a =
      (e.charCodeAt(n) & 255) |
      ((e.charCodeAt(++n) & 255) << 8) |
      ((e.charCodeAt(++n) & 255) << 16) |
      ((e.charCodeAt(++n) & 255) << 24)),
      (a = (a & 65535) * 1540483477 + (((a >>> 16) * 59797) << 16)),
      (a ^= a >>> 24),
      (t =
        ((a & 65535) * 1540483477 + (((a >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))));
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      ((t ^= e.charCodeAt(n) & 255), (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var oE = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    scale: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  rE = !1,
  lE = /[A-Z]|^ms/g,
  sE = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  u1 = function (t) {
    return t.charCodeAt(1) === 45;
  },
  t0 = function (t) {
    return t != null && typeof t != 'boolean';
  },
  Dd = a1(function (e) {
    return u1(e) ? e : e.replace(lE, '-$&').toLowerCase();
  }),
  a0 = function (t, a) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof a == 'string')
          return a.replace(sE, function (n, i, o) {
            return ((Xa = { name: i, styles: o, next: Xa }), i);
          });
    }
    return oE[t] !== 1 && !u1(t) && typeof a == 'number' && a !== 0 ? a + 'px' : a;
  },
  uE =
    'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.';
function kl(e, t, a) {
  if (a == null) return '';
  var n = a;
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof a) {
    case 'boolean':
      return '';
    case 'object': {
      var i = a;
      if (i.anim === 1) return ((Xa = { name: i.name, styles: i.styles, next: Xa }), i.name);
      var o = a;
      if (o.styles !== void 0) {
        var r = o.next;
        if (r !== void 0)
          for (; r !== void 0; )
            ((Xa = { name: r.name, styles: r.styles, next: Xa }), (r = r.next));
        var l = o.styles + ';';
        return l;
      }
      return cE(e, t, a);
    }
    case 'function': {
      if (e !== void 0) {
        var s = Xa,
          u = a(e);
        return ((Xa = s), kl(e, t, u));
      }
      break;
    }
  }
  var c = a;
  if (t == null) return c;
  var f = t[c];
  return f !== void 0 ? f : c;
}
function cE(e, t, a) {
  var n = '';
  if (Array.isArray(a)) for (var i = 0; i < a.length; i++) n += kl(e, t, a[i]) + ';';
  else
    for (var o in a) {
      var r = a[o];
      if (typeof r != 'object') {
        var l = r;
        t != null && t[l] !== void 0
          ? (n += o + '{' + t[l] + '}')
          : t0(l) && (n += Dd(o) + ':' + a0(o, l) + ';');
      } else {
        if (o === 'NO_COMPONENT_SELECTOR' && rE) throw new Error(uE);
        if (Array.isArray(r) && typeof r[0] == 'string' && (t == null || t[r[0]] === void 0))
          for (var s = 0; s < r.length; s++) t0(r[s]) && (n += Dd(o) + ':' + a0(o, r[s]) + ';');
        else {
          var u = kl(e, t, r);
          switch (o) {
            case 'animation':
            case 'animationName': {
              n += Dd(o) + ':' + u + ';';
              break;
            }
            default:
              n += o + '{' + u + '}';
          }
        }
      }
    }
  return n;
}
var n0 = /label:\s*([^\s;{]+)\s*(;|$)/g,
  Xa;
function Pl(e, t, a) {
  if (e.length === 1 && typeof e[0] == 'object' && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0,
    i = '';
  Xa = void 0;
  var o = e[0];
  if (o == null || o.raw === void 0) ((n = !1), (i += kl(a, t, o)));
  else {
    var r = o;
    i += r[0];
  }
  for (var l = 1; l < e.length; l++)
    if (((i += kl(a, t, e[l])), n)) {
      var s = o;
      i += s[l];
    }
  n0.lastIndex = 0;
  for (var u = '', c; (c = n0.exec(i)) !== null; ) u += '-' + c[1];
  var f = iE(i) + u;
  return { name: f, styles: i, next: Xa };
}
var dE = function (t) {
    return t();
  },
  c1 = Wd['useInsertionEffect'] ? Wd['useInsertionEffect'] : !1,
  d1 = c1 || dE,
  i0 = c1 || y.useLayoutEffect,
  fE = !1,
  f1 = y.createContext(typeof HTMLElement < 'u' ? Yk({ key: 'css' }) : null);
f1.Provider;
var Dp = function (t) {
    return y.forwardRef(function (a, n) {
      var i = y.useContext(f1);
      return t(a, i, n);
    });
  },
  Sc = y.createContext({}),
  jp = {}.hasOwnProperty,
  Jf = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__',
  gE = function (t, a) {
    var n = {};
    for (var i in a) jp.call(a, i) && (n[i] = a[i]);
    return ((n[Jf] = t), n);
  },
  pE = function (t) {
    var a = t.cache,
      n = t.serialized,
      i = t.isStringTag;
    return (
      Lp(a, n, i),
      d1(function () {
        return $p(a, n, i);
      }),
      null
    );
  },
  mE = Dp(function (e, t, a) {
    var n = e.css;
    typeof n == 'string' && t.registered[n] !== void 0 && (n = t.registered[n]);
    var i = e[Jf],
      o = [n],
      r = '';
    typeof e.className == 'string'
      ? (r = s1(t.registered, o, e.className))
      : e.className != null && (r = e.className + ' ');
    var l = Pl(o, void 0, y.useContext(Sc));
    r += t.key + '-' + l.name;
    var s = {};
    for (var u in e) jp.call(e, u) && u !== 'css' && u !== Jf && !fE && (s[u] = e[u]);
    return (
      (s.className = r),
      a && (s.ref = a),
      y.createElement(
        y.Fragment,
        null,
        y.createElement(pE, { cache: t, serialized: l, isStringTag: typeof i == 'string' }),
        y.createElement(i, s)
      )
    );
  }),
  hE = mE,
  o0 = function (t, a) {
    var n = arguments;
    if (a == null || !jp.call(a, 'css')) return y.createElement.apply(void 0, n);
    var i = n.length,
      o = new Array(i);
    ((o[0] = hE), (o[1] = gE(t, a)));
    for (var r = 2; r < i; r++) o[r] = n[r];
    return y.createElement.apply(null, o);
  };
(function (e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(o0 || (o0 = {}));
var vE = Dp(function (e, t) {
  var a = e.styles,
    n = Pl([a], void 0, y.useContext(Sc)),
    i = y.useRef();
  return (
    i0(
      function () {
        var o = t.key + '-global',
          r = new t.sheet.constructor({
            key: o,
            nonce: t.sheet.nonce,
            container: t.sheet.container,
            speedy: t.sheet.isSpeedy,
          }),
          l = !1,
          s = document.querySelector('style[data-emotion="' + o + ' ' + n.name + '"]');
        return (
          t.sheet.tags.length && (r.before = t.sheet.tags[0]),
          s !== null && ((l = !0), s.setAttribute('data-emotion', o), r.hydrate([s])),
          (i.current = [r, l]),
          function () {
            r.flush();
          }
        );
      },
      [t]
    ),
    i0(
      function () {
        var o = i.current,
          r = o[0],
          l = o[1];
        if (l) {
          o[1] = !1;
          return;
        }
        if ((n.next !== void 0 && $p(t, n.next, !0), r.tags.length)) {
          var s = r.tags[r.tags.length - 1].nextElementSibling;
          ((r.before = s), r.flush());
        }
        t.insert('', n, r, !1);
      },
      [t, n.name]
    ),
    null
  );
});
function Up() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
  return Pl(t);
}
function ql() {
  var e = Up.apply(void 0, arguments),
    t = 'animation-' + e.name;
  return {
    name: t,
    styles: '@keyframes ' + t + '{' + e.styles + '}',
    anim: 1,
    toString: function () {
      return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
    },
  };
}
var _E =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  yE = a1(function (e) {
    return (
      _E.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
    );
  }),
  bE = !1,
  SE = yE,
  xE = function (t) {
    return t !== 'theme';
  },
  r0 = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? SE : xE;
  },
  l0 = function (t, a, n) {
    var i;
    if (a) {
      var o = a.shouldForwardProp;
      i =
        t.__emotion_forwardProp && o
          ? function (r) {
              return t.__emotion_forwardProp(r) && o(r);
            }
          : o;
    }
    return (typeof i != 'function' && n && (i = t.__emotion_forwardProp), i);
  },
  wE = function (t) {
    var a = t.cache,
      n = t.serialized,
      i = t.isStringTag;
    return (
      Lp(a, n, i),
      d1(function () {
        return $p(a, n, i);
      }),
      null
    );
  },
  CE = function e(t, a) {
    var n = t.__emotion_real === t,
      i = (n && t.__emotion_base) || t,
      o,
      r;
    a !== void 0 && ((o = a.label), (r = a.target));
    var l = l0(t, a, n),
      s = l || r0(i),
      u = !s('as');
    return function () {
      var c = arguments,
        f = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if ((o !== void 0 && f.push('label:' + o + ';'), c[0] == null || c[0].raw === void 0))
        f.push.apply(f, c);
      else {
        var d = c[0];
        f.push(d[0]);
        for (var g = c.length, _ = 1; _ < g; _++) f.push(c[_], d[_]);
      }
      var x = Dp(function (S, m, p) {
        var h = (u && S.as) || i,
          v = '',
          C = [],
          k = S;
        if (S.theme == null) {
          k = {};
          for (var E in S) k[E] = S[E];
          k.theme = y.useContext(Sc);
        }
        typeof S.className == 'string'
          ? (v = s1(m.registered, C, S.className))
          : S.className != null && (v = S.className + ' ');
        var M = Pl(f.concat(C), m.registered, k);
        ((v += m.key + '-' + M.name), r !== void 0 && (v += ' ' + r));
        var z = u && l === void 0 ? r0(h) : s,
          $ = {};
        for (var V in S) (u && V === 'as') || (z(V) && ($[V] = S[V]));
        return (
          ($.className = v),
          p && ($.ref = p),
          y.createElement(
            y.Fragment,
            null,
            y.createElement(wE, { cache: m, serialized: M, isStringTag: typeof h == 'string' }),
            y.createElement(h, $)
          )
        );
      });
      return (
        (x.displayName =
          o !== void 0
            ? o
            : 'Styled(' +
              (typeof i == 'string' ? i : i.displayName || i.name || 'Component') +
              ')'),
        (x.defaultProps = t.defaultProps),
        (x.__emotion_real = x),
        (x.__emotion_base = i),
        (x.__emotion_styles = f),
        (x.__emotion_forwardProp = l),
        Object.defineProperty(x, 'toString', {
          value: function () {
            return r === void 0 && bE ? 'NO_COMPONENT_SELECTOR' : '.' + r;
          },
        }),
        (x.withComponent = function (S, m) {
          var p = e(S, Cu({}, a, m, { shouldForwardProp: l0(x, m, !0) }));
          return p.apply(void 0, f);
        }),
        x
      );
    };
  },
  kE = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'keygen',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr',
    'circle',
    'clipPath',
    'defs',
    'ellipse',
    'foreignObject',
    'g',
    'image',
    'line',
    'linearGradient',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'stop',
    'svg',
    'text',
    'tspan',
  ],
  eg = CE.bind(null);
kE.forEach(function (e) {
  eg[e] = eg(e);
});
function EE(e) {
  return e == null || Object.keys(e).length === 0;
}
function FE(e) {
  const { styles: t, defaultTheme: a = {} } = e,
    n = typeof t == 'function' ? (i) => t(EE(i) ? a : i) : t;
  return w.jsx(vE, { styles: n });
}
/**
 * @mui/styled-engine v7.3.7
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function g1(e, t) {
  return eg(e, t);
}
function TE(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const s0 = [];
function ii(e) {
  return ((s0[0] = e), Pl(s0));
}
var p1 = { exports: {} },
  De = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hp = Symbol.for('react.transitional.element'),
  Vp = Symbol.for('react.portal'),
  xc = Symbol.for('react.fragment'),
  wc = Symbol.for('react.strict_mode'),
  Cc = Symbol.for('react.profiler'),
  kc = Symbol.for('react.consumer'),
  Ec = Symbol.for('react.context'),
  Fc = Symbol.for('react.forward_ref'),
  Tc = Symbol.for('react.suspense'),
  Rc = Symbol.for('react.suspense_list'),
  Ac = Symbol.for('react.memo'),
  Mc = Symbol.for('react.lazy'),
  RE = Symbol.for('react.view_transition'),
  AE = Symbol.for('react.client.reference');
function Na(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Hp:
        switch (((e = e.type), e)) {
          case xc:
          case Cc:
          case wc:
          case Tc:
          case Rc:
          case RE:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Ec:
              case Fc:
              case Mc:
              case Ac:
                return e;
              case kc:
                return e;
              default:
                return t;
            }
        }
      case Vp:
        return t;
    }
  }
}
De.ContextConsumer = kc;
De.ContextProvider = Ec;
De.Element = Hp;
De.ForwardRef = Fc;
De.Fragment = xc;
De.Lazy = Mc;
De.Memo = Ac;
De.Portal = Vp;
De.Profiler = Cc;
De.StrictMode = wc;
De.Suspense = Tc;
De.SuspenseList = Rc;
De.isContextConsumer = function (e) {
  return Na(e) === kc;
};
De.isContextProvider = function (e) {
  return Na(e) === Ec;
};
De.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Hp;
};
De.isForwardRef = function (e) {
  return Na(e) === Fc;
};
De.isFragment = function (e) {
  return Na(e) === xc;
};
De.isLazy = function (e) {
  return Na(e) === Mc;
};
De.isMemo = function (e) {
  return Na(e) === Ac;
};
De.isPortal = function (e) {
  return Na(e) === Vp;
};
De.isProfiler = function (e) {
  return Na(e) === Cc;
};
De.isStrictMode = function (e) {
  return Na(e) === wc;
};
De.isSuspense = function (e) {
  return Na(e) === Tc;
};
De.isSuspenseList = function (e) {
  return Na(e) === Rc;
};
De.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === xc ||
    e === Cc ||
    e === wc ||
    e === Tc ||
    e === Rc ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === Mc ||
        e.$$typeof === Ac ||
        e.$$typeof === Ec ||
        e.$$typeof === kc ||
        e.$$typeof === Fc ||
        e.$$typeof === AE ||
        e.getModuleId !== void 0))
  );
};
De.typeOf = Na;
p1.exports = De;
var m1 = p1.exports;
function Za(e) {
  if (typeof e != 'object' || e === null) return !1;
  const t = Object.getPrototypeOf(e);
  return (
    (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) &&
    !(Symbol.toStringTag in e) &&
    !(Symbol.iterator in e)
  );
}
function h1(e) {
  if (y.isValidElement(e) || m1.isValidElementType(e) || !Za(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((a) => {
      t[a] = h1(e[a]);
    }),
    t
  );
}
function Tt(e, t, a = { clone: !0 }) {
  const n = a.clone ? { ...e } : e;
  return (
    Za(e) &&
      Za(t) &&
      Object.keys(t).forEach((i) => {
        y.isValidElement(t[i]) || m1.isValidElementType(t[i])
          ? (n[i] = t[i])
          : Za(t[i]) && Object.prototype.hasOwnProperty.call(e, i) && Za(e[i])
            ? (n[i] = Tt(e[i], t[i], a))
            : a.clone
              ? (n[i] = Za(t[i]) ? h1(t[i]) : t[i])
              : (n[i] = t[i]);
      }),
    n
  );
}
const ME = (e) => {
  const t = Object.keys(e).map((a) => ({ key: a, val: e[a] })) || [];
  return (t.sort((a, n) => a.val - n.val), t.reduce((a, n) => ({ ...a, [n.key]: n.val }), {}));
};
function OE(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: a = 'px',
      step: n = 5,
      ...i
    } = e,
    o = ME(t),
    r = Object.keys(o);
  function l(d) {
    return `@media (min-width:${typeof t[d] == 'number' ? t[d] : d}${a})`;
  }
  function s(d) {
    return `@media (max-width:${(typeof t[d] == 'number' ? t[d] : d) - n / 100}${a})`;
  }
  function u(d, g) {
    const _ = r.indexOf(g);
    return `@media (min-width:${typeof t[d] == 'number' ? t[d] : d}${a}) and (max-width:${(_ !== -1 && typeof t[r[_]] == 'number' ? t[r[_]] : g) - n / 100}${a})`;
  }
  function c(d) {
    return r.indexOf(d) + 1 < r.length ? u(d, r[r.indexOf(d) + 1]) : l(d);
  }
  function f(d) {
    const g = r.indexOf(d);
    return g === 0
      ? l(r[1])
      : g === r.length - 1
        ? s(r[g])
        : u(d, r[r.indexOf(d) + 1]).replace('@media', '@media not all and');
  }
  return { keys: r, values: o, up: l, down: s, between: u, only: c, not: f, unit: a, ...i };
}
function u0(e, t) {
  if (!e.containerQueries) return t;
  const a = Object.keys(t)
    .filter((n) => n.startsWith('@container'))
    .sort((n, i) => {
      var r, l;
      const o = /min-width:\s*([0-9.]+)/;
      return (
        +(((r = n.match(o)) == null ? void 0 : r[1]) || 0) -
        +(((l = i.match(o)) == null ? void 0 : l[1]) || 0)
      );
    });
  return a.length
    ? a.reduce(
        (n, i) => {
          const o = t[i];
          return (delete n[i], (n[i] = o), n);
        },
        { ...t }
      )
    : t;
}
function NE(e, t) {
  return (
    t === '@' || (t.startsWith('@') && (e.some((a) => t.startsWith(`@${a}`)) || !!t.match(/^@\d/)))
  );
}
function zE(e, t) {
  const a = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!a) return null;
  const [, n, i] = a,
    o = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(i).up(o);
}
function BE(e) {
  const t = (o, r) => o.replace('@media', r ? `@container ${r}` : '@container');
  function a(o, r) {
    ((o.up = (...l) => t(e.breakpoints.up(...l), r)),
      (o.down = (...l) => t(e.breakpoints.down(...l), r)),
      (o.between = (...l) => t(e.breakpoints.between(...l), r)),
      (o.only = (...l) => t(e.breakpoints.only(...l), r)),
      (o.not = (...l) => {
        const s = t(e.breakpoints.not(...l), r);
        return s.includes('not all and')
          ? s
              .replace('not all and ', '')
              .replace('min-width:', 'width<')
              .replace('max-width:', 'width>')
              .replace('and', 'or')
          : s;
      }));
  }
  const n = {},
    i = (o) => (a(n, o), n);
  return (a(i), { ...e, containerQueries: i });
}
const LE = { borderRadius: 4 },
  $E = LE;
function tl(e, t) {
  return t ? Tt(e, t, { clone: !1 }) : e;
}
const Oc = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  c0 = { keys: ['xs', 'sm', 'md', 'lg', 'xl'], up: (e) => `@media (min-width:${Oc[e]}px)` },
  DE = {
    containerQueries: (e) => ({
      up: (t) => {
        let a = typeof t == 'number' ? t : Oc[t] || t;
        return (
          typeof a == 'number' && (a = `${a}px`),
          e ? `@container ${e} (min-width:${a})` : `@container (min-width:${a})`
        );
      },
    }),
  };
function Ha(e, t, a) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const o = n.breakpoints || c0;
    return t.reduce((r, l, s) => ((r[o.up(o.keys[s])] = a(t[s])), r), {});
  }
  if (typeof t == 'object') {
    const o = n.breakpoints || c0;
    return Object.keys(t).reduce((r, l) => {
      if (NE(o.keys, l)) {
        const s = zE(n.containerQueries ? n : DE, l);
        s && (r[s] = a(t[l], l));
      } else if (Object.keys(o.values || Oc).includes(l)) {
        const s = o.up(l);
        r[s] = a(t[l], l);
      } else {
        const s = l;
        r[s] = t[s];
      }
      return r;
    }, {});
  }
  return a(t);
}
function v1(e = {}) {
  var a;
  return (
    ((a = e.keys) == null
      ? void 0
      : a.reduce((n, i) => {
          const o = e.up(i);
          return ((n[o] = {}), n);
        }, {})) || {}
  );
}
function tg(e, t) {
  return e.reduce((a, n) => {
    const i = a[n];
    return ((!i || Object.keys(i).length === 0) && delete a[n], a);
  }, t);
}
function jE(e, ...t) {
  const a = v1(e),
    n = [a, ...t].reduce((i, o) => Tt(i, o), {});
  return tg(Object.keys(a), n);
}
function UE(e, t) {
  if (typeof e != 'object') return {};
  const a = {},
    n = Object.keys(t);
  return (
    Array.isArray(e)
      ? n.forEach((i, o) => {
          o < e.length && (a[i] = !0);
        })
      : n.forEach((i) => {
          e[i] != null && (a[i] = !0);
        }),
    a
  );
}
function jd({ values: e, breakpoints: t, base: a }) {
  const n = a || UE(e, t),
    i = Object.keys(n);
  if (i.length === 0) return e;
  let o;
  return i.reduce(
    (r, l, s) => (
      Array.isArray(e)
        ? ((r[l] = e[s] != null ? e[s] : e[o]), (o = s))
        : typeof e == 'object'
          ? ((r[l] = e[l] != null ? e[l] : e[o]), (o = l))
          : (r[l] = e),
      r
    ),
    {}
  );
}
function Z(e) {
  if (typeof e != 'string') throw new Error(Nn(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Qa(e, t, a = !0) {
  if (!t || typeof t != 'string') return null;
  if (e && e.vars && a) {
    const n = `vars.${t}`.split('.').reduce((i, o) => (i && i[o] ? i[o] : null), e);
    if (n != null) return n;
  }
  return t.split('.').reduce((n, i) => (n && n[i] != null ? n[i] : null), e);
}
function Eu(e, t, a, n = a) {
  let i;
  return (
    typeof e == 'function' ? (i = e(a)) : Array.isArray(e) ? (i = e[a] || n) : (i = Qa(e, a) || n),
    t && (i = t(i, n, e)),
    i
  );
}
function lt(e) {
  const { prop: t, cssProperty: a = e.prop, themeKey: n, transform: i } = e,
    o = (r) => {
      if (r[t] == null) return null;
      const l = r[t],
        s = r.theme,
        u = Qa(s, n) || {};
      return Ha(r, l, (f) => {
        let d = Eu(u, i, f);
        return (
          f === d &&
            typeof f == 'string' &&
            (d = Eu(u, i, `${t}${f === 'default' ? '' : Z(f)}`, f)),
          a === !1 ? d : { [a]: d }
        );
      });
    };
  return ((o.propTypes = {}), (o.filterProps = [t]), o);
}
function HE(e) {
  const t = {};
  return (a) => (t[a] === void 0 && (t[a] = e(a)), t[a]);
}
const VE = { m: 'margin', p: 'padding' },
  GE = { t: 'Top', r: 'Right', b: 'Bottom', l: 'Left', x: ['Left', 'Right'], y: ['Top', 'Bottom'] },
  d0 = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  IE = HE((e) => {
    if (e.length > 2)
      if (d0[e]) e = d0[e];
      else return [e];
    const [t, a] = e.split(''),
      n = VE[t],
      i = GE[a] || '';
    return Array.isArray(i) ? i.map((o) => n + o) : [n + i];
  }),
  Gp = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  Ip = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...Gp, ...Ip];
function Kl(e, t, a, n) {
  const i = Qa(e, t, !0) ?? a;
  return typeof i == 'number' || typeof i == 'string'
    ? (o) =>
        typeof o == 'string'
          ? o
          : typeof i == 'string'
            ? i.startsWith('var(') && o === 0
              ? 0
              : i.startsWith('var(') && o === 1
                ? i
                : `calc(${o} * ${i})`
            : i * o
    : Array.isArray(i)
      ? (o) => {
          if (typeof o == 'string') return o;
          const r = Math.abs(o),
            l = i[r];
          return o >= 0
            ? l
            : typeof l == 'number'
              ? -l
              : typeof l == 'string' && l.startsWith('var(')
                ? `calc(-1 * ${l})`
                : `-${l}`;
        }
      : typeof i == 'function'
        ? i
        : () => {};
}
function Nc(e) {
  return Kl(e, 'spacing', 8);
}
function Di(e, t) {
  return typeof t == 'string' || t == null ? t : e(t);
}
function PE(e, t) {
  return (a) => e.reduce((n, i) => ((n[i] = Di(t, a)), n), {});
}
function qE(e, t, a, n) {
  if (!t.includes(a)) return null;
  const i = IE(a),
    o = PE(i, n),
    r = e[a];
  return Ha(e, r, o);
}
function _1(e, t) {
  const a = Nc(e.theme);
  return Object.keys(e)
    .map((n) => qE(e, t, n, a))
    .reduce(tl, {});
}
function at(e) {
  return _1(e, Gp);
}
at.propTypes = {};
at.filterProps = Gp;
function nt(e) {
  return _1(e, Ip);
}
nt.propTypes = {};
nt.filterProps = Ip;
function y1(e = 8, t = Nc({ spacing: e })) {
  if (e.mui) return e;
  const a = (...n) =>
    (n.length === 0 ? [1] : n)
      .map((o) => {
        const r = t(o);
        return typeof r == 'number' ? `${r}px` : r;
      })
      .join(' ');
  return ((a.mui = !0), a);
}
function zc(...e) {
  const t = e.reduce(
      (n, i) => (
        i.filterProps.forEach((o) => {
          n[o] = i;
        }),
        n
      ),
      {}
    ),
    a = (n) => Object.keys(n).reduce((i, o) => (t[o] ? tl(i, t[o](n)) : i), {});
  return ((a.propTypes = {}), (a.filterProps = e.reduce((n, i) => n.concat(i.filterProps), [])), a);
}
function ka(e) {
  return typeof e != 'number' ? e : `${e}px solid`;
}
function za(e, t) {
  return lt({ prop: e, themeKey: 'borders', transform: t });
}
const KE = za('border', ka),
  YE = za('borderTop', ka),
  XE = za('borderRight', ka),
  QE = za('borderBottom', ka),
  ZE = za('borderLeft', ka),
  WE = za('borderColor'),
  JE = za('borderTopColor'),
  eF = za('borderRightColor'),
  tF = za('borderBottomColor'),
  aF = za('borderLeftColor'),
  nF = za('outline', ka),
  iF = za('outlineColor'),
  Bc = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = Kl(e.theme, 'shape.borderRadius', 4),
        a = (n) => ({ borderRadius: Di(t, n) });
      return Ha(e, e.borderRadius, a);
    }
    return null;
  };
Bc.propTypes = {};
Bc.filterProps = ['borderRadius'];
zc(KE, YE, XE, QE, ZE, WE, JE, eF, tF, aF, Bc, nF, iF);
const Lc = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Kl(e.theme, 'spacing', 8),
      a = (n) => ({ gap: Di(t, n) });
    return Ha(e, e.gap, a);
  }
  return null;
};
Lc.propTypes = {};
Lc.filterProps = ['gap'];
const $c = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Kl(e.theme, 'spacing', 8),
      a = (n) => ({ columnGap: Di(t, n) });
    return Ha(e, e.columnGap, a);
  }
  return null;
};
$c.propTypes = {};
$c.filterProps = ['columnGap'];
const Dc = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Kl(e.theme, 'spacing', 8),
      a = (n) => ({ rowGap: Di(t, n) });
    return Ha(e, e.rowGap, a);
  }
  return null;
};
Dc.propTypes = {};
Dc.filterProps = ['rowGap'];
const oF = lt({ prop: 'gridColumn' }),
  rF = lt({ prop: 'gridRow' }),
  lF = lt({ prop: 'gridAutoFlow' }),
  sF = lt({ prop: 'gridAutoColumns' }),
  uF = lt({ prop: 'gridAutoRows' }),
  cF = lt({ prop: 'gridTemplateColumns' }),
  dF = lt({ prop: 'gridTemplateRows' }),
  fF = lt({ prop: 'gridTemplateAreas' }),
  gF = lt({ prop: 'gridArea' });
zc(Lc, $c, Dc, oF, rF, lF, sF, uF, cF, dF, fF, gF);
function Oo(e, t) {
  return t === 'grey' ? t : e;
}
const pF = lt({ prop: 'color', themeKey: 'palette', transform: Oo }),
  mF = lt({ prop: 'bgcolor', cssProperty: 'backgroundColor', themeKey: 'palette', transform: Oo }),
  hF = lt({ prop: 'backgroundColor', themeKey: 'palette', transform: Oo });
zc(pF, mF, hF);
function la(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const vF = lt({ prop: 'width', transform: la }),
  Pp = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (a) => {
        var i, o, r, l, s;
        const n =
          ((r = (o = (i = e.theme) == null ? void 0 : i.breakpoints) == null ? void 0 : o.values) ==
          null
            ? void 0
            : r[a]) || Oc[a];
        return n
          ? ((s = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : s.unit) !==
            'px'
            ? { maxWidth: `${n}${e.theme.breakpoints.unit}` }
            : { maxWidth: n }
          : { maxWidth: la(a) };
      };
      return Ha(e, e.maxWidth, t);
    }
    return null;
  };
Pp.filterProps = ['maxWidth'];
const _F = lt({ prop: 'minWidth', transform: la }),
  yF = lt({ prop: 'height', transform: la }),
  bF = lt({ prop: 'maxHeight', transform: la }),
  SF = lt({ prop: 'minHeight', transform: la });
lt({ prop: 'size', cssProperty: 'width', transform: la });
lt({ prop: 'size', cssProperty: 'height', transform: la });
const xF = lt({ prop: 'boxSizing' });
zc(vF, Pp, _F, yF, bF, SF, xF);
const wF = {
    border: { themeKey: 'borders', transform: ka },
    borderTop: { themeKey: 'borders', transform: ka },
    borderRight: { themeKey: 'borders', transform: ka },
    borderBottom: { themeKey: 'borders', transform: ka },
    borderLeft: { themeKey: 'borders', transform: ka },
    borderColor: { themeKey: 'palette' },
    borderTopColor: { themeKey: 'palette' },
    borderRightColor: { themeKey: 'palette' },
    borderBottomColor: { themeKey: 'palette' },
    borderLeftColor: { themeKey: 'palette' },
    outline: { themeKey: 'borders', transform: ka },
    outlineColor: { themeKey: 'palette' },
    borderRadius: { themeKey: 'shape.borderRadius', style: Bc },
    color: { themeKey: 'palette', transform: Oo },
    bgcolor: { themeKey: 'palette', cssProperty: 'backgroundColor', transform: Oo },
    backgroundColor: { themeKey: 'palette', transform: Oo },
    p: { style: nt },
    pt: { style: nt },
    pr: { style: nt },
    pb: { style: nt },
    pl: { style: nt },
    px: { style: nt },
    py: { style: nt },
    padding: { style: nt },
    paddingTop: { style: nt },
    paddingRight: { style: nt },
    paddingBottom: { style: nt },
    paddingLeft: { style: nt },
    paddingX: { style: nt },
    paddingY: { style: nt },
    paddingInline: { style: nt },
    paddingInlineStart: { style: nt },
    paddingInlineEnd: { style: nt },
    paddingBlock: { style: nt },
    paddingBlockStart: { style: nt },
    paddingBlockEnd: { style: nt },
    m: { style: at },
    mt: { style: at },
    mr: { style: at },
    mb: { style: at },
    ml: { style: at },
    mx: { style: at },
    my: { style: at },
    margin: { style: at },
    marginTop: { style: at },
    marginRight: { style: at },
    marginBottom: { style: at },
    marginLeft: { style: at },
    marginX: { style: at },
    marginY: { style: at },
    marginInline: { style: at },
    marginInlineStart: { style: at },
    marginInlineEnd: { style: at },
    marginBlock: { style: at },
    marginBlockStart: { style: at },
    marginBlockEnd: { style: at },
    displayPrint: { cssProperty: !1, transform: (e) => ({ '@media print': { display: e } }) },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Lc },
    rowGap: { style: Dc },
    columnGap: { style: $c },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: 'zIndex' },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: 'shadows' },
    width: { transform: la },
    maxWidth: { style: Pp },
    minWidth: { transform: la },
    height: { transform: la },
    maxHeight: { transform: la },
    minHeight: { transform: la },
    boxSizing: {},
    font: { themeKey: 'font' },
    fontFamily: { themeKey: 'typography' },
    fontSize: { themeKey: 'typography' },
    fontStyle: { themeKey: 'typography' },
    fontWeight: { themeKey: 'typography' },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: 'typography' },
  },
  Yl = wF;
function CF(...e) {
  const t = e.reduce((n, i) => n.concat(Object.keys(i)), []),
    a = new Set(t);
  return e.every((n) => a.size === Object.keys(n).length);
}
function kF(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function EF() {
  function e(a, n, i, o) {
    const r = { [a]: n, theme: i },
      l = o[a];
    if (!l) return { [a]: n };
    const { cssProperty: s = a, themeKey: u, transform: c, style: f } = l;
    if (n == null) return null;
    if (u === 'typography' && n === 'inherit') return { [a]: n };
    const d = Qa(i, u) || {};
    return f
      ? f(r)
      : Ha(r, n, (_) => {
          let x = Eu(d, c, _);
          return (
            _ === x &&
              typeof _ == 'string' &&
              (x = Eu(d, c, `${a}${_ === 'default' ? '' : Z(_)}`, _)),
            s === !1 ? x : { [s]: x }
          );
        });
  }
  function t(a) {
    const { sx: n, theme: i = {}, nested: o } = a || {};
    if (!n) return null;
    const r = i.unstable_sxConfig ?? Yl;
    function l(s) {
      let u = s;
      if (typeof s == 'function') u = s(i);
      else if (typeof s != 'object') return s;
      if (!u) return null;
      const c = v1(i.breakpoints),
        f = Object.keys(c);
      let d = c;
      return (
        Object.keys(u).forEach((g) => {
          const _ = kF(u[g], i);
          if (_ != null)
            if (typeof _ == 'object')
              if (r[g]) d = tl(d, e(g, _, i, r));
              else {
                const x = Ha({ theme: i }, _, (S) => ({ [g]: S }));
                CF(x, _) ? (d[g] = t({ sx: _, theme: i, nested: !0 })) : (d = tl(d, x));
              }
            else d = tl(d, e(g, _, i, r));
        }),
        !o && i.modularCssLayers ? { '@layer sx': u0(i, tg(f, d)) } : u0(i, tg(f, d))
      );
    }
    return Array.isArray(n) ? n.map(l) : l(n);
  }
  return t;
}
const b1 = EF();
b1.filterProps = ['sx'];
const qo = b1;
function FF(e, t) {
  var n;
  const a = this;
  if (a.vars) {
    if (!((n = a.colorSchemes) != null && n[e]) || typeof a.getColorSchemeSelector != 'function')
      return {};
    let i = a.getColorSchemeSelector(e);
    return i === '&'
      ? t
      : ((i.includes('data-') || i.includes('.')) && (i = `*:where(${i.replace(/\s*&$/, '')}) &`),
        { [i]: t });
  }
  return a.palette.mode === e ? t : {};
}
function rr(e = {}, ...t) {
  const { breakpoints: a = {}, palette: n = {}, spacing: i, shape: o = {}, ...r } = e,
    l = OE(a),
    s = y1(i);
  let u = Tt(
    {
      breakpoints: l,
      direction: 'ltr',
      components: {},
      palette: { mode: 'light', ...n },
      spacing: s,
      shape: { ...$E, ...o },
    },
    r
  );
  return (
    (u = BE(u)),
    (u.applyStyles = FF),
    (u = t.reduce((c, f) => Tt(c, f), u)),
    (u.unstable_sxConfig = { ...Yl, ...(r == null ? void 0 : r.unstable_sxConfig) }),
    (u.unstable_sx = function (f) {
      return qo({ sx: f, theme: this });
    }),
    u
  );
}
function TF(e) {
  return Object.keys(e).length === 0;
}
function RF(e = null) {
  const t = y.useContext(Sc);
  return !t || TF(t) ? e : t;
}
const AF = rr();
function Xl(e = AF) {
  return RF(e);
}
function Ud(e) {
  const t = ii(e);
  return e !== t && t.styles
    ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t)
    : e;
}
function MF({ styles: e, themeId: t, defaultTheme: a = {} }) {
  const n = Xl(a),
    i = (t && n[t]) || n;
  let o = typeof e == 'function' ? e(i) : e;
  return (
    i.modularCssLayers &&
      (Array.isArray(o) ? (o = o.map((r) => Ud(typeof r == 'function' ? r(i) : r))) : (o = Ud(o))),
    w.jsx(FE, { styles: o })
  );
}
const OF = (e) => {
  var n;
  const t = { systemProps: {}, otherProps: {} },
    a = ((n = e == null ? void 0 : e.theme) == null ? void 0 : n.unstable_sxConfig) ?? Yl;
  return (
    Object.keys(e).forEach((i) => {
      a[i] ? (t.systemProps[i] = e[i]) : (t.otherProps[i] = e[i]);
    }),
    t
  );
};
function jc(e) {
  const { sx: t, ...a } = e,
    { systemProps: n, otherProps: i } = OF(a);
  let o;
  return (
    Array.isArray(t)
      ? (o = [n, ...t])
      : typeof t == 'function'
        ? (o = (...r) => {
            const l = t(...r);
            return Za(l) ? { ...n, ...l } : n;
          })
        : (o = { ...n, ...t }),
    { ...i, sx: o }
  );
}
const f0 = (e) => e,
  NF = () => {
    let e = f0;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = f0;
      },
    };
  },
  zF = NF(),
  S1 = zF;
function x1(e) {
  var t,
    a,
    n = '';
  if (typeof e == 'string' || typeof e == 'number') n += e;
  else if (typeof e == 'object')
    if (Array.isArray(e)) {
      var i = e.length;
      for (t = 0; t < i; t++) e[t] && (a = x1(e[t])) && (n && (n += ' '), (n += a));
    } else for (a in e) e[a] && (n && (n += ' '), (n += a));
  return n;
}
function ee() {
  for (var e, t, a = 0, n = '', i = arguments.length; a < i; a++)
    (e = arguments[a]) && (t = x1(e)) && (n && (n += ' '), (n += t));
  return n;
}
function BF(e = {}) {
  const {
      themeId: t,
      defaultTheme: a,
      defaultClassName: n = 'MuiBox-root',
      generateClassName: i,
    } = e,
    o = g1('div', { shouldForwardProp: (l) => l !== 'theme' && l !== 'sx' && l !== 'as' })(qo);
  return y.forwardRef(function (s, u) {
    const c = Xl(a),
      { className: f, component: d = 'div', ...g } = jc(s);
    return w.jsx(o, {
      as: d,
      ref: u,
      className: ee(f, i ? i(n) : n),
      theme: (t && c[t]) || c,
      ...g,
    });
  });
}
const LF = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected',
};
function me(e, t, a = 'Mui') {
  const n = LF[t];
  return n ? `${a}-${n}` : `${S1.generate(e)}-${t}`;
}
function ge(e, t, a = 'Mui') {
  const n = {};
  return (
    t.forEach((i) => {
      n[i] = me(e, i, a);
    }),
    n
  );
}
function w1(e) {
  const { variants: t, ...a } = e,
    n = { variants: t, style: ii(a), isProcessed: !0 };
  return (
    n.style === a ||
      (t &&
        t.forEach((i) => {
          typeof i.style != 'function' && (i.style = ii(i.style));
        })),
    n
  );
}
const $F = rr();
function Hd(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
function Ci(e, t) {
  return (
    t &&
      e &&
      typeof e == 'object' &&
      e.styles &&
      !e.styles.startsWith('@layer') &&
      (e.styles = `@layer ${t}{${String(e.styles)}}`),
    e
  );
}
function DF(e) {
  return e ? (t, a) => a[e] : null;
}
function jF(e, t, a) {
  e.theme = HF(e.theme) ? a : e.theme[t] || e.theme;
}
function qs(e, t, a) {
  const n = typeof t == 'function' ? t(e) : t;
  if (Array.isArray(n)) return n.flatMap((i) => qs(e, i, a));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let i;
    if (n.isProcessed) i = a ? Ci(n.style, a) : n.style;
    else {
      const { variants: o, ...r } = n;
      i = a ? Ci(ii(r), a) : r;
    }
    return C1(e, n.variants, [i], a);
  }
  return n != null && n.isProcessed ? (a ? Ci(ii(n.style), a) : n.style) : a ? Ci(ii(n), a) : n;
}
function C1(e, t, a = [], n = void 0) {
  var o;
  let i;
  e: for (let r = 0; r < t.length; r += 1) {
    const l = t[r];
    if (typeof l.props == 'function') {
      if ((i ?? (i = { ...e, ...e.ownerState, ownerState: e.ownerState }), !l.props(i))) continue;
    } else
      for (const s in l.props)
        if (e[s] !== l.props[s] && ((o = e.ownerState) == null ? void 0 : o[s]) !== l.props[s])
          continue e;
    typeof l.style == 'function'
      ? (i ?? (i = { ...e, ...e.ownerState, ownerState: e.ownerState }),
        a.push(n ? Ci(ii(l.style(i)), n) : l.style(i)))
      : a.push(n ? Ci(ii(l.style), n) : l.style);
  }
  return a;
}
function k1(e = {}) {
  const {
    themeId: t,
    defaultTheme: a = $F,
    rootShouldForwardProp: n = Hd,
    slotShouldForwardProp: i = Hd,
  } = e;
  function o(l) {
    jF(l, t, a);
  }
  return (l, s = {}) => {
    TE(l, (k) => k.filter((E) => E !== qo));
    const {
        name: u,
        slot: c,
        skipVariantsResolver: f,
        skipSx: d,
        overridesResolver: g = DF(GF(c)),
        ..._
      } = s,
      x = (u && u.startsWith('Mui')) || c ? 'components' : 'custom',
      S = f !== void 0 ? f : (c && c !== 'Root' && c !== 'root') || !1,
      m = d || !1;
    let p = Hd;
    c === 'Root' || c === 'root' ? (p = n) : c ? (p = i) : VF(l) && (p = void 0);
    const h = g1(l, { shouldForwardProp: p, label: UF(), ..._ }),
      v = (k) => {
        if (k.__emotion_real === k) return k;
        if (typeof k == 'function')
          return function (M) {
            return qs(M, k, M.theme.modularCssLayers ? x : void 0);
          };
        if (Za(k)) {
          const E = w1(k);
          return function (z) {
            return E.variants
              ? qs(z, E, z.theme.modularCssLayers ? x : void 0)
              : z.theme.modularCssLayers
                ? Ci(E.style, x)
                : E.style;
          };
        }
        return k;
      },
      C = (...k) => {
        const E = [],
          M = k.map(v),
          z = [];
        if (
          (E.push(o),
          u &&
            g &&
            z.push(function (O) {
              var j, B;
              const N =
                (B = (j = O.theme.components) == null ? void 0 : j[u]) == null
                  ? void 0
                  : B.styleOverrides;
              if (!N) return null;
              const R = {};
              for (const U in N) R[U] = qs(O, N[U], O.theme.modularCssLayers ? 'theme' : void 0);
              return g(O, R);
            }),
          u &&
            !S &&
            z.push(function (O) {
              var R, j;
              const A = O.theme,
                N =
                  (j = (R = A == null ? void 0 : A.components) == null ? void 0 : R[u]) == null
                    ? void 0
                    : j.variants;
              return N ? C1(O, N, [], O.theme.modularCssLayers ? 'theme' : void 0) : null;
            }),
          m || z.push(qo),
          Array.isArray(M[0]))
        ) {
          const b = M.shift(),
            O = new Array(E.length).fill(''),
            A = new Array(z.length).fill('');
          let N;
          ((N = [...O, ...b, ...A]), (N.raw = [...O, ...b.raw, ...A]), E.unshift(N));
        }
        const $ = [...E, ...M, ...z],
          V = h(...$);
        return (l.muiName && (V.muiName = l.muiName), V);
      };
    return (h.withConfig && (C.withConfig = h.withConfig), C);
  };
}
function UF(e, t) {
  let a;
  return a;
}
function HF(e) {
  for (const t in e) return !1;
  return !0;
}
function VF(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
function GF(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const IF = k1(),
  qp = IF;
function El(e, t, a = !1) {
  const n = { ...t };
  for (const i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      const o = i;
      if (o === 'components' || o === 'slots') n[o] = { ...e[o], ...n[o] };
      else if (o === 'componentsProps' || o === 'slotProps') {
        const r = e[o],
          l = t[o];
        if (!l) n[o] = r || {};
        else if (!r) n[o] = l;
        else {
          n[o] = { ...l };
          for (const s in r)
            if (Object.prototype.hasOwnProperty.call(r, s)) {
              const u = s;
              n[o][u] = El(r[u], l[u], a);
            }
        }
      } else
        o === 'className' && a && t.className
          ? (n.className = ee(e == null ? void 0 : e.className, t == null ? void 0 : t.className))
          : o === 'style' && a && t.style
            ? (n.style = { ...(e == null ? void 0 : e.style), ...(t == null ? void 0 : t.style) })
            : n[o] === void 0 && (n[o] = e[o]);
    }
  return n;
}
function PF(e) {
  const { theme: t, name: a, props: n } = e;
  return !t || !t.components || !t.components[a] || !t.components[a].defaultProps
    ? n
    : El(t.components[a].defaultProps, n);
}
function Kp({ props: e, name: t, defaultTheme: a, themeId: n }) {
  let i = Xl(a);
  return (n && (i = i[n] || i), PF({ theme: i, name: t, props: e }));
}
const qF = typeof window < 'u' ? y.useLayoutEffect : y.useEffect,
  ui = qF;
function KF(e, t = Number.MIN_SAFE_INTEGER, a = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, a));
}
function Yp(e, t = 0, a = 1) {
  return KF(e, t, a);
}
function YF(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
  let a = e.match(t);
  return (
    a && a[0].length === 1 && (a = a.map((n) => n + n)),
    a
      ? `rgb${a.length === 4 ? 'a' : ''}(${a.map((n, i) => (i < 3 ? parseInt(n, 16) : Math.round((parseInt(n, 16) / 255) * 1e3) / 1e3)).join(', ')})`
      : ''
  );
}
function ci(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return ci(YF(e));
  const t = e.indexOf('('),
    a = e.substring(0, t);
  if (!['rgb', 'rgba', 'hsl', 'hsla', 'color'].includes(a)) throw new Error(Nn(9, e));
  let n = e.substring(t + 1, e.length - 1),
    i;
  if (a === 'color') {
    if (
      ((n = n.split(' ')),
      (i = n.shift()),
      n.length === 4 && n[3].charAt(0) === '/' && (n[3] = n[3].slice(1)),
      !['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].includes(i))
    )
      throw new Error(Nn(10, i));
  } else n = n.split(',');
  return ((n = n.map((o) => parseFloat(o))), { type: a, values: n, colorSpace: i });
}
const XF = (e) => {
    const t = ci(e);
    return t.values
      .slice(0, 3)
      .map((a, n) => (t.type.includes('hsl') && n !== 0 ? `${a}%` : a))
      .join(' ');
  },
  $r = (e, t) => {
    try {
      return XF(e);
    } catch {
      return e;
    }
  };
function Uc(e) {
  const { type: t, colorSpace: a } = e;
  let { values: n } = e;
  return (
    t.includes('rgb')
      ? (n = n.map((i, o) => (o < 3 ? parseInt(i, 10) : i)))
      : t.includes('hsl') && ((n[1] = `${n[1]}%`), (n[2] = `${n[2]}%`)),
    t.includes('color') ? (n = `${a} ${n.join(' ')}`) : (n = `${n.join(', ')}`),
    `${t}(${n})`
  );
}
function E1(e) {
  e = ci(e);
  const { values: t } = e,
    a = t[0],
    n = t[1] / 100,
    i = t[2] / 100,
    o = n * Math.min(i, 1 - i),
    r = (u, c = (u + a / 30) % 12) => i - o * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  let l = 'rgb';
  const s = [Math.round(r(0) * 255), Math.round(r(8) * 255), Math.round(r(4) * 255)];
  return (e.type === 'hsla' && ((l += 'a'), s.push(t[3])), Uc({ type: l, values: s }));
}
function ag(e) {
  e = ci(e);
  let t = e.type === 'hsl' || e.type === 'hsla' ? ci(E1(e)).values : e.values;
  return (
    (t = t.map(
      (a) => (
        e.type !== 'color' && (a /= 255),
        a <= 0.03928 ? a / 12.92 : ((a + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function QF(e, t) {
  const a = ag(e),
    n = ag(t);
  return (Math.max(a, n) + 0.05) / (Math.min(a, n) + 0.05);
}
function Fl(e, t) {
  return (
    (e = ci(e)),
    (t = Yp(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Uc(e)
  );
}
function mi(e, t, a) {
  try {
    return Fl(e, t);
  } catch {
    return e;
  }
}
function Hc(e, t) {
  if (((e = ci(e)), (t = Yp(t)), e.type.includes('hsl'))) e.values[2] *= 1 - t;
  else if (e.type.includes('rgb') || e.type.includes('color'))
    for (let a = 0; a < 3; a += 1) e.values[a] *= 1 - t;
  return Uc(e);
}
function Te(e, t, a) {
  try {
    return Hc(e, t);
  } catch {
    return e;
  }
}
function Vc(e, t) {
  if (((e = ci(e)), (t = Yp(t)), e.type.includes('hsl'))) e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes('rgb'))
    for (let a = 0; a < 3; a += 1) e.values[a] += (255 - e.values[a]) * t;
  else if (e.type.includes('color'))
    for (let a = 0; a < 3; a += 1) e.values[a] += (1 - e.values[a]) * t;
  return Uc(e);
}
function Re(e, t, a) {
  try {
    return Vc(e, t);
  } catch {
    return e;
  }
}
function ZF(e, t = 0.15) {
  return ag(e) > 0.5 ? Hc(e, t) : Vc(e, t);
}
function ys(e, t, a) {
  try {
    return ZF(e, t);
  } catch {
    return e;
  }
}
const WF = y.createContext(),
  F1 = () => y.useContext(WF) ?? !1,
  JF = y.createContext(void 0);
function eT(e) {
  const { theme: t, name: a, props: n } = e;
  if (!t || !t.components || !t.components[a]) return n;
  const i = t.components[a];
  return i.defaultProps
    ? El(i.defaultProps, n, t.components.mergeClassNameAndStyle)
    : !i.styleOverrides && !i.variants
      ? El(i, n, t.components.mergeClassNameAndStyle)
      : n;
}
function tT({ props: e, name: t }) {
  const a = y.useContext(JF);
  return eT({ props: e, name: t, theme: { components: a } });
}
let g0 = 0;
function aT(e) {
  const [t, a] = y.useState(e),
    n = e || t;
  return (
    y.useEffect(() => {
      t == null && ((g0 += 1), a(`mui-${g0}`));
    }, [t]),
    n
  );
}
const nT = { ...Wd },
  p0 = nT.useId;
function Gc(e) {
  if (p0 !== void 0) {
    const t = p0();
    return e ?? t;
  }
  return aT(e);
}
const m0 = { theme: void 0 };
function iT(e) {
  let t, a;
  return function (i) {
    let o = t;
    return (
      (o === void 0 || i.theme !== a) &&
        ((m0.theme = i.theme), (o = w1(e(m0))), (t = o), (a = i.theme)),
      o
    );
  };
}
function oT(e = '') {
  function t(...n) {
    if (!n.length) return '';
    const i = n[0];
    return typeof i == 'string' &&
      !i.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
      )
      ? `, var(--${e ? `${e}-` : ''}${i}${t(...n.slice(1))})`
      : `, ${i}`;
  }
  return (n, ...i) => `var(--${e ? `${e}-` : ''}${n}${t(...i)})`;
}
const h0 = (e, t, a, n = []) => {
    let i = e;
    t.forEach((o, r) => {
      r === t.length - 1
        ? Array.isArray(i)
          ? (i[Number(o)] = a)
          : i && typeof i == 'object' && (i[o] = a)
        : i && typeof i == 'object' && (i[o] || (i[o] = n.includes(o) ? [] : {}), (i = i[o]));
    });
  },
  rT = (e, t, a) => {
    function n(i, o = [], r = []) {
      Object.entries(i).forEach(([l, s]) => {
        (!a || (a && !a([...o, l]))) &&
          s != null &&
          (typeof s == 'object' && Object.keys(s).length > 0
            ? n(s, [...o, l], Array.isArray(s) ? [...r, l] : r)
            : t([...o, l], s, r));
      });
    }
    n(e);
  },
  lT = (e, t) =>
    typeof t == 'number'
      ? ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((n) => e.includes(n)) ||
        e[e.length - 1].toLowerCase().includes('opacity')
        ? t
        : `${t}px`
      : t;
function Vd(e, t) {
  const { prefix: a, shouldSkipGeneratingVar: n } = t || {},
    i = {},
    o = {},
    r = {};
  return (
    rT(
      e,
      (l, s, u) => {
        if ((typeof s == 'string' || typeof s == 'number') && (!n || !n(l, s))) {
          const c = `--${a ? `${a}-` : ''}${l.join('-')}`,
            f = lT(l, s);
          (Object.assign(i, { [c]: f }), h0(o, l, `var(${c})`, u), h0(r, l, `var(${c}, ${f})`, u));
        }
      },
      (l) => l[0] === 'vars'
    ),
    { css: i, vars: o, varsWithDefaults: r }
  );
}
function sT(e, t = {}) {
  const {
      getSelector: a = m,
      disableCssColorScheme: n,
      colorSchemeSelector: i,
      enableContrastVars: o,
    } = t,
    { colorSchemes: r = {}, components: l, defaultColorScheme: s = 'light', ...u } = e,
    { vars: c, css: f, varsWithDefaults: d } = Vd(u, t);
  let g = d;
  const _ = {},
    { [s]: x, ...S } = r;
  if (
    (Object.entries(S || {}).forEach(([v, C]) => {
      const { vars: k, css: E, varsWithDefaults: M } = Vd(C, t);
      ((g = Tt(g, M)), (_[v] = { css: E, vars: k }));
    }),
    x)
  ) {
    const { css: v, vars: C, varsWithDefaults: k } = Vd(x, t);
    ((g = Tt(g, k)), (_[s] = { css: v, vars: C }));
  }
  function m(v, C) {
    var E, M;
    let k = i;
    if (
      (i === 'class' && (k = '.%s'),
      i === 'data' && (k = '[data-%s]'),
      i != null && i.startsWith('data-') && !i.includes('%s') && (k = `[${i}="%s"]`),
      v)
    ) {
      if (k === 'media')
        return e.defaultColorScheme === v
          ? ':root'
          : {
              [`@media (prefers-color-scheme: ${((M = (E = r[v]) == null ? void 0 : E.palette) == null ? void 0 : M.mode) || v})`]:
                { ':root': C },
            };
      if (k)
        return e.defaultColorScheme === v
          ? `:root, ${k.replace('%s', String(v))}`
          : k.replace('%s', String(v));
    }
    return ':root';
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let v = { ...c };
      return (
        Object.entries(_).forEach(([, { vars: C }]) => {
          v = Tt(v, C);
        }),
        v
      );
    },
    generateStyleSheets: () => {
      var z, $;
      const v = [],
        C = e.defaultColorScheme || 'light';
      function k(V, b) {
        Object.keys(b).length && v.push(typeof V == 'string' ? { [V]: { ...b } } : V);
      }
      k(a(void 0, { ...f }), f);
      const { [C]: E, ...M } = _;
      if (E) {
        const { css: V } = E,
          b = ($ = (z = r[C]) == null ? void 0 : z.palette) == null ? void 0 : $.mode,
          O = !n && b ? { colorScheme: b, ...V } : { ...V };
        k(a(C, { ...O }), O);
      }
      return (
        Object.entries(M).forEach(([V, { css: b }]) => {
          var N, R;
          const O = (R = (N = r[V]) == null ? void 0 : N.palette) == null ? void 0 : R.mode,
            A = !n && O ? { colorScheme: O, ...b } : { ...b };
          k(a(V, { ...A }), A);
        }),
        o &&
          v.push({
            ':root': {
              '--__l-threshold': '0.7',
              '--__l': 'clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)',
              '--__a': 'clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)',
            },
          }),
        v
      );
    },
  };
}
function uT(e) {
  return function (a) {
    return e === 'media'
      ? `@media (prefers-color-scheme: ${a})`
      : e
        ? e.startsWith('data-') && !e.includes('%s')
          ? `[${e}="${a}"] &`
          : e === 'class'
            ? `.${a} &`
            : e === 'data'
              ? `[data-${a}] &`
              : `${e.replace('%s', a)} &`
        : '&';
  };
}
function he(e, t, a = void 0) {
  const n = {};
  for (const i in e) {
    const o = e[i];
    let r = '',
      l = !0;
    for (let s = 0; s < o.length; s += 1) {
      const u = o[s];
      u && ((r += (l === !0 ? '' : ' ') + t(u)), (l = !1), a && a[u] && (r += ' ' + a[u]));
    }
    n[i] = r;
  }
  return n;
}
const cT = rr(),
  dT = qp('div', {
    name: 'MuiContainer',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [
        t.root,
        t[`maxWidth${Z(String(a.maxWidth))}`],
        a.fixed && t.fixed,
        a.disableGutters && t.disableGutters,
      ];
    },
  }),
  fT = (e) => Kp({ props: e, name: 'MuiContainer', defaultTheme: cT }),
  gT = (e, t) => {
    const a = (s) => me(t, s),
      { classes: n, fixed: i, disableGutters: o, maxWidth: r } = e,
      l = { root: ['root', r && `maxWidth${Z(String(r))}`, i && 'fixed', o && 'disableGutters'] };
    return he(l, a, n);
  };
function pT(e = {}) {
  const {
      createStyledComponent: t = dT,
      useThemeProps: a = fT,
      componentName: n = 'MuiContainer',
    } = e,
    i = t(
      ({ theme: r, ownerState: l }) => ({
        width: '100%',
        marginLeft: 'auto',
        boxSizing: 'border-box',
        marginRight: 'auto',
        ...(!l.disableGutters && {
          paddingLeft: r.spacing(2),
          paddingRight: r.spacing(2),
          [r.breakpoints.up('sm')]: { paddingLeft: r.spacing(3), paddingRight: r.spacing(3) },
        }),
      }),
      ({ theme: r, ownerState: l }) =>
        l.fixed &&
        Object.keys(r.breakpoints.values).reduce((s, u) => {
          const c = u,
            f = r.breakpoints.values[c];
          return (
            f !== 0 && (s[r.breakpoints.up(c)] = { maxWidth: `${f}${r.breakpoints.unit}` }),
            s
          );
        }, {}),
      ({ theme: r, ownerState: l }) => ({
        ...(l.maxWidth === 'xs' && {
          [r.breakpoints.up('xs')]: { maxWidth: Math.max(r.breakpoints.values.xs, 444) },
        }),
        ...(l.maxWidth &&
          l.maxWidth !== 'xs' && {
            [r.breakpoints.up(l.maxWidth)]: {
              maxWidth: `${r.breakpoints.values[l.maxWidth]}${r.breakpoints.unit}`,
            },
          }),
      })
    );
  return y.forwardRef(function (l, s) {
    const u = a(l),
      {
        className: c,
        component: f = 'div',
        disableGutters: d = !1,
        fixed: g = !1,
        maxWidth: _ = 'lg',
        classes: x,
        ...S
      } = u,
      m = { ...u, component: f, disableGutters: d, fixed: g, maxWidth: _ },
      p = gT(m, n);
    return w.jsx(i, { as: f, ownerState: m, className: ee(p.root, c), ref: s, ...S });
  });
}
function Ks(e, t) {
  var a, n, i;
  return (
    y.isValidElement(e) &&
    t.indexOf(
      e.type.muiName ??
        ((i = (n = (a = e.type) == null ? void 0 : a._payload) == null ? void 0 : n.value) == null
          ? void 0
          : i.muiName)
    ) !== -1
  );
}
const mT = (e, t) => e.filter((a) => t.includes(a)),
  lr = (e, t, a) => {
    const n = e.keys[0];
    Array.isArray(t)
      ? t.forEach((i, o) => {
          a((r, l) => {
            o <= e.keys.length - 1 && (o === 0 ? Object.assign(r, l) : (r[e.up(e.keys[o])] = l));
          }, i);
        })
      : t && typeof t == 'object'
        ? (Object.keys(t).length > e.keys.length ? e.keys : mT(e.keys, Object.keys(t))).forEach(
            (o) => {
              if (e.keys.includes(o)) {
                const r = t[o];
                r !== void 0 &&
                  a((l, s) => {
                    n === o ? Object.assign(l, s) : (l[e.up(o)] = s);
                  }, r);
              }
            }
          )
        : (typeof t == 'number' || typeof t == 'string') &&
          a((i, o) => {
            Object.assign(i, o);
          }, t);
  };
function Fu(e) {
  return `--Grid-${e}Spacing`;
}
function Ic(e) {
  return `--Grid-parent-${e}Spacing`;
}
const v0 = '--Grid-columns',
  No = '--Grid-parent-columns',
  hT = ({ theme: e, ownerState: t }) => {
    const a = {};
    return (
      lr(e.breakpoints, t.size, (n, i) => {
        let o = {};
        (i === 'grow' && (o = { flexBasis: 0, flexGrow: 1, maxWidth: '100%' }),
          i === 'auto' &&
            (o = {
              flexBasis: 'auto',
              flexGrow: 0,
              flexShrink: 0,
              maxWidth: 'none',
              width: 'auto',
            }),
          typeof i == 'number' &&
            (o = {
              flexGrow: 0,
              flexBasis: 'auto',
              width: `calc(100% * ${i} / var(${No}) - (var(${No}) - ${i}) * (var(${Ic('column')}) / var(${No})))`,
            }),
          n(a, o));
      }),
      a
    );
  },
  vT = ({ theme: e, ownerState: t }) => {
    const a = {};
    return (
      lr(e.breakpoints, t.offset, (n, i) => {
        let o = {};
        (i === 'auto' && (o = { marginLeft: 'auto' }),
          typeof i == 'number' &&
            (o = {
              marginLeft:
                i === 0
                  ? '0px'
                  : `calc(100% * ${i} / var(${No}) + var(${Ic('column')}) * ${i} / var(${No}))`,
            }),
          n(a, o));
      }),
      a
    );
  },
  _T = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const a = { [v0]: 12 };
    return (
      lr(e.breakpoints, t.columns, (n, i) => {
        const o = i ?? 12;
        n(a, { [v0]: o, '> *': { [No]: o } });
      }),
      a
    );
  },
  yT = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const a = {};
    return (
      lr(e.breakpoints, t.rowSpacing, (n, i) => {
        var r;
        const o = typeof i == 'string' ? i : (r = e.spacing) == null ? void 0 : r.call(e, i);
        n(a, { [Fu('row')]: o, '> *': { [Ic('row')]: o } });
      }),
      a
    );
  },
  bT = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const a = {};
    return (
      lr(e.breakpoints, t.columnSpacing, (n, i) => {
        var r;
        const o = typeof i == 'string' ? i : (r = e.spacing) == null ? void 0 : r.call(e, i);
        n(a, { [Fu('column')]: o, '> *': { [Ic('column')]: o } });
      }),
      a
    );
  },
  ST = ({ theme: e, ownerState: t }) => {
    if (!t.container) return {};
    const a = {};
    return (
      lr(e.breakpoints, t.direction, (n, i) => {
        n(a, { flexDirection: i });
      }),
      a
    );
  },
  xT = ({ ownerState: e }) => ({
    minWidth: 0,
    boxSizing: 'border-box',
    ...(e.container && {
      display: 'flex',
      flexWrap: 'wrap',
      ...(e.wrap && e.wrap !== 'wrap' && { flexWrap: e.wrap }),
      gap: `var(${Fu('row')}) var(${Fu('column')})`,
    }),
  }),
  wT = (e) => {
    const t = [];
    return (
      Object.entries(e).forEach(([a, n]) => {
        n !== !1 && n !== void 0 && t.push(`grid-${a}-${String(n)}`);
      }),
      t
    );
  },
  CT = (e, t = 'xs') => {
    function a(n) {
      return n === void 0
        ? !1
        : (typeof n == 'string' && !Number.isNaN(Number(n))) || (typeof n == 'number' && n > 0);
    }
    if (a(e)) return [`spacing-${t}-${String(e)}`];
    if (typeof e == 'object' && !Array.isArray(e)) {
      const n = [];
      return (
        Object.entries(e).forEach(([i, o]) => {
          a(o) && n.push(`spacing-${i}-${String(o)}`);
        }),
        n
      );
    }
    return [];
  },
  kT = (e) =>
    e === void 0
      ? []
      : typeof e == 'object'
        ? Object.entries(e).map(([t, a]) => `direction-${t}-${a}`)
        : [`direction-xs-${String(e)}`];
function ET(e, t) {
  (e.item !== void 0 && delete e.item,
    e.zeroMinWidth !== void 0 && delete e.zeroMinWidth,
    t.keys.forEach((a) => {
      e[a] !== void 0 && delete e[a];
    }));
}
const FT = rr(),
  TT = qp('div', { name: 'MuiGrid', slot: 'Root' });
function RT(e) {
  return Kp({ props: e, name: 'MuiGrid', defaultTheme: FT });
}
function AT(e = {}) {
  const {
      createStyledComponent: t = TT,
      useThemeProps: a = RT,
      useTheme: n = Xl,
      componentName: i = 'MuiGrid',
    } = e,
    o = (u, c) => {
      const { container: f, direction: d, spacing: g, wrap: _, size: x } = u,
        S = {
          root: [
            'root',
            f && 'container',
            _ !== 'wrap' && `wrap-xs-${String(_)}`,
            ...kT(d),
            ...wT(x),
            ...(f ? CT(g, c.breakpoints.keys[0]) : []),
          ],
        };
      return he(S, (m) => me(i, m), {});
    };
  function r(u, c, f = () => !0) {
    const d = {};
    return (
      u === null ||
        (Array.isArray(u)
          ? u.forEach((g, _) => {
              g !== null && f(g) && c.keys[_] && (d[c.keys[_]] = g);
            })
          : typeof u == 'object'
            ? Object.keys(u).forEach((g) => {
                const _ = u[g];
                _ != null && f(_) && (d[g] = _);
              })
            : (d[c.keys[0]] = u)),
      d
    );
  }
  const l = t(_T, bT, yT, hT, ST, xT, vT),
    s = y.forwardRef(function (c, f) {
      const d = n(),
        g = a(c),
        _ = jc(g);
      ET(_, d.breakpoints);
      const {
          className: x,
          children: S,
          columns: m = 12,
          container: p = !1,
          component: h = 'div',
          direction: v = 'row',
          wrap: C = 'wrap',
          size: k = {},
          offset: E = {},
          spacing: M = 0,
          rowSpacing: z = M,
          columnSpacing: $ = M,
          unstable_level: V = 0,
          ...b
        } = _,
        O = r(k, d.breakpoints, (X) => X !== !1),
        A = r(E, d.breakpoints),
        N = c.columns ?? (V ? void 0 : m),
        R = c.spacing ?? (V ? void 0 : M),
        j = c.rowSpacing ?? c.spacing ?? (V ? void 0 : z),
        B = c.columnSpacing ?? c.spacing ?? (V ? void 0 : $),
        U = {
          ..._,
          level: V,
          columns: N,
          container: p,
          direction: v,
          wrap: C,
          spacing: R,
          rowSpacing: j,
          columnSpacing: B,
          size: O,
          offset: A,
        },
        q = o(U, d);
      return w.jsx(l, {
        ref: f,
        as: h,
        ownerState: U,
        className: ee(q.root, x),
        ...b,
        children: y.Children.map(S, (X) => {
          var ye;
          return y.isValidElement(X) && Ks(X, ['Grid']) && p && X.props.container
            ? y.cloneElement(X, {
                unstable_level: ((ye = X.props) == null ? void 0 : ye.unstable_level) ?? V + 1,
              })
            : X;
        }),
      });
    });
  return ((s.muiName = 'Grid'), s);
}
const MT = rr(),
  OT = qp('div', { name: 'MuiStack', slot: 'Root' });
function NT(e) {
  return Kp({ props: e, name: 'MuiStack', defaultTheme: MT });
}
function zT(e, t) {
  const a = y.Children.toArray(e).filter(Boolean);
  return a.reduce(
    (n, i, o) => (
      n.push(i),
      o < a.length - 1 && n.push(y.cloneElement(t, { key: `separator-${o}` })),
      n
    ),
    []
  );
}
const BT = (e) =>
    ({ row: 'Left', 'row-reverse': 'Right', column: 'Top', 'column-reverse': 'Bottom' })[e],
  LT = ({ ownerState: e, theme: t }) => {
    let a = {
      display: 'flex',
      flexDirection: 'column',
      ...Ha({ theme: t }, jd({ values: e.direction, breakpoints: t.breakpoints.values }), (n) => ({
        flexDirection: n,
      })),
    };
    if (e.spacing) {
      const n = Nc(t),
        i = Object.keys(t.breakpoints.values).reduce(
          (s, u) => (
            ((typeof e.spacing == 'object' && e.spacing[u] != null) ||
              (typeof e.direction == 'object' && e.direction[u] != null)) &&
              (s[u] = !0),
            s
          ),
          {}
        ),
        o = jd({ values: e.direction, base: i }),
        r = jd({ values: e.spacing, base: i });
      (typeof o == 'object' &&
        Object.keys(o).forEach((s, u, c) => {
          if (!o[s]) {
            const d = u > 0 ? o[c[u - 1]] : 'column';
            o[s] = d;
          }
        }),
        (a = Tt(
          a,
          Ha({ theme: t }, r, (s, u) =>
            e.useFlexGap
              ? { gap: Di(n, s) }
              : {
                  '& > :not(style):not(style)': { margin: 0 },
                  '& > :not(style) ~ :not(style)': {
                    [`margin${BT(u ? o[u] : e.direction)}`]: Di(n, s),
                  },
                }
          )
        )));
    }
    return ((a = jE(t.breakpoints, a)), a);
  };
function $T(e = {}) {
  const { createStyledComponent: t = OT, useThemeProps: a = NT, componentName: n = 'MuiStack' } = e,
    i = () => he({ root: ['root'] }, (s) => me(n, s), {}),
    o = t(LT);
  return y.forwardRef(function (s, u) {
    const c = a(s),
      f = jc(c),
      {
        component: d = 'div',
        direction: g = 'column',
        spacing: _ = 0,
        divider: x,
        children: S,
        className: m,
        useFlexGap: p = !1,
        ...h
      } = f,
      v = { direction: g, spacing: _, useFlexGap: p },
      C = i();
    return w.jsx(o, {
      as: d,
      ownerState: v,
      ref: u,
      className: ee(C.root, m),
      ...h,
      children: x ? zT(S, x) : S,
    });
  });
}
function T1() {
  return {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: xl.white, default: xl.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
}
const R1 = T1();
function A1() {
  return {
    text: {
      primary: xl.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: xl.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
}
const ng = A1();
function _0(e, t, a, n) {
  const i = n.light || n,
    o = n.dark || n * 1.5;
  e[t] ||
    (e.hasOwnProperty(a)
      ? (e[t] = e[a])
      : t === 'light'
        ? (e.light = Vc(e.main, i))
        : t === 'dark' && (e.dark = Hc(e.main, o)));
}
function y0(e, t, a, n, i) {
  const o = i.light || i,
    r = i.dark || i * 1.5;
  t[a] ||
    (t.hasOwnProperty(n)
      ? (t[a] = t[n])
      : a === 'light'
        ? (t.light = `color-mix(in ${e}, ${t.main}, #fff ${(o * 100).toFixed(0)}%)`)
        : a === 'dark' &&
          (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(r * 100).toFixed(0)}%)`));
}
function DT(e = 'light') {
  return e === 'dark'
    ? { main: Zi[200], light: Zi[50], dark: Zi[400] }
    : { main: Zi[700], light: Zi[400], dark: Zi[800] };
}
function jT(e = 'light') {
  return e === 'dark'
    ? { main: Qi[200], light: Qi[50], dark: Qi[400] }
    : { main: Qi[500], light: Qi[300], dark: Qi[700] };
}
function UT(e = 'light') {
  return e === 'dark'
    ? { main: Xi[500], light: Xi[300], dark: Xi[700] }
    : { main: Xi[700], light: Xi[400], dark: Xi[800] };
}
function HT(e = 'light') {
  return e === 'dark'
    ? { main: Wi[400], light: Wi[300], dark: Wi[700] }
    : { main: Wi[700], light: Wi[500], dark: Wi[900] };
}
function VT(e = 'light') {
  return e === 'dark'
    ? { main: Ji[400], light: Ji[300], dark: Ji[700] }
    : { main: Ji[800], light: Ji[500], dark: Ji[900] };
}
function GT(e = 'light') {
  return e === 'dark'
    ? { main: Cr[400], light: Cr[300], dark: Cr[700] }
    : { main: '#ed6c02', light: Cr[500], dark: Cr[900] };
}
function IT(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Xp(e) {
  const {
      mode: t = 'light',
      contrastThreshold: a = 3,
      tonalOffset: n = 0.2,
      colorSpace: i,
      ...o
    } = e,
    r = e.primary || DT(t),
    l = e.secondary || jT(t),
    s = e.error || UT(t),
    u = e.info || HT(t),
    c = e.success || VT(t),
    f = e.warning || GT(t);
  function d(S) {
    return i ? IT(S) : QF(S, ng.text.primary) >= a ? ng.text.primary : R1.text.primary;
  }
  const g = ({
    color: S,
    name: m,
    mainShade: p = 500,
    lightShade: h = 300,
    darkShade: v = 700,
  }) => {
    if (((S = { ...S }), !S.main && S[p] && (S.main = S[p]), !S.hasOwnProperty('main')))
      throw new Error(Nn(11, m ? ` (${m})` : '', p));
    if (typeof S.main != 'string')
      throw new Error(Nn(12, m ? ` (${m})` : '', JSON.stringify(S.main)));
    return (
      i
        ? (y0(i, S, 'light', h, n), y0(i, S, 'dark', v, n))
        : (_0(S, 'light', h, n), _0(S, 'dark', v, n)),
      S.contrastText || (S.contrastText = d(S.main)),
      S
    );
  };
  let _;
  return (
    t === 'light' ? (_ = T1()) : t === 'dark' && (_ = A1()),
    Tt(
      {
        common: { ...xl },
        mode: t,
        primary: g({ color: r, name: 'primary' }),
        secondary: g({
          color: l,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: g({ color: s, name: 'error' }),
        warning: g({ color: f, name: 'warning' }),
        info: g({ color: u, name: 'info' }),
        success: g({ color: c, name: 'success' }),
        grey: _k,
        contrastThreshold: a,
        getContrastText: d,
        augmentColor: g,
        tonalOffset: n,
        ..._,
      },
      o
    )
  );
}
function PT(e) {
  const t = {};
  return (
    Object.entries(e).forEach((n) => {
      const [i, o] = n;
      typeof o == 'object' &&
        (t[i] =
          `${o.fontStyle ? `${o.fontStyle} ` : ''}${o.fontVariant ? `${o.fontVariant} ` : ''}${o.fontWeight ? `${o.fontWeight} ` : ''}${o.fontStretch ? `${o.fontStretch} ` : ''}${o.fontSize || ''}${o.lineHeight ? `/${o.lineHeight} ` : ''}${o.fontFamily || ''}`);
    }),
    t
  );
}
function qT(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
      [e.up('sm')]: { minHeight: 64 },
    },
    ...t,
  };
}
function KT(e) {
  return Math.round(e * 1e5) / 1e5;
}
const b0 = { textTransform: 'uppercase' },
  S0 = '"Roboto", "Helvetica", "Arial", sans-serif';
function YT(e, t) {
  const {
      fontFamily: a = S0,
      fontSize: n = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: o = 400,
      fontWeightMedium: r = 500,
      fontWeightBold: l = 700,
      htmlFontSize: s = 16,
      allVariants: u,
      pxToRem: c,
      ...f
    } = typeof t == 'function' ? t(e) : t,
    d = n / 14,
    g = c || ((S) => `${(S / s) * d}rem`),
    _ = (S, m, p, h, v) => ({
      fontFamily: a,
      fontWeight: S,
      fontSize: g(m),
      lineHeight: p,
      ...(a === S0 ? { letterSpacing: `${KT(h / m)}em` } : {}),
      ...v,
      ...u,
    }),
    x = {
      h1: _(i, 96, 1.167, -1.5),
      h2: _(i, 60, 1.2, -0.5),
      h3: _(o, 48, 1.167, 0),
      h4: _(o, 34, 1.235, 0.25),
      h5: _(o, 24, 1.334, 0),
      h6: _(r, 20, 1.6, 0.15),
      subtitle1: _(o, 16, 1.75, 0.15),
      subtitle2: _(r, 14, 1.57, 0.1),
      body1: _(o, 16, 1.5, 0.15),
      body2: _(o, 14, 1.43, 0.15),
      button: _(r, 14, 1.75, 0.4, b0),
      caption: _(o, 12, 1.66, 0.4),
      overline: _(o, 12, 2.66, 1, b0),
      inherit: {
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        letterSpacing: 'inherit',
      },
    };
  return Tt(
    {
      htmlFontSize: s,
      pxToRem: g,
      fontFamily: a,
      fontSize: n,
      fontWeightLight: i,
      fontWeightRegular: o,
      fontWeightMedium: r,
      fontWeightBold: l,
      ...x,
    },
    f,
    { clone: !1 }
  );
}
const XT = 0.2,
  QT = 0.14,
  ZT = 0.12;
function Ke(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${XT})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${QT})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ZT})`,
  ].join(',');
}
const WT = [
    'none',
    Ke(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Ke(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Ke(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Ke(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Ke(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Ke(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Ke(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Ke(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Ke(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Ke(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Ke(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Ke(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Ke(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Ke(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Ke(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Ke(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Ke(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Ke(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Ke(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Ke(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Ke(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Ke(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Ke(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Ke(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  JT = WT,
  eR = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  tR = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function x0(e) {
  return `${Math.round(e)}ms`;
}
function aR(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function nR(e) {
  const t = { ...eR, ...e.easing },
    a = { ...tR, ...e.duration };
  return {
    getAutoHeightDuration: aR,
    create: (i = ['all'], o = {}) => {
      const { duration: r = a.standard, easing: l = t.easeInOut, delay: s = 0, ...u } = o;
      return (Array.isArray(i) ? i : [i])
        .map(
          (c) => `${c} ${typeof r == 'string' ? r : x0(r)} ${l} ${typeof s == 'string' ? s : x0(s)}`
        )
        .join(',');
    },
    ...e,
    easing: t,
    duration: a,
  };
}
const iR = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  oR = iR;
function rR(e) {
  return (
    Za(e) ||
    typeof e > 'u' ||
    typeof e == 'string' ||
    typeof e == 'boolean' ||
    typeof e == 'number' ||
    Array.isArray(e)
  );
}
function M1(e = {}) {
  const t = { ...e };
  function a(n) {
    const i = Object.entries(n);
    for (let o = 0; o < i.length; o++) {
      const [r, l] = i[o];
      !rR(l) || r.startsWith('unstable_') ? delete n[r] : Za(l) && ((n[r] = { ...l }), a(n[r]));
    }
  }
  return (
    a(t),
    `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
  );
}
function w0(e) {
  return typeof e == 'number' ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const lR = (e) => {
  if (!Number.isNaN(+e)) return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t) return 0;
  let a = 0;
  for (let n = 0; n < t.length; n += 1) a += +t[n];
  return a;
};
function sR(e) {
  Object.assign(e, {
    alpha(t, a) {
      const n = this || e;
      return n.colorSpace
        ? `oklch(from ${t} l c h / ${typeof a == 'string' ? `calc(${a})` : a})`
        : n.vars
          ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, 'var(--$1Channel)')} / ${typeof a == 'string' ? `calc(${a})` : a})`
          : Fl(t, lR(a));
    },
    lighten(t, a) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${w0(a)})` : Vc(t, a);
    },
    darken(t, a) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${w0(a)})` : Hc(t, a);
    },
  });
}
function ig(e = {}, ...t) {
  const {
    breakpoints: a,
    mixins: n = {},
    spacing: i,
    palette: o = {},
    transitions: r = {},
    typography: l = {},
    shape: s,
    colorSpace: u,
    ...c
  } = e;
  if (e.vars && e.generateThemeVars === void 0) throw new Error(Nn(20));
  const f = Xp({ ...o, colorSpace: u }),
    d = rr(e);
  let g = Tt(d, {
    mixins: qT(d.breakpoints, n),
    palette: f,
    shadows: JT.slice(),
    typography: YT(f, l),
    transitions: nR(r),
    zIndex: { ...oR },
  });
  return (
    (g = Tt(g, c)),
    (g = t.reduce((_, x) => Tt(_, x), g)),
    (g.unstable_sxConfig = { ...Yl, ...(c == null ? void 0 : c.unstable_sxConfig) }),
    (g.unstable_sx = function (x) {
      return qo({ sx: x, theme: this });
    }),
    (g.toRuntimeSource = M1),
    sR(g),
    g
  );
}
function og(e) {
  let t;
  return (
    e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
    Math.round(t * 10) / 1e3
  );
}
const uR = [...Array(25)].map((e, t) => {
  if (t === 0) return 'none';
  const a = og(t);
  return `linear-gradient(rgba(255 255 255 / ${a}), rgba(255 255 255 / ${a}))`;
});
function O1(e) {
  return {
    inputPlaceholder: e === 'dark' ? 0.5 : 0.42,
    inputUnderline: e === 'dark' ? 0.7 : 0.42,
    switchTrackDisabled: e === 'dark' ? 0.2 : 0.12,
    switchTrack: e === 'dark' ? 0.3 : 0.38,
  };
}
function N1(e) {
  return e === 'dark' ? uR : [];
}
function cR(e) {
  const { palette: t = { mode: 'light' }, opacity: a, overlays: n, colorSpace: i, ...o } = e,
    r = Xp({ ...t, colorSpace: i });
  return { palette: r, opacity: { ...O1(r.mode), ...a }, overlays: n || N1(r.mode), ...o };
}
function dR(e) {
  var t;
  return (
    !!e[0].match(
      /(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/
    ) ||
    !!e[0].match(/sxConfig$/) ||
    (e[0] === 'palette' &&
      !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/)))
  );
}
const fR = (e) => [
    ...[...Array(25)].map((t, a) => `--${e ? `${e}-` : ''}overlays-${a}`),
    `--${e ? `${e}-` : ''}palette-AppBar-darkBg`,
    `--${e ? `${e}-` : ''}palette-AppBar-darkColor`,
  ],
  gR = fR,
  pR = (e) => (t, a) => {
    const n = e.rootSelector || ':root',
      i = e.colorSchemeSelector;
    let o = i;
    if (
      (i === 'class' && (o = '.%s'),
      i === 'data' && (o = '[data-%s]'),
      i != null && i.startsWith('data-') && !i.includes('%s') && (o = `[${i}="%s"]`),
      e.defaultColorScheme === t)
    ) {
      if (t === 'dark') {
        const r = {};
        return (
          gR(e.cssVarPrefix).forEach((l) => {
            ((r[l] = a[l]), delete a[l]);
          }),
          o === 'media'
            ? { [n]: a, '@media (prefers-color-scheme: dark)': { [n]: r } }
            : o
              ? { [o.replace('%s', t)]: r, [`${n}, ${o.replace('%s', t)}`]: a }
              : { [n]: { ...a, ...r } }
        );
      }
      if (o && o !== 'media') return `${n}, ${o.replace('%s', String(t))}`;
    } else if (t) {
      if (o === 'media') return { [`@media (prefers-color-scheme: ${String(t)})`]: { [n]: a } };
      if (o) return o.replace('%s', String(t));
    }
    return n;
  };
function mR(e, t) {
  t.forEach((a) => {
    e[a] || (e[a] = {});
  });
}
function D(e, t, a) {
  !e[t] && a && (e[t] = a);
}
function Dr(e) {
  return typeof e != 'string' || !e.startsWith('hsl') ? e : E1(e);
}
function gn(e, t) {
  `${t}Channel` in e ||
    (e[`${t}Channel`] = $r(
      Dr(e[t]),
      `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`
    ));
}
function hR(e) {
  return typeof e == 'number'
    ? `${e}px`
    : typeof e == 'string' || typeof e == 'function' || Array.isArray(e)
      ? e
      : '8px';
}
const qa = (e) => {
    try {
      return e();
    } catch {}
  },
  vR = (e = 'mui') => oT(e);
function Gd(e, t, a, n, i) {
  if (!a) return;
  a = a === !0 ? {} : a;
  const o = i === 'dark' ? 'dark' : 'light';
  if (!n) {
    t[i] = cR({ ...a, palette: { mode: o, ...(a == null ? void 0 : a.palette) }, colorSpace: e });
    return;
  }
  const { palette: r, ...l } = ig({
    ...n,
    palette: { mode: o, ...(a == null ? void 0 : a.palette) },
    colorSpace: e,
  });
  return (
    (t[i] = {
      ...a,
      palette: r,
      opacity: { ...O1(o), ...(a == null ? void 0 : a.opacity) },
      overlays: (a == null ? void 0 : a.overlays) || N1(o),
    }),
    l
  );
}
function _R(e = {}, ...t) {
  const {
      colorSchemes: a = { light: !0 },
      defaultColorScheme: n,
      disableCssColorScheme: i = !1,
      cssVarPrefix: o = 'mui',
      nativeColor: r = !1,
      shouldSkipGeneratingVar: l = dR,
      colorSchemeSelector: s = a.light && a.dark ? 'media' : void 0,
      rootSelector: u = ':root',
      ...c
    } = e,
    f = Object.keys(a)[0],
    d = n || (a.light && f !== 'light' ? 'light' : f),
    g = vR(o),
    { [d]: _, light: x, dark: S, ...m } = a,
    p = { ...m };
  let h = _;
  if ((((d === 'dark' && !('dark' in a)) || (d === 'light' && !('light' in a))) && (h = !0), !h))
    throw new Error(Nn(21, d));
  let v;
  r && (v = 'oklch');
  const C = Gd(v, p, h, c, d);
  (x && !p.light && Gd(v, p, x, void 0, 'light'), S && !p.dark && Gd(v, p, S, void 0, 'dark'));
  let k = {
    defaultColorScheme: d,
    ...C,
    cssVarPrefix: o,
    colorSchemeSelector: s,
    rootSelector: u,
    getCssVar: g,
    colorSchemes: p,
    font: { ...PT(C.typography), ...C.font },
    spacing: hR(c.spacing),
  };
  (Object.keys(k.colorSchemes).forEach((V) => {
    const b = k.colorSchemes[V].palette,
      O = (N) => {
        const R = N.split('-'),
          j = R[1],
          B = R[2];
        return g(N, b[j][B]);
      };
    (b.mode === 'light' && (D(b.common, 'background', '#fff'), D(b.common, 'onBackground', '#000')),
      b.mode === 'dark' &&
        (D(b.common, 'background', '#000'), D(b.common, 'onBackground', '#fff')));
    function A(N, R, j) {
      if (v) {
        let B;
        return (
          N === mi && (B = `transparent ${((1 - j) * 100).toFixed(0)}%`),
          N === Te && (B = `#000 ${(j * 100).toFixed(0)}%`),
          N === Re && (B = `#fff ${(j * 100).toFixed(0)}%`),
          `color-mix(in ${v}, ${R}, ${B})`
        );
      }
      return N(R, j);
    }
    if (
      (mR(b, [
        'Alert',
        'AppBar',
        'Avatar',
        'Button',
        'Chip',
        'FilledInput',
        'LinearProgress',
        'Skeleton',
        'Slider',
        'SnackbarContent',
        'SpeedDialAction',
        'StepConnector',
        'StepContent',
        'Switch',
        'TableCell',
        'Tooltip',
      ]),
      b.mode === 'light')
    ) {
      (D(b.Alert, 'errorColor', A(Te, b.error.light, 0.6)),
        D(b.Alert, 'infoColor', A(Te, b.info.light, 0.6)),
        D(b.Alert, 'successColor', A(Te, b.success.light, 0.6)),
        D(b.Alert, 'warningColor', A(Te, b.warning.light, 0.6)),
        D(b.Alert, 'errorFilledBg', O('palette-error-main')),
        D(b.Alert, 'infoFilledBg', O('palette-info-main')),
        D(b.Alert, 'successFilledBg', O('palette-success-main')),
        D(b.Alert, 'warningFilledBg', O('palette-warning-main')),
        D(
          b.Alert,
          'errorFilledColor',
          qa(() => b.getContrastText(b.error.main))
        ),
        D(
          b.Alert,
          'infoFilledColor',
          qa(() => b.getContrastText(b.info.main))
        ),
        D(
          b.Alert,
          'successFilledColor',
          qa(() => b.getContrastText(b.success.main))
        ),
        D(
          b.Alert,
          'warningFilledColor',
          qa(() => b.getContrastText(b.warning.main))
        ),
        D(b.Alert, 'errorStandardBg', A(Re, b.error.light, 0.9)),
        D(b.Alert, 'infoStandardBg', A(Re, b.info.light, 0.9)),
        D(b.Alert, 'successStandardBg', A(Re, b.success.light, 0.9)),
        D(b.Alert, 'warningStandardBg', A(Re, b.warning.light, 0.9)),
        D(b.Alert, 'errorIconColor', O('palette-error-main')),
        D(b.Alert, 'infoIconColor', O('palette-info-main')),
        D(b.Alert, 'successIconColor', O('palette-success-main')),
        D(b.Alert, 'warningIconColor', O('palette-warning-main')),
        D(b.AppBar, 'defaultBg', O('palette-grey-100')),
        D(b.Avatar, 'defaultBg', O('palette-grey-400')),
        D(b.Button, 'inheritContainedBg', O('palette-grey-300')),
        D(b.Button, 'inheritContainedHoverBg', O('palette-grey-A100')),
        D(b.Chip, 'defaultBorder', O('palette-grey-400')),
        D(b.Chip, 'defaultAvatarColor', O('palette-grey-700')),
        D(b.Chip, 'defaultIconColor', O('palette-grey-700')),
        D(b.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)'),
        D(b.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)'),
        D(b.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)'),
        D(b.LinearProgress, 'primaryBg', A(Re, b.primary.main, 0.62)),
        D(b.LinearProgress, 'secondaryBg', A(Re, b.secondary.main, 0.62)),
        D(b.LinearProgress, 'errorBg', A(Re, b.error.main, 0.62)),
        D(b.LinearProgress, 'infoBg', A(Re, b.info.main, 0.62)),
        D(b.LinearProgress, 'successBg', A(Re, b.success.main, 0.62)),
        D(b.LinearProgress, 'warningBg', A(Re, b.warning.main, 0.62)),
        D(
          b.Skeleton,
          'bg',
          v ? A(mi, b.text.primary, 0.11) : `rgba(${O('palette-text-primaryChannel')} / 0.11)`
        ),
        D(b.Slider, 'primaryTrack', A(Re, b.primary.main, 0.62)),
        D(b.Slider, 'secondaryTrack', A(Re, b.secondary.main, 0.62)),
        D(b.Slider, 'errorTrack', A(Re, b.error.main, 0.62)),
        D(b.Slider, 'infoTrack', A(Re, b.info.main, 0.62)),
        D(b.Slider, 'successTrack', A(Re, b.success.main, 0.62)),
        D(b.Slider, 'warningTrack', A(Re, b.warning.main, 0.62)));
      const N = v ? A(Te, b.background.default, 0.6825) : ys(b.background.default, 0.8);
      (D(b.SnackbarContent, 'bg', N),
        D(
          b.SnackbarContent,
          'color',
          qa(() => (v ? ng.text.primary : b.getContrastText(N)))
        ),
        D(b.SpeedDialAction, 'fabHoverBg', ys(b.background.paper, 0.15)),
        D(b.StepConnector, 'border', O('palette-grey-400')),
        D(b.StepContent, 'border', O('palette-grey-400')),
        D(b.Switch, 'defaultColor', O('palette-common-white')),
        D(b.Switch, 'defaultDisabledColor', O('palette-grey-100')),
        D(b.Switch, 'primaryDisabledColor', A(Re, b.primary.main, 0.62)),
        D(b.Switch, 'secondaryDisabledColor', A(Re, b.secondary.main, 0.62)),
        D(b.Switch, 'errorDisabledColor', A(Re, b.error.main, 0.62)),
        D(b.Switch, 'infoDisabledColor', A(Re, b.info.main, 0.62)),
        D(b.Switch, 'successDisabledColor', A(Re, b.success.main, 0.62)),
        D(b.Switch, 'warningDisabledColor', A(Re, b.warning.main, 0.62)),
        D(b.TableCell, 'border', A(Re, A(mi, b.divider, 1), 0.88)),
        D(b.Tooltip, 'bg', A(mi, b.grey[700], 0.92)));
    }
    if (b.mode === 'dark') {
      (D(b.Alert, 'errorColor', A(Re, b.error.light, 0.6)),
        D(b.Alert, 'infoColor', A(Re, b.info.light, 0.6)),
        D(b.Alert, 'successColor', A(Re, b.success.light, 0.6)),
        D(b.Alert, 'warningColor', A(Re, b.warning.light, 0.6)),
        D(b.Alert, 'errorFilledBg', O('palette-error-dark')),
        D(b.Alert, 'infoFilledBg', O('palette-info-dark')),
        D(b.Alert, 'successFilledBg', O('palette-success-dark')),
        D(b.Alert, 'warningFilledBg', O('palette-warning-dark')),
        D(
          b.Alert,
          'errorFilledColor',
          qa(() => b.getContrastText(b.error.dark))
        ),
        D(
          b.Alert,
          'infoFilledColor',
          qa(() => b.getContrastText(b.info.dark))
        ),
        D(
          b.Alert,
          'successFilledColor',
          qa(() => b.getContrastText(b.success.dark))
        ),
        D(
          b.Alert,
          'warningFilledColor',
          qa(() => b.getContrastText(b.warning.dark))
        ),
        D(b.Alert, 'errorStandardBg', A(Te, b.error.light, 0.9)),
        D(b.Alert, 'infoStandardBg', A(Te, b.info.light, 0.9)),
        D(b.Alert, 'successStandardBg', A(Te, b.success.light, 0.9)),
        D(b.Alert, 'warningStandardBg', A(Te, b.warning.light, 0.9)),
        D(b.Alert, 'errorIconColor', O('palette-error-main')),
        D(b.Alert, 'infoIconColor', O('palette-info-main')),
        D(b.Alert, 'successIconColor', O('palette-success-main')),
        D(b.Alert, 'warningIconColor', O('palette-warning-main')),
        D(b.AppBar, 'defaultBg', O('palette-grey-900')),
        D(b.AppBar, 'darkBg', O('palette-background-paper')),
        D(b.AppBar, 'darkColor', O('palette-text-primary')),
        D(b.Avatar, 'defaultBg', O('palette-grey-600')),
        D(b.Button, 'inheritContainedBg', O('palette-grey-800')),
        D(b.Button, 'inheritContainedHoverBg', O('palette-grey-700')),
        D(b.Chip, 'defaultBorder', O('palette-grey-700')),
        D(b.Chip, 'defaultAvatarColor', O('palette-grey-300')),
        D(b.Chip, 'defaultIconColor', O('palette-grey-300')),
        D(b.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)'),
        D(b.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)'),
        D(b.FilledInput, 'disabledBg', 'rgba(255, 255, 255, 0.12)'),
        D(b.LinearProgress, 'primaryBg', A(Te, b.primary.main, 0.5)),
        D(b.LinearProgress, 'secondaryBg', A(Te, b.secondary.main, 0.5)),
        D(b.LinearProgress, 'errorBg', A(Te, b.error.main, 0.5)),
        D(b.LinearProgress, 'infoBg', A(Te, b.info.main, 0.5)),
        D(b.LinearProgress, 'successBg', A(Te, b.success.main, 0.5)),
        D(b.LinearProgress, 'warningBg', A(Te, b.warning.main, 0.5)),
        D(
          b.Skeleton,
          'bg',
          v ? A(mi, b.text.primary, 0.13) : `rgba(${O('palette-text-primaryChannel')} / 0.13)`
        ),
        D(b.Slider, 'primaryTrack', A(Te, b.primary.main, 0.5)),
        D(b.Slider, 'secondaryTrack', A(Te, b.secondary.main, 0.5)),
        D(b.Slider, 'errorTrack', A(Te, b.error.main, 0.5)),
        D(b.Slider, 'infoTrack', A(Te, b.info.main, 0.5)),
        D(b.Slider, 'successTrack', A(Te, b.success.main, 0.5)),
        D(b.Slider, 'warningTrack', A(Te, b.warning.main, 0.5)));
      const N = v ? A(Re, b.background.default, 0.985) : ys(b.background.default, 0.98);
      (D(b.SnackbarContent, 'bg', N),
        D(
          b.SnackbarContent,
          'color',
          qa(() => (v ? R1.text.primary : b.getContrastText(N)))
        ),
        D(b.SpeedDialAction, 'fabHoverBg', ys(b.background.paper, 0.15)),
        D(b.StepConnector, 'border', O('palette-grey-600')),
        D(b.StepContent, 'border', O('palette-grey-600')),
        D(b.Switch, 'defaultColor', O('palette-grey-300')),
        D(b.Switch, 'defaultDisabledColor', O('palette-grey-600')),
        D(b.Switch, 'primaryDisabledColor', A(Te, b.primary.main, 0.55)),
        D(b.Switch, 'secondaryDisabledColor', A(Te, b.secondary.main, 0.55)),
        D(b.Switch, 'errorDisabledColor', A(Te, b.error.main, 0.55)),
        D(b.Switch, 'infoDisabledColor', A(Te, b.info.main, 0.55)),
        D(b.Switch, 'successDisabledColor', A(Te, b.success.main, 0.55)),
        D(b.Switch, 'warningDisabledColor', A(Te, b.warning.main, 0.55)),
        D(b.TableCell, 'border', A(Te, A(mi, b.divider, 1), 0.68)),
        D(b.Tooltip, 'bg', A(mi, b.grey[700], 0.92)));
    }
    (gn(b.background, 'default'),
      gn(b.background, 'paper'),
      gn(b.common, 'background'),
      gn(b.common, 'onBackground'),
      gn(b, 'divider'),
      Object.keys(b).forEach((N) => {
        const R = b[N];
        N !== 'tonalOffset' &&
          R &&
          typeof R == 'object' &&
          (R.main && D(b[N], 'mainChannel', $r(Dr(R.main))),
          R.light && D(b[N], 'lightChannel', $r(Dr(R.light))),
          R.dark && D(b[N], 'darkChannel', $r(Dr(R.dark))),
          R.contrastText && D(b[N], 'contrastTextChannel', $r(Dr(R.contrastText))),
          N === 'text' && (gn(b[N], 'primary'), gn(b[N], 'secondary')),
          N === 'action' && (R.active && gn(b[N], 'active'), R.selected && gn(b[N], 'selected')));
      }));
  }),
    (k = t.reduce((V, b) => Tt(V, b), k)));
  const E = {
      prefix: o,
      disableCssColorScheme: i,
      shouldSkipGeneratingVar: l,
      getSelector: pR(k),
      enableContrastVars: r,
    },
    { vars: M, generateThemeVars: z, generateStyleSheets: $ } = sT(k, E);
  return (
    (k.vars = M),
    Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([V, b]) => {
      k[V] = b;
    }),
    (k.generateThemeVars = z),
    (k.generateStyleSheets = $),
    (k.generateSpacing = function () {
      return y1(c.spacing, Nc(this));
    }),
    (k.getColorSchemeSelector = uT(s)),
    (k.spacing = k.generateSpacing()),
    (k.shouldSkipGeneratingVar = l),
    (k.unstable_sxConfig = { ...Yl, ...(c == null ? void 0 : c.unstable_sxConfig) }),
    (k.unstable_sx = function (b) {
      return qo({ sx: b, theme: this });
    }),
    (k.toRuntimeSource = M1),
    k
  );
}
function C0(e, t, a) {
  e.colorSchemes &&
    a &&
    (e.colorSchemes[t] = {
      ...(a !== !0 && a),
      palette: Xp({ ...(a === !0 ? {} : a.palette), mode: t }),
    });
}
function z1(e = {}, ...t) {
  const {
      palette: a,
      cssVariables: n = !1,
      colorSchemes: i = a ? void 0 : { light: !0 },
      defaultColorScheme: o = a == null ? void 0 : a.mode,
      ...r
    } = e,
    l = o || 'light',
    s = i == null ? void 0 : i[l],
    u = { ...i, ...(a ? { [l]: { ...(typeof s != 'boolean' && s), palette: a } } : void 0) };
  if (n === !1) {
    if (!('colorSchemes' in e)) return ig(e, ...t);
    let c = a;
    'palette' in e ||
      (u[l] && (u[l] !== !0 ? (c = u[l].palette) : l === 'dark' && (c = { mode: 'dark' })));
    const f = ig({ ...e, palette: c }, ...t);
    return (
      (f.defaultColorScheme = l),
      (f.colorSchemes = u),
      f.palette.mode === 'light' &&
        ((f.colorSchemes.light = { ...(u.light !== !0 && u.light), palette: f.palette }),
        C0(f, 'dark', u.dark)),
      f.palette.mode === 'dark' &&
        ((f.colorSchemes.dark = { ...(u.dark !== !0 && u.dark), palette: f.palette }),
        C0(f, 'light', u.light)),
      f
    );
  }
  return (
    !a && !('light' in u) && l === 'light' && (u.light = !0),
    _R({ ...r, colorSchemes: u, defaultColorScheme: l, ...(typeof n != 'boolean' && n) }, ...t)
  );
}
const yR = z1(),
  Qp = yR;
function Pi() {
  const e = Xl(Qp);
  return e[lc] || e;
}
function B1(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const bR = (e) => B1(e) && e !== 'classes',
  _a = bR,
  SR = k1({ themeId: lc, defaultTheme: Qp, rootShouldForwardProp: _a }),
  Y = SR;
function k0(...e) {
  return e.reduce(
    (t, a) =>
      a == null
        ? t
        : function (...i) {
            (t.apply(this, i), a.apply(this, i));
          },
    () => {}
  );
}
function xR(e) {
  return w.jsx(MF, { ...e, defaultTheme: Qp, themeId: lc });
}
function wR(e) {
  return function (a) {
    return w.jsx(xR, { styles: typeof e == 'function' ? (n) => e({ theme: n, ...a }) : e });
  };
}
function CR() {
  return jc;
}
const kR = iT,
  Oe = kR;
function _e(e) {
  return tT(e);
}
function ER(e) {
  return me('MuiSvgIcon', e);
}
ge('MuiSvgIcon', [
  'root',
  'colorPrimary',
  'colorSecondary',
  'colorAction',
  'colorError',
  'colorDisabled',
  'fontSizeInherit',
  'fontSizeSmall',
  'fontSizeMedium',
  'fontSizeLarge',
]);
const FR = (e) => {
    const { color: t, fontSize: a, classes: n } = e,
      i = { root: ['root', t !== 'inherit' && `color${Z(t)}`, `fontSize${Z(a)}`] };
    return he(i, ER, n);
  },
  TR = Y('svg', {
    name: 'MuiSvgIcon',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [
        t.root,
        a.color !== 'inherit' && t[`color${Z(a.color)}`],
        t[`fontSize${Z(a.fontSize)}`],
      ];
    },
  })(
    Oe(({ theme: e }) => {
      var t, a, n, i, o, r, l, s, u, c, f, d, g, _;
      return {
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        flexShrink: 0,
        transition:
          (i = (t = e.transitions) == null ? void 0 : t.create) == null
            ? void 0
            : i.call(t, 'fill', {
                duration:
                  (n = (a = (e.vars ?? e).transitions) == null ? void 0 : a.duration) == null
                    ? void 0
                    : n.shorter,
              }),
        variants: [
          { props: (x) => !x.hasSvgAsChild, style: { fill: 'currentColor' } },
          { props: { fontSize: 'inherit' }, style: { fontSize: 'inherit' } },
          {
            props: { fontSize: 'small' },
            style: {
              fontSize:
                ((r = (o = e.typography) == null ? void 0 : o.pxToRem) == null
                  ? void 0
                  : r.call(o, 20)) || '1.25rem',
            },
          },
          {
            props: { fontSize: 'medium' },
            style: {
              fontSize:
                ((s = (l = e.typography) == null ? void 0 : l.pxToRem) == null
                  ? void 0
                  : s.call(l, 24)) || '1.5rem',
            },
          },
          {
            props: { fontSize: 'large' },
            style: {
              fontSize:
                ((c = (u = e.typography) == null ? void 0 : u.pxToRem) == null
                  ? void 0
                  : c.call(u, 35)) || '2.1875rem',
            },
          },
          ...Object.entries((e.vars ?? e).palette)
            .filter(([, x]) => x && x.main)
            .map(([x]) => {
              var S, m;
              return {
                props: { color: x },
                style: {
                  color:
                    (m = (S = (e.vars ?? e).palette) == null ? void 0 : S[x]) == null
                      ? void 0
                      : m.main,
                },
              };
            }),
          {
            props: { color: 'action' },
            style: {
              color:
                (d = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null
                  ? void 0
                  : d.active,
            },
          },
          {
            props: { color: 'disabled' },
            style: {
              color:
                (_ = (g = (e.vars ?? e).palette) == null ? void 0 : g.action) == null
                  ? void 0
                  : _.disabled,
            },
          },
          { props: { color: 'inherit' }, style: { color: void 0 } },
        ],
      };
    })
  ),
  L1 = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiSvgIcon' }),
      {
        children: i,
        className: o,
        color: r = 'inherit',
        component: l = 'svg',
        fontSize: s = 'medium',
        htmlColor: u,
        inheritViewBox: c = !1,
        titleAccess: f,
        viewBox: d = '0 0 24 24',
        ...g
      } = n,
      _ = y.isValidElement(i) && i.type === 'svg',
      x = {
        ...n,
        color: r,
        component: l,
        fontSize: s,
        instanceFontSize: t.fontSize,
        inheritViewBox: c,
        viewBox: d,
        hasSvgAsChild: _,
      },
      S = {};
    c || (S.viewBox = d);
    const m = FR(x);
    return w.jsxs(TR, {
      as: l,
      className: ee(m.root, o),
      focusable: 'false',
      color: u,
      'aria-hidden': f ? void 0 : !0,
      role: f ? 'img' : void 0,
      ref: a,
      ...S,
      ...g,
      ...(_ && i.props),
      ownerState: x,
      children: [_ ? i.props.children : i, f ? w.jsx('title', { children: f }) : null],
    });
  });
L1.muiName = 'SvgIcon';
const E0 = L1;
function Ql(e, t) {
  function a(n, i) {
    return w.jsx(E0, { 'data-testid': void 0, ref: i, ...n, children: e });
  }
  return ((a.muiName = E0.muiName), y.memo(y.forwardRef(a)));
}
function Zp(e, t = 166) {
  let a;
  function n(...i) {
    const o = () => {
      e.apply(this, i);
    };
    (clearTimeout(a), (a = setTimeout(o, t)));
  }
  return (
    (n.clear = () => {
      clearTimeout(a);
    }),
    n
  );
}
function Va(e) {
  return (e && e.ownerDocument) || document;
}
function Ga(e) {
  return Va(e).defaultView || window;
}
function F0(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
function T0(e) {
  const { controlled: t, default: a, name: n, state: i = 'value' } = e,
    { current: o } = y.useRef(t !== void 0),
    [r, l] = y.useState(a),
    s = o ? t : r,
    u = y.useCallback((c) => {
      o || l(c);
    }, []);
  return [s, u];
}
function Oi(e) {
  const t = y.useRef(e);
  return (
    ui(() => {
      t.current = e;
    }),
    y.useRef((...a) => (0, t.current)(...a)).current
  );
}
function Ut(...e) {
  const t = y.useRef(void 0),
    a = y.useCallback((n) => {
      const i = e.map((o) => {
        if (o == null) return null;
        if (typeof o == 'function') {
          const r = o,
            l = r(n);
          return typeof l == 'function'
            ? l
            : () => {
                r(null);
              };
        }
        return (
          (o.current = n),
          () => {
            o.current = null;
          }
        );
      });
      return () => {
        i.forEach((o) => (o == null ? void 0 : o()));
      };
    }, e);
  return y.useMemo(
    () =>
      e.every((n) => n == null)
        ? null
        : (n) => {
            (t.current && (t.current(), (t.current = void 0)), n != null && (t.current = a(n)));
          },
    e
  );
}
function RR(e, t) {
  const a = e.charCodeAt(2);
  return e[0] === 'o' && e[1] === 'n' && a >= 65 && a <= 90 && typeof t == 'function';
}
function $1(e, t) {
  if (!e) return t;
  function a(r, l) {
    const s = {};
    return (
      Object.keys(l).forEach((u) => {
        RR(u, l[u]) &&
          typeof r[u] == 'function' &&
          (s[u] = (...c) => {
            (r[u](...c), l[u](...c));
          });
      }),
      s
    );
  }
  if (typeof e == 'function' || typeof t == 'function')
    return (r) => {
      const l = typeof t == 'function' ? t(r) : t,
        s = typeof e == 'function' ? e({ ...r, ...l }) : e,
        u = ee(
          r == null ? void 0 : r.className,
          l == null ? void 0 : l.className,
          s == null ? void 0 : s.className
        ),
        c = a(s, l);
      return {
        ...l,
        ...s,
        ...c,
        ...(!!u && { className: u }),
        ...((l == null ? void 0 : l.style) &&
          (s == null ? void 0 : s.style) && { style: { ...l.style, ...s.style } }),
        ...((l == null ? void 0 : l.sx) &&
          (s == null ? void 0 : s.sx) && {
            sx: [
              ...(Array.isArray(l.sx) ? l.sx : [l.sx]),
              ...(Array.isArray(s.sx) ? s.sx : [s.sx]),
            ],
          }),
      };
    };
  const n = t,
    i = a(e, n),
    o = ee(n == null ? void 0 : n.className, e == null ? void 0 : e.className);
  return {
    ...t,
    ...e,
    ...i,
    ...(!!o && { className: o }),
    ...((n == null ? void 0 : n.style) &&
      (e == null ? void 0 : e.style) && { style: { ...n.style, ...e.style } }),
    ...((n == null ? void 0 : n.sx) &&
      (e == null ? void 0 : e.sx) && {
        sx: [...(Array.isArray(n.sx) ? n.sx : [n.sx]), ...(Array.isArray(e.sx) ? e.sx : [e.sx])],
      }),
  };
}
function D1(e, t) {
  if (e == null) return {};
  var a = {};
  for (var n in e)
    if ({}.hasOwnProperty.call(e, n)) {
      if (t.indexOf(n) !== -1) continue;
      a[n] = e[n];
    }
  return a;
}
function rg(e, t) {
  return (
    (rg = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (a, n) {
          return ((a.__proto__ = n), a);
        }),
    rg(e, t)
  );
}
function j1(e, t) {
  ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), rg(e, t));
}
const R0 = { disabled: !1 },
  Tu = J.createContext(null);
var AR = function (t) {
    return t.scrollTop;
  },
  jr = 'unmounted',
  xi = 'exited',
  wi = 'entering',
  uo = 'entered',
  lg = 'exiting',
  Bn = (function (e) {
    j1(t, e);
    function t(n, i) {
      var o;
      o = e.call(this, n, i) || this;
      var r = i,
        l = r && !r.isMounting ? n.enter : n.appear,
        s;
      return (
        (o.appearStatus = null),
        n.in
          ? l
            ? ((s = xi), (o.appearStatus = wi))
            : (s = uo)
          : n.unmountOnExit || n.mountOnEnter
            ? (s = jr)
            : (s = xi),
        (o.state = { status: s }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (i, o) {
      var r = i.in;
      return r && o.status === jr ? { status: xi } : null;
    };
    var a = t.prototype;
    return (
      (a.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (a.componentDidUpdate = function (i) {
        var o = null;
        if (i !== this.props) {
          var r = this.state.status;
          this.props.in ? r !== wi && r !== uo && (o = wi) : (r === wi || r === uo) && (o = lg);
        }
        this.updateStatus(!1, o);
      }),
      (a.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (a.getTimeouts = function () {
        var i = this.props.timeout,
          o,
          r,
          l;
        return (
          (o = r = l = i),
          i != null &&
            typeof i != 'number' &&
            ((o = i.exit), (r = i.enter), (l = i.appear !== void 0 ? i.appear : r)),
          { exit: o, enter: r, appear: l }
        );
      }),
      (a.updateStatus = function (i, o) {
        if ((i === void 0 && (i = !1), o !== null))
          if ((this.cancelNextCallback(), o === wi)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var r = this.props.nodeRef ? this.props.nodeRef.current : ts.findDOMNode(this);
              r && AR(r);
            }
            this.performEnter(i);
          } else this.performExit();
        else this.props.unmountOnExit && this.state.status === xi && this.setState({ status: jr });
      }),
      (a.performEnter = function (i) {
        var o = this,
          r = this.props.enter,
          l = this.context ? this.context.isMounting : i,
          s = this.props.nodeRef ? [l] : [ts.findDOMNode(this), l],
          u = s[0],
          c = s[1],
          f = this.getTimeouts(),
          d = l ? f.appear : f.enter;
        if ((!i && !r) || R0.disabled) {
          this.safeSetState({ status: uo }, function () {
            o.props.onEntered(u);
          });
          return;
        }
        (this.props.onEnter(u, c),
          this.safeSetState({ status: wi }, function () {
            (o.props.onEntering(u, c),
              o.onTransitionEnd(d, function () {
                o.safeSetState({ status: uo }, function () {
                  o.props.onEntered(u, c);
                });
              }));
          }));
      }),
      (a.performExit = function () {
        var i = this,
          o = this.props.exit,
          r = this.getTimeouts(),
          l = this.props.nodeRef ? void 0 : ts.findDOMNode(this);
        if (!o || R0.disabled) {
          this.safeSetState({ status: xi }, function () {
            i.props.onExited(l);
          });
          return;
        }
        (this.props.onExit(l),
          this.safeSetState({ status: lg }, function () {
            (i.props.onExiting(l),
              i.onTransitionEnd(r.exit, function () {
                i.safeSetState({ status: xi }, function () {
                  i.props.onExited(l);
                });
              }));
          }));
      }),
      (a.cancelNextCallback = function () {
        this.nextCallback !== null && (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (a.safeSetState = function (i, o) {
        ((o = this.setNextCallback(o)), this.setState(i, o));
      }),
      (a.setNextCallback = function (i) {
        var o = this,
          r = !0;
        return (
          (this.nextCallback = function (l) {
            r && ((r = !1), (o.nextCallback = null), i(l));
          }),
          (this.nextCallback.cancel = function () {
            r = !1;
          }),
          this.nextCallback
        );
      }),
      (a.onTransitionEnd = function (i, o) {
        this.setNextCallback(o);
        var r = this.props.nodeRef ? this.props.nodeRef.current : ts.findDOMNode(this),
          l = i == null && !this.props.addEndListener;
        if (!r || l) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var s = this.props.nodeRef ? [this.nextCallback] : [r, this.nextCallback],
            u = s[0],
            c = s[1];
          this.props.addEndListener(u, c);
        }
        i != null && setTimeout(this.nextCallback, i);
      }),
      (a.render = function () {
        var i = this.state.status;
        if (i === jr) return null;
        var o = this.props,
          r = o.children;
        (o.in,
          o.mountOnEnter,
          o.unmountOnExit,
          o.appear,
          o.enter,
          o.exit,
          o.timeout,
          o.addEndListener,
          o.onEnter,
          o.onEntering,
          o.onEntered,
          o.onExit,
          o.onExiting,
          o.onExited,
          o.nodeRef);
        var l = D1(o, [
          'children',
          'in',
          'mountOnEnter',
          'unmountOnExit',
          'appear',
          'enter',
          'exit',
          'timeout',
          'addEndListener',
          'onEnter',
          'onEntering',
          'onEntered',
          'onExit',
          'onExiting',
          'onExited',
          'nodeRef',
        ]);
        return J.createElement(
          Tu.Provider,
          { value: null },
          typeof r == 'function' ? r(i, l) : J.cloneElement(J.Children.only(r), l)
        );
      }),
      t
    );
  })(J.Component);
Bn.contextType = Tu;
Bn.propTypes = {};
function eo() {}
Bn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: eo,
  onEntering: eo,
  onEntered: eo,
  onExit: eo,
  onExiting: eo,
  onExited: eo,
};
Bn.UNMOUNTED = jr;
Bn.EXITED = xi;
Bn.ENTERING = wi;
Bn.ENTERED = uo;
Bn.EXITING = lg;
const Wp = Bn;
function MR(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jp(e, t) {
  var a = function (o) {
      return t && y.isValidElement(o) ? t(o) : o;
    },
    n = Object.create(null);
  return (
    e &&
      y.Children.map(e, function (i) {
        return i;
      }).forEach(function (i) {
        n[i.key] = a(i);
      }),
    n
  );
}
function OR(e, t) {
  ((e = e || {}), (t = t || {}));
  function a(c) {
    return c in t ? t[c] : e[c];
  }
  var n = Object.create(null),
    i = [];
  for (var o in e) o in t ? i.length && ((n[o] = i), (i = [])) : i.push(o);
  var r,
    l = {};
  for (var s in t) {
    if (n[s])
      for (r = 0; r < n[s].length; r++) {
        var u = n[s][r];
        l[n[s][r]] = a(u);
      }
    l[s] = a(s);
  }
  for (r = 0; r < i.length; r++) l[i[r]] = a(i[r]);
  return l;
}
function ki(e, t, a) {
  return a[t] != null ? a[t] : e.props[t];
}
function NR(e, t) {
  return Jp(e.children, function (a) {
    return y.cloneElement(a, {
      onExited: t.bind(null, a),
      in: !0,
      appear: ki(a, 'appear', e),
      enter: ki(a, 'enter', e),
      exit: ki(a, 'exit', e),
    });
  });
}
function zR(e, t, a) {
  var n = Jp(e.children),
    i = OR(t, n);
  return (
    Object.keys(i).forEach(function (o) {
      var r = i[o];
      if (y.isValidElement(r)) {
        var l = o in t,
          s = o in n,
          u = t[o],
          c = y.isValidElement(u) && !u.props.in;
        s && (!l || c)
          ? (i[o] = y.cloneElement(r, {
              onExited: a.bind(null, r),
              in: !0,
              exit: ki(r, 'exit', e),
              enter: ki(r, 'enter', e),
            }))
          : !s && l && !c
            ? (i[o] = y.cloneElement(r, { in: !1 }))
            : s &&
              l &&
              y.isValidElement(u) &&
              (i[o] = y.cloneElement(r, {
                onExited: a.bind(null, r),
                in: u.props.in,
                exit: ki(r, 'exit', e),
                enter: ki(r, 'enter', e),
              }));
      }
    }),
    i
  );
}
var BR =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  LR = {
    component: 'div',
    childFactory: function (t) {
      return t;
    },
  },
  em = (function (e) {
    j1(t, e);
    function t(n, i) {
      var o;
      o = e.call(this, n, i) || this;
      var r = o.handleExited.bind(MR(o));
      return (
        (o.state = { contextValue: { isMounting: !0 }, handleExited: r, firstRender: !0 }),
        o
      );
    }
    var a = t.prototype;
    return (
      (a.componentDidMount = function () {
        ((this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } }));
      }),
      (a.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (i, o) {
        var r = o.children,
          l = o.handleExited,
          s = o.firstRender;
        return { children: s ? NR(i, l) : zR(i, r, l), firstRender: !1 };
      }),
      (a.handleExited = function (i, o) {
        var r = Jp(this.props.children);
        i.key in r ||
          (i.props.onExited && i.props.onExited(o),
          this.mounted &&
            this.setState(function (l) {
              var s = Cu({}, l.children);
              return (delete s[i.key], { children: s });
            }));
      }),
      (a.render = function () {
        var i = this.props,
          o = i.component,
          r = i.childFactory,
          l = D1(i, ['component', 'childFactory']),
          s = this.state.contextValue,
          u = BR(this.state.children).map(r);
        return (
          delete l.appear,
          delete l.enter,
          delete l.exit,
          o === null
            ? J.createElement(Tu.Provider, { value: s }, u)
            : J.createElement(Tu.Provider, { value: s }, J.createElement(o, l, u))
        );
      }),
      t
    );
  })(J.Component);
em.propTypes = {};
em.defaultProps = LR;
const $R = em,
  A0 = {};
function U1(e, t) {
  const a = y.useRef(A0);
  return (a.current === A0 && (a.current = e(t)), a);
}
const DR = [];
function jR(e) {
  y.useEffect(e, DR);
}
class tm {
  constructor() {
    mr(this, 'currentId', null);
    mr(this, 'clear', () => {
      this.currentId !== null && (clearTimeout(this.currentId), (this.currentId = null));
    });
    mr(this, 'disposeEffect', () => this.clear);
  }
  static create() {
    return new tm();
  }
  start(t, a) {
    (this.clear(),
      (this.currentId = setTimeout(() => {
        ((this.currentId = null), a());
      }, t)));
  }
}
function H1() {
  const e = U1(tm.create).current;
  return (jR(e.disposeEffect), e);
}
const am = (e) => e.scrollTop;
function Ko(e, t) {
  const { timeout: a, easing: n, style: i = {} } = e;
  return {
    duration: i.transitionDuration ?? (typeof a == 'number' ? a : a[t.mode] || 0),
    easing: i.transitionTimingFunction ?? (typeof n == 'object' ? n[t.mode] : n),
    delay: i.transitionDelay,
  };
}
function Ru(e) {
  return typeof e == 'string';
}
function V1(e, t, a) {
  return e === void 0 || Ru(e) ? t : { ...t, ownerState: { ...t.ownerState, ...a } };
}
function G1(e, t, a) {
  return typeof e == 'function' ? e(t, a) : e;
}
function I1(e, t = []) {
  if (e === void 0) return {};
  const a = {};
  return (
    Object.keys(e)
      .filter((n) => n.match(/^on[A-Z]/) && typeof e[n] == 'function' && !t.includes(n))
      .forEach((n) => {
        a[n] = e[n];
      }),
    a
  );
}
function M0(e) {
  if (e === void 0) return {};
  const t = {};
  return (
    Object.keys(e)
      .filter((a) => !(a.match(/^on[A-Z]/) && typeof e[a] == 'function'))
      .forEach((a) => {
        t[a] = e[a];
      }),
    t
  );
}
function P1(e) {
  const {
    getSlotProps: t,
    additionalProps: a,
    externalSlotProps: n,
    externalForwardedProps: i,
    className: o,
  } = e;
  if (!t) {
    const g = ee(
        a == null ? void 0 : a.className,
        o,
        i == null ? void 0 : i.className,
        n == null ? void 0 : n.className
      ),
      _ = {
        ...(a == null ? void 0 : a.style),
        ...(i == null ? void 0 : i.style),
        ...(n == null ? void 0 : n.style),
      },
      x = { ...a, ...i, ...n };
    return (
      g.length > 0 && (x.className = g),
      Object.keys(_).length > 0 && (x.style = _),
      { props: x, internalRef: void 0 }
    );
  }
  const r = I1({ ...i, ...n }),
    l = M0(n),
    s = M0(i),
    u = t(r),
    c = ee(
      u == null ? void 0 : u.className,
      a == null ? void 0 : a.className,
      o,
      i == null ? void 0 : i.className,
      n == null ? void 0 : n.className
    ),
    f = {
      ...(u == null ? void 0 : u.style),
      ...(a == null ? void 0 : a.style),
      ...(i == null ? void 0 : i.style),
      ...(n == null ? void 0 : n.style),
    },
    d = { ...u, ...a, ...s, ...l };
  return (
    c.length > 0 && (d.className = c),
    Object.keys(f).length > 0 && (d.style = f),
    { props: d, internalRef: u.ref }
  );
}
function ht(e, t) {
  const {
      className: a,
      elementType: n,
      ownerState: i,
      externalForwardedProps: o,
      internalForwardedProps: r,
      shouldForwardComponentProp: l = !1,
      ...s
    } = t,
    { component: u, slots: c = { [e]: void 0 }, slotProps: f = { [e]: void 0 }, ...d } = o,
    g = c[e] || n,
    _ = G1(f[e], i),
    {
      props: { component: x, ...S },
      internalRef: m,
    } = P1({
      className: a,
      ...s,
      externalForwardedProps: e === 'root' ? d : void 0,
      externalSlotProps: _,
    }),
    p = Ut(m, _ == null ? void 0 : _.ref, t.ref),
    h = e === 'root' ? x || u : x,
    v = V1(
      g,
      {
        ...(e === 'root' && !u && !c[e] && r),
        ...(e !== 'root' && !c[e] && r),
        ...S,
        ...(h && !l && { as: h }),
        ...(h && l && { component: h }),
        ref: p,
      },
      i
    );
  return [g, v];
}
function UR(e) {
  return me('MuiPaper', e);
}
ge('MuiPaper', [
  'root',
  'rounded',
  'outlined',
  'elevation',
  'elevation0',
  'elevation1',
  'elevation2',
  'elevation3',
  'elevation4',
  'elevation5',
  'elevation6',
  'elevation7',
  'elevation8',
  'elevation9',
  'elevation10',
  'elevation11',
  'elevation12',
  'elevation13',
  'elevation14',
  'elevation15',
  'elevation16',
  'elevation17',
  'elevation18',
  'elevation19',
  'elevation20',
  'elevation21',
  'elevation22',
  'elevation23',
  'elevation24',
]);
const HR = (e) => {
    const { square: t, elevation: a, variant: n, classes: i } = e,
      o = { root: ['root', n, !t && 'rounded', n === 'elevation' && `elevation${a}`] };
    return he(o, UR, i);
  },
  VR = Y('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [
        t.root,
        t[a.variant],
        !a.square && t.rounded,
        a.variant === 'elevation' && t[`elevation${a.elevation}`],
      ];
    },
  })(
    Oe(({ theme: e }) => ({
      backgroundColor: (e.vars || e).palette.background.paper,
      color: (e.vars || e).palette.text.primary,
      transition: e.transitions.create('box-shadow'),
      variants: [
        { props: ({ ownerState: t }) => !t.square, style: { borderRadius: e.shape.borderRadius } },
        {
          props: { variant: 'outlined' },
          style: { border: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: { variant: 'elevation' },
          style: { boxShadow: 'var(--Paper-shadow)', backgroundImage: 'var(--Paper-overlay)' },
        },
      ],
    }))
  ),
  GR = y.forwardRef(function (t, a) {
    var g;
    const n = _e({ props: t, name: 'MuiPaper' }),
      i = Pi(),
      {
        className: o,
        component: r = 'div',
        elevation: l = 1,
        square: s = !1,
        variant: u = 'elevation',
        ...c
      } = n,
      f = { ...n, component: r, elevation: l, square: s, variant: u },
      d = HR(f);
    return w.jsx(VR, {
      as: r,
      ownerState: f,
      className: ee(d.root, o),
      ref: a,
      ...c,
      style: {
        ...(u === 'elevation' && {
          '--Paper-shadow': (i.vars || i).shadows[l],
          ...(i.vars && { '--Paper-overlay': (g = i.vars.overlays) == null ? void 0 : g[l] }),
          ...(!i.vars &&
            i.palette.mode === 'dark' && {
              '--Paper-overlay': `linear-gradient(${Fl('#fff', og(l))}, ${Fl('#fff', og(l))})`,
            }),
        }),
        ...c.style,
      },
    });
  }),
  Pc = GR;
function Au(e) {
  try {
    return e.matches(':focus-visible');
  } catch {}
  return !1;
}
class Mu {
  constructor() {
    mr(this, 'mountEffect', () => {
      this.shouldMount &&
        !this.didMount &&
        this.ref.current !== null &&
        ((this.didMount = !0), this.mounted.resolve());
    });
    ((this.ref = { current: null }),
      (this.mounted = null),
      (this.didMount = !1),
      (this.shouldMount = !1),
      (this.setShouldMount = null));
  }
  static create() {
    return new Mu();
  }
  static use() {
    const t = U1(Mu.create).current,
      [a, n] = y.useState(!1);
    return ((t.shouldMount = a), (t.setShouldMount = n), y.useEffect(t.mountEffect, [a]), t);
  }
  mount() {
    return (
      this.mounted ||
        ((this.mounted = PR()), (this.shouldMount = !0), this.setShouldMount(this.shouldMount)),
      this.mounted
    );
  }
  start(...t) {
    this.mount().then(() => {
      var a;
      return (a = this.ref.current) == null ? void 0 : a.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var a;
      return (a = this.ref.current) == null ? void 0 : a.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var a;
      return (a = this.ref.current) == null ? void 0 : a.pulsate(...t);
    });
  }
}
function IR() {
  return Mu.use();
}
function PR() {
  let e, t;
  const a = new Promise((n, i) => {
    ((e = n), (t = i));
  });
  return ((a.resolve = e), (a.reject = t), a);
}
function qR(e) {
  const {
      className: t,
      classes: a,
      pulsate: n = !1,
      rippleX: i,
      rippleY: o,
      rippleSize: r,
      in: l,
      onExited: s,
      timeout: u,
    } = e,
    [c, f] = y.useState(!1),
    d = ee(t, a.ripple, a.rippleVisible, n && a.ripplePulsate),
    g = { width: r, height: r, top: -(r / 2) + o, left: -(r / 2) + i },
    _ = ee(a.child, c && a.childLeaving, n && a.childPulsate);
  return (
    !l && !c && f(!0),
    y.useEffect(() => {
      if (!l && s != null) {
        const x = setTimeout(s, u);
        return () => {
          clearTimeout(x);
        };
      }
    }, [s, l, u]),
    w.jsx('span', { className: d, style: g, children: w.jsx('span', { className: _ }) })
  );
}
const KR = ge('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  Sa = KR,
  sg = 550,
  YR = 80,
  XR = ql`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
  QR = ql`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
  ZR = ql`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
  WR = Y('span', { name: 'MuiTouchRipple', slot: 'Root' })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
  }),
  JR = Y(qR, { name: 'MuiTouchRipple', slot: 'Ripple' })`
  opacity: 0;
  position: absolute;

  &.${Sa.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${XR};
    animation-duration: ${sg}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  &.${Sa.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${Sa.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Sa.childLeaving} {
    opacity: 0;
    animation-name: ${QR};
    animation-duration: ${sg}ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
  }

  & .${Sa.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${ZR};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
  eA = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiTouchRipple' }),
      { center: i = !1, classes: o = {}, className: r, ...l } = n,
      [s, u] = y.useState([]),
      c = y.useRef(0),
      f = y.useRef(null);
    y.useEffect(() => {
      f.current && (f.current(), (f.current = null));
    }, [s]);
    const d = y.useRef(!1),
      g = H1(),
      _ = y.useRef(null),
      x = y.useRef(null),
      S = y.useCallback(
        (v) => {
          const { pulsate: C, rippleX: k, rippleY: E, rippleSize: M, cb: z } = v;
          (u(($) => [
            ...$,
            w.jsx(
              JR,
              {
                classes: {
                  ripple: ee(o.ripple, Sa.ripple),
                  rippleVisible: ee(o.rippleVisible, Sa.rippleVisible),
                  ripplePulsate: ee(o.ripplePulsate, Sa.ripplePulsate),
                  child: ee(o.child, Sa.child),
                  childLeaving: ee(o.childLeaving, Sa.childLeaving),
                  childPulsate: ee(o.childPulsate, Sa.childPulsate),
                },
                timeout: sg,
                pulsate: C,
                rippleX: k,
                rippleY: E,
                rippleSize: M,
              },
              c.current
            ),
          ]),
            (c.current += 1),
            (f.current = z));
        },
        [o]
      ),
      m = y.useCallback(
        (v = {}, C = {}, k = () => {}) => {
          const { pulsate: E = !1, center: M = i || C.pulsate, fakeElement: z = !1 } = C;
          if ((v == null ? void 0 : v.type) === 'mousedown' && d.current) {
            d.current = !1;
            return;
          }
          (v == null ? void 0 : v.type) === 'touchstart' && (d.current = !0);
          const $ = z ? null : x.current,
            V = $ ? $.getBoundingClientRect() : { width: 0, height: 0, left: 0, top: 0 };
          let b, O, A;
          if (
            M ||
            v === void 0 ||
            (v.clientX === 0 && v.clientY === 0) ||
            (!v.clientX && !v.touches)
          )
            ((b = Math.round(V.width / 2)), (O = Math.round(V.height / 2)));
          else {
            const { clientX: N, clientY: R } = v.touches && v.touches.length > 0 ? v.touches[0] : v;
            ((b = Math.round(N - V.left)), (O = Math.round(R - V.top)));
          }
          if (M) ((A = Math.sqrt((2 * V.width ** 2 + V.height ** 2) / 3)), A % 2 === 0 && (A += 1));
          else {
            const N = Math.max(Math.abs(($ ? $.clientWidth : 0) - b), b) * 2 + 2,
              R = Math.max(Math.abs(($ ? $.clientHeight : 0) - O), O) * 2 + 2;
            A = Math.sqrt(N ** 2 + R ** 2);
          }
          v != null && v.touches
            ? _.current === null &&
              ((_.current = () => {
                S({ pulsate: E, rippleX: b, rippleY: O, rippleSize: A, cb: k });
              }),
              g.start(YR, () => {
                _.current && (_.current(), (_.current = null));
              }))
            : S({ pulsate: E, rippleX: b, rippleY: O, rippleSize: A, cb: k });
        },
        [i, S, g]
      ),
      p = y.useCallback(() => {
        m({}, { pulsate: !0 });
      }, [m]),
      h = y.useCallback(
        (v, C) => {
          if ((g.clear(), (v == null ? void 0 : v.type) === 'touchend' && _.current)) {
            (_.current(),
              (_.current = null),
              g.start(0, () => {
                h(v, C);
              }));
            return;
          }
          ((_.current = null), u((k) => (k.length > 0 ? k.slice(1) : k)), (f.current = C));
        },
        [g]
      );
    return (
      y.useImperativeHandle(a, () => ({ pulsate: p, start: m, stop: h }), [p, m, h]),
      w.jsx(WR, {
        className: ee(Sa.root, o.root, r),
        ref: x,
        ...l,
        children: w.jsx($R, { component: null, exit: !0, children: s }),
      })
    );
  }),
  tA = eA;
function aA(e) {
  return me('MuiButtonBase', e);
}
const nA = ge('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  iA = nA,
  oA = (e) => {
    const { disabled: t, focusVisible: a, focusVisibleClassName: n, classes: i } = e,
      r = he({ root: ['root', t && 'disabled', a && 'focusVisible'] }, aA, i);
    return (a && n && (r.root += ` ${n}`), r);
  },
  rA = Y('button', { name: 'MuiButtonBase', slot: 'Root' })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': { borderStyle: 'none' },
    [`&.${iA.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  lA = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiButtonBase' }),
      {
        action: i,
        centerRipple: o = !1,
        children: r,
        className: l,
        component: s = 'button',
        disabled: u = !1,
        disableRipple: c = !1,
        disableTouchRipple: f = !1,
        focusRipple: d = !1,
        focusVisibleClassName: g,
        LinkComponent: _ = 'a',
        onBlur: x,
        onClick: S,
        onContextMenu: m,
        onDragLeave: p,
        onFocus: h,
        onFocusVisible: v,
        onKeyDown: C,
        onKeyUp: k,
        onMouseDown: E,
        onMouseLeave: M,
        onMouseUp: z,
        onTouchEnd: $,
        onTouchMove: V,
        onTouchStart: b,
        tabIndex: O = 0,
        TouchRippleProps: A,
        touchRippleRef: N,
        type: R,
        ...j
      } = n,
      B = y.useRef(null),
      U = IR(),
      q = Ut(U.ref, N),
      [X, ye] = y.useState(!1);
    (u && X && ye(!1),
      y.useImperativeHandle(
        i,
        () => ({
          focusVisible: () => {
            (ye(!0), B.current.focus());
          },
        }),
        []
      ));
    const le = U.shouldMount && !c && !u;
    y.useEffect(() => {
      X && d && !c && U.pulsate();
    }, [c, d, X, U]);
    const Ee = pn(U, 'start', E, f),
      je = pn(U, 'stop', m, f),
      Je = pn(U, 'stop', p, f),
      Ze = pn(U, 'stop', z, f),
      At = pn(
        U,
        'stop',
        (T) => {
          (X && T.preventDefault(), M && M(T));
        },
        f
      ),
      Le = pn(U, 'start', b, f),
      te = pn(U, 'stop', $, f),
      se = pn(U, 'stop', V, f),
      Fe = pn(
        U,
        'stop',
        (T) => {
          (Au(T.target) || ye(!1), x && x(T));
        },
        !1
      ),
      St = Oi((T) => {
        (B.current || (B.current = T.currentTarget),
          Au(T.target) && (ye(!0), v && v(T)),
          h && h(T));
      }),
      ie = () => {
        const T = B.current;
        return s && s !== 'button' && !(T.tagName === 'A' && T.href);
      },
      be = Oi((T) => {
        (d &&
          !T.repeat &&
          X &&
          T.key === ' ' &&
          U.stop(T, () => {
            U.start(T);
          }),
          T.target === T.currentTarget && ie() && T.key === ' ' && T.preventDefault(),
          C && C(T),
          T.target === T.currentTarget &&
            ie() &&
            T.key === 'Enter' &&
            !u &&
            (T.preventDefault(), S && S(T)));
      }),
      xt = Oi((T) => {
        (d &&
          T.key === ' ' &&
          X &&
          !T.defaultPrevented &&
          U.stop(T, () => {
            U.pulsate(T);
          }),
          k && k(T),
          S &&
            T.target === T.currentTarget &&
            ie() &&
            T.key === ' ' &&
            !T.defaultPrevented &&
            S(T));
      });
    let Mt = s;
    Mt === 'button' && (j.href || j.to) && (Mt = _);
    const st = {};
    if (Mt === 'button') {
      const T = !!j.formAction;
      ((st.type = R === void 0 && !T ? 'button' : R), (st.disabled = u));
    } else (!j.href && !j.to && (st.role = 'button'), u && (st['aria-disabled'] = u));
    const ya = Ut(a, B),
      Kt = {
        ...n,
        centerRipple: o,
        component: s,
        disabled: u,
        disableRipple: c,
        disableTouchRipple: f,
        focusRipple: d,
        tabIndex: O,
        focusVisible: X,
      },
      F = oA(Kt);
    return w.jsxs(rA, {
      as: Mt,
      className: ee(F.root, l),
      ownerState: Kt,
      onBlur: Fe,
      onClick: S,
      onContextMenu: je,
      onFocus: St,
      onKeyDown: be,
      onKeyUp: xt,
      onMouseDown: Ee,
      onMouseLeave: At,
      onMouseUp: Ze,
      onDragLeave: Je,
      onTouchEnd: te,
      onTouchMove: se,
      onTouchStart: Le,
      ref: ya,
      tabIndex: u ? -1 : O,
      type: R,
      ...st,
      ...j,
      children: [r, le ? w.jsx(tA, { ref: q, center: o, ...A }) : null],
    });
  });
function pn(e, t, a, n = !1) {
  return Oi((i) => (a && a(i), n || e[t](i), !0));
}
const nm = lA;
function sA(e) {
  return typeof e.main == 'string';
}
function uA(e, t = []) {
  if (!sA(e)) return !1;
  for (const a of t) if (!e.hasOwnProperty(a) || typeof e[a] != 'string') return !1;
  return !0;
}
function Ia(e = []) {
  return ([, t]) => t && uA(t, e);
}
function cA(e) {
  return me('MuiCircularProgress', e);
}
ge('MuiCircularProgress', [
  'root',
  'determinate',
  'indeterminate',
  'colorPrimary',
  'colorSecondary',
  'svg',
  'track',
  'circle',
  'circleDeterminate',
  'circleIndeterminate',
  'circleDisableShrink',
]);
const La = 44,
  ug = ql`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,
  cg = ql`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`,
  dA =
    typeof ug != 'string'
      ? Up`
        animation: ${ug} 1.4s linear infinite;
      `
      : null,
  fA =
    typeof cg != 'string'
      ? Up`
        animation: ${cg} 1.4s ease-in-out infinite;
      `
      : null,
  gA = (e) => {
    const { classes: t, variant: a, color: n, disableShrink: i } = e,
      o = {
        root: ['root', a, `color${Z(n)}`],
        svg: ['svg'],
        track: ['track'],
        circle: ['circle', `circle${Z(a)}`, i && 'circleDisableShrink'],
      };
    return he(o, cA, t);
  },
  pA = Y('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [t.root, t[a.variant], t[`color${Z(a.color)}`]];
    },
  })(
    Oe(({ theme: e }) => ({
      display: 'inline-block',
      variants: [
        {
          props: { variant: 'determinate' },
          style: { transition: e.transitions.create('transform') },
        },
        {
          props: { variant: 'indeterminate' },
          style: dA || { animation: `${ug} 1.4s linear infinite` },
        },
        ...Object.entries(e.palette)
          .filter(Ia())
          .map(([t]) => ({ props: { color: t }, style: { color: (e.vars || e).palette[t].main } })),
      ],
    }))
  ),
  mA = Y('svg', { name: 'MuiCircularProgress', slot: 'Svg' })({ display: 'block' }),
  hA = Y('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [t.circle, t[`circle${Z(a.variant)}`], a.disableShrink && t.circleDisableShrink];
    },
  })(
    Oe(({ theme: e }) => ({
      stroke: 'currentColor',
      variants: [
        {
          props: { variant: 'determinate' },
          style: { transition: e.transitions.create('stroke-dashoffset') },
        },
        {
          props: { variant: 'indeterminate' },
          style: { strokeDasharray: '80px, 200px', strokeDashoffset: 0 },
        },
        {
          props: ({ ownerState: t }) => t.variant === 'indeterminate' && !t.disableShrink,
          style: fA || { animation: `${cg} 1.4s ease-in-out infinite` },
        },
      ],
    }))
  ),
  vA = Y('circle', { name: 'MuiCircularProgress', slot: 'Track' })(
    Oe(({ theme: e }) => ({
      stroke: 'currentColor',
      opacity: (e.vars || e).palette.action.activatedOpacity,
    }))
  ),
  _A = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiCircularProgress' }),
      {
        className: i,
        color: o = 'primary',
        disableShrink: r = !1,
        enableTrackSlot: l = !1,
        size: s = 40,
        style: u,
        thickness: c = 3.6,
        value: f = 0,
        variant: d = 'indeterminate',
        ...g
      } = n,
      _ = {
        ...n,
        color: o,
        disableShrink: r,
        size: s,
        thickness: c,
        value: f,
        variant: d,
        enableTrackSlot: l,
      },
      x = gA(_),
      S = {},
      m = {},
      p = {};
    if (d === 'determinate') {
      const h = 2 * Math.PI * ((La - c) / 2);
      ((S.strokeDasharray = h.toFixed(3)),
        (p['aria-valuenow'] = Math.round(f)),
        (S.strokeDashoffset = `${(((100 - f) / 100) * h).toFixed(3)}px`),
        (m.transform = 'rotate(-90deg)'));
    }
    return w.jsx(pA, {
      className: ee(x.root, i),
      style: { width: s, height: s, ...m, ...u },
      ownerState: _,
      ref: a,
      role: 'progressbar',
      ...p,
      ...g,
      children: w.jsxs(mA, {
        className: x.svg,
        ownerState: _,
        viewBox: `${La / 2} ${La / 2} ${La} ${La}`,
        children: [
          l
            ? w.jsx(vA, {
                className: x.track,
                ownerState: _,
                cx: La,
                cy: La,
                r: (La - c) / 2,
                fill: 'none',
                strokeWidth: c,
                'aria-hidden': 'true',
              })
            : null,
          w.jsx(hA, {
            className: x.circle,
            style: S,
            ownerState: _,
            cx: La,
            cy: La,
            r: (La - c) / 2,
            fill: 'none',
            strokeWidth: c,
          }),
        ],
      }),
    });
  }),
  q1 = _A;
function yA(e) {
  return me('MuiIconButton', e);
}
const bA = ge('MuiIconButton', [
    'root',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorError',
    'colorInfo',
    'colorSuccess',
    'colorWarning',
    'edgeStart',
    'edgeEnd',
    'sizeSmall',
    'sizeMedium',
    'sizeLarge',
    'loading',
    'loadingIndicator',
    'loadingWrapper',
  ]),
  O0 = bA,
  SA = (e) => {
    const { classes: t, disabled: a, color: n, edge: i, size: o, loading: r } = e,
      l = {
        root: [
          'root',
          r && 'loading',
          a && 'disabled',
          n !== 'default' && `color${Z(n)}`,
          i && `edge${Z(i)}`,
          `size${Z(o)}`,
        ],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      };
    return he(l, yA, t);
  },
  xA = Y(nm, {
    name: 'MuiIconButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [
        t.root,
        a.loading && t.loading,
        a.color !== 'default' && t[`color${Z(a.color)}`],
        a.edge && t[`edge${Z(a.edge)}`],
        t[`size${Z(a.size)}`],
      ];
    },
  })(
    Oe(({ theme: e }) => ({
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: e.typography.pxToRem(24),
      padding: 8,
      borderRadius: '50%',
      color: (e.vars || e).palette.action.active,
      transition: e.transitions.create('background-color', {
        duration: e.transitions.duration.shortest,
      }),
      variants: [
        {
          props: (t) => !t.disableRipple,
          style: {
            '--IconButton-hoverBg': e.alpha(
              (e.vars || e).palette.action.active,
              (e.vars || e).palette.action.hoverOpacity
            ),
            '&:hover': {
              backgroundColor: 'var(--IconButton-hoverBg)',
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
          },
        },
        { props: { edge: 'start' }, style: { marginLeft: -12 } },
        { props: { edge: 'start', size: 'small' }, style: { marginLeft: -3 } },
        { props: { edge: 'end' }, style: { marginRight: -12 } },
        { props: { edge: 'end', size: 'small' }, style: { marginRight: -3 } },
      ],
    })),
    Oe(({ theme: e }) => ({
      variants: [
        { props: { color: 'inherit' }, style: { color: 'inherit' } },
        ...Object.entries(e.palette)
          .filter(Ia())
          .map(([t]) => ({ props: { color: t }, style: { color: (e.vars || e).palette[t].main } })),
        ...Object.entries(e.palette)
          .filter(Ia())
          .map(([t]) => ({
            props: { color: t },
            style: {
              '--IconButton-hoverBg': e.alpha(
                (e.vars || e).palette[t].main,
                (e.vars || e).palette.action.hoverOpacity
              ),
            },
          })),
        { props: { size: 'small' }, style: { padding: 5, fontSize: e.typography.pxToRem(18) } },
        { props: { size: 'large' }, style: { padding: 12, fontSize: e.typography.pxToRem(28) } },
      ],
      [`&.${O0.disabled}`]: {
        backgroundColor: 'transparent',
        color: (e.vars || e).palette.action.disabled,
      },
      [`&.${O0.loading}`]: { color: 'transparent' },
    }))
  ),
  wA = Y('span', { name: 'MuiIconButton', slot: 'LoadingIndicator' })(({ theme: e }) => ({
    display: 'none',
    position: 'absolute',
    visibility: 'visible',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: (e.vars || e).palette.action.disabled,
    variants: [{ props: { loading: !0 }, style: { display: 'flex' } }],
  })),
  CA = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiIconButton' }),
      {
        edge: i = !1,
        children: o,
        className: r,
        color: l = 'default',
        disabled: s = !1,
        disableFocusRipple: u = !1,
        size: c = 'medium',
        id: f,
        loading: d = null,
        loadingIndicator: g,
        ..._
      } = n,
      x = Gc(f),
      S = g ?? w.jsx(q1, { 'aria-labelledby': x, color: 'inherit', size: 16 }),
      m = {
        ...n,
        edge: i,
        color: l,
        disabled: s,
        disableFocusRipple: u,
        loading: d,
        loadingIndicator: S,
        size: c,
      },
      p = SA(m);
    return w.jsxs(xA, {
      id: d ? x : f,
      className: ee(p.root, r),
      centerRipple: !0,
      focusRipple: !u,
      disabled: s || d,
      ref: a,
      ..._,
      ownerState: m,
      children: [
        typeof d == 'boolean' &&
          w.jsx('span', {
            className: p.loadingWrapper,
            style: { display: 'contents' },
            children: w.jsx(wA, { className: p.loadingIndicator, ownerState: m, children: d && S }),
          }),
        o,
      ],
    });
  }),
  Id = CA;
function kA(e) {
  return me('MuiTypography', e);
}
ge('MuiTypography', [
  'root',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'inherit',
  'button',
  'caption',
  'overline',
  'alignLeft',
  'alignRight',
  'alignCenter',
  'alignJustify',
  'noWrap',
  'gutterBottom',
  'paragraph',
]);
const EA = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  FA = CR(),
  TA = (e) => {
    const { align: t, gutterBottom: a, noWrap: n, paragraph: i, variant: o, classes: r } = e,
      l = {
        root: [
          'root',
          o,
          e.align !== 'inherit' && `align${Z(t)}`,
          a && 'gutterBottom',
          n && 'noWrap',
          i && 'paragraph',
        ],
      };
    return he(l, kA, r);
  },
  RA = Y('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [
        t.root,
        a.variant && t[a.variant],
        a.align !== 'inherit' && t[`align${Z(a.align)}`],
        a.noWrap && t.noWrap,
        a.gutterBottom && t.gutterBottom,
        a.paragraph && t.paragraph,
      ];
    },
  })(
    Oe(({ theme: e }) => {
      var t;
      return {
        margin: 0,
        variants: [
          {
            props: { variant: 'inherit' },
            style: { font: 'inherit', lineHeight: 'inherit', letterSpacing: 'inherit' },
          },
          ...Object.entries(e.typography)
            .filter(([a, n]) => a !== 'inherit' && n && typeof n == 'object')
            .map(([a, n]) => ({ props: { variant: a }, style: n })),
          ...Object.entries(e.palette)
            .filter(Ia())
            .map(([a]) => ({
              props: { color: a },
              style: { color: (e.vars || e).palette[a].main },
            })),
          ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {})
            .filter(([, a]) => typeof a == 'string')
            .map(([a]) => ({
              props: { color: `text${Z(a)}` },
              style: { color: (e.vars || e).palette.text[a] },
            })),
          {
            props: ({ ownerState: a }) => a.align !== 'inherit',
            style: { textAlign: 'var(--Typography-textAlign)' },
          },
          {
            props: ({ ownerState: a }) => a.noWrap,
            style: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
          },
          { props: ({ ownerState: a }) => a.gutterBottom, style: { marginBottom: '0.35em' } },
          { props: ({ ownerState: a }) => a.paragraph, style: { marginBottom: 16 } },
        ],
      };
    })
  ),
  N0 = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p',
  },
  AA = y.forwardRef(function (t, a) {
    const { color: n, ...i } = _e({ props: t, name: 'MuiTypography' }),
      o = !EA[n],
      r = FA({ ...i, ...(o && { color: n }) }),
      {
        align: l = 'inherit',
        className: s,
        component: u,
        gutterBottom: c = !1,
        noWrap: f = !1,
        paragraph: d = !1,
        variant: g = 'body1',
        variantMapping: _ = N0,
        ...x
      } = r,
      S = {
        ...r,
        align: l,
        color: n,
        className: s,
        component: u,
        gutterBottom: c,
        noWrap: f,
        paragraph: d,
        variant: g,
        variantMapping: _,
      },
      m = u || (d ? 'p' : _[g] || N0[g]) || 'span',
      p = TA(S);
    return w.jsx(RA, {
      as: m,
      ref: a,
      className: ee(p.root, s),
      ...x,
      ownerState: S,
      style: { ...(l !== 'inherit' && { '--Typography-textAlign': l }), ...x.style },
    });
  }),
  Xe = AA;
function MA(e) {
  return me('MuiAppBar', e);
}
ge('MuiAppBar', [
  'root',
  'positionFixed',
  'positionAbsolute',
  'positionSticky',
  'positionStatic',
  'positionRelative',
  'colorDefault',
  'colorPrimary',
  'colorSecondary',
  'colorInherit',
  'colorTransparent',
  'colorError',
  'colorInfo',
  'colorSuccess',
  'colorWarning',
]);
const OA = (e) => {
    const { color: t, position: a, classes: n } = e,
      i = { root: ['root', `color${Z(t)}`, `position${Z(a)}`] };
    return he(i, MA, n);
  },
  z0 = (e, t) => (e ? `${e == null ? void 0 : e.replace(')', '')}, ${t})` : t),
  NA = Y(Pc, {
    name: 'MuiAppBar',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [t.root, t[`position${Z(a.position)}`], t[`color${Z(a.color)}`]];
    },
  })(
    Oe(({ theme: e }) => ({
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      flexShrink: 0,
      variants: [
        {
          props: { position: 'fixed' },
          style: {
            position: 'fixed',
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: 'auto',
            right: 0,
            '@media print': { position: 'absolute' },
          },
        },
        {
          props: { position: 'absolute' },
          style: {
            position: 'absolute',
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: 'auto',
            right: 0,
          },
        },
        {
          props: { position: 'sticky' },
          style: {
            position: 'sticky',
            zIndex: (e.vars || e).zIndex.appBar,
            top: 0,
            left: 'auto',
            right: 0,
          },
        },
        { props: { position: 'static' }, style: { position: 'static' } },
        { props: { position: 'relative' }, style: { position: 'relative' } },
        {
          props: { color: 'inherit' },
          style: { '--AppBar-color': 'inherit', color: 'var(--AppBar-color)' },
        },
        {
          props: { color: 'default' },
          style: {
            '--AppBar-background': e.vars ? e.vars.palette.AppBar.defaultBg : e.palette.grey[100],
            '--AppBar-color': e.vars
              ? e.vars.palette.text.primary
              : e.palette.getContrastText(e.palette.grey[100]),
            ...e.applyStyles('dark', {
              '--AppBar-background': e.vars ? e.vars.palette.AppBar.defaultBg : e.palette.grey[900],
              '--AppBar-color': e.vars
                ? e.vars.palette.text.primary
                : e.palette.getContrastText(e.palette.grey[900]),
            }),
          },
        },
        ...Object.entries(e.palette)
          .filter(Ia(['contrastText']))
          .map(([t]) => ({
            props: { color: t },
            style: {
              '--AppBar-background': (e.vars ?? e).palette[t].main,
              '--AppBar-color': (e.vars ?? e).palette[t].contrastText,
            },
          })),
        {
          props: (t) => t.enableColorOnDark === !0 && !['inherit', 'transparent'].includes(t.color),
          style: { backgroundColor: 'var(--AppBar-background)', color: 'var(--AppBar-color)' },
        },
        {
          props: (t) => t.enableColorOnDark === !1 && !['inherit', 'transparent'].includes(t.color),
          style: {
            backgroundColor: 'var(--AppBar-background)',
            color: 'var(--AppBar-color)',
            ...e.applyStyles('dark', {
              backgroundColor: e.vars
                ? z0(e.vars.palette.AppBar.darkBg, 'var(--AppBar-background)')
                : null,
              color: e.vars ? z0(e.vars.palette.AppBar.darkColor, 'var(--AppBar-color)') : null,
            }),
          },
        },
        {
          props: { color: 'transparent' },
          style: {
            '--AppBar-background': 'transparent',
            '--AppBar-color': 'inherit',
            backgroundColor: 'var(--AppBar-background)',
            color: 'var(--AppBar-color)',
            ...e.applyStyles('dark', { backgroundImage: 'none' }),
          },
        },
      ],
    }))
  ),
  zA = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiAppBar' }),
      {
        className: i,
        color: o = 'primary',
        enableColorOnDark: r = !1,
        position: l = 'fixed',
        ...s
      } = n,
      u = { ...n, color: o, position: l, enableColorOnDark: r },
      c = OA(u);
    return w.jsx(NA, {
      square: !0,
      component: 'header',
      ownerState: u,
      elevation: 4,
      className: ee(c.root, i, l === 'fixed' && 'mui-fixed'),
      ref: a,
      ...s,
    });
  }),
  BA = zA;
function LA(e) {
  var f;
  const {
      elementType: t,
      externalSlotProps: a,
      ownerState: n,
      skipResolvingSlotProps: i = !1,
      ...o
    } = e,
    r = i ? {} : G1(a, n),
    { props: l, internalRef: s } = P1({ ...o, externalSlotProps: r }),
    u = Ut(s, r == null ? void 0 : r.ref, (f = e.additionalProps) == null ? void 0 : f.ref);
  return V1(t, { ...l, ref: u }, n);
}
function sr(e) {
  var t;
  return parseInt(y.version, 10) >= 19
    ? ((t = e == null ? void 0 : e.props) == null ? void 0 : t.ref) || null
    : (e == null ? void 0 : e.ref) || null;
}
function $A(e) {
  return typeof e == 'function' ? e() : e;
}
const DA = y.forwardRef(function (t, a) {
    const { children: n, container: i, disablePortal: o = !1 } = t,
      [r, l] = y.useState(null),
      s = Ut(y.isValidElement(n) ? sr(n) : null, a);
    if (
      (ui(() => {
        o || l($A(i) || document.body);
      }, [i, o]),
      ui(() => {
        if (r && !o)
          return (
            F0(a, r),
            () => {
              F0(a, null);
            }
          );
      }, [a, r, o]),
      o)
    ) {
      if (y.isValidElement(n)) {
        const u = { ref: s };
        return y.cloneElement(n, u);
      }
      return n;
    }
    return r && Tg.createPortal(n, r);
  }),
  jA = DA;
function bs(e) {
  return parseInt(e, 10) || 0;
}
const UA = {
  shadow: {
    visibility: 'hidden',
    position: 'absolute',
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    transform: 'translateZ(0)',
  },
};
function HA(e) {
  for (const t in e) return !1;
  return !0;
}
function B0(e) {
  return HA(e) || (e.outerHeightStyle === 0 && !e.overflowing);
}
const VA = y.forwardRef(function (t, a) {
    const { onChange: n, maxRows: i, minRows: o = 1, style: r, value: l, ...s } = t,
      { current: u } = y.useRef(l != null),
      c = y.useRef(null),
      f = Ut(a, c),
      d = y.useRef(null),
      g = y.useRef(null),
      _ = y.useCallback(() => {
        const h = c.current,
          v = g.current;
        if (!h || !v) return;
        const k = Ga(h).getComputedStyle(h);
        if (k.width === '0px') return { outerHeightStyle: 0, overflowing: !1 };
        ((v.style.width = k.width),
          (v.value = h.value || t.placeholder || 'x'),
          v.value.slice(-1) ===
            `
` && (v.value += ' '));
        const E = k.boxSizing,
          M = bs(k.paddingBottom) + bs(k.paddingTop),
          z = bs(k.borderBottomWidth) + bs(k.borderTopWidth),
          $ = v.scrollHeight;
        v.value = 'x';
        const V = v.scrollHeight;
        let b = $;
        (o && (b = Math.max(Number(o) * V, b)),
          i && (b = Math.min(Number(i) * V, b)),
          (b = Math.max(b, V)));
        const O = b + (E === 'border-box' ? M + z : 0),
          A = Math.abs(b - $) <= 1;
        return { outerHeightStyle: O, overflowing: A };
      }, [i, o, t.placeholder]),
      x = Oi(() => {
        const h = c.current,
          v = _();
        if (!h || !v || B0(v)) return !1;
        const C = v.outerHeightStyle;
        return d.current != null && d.current !== C;
      }),
      S = y.useCallback(() => {
        const h = c.current,
          v = _();
        if (!h || !v || B0(v)) return;
        const C = v.outerHeightStyle;
        (d.current !== C && ((d.current = C), (h.style.height = `${C}px`)),
          (h.style.overflow = v.overflowing ? 'hidden' : ''));
      }, [_]),
      m = y.useRef(-1);
    (ui(() => {
      const h = Zp(S),
        v = c == null ? void 0 : c.current;
      if (!v) return;
      const C = Ga(v);
      C.addEventListener('resize', h);
      let k;
      return (
        typeof ResizeObserver < 'u' &&
          ((k = new ResizeObserver(() => {
            x() &&
              (k.unobserve(v),
              cancelAnimationFrame(m.current),
              S(),
              (m.current = requestAnimationFrame(() => {
                k.observe(v);
              })));
          })),
          k.observe(v)),
        () => {
          (h.clear(),
            cancelAnimationFrame(m.current),
            C.removeEventListener('resize', h),
            k && k.disconnect());
        }
      );
    }, [_, S, x]),
      ui(() => {
        S();
      }));
    const p = (h) => {
      u || S();
      const v = h.target,
        C = v.value.length,
        k = v.value.endsWith(`
`),
        E = v.selectionStart === C;
      (k && E && v.setSelectionRange(C, C), n && n(h));
    };
    return w.jsxs(y.Fragment, {
      children: [
        w.jsx('textarea', { value: l, onChange: p, ref: f, rows: o, style: r, ...s }),
        w.jsx('textarea', {
          'aria-hidden': !0,
          className: t.className,
          readOnly: !0,
          ref: g,
          tabIndex: -1,
          style: { ...UA.shadow, ...r, paddingTop: 0, paddingBottom: 0 },
        }),
      ],
    });
  }),
  GA = VA;
function ur({ props: e, states: t, muiFormControl: a }) {
  return t.reduce((n, i) => ((n[i] = e[i]), a && typeof e[i] > 'u' && (n[i] = a[i]), n), {});
}
const IA = y.createContext(void 0),
  im = IA;
function cr() {
  return y.useContext(im);
}
function L0(e) {
  return e != null && !(Array.isArray(e) && e.length === 0);
}
function Ou(e, t = !1) {
  return (
    e && ((L0(e.value) && e.value !== '') || (t && L0(e.defaultValue) && e.defaultValue !== ''))
  );
}
function PA(e) {
  return e.startAdornment;
}
function qA(e) {
  return me('MuiInputBase', e);
}
const KA = ge('MuiInputBase', [
    'root',
    'formControl',
    'focused',
    'disabled',
    'adornedStart',
    'adornedEnd',
    'error',
    'sizeSmall',
    'multiline',
    'colorSecondary',
    'fullWidth',
    'hiddenLabel',
    'readOnly',
    'input',
    'inputSizeSmall',
    'inputMultiline',
    'inputTypeSearch',
    'inputAdornedStart',
    'inputAdornedEnd',
    'inputHiddenLabel',
  ]),
  Yo = KA;
var $0;
const qc = (e, t) => {
    const { ownerState: a } = e;
    return [
      t.root,
      a.formControl && t.formControl,
      a.startAdornment && t.adornedStart,
      a.endAdornment && t.adornedEnd,
      a.error && t.error,
      a.size === 'small' && t.sizeSmall,
      a.multiline && t.multiline,
      a.color && t[`color${Z(a.color)}`],
      a.fullWidth && t.fullWidth,
      a.hiddenLabel && t.hiddenLabel,
    ];
  },
  Kc = (e, t) => {
    const { ownerState: a } = e;
    return [
      t.input,
      a.size === 'small' && t.inputSizeSmall,
      a.multiline && t.inputMultiline,
      a.type === 'search' && t.inputTypeSearch,
      a.startAdornment && t.inputAdornedStart,
      a.endAdornment && t.inputAdornedEnd,
      a.hiddenLabel && t.inputHiddenLabel,
    ];
  },
  YA = (e) => {
    const {
        classes: t,
        color: a,
        disabled: n,
        error: i,
        endAdornment: o,
        focused: r,
        formControl: l,
        fullWidth: s,
        hiddenLabel: u,
        multiline: c,
        readOnly: f,
        size: d,
        startAdornment: g,
        type: _,
      } = e,
      x = {
        root: [
          'root',
          `color${Z(a)}`,
          n && 'disabled',
          i && 'error',
          s && 'fullWidth',
          r && 'focused',
          l && 'formControl',
          d && d !== 'medium' && `size${Z(d)}`,
          c && 'multiline',
          g && 'adornedStart',
          o && 'adornedEnd',
          u && 'hiddenLabel',
          f && 'readOnly',
        ],
        input: [
          'input',
          n && 'disabled',
          _ === 'search' && 'inputTypeSearch',
          c && 'inputMultiline',
          d === 'small' && 'inputSizeSmall',
          u && 'inputHiddenLabel',
          g && 'inputAdornedStart',
          o && 'inputAdornedEnd',
          f && 'readOnly',
        ],
      };
    return he(x, qA, t);
  },
  Yc = Y('div', { name: 'MuiInputBase', slot: 'Root', overridesResolver: qc })(
    Oe(({ theme: e }) => ({
      ...e.typography.body1,
      color: (e.vars || e).palette.text.primary,
      lineHeight: '1.4375em',
      boxSizing: 'border-box',
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      [`&.${Yo.disabled}`]: { color: (e.vars || e).palette.text.disabled, cursor: 'default' },
      variants: [
        { props: ({ ownerState: t }) => t.multiline, style: { padding: '4px 0 5px' } },
        {
          props: ({ ownerState: t, size: a }) => t.multiline && a === 'small',
          style: { paddingTop: 1 },
        },
        { props: ({ ownerState: t }) => t.fullWidth, style: { width: '100%' } },
      ],
    }))
  ),
  Xc = Y('input', { name: 'MuiInputBase', slot: 'Input', overridesResolver: Kc })(
    Oe(({ theme: e }) => {
      const t = e.palette.mode === 'light',
        a = {
          color: 'currentColor',
          ...(e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: t ? 0.42 : 0.5 }),
          transition: e.transitions.create('opacity', { duration: e.transitions.duration.shorter }),
        },
        n = { opacity: '0 !important' },
        i = e.vars ? { opacity: e.vars.opacity.inputPlaceholder } : { opacity: t ? 0.42 : 0.5 };
      return {
        font: 'inherit',
        letterSpacing: 'inherit',
        color: 'currentColor',
        padding: '4px 0 5px',
        border: 0,
        boxSizing: 'content-box',
        background: 'none',
        height: '1.4375em',
        margin: 0,
        WebkitTapHighlightColor: 'transparent',
        display: 'block',
        minWidth: 0,
        width: '100%',
        '&::-webkit-input-placeholder': a,
        '&::-moz-placeholder': a,
        '&::-ms-input-placeholder': a,
        '&:focus': { outline: 0 },
        '&:invalid': { boxShadow: 'none' },
        '&::-webkit-search-decoration': { WebkitAppearance: 'none' },
        [`label[data-shrink=false] + .${Yo.formControl} &`]: {
          '&::-webkit-input-placeholder': n,
          '&::-moz-placeholder': n,
          '&::-ms-input-placeholder': n,
          '&:focus::-webkit-input-placeholder': i,
          '&:focus::-moz-placeholder': i,
          '&:focus::-ms-input-placeholder': i,
        },
        [`&.${Yo.disabled}`]: {
          opacity: 1,
          WebkitTextFillColor: (e.vars || e).palette.text.disabled,
        },
        variants: [
          {
            props: ({ ownerState: o }) => !o.disableInjectingGlobalStyles,
            style: {
              animationName: 'mui-auto-fill-cancel',
              animationDuration: '10ms',
              '&:-webkit-autofill': { animationDuration: '5000s', animationName: 'mui-auto-fill' },
            },
          },
          { props: { size: 'small' }, style: { paddingTop: 1 } },
          {
            props: ({ ownerState: o }) => o.multiline,
            style: { height: 'auto', resize: 'none', padding: 0, paddingTop: 0 },
          },
          { props: { type: 'search' }, style: { MozAppearance: 'textfield' } },
        ],
      };
    })
  ),
  D0 = wR({
    '@keyframes mui-auto-fill': { from: { display: 'block' } },
    '@keyframes mui-auto-fill-cancel': { from: { display: 'block' } },
  }),
  XA = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiInputBase' }),
      {
        'aria-describedby': i,
        autoComplete: o,
        autoFocus: r,
        className: l,
        color: s,
        components: u = {},
        componentsProps: c = {},
        defaultValue: f,
        disabled: d,
        disableInjectingGlobalStyles: g,
        endAdornment: _,
        error: x,
        fullWidth: S = !1,
        id: m,
        inputComponent: p = 'input',
        inputProps: h = {},
        inputRef: v,
        margin: C,
        maxRows: k,
        minRows: E,
        multiline: M = !1,
        name: z,
        onBlur: $,
        onChange: V,
        onClick: b,
        onFocus: O,
        onKeyDown: A,
        onKeyUp: N,
        placeholder: R,
        readOnly: j,
        renderSuffix: B,
        rows: U,
        size: q,
        slotProps: X = {},
        slots: ye = {},
        startAdornment: le,
        type: Ee = 'text',
        value: je,
        ...Je
      } = n,
      Ze = h.value != null ? h.value : je,
      { current: At } = y.useRef(Ze != null),
      Le = y.useRef(),
      te = y.useCallback((Se) => {}, []),
      se = Ut(Le, v, h.ref, te),
      [Fe, St] = y.useState(!1),
      ie = cr(),
      be = ur({
        props: n,
        muiFormControl: ie,
        states: ['color', 'disabled', 'error', 'hiddenLabel', 'size', 'required', 'filled'],
      });
    ((be.focused = ie ? ie.focused : Fe),
      y.useEffect(() => {
        !ie && d && Fe && (St(!1), $ && $());
      }, [ie, d, Fe, $]));
    const xt = ie && ie.onFilled,
      Mt = ie && ie.onEmpty,
      st = y.useCallback(
        (Se) => {
          Ou(Se) ? xt && xt() : Mt && Mt();
        },
        [xt, Mt]
      );
    ui(() => {
      At && st({ value: Ze });
    }, [Ze, st, At]);
    const ya = (Se) => {
        (O && O(Se), h.onFocus && h.onFocus(Se), ie && ie.onFocus ? ie.onFocus(Se) : St(!0));
      },
      Kt = (Se) => {
        ($ && $(Se), h.onBlur && h.onBlur(Se), ie && ie.onBlur ? ie.onBlur(Se) : St(!1));
      },
      F = (Se, ...wt) => {
        if (!At) {
          const Ln = Se.target || Le.current;
          if (Ln == null) throw new Error(Nn(1));
          st({ value: Ln.value });
        }
        (h.onChange && h.onChange(Se, ...wt), V && V(Se, ...wt));
      };
    y.useEffect(() => {
      st(Le.current);
    }, []);
    const T = (Se) => {
      (Le.current && Se.currentTarget === Se.target && Le.current.focus(), b && b(Se));
    };
    let L = p,
      I = h;
    M &&
      L === 'input' &&
      (U
        ? (I = { type: void 0, minRows: U, maxRows: U, ...I })
        : (I = { type: void 0, maxRows: k, minRows: E, ...I }),
      (L = GA));
    const P = (Se) => {
      st(Se.animationName === 'mui-auto-fill-cancel' ? Le.current : { value: 'x' });
    };
    y.useEffect(() => {
      ie && ie.setAdornedStart(!!le);
    }, [ie, le]);
    const G = {
        ...n,
        color: be.color || 'primary',
        disabled: be.disabled,
        endAdornment: _,
        error: be.error,
        focused: be.focused,
        formControl: ie,
        fullWidth: S,
        hiddenLabel: be.hiddenLabel,
        multiline: M,
        size: be.size,
        startAdornment: le,
        type: Ee,
      },
      Q = YA(G),
      ve = ye.root || u.Root || Yc,
      de = X.root || c.root || {},
      et = ye.input || u.Input || Xc;
    return (
      (I = { ...I, ...(X.input ?? c.input) }),
      w.jsxs(y.Fragment, {
        children: [
          !g && typeof D0 == 'function' && ($0 || ($0 = w.jsx(D0, {}))),
          w.jsxs(ve, {
            ...de,
            ref: a,
            onClick: T,
            ...Je,
            ...(!Ru(ve) && { ownerState: { ...G, ...de.ownerState } }),
            className: ee(Q.root, de.className, l, j && 'MuiInputBase-readOnly'),
            children: [
              le,
              w.jsx(im.Provider, {
                value: null,
                children: w.jsx(et, {
                  'aria-invalid': be.error,
                  'aria-describedby': i,
                  autoComplete: o,
                  autoFocus: r,
                  defaultValue: f,
                  disabled: be.disabled,
                  id: m,
                  onAnimationStart: P,
                  name: z,
                  placeholder: R,
                  readOnly: j,
                  required: be.required,
                  rows: U,
                  value: Ze,
                  onKeyDown: A,
                  onKeyUp: N,
                  type: Ee,
                  ...I,
                  ...(!Ru(et) && { as: L, ownerState: { ...G, ...I.ownerState } }),
                  ref: se,
                  className: ee(Q.input, I.className, j && 'MuiInputBase-readOnly'),
                  onBlur: Kt,
                  onChange: F,
                  onFocus: ya,
                }),
              }),
              _,
              B ? B({ ...be, startAdornment: le }) : null,
            ],
          }),
        ],
      })
    );
  }),
  om = XA;
function QA(e) {
  return me('MuiInput', e);
}
const ZA = { ...Yo, ...ge('MuiInput', ['root', 'underline', 'input']) },
  Er = ZA;
function WA(e) {
  return me('MuiOutlinedInput', e);
}
const JA = { ...Yo, ...ge('MuiOutlinedInput', ['root', 'notchedOutline', 'input']) },
  Ka = JA;
function e4(e) {
  return me('MuiFilledInput', e);
}
const t4 = {
    ...Yo,
    ...ge('MuiFilledInput', [
      'root',
      'underline',
      'input',
      'adornedStart',
      'adornedEnd',
      'sizeSmall',
      'multiline',
      'hiddenLabel',
    ]),
  },
  hi = t4,
  a4 = Ql(w.jsx('path', { d: 'M7 10l5 5 5-5z' })),
  n4 = { entering: { opacity: 1 }, entered: { opacity: 1 } },
  i4 = y.forwardRef(function (t, a) {
    const n = Pi(),
      i = {
        enter: n.transitions.duration.enteringScreen,
        exit: n.transitions.duration.leavingScreen,
      },
      {
        addEndListener: o,
        appear: r = !0,
        children: l,
        easing: s,
        in: u,
        onEnter: c,
        onEntered: f,
        onEntering: d,
        onExit: g,
        onExited: _,
        onExiting: x,
        style: S,
        timeout: m = i,
        TransitionComponent: p = Wp,
        ...h
      } = t,
      v = y.useRef(null),
      C = Ut(v, sr(l), a),
      k = (A) => (N) => {
        if (A) {
          const R = v.current;
          N === void 0 ? A(R) : A(R, N);
        }
      },
      E = k(d),
      M = k((A, N) => {
        am(A);
        const R = Ko({ style: S, timeout: m, easing: s }, { mode: 'enter' });
        ((A.style.webkitTransition = n.transitions.create('opacity', R)),
          (A.style.transition = n.transitions.create('opacity', R)),
          c && c(A, N));
      }),
      z = k(f),
      $ = k(x),
      V = k((A) => {
        const N = Ko({ style: S, timeout: m, easing: s }, { mode: 'exit' });
        ((A.style.webkitTransition = n.transitions.create('opacity', N)),
          (A.style.transition = n.transitions.create('opacity', N)),
          g && g(A));
      }),
      b = k(_),
      O = (A) => {
        o && o(v.current, A);
      };
    return w.jsx(p, {
      appear: r,
      in: u,
      nodeRef: v,
      onEnter: M,
      onEntered: z,
      onEntering: E,
      onExit: V,
      onExited: b,
      onExiting: $,
      addEndListener: O,
      timeout: m,
      ...h,
      children: (A, { ownerState: N, ...R }) =>
        y.cloneElement(l, {
          style: {
            opacity: 0,
            visibility: A === 'exited' && !u ? 'hidden' : void 0,
            ...n4[A],
            ...S,
            ...l.props.style,
          },
          ref: C,
          ...R,
        }),
    });
  }),
  o4 = i4;
function r4(e) {
  return me('MuiBackdrop', e);
}
ge('MuiBackdrop', ['root', 'invisible']);
const l4 = (e) => {
    const { classes: t, invisible: a } = e;
    return he({ root: ['root', a && 'invisible'] }, r4, t);
  },
  s4 = Y('div', {
    name: 'MuiBackdrop',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [t.root, a.invisible && t.invisible];
    },
  })({
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent',
    variants: [{ props: { invisible: !0 }, style: { backgroundColor: 'transparent' } }],
  }),
  u4 = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiBackdrop' }),
      {
        children: i,
        className: o,
        component: r = 'div',
        invisible: l = !1,
        open: s,
        components: u = {},
        componentsProps: c = {},
        slotProps: f = {},
        slots: d = {},
        TransitionComponent: g,
        transitionDuration: _,
        ...x
      } = n,
      S = { ...n, component: r, invisible: l },
      m = l4(S),
      p = { transition: g, root: u.Root, ...d },
      h = { ...c, ...f },
      v = { component: r, slots: p, slotProps: h },
      [C, k] = ht('root', {
        elementType: s4,
        externalForwardedProps: v,
        className: ee(m.root, o),
        ownerState: S,
      }),
      [E, M] = ht('transition', { elementType: o4, externalForwardedProps: v, ownerState: S });
    return w.jsx(E, {
      in: s,
      timeout: _,
      ...x,
      ...M,
      children: w.jsx(C, { 'aria-hidden': !0, ...k, ref: a, children: i }),
    });
  }),
  c4 = u4,
  d4 = ge('MuiBox', ['root']),
  f4 = d4,
  g4 = z1(),
  p4 = BF({
    themeId: lc,
    defaultTheme: g4,
    defaultClassName: f4.root,
    generateClassName: S1.generate,
  }),
  kt = p4;
function m4(e) {
  return me('MuiButton', e);
}
const h4 = ge('MuiButton', [
    'root',
    'text',
    'textInherit',
    'textPrimary',
    'textSecondary',
    'textSuccess',
    'textError',
    'textInfo',
    'textWarning',
    'outlined',
    'outlinedInherit',
    'outlinedPrimary',
    'outlinedSecondary',
    'outlinedSuccess',
    'outlinedError',
    'outlinedInfo',
    'outlinedWarning',
    'contained',
    'containedInherit',
    'containedPrimary',
    'containedSecondary',
    'containedSuccess',
    'containedError',
    'containedInfo',
    'containedWarning',
    'disableElevation',
    'focusVisible',
    'disabled',
    'colorInherit',
    'colorPrimary',
    'colorSecondary',
    'colorSuccess',
    'colorError',
    'colorInfo',
    'colorWarning',
    'textSizeSmall',
    'textSizeMedium',
    'textSizeLarge',
    'outlinedSizeSmall',
    'outlinedSizeMedium',
    'outlinedSizeLarge',
    'containedSizeSmall',
    'containedSizeMedium',
    'containedSizeLarge',
    'sizeMedium',
    'sizeSmall',
    'sizeLarge',
    'fullWidth',
    'startIcon',
    'endIcon',
    'icon',
    'iconSizeSmall',
    'iconSizeMedium',
    'iconSizeLarge',
    'loading',
    'loadingWrapper',
    'loadingIconPlaceholder',
    'loadingIndicator',
    'loadingPositionCenter',
    'loadingPositionStart',
    'loadingPositionEnd',
  ]),
  vi = h4,
  v4 = y.createContext({}),
  _4 = v4,
  y4 = y.createContext(void 0),
  b4 = y4,
  S4 = (e) => {
    const {
        color: t,
        disableElevation: a,
        fullWidth: n,
        size: i,
        variant: o,
        loading: r,
        loadingPosition: l,
        classes: s,
      } = e,
      u = {
        root: [
          'root',
          r && 'loading',
          o,
          `${o}${Z(t)}`,
          `size${Z(i)}`,
          `${o}Size${Z(i)}`,
          `color${Z(t)}`,
          a && 'disableElevation',
          n && 'fullWidth',
          r && `loadingPosition${Z(l)}`,
        ],
        startIcon: ['icon', 'startIcon', `iconSize${Z(i)}`],
        endIcon: ['icon', 'endIcon', `iconSize${Z(i)}`],
        loadingIndicator: ['loadingIndicator'],
        loadingWrapper: ['loadingWrapper'],
      },
      c = he(u, m4, s);
    return { ...s, ...c };
  },
  K1 = [
    { props: { size: 'small' }, style: { '& > *:nth-of-type(1)': { fontSize: 18 } } },
    { props: { size: 'medium' }, style: { '& > *:nth-of-type(1)': { fontSize: 20 } } },
    { props: { size: 'large' }, style: { '& > *:nth-of-type(1)': { fontSize: 22 } } },
  ],
  x4 = Y(nm, {
    shouldForwardProp: (e) => _a(e) || e === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [
        t.root,
        t[a.variant],
        t[`${a.variant}${Z(a.color)}`],
        t[`size${Z(a.size)}`],
        t[`${a.variant}Size${Z(a.size)}`],
        a.color === 'inherit' && t.colorInherit,
        a.disableElevation && t.disableElevation,
        a.fullWidth && t.fullWidth,
        a.loading && t.loading,
      ];
    },
  })(
    Oe(({ theme: e }) => {
      const t = e.palette.mode === 'light' ? e.palette.grey[300] : e.palette.grey[800],
        a = e.palette.mode === 'light' ? e.palette.grey.A100 : e.palette.grey[700];
      return {
        ...e.typography.button,
        minWidth: 64,
        padding: '6px 16px',
        border: 0,
        borderRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create(
          ['background-color', 'box-shadow', 'border-color', 'color'],
          { duration: e.transitions.duration.short }
        ),
        '&:hover': { textDecoration: 'none' },
        [`&.${vi.disabled}`]: { color: (e.vars || e).palette.action.disabled },
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              color: 'var(--variant-containedColor)',
              backgroundColor: 'var(--variant-containedBg)',
              boxShadow: (e.vars || e).shadows[2],
              '&:hover': {
                boxShadow: (e.vars || e).shadows[4],
                '@media (hover: none)': { boxShadow: (e.vars || e).shadows[2] },
              },
              '&:active': { boxShadow: (e.vars || e).shadows[8] },
              [`&.${vi.focusVisible}`]: { boxShadow: (e.vars || e).shadows[6] },
              [`&.${vi.disabled}`]: {
                color: (e.vars || e).palette.action.disabled,
                boxShadow: (e.vars || e).shadows[0],
                backgroundColor: (e.vars || e).palette.action.disabledBackground,
              },
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              padding: '5px 15px',
              border: '1px solid currentColor',
              borderColor: 'var(--variant-outlinedBorder, currentColor)',
              backgroundColor: 'var(--variant-outlinedBg)',
              color: 'var(--variant-outlinedColor)',
              [`&.${vi.disabled}`]: {
                border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`,
              },
            },
          },
          {
            props: { variant: 'text' },
            style: {
              padding: '6px 8px',
              color: 'var(--variant-textColor)',
              backgroundColor: 'var(--variant-textBg)',
            },
          },
          ...Object.entries(e.palette)
            .filter(Ia())
            .map(([n]) => ({
              props: { color: n },
              style: {
                '--variant-textColor': (e.vars || e).palette[n].main,
                '--variant-outlinedColor': (e.vars || e).palette[n].main,
                '--variant-outlinedBorder': e.alpha((e.vars || e).palette[n].main, 0.5),
                '--variant-containedColor': (e.vars || e).palette[n].contrastText,
                '--variant-containedBg': (e.vars || e).palette[n].main,
                '@media (hover: hover)': {
                  '&:hover': {
                    '--variant-containedBg': (e.vars || e).palette[n].dark,
                    '--variant-textBg': e.alpha(
                      (e.vars || e).palette[n].main,
                      (e.vars || e).palette.action.hoverOpacity
                    ),
                    '--variant-outlinedBorder': (e.vars || e).palette[n].main,
                    '--variant-outlinedBg': e.alpha(
                      (e.vars || e).palette[n].main,
                      (e.vars || e).palette.action.hoverOpacity
                    ),
                  },
                },
              },
            })),
          {
            props: { color: 'inherit' },
            style: {
              color: 'inherit',
              borderColor: 'currentColor',
              '--variant-containedBg': e.vars ? e.vars.palette.Button.inheritContainedBg : t,
              '@media (hover: hover)': {
                '&:hover': {
                  '--variant-containedBg': e.vars
                    ? e.vars.palette.Button.inheritContainedHoverBg
                    : a,
                  '--variant-textBg': e.alpha(
                    (e.vars || e).palette.text.primary,
                    (e.vars || e).palette.action.hoverOpacity
                  ),
                  '--variant-outlinedBg': e.alpha(
                    (e.vars || e).palette.text.primary,
                    (e.vars || e).palette.action.hoverOpacity
                  ),
                },
              },
            },
          },
          {
            props: { size: 'small', variant: 'text' },
            style: { padding: '4px 5px', fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'text' },
            style: { padding: '8px 11px', fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: 'small', variant: 'outlined' },
            style: { padding: '3px 9px', fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'outlined' },
            style: { padding: '7px 21px', fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { size: 'small', variant: 'contained' },
            style: { padding: '4px 10px', fontSize: e.typography.pxToRem(13) },
          },
          {
            props: { size: 'large', variant: 'contained' },
            style: { padding: '8px 22px', fontSize: e.typography.pxToRem(15) },
          },
          {
            props: { disableElevation: !0 },
            style: {
              boxShadow: 'none',
              '&:hover': { boxShadow: 'none' },
              [`&.${vi.focusVisible}`]: { boxShadow: 'none' },
              '&:active': { boxShadow: 'none' },
              [`&.${vi.disabled}`]: { boxShadow: 'none' },
            },
          },
          { props: { fullWidth: !0 }, style: { width: '100%' } },
          {
            props: { loadingPosition: 'center' },
            style: {
              transition: e.transitions.create(['background-color', 'box-shadow', 'border-color'], {
                duration: e.transitions.duration.short,
              }),
              [`&.${vi.loading}`]: { color: 'transparent' },
            },
          },
        ],
      };
    })
  ),
  w4 = Y('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [t.startIcon, a.loading && t.startIconLoadingStart, t[`iconSize${Z(a.size)}`]];
    },
  })(({ theme: e }) => ({
    display: 'inherit',
    marginRight: 8,
    marginLeft: -4,
    variants: [
      { props: { size: 'small' }, style: { marginLeft: -2 } },
      {
        props: { loadingPosition: 'start', loading: !0 },
        style: {
          transition: e.transitions.create(['opacity'], { duration: e.transitions.duration.short }),
          opacity: 0,
        },
      },
      {
        props: { loadingPosition: 'start', loading: !0, fullWidth: !0 },
        style: { marginRight: -8 },
      },
      ...K1,
    ],
  })),
  C4 = Y('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [t.endIcon, a.loading && t.endIconLoadingEnd, t[`iconSize${Z(a.size)}`]];
    },
  })(({ theme: e }) => ({
    display: 'inherit',
    marginRight: -4,
    marginLeft: 8,
    variants: [
      { props: { size: 'small' }, style: { marginRight: -2 } },
      {
        props: { loadingPosition: 'end', loading: !0 },
        style: {
          transition: e.transitions.create(['opacity'], { duration: e.transitions.duration.short }),
          opacity: 0,
        },
      },
      { props: { loadingPosition: 'end', loading: !0, fullWidth: !0 }, style: { marginLeft: -8 } },
      ...K1,
    ],
  })),
  k4 = Y('span', { name: 'MuiButton', slot: 'LoadingIndicator' })(({ theme: e }) => ({
    display: 'none',
    position: 'absolute',
    visibility: 'visible',
    variants: [
      { props: { loading: !0 }, style: { display: 'flex' } },
      { props: { loadingPosition: 'start' }, style: { left: 14 } },
      { props: { loadingPosition: 'start', size: 'small' }, style: { left: 10 } },
      { props: { variant: 'text', loadingPosition: 'start' }, style: { left: 6 } },
      {
        props: { loadingPosition: 'center' },
        style: {
          left: '50%',
          transform: 'translate(-50%)',
          color: (e.vars || e).palette.action.disabled,
        },
      },
      { props: { loadingPosition: 'end' }, style: { right: 14 } },
      { props: { loadingPosition: 'end', size: 'small' }, style: { right: 10 } },
      { props: { variant: 'text', loadingPosition: 'end' }, style: { right: 6 } },
      {
        props: { loadingPosition: 'start', fullWidth: !0 },
        style: { position: 'relative', left: -10 },
      },
      {
        props: { loadingPosition: 'end', fullWidth: !0 },
        style: { position: 'relative', right: -10 },
      },
    ],
  })),
  j0 = Y('span', { name: 'MuiButton', slot: 'LoadingIconPlaceholder' })({
    display: 'inline-block',
    width: '1em',
    height: '1em',
  }),
  E4 = y.forwardRef(function (t, a) {
    const n = y.useContext(_4),
      i = y.useContext(b4),
      o = El(n, t),
      r = _e({ props: o, name: 'MuiButton' }),
      {
        children: l,
        color: s = 'primary',
        component: u = 'button',
        className: c,
        disabled: f = !1,
        disableElevation: d = !1,
        disableFocusRipple: g = !1,
        endIcon: _,
        focusVisibleClassName: x,
        fullWidth: S = !1,
        id: m,
        loading: p = null,
        loadingIndicator: h,
        loadingPosition: v = 'center',
        size: C = 'medium',
        startIcon: k,
        type: E,
        variant: M = 'text',
        ...z
      } = r,
      $ = Gc(m),
      V = h ?? w.jsx(q1, { 'aria-labelledby': $, color: 'inherit', size: 16 }),
      b = {
        ...r,
        color: s,
        component: u,
        disabled: f,
        disableElevation: d,
        disableFocusRipple: g,
        fullWidth: S,
        loading: p,
        loadingIndicator: V,
        loadingPosition: v,
        size: C,
        type: E,
        variant: M,
      },
      O = S4(b),
      A =
        (k || (p && v === 'start')) &&
        w.jsx(w4, {
          className: O.startIcon,
          ownerState: b,
          children: k || w.jsx(j0, { className: O.loadingIconPlaceholder, ownerState: b }),
        }),
      N =
        (_ || (p && v === 'end')) &&
        w.jsx(C4, {
          className: O.endIcon,
          ownerState: b,
          children: _ || w.jsx(j0, { className: O.loadingIconPlaceholder, ownerState: b }),
        }),
      R = i || '',
      j =
        typeof p == 'boolean'
          ? w.jsx('span', {
              className: O.loadingWrapper,
              style: { display: 'contents' },
              children:
                p && w.jsx(k4, { className: O.loadingIndicator, ownerState: b, children: V }),
            })
          : null;
    return w.jsxs(x4, {
      ownerState: b,
      className: ee(n.className, O.root, c, R),
      component: u,
      disabled: f || p,
      focusRipple: !g,
      focusVisibleClassName: ee(O.focusVisible, x),
      ref: a,
      type: E,
      id: p ? $ : m,
      ...z,
      classes: O,
      children: [A, v !== 'end' && j, l, v === 'end' && j, N],
    });
  }),
  xn = E4;
function F4(e) {
  return me('MuiCard', e);
}
ge('MuiCard', ['root']);
const T4 = (e) => {
    const { classes: t } = e;
    return he({ root: ['root'] }, F4, t);
  },
  R4 = Y(Pc, { name: 'MuiCard', slot: 'Root' })({ overflow: 'hidden' }),
  A4 = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiCard' }),
      { className: i, raised: o = !1, ...r } = n,
      l = { ...n, raised: o },
      s = T4(l);
    return w.jsx(R4, {
      className: ee(s.root, i),
      elevation: o ? 8 : void 0,
      ref: a,
      ownerState: l,
      ...r,
    });
  }),
  M4 = A4;
function O4(e) {
  return me('MuiCardActions', e);
}
ge('MuiCardActions', ['root', 'spacing']);
const N4 = (e) => {
    const { classes: t, disableSpacing: a } = e;
    return he({ root: ['root', !a && 'spacing'] }, O4, t);
  },
  z4 = Y('div', {
    name: 'MuiCardActions',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [t.root, !a.disableSpacing && t.spacing];
    },
  })({
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    variants: [
      {
        props: { disableSpacing: !1 },
        style: { '& > :not(style) ~ :not(style)': { marginLeft: 8 } },
      },
    ],
  }),
  B4 = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiCardActions' }),
      { disableSpacing: i = !1, className: o, ...r } = n,
      l = { ...n, disableSpacing: i },
      s = N4(l);
    return w.jsx(z4, { className: ee(s.root, o), ownerState: l, ref: a, ...r });
  }),
  L4 = B4;
function $4(e) {
  return me('MuiCardContent', e);
}
ge('MuiCardContent', ['root']);
const D4 = (e) => {
    const { classes: t } = e;
    return he({ root: ['root'] }, $4, t);
  },
  j4 = Y('div', { name: 'MuiCardContent', slot: 'Root' })({
    padding: 16,
    '&:last-child': { paddingBottom: 24 },
  }),
  U4 = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiCardContent' }),
      { className: i, component: o = 'div', ...r } = n,
      l = { ...n, component: o },
      s = D4(l);
    return w.jsx(j4, { as: o, className: ee(s.root, i), ownerState: l, ref: a, ...r });
  }),
  H4 = U4,
  V4 = pT({
    createStyledComponent: Y('div', {
      name: 'MuiContainer',
      slot: 'Root',
      overridesResolver: (e, t) => {
        const { ownerState: a } = e;
        return [
          t.root,
          t[`maxWidth${Z(String(a.maxWidth))}`],
          a.fixed && t.fixed,
          a.disableGutters && t.disableGutters,
        ];
      },
    }),
    useThemeProps: (e) => _e({ props: e, name: 'MuiContainer' }),
  }),
  Y1 = V4;
function X1(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function G4(e) {
  const t = Va(e);
  return t.body === e
    ? Ga(e).innerWidth > t.documentElement.clientWidth
    : e.scrollHeight > e.clientHeight;
}
function al(e, t) {
  t ? e.setAttribute('aria-hidden', 'true') : e.removeAttribute('aria-hidden');
}
function U0(e) {
  return parseFloat(Ga(e).getComputedStyle(e).paddingRight) || 0;
}
function I4(e) {
  const a = [
      'TEMPLATE',
      'SCRIPT',
      'STYLE',
      'LINK',
      'MAP',
      'META',
      'NOSCRIPT',
      'PICTURE',
      'COL',
      'COLGROUP',
      'PARAM',
      'SLOT',
      'SOURCE',
      'TRACK',
    ].includes(e.tagName),
    n = e.tagName === 'INPUT' && e.getAttribute('type') === 'hidden';
  return a || n;
}
function H0(e, t, a, n, i) {
  const o = [t, a, ...n];
  [].forEach.call(e.children, (r) => {
    const l = !o.includes(r),
      s = !I4(r);
    l && s && al(r, i);
  });
}
function Pd(e, t) {
  let a = -1;
  return (e.some((n, i) => (t(n) ? ((a = i), !0) : !1)), a);
}
function P4(e, t) {
  const a = [],
    n = e.container;
  if (!t.disableScrollLock) {
    if (G4(n)) {
      const r = X1(Ga(n));
      (a.push({ value: n.style.paddingRight, property: 'padding-right', el: n }),
        (n.style.paddingRight = `${U0(n) + r}px`));
      const l = Va(n).querySelectorAll('.mui-fixed');
      [].forEach.call(l, (s) => {
        (a.push({ value: s.style.paddingRight, property: 'padding-right', el: s }),
          (s.style.paddingRight = `${U0(s) + r}px`));
      });
    }
    let o;
    if (n.parentNode instanceof DocumentFragment) o = Va(n).body;
    else {
      const r = n.parentElement,
        l = Ga(n);
      o =
        (r == null ? void 0 : r.nodeName) === 'HTML' && l.getComputedStyle(r).overflowY === 'scroll'
          ? r
          : n;
    }
    (a.push(
      { value: o.style.overflow, property: 'overflow', el: o },
      { value: o.style.overflowX, property: 'overflow-x', el: o },
      { value: o.style.overflowY, property: 'overflow-y', el: o }
    ),
      (o.style.overflow = 'hidden'));
  }
  return () => {
    a.forEach(({ value: o, el: r, property: l }) => {
      o ? r.style.setProperty(l, o) : r.style.removeProperty(l);
    });
  };
}
function q4(e) {
  const t = [];
  return (
    [].forEach.call(e.children, (a) => {
      a.getAttribute('aria-hidden') === 'true' && t.push(a);
    }),
    t
  );
}
class K4 {
  constructor() {
    ((this.modals = []), (this.containers = []));
  }
  add(t, a) {
    let n = this.modals.indexOf(t);
    if (n !== -1) return n;
    ((n = this.modals.length), this.modals.push(t), t.modalRef && al(t.modalRef, !1));
    const i = q4(a);
    H0(a, t.mount, t.modalRef, i, !0);
    const o = Pd(this.containers, (r) => r.container === a);
    return o !== -1
      ? (this.containers[o].modals.push(t), n)
      : (this.containers.push({ modals: [t], container: a, restore: null, hiddenSiblings: i }), n);
  }
  mount(t, a) {
    const n = Pd(this.containers, (o) => o.modals.includes(t)),
      i = this.containers[n];
    i.restore || (i.restore = P4(i, a));
  }
  remove(t, a = !0) {
    const n = this.modals.indexOf(t);
    if (n === -1) return n;
    const i = Pd(this.containers, (r) => r.modals.includes(t)),
      o = this.containers[i];
    if ((o.modals.splice(o.modals.indexOf(t), 1), this.modals.splice(n, 1), o.modals.length === 0))
      (o.restore && o.restore(),
        t.modalRef && al(t.modalRef, a),
        H0(o.container, t.mount, t.modalRef, o.hiddenSiblings, !1),
        this.containers.splice(i, 1));
    else {
      const r = o.modals[o.modals.length - 1];
      r.modalRef && al(r.modalRef, !1);
    }
    return n;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
function Ur(e) {
  var a;
  let t = e.activeElement;
  for (; ((a = t == null ? void 0 : t.shadowRoot) == null ? void 0 : a.activeElement) != null; )
    t = t.shadowRoot.activeElement;
  return t;
}
const Y4 = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
].join(',');
function X4(e) {
  const t = parseInt(e.getAttribute('tabindex') || '', 10);
  return Number.isNaN(t)
    ? e.contentEditable === 'true' ||
      ((e.nodeName === 'AUDIO' || e.nodeName === 'VIDEO' || e.nodeName === 'DETAILS') &&
        e.getAttribute('tabindex') === null)
      ? 0
      : e.tabIndex
    : t;
}
function Q4(e) {
  if (e.tagName !== 'INPUT' || e.type !== 'radio' || !e.name) return !1;
  const t = (n) => e.ownerDocument.querySelector(`input[type="radio"]${n}`);
  let a = t(`[name="${e.name}"]:checked`);
  return (a || (a = t(`[name="${e.name}"]`)), a !== e);
}
function Z4(e) {
  return !(e.disabled || (e.tagName === 'INPUT' && e.type === 'hidden') || Q4(e));
}
function W4(e) {
  const t = [],
    a = [];
  return (
    Array.from(e.querySelectorAll(Y4)).forEach((n, i) => {
      const o = X4(n);
      o === -1 ||
        !Z4(n) ||
        (o === 0 ? t.push(n) : a.push({ documentOrder: i, tabIndex: o, node: n }));
    }),
    a
      .sort((n, i) =>
        n.tabIndex === i.tabIndex ? n.documentOrder - i.documentOrder : n.tabIndex - i.tabIndex
      )
      .map((n) => n.node)
      .concat(t)
  );
}
function J4() {
  return !0;
}
function e6(e) {
  const {
      children: t,
      disableAutoFocus: a = !1,
      disableEnforceFocus: n = !1,
      disableRestoreFocus: i = !1,
      getTabbable: o = W4,
      isEnabled: r = J4,
      open: l,
    } = e,
    s = y.useRef(!1),
    u = y.useRef(null),
    c = y.useRef(null),
    f = y.useRef(null),
    d = y.useRef(null),
    g = y.useRef(!1),
    _ = y.useRef(null),
    x = Ut(sr(t), _),
    S = y.useRef(null);
  (y.useEffect(() => {
    !l || !_.current || (g.current = !a);
  }, [a, l]),
    y.useEffect(() => {
      if (!l || !_.current) return;
      const h = Va(_.current),
        v = Ur(h);
      return (
        _.current.contains(v) ||
          (_.current.hasAttribute('tabIndex') || _.current.setAttribute('tabIndex', '-1'),
          g.current && _.current.focus()),
        () => {
          i ||
            (f.current && f.current.focus && ((s.current = !0), f.current.focus()),
            (f.current = null));
        }
      );
    }, [l]),
    y.useEffect(() => {
      if (!l || !_.current) return;
      const h = Va(_.current),
        v = (E) => {
          if (((S.current = E), n || !r() || E.key !== 'Tab')) return;
          Ur(h) === _.current && E.shiftKey && ((s.current = !0), c.current && c.current.focus());
        },
        C = () => {
          var $, V;
          const E = _.current;
          if (E === null) return;
          const M = Ur(h);
          if (!h.hasFocus() || !r() || s.current) {
            s.current = !1;
            return;
          }
          if (E.contains(M) || (n && M !== u.current && M !== c.current)) return;
          if (M !== d.current) d.current = null;
          else if (d.current !== null) return;
          if (!g.current) return;
          let z = [];
          if (((M === u.current || M === c.current) && (z = o(_.current)), z.length > 0)) {
            const b = !!(
                ($ = S.current) != null &&
                $.shiftKey &&
                ((V = S.current) == null ? void 0 : V.key) === 'Tab'
              ),
              O = z[0],
              A = z[z.length - 1];
            typeof O != 'string' && typeof A != 'string' && (b ? A.focus() : O.focus());
          } else E.focus();
        };
      (h.addEventListener('focusin', C), h.addEventListener('keydown', v, !0));
      const k = setInterval(() => {
        const E = Ur(h);
        E && E.tagName === 'BODY' && C();
      }, 50);
      return () => {
        (clearInterval(k),
          h.removeEventListener('focusin', C),
          h.removeEventListener('keydown', v, !0));
      };
    }, [a, n, i, r, l, o]));
  const m = (h) => {
      (f.current === null && (f.current = h.relatedTarget),
        (g.current = !0),
        (d.current = h.target));
      const v = t.props.onFocus;
      v && v(h);
    },
    p = (h) => {
      (f.current === null && (f.current = h.relatedTarget), (g.current = !0));
    };
  return w.jsxs(y.Fragment, {
    children: [
      w.jsx('div', { tabIndex: l ? 0 : -1, onFocus: p, ref: u, 'data-testid': 'sentinelStart' }),
      y.cloneElement(t, { ref: x, onFocus: m }),
      w.jsx('div', { tabIndex: l ? 0 : -1, onFocus: p, ref: c, 'data-testid': 'sentinelEnd' }),
    ],
  });
}
function t6(e) {
  return typeof e == 'function' ? e() : e;
}
function a6(e) {
  return e ? e.props.hasOwnProperty('in') : !1;
}
const V0 = () => {},
  Ss = new K4();
function n6(e) {
  const {
      container: t,
      disableEscapeKeyDown: a = !1,
      disableScrollLock: n = !1,
      closeAfterTransition: i = !1,
      onTransitionEnter: o,
      onTransitionExited: r,
      children: l,
      onClose: s,
      open: u,
      rootRef: c,
    } = e,
    f = y.useRef({}),
    d = y.useRef(null),
    g = y.useRef(null),
    _ = Ut(g, c),
    [x, S] = y.useState(!u),
    m = a6(l);
  let p = !0;
  (e['aria-hidden'] === 'false' || e['aria-hidden'] === !1) && (p = !1);
  const h = () => Va(d.current),
    v = () => ((f.current.modalRef = g.current), (f.current.mount = d.current), f.current),
    C = () => {
      (Ss.mount(v(), { disableScrollLock: n }), g.current && (g.current.scrollTop = 0));
    },
    k = Oi(() => {
      const N = t6(t) || h().body;
      (Ss.add(v(), N), g.current && C());
    }),
    E = () => Ss.isTopModal(v()),
    M = Oi((N) => {
      ((d.current = N), N && (u && E() ? C() : g.current && al(g.current, p)));
    }),
    z = y.useCallback(() => {
      Ss.remove(v(), p);
    }, [p]);
  (y.useEffect(
    () => () => {
      z();
    },
    [z]
  ),
    y.useEffect(() => {
      u ? k() : (!m || !i) && z();
    }, [u, z, m, i, k]));
  const $ = (N) => (R) => {
      var j;
      ((j = N.onKeyDown) == null || j.call(N, R),
        !(R.key !== 'Escape' || R.which === 229 || !E()) &&
          (a || (R.stopPropagation(), s && s(R, 'escapeKeyDown'))));
    },
    V = (N) => (R) => {
      var j;
      ((j = N.onClick) == null || j.call(N, R),
        R.target === R.currentTarget && s && s(R, 'backdropClick'));
    };
  return {
    getRootProps: (N = {}) => {
      const R = I1(e);
      (delete R.onTransitionEnter, delete R.onTransitionExited);
      const j = { ...R, ...N };
      return { role: 'presentation', ...j, onKeyDown: $(j), ref: _ };
    },
    getBackdropProps: (N = {}) => {
      const R = N;
      return { 'aria-hidden': !0, ...R, onClick: V(R), open: u };
    },
    getTransitionProps: () => {
      const N = () => {
          (S(!1), o && o());
        },
        R = () => {
          (S(!0), r && r(), i && z());
        };
      return {
        onEnter: k0(N, (l == null ? void 0 : l.props.onEnter) ?? V0),
        onExited: k0(R, (l == null ? void 0 : l.props.onExited) ?? V0),
      };
    },
    rootRef: _,
    portalRef: M,
    isTopModal: E,
    exited: x,
    hasTransition: m,
  };
}
function i6(e) {
  return me('MuiModal', e);
}
ge('MuiModal', ['root', 'hidden', 'backdrop']);
const o6 = (e) => {
    const { open: t, exited: a, classes: n } = e;
    return he({ root: ['root', !t && a && 'hidden'], backdrop: ['backdrop'] }, i6, n);
  },
  r6 = Y('div', {
    name: 'MuiModal',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [t.root, !a.open && a.exited && t.hidden];
    },
  })(
    Oe(({ theme: e }) => ({
      position: 'fixed',
      zIndex: (e.vars || e).zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      variants: [
        { props: ({ ownerState: t }) => !t.open && t.exited, style: { visibility: 'hidden' } },
      ],
    }))
  ),
  l6 = Y(c4, { name: 'MuiModal', slot: 'Backdrop' })({ zIndex: -1 }),
  s6 = y.forwardRef(function (t, a) {
    const n = _e({ name: 'MuiModal', props: t }),
      {
        BackdropComponent: i = l6,
        BackdropProps: o,
        classes: r,
        className: l,
        closeAfterTransition: s = !1,
        children: u,
        container: c,
        component: f,
        components: d = {},
        componentsProps: g = {},
        disableAutoFocus: _ = !1,
        disableEnforceFocus: x = !1,
        disableEscapeKeyDown: S = !1,
        disablePortal: m = !1,
        disableRestoreFocus: p = !1,
        disableScrollLock: h = !1,
        hideBackdrop: v = !1,
        keepMounted: C = !1,
        onClose: k,
        onTransitionEnter: E,
        onTransitionExited: M,
        open: z,
        slotProps: $ = {},
        slots: V = {},
        theme: b,
        ...O
      } = n,
      A = {
        ...n,
        closeAfterTransition: s,
        disableAutoFocus: _,
        disableEnforceFocus: x,
        disableEscapeKeyDown: S,
        disablePortal: m,
        disableRestoreFocus: p,
        disableScrollLock: h,
        hideBackdrop: v,
        keepMounted: C,
      },
      {
        getRootProps: N,
        getBackdropProps: R,
        getTransitionProps: j,
        portalRef: B,
        isTopModal: U,
        exited: q,
        hasTransition: X,
      } = n6({ ...A, rootRef: a }),
      ye = { ...A, exited: q },
      le = o6(ye),
      Ee = {};
    if ((u.props.tabIndex === void 0 && (Ee.tabIndex = '-1'), X)) {
      const { onEnter: te, onExited: se } = j();
      ((Ee.onEnter = te), (Ee.onExited = se));
    }
    const je = { slots: { root: d.Root, backdrop: d.Backdrop, ...V }, slotProps: { ...g, ...$ } },
      [Je, Ze] = ht('root', {
        ref: a,
        elementType: r6,
        externalForwardedProps: { ...je, ...O, component: f },
        getSlotProps: N,
        ownerState: ye,
        className: ee(
          l,
          le == null ? void 0 : le.root,
          !ye.open && ye.exited && (le == null ? void 0 : le.hidden)
        ),
      }),
      [At, Le] = ht('backdrop', {
        ref: o == null ? void 0 : o.ref,
        elementType: i,
        externalForwardedProps: je,
        shouldForwardComponentProp: !0,
        additionalProps: o,
        getSlotProps: (te) =>
          R({
            ...te,
            onClick: (se) => {
              te != null && te.onClick && te.onClick(se);
            },
          }),
        className: ee(o == null ? void 0 : o.className, le == null ? void 0 : le.backdrop),
        ownerState: ye,
      });
    return !C && !z && (!X || q)
      ? null
      : w.jsx(jA, {
          ref: B,
          container: c,
          disablePortal: m,
          children: w.jsxs(Je, {
            ...Ze,
            children: [
              !v && i ? w.jsx(At, { ...Le }) : null,
              w.jsx(e6, {
                disableEnforceFocus: x,
                disableAutoFocus: _,
                disableRestoreFocus: p,
                isEnabled: U,
                open: z,
                children: y.cloneElement(u, Ee),
              }),
            ],
          }),
        });
  }),
  Q1 = s6,
  u6 = ge('MuiDivider', [
    'root',
    'absolute',
    'fullWidth',
    'inset',
    'middle',
    'flexItem',
    'light',
    'vertical',
    'withChildren',
    'withChildrenVertical',
    'textAlignRight',
    'textAlignLeft',
    'wrapper',
    'wrapperVertical',
  ]),
  G0 = u6;
function c6(e, t, a) {
  const n = t.getBoundingClientRect(),
    i = a && a.getBoundingClientRect(),
    o = Ga(t);
  let r;
  if (t.fakeTransform) r = t.fakeTransform;
  else {
    const u = o.getComputedStyle(t);
    r = u.getPropertyValue('-webkit-transform') || u.getPropertyValue('transform');
  }
  let l = 0,
    s = 0;
  if (r && r !== 'none' && typeof r == 'string') {
    const u = r.split('(')[1].split(')')[0].split(',');
    ((l = parseInt(u[4], 10)), (s = parseInt(u[5], 10)));
  }
  return e === 'left'
    ? i
      ? `translateX(${i.right + l - n.left}px)`
      : `translateX(${o.innerWidth + l - n.left}px)`
    : e === 'right'
      ? i
        ? `translateX(-${n.right - i.left - l}px)`
        : `translateX(-${n.left + n.width - l}px)`
      : e === 'up'
        ? i
          ? `translateY(${i.bottom + s - n.top}px)`
          : `translateY(${o.innerHeight + s - n.top}px)`
        : i
          ? `translateY(-${n.top - i.top + n.height - s}px)`
          : `translateY(-${n.top + n.height - s}px)`;
}
function d6(e) {
  return typeof e == 'function' ? e() : e;
}
function xs(e, t, a) {
  const n = d6(a),
    i = c6(e, t, n);
  i && ((t.style.webkitTransform = i), (t.style.transform = i));
}
const f6 = y.forwardRef(function (t, a) {
    const n = Pi(),
      i = { enter: n.transitions.easing.easeOut, exit: n.transitions.easing.sharp },
      o = {
        enter: n.transitions.duration.enteringScreen,
        exit: n.transitions.duration.leavingScreen,
      },
      {
        addEndListener: r,
        appear: l = !0,
        children: s,
        container: u,
        direction: c = 'down',
        easing: f = i,
        in: d,
        onEnter: g,
        onEntered: _,
        onEntering: x,
        onExit: S,
        onExited: m,
        onExiting: p,
        style: h,
        timeout: v = o,
        TransitionComponent: C = Wp,
        ...k
      } = t,
      E = y.useRef(null),
      M = Ut(sr(s), E, a),
      z = (B) => (U) => {
        B && (U === void 0 ? B(E.current) : B(E.current, U));
      },
      $ = z((B, U) => {
        (xs(c, B, u), am(B), g && g(B, U));
      }),
      V = z((B, U) => {
        const q = Ko({ timeout: v, style: h, easing: f }, { mode: 'enter' });
        ((B.style.webkitTransition = n.transitions.create('-webkit-transform', { ...q })),
          (B.style.transition = n.transitions.create('transform', { ...q })),
          (B.style.webkitTransform = 'none'),
          (B.style.transform = 'none'),
          x && x(B, U));
      }),
      b = z(_),
      O = z(p),
      A = z((B) => {
        const U = Ko({ timeout: v, style: h, easing: f }, { mode: 'exit' });
        ((B.style.webkitTransition = n.transitions.create('-webkit-transform', U)),
          (B.style.transition = n.transitions.create('transform', U)),
          xs(c, B, u),
          S && S(B));
      }),
      N = z((B) => {
        ((B.style.webkitTransition = ''), (B.style.transition = ''), m && m(B));
      }),
      R = (B) => {
        r && r(E.current, B);
      },
      j = y.useCallback(() => {
        E.current && xs(c, E.current, u);
      }, [c, u]);
    return (
      y.useEffect(() => {
        if (d || c === 'down' || c === 'right') return;
        const B = Zp(() => {
            E.current && xs(c, E.current, u);
          }),
          U = Ga(E.current);
        return (
          U.addEventListener('resize', B),
          () => {
            (B.clear(), U.removeEventListener('resize', B));
          }
        );
      }, [c, d, u]),
      y.useEffect(() => {
        d || j();
      }, [d, j]),
      w.jsx(C, {
        nodeRef: E,
        onEnter: $,
        onEntered: b,
        onEntering: V,
        onExit: A,
        onExited: N,
        onExiting: O,
        addEndListener: R,
        appear: l,
        in: d,
        timeout: v,
        ...k,
        children: (B, { ownerState: U, ...q }) =>
          y.cloneElement(s, {
            ref: M,
            style: { visibility: B === 'exited' && !d ? 'hidden' : void 0, ...h, ...s.props.style },
            ...q,
          }),
      })
    );
  }),
  g6 = f6;
function p6(e) {
  return me('MuiDrawer', e);
}
ge('MuiDrawer', [
  'root',
  'docked',
  'paper',
  'anchorLeft',
  'anchorRight',
  'anchorTop',
  'anchorBottom',
  'paperAnchorLeft',
  'paperAnchorRight',
  'paperAnchorTop',
  'paperAnchorBottom',
  'paperAnchorDockedLeft',
  'paperAnchorDockedRight',
  'paperAnchorDockedTop',
  'paperAnchorDockedBottom',
  'modal',
]);
const Z1 = (e, t) => {
    const { ownerState: a } = e;
    return [t.root, (a.variant === 'permanent' || a.variant === 'persistent') && t.docked, t.modal];
  },
  m6 = (e) => {
    const { classes: t, anchor: a, variant: n } = e,
      i = {
        root: ['root', `anchor${Z(a)}`],
        docked: [(n === 'permanent' || n === 'persistent') && 'docked'],
        modal: ['modal'],
        paper: ['paper', `paperAnchor${Z(a)}`, n !== 'temporary' && `paperAnchorDocked${Z(a)}`],
      };
    return he(i, p6, t);
  },
  h6 = Y(Q1, { name: 'MuiDrawer', slot: 'Root', overridesResolver: Z1 })(
    Oe(({ theme: e }) => ({ zIndex: (e.vars || e).zIndex.drawer }))
  ),
  v6 = Y('div', {
    shouldForwardProp: _a,
    name: 'MuiDrawer',
    slot: 'Docked',
    skipVariantsResolver: !1,
    overridesResolver: Z1,
  })({ flex: '0 0 auto' }),
  _6 = Y(Pc, {
    name: 'MuiDrawer',
    slot: 'Paper',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [
        t.paper,
        t[`paperAnchor${Z(a.anchor)}`],
        a.variant !== 'temporary' && t[`paperAnchorDocked${Z(a.anchor)}`],
      ];
    },
  })(
    Oe(({ theme: e }) => ({
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      flex: '1 0 auto',
      zIndex: (e.vars || e).zIndex.drawer,
      WebkitOverflowScrolling: 'touch',
      position: 'fixed',
      top: 0,
      outline: 0,
      variants: [
        { props: { anchor: 'left' }, style: { left: 0 } },
        {
          props: { anchor: 'top' },
          style: { top: 0, left: 0, right: 0, height: 'auto', maxHeight: '100%' },
        },
        { props: { anchor: 'right' }, style: { right: 0 } },
        {
          props: { anchor: 'bottom' },
          style: { top: 'auto', left: 0, bottom: 0, right: 0, height: 'auto', maxHeight: '100%' },
        },
        {
          props: ({ ownerState: t }) => t.anchor === 'left' && t.variant !== 'temporary',
          style: { borderRight: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: t }) => t.anchor === 'top' && t.variant !== 'temporary',
          style: { borderBottom: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: t }) => t.anchor === 'right' && t.variant !== 'temporary',
          style: { borderLeft: `1px solid ${(e.vars || e).palette.divider}` },
        },
        {
          props: ({ ownerState: t }) => t.anchor === 'bottom' && t.variant !== 'temporary',
          style: { borderTop: `1px solid ${(e.vars || e).palette.divider}` },
        },
      ],
    }))
  ),
  W1 = { left: 'right', right: 'left', top: 'down', bottom: 'up' };
function y6(e) {
  return ['left', 'right'].includes(e);
}
function b6({ direction: e }, t) {
  return e === 'rtl' && y6(t) ? W1[t] : t;
}
const S6 = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiDrawer' }),
      i = Pi(),
      o = F1(),
      r = {
        enter: i.transitions.duration.enteringScreen,
        exit: i.transitions.duration.leavingScreen,
      },
      {
        anchor: l = 'left',
        BackdropProps: s,
        children: u,
        className: c,
        elevation: f = 16,
        hideBackdrop: d = !1,
        ModalProps: { BackdropProps: g, ..._ } = {},
        onClose: x,
        open: S = !1,
        PaperProps: m = {},
        SlideProps: p,
        TransitionComponent: h,
        transitionDuration: v = r,
        variant: C = 'temporary',
        slots: k = {},
        slotProps: E = {},
        ...M
      } = n,
      z = y.useRef(!1);
    y.useEffect(() => {
      z.current = !0;
    }, []);
    const $ = b6({ direction: o ? 'rtl' : 'ltr' }, l),
      b = { ...n, anchor: l, elevation: f, open: S, variant: C, ...M },
      O = m6(b),
      A = {
        slots: { transition: h, ...k },
        slotProps: {
          paper: m,
          transition: p,
          ...E,
          backdrop: $1(E.backdrop || { ...s, ...g }, { transitionDuration: v }),
        },
      },
      [N, R] = ht('root', {
        ref: a,
        elementType: h6,
        className: ee(O.root, O.modal, c),
        shouldForwardComponentProp: !0,
        ownerState: b,
        externalForwardedProps: { ...A, ...M, ..._ },
        additionalProps: {
          open: S,
          onClose: x,
          hideBackdrop: d,
          slots: { backdrop: A.slots.backdrop },
          slotProps: { backdrop: A.slotProps.backdrop },
        },
      }),
      [j, B] = ht('paper', {
        elementType: _6,
        shouldForwardComponentProp: !0,
        className: ee(O.paper, m.className),
        ownerState: b,
        externalForwardedProps: A,
        additionalProps: {
          elevation: C === 'temporary' ? f : 0,
          square: !0,
          ...(C === 'temporary' && { role: 'dialog', 'aria-modal': 'true' }),
        },
      }),
      [U, q] = ht('docked', {
        elementType: v6,
        ref: a,
        className: ee(O.root, O.docked, c),
        ownerState: b,
        externalForwardedProps: A,
        additionalProps: M,
      }),
      [X, ye] = ht('transition', {
        elementType: g6,
        ownerState: b,
        externalForwardedProps: A,
        additionalProps: { in: S, direction: W1[$], timeout: v, appear: z.current },
      }),
      le = w.jsx(j, { ...B, children: u });
    if (C === 'permanent') return w.jsx(U, { ...q, children: le });
    const Ee = w.jsx(X, { ...ye, children: le });
    return C === 'persistent' ? w.jsx(U, { ...q, children: Ee }) : w.jsx(N, { ...R, children: Ee });
  }),
  x6 = S6,
  w6 = (e) => {
    const {
        classes: t,
        disableUnderline: a,
        startAdornment: n,
        endAdornment: i,
        size: o,
        hiddenLabel: r,
        multiline: l,
      } = e,
      s = {
        root: [
          'root',
          !a && 'underline',
          n && 'adornedStart',
          i && 'adornedEnd',
          o === 'small' && `size${Z(o)}`,
          r && 'hiddenLabel',
          l && 'multiline',
        ],
        input: ['input'],
      },
      u = he(s, e4, t);
    return { ...t, ...u };
  },
  C6 = Y(Yc, {
    shouldForwardProp: (e) => _a(e) || e === 'classes',
    name: 'MuiFilledInput',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [...qc(e, t), !a.disableUnderline && t.underline];
    },
  })(
    Oe(({ theme: e }) => {
      const t = e.palette.mode === 'light',
        a = t ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)',
        n = t ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)',
        i = t ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.13)',
        o = t ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)';
      return {
        position: 'relative',
        backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : n,
        borderTopLeftRadius: (e.vars || e).shape.borderRadius,
        borderTopRightRadius: (e.vars || e).shape.borderRadius,
        transition: e.transitions.create('background-color', {
          duration: e.transitions.duration.shorter,
          easing: e.transitions.easing.easeOut,
        }),
        '&:hover': {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.hoverBg : i,
          '@media (hover: none)': { backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : n },
        },
        [`&.${hi.focused}`]: { backgroundColor: e.vars ? e.vars.palette.FilledInput.bg : n },
        [`&.${hi.disabled}`]: {
          backgroundColor: e.vars ? e.vars.palette.FilledInput.disabledBg : o,
        },
        variants: [
          {
            props: ({ ownerState: r }) => !r.disableUnderline,
            style: {
              '&::after': {
                left: 0,
                bottom: 0,
                content: '""',
                position: 'absolute',
                right: 0,
                transform: 'scaleX(0)',
                transition: e.transitions.create('transform', {
                  duration: e.transitions.duration.shorter,
                  easing: e.transitions.easing.easeOut,
                }),
                pointerEvents: 'none',
              },
              [`&.${hi.focused}:after`]: { transform: 'scaleX(1) translateX(0)' },
              [`&.${hi.error}`]: {
                '&::before, &::after': { borderBottomColor: (e.vars || e).palette.error.main },
              },
              '&::before': {
                borderBottom: `1px solid ${e.vars ? e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline) : a}`,
                left: 0,
                bottom: 0,
                content: '"\\00a0"',
                position: 'absolute',
                right: 0,
                transition: e.transitions.create('border-bottom-color', {
                  duration: e.transitions.duration.shorter,
                }),
                pointerEvents: 'none',
              },
              [`&:hover:not(.${hi.disabled}, .${hi.error}):before`]: {
                borderBottom: `1px solid ${(e.vars || e).palette.text.primary}`,
              },
              [`&.${hi.disabled}:before`]: { borderBottomStyle: 'dotted' },
            },
          },
          ...Object.entries(e.palette)
            .filter(Ia())
            .map(([r]) => {
              var l;
              return {
                props: { disableUnderline: !1, color: r },
                style: {
                  '&::after': {
                    borderBottom: `2px solid ${(l = (e.vars || e).palette[r]) == null ? void 0 : l.main}`,
                  },
                },
              };
            }),
          { props: ({ ownerState: r }) => r.startAdornment, style: { paddingLeft: 12 } },
          { props: ({ ownerState: r }) => r.endAdornment, style: { paddingRight: 12 } },
          { props: ({ ownerState: r }) => r.multiline, style: { padding: '25px 12px 8px' } },
          {
            props: ({ ownerState: r, size: l }) => r.multiline && l === 'small',
            style: { paddingTop: 21, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: r }) => r.multiline && r.hiddenLabel,
            style: { paddingTop: 16, paddingBottom: 17 },
          },
          {
            props: ({ ownerState: r }) => r.multiline && r.hiddenLabel && r.size === 'small',
            style: { paddingTop: 8, paddingBottom: 9 },
          },
        ],
      };
    })
  ),
  k6 = Y(Xc, { name: 'MuiFilledInput', slot: 'Input', overridesResolver: Kc })(
    Oe(({ theme: e }) => ({
      paddingTop: 25,
      paddingRight: 12,
      paddingBottom: 8,
      paddingLeft: 12,
      ...(!e.vars && {
        '&:-webkit-autofill': {
          WebkitBoxShadow: e.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: e.palette.mode === 'light' ? null : '#fff',
          caretColor: e.palette.mode === 'light' ? null : '#fff',
          borderTopLeftRadius: 'inherit',
          borderTopRightRadius: 'inherit',
        },
      }),
      ...(e.vars && {
        '&:-webkit-autofill': { borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' },
        [e.getColorSchemeSelector('dark')]: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #266798 inset',
            WebkitTextFillColor: '#fff',
            caretColor: '#fff',
          },
        },
      }),
      variants: [
        { props: { size: 'small' }, style: { paddingTop: 21, paddingBottom: 4 } },
        {
          props: ({ ownerState: t }) => t.hiddenLabel,
          style: { paddingTop: 16, paddingBottom: 17 },
        },
        { props: ({ ownerState: t }) => t.startAdornment, style: { paddingLeft: 0 } },
        { props: ({ ownerState: t }) => t.endAdornment, style: { paddingRight: 0 } },
        {
          props: ({ ownerState: t }) => t.hiddenLabel && t.size === 'small',
          style: { paddingTop: 8, paddingBottom: 9 },
        },
        {
          props: ({ ownerState: t }) => t.multiline,
          style: { paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 },
        },
      ],
    }))
  ),
  J1 = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiFilledInput' }),
      {
        disableUnderline: i = !1,
        components: o = {},
        componentsProps: r,
        fullWidth: l = !1,
        hiddenLabel: s,
        inputComponent: u = 'input',
        multiline: c = !1,
        slotProps: f,
        slots: d = {},
        type: g = 'text',
        ..._
      } = n,
      x = { ...n, disableUnderline: i, fullWidth: l, inputComponent: u, multiline: c, type: g },
      S = w6(n),
      m = { root: { ownerState: x }, input: { ownerState: x } },
      p = (f ?? r) ? Tt(m, f ?? r) : m,
      h = d.root ?? o.Root ?? C6,
      v = d.input ?? o.Input ?? k6;
    return w.jsx(om, {
      slots: { root: h, input: v },
      slotProps: p,
      fullWidth: l,
      inputComponent: u,
      multiline: c,
      ref: a,
      type: g,
      ..._,
      classes: S,
    });
  });
J1.muiName = 'Input';
const eS = J1;
function E6(e) {
  return me('MuiFormControl', e);
}
ge('MuiFormControl', [
  'root',
  'marginNone',
  'marginNormal',
  'marginDense',
  'fullWidth',
  'disabled',
]);
const F6 = (e) => {
    const { classes: t, margin: a, fullWidth: n } = e,
      i = { root: ['root', a !== 'none' && `margin${Z(a)}`, n && 'fullWidth'] };
    return he(i, E6, t);
  },
  T6 = Y('div', {
    name: 'MuiFormControl',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [t.root, t[`margin${Z(a.margin)}`], a.fullWidth && t.fullWidth];
    },
  })({
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top',
    variants: [
      { props: { margin: 'normal' }, style: { marginTop: 16, marginBottom: 8 } },
      { props: { margin: 'dense' }, style: { marginTop: 8, marginBottom: 4 } },
      { props: { fullWidth: !0 }, style: { width: '100%' } },
    ],
  }),
  R6 = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiFormControl' }),
      {
        children: i,
        className: o,
        color: r = 'primary',
        component: l = 'div',
        disabled: s = !1,
        error: u = !1,
        focused: c,
        fullWidth: f = !1,
        hiddenLabel: d = !1,
        margin: g = 'none',
        required: _ = !1,
        size: x = 'medium',
        variant: S = 'outlined',
        ...m
      } = n,
      p = {
        ...n,
        color: r,
        component: l,
        disabled: s,
        error: u,
        fullWidth: f,
        hiddenLabel: d,
        margin: g,
        required: _,
        size: x,
        variant: S,
      },
      h = F6(p),
      [v, C] = y.useState(() => {
        let N = !1;
        return (
          i &&
            y.Children.forEach(i, (R) => {
              if (!Ks(R, ['Input', 'Select'])) return;
              const j = Ks(R, ['Select']) ? R.props.input : R;
              j && PA(j.props) && (N = !0);
            }),
          N
        );
      }),
      [k, E] = y.useState(() => {
        let N = !1;
        return (
          i &&
            y.Children.forEach(i, (R) => {
              Ks(R, ['Input', 'Select']) &&
                (Ou(R.props, !0) || Ou(R.props.inputProps, !0)) &&
                (N = !0);
            }),
          N
        );
      }),
      [M, z] = y.useState(!1);
    s && M && z(!1);
    const $ = c !== void 0 && !s ? c : M;
    let V;
    y.useRef(!1);
    const b = y.useCallback(() => {
        E(!0);
      }, []),
      O = y.useCallback(() => {
        E(!1);
      }, []),
      A = y.useMemo(
        () => ({
          adornedStart: v,
          setAdornedStart: C,
          color: r,
          disabled: s,
          error: u,
          filled: k,
          focused: $,
          fullWidth: f,
          hiddenLabel: d,
          size: x,
          onBlur: () => {
            z(!1);
          },
          onFocus: () => {
            z(!0);
          },
          onEmpty: O,
          onFilled: b,
          registerEffect: V,
          required: _,
          variant: S,
        }),
        [v, r, s, u, k, $, f, d, V, O, b, _, x, S]
      );
    return w.jsx(im.Provider, {
      value: A,
      children: w.jsx(T6, {
        as: l,
        ownerState: p,
        className: ee(h.root, o),
        ref: a,
        ...m,
        children: i,
      }),
    });
  }),
  A6 = R6;
function M6(e) {
  return me('MuiFormHelperText', e);
}
const O6 = ge('MuiFormHelperText', [
    'root',
    'error',
    'disabled',
    'sizeSmall',
    'sizeMedium',
    'contained',
    'focused',
    'filled',
    'required',
  ]),
  I0 = O6;
var P0;
const N6 = (e) => {
    const {
        classes: t,
        contained: a,
        size: n,
        disabled: i,
        error: o,
        filled: r,
        focused: l,
        required: s,
      } = e,
      u = {
        root: [
          'root',
          i && 'disabled',
          o && 'error',
          n && `size${Z(n)}`,
          a && 'contained',
          l && 'focused',
          r && 'filled',
          s && 'required',
        ],
      };
    return he(u, M6, t);
  },
  z6 = Y('p', {
    name: 'MuiFormHelperText',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [
        t.root,
        a.size && t[`size${Z(a.size)}`],
        a.contained && t.contained,
        a.filled && t.filled,
      ];
    },
  })(
    Oe(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.caption,
      textAlign: 'left',
      marginTop: 3,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
      [`&.${I0.disabled}`]: { color: (e.vars || e).palette.text.disabled },
      [`&.${I0.error}`]: { color: (e.vars || e).palette.error.main },
      variants: [
        { props: { size: 'small' }, style: { marginTop: 4 } },
        { props: ({ ownerState: t }) => t.contained, style: { marginLeft: 14, marginRight: 14 } },
      ],
    }))
  ),
  B6 = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiFormHelperText' }),
      {
        children: i,
        className: o,
        component: r = 'p',
        disabled: l,
        error: s,
        filled: u,
        focused: c,
        margin: f,
        required: d,
        variant: g,
        ..._
      } = n,
      x = cr(),
      S = ur({
        props: n,
        muiFormControl: x,
        states: ['variant', 'size', 'disabled', 'error', 'filled', 'focused', 'required'],
      }),
      m = {
        ...n,
        component: r,
        contained: S.variant === 'filled' || S.variant === 'outlined',
        variant: S.variant,
        size: S.size,
        disabled: S.disabled,
        error: S.error,
        filled: S.filled,
        focused: S.focused,
        required: S.required,
      };
    delete m.ownerState;
    const p = N6(m);
    return w.jsx(z6, {
      as: r,
      className: ee(p.root, o),
      ref: a,
      ..._,
      ownerState: m,
      children:
        i === ' '
          ? P0 ||
            (P0 = w.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' }))
          : i,
    });
  }),
  L6 = B6;
function $6(e) {
  return me('MuiFormLabel', e);
}
const D6 = ge('MuiFormLabel', [
    'root',
    'colorSecondary',
    'focused',
    'disabled',
    'error',
    'filled',
    'required',
    'asterisk',
  ]),
  nl = D6,
  j6 = (e) => {
    const { classes: t, color: a, focused: n, disabled: i, error: o, filled: r, required: l } = e,
      s = {
        root: [
          'root',
          `color${Z(a)}`,
          i && 'disabled',
          o && 'error',
          r && 'filled',
          n && 'focused',
          l && 'required',
        ],
        asterisk: ['asterisk', o && 'error'],
      };
    return he(s, $6, t);
  },
  U6 = Y('label', {
    name: 'MuiFormLabel',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [t.root, a.color === 'secondary' && t.colorSecondary, a.filled && t.filled];
    },
  })(
    Oe(({ theme: e }) => ({
      color: (e.vars || e).palette.text.secondary,
      ...e.typography.body1,
      lineHeight: '1.4375em',
      padding: 0,
      position: 'relative',
      variants: [
        ...Object.entries(e.palette)
          .filter(Ia())
          .map(([t]) => ({
            props: { color: t },
            style: { [`&.${nl.focused}`]: { color: (e.vars || e).palette[t].main } },
          })),
        {
          props: {},
          style: {
            [`&.${nl.disabled}`]: { color: (e.vars || e).palette.text.disabled },
            [`&.${nl.error}`]: { color: (e.vars || e).palette.error.main },
          },
        },
      ],
    }))
  ),
  H6 = Y('span', { name: 'MuiFormLabel', slot: 'Asterisk' })(
    Oe(({ theme: e }) => ({ [`&.${nl.error}`]: { color: (e.vars || e).palette.error.main } }))
  ),
  V6 = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiFormLabel' }),
      {
        children: i,
        className: o,
        color: r,
        component: l = 'label',
        disabled: s,
        error: u,
        filled: c,
        focused: f,
        required: d,
        ...g
      } = n,
      _ = cr(),
      x = ur({
        props: n,
        muiFormControl: _,
        states: ['color', 'required', 'focused', 'disabled', 'error', 'filled'],
      }),
      S = {
        ...n,
        color: x.color || 'primary',
        component: l,
        disabled: x.disabled,
        error: x.error,
        filled: x.filled,
        focused: x.focused,
        required: x.required,
      },
      m = j6(S);
    return w.jsxs(U6, {
      as: l,
      ownerState: S,
      className: ee(m.root, o),
      ref: a,
      ...g,
      children: [
        i,
        x.required &&
          w.jsxs(H6, {
            ownerState: S,
            'aria-hidden': !0,
            className: m.asterisk,
            children: [' ', '*'],
          }),
      ],
    });
  }),
  G6 = V6,
  I6 = AT({
    createStyledComponent: Y('div', {
      name: 'MuiGrid',
      slot: 'Root',
      overridesResolver: (e, t) => {
        const { ownerState: a } = e;
        return [t.root, a.container && t.container];
      },
    }),
    componentName: 'MuiGrid',
    useThemeProps: (e) => _e({ props: e, name: 'MuiGrid' }),
    useTheme: Pi,
  }),
  gt = I6;
function dg(e) {
  return `scale(${e}, ${e ** 2})`;
}
const P6 = {
    entering: { opacity: 1, transform: dg(1) },
    entered: { opacity: 1, transform: 'none' },
  },
  qd =
    typeof navigator < 'u' &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent),
  fg = y.forwardRef(function (t, a) {
    const {
        addEndListener: n,
        appear: i = !0,
        children: o,
        easing: r,
        in: l,
        onEnter: s,
        onEntered: u,
        onEntering: c,
        onExit: f,
        onExited: d,
        onExiting: g,
        style: _,
        timeout: x = 'auto',
        TransitionComponent: S = Wp,
        ...m
      } = t,
      p = H1(),
      h = y.useRef(),
      v = Pi(),
      C = y.useRef(null),
      k = Ut(C, sr(o), a),
      E = (N) => (R) => {
        if (N) {
          const j = C.current;
          R === void 0 ? N(j) : N(j, R);
        }
      },
      M = E(c),
      z = E((N, R) => {
        am(N);
        const {
          duration: j,
          delay: B,
          easing: U,
        } = Ko({ style: _, timeout: x, easing: r }, { mode: 'enter' });
        let q;
        (x === 'auto'
          ? ((q = v.transitions.getAutoHeightDuration(N.clientHeight)), (h.current = q))
          : (q = j),
          (N.style.transition = [
            v.transitions.create('opacity', { duration: q, delay: B }),
            v.transitions.create('transform', {
              duration: qd ? q : q * 0.666,
              delay: B,
              easing: U,
            }),
          ].join(',')),
          s && s(N, R));
      }),
      $ = E(u),
      V = E(g),
      b = E((N) => {
        const {
          duration: R,
          delay: j,
          easing: B,
        } = Ko({ style: _, timeout: x, easing: r }, { mode: 'exit' });
        let U;
        (x === 'auto'
          ? ((U = v.transitions.getAutoHeightDuration(N.clientHeight)), (h.current = U))
          : (U = R),
          (N.style.transition = [
            v.transitions.create('opacity', { duration: U, delay: j }),
            v.transitions.create('transform', {
              duration: qd ? U : U * 0.666,
              delay: qd ? j : j || U * 0.333,
              easing: B,
            }),
          ].join(',')),
          (N.style.opacity = 0),
          (N.style.transform = dg(0.75)),
          f && f(N));
      }),
      O = E(d),
      A = (N) => {
        (x === 'auto' && p.start(h.current || 0, N), n && n(C.current, N));
      };
    return w.jsx(S, {
      appear: i,
      in: l,
      nodeRef: C,
      onEnter: z,
      onEntered: $,
      onEntering: M,
      onExit: b,
      onExited: O,
      onExiting: V,
      addEndListener: A,
      timeout: x === 'auto' ? null : x,
      ...m,
      children: (N, { ownerState: R, ...j }) =>
        y.cloneElement(o, {
          style: {
            opacity: 0,
            transform: dg(0.75),
            visibility: N === 'exited' && !l ? 'hidden' : void 0,
            ...P6[N],
            ..._,
            ...o.props.style,
          },
          ref: k,
          ...j,
        }),
    });
  });
fg && (fg.muiSupportAuto = !0);
const q6 = fg,
  K6 = (e) => {
    const { classes: t, disableUnderline: a } = e,
      i = he({ root: ['root', !a && 'underline'], input: ['input'] }, QA, t);
    return { ...t, ...i };
  },
  Y6 = Y(Yc, {
    shouldForwardProp: (e) => _a(e) || e === 'classes',
    name: 'MuiInput',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [...qc(e, t), !a.disableUnderline && t.underline];
    },
  })(
    Oe(({ theme: e }) => {
      let a = e.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
      return (
        e.vars && (a = e.alpha(e.vars.palette.common.onBackground, e.vars.opacity.inputUnderline)),
        {
          position: 'relative',
          variants: [
            {
              props: ({ ownerState: n }) => n.formControl,
              style: { 'label + &': { marginTop: 16 } },
            },
            {
              props: ({ ownerState: n }) => !n.disableUnderline,
              style: {
                '&::after': {
                  left: 0,
                  bottom: 0,
                  content: '""',
                  position: 'absolute',
                  right: 0,
                  transform: 'scaleX(0)',
                  transition: e.transitions.create('transform', {
                    duration: e.transitions.duration.shorter,
                    easing: e.transitions.easing.easeOut,
                  }),
                  pointerEvents: 'none',
                },
                [`&.${Er.focused}:after`]: { transform: 'scaleX(1) translateX(0)' },
                [`&.${Er.error}`]: {
                  '&::before, &::after': { borderBottomColor: (e.vars || e).palette.error.main },
                },
                '&::before': {
                  borderBottom: `1px solid ${a}`,
                  left: 0,
                  bottom: 0,
                  content: '"\\00a0"',
                  position: 'absolute',
                  right: 0,
                  transition: e.transitions.create('border-bottom-color', {
                    duration: e.transitions.duration.shorter,
                  }),
                  pointerEvents: 'none',
                },
                [`&:hover:not(.${Er.disabled}, .${Er.error}):before`]: {
                  borderBottom: `2px solid ${(e.vars || e).palette.text.primary}`,
                  '@media (hover: none)': { borderBottom: `1px solid ${a}` },
                },
                [`&.${Er.disabled}:before`]: { borderBottomStyle: 'dotted' },
              },
            },
            ...Object.entries(e.palette)
              .filter(Ia())
              .map(([n]) => ({
                props: { color: n, disableUnderline: !1 },
                style: {
                  '&::after': { borderBottom: `2px solid ${(e.vars || e).palette[n].main}` },
                },
              })),
          ],
        }
      );
    })
  ),
  X6 = Y(Xc, { name: 'MuiInput', slot: 'Input', overridesResolver: Kc })({}),
  tS = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiInput' }),
      {
        disableUnderline: i = !1,
        components: o = {},
        componentsProps: r,
        fullWidth: l = !1,
        inputComponent: s = 'input',
        multiline: u = !1,
        slotProps: c,
        slots: f = {},
        type: d = 'text',
        ...g
      } = n,
      _ = K6(n),
      S = { root: { ownerState: { disableUnderline: i } } },
      m = (c ?? r) ? Tt(c ?? r, S) : S,
      p = f.root ?? o.Root ?? Y6,
      h = f.input ?? o.Input ?? X6;
    return w.jsx(om, {
      slots: { root: p, input: h },
      slotProps: m,
      fullWidth: l,
      inputComponent: s,
      multiline: u,
      ref: a,
      type: d,
      ...g,
      classes: _,
    });
  });
tS.muiName = 'Input';
const aS = tS;
function Q6(e) {
  return me('MuiInputLabel', e);
}
ge('MuiInputLabel', [
  'root',
  'focused',
  'disabled',
  'error',
  'required',
  'asterisk',
  'formControl',
  'sizeSmall',
  'shrink',
  'animated',
  'standard',
  'filled',
  'outlined',
]);
const Z6 = (e) => {
    const {
        classes: t,
        formControl: a,
        size: n,
        shrink: i,
        disableAnimation: o,
        variant: r,
        required: l,
      } = e,
      s = {
        root: [
          'root',
          a && 'formControl',
          !o && 'animated',
          i && 'shrink',
          n && n !== 'medium' && `size${Z(n)}`,
          r,
        ],
        asterisk: [l && 'asterisk'],
      },
      u = he(s, Q6, t);
    return { ...t, ...u };
  },
  W6 = Y(G6, {
    shouldForwardProp: (e) => _a(e) || e === 'classes',
    name: 'MuiInputLabel',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [
        { [`& .${nl.asterisk}`]: t.asterisk },
        t.root,
        a.formControl && t.formControl,
        a.size === 'small' && t.sizeSmall,
        a.shrink && t.shrink,
        !a.disableAnimation && t.animated,
        a.focused && t.focused,
        t[a.variant],
      ];
    },
  })(
    Oe(({ theme: e }) => ({
      display: 'block',
      transformOrigin: 'top left',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxWidth: '100%',
      variants: [
        {
          props: ({ ownerState: t }) => t.formControl,
          style: {
            position: 'absolute',
            left: 0,
            top: 0,
            transform: 'translate(0, 20px) scale(1)',
          },
        },
        { props: { size: 'small' }, style: { transform: 'translate(0, 17px) scale(1)' } },
        {
          props: ({ ownerState: t }) => t.shrink,
          style: {
            transform: 'translate(0, -1.5px) scale(0.75)',
            transformOrigin: 'top left',
            maxWidth: '133%',
          },
        },
        {
          props: ({ ownerState: t }) => !t.disableAnimation,
          style: {
            transition: e.transitions.create(['color', 'transform', 'max-width'], {
              duration: e.transitions.duration.shorter,
              easing: e.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: { variant: 'filled' },
          style: {
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(12px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)',
          },
        },
        {
          props: { variant: 'filled', size: 'small' },
          style: { transform: 'translate(12px, 13px) scale(1)' },
        },
        {
          props: ({ variant: t, ownerState: a }) => t === 'filled' && a.shrink,
          style: {
            userSelect: 'none',
            pointerEvents: 'auto',
            transform: 'translate(12px, 7px) scale(0.75)',
            maxWidth: 'calc(133% - 24px)',
          },
        },
        {
          props: ({ variant: t, ownerState: a, size: n }) =>
            t === 'filled' && a.shrink && n === 'small',
          style: { transform: 'translate(12px, 4px) scale(0.75)' },
        },
        {
          props: { variant: 'outlined' },
          style: {
            zIndex: 1,
            pointerEvents: 'none',
            transform: 'translate(14px, 16px) scale(1)',
            maxWidth: 'calc(100% - 24px)',
          },
        },
        {
          props: { variant: 'outlined', size: 'small' },
          style: { transform: 'translate(14px, 9px) scale(1)' },
        },
        {
          props: ({ variant: t, ownerState: a }) => t === 'outlined' && a.shrink,
          style: {
            userSelect: 'none',
            pointerEvents: 'auto',
            maxWidth: 'calc(133% - 32px)',
            transform: 'translate(14px, -9px) scale(0.75)',
          },
        },
      ],
    }))
  ),
  J6 = y.forwardRef(function (t, a) {
    const n = _e({ name: 'MuiInputLabel', props: t }),
      { disableAnimation: i = !1, margin: o, shrink: r, variant: l, className: s, ...u } = n,
      c = cr();
    let f = r;
    typeof f > 'u' && c && (f = c.filled || c.focused || c.adornedStart);
    const d = ur({
        props: n,
        muiFormControl: c,
        states: ['size', 'variant', 'required', 'focused'],
      }),
      g = {
        ...n,
        disableAnimation: i,
        formControl: c,
        shrink: f,
        size: d.size,
        variant: d.variant,
        required: d.required,
        focused: d.focused,
      },
      _ = Z6(g);
    return w.jsx(W6, {
      'data-shrink': f,
      ref: a,
      className: ee(_.root, s),
      ...u,
      ownerState: g,
      classes: _,
    });
  }),
  e3 = J6;
function t3(e) {
  return me('MuiLink', e);
}
const a3 = ge('MuiLink', [
    'root',
    'underlineNone',
    'underlineHover',
    'underlineAlways',
    'button',
    'focusVisible',
  ]),
  n3 = a3,
  i3 = ({ theme: e, ownerState: t }) => {
    const a = t.color;
    if ('colorSpace' in e && e.colorSpace) {
      const o = Qa(e, `palette.${a}.main`) || Qa(e, `palette.${a}`) || t.color;
      return e.alpha(o, 0.4);
    }
    const n = Qa(e, `palette.${a}.main`, !1) || Qa(e, `palette.${a}`, !1) || t.color,
      i = Qa(e, `palette.${a}.mainChannel`) || Qa(e, `palette.${a}Channel`);
    return 'vars' in e && i ? `rgba(${i} / 0.4)` : Fl(n, 0.4);
  },
  o3 = i3,
  q0 = {
    primary: !0,
    secondary: !0,
    error: !0,
    info: !0,
    success: !0,
    warning: !0,
    textPrimary: !0,
    textSecondary: !0,
    textDisabled: !0,
  },
  r3 = (e) => {
    const { classes: t, component: a, focusVisible: n, underline: i } = e,
      o = { root: ['root', `underline${Z(i)}`, a === 'button' && 'button', n && 'focusVisible'] };
    return he(o, t3, t);
  },
  l3 = Y(Xe, {
    name: 'MuiLink',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [t.root, t[`underline${Z(a.underline)}`], a.component === 'button' && t.button];
    },
  })(
    Oe(({ theme: e }) => ({
      variants: [
        { props: { underline: 'none' }, style: { textDecoration: 'none' } },
        {
          props: { underline: 'hover' },
          style: { textDecoration: 'none', '&:hover': { textDecoration: 'underline' } },
        },
        {
          props: { underline: 'always' },
          style: { textDecoration: 'underline', '&:hover': { textDecorationColor: 'inherit' } },
        },
        {
          props: ({ underline: t, ownerState: a }) => t === 'always' && a.color !== 'inherit',
          style: { textDecorationColor: 'var(--Link-underlineColor)' },
        },
        {
          props: ({ underline: t, ownerState: a }) => t === 'always' && a.color === 'inherit',
          style: e.colorSpace ? { textDecorationColor: e.alpha('currentColor', 0.4) } : null,
        },
        ...Object.entries(e.palette)
          .filter(Ia())
          .map(([t]) => ({
            props: { underline: 'always', color: t },
            style: { '--Link-underlineColor': e.alpha((e.vars || e).palette[t].main, 0.4) },
          })),
        {
          props: { underline: 'always', color: 'textPrimary' },
          style: { '--Link-underlineColor': e.alpha((e.vars || e).palette.text.primary, 0.4) },
        },
        {
          props: { underline: 'always', color: 'textSecondary' },
          style: { '--Link-underlineColor': e.alpha((e.vars || e).palette.text.secondary, 0.4) },
        },
        {
          props: { underline: 'always', color: 'textDisabled' },
          style: { '--Link-underlineColor': (e.vars || e).palette.text.disabled },
        },
        {
          props: { component: 'button' },
          style: {
            position: 'relative',
            WebkitTapHighlightColor: 'transparent',
            backgroundColor: 'transparent',
            outline: 0,
            border: 0,
            margin: 0,
            borderRadius: 0,
            padding: 0,
            cursor: 'pointer',
            userSelect: 'none',
            verticalAlign: 'middle',
            MozAppearance: 'none',
            WebkitAppearance: 'none',
            '&::-moz-focus-inner': { borderStyle: 'none' },
            [`&.${n3.focusVisible}`]: { outline: 'auto' },
          },
        },
      ],
    }))
  ),
  s3 = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiLink' }),
      i = Pi(),
      {
        className: o,
        color: r = 'primary',
        component: l = 'a',
        onBlur: s,
        onFocus: u,
        TypographyClasses: c,
        underline: f = 'always',
        variant: d = 'inherit',
        sx: g,
        ..._
      } = n,
      [x, S] = y.useState(!1),
      m = (C) => {
        (Au(C.target) || S(!1), s && s(C));
      },
      p = (C) => {
        (Au(C.target) && S(!0), u && u(C));
      },
      h = { ...n, color: r, component: l, focusVisible: x, underline: f, variant: d },
      v = r3(h);
    return w.jsx(l3, {
      color: r,
      className: ee(v.root, o),
      classes: c,
      component: l,
      onBlur: m,
      onFocus: p,
      ref: a,
      ownerState: h,
      variant: d,
      ..._,
      sx: [...(q0[r] === void 0 ? [{ color: r }] : []), ...(Array.isArray(g) ? g : [g])],
      style: {
        ..._.style,
        ...(f === 'always' &&
          r !== 'inherit' &&
          !q0[r] && { '--Link-underlineColor': o3({ theme: i, ownerState: h }) }),
      },
    });
  }),
  Da = s3,
  u3 = y.createContext({}),
  gg = u3;
function c3(e) {
  return me('MuiList', e);
}
ge('MuiList', ['root', 'padding', 'dense', 'subheader']);
const d3 = (e) => {
    const { classes: t, disablePadding: a, dense: n, subheader: i } = e;
    return he({ root: ['root', !a && 'padding', n && 'dense', i && 'subheader'] }, c3, t);
  },
  f3 = Y('ul', {
    name: 'MuiList',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [
        t.root,
        !a.disablePadding && t.padding,
        a.dense && t.dense,
        a.subheader && t.subheader,
      ];
    },
  })({
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative',
    variants: [
      {
        props: ({ ownerState: e }) => !e.disablePadding,
        style: { paddingTop: 8, paddingBottom: 8 },
      },
      { props: ({ ownerState: e }) => e.subheader, style: { paddingTop: 0 } },
    ],
  }),
  g3 = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiList' }),
      {
        children: i,
        className: o,
        component: r = 'ul',
        dense: l = !1,
        disablePadding: s = !1,
        subheader: u,
        ...c
      } = n,
      f = y.useMemo(() => ({ dense: l }), [l]),
      d = { ...n, component: r, dense: l, disablePadding: s },
      g = d3(d);
    return w.jsx(gg.Provider, {
      value: f,
      children: w.jsxs(f3, {
        as: r,
        className: ee(g.root, o),
        ref: a,
        ownerState: d,
        ...c,
        children: [u, i],
      }),
    });
  }),
  p3 = g3,
  m3 = ge('MuiListItemIcon', ['root', 'alignItemsFlexStart']),
  K0 = m3,
  h3 = ge('MuiListItemText', ['root', 'multiline', 'dense', 'inset', 'primary', 'secondary']),
  Y0 = h3;
function Kd(e, t, a) {
  return e === t
    ? e.firstChild
    : t && t.nextElementSibling
      ? t.nextElementSibling
      : a
        ? null
        : e.firstChild;
}
function X0(e, t, a) {
  return e === t
    ? a
      ? e.firstChild
      : e.lastChild
    : t && t.previousElementSibling
      ? t.previousElementSibling
      : a
        ? null
        : e.lastChild;
}
function nS(e, t) {
  if (t === void 0) return !0;
  let a = e.innerText;
  return (
    a === void 0 && (a = e.textContent),
    (a = a.trim().toLowerCase()),
    a.length === 0 ? !1 : t.repeating ? a[0] === t.keys[0] : a.startsWith(t.keys.join(''))
  );
}
function Fr(e, t, a, n, i, o) {
  let r = !1,
    l = i(e, t, t ? a : !1);
  for (; l; ) {
    if (l === e.firstChild) {
      if (r) return !1;
      r = !0;
    }
    const s = n ? !1 : l.disabled || l.getAttribute('aria-disabled') === 'true';
    if (!l.hasAttribute('tabindex') || !nS(l, o) || s) l = i(e, l, a);
    else return (l.focus(), !0);
  }
  return !1;
}
const v3 = y.forwardRef(function (t, a) {
    const {
        actions: n,
        autoFocus: i = !1,
        autoFocusItem: o = !1,
        children: r,
        className: l,
        disabledItemsFocusable: s = !1,
        disableListWrap: u = !1,
        onKeyDown: c,
        variant: f = 'selectedMenu',
        ...d
      } = t,
      g = y.useRef(null),
      _ = y.useRef({ keys: [], repeating: !0, previousKeyMatched: !0, lastTime: null });
    (ui(() => {
      i && g.current.focus();
    }, [i]),
      y.useImperativeHandle(
        n,
        () => ({
          adjustStyleForScrollbar: (h, { direction: v }) => {
            const C = !g.current.style.width;
            if (h.clientHeight < g.current.clientHeight && C) {
              const k = `${X1(Ga(h))}px`;
              ((g.current.style[v === 'rtl' ? 'paddingLeft' : 'paddingRight'] = k),
                (g.current.style.width = `calc(100% + ${k})`));
            }
            return g.current;
          },
        }),
        []
      ));
    const x = (h) => {
        const v = g.current,
          C = h.key;
        if (h.ctrlKey || h.metaKey || h.altKey) {
          c && c(h);
          return;
        }
        const E = Ur(Va(v));
        if (C === 'ArrowDown') (h.preventDefault(), Fr(v, E, u, s, Kd));
        else if (C === 'ArrowUp') (h.preventDefault(), Fr(v, E, u, s, X0));
        else if (C === 'Home') (h.preventDefault(), Fr(v, null, u, s, Kd));
        else if (C === 'End') (h.preventDefault(), Fr(v, null, u, s, X0));
        else if (C.length === 1) {
          const M = _.current,
            z = C.toLowerCase(),
            $ = performance.now();
          (M.keys.length > 0 &&
            ($ - M.lastTime > 500
              ? ((M.keys = []), (M.repeating = !0), (M.previousKeyMatched = !0))
              : M.repeating && z !== M.keys[0] && (M.repeating = !1)),
            (M.lastTime = $),
            M.keys.push(z));
          const V = E && !M.repeating && nS(E, M);
          M.previousKeyMatched && (V || Fr(v, E, !1, s, Kd, M))
            ? h.preventDefault()
            : (M.previousKeyMatched = !1);
        }
        c && c(h);
      },
      S = Ut(g, a);
    let m = -1;
    y.Children.forEach(r, (h, v) => {
      if (!y.isValidElement(h)) {
        m === v && ((m += 1), m >= r.length && (m = -1));
        return;
      }
      (h.props.disabled || (((f === 'selectedMenu' && h.props.selected) || m === -1) && (m = v)),
        m === v &&
          (h.props.disabled || h.props.muiSkipListHighlight || h.type.muiSkipListHighlight) &&
          ((m += 1), m >= r.length && (m = -1)));
    });
    const p = y.Children.map(r, (h, v) => {
      if (v === m) {
        const C = {};
        return (
          o && (C.autoFocus = !0),
          h.props.tabIndex === void 0 && f === 'selectedMenu' && (C.tabIndex = 0),
          y.cloneElement(h, C)
        );
      }
      return h;
    });
    return w.jsx(p3, {
      role: 'menu',
      ref: S,
      className: l,
      onKeyDown: x,
      tabIndex: i ? 0 : -1,
      ...d,
      children: p,
    });
  }),
  _3 = v3;
function y3(e) {
  return me('MuiPopover', e);
}
ge('MuiPopover', ['root', 'paper']);
function Q0(e, t) {
  let a = 0;
  return (
    typeof t == 'number'
      ? (a = t)
      : t === 'center'
        ? (a = e.height / 2)
        : t === 'bottom' && (a = e.height),
    a
  );
}
function Z0(e, t) {
  let a = 0;
  return (
    typeof t == 'number'
      ? (a = t)
      : t === 'center'
        ? (a = e.width / 2)
        : t === 'right' && (a = e.width),
    a
  );
}
function W0(e) {
  return [e.horizontal, e.vertical].map((t) => (typeof t == 'number' ? `${t}px` : t)).join(' ');
}
function ws(e) {
  return typeof e == 'function' ? e() : e;
}
const b3 = (e) => {
    const { classes: t } = e;
    return he({ root: ['root'], paper: ['paper'] }, y3, t);
  },
  S3 = Y(Q1, { name: 'MuiPopover', slot: 'Root' })({}),
  iS = Y(Pc, { name: 'MuiPopover', slot: 'Paper' })({
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    outline: 0,
  }),
  x3 = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiPopover' }),
      {
        action: i,
        anchorEl: o,
        anchorOrigin: r = { vertical: 'top', horizontal: 'left' },
        anchorPosition: l,
        anchorReference: s = 'anchorEl',
        children: u,
        className: c,
        container: f,
        elevation: d = 8,
        marginThreshold: g = 16,
        open: _,
        PaperProps: x = {},
        slots: S = {},
        slotProps: m = {},
        transformOrigin: p = { vertical: 'top', horizontal: 'left' },
        TransitionComponent: h,
        transitionDuration: v = 'auto',
        TransitionProps: C = {},
        disableScrollLock: k = !1,
        ...E
      } = n,
      M = y.useRef(),
      z = {
        ...n,
        anchorOrigin: r,
        anchorReference: s,
        elevation: d,
        marginThreshold: g,
        transformOrigin: p,
        TransitionComponent: h,
        transitionDuration: v,
        TransitionProps: C,
      },
      $ = b3(z),
      V = y.useCallback(() => {
        if (s === 'anchorPosition') return l;
        const te = ws(o),
          Fe = (te && te.nodeType === 1 ? te : Va(M.current).body).getBoundingClientRect();
        return { top: Fe.top + Q0(Fe, r.vertical), left: Fe.left + Z0(Fe, r.horizontal) };
      }, [o, r.horizontal, r.vertical, l, s]),
      b = y.useCallback(
        (te) => ({ vertical: Q0(te, p.vertical), horizontal: Z0(te, p.horizontal) }),
        [p.horizontal, p.vertical]
      ),
      O = y.useCallback(
        (te) => {
          const se = { width: te.offsetWidth, height: te.offsetHeight },
            Fe = b(se);
          if (s === 'none') return { top: null, left: null, transformOrigin: W0(Fe) };
          const St = V();
          let ie = St.top - Fe.vertical,
            be = St.left - Fe.horizontal;
          const xt = ie + se.height,
            Mt = be + se.width,
            st = Ga(ws(o)),
            ya = st.innerHeight - g,
            Kt = st.innerWidth - g;
          if (g !== null && ie < g) {
            const F = ie - g;
            ((ie -= F), (Fe.vertical += F));
          } else if (g !== null && xt > ya) {
            const F = xt - ya;
            ((ie -= F), (Fe.vertical += F));
          }
          if (g !== null && be < g) {
            const F = be - g;
            ((be -= F), (Fe.horizontal += F));
          } else if (Mt > Kt) {
            const F = Mt - Kt;
            ((be -= F), (Fe.horizontal += F));
          }
          return {
            top: `${Math.round(ie)}px`,
            left: `${Math.round(be)}px`,
            transformOrigin: W0(Fe),
          };
        },
        [o, s, V, b, g]
      ),
      [A, N] = y.useState(_),
      R = y.useCallback(() => {
        const te = M.current;
        if (!te) return;
        const se = O(te);
        (se.top !== null && te.style.setProperty('top', se.top),
          se.left !== null && (te.style.left = se.left),
          (te.style.transformOrigin = se.transformOrigin),
          N(!0));
      }, [O]);
    y.useEffect(
      () => (
        k && window.addEventListener('scroll', R),
        () => window.removeEventListener('scroll', R)
      ),
      [o, k, R]
    );
    const j = () => {
        R();
      },
      B = () => {
        N(!1);
      };
    (y.useEffect(() => {
      _ && R();
    }),
      y.useImperativeHandle(
        i,
        () =>
          _
            ? {
                updatePosition: () => {
                  R();
                },
              }
            : null,
        [_, R]
      ),
      y.useEffect(() => {
        if (!_) return;
        const te = Zp(() => {
            R();
          }),
          se = Ga(ws(o));
        return (
          se.addEventListener('resize', te),
          () => {
            (te.clear(), se.removeEventListener('resize', te));
          }
        );
      }, [o, _, R]));
    let U = v;
    const q = { slots: { transition: h, ...S }, slotProps: { transition: C, paper: x, ...m } },
      [X, ye] = ht('transition', {
        elementType: q6,
        externalForwardedProps: q,
        ownerState: z,
        getSlotProps: (te) => ({
          ...te,
          onEntering: (se, Fe) => {
            var St;
            ((St = te.onEntering) == null || St.call(te, se, Fe), j());
          },
          onExited: (se) => {
            var Fe;
            ((Fe = te.onExited) == null || Fe.call(te, se), B());
          },
        }),
        additionalProps: { appear: !0, in: _ },
      });
    v === 'auto' && !X.muiSupportAuto && (U = void 0);
    const le = f || (o ? Va(ws(o)).body : void 0),
      [Ee, { slots: je, slotProps: Je, ...Ze }] = ht('root', {
        ref: a,
        elementType: S3,
        externalForwardedProps: { ...q, ...E },
        shouldForwardComponentProp: !0,
        additionalProps: {
          slots: { backdrop: S.backdrop },
          slotProps: {
            backdrop: $1(typeof m.backdrop == 'function' ? m.backdrop(z) : m.backdrop, {
              invisible: !0,
            }),
          },
          container: le,
          open: _,
        },
        ownerState: z,
        className: ee($.root, c),
      }),
      [At, Le] = ht('paper', {
        ref: M,
        className: $.paper,
        elementType: iS,
        externalForwardedProps: q,
        shouldForwardComponentProp: !0,
        additionalProps: { elevation: d, style: A ? void 0 : { opacity: 0 } },
        ownerState: z,
      });
    return w.jsx(Ee, {
      ...Ze,
      ...(!Ru(Ee) && { slots: je, slotProps: Je, disableScrollLock: k }),
      children: w.jsx(X, { ...ye, timeout: U, children: w.jsx(At, { ...Le, children: u }) }),
    });
  }),
  w3 = x3;
function C3(e) {
  return me('MuiMenu', e);
}
ge('MuiMenu', ['root', 'paper', 'list']);
const k3 = { vertical: 'top', horizontal: 'right' },
  E3 = { vertical: 'top', horizontal: 'left' },
  F3 = (e) => {
    const { classes: t } = e;
    return he({ root: ['root'], paper: ['paper'], list: ['list'] }, C3, t);
  },
  T3 = Y(w3, { shouldForwardProp: (e) => _a(e) || e === 'classes', name: 'MuiMenu', slot: 'Root' })(
    {}
  ),
  R3 = Y(iS, { name: 'MuiMenu', slot: 'Paper' })({
    maxHeight: 'calc(100% - 96px)',
    WebkitOverflowScrolling: 'touch',
  }),
  A3 = Y(_3, { name: 'MuiMenu', slot: 'List' })({ outline: 0 }),
  M3 = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiMenu' }),
      {
        autoFocus: i = !0,
        children: o,
        className: r,
        disableAutoFocusItem: l = !1,
        MenuListProps: s = {},
        onClose: u,
        open: c,
        PaperProps: f = {},
        PopoverClasses: d,
        transitionDuration: g = 'auto',
        TransitionProps: { onEntering: _, ...x } = {},
        variant: S = 'selectedMenu',
        slots: m = {},
        slotProps: p = {},
        ...h
      } = n,
      v = F1(),
      C = {
        ...n,
        autoFocus: i,
        disableAutoFocusItem: l,
        MenuListProps: s,
        onEntering: _,
        PaperProps: f,
        transitionDuration: g,
        TransitionProps: x,
        variant: S,
      },
      k = F3(C),
      E = i && !l && c,
      M = y.useRef(null),
      z = (U, q) => {
        (M.current && M.current.adjustStyleForScrollbar(U, { direction: v ? 'rtl' : 'ltr' }),
          _ && _(U, q));
      },
      $ = (U) => {
        U.key === 'Tab' && (U.preventDefault(), u && u(U, 'tabKeyDown'));
      };
    let V = -1;
    y.Children.map(o, (U, q) => {
      y.isValidElement(U) &&
        (U.props.disabled || (((S === 'selectedMenu' && U.props.selected) || V === -1) && (V = q)));
    });
    const b = { slots: m, slotProps: { list: s, transition: x, paper: f, ...p } },
      O = LA({
        elementType: m.root,
        externalSlotProps: p.root,
        ownerState: C,
        className: [k.root, r],
      }),
      [A, N] = ht('paper', {
        className: k.paper,
        elementType: R3,
        externalForwardedProps: b,
        shouldForwardComponentProp: !0,
        ownerState: C,
      }),
      [R, j] = ht('list', {
        className: ee(k.list, s.className),
        elementType: A3,
        shouldForwardComponentProp: !0,
        externalForwardedProps: b,
        getSlotProps: (U) => ({
          ...U,
          onKeyDown: (q) => {
            var X;
            ($(q), (X = U.onKeyDown) == null || X.call(U, q));
          },
        }),
        ownerState: C,
      }),
      B =
        typeof b.slotProps.transition == 'function'
          ? b.slotProps.transition(C)
          : b.slotProps.transition;
    return w.jsx(T3, {
      onClose: u,
      anchorOrigin: { vertical: 'bottom', horizontal: v ? 'right' : 'left' },
      transformOrigin: v ? k3 : E3,
      slots: {
        root: m.root,
        paper: A,
        backdrop: m.backdrop,
        ...(m.transition && { transition: m.transition }),
      },
      slotProps: {
        root: O,
        paper: N,
        backdrop: typeof p.backdrop == 'function' ? p.backdrop(C) : p.backdrop,
        transition: {
          ...B,
          onEntering: (...U) => {
            var q;
            (z(...U), (q = B == null ? void 0 : B.onEntering) == null || q.call(B, ...U));
          },
        },
      },
      open: c,
      ref: a,
      transitionDuration: g,
      ownerState: C,
      ...h,
      classes: d,
      children: w.jsx(R, {
        actions: M,
        autoFocus: i && (V === -1 || l),
        autoFocusItem: E,
        variant: S,
        ...j,
        children: o,
      }),
    });
  }),
  oS = M3;
function O3(e) {
  return me('MuiMenuItem', e);
}
const N3 = ge('MuiMenuItem', [
    'root',
    'focusVisible',
    'dense',
    'disabled',
    'divider',
    'gutters',
    'selected',
  ]),
  Tr = N3,
  z3 = (e, t) => {
    const { ownerState: a } = e;
    return [t.root, a.dense && t.dense, a.divider && t.divider, !a.disableGutters && t.gutters];
  },
  B3 = (e) => {
    const { disabled: t, dense: a, divider: n, disableGutters: i, selected: o, classes: r } = e,
      s = he(
        {
          root: [
            'root',
            a && 'dense',
            t && 'disabled',
            !i && 'gutters',
            n && 'divider',
            o && 'selected',
          ],
        },
        O3,
        r
      );
    return { ...r, ...s };
  },
  L3 = Y(nm, {
    shouldForwardProp: (e) => _a(e) || e === 'classes',
    name: 'MuiMenuItem',
    slot: 'Root',
    overridesResolver: z3,
  })(
    Oe(({ theme: e }) => ({
      ...e.typography.body1,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: 'border-box',
      whiteSpace: 'nowrap',
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: (e.vars || e).palette.action.hover,
        '@media (hover: none)': { backgroundColor: 'transparent' },
      },
      [`&.${Tr.selected}`]: {
        backgroundColor: e.alpha(
          (e.vars || e).palette.primary.main,
          (e.vars || e).palette.action.selectedOpacity
        ),
        [`&.${Tr.focusVisible}`]: {
          backgroundColor: e.alpha(
            (e.vars || e).palette.primary.main,
            `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.focusOpacity}`
          ),
        },
      },
      [`&.${Tr.selected}:hover`]: {
        backgroundColor: e.alpha(
          (e.vars || e).palette.primary.main,
          `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`
        ),
        '@media (hover: none)': {
          backgroundColor: e.alpha(
            (e.vars || e).palette.primary.main,
            (e.vars || e).palette.action.selectedOpacity
          ),
        },
      },
      [`&.${Tr.focusVisible}`]: { backgroundColor: (e.vars || e).palette.action.focus },
      [`&.${Tr.disabled}`]: { opacity: (e.vars || e).palette.action.disabledOpacity },
      [`& + .${G0.root}`]: { marginTop: e.spacing(1), marginBottom: e.spacing(1) },
      [`& + .${G0.inset}`]: { marginLeft: 52 },
      [`& .${Y0.root}`]: { marginTop: 0, marginBottom: 0 },
      [`& .${Y0.inset}`]: { paddingLeft: 36 },
      [`& .${K0.root}`]: { minWidth: 36 },
      variants: [
        {
          props: ({ ownerState: t }) => !t.disableGutters,
          style: { paddingLeft: 16, paddingRight: 16 },
        },
        {
          props: ({ ownerState: t }) => t.divider,
          style: {
            borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
            backgroundClip: 'padding-box',
          },
        },
        {
          props: ({ ownerState: t }) => !t.dense,
          style: { [e.breakpoints.up('sm')]: { minHeight: 'auto' } },
        },
        {
          props: ({ ownerState: t }) => t.dense,
          style: {
            minHeight: 32,
            paddingTop: 4,
            paddingBottom: 4,
            ...e.typography.body2,
            [`& .${K0.root} svg`]: { fontSize: '1.25rem' },
          },
        },
      ],
    }))
  ),
  $3 = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiMenuItem' }),
      {
        autoFocus: i = !1,
        component: o = 'li',
        dense: r = !1,
        divider: l = !1,
        disableGutters: s = !1,
        focusVisibleClassName: u,
        role: c = 'menuitem',
        tabIndex: f,
        className: d,
        ...g
      } = n,
      _ = y.useContext(gg),
      x = y.useMemo(() => ({ dense: r || _.dense || !1, disableGutters: s }), [_.dense, r, s]),
      S = y.useRef(null);
    ui(() => {
      i && S.current && S.current.focus();
    }, [i]);
    const m = { ...n, dense: x.dense, divider: l, disableGutters: s },
      p = B3(n),
      h = Ut(S, a);
    let v;
    return (
      n.disabled || (v = f !== void 0 ? f : -1),
      w.jsx(gg.Provider, {
        value: x,
        children: w.jsx(L3, {
          ref: h,
          role: c,
          tabIndex: v,
          component: o,
          focusVisibleClassName: ee(p.focusVisible, u),
          className: ee(p.root, d),
          ...g,
          ownerState: m,
          classes: p,
        }),
      })
    );
  }),
  pg = $3;
function D3(e) {
  return me('MuiNativeSelect', e);
}
const j3 = ge('MuiNativeSelect', [
    'root',
    'select',
    'multiple',
    'filled',
    'outlined',
    'standard',
    'disabled',
    'icon',
    'iconOpen',
    'iconFilled',
    'iconOutlined',
    'iconStandard',
    'nativeInput',
    'error',
  ]),
  rm = j3,
  U3 = (e) => {
    const { classes: t, variant: a, disabled: n, multiple: i, open: o, error: r } = e,
      l = {
        select: ['select', a, n && 'disabled', i && 'multiple', r && 'error'],
        icon: ['icon', `icon${Z(a)}`, o && 'iconOpen', n && 'disabled'],
      };
    return he(l, D3, t);
  },
  rS = Y('select', { name: 'MuiNativeSelect' })(({ theme: e }) => ({
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    userSelect: 'none',
    borderRadius: 0,
    cursor: 'pointer',
    '&:focus': { borderRadius: 0 },
    [`&.${rm.disabled}`]: { cursor: 'default' },
    '&[multiple]': { height: 'auto' },
    '&:not([multiple]) option, &:not([multiple]) optgroup': {
      backgroundColor: (e.vars || e).palette.background.paper,
    },
    variants: [
      {
        props: ({ ownerState: t }) => t.variant !== 'filled' && t.variant !== 'outlined',
        style: { '&&&': { paddingRight: 24, minWidth: 16 } },
      },
      { props: { variant: 'filled' }, style: { '&&&': { paddingRight: 32 } } },
      {
        props: { variant: 'outlined' },
        style: {
          borderRadius: (e.vars || e).shape.borderRadius,
          '&:focus': { borderRadius: (e.vars || e).shape.borderRadius },
          '&&&': { paddingRight: 32 },
        },
      },
    ],
  })),
  H3 = Y(rS, {
    name: 'MuiNativeSelect',
    slot: 'Select',
    shouldForwardProp: _a,
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [t.select, t[a.variant], a.error && t.error, { [`&.${rm.multiple}`]: t.multiple }];
    },
  })({}),
  lS = Y('svg', { name: 'MuiNativeSelect' })(({ theme: e }) => ({
    position: 'absolute',
    right: 0,
    top: 'calc(50% - .5em)',
    pointerEvents: 'none',
    color: (e.vars || e).palette.action.active,
    [`&.${rm.disabled}`]: { color: (e.vars || e).palette.action.disabled },
    variants: [
      { props: ({ ownerState: t }) => t.open, style: { transform: 'rotate(180deg)' } },
      { props: { variant: 'filled' }, style: { right: 7 } },
      { props: { variant: 'outlined' }, style: { right: 7 } },
    ],
  })),
  V3 = Y(lS, {
    name: 'MuiNativeSelect',
    slot: 'Icon',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [t.icon, a.variant && t[`icon${Z(a.variant)}`], a.open && t.iconOpen];
    },
  })({}),
  G3 = y.forwardRef(function (t, a) {
    const {
        className: n,
        disabled: i,
        error: o,
        IconComponent: r,
        inputRef: l,
        variant: s = 'standard',
        ...u
      } = t,
      c = { ...t, disabled: i, variant: s, error: o },
      f = U3(c);
    return w.jsxs(y.Fragment, {
      children: [
        w.jsx(H3, { ownerState: c, className: ee(f.select, n), disabled: i, ref: l || a, ...u }),
        t.multiple ? null : w.jsx(V3, { as: r, ownerState: c, className: f.icon }),
      ],
    });
  }),
  I3 = G3;
var J0;
const P3 = Y('fieldset', { name: 'MuiNotchedOutlined', shouldForwardProp: _a })({
    textAlign: 'left',
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: '0 8px',
    pointerEvents: 'none',
    borderRadius: 'inherit',
    borderStyle: 'solid',
    borderWidth: 1,
    overflow: 'hidden',
    minWidth: '0%',
  }),
  q3 = Y('legend', { name: 'MuiNotchedOutlined', shouldForwardProp: _a })(
    Oe(({ theme: e }) => ({
      float: 'unset',
      width: 'auto',
      overflow: 'hidden',
      variants: [
        {
          props: ({ ownerState: t }) => !t.withLabel,
          style: {
            padding: 0,
            lineHeight: '11px',
            transition: e.transitions.create('width', {
              duration: 150,
              easing: e.transitions.easing.easeOut,
            }),
          },
        },
        {
          props: ({ ownerState: t }) => t.withLabel,
          style: {
            display: 'block',
            padding: 0,
            height: 11,
            fontSize: '0.75em',
            visibility: 'hidden',
            maxWidth: 0.01,
            transition: e.transitions.create('max-width', {
              duration: 50,
              easing: e.transitions.easing.easeOut,
            }),
            whiteSpace: 'nowrap',
            '& > span': {
              paddingLeft: 5,
              paddingRight: 5,
              display: 'inline-block',
              opacity: 0,
              visibility: 'visible',
            },
          },
        },
        {
          props: ({ ownerState: t }) => t.withLabel && t.notched,
          style: {
            maxWidth: '100%',
            transition: e.transitions.create('max-width', {
              duration: 100,
              easing: e.transitions.easing.easeOut,
              delay: 50,
            }),
          },
        },
      ],
    }))
  );
function K3(e) {
  const { children: t, classes: a, className: n, label: i, notched: o, ...r } = e,
    l = i != null && i !== '',
    s = { ...e, notched: o, withLabel: l };
  return w.jsx(P3, {
    'aria-hidden': !0,
    className: n,
    ownerState: s,
    ...r,
    children: w.jsx(q3, {
      ownerState: s,
      children: l
        ? w.jsx('span', { children: i })
        : J0 ||
          (J0 = w.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' })),
    }),
  });
}
const Y3 = (e) => {
    const { classes: t } = e,
      n = he({ root: ['root'], notchedOutline: ['notchedOutline'], input: ['input'] }, WA, t);
    return { ...t, ...n };
  },
  X3 = Y(Yc, {
    shouldForwardProp: (e) => _a(e) || e === 'classes',
    name: 'MuiOutlinedInput',
    slot: 'Root',
    overridesResolver: qc,
  })(
    Oe(({ theme: e }) => {
      const t = e.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
      return {
        position: 'relative',
        borderRadius: (e.vars || e).shape.borderRadius,
        [`&:hover .${Ka.notchedOutline}`]: { borderColor: (e.vars || e).palette.text.primary },
        '@media (hover: none)': {
          [`&:hover .${Ka.notchedOutline}`]: {
            borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t,
          },
        },
        [`&.${Ka.focused} .${Ka.notchedOutline}`]: { borderWidth: 2 },
        variants: [
          ...Object.entries(e.palette)
            .filter(Ia())
            .map(([a]) => ({
              props: { color: a },
              style: {
                [`&.${Ka.focused} .${Ka.notchedOutline}`]: {
                  borderColor: (e.vars || e).palette[a].main,
                },
              },
            })),
          {
            props: {},
            style: {
              [`&.${Ka.error} .${Ka.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.error.main,
              },
              [`&.${Ka.disabled} .${Ka.notchedOutline}`]: {
                borderColor: (e.vars || e).palette.action.disabled,
              },
            },
          },
          { props: ({ ownerState: a }) => a.startAdornment, style: { paddingLeft: 14 } },
          { props: ({ ownerState: a }) => a.endAdornment, style: { paddingRight: 14 } },
          { props: ({ ownerState: a }) => a.multiline, style: { padding: '16.5px 14px' } },
          {
            props: ({ ownerState: a, size: n }) => a.multiline && n === 'small',
            style: { padding: '8.5px 14px' },
          },
        ],
      };
    })
  ),
  Q3 = Y(K3, { name: 'MuiOutlinedInput', slot: 'NotchedOutline' })(
    Oe(({ theme: e }) => {
      const t = e.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
      return { borderColor: e.vars ? e.alpha(e.vars.palette.common.onBackground, 0.23) : t };
    })
  ),
  Z3 = Y(Xc, { name: 'MuiOutlinedInput', slot: 'Input', overridesResolver: Kc })(
    Oe(({ theme: e }) => ({
      padding: '16.5px 14px',
      ...(!e.vars && {
        '&:-webkit-autofill': {
          WebkitBoxShadow: e.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: e.palette.mode === 'light' ? null : '#fff',
          caretColor: e.palette.mode === 'light' ? null : '#fff',
          borderRadius: 'inherit',
        },
      }),
      ...(e.vars && {
        '&:-webkit-autofill': { borderRadius: 'inherit' },
        [e.getColorSchemeSelector('dark')]: {
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #266798 inset',
            WebkitTextFillColor: '#fff',
            caretColor: '#fff',
          },
        },
      }),
      variants: [
        { props: { size: 'small' }, style: { padding: '8.5px 14px' } },
        { props: ({ ownerState: t }) => t.multiline, style: { padding: 0 } },
        { props: ({ ownerState: t }) => t.startAdornment, style: { paddingLeft: 0 } },
        { props: ({ ownerState: t }) => t.endAdornment, style: { paddingRight: 0 } },
      ],
    }))
  ),
  sS = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiOutlinedInput' }),
      {
        components: i = {},
        fullWidth: o = !1,
        inputComponent: r = 'input',
        label: l,
        multiline: s = !1,
        notched: u,
        slots: c = {},
        slotProps: f = {},
        type: d = 'text',
        ...g
      } = n,
      _ = Y3(n),
      x = cr(),
      S = ur({
        props: n,
        muiFormControl: x,
        states: ['color', 'disabled', 'error', 'focused', 'hiddenLabel', 'size', 'required'],
      }),
      m = {
        ...n,
        color: S.color || 'primary',
        disabled: S.disabled,
        error: S.error,
        focused: S.focused,
        formControl: x,
        fullWidth: o,
        hiddenLabel: S.hiddenLabel,
        multiline: s,
        size: S.size,
        type: d,
      },
      p = c.root ?? i.Root ?? X3,
      h = c.input ?? i.Input ?? Z3,
      [v, C] = ht('notchedOutline', {
        elementType: Q3,
        className: _.notchedOutline,
        shouldForwardComponentProp: !0,
        ownerState: m,
        externalForwardedProps: { slots: c, slotProps: f },
        additionalProps: {
          label:
            l != null && l !== '' && S.required
              ? w.jsxs(y.Fragment, { children: [l, ' ', '*'] })
              : l,
        },
      });
    return w.jsx(om, {
      slots: { root: p, input: h },
      slotProps: f,
      renderSuffix: (k) =>
        w.jsx(v, {
          ...C,
          notched: typeof u < 'u' ? u : !!(k.startAdornment || k.filled || k.focused),
        }),
      fullWidth: o,
      inputComponent: r,
      multiline: s,
      ref: a,
      type: d,
      ...g,
      classes: { ..._, notchedOutline: null },
    });
  });
sS.muiName = 'Input';
const uS = sS;
function cS(e) {
  return me('MuiSelect', e);
}
const Rr = ge('MuiSelect', [
  'root',
  'select',
  'multiple',
  'filled',
  'outlined',
  'standard',
  'disabled',
  'focused',
  'icon',
  'iconOpen',
  'iconFilled',
  'iconOutlined',
  'iconStandard',
  'nativeInput',
  'error',
]);
var ev;
const W3 = Y(rS, {
    name: 'MuiSelect',
    slot: 'Select',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [
        { [`&.${Rr.select}`]: t.select },
        { [`&.${Rr.select}`]: t[a.variant] },
        { [`&.${Rr.error}`]: t.error },
        { [`&.${Rr.multiple}`]: t.multiple },
      ];
    },
  })({
    [`&.${Rr.select}`]: {
      height: 'auto',
      minHeight: '1.4375em',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  }),
  J3 = Y(lS, {
    name: 'MuiSelect',
    slot: 'Icon',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [t.icon, a.variant && t[`icon${Z(a.variant)}`], a.open && t.iconOpen];
    },
  })({}),
  eM = Y('input', {
    shouldForwardProp: (e) => B1(e) && e !== 'classes',
    name: 'MuiSelect',
    slot: 'NativeInput',
  })({
    bottom: 0,
    left: 0,
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
    width: '100%',
    boxSizing: 'border-box',
  });
function tv(e, t) {
  return typeof t == 'object' && t !== null ? e === t : String(e) === String(t);
}
function tM(e) {
  return e == null || (typeof e == 'string' && !e.trim());
}
const aM = (e) => {
    const { classes: t, variant: a, disabled: n, multiple: i, open: o, error: r } = e,
      l = {
        select: ['select', a, n && 'disabled', i && 'multiple', r && 'error'],
        icon: ['icon', `icon${Z(a)}`, o && 'iconOpen', n && 'disabled'],
        nativeInput: ['nativeInput'],
      };
    return he(l, cS, t);
  },
  nM = y.forwardRef(function (t, a) {
    var gr, Jl, pr, mm;
    const {
        'aria-describedby': n,
        'aria-label': i,
        autoFocus: o,
        autoWidth: r,
        children: l,
        className: s,
        defaultOpen: u,
        defaultValue: c,
        disabled: f,
        displayEmpty: d,
        error: g = !1,
        IconComponent: _,
        inputRef: x,
        labelId: S,
        MenuProps: m = {},
        multiple: p,
        name: h,
        onBlur: v,
        onChange: C,
        onClose: k,
        onFocus: E,
        onKeyDown: M,
        onMouseDown: z,
        onOpen: $,
        open: V,
        readOnly: b,
        renderValue: O,
        required: A,
        SelectDisplayProps: N = {},
        tabIndex: R,
        type: j,
        value: B,
        variant: U = 'standard',
        ...q
      } = t,
      [X, ye] = T0({ controlled: B, default: c, name: 'Select' }),
      [le, Ee] = T0({ controlled: V, default: u, name: 'Select' }),
      je = y.useRef(null),
      Je = y.useRef(null),
      [Ze, At] = y.useState(null),
      { current: Le } = y.useRef(V != null),
      [te, se] = y.useState(),
      Fe = Ut(a, x),
      St = y.useCallback((W) => {
        ((Je.current = W), W && At(W));
      }, []),
      ie = Ze == null ? void 0 : Ze.parentNode;
    y.useImperativeHandle(
      Fe,
      () => ({
        focus: () => {
          Je.current.focus();
        },
        node: je.current,
        value: X,
      }),
      [X]
    );
    const be = Ze !== null && le;
    (y.useEffect(() => {
      if (!be || !ie || r || typeof ResizeObserver > 'u') return;
      const W = new ResizeObserver(() => {
        se(ie.clientWidth);
      });
      return (
        W.observe(ie),
        () => {
          W.disconnect();
        }
      );
    }, [be, ie, r]),
      y.useEffect(() => {
        u && le && Ze && !Le && (se(r ? null : ie.clientWidth), Je.current.focus());
      }, [Ze, r]),
      y.useEffect(() => {
        o && Je.current.focus();
      }, [o]),
      y.useEffect(() => {
        if (!S) return;
        const W = Va(Je.current).getElementById(S);
        if (W) {
          const Ve = () => {
            getSelection().isCollapsed && Je.current.focus();
          };
          return (
            W.addEventListener('click', Ve),
            () => {
              W.removeEventListener('click', Ve);
            }
          );
        }
      }, [S]));
    const xt = (W, Ve) => {
        (W ? $ && $(Ve) : k && k(Ve), Le || (se(r ? null : ie.clientWidth), Ee(W)));
      },
      Mt = (W) => {
        (z == null || z(W), W.button === 0 && (W.preventDefault(), Je.current.focus(), xt(!0, W)));
      },
      st = (W) => {
        xt(!1, W);
      },
      ya = y.Children.toArray(l),
      Kt = (W) => {
        const Ve = ya.find((Ot) => Ot.props.value === W.target.value);
        Ve !== void 0 && (ye(Ve.props.value), C && C(W, Ve));
      },
      F = (W) => (Ve) => {
        let Ot;
        if (Ve.currentTarget.hasAttribute('tabindex')) {
          if (p) {
            Ot = Array.isArray(X) ? X.slice() : [];
            const qi = X.indexOf(W.props.value);
            qi === -1 ? Ot.push(W.props.value) : Ot.splice(qi, 1);
          } else Ot = W.props.value;
          if ((W.props.onClick && W.props.onClick(Ve), X !== Ot && (ye(Ot), C))) {
            const qi = Ve.nativeEvent || Ve,
              hm = new qi.constructor(qi.type, qi);
            (Object.defineProperty(hm, 'target', { writable: !0, value: { value: Ot, name: h } }),
              C(hm, W));
          }
          p || xt(!1, Ve);
        }
      },
      T = (W) => {
        b ||
          ([' ', 'ArrowUp', 'ArrowDown', 'Enter'].includes(W.key) &&
            (W.preventDefault(), xt(!0, W)),
          M == null || M(W));
      },
      L = (W) => {
        !be &&
          v &&
          (Object.defineProperty(W, 'target', { writable: !0, value: { value: X, name: h } }),
          v(W));
      };
    delete q['aria-invalid'];
    let I, P;
    const G = [];
    let Q = !1;
    (Ou({ value: X }) || d) && (O ? (I = O(X)) : (Q = !0));
    const ve = ya.map((W) => {
      if (!y.isValidElement(W)) return null;
      let Ve;
      if (p) {
        if (!Array.isArray(X)) throw new Error(Nn(2));
        ((Ve = X.some((Ot) => tv(Ot, W.props.value))), Ve && Q && G.push(W.props.children));
      } else ((Ve = tv(X, W.props.value)), Ve && Q && (P = W.props.children));
      return y.cloneElement(W, {
        'aria-selected': Ve ? 'true' : 'false',
        onClick: F(W),
        onKeyUp: (Ot) => {
          (Ot.key === ' ' && Ot.preventDefault(), W.props.onKeyUp && W.props.onKeyUp(Ot));
        },
        role: 'option',
        selected: Ve,
        value: void 0,
        'data-value': W.props.value,
      });
    });
    Q &&
      (p
        ? G.length === 0
          ? (I = null)
          : (I = G.reduce((W, Ve, Ot) => (W.push(Ve), Ot < G.length - 1 && W.push(', '), W), []))
        : (I = P));
    let de = te;
    !r && Le && Ze && (de = ie.clientWidth);
    let et;
    typeof R < 'u' ? (et = R) : (et = f ? null : 0);
    const Se = N.id || (h ? `mui-component-select-${h}` : void 0),
      wt = { ...t, variant: U, value: X, open: be, error: g },
      Ln = aM(wt),
      gi = {
        ...m.PaperProps,
        ...(typeof ((gr = m.slotProps) == null ? void 0 : gr.paper) == 'function'
          ? m.slotProps.paper(wt)
          : (Jl = m.slotProps) == null
            ? void 0
            : Jl.paper),
      },
      fr = {
        ...m.MenuListProps,
        ...(typeof ((pr = m.slotProps) == null ? void 0 : pr.list) == 'function'
          ? m.slotProps.list(wt)
          : (mm = m.slotProps) == null
            ? void 0
            : mm.list),
      },
      Wl = Gc();
    return w.jsxs(y.Fragment, {
      children: [
        w.jsx(W3, {
          as: 'div',
          ref: St,
          tabIndex: et,
          role: 'combobox',
          'aria-controls': be ? Wl : void 0,
          'aria-disabled': f ? 'true' : void 0,
          'aria-expanded': be ? 'true' : 'false',
          'aria-haspopup': 'listbox',
          'aria-label': i,
          'aria-labelledby': [S, Se].filter(Boolean).join(' ') || void 0,
          'aria-describedby': n,
          'aria-required': A ? 'true' : void 0,
          'aria-invalid': g ? 'true' : void 0,
          onKeyDown: T,
          onMouseDown: f || b ? null : Mt,
          onBlur: L,
          onFocus: E,
          ...N,
          ownerState: wt,
          className: ee(N.className, Ln.select, s),
          id: Se,
          children: tM(I)
            ? ev ||
              (ev = w.jsx('span', { className: 'notranslate', 'aria-hidden': !0, children: '​' }))
            : I,
        }),
        w.jsx(eM, {
          'aria-invalid': g,
          value: Array.isArray(X) ? X.join(',') : X,
          name: h,
          ref: je,
          'aria-hidden': !0,
          onChange: Kt,
          tabIndex: -1,
          disabled: f,
          className: Ln.nativeInput,
          autoFocus: o,
          required: A,
          ...q,
          ownerState: wt,
        }),
        w.jsx(J3, { as: _, className: Ln.icon, ownerState: wt }),
        w.jsx(oS, {
          id: `menu-${h || ''}`,
          anchorEl: ie,
          open: be,
          onClose: st,
          anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
          transformOrigin: { vertical: 'top', horizontal: 'center' },
          ...m,
          slotProps: {
            ...m.slotProps,
            list: {
              'aria-labelledby': S,
              role: 'listbox',
              'aria-multiselectable': p ? 'true' : void 0,
              disableListWrap: !0,
              id: Wl,
              ...fr,
            },
            paper: { ...gi, style: { minWidth: de, ...(gi != null ? gi.style : null) } },
          },
          children: ve,
        }),
      ],
    });
  }),
  iM = nM,
  oM = (e) => {
    const { classes: t } = e,
      n = he({ root: ['root'] }, cS, t);
    return { ...t, ...n };
  },
  lm = { name: 'MuiSelect', slot: 'Root', shouldForwardProp: (e) => _a(e) && e !== 'variant' },
  rM = Y(aS, lm)(''),
  lM = Y(uS, lm)(''),
  sM = Y(eS, lm)(''),
  dS = y.forwardRef(function (t, a) {
    const n = _e({ name: 'MuiSelect', props: t }),
      {
        autoWidth: i = !1,
        children: o,
        classes: r = {},
        className: l,
        defaultOpen: s = !1,
        displayEmpty: u = !1,
        IconComponent: c = a4,
        id: f,
        input: d,
        inputProps: g,
        label: _,
        labelId: x,
        MenuProps: S,
        multiple: m = !1,
        native: p = !1,
        onClose: h,
        onOpen: v,
        open: C,
        renderValue: k,
        SelectDisplayProps: E,
        variant: M = 'outlined',
        ...z
      } = n,
      $ = p ? I3 : iM,
      V = cr(),
      b = ur({ props: n, muiFormControl: V, states: ['variant', 'error'] }),
      O = b.variant || M,
      A = { ...n, variant: O, classes: r },
      N = oM(A),
      { root: R, ...j } = N,
      B =
        d ||
        {
          standard: w.jsx(rM, { ownerState: A }),
          outlined: w.jsx(lM, { label: _, ownerState: A }),
          filled: w.jsx(sM, { ownerState: A }),
        }[O],
      U = Ut(a, sr(B));
    return w.jsx(y.Fragment, {
      children: y.cloneElement(B, {
        inputComponent: $,
        inputProps: {
          children: o,
          error: b.error,
          IconComponent: c,
          variant: O,
          type: void 0,
          multiple: m,
          ...(p
            ? { id: f }
            : {
                autoWidth: i,
                defaultOpen: s,
                displayEmpty: u,
                labelId: x,
                MenuProps: S,
                onClose: h,
                onOpen: v,
                open: C,
                renderValue: k,
                SelectDisplayProps: { id: f, ...E },
              }),
          ...g,
          classes: g ? Tt(j, g.classes) : j,
          ...(d ? d.props.inputProps : {}),
        },
        ...(((m && p) || u) && O === 'outlined' ? { notched: !0 } : {}),
        ref: U,
        className: ee(B.props.className, l, N.root),
        ...(!d && { variant: O }),
        ...z,
      }),
    });
  });
dS.muiName = 'Select';
const uM = dS,
  cM = $T({
    createStyledComponent: Y('div', { name: 'MuiStack', slot: 'Root' }),
    useThemeProps: (e) => _e({ props: e, name: 'MuiStack' }),
  }),
  dM = cM;
function fM(e) {
  return me('MuiToolbar', e);
}
ge('MuiToolbar', ['root', 'gutters', 'regular', 'dense']);
const gM = (e) => {
    const { classes: t, disableGutters: a, variant: n } = e;
    return he({ root: ['root', !a && 'gutters', n] }, fM, t);
  },
  pM = Y('div', {
    name: 'MuiToolbar',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: a } = e;
      return [t.root, !a.disableGutters && t.gutters, t[a.variant]];
    },
  })(
    Oe(({ theme: e }) => ({
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      variants: [
        {
          props: ({ ownerState: t }) => !t.disableGutters,
          style: {
            paddingLeft: e.spacing(2),
            paddingRight: e.spacing(2),
            [e.breakpoints.up('sm')]: { paddingLeft: e.spacing(3), paddingRight: e.spacing(3) },
          },
        },
        { props: { variant: 'dense' }, style: { minHeight: 48 } },
        { props: { variant: 'regular' }, style: e.mixins.toolbar },
      ],
    }))
  ),
  mM = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiToolbar' }),
      {
        className: i,
        component: o = 'div',
        disableGutters: r = !1,
        variant: l = 'regular',
        ...s
      } = n,
      u = { ...n, component: o, disableGutters: r, variant: l },
      c = gM(u);
    return w.jsx(pM, { as: o, className: ee(c.root, i), ref: a, ownerState: u, ...s });
  }),
  hM = mM;
function vM(e) {
  return me('MuiTextField', e);
}
ge('MuiTextField', ['root']);
const _M = { standard: aS, filled: eS, outlined: uS },
  yM = (e) => {
    const { classes: t } = e;
    return he({ root: ['root'] }, vM, t);
  },
  bM = Y(A6, { name: 'MuiTextField', slot: 'Root' })({}),
  SM = y.forwardRef(function (t, a) {
    const n = _e({ props: t, name: 'MuiTextField' }),
      {
        autoComplete: i,
        autoFocus: o = !1,
        children: r,
        className: l,
        color: s = 'primary',
        defaultValue: u,
        disabled: c = !1,
        error: f = !1,
        FormHelperTextProps: d,
        fullWidth: g = !1,
        helperText: _,
        id: x,
        InputLabelProps: S,
        inputProps: m,
        InputProps: p,
        inputRef: h,
        label: v,
        maxRows: C,
        minRows: k,
        multiline: E = !1,
        name: M,
        onBlur: z,
        onChange: $,
        onFocus: V,
        placeholder: b,
        required: O = !1,
        rows: A,
        select: N = !1,
        SelectProps: R,
        slots: j = {},
        slotProps: B = {},
        type: U,
        value: q,
        variant: X = 'outlined',
        ...ye
      } = n,
      le = {
        ...n,
        autoFocus: o,
        color: s,
        disabled: c,
        error: f,
        fullWidth: g,
        multiline: E,
        required: O,
        select: N,
        variant: X,
      },
      Ee = yM(le),
      je = Gc(x),
      Je = _ && je ? `${je}-helper-text` : void 0,
      Ze = v && je ? `${je}-label` : void 0,
      At = _M[X],
      Le = {
        slots: j,
        slotProps: { input: p, inputLabel: S, htmlInput: m, formHelperText: d, select: R, ...B },
      },
      te = {},
      se = Le.slotProps.inputLabel;
    (X === 'outlined' && (se && typeof se.shrink < 'u' && (te.notched = se.shrink), (te.label = v)),
      N && ((!R || !R.native) && (te.id = void 0), (te['aria-describedby'] = void 0)));
    const [Fe, St] = ht('root', {
        elementType: bM,
        shouldForwardComponentProp: !0,
        externalForwardedProps: { ...Le, ...ye },
        ownerState: le,
        className: ee(Ee.root, l),
        ref: a,
        additionalProps: { disabled: c, error: f, fullWidth: g, required: O, color: s, variant: X },
      }),
      [ie, be] = ht('input', {
        elementType: At,
        externalForwardedProps: Le,
        additionalProps: te,
        ownerState: le,
      }),
      [xt, Mt] = ht('inputLabel', { elementType: e3, externalForwardedProps: Le, ownerState: le }),
      [st, ya] = ht('htmlInput', {
        elementType: 'input',
        externalForwardedProps: Le,
        ownerState: le,
      }),
      [Kt, F] = ht('formHelperText', {
        elementType: L6,
        externalForwardedProps: Le,
        ownerState: le,
      }),
      [T, L] = ht('select', { elementType: uM, externalForwardedProps: Le, ownerState: le }),
      I = w.jsx(ie, {
        'aria-describedby': Je,
        autoComplete: i,
        autoFocus: o,
        defaultValue: u,
        fullWidth: g,
        multiline: E,
        name: M,
        rows: A,
        maxRows: C,
        minRows: k,
        type: U,
        value: q,
        id: je,
        inputRef: h,
        onBlur: z,
        onChange: $,
        onFocus: V,
        placeholder: b,
        inputProps: ya,
        slots: { input: j.htmlInput ? st : void 0 },
        ...be,
      });
    return w.jsxs(Fe, {
      ...St,
      children: [
        v != null && v !== '' && w.jsx(xt, { htmlFor: je, id: Ze, ...Mt, children: v }),
        N
          ? w.jsx(T, {
              'aria-describedby': Je,
              id: je,
              labelId: Ze,
              value: q,
              input: I,
              ...L,
              children: r,
            })
          : I,
        _ && w.jsx(Kt, { id: Je, ...F, children: _ }),
      ],
    });
  }),
  to = SM;
function xM() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
    (typeof t[0] == 'string' && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t));
  }
}
const av = {};
function mg() {
  for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++) t[a] = arguments[a];
  (typeof t[0] == 'string' && av[t[0]]) ||
    (typeof t[0] == 'string' && (av[t[0]] = new Date()), xM(...t));
}
const fS = (e, t) => () => {
  if (e.isInitialized) t();
  else {
    const a = () => {
      (setTimeout(() => {
        e.off('initialized', a);
      }, 0),
        t());
    };
    e.on('initialized', a);
  }
};
function nv(e, t, a) {
  e.loadNamespaces(t, fS(e, a));
}
function iv(e, t, a, n) {
  (typeof a == 'string' && (a = [a]),
    a.forEach((i) => {
      e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
    }),
    e.loadLanguages(t, fS(e, n)));
}
function wM(e, t) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const n = t.languages[0],
    i = t.options ? t.options.fallbackLng : !1,
    o = t.languages[t.languages.length - 1];
  if (n.toLowerCase() === 'cimode') return !0;
  const r = (l, s) => {
    const u = t.services.backendConnector.state[`${l}|${s}`];
    return u === -1 || u === 2;
  };
  return a.bindI18n &&
    a.bindI18n.indexOf('languageChanging') > -1 &&
    t.services.backendConnector.backend &&
    t.isLanguageChangingTo &&
    !r(t.isLanguageChangingTo, e)
    ? !1
    : !!(
        t.hasResourceBundle(n, e) ||
        !t.services.backendConnector.backend ||
        (t.options.resources && !t.options.partialBundledLanguages) ||
        (r(n, e) && (!i || r(o, e)))
      );
}
function CM(e, t) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length
    ? (mg('i18n.languages were undefined or empty', t.languages), !0)
    : t.options.ignoreJSONStructure !== void 0
      ? t.hasLoadedNamespace(e, {
          lng: a.lng,
          precheck: (i, o) => {
            if (
              a.bindI18n &&
              a.bindI18n.indexOf('languageChanging') > -1 &&
              i.services.backendConnector.backend &&
              i.isLanguageChangingTo &&
              !o(i.isLanguageChangingTo, e)
            )
              return !1;
          },
        })
      : wM(e, t, a);
}
const kM =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  EM = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  FM = (e) => EM[e],
  TM = (e) => e.replace(kM, FM);
let hg = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: TM,
};
function RM() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  hg = { ...hg, ...e };
}
function AM() {
  return hg;
}
let gS;
function MM(e) {
  gS = e;
}
function OM() {
  return gS;
}
const NM = {
    type: '3rdParty',
    init(e) {
      (RM(e.options.react), MM(e));
    },
  },
  zM = y.createContext();
class BM {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((a) => {
      this.usedNamespaces[a] || (this.usedNamespaces[a] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const LM = (e, t) => {
  const a = y.useRef();
  return (
    y.useEffect(() => {
      a.current = t ? a.current : e;
    }, [e, t]),
    a.current
  );
};
function dr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { i18n: a } = t,
    { i18n: n, defaultNS: i } = y.useContext(zM) || {},
    o = a || n || OM();
  if ((o && !o.reportNamespaces && (o.reportNamespaces = new BM()), !o)) {
    mg('You will need to pass in an i18next instance by using initReactI18next');
    const h = (C, k) =>
        typeof k == 'string'
          ? k
          : k && typeof k == 'object' && typeof k.defaultValue == 'string'
            ? k.defaultValue
            : Array.isArray(C)
              ? C[C.length - 1]
              : C,
      v = [h, {}, !1];
    return ((v.t = h), (v.i18n = {}), (v.ready = !1), v);
  }
  o.options.react &&
    o.options.react.wait !== void 0 &&
    mg(
      'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.'
    );
  const r = { ...AM(), ...o.options.react, ...t },
    { useSuspense: l, keyPrefix: s } = r;
  let u = e || i || (o.options && o.options.defaultNS);
  ((u = typeof u == 'string' ? [u] : u || ['translation']),
    o.reportNamespaces.addUsedNamespaces && o.reportNamespaces.addUsedNamespaces(u));
  const c = (o.isInitialized || o.initializedStoreOnce) && u.every((h) => CM(h, o, r));
  function f() {
    return o.getFixedT(t.lng || null, r.nsMode === 'fallback' ? u : u[0], s);
  }
  const [d, g] = y.useState(f);
  let _ = u.join();
  t.lng && (_ = `${t.lng}${_}`);
  const x = LM(_),
    S = y.useRef(!0);
  y.useEffect(() => {
    const { bindI18n: h, bindI18nStore: v } = r;
    ((S.current = !0),
      !c &&
        !l &&
        (t.lng
          ? iv(o, t.lng, u, () => {
              S.current && g(f);
            })
          : nv(o, u, () => {
              S.current && g(f);
            })),
      c && x && x !== _ && S.current && g(f));
    function C() {
      S.current && g(f);
    }
    return (
      h && o && o.on(h, C),
      v && o && o.store.on(v, C),
      () => {
        ((S.current = !1),
          h && o && h.split(' ').forEach((k) => o.off(k, C)),
          v && o && v.split(' ').forEach((k) => o.store.off(k, C)));
      }
    );
  }, [o, _]);
  const m = y.useRef(!0);
  y.useEffect(() => {
    (S.current && !m.current && g(f), (m.current = !1));
  }, [o, s]);
  const p = [d, o, c];
  if (((p.t = d), (p.i18n = o), (p.ready = c), c || (!c && !l))) return p;
  throw new Promise((h) => {
    t.lng ? iv(o, t.lng, u, () => h()) : nv(o, u, () => h());
  });
}
const ne = (e) => typeof e == 'string',
  Ar = () => {
    let e, t;
    const a = new Promise((n, i) => {
      ((e = n), (t = i));
    });
    return ((a.resolve = e), (a.reject = t), a);
  },
  ov = (e) => (e == null ? '' : '' + e),
  $M = (e, t, a) => {
    e.forEach((n) => {
      t[n] && (a[n] = t[n]);
    });
  },
  DM = /###/g,
  rv = (e) => (e && e.indexOf('###') > -1 ? e.replace(DM, '.') : e),
  lv = (e) => !e || ne(e),
  il = (e, t, a) => {
    const n = ne(t) ? t.split('.') : t;
    let i = 0;
    for (; i < n.length - 1; ) {
      if (lv(e)) return {};
      const o = rv(n[i]);
      (!e[o] && a && (e[o] = new a()),
        Object.prototype.hasOwnProperty.call(e, o) ? (e = e[o]) : (e = {}),
        ++i);
    }
    return lv(e) ? {} : { obj: e, k: rv(n[i]) };
  },
  sv = (e, t, a) => {
    const { obj: n, k: i } = il(e, t, Object);
    if (n !== void 0 || t.length === 1) {
      n[i] = a;
      return;
    }
    let o = t[t.length - 1],
      r = t.slice(0, t.length - 1),
      l = il(e, r, Object);
    for (; l.obj === void 0 && r.length; )
      ((o = `${r[r.length - 1]}.${o}`),
        (r = r.slice(0, r.length - 1)),
        (l = il(e, r, Object)),
        l && l.obj && typeof l.obj[`${l.k}.${o}`] < 'u' && (l.obj = void 0));
    l.obj[`${l.k}.${o}`] = a;
  },
  jM = (e, t, a, n) => {
    const { obj: i, k: o } = il(e, t, Object);
    ((i[o] = i[o] || []), i[o].push(a));
  },
  Nu = (e, t) => {
    const { obj: a, k: n } = il(e, t);
    if (a) return a[n];
  },
  UM = (e, t, a) => {
    const n = Nu(e, a);
    return n !== void 0 ? n : Nu(t, a);
  },
  pS = (e, t, a) => {
    for (const n in t)
      n !== '__proto__' &&
        n !== 'constructor' &&
        (n in e
          ? ne(e[n]) || e[n] instanceof String || ne(t[n]) || t[n] instanceof String
            ? a && (e[n] = t[n])
            : pS(e[n], t[n], a)
          : (e[n] = t[n]));
    return e;
  },
  ao = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var HM = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
const VM = (e) => (ne(e) ? e.replace(/[&<>"'\/]/g, (t) => HM[t]) : e);
class GM {
  constructor(t) {
    ((this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = []));
  }
  getRegExp(t) {
    const a = this.regExpMap.get(t);
    if (a !== void 0) return a;
    const n = new RegExp(t);
    return (
      this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, n),
      this.regExpQueue.push(t),
      n
    );
  }
}
const IM = [' ', ',', '?', '!', ';'],
  PM = new GM(20),
  qM = (e, t, a) => {
    ((t = t || ''), (a = a || ''));
    const n = IM.filter((r) => t.indexOf(r) < 0 && a.indexOf(r) < 0);
    if (n.length === 0) return !0;
    const i = PM.getRegExp(`(${n.map((r) => (r === '?' ? '\\?' : r)).join('|')})`);
    let o = !i.test(e);
    if (!o) {
      const r = e.indexOf(a);
      r > 0 && !i.test(e.substring(0, r)) && (o = !0);
    }
    return o;
  },
  vg = function (e, t) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
    if (!e) return;
    if (e[t]) return e[t];
    const n = t.split(a);
    let i = e;
    for (let o = 0; o < n.length; ) {
      if (!i || typeof i != 'object') return;
      let r,
        l = '';
      for (let s = o; s < n.length; ++s)
        if ((s !== o && (l += a), (l += n[s]), (r = i[l]), r !== void 0)) {
          if (['string', 'number', 'boolean'].indexOf(typeof r) > -1 && s < n.length - 1) continue;
          o += s - o + 1;
          break;
        }
      i = r;
    }
    return i;
  },
  zu = (e) => e && e.replace('_', '-'),
  KM = {
    type: 'logger',
    log(e) {
      this.output('log', e);
    },
    warn(e) {
      this.output('warn', e);
    },
    error(e) {
      this.output('error', e);
    },
    output(e, t) {
      console && console[e] && console[e].apply(console, t);
    },
  };
class Bu {
  constructor(t) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, a);
  }
  init(t) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.prefix = a.prefix || 'i18next:'),
      (this.logger = t || KM),
      (this.options = a),
      (this.debug = a.debug));
  }
  log() {
    for (var t = arguments.length, a = new Array(t), n = 0; n < t; n++) a[n] = arguments[n];
    return this.forward(a, 'log', '', !0);
  }
  warn() {
    for (var t = arguments.length, a = new Array(t), n = 0; n < t; n++) a[n] = arguments[n];
    return this.forward(a, 'warn', '', !0);
  }
  error() {
    for (var t = arguments.length, a = new Array(t), n = 0; n < t; n++) a[n] = arguments[n];
    return this.forward(a, 'error', '');
  }
  deprecate() {
    for (var t = arguments.length, a = new Array(t), n = 0; n < t; n++) a[n] = arguments[n];
    return this.forward(a, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(t, a, n, i) {
    return i && !this.debug
      ? null
      : (ne(t[0]) && (t[0] = `${n}${this.prefix} ${t[0]}`), this.logger[a](t));
  }
  create(t) {
    return new Bu(this.logger, { prefix: `${this.prefix}:${t}:`, ...this.options });
  }
  clone(t) {
    return ((t = t || this.options), (t.prefix = t.prefix || this.prefix), new Bu(this.logger, t));
  }
}
var tn = new Bu();
class Qc {
  constructor() {
    this.observers = {};
  }
  on(t, a) {
    return (
      t.split(' ').forEach((n) => {
        this.observers[n] || (this.observers[n] = new Map());
        const i = this.observers[n].get(a) || 0;
        this.observers[n].set(a, i + 1);
      }),
      this
    );
  }
  off(t, a) {
    if (this.observers[t]) {
      if (!a) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(a);
    }
  }
  emit(t) {
    for (var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
      n[i - 1] = arguments[i];
    (this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((r) => {
        let [l, s] = r;
        for (let u = 0; u < s; u++) l(...n);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((r) => {
          let [l, s] = r;
          for (let u = 0; u < s; u++) l.apply(l, [t, ...n]);
        }));
  }
}
class uv extends Qc {
  constructor(t) {
    let a =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' };
    (super(),
      (this.data = t || {}),
      (this.options = a),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0));
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const a = this.options.ns.indexOf(t);
    a > -1 && this.options.ns.splice(a, 1);
  }
  getResource(t, a, n) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      r =
        i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    t.indexOf('.') > -1
      ? (l = t.split('.'))
      : ((l = [t, a]),
        n && (Array.isArray(n) ? l.push(...n) : ne(n) && o ? l.push(...n.split(o)) : l.push(n)));
    const s = Nu(this.data, l);
    return (
      !s && !a && !n && t.indexOf('.') > -1 && ((t = l[0]), (a = l[1]), (n = l.slice(2).join('.'))),
      s || !r || !ne(n) ? s : vg(this.data && this.data[t] && this.data[t][a], n, o)
    );
  }
  addResource(t, a, n, i) {
    let o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 };
    const r = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let l = [t, a];
    (n && (l = l.concat(r ? n.split(r) : n)),
      t.indexOf('.') > -1 && ((l = t.split('.')), (i = a), (a = l[1])),
      this.addNamespaces(a),
      sv(this.data, l, i),
      o.silent || this.emit('added', t, a, n, i));
  }
  addResources(t, a, n) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
    for (const o in n)
      (ne(n[o]) || Array.isArray(n[o])) && this.addResource(t, a, o, n[o], { silent: !0 });
    i.silent || this.emit('added', t, a, n);
  }
  addResourceBundle(t, a, n, i, o) {
    let r =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      l = [t, a];
    (t.indexOf('.') > -1 && ((l = t.split('.')), (i = n), (n = a), (a = l[1])),
      this.addNamespaces(a));
    let s = Nu(this.data, l) || {};
    (r.skipCopy || (n = JSON.parse(JSON.stringify(n))),
      i ? pS(s, n, o) : (s = { ...s, ...n }),
      sv(this.data, l, s),
      r.silent || this.emit('added', t, a, n));
  }
  removeResourceBundle(t, a) {
    (this.hasResourceBundle(t, a) && delete this.data[t][a],
      this.removeNamespaces(a),
      this.emit('removed', t, a));
  }
  hasResourceBundle(t, a) {
    return this.getResource(t, a) !== void 0;
  }
  getResourceBundle(t, a) {
    return (
      a || (a = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1'
        ? { ...this.getResource(t, a) }
        : this.getResource(t, a)
    );
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const a = this.getDataByLanguage(t);
    return !!((a && Object.keys(a)) || []).find((i) => a[i] && Object.keys(a[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var mS = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, a, n, i) {
    return (
      e.forEach((o) => {
        this.processors[o] && (t = this.processors[o].process(t, a, n, i));
      }),
      t
    );
  },
};
const cv = {};
class Lu extends Qc {
  constructor(t) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (super(),
      $M(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        t,
        this
      ),
      (this.options = a),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = tn.create('translator')));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    if (t == null) return !1;
    const n = this.resolve(t, a);
    return n && n.res !== void 0;
  }
  extractFromKey(t, a) {
    let n = a.nsSeparator !== void 0 ? a.nsSeparator : this.options.nsSeparator;
    n === void 0 && (n = ':');
    const i = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let o = a.ns || this.options.defaultNS || [];
    const r = n && t.indexOf(n) > -1,
      l =
        !this.options.userDefinedKeySeparator &&
        !a.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !a.nsSeparator &&
        !qM(t, n, i);
    if (r && !l) {
      const s = t.match(this.interpolator.nestingRegexp);
      if (s && s.length > 0) return { key: t, namespaces: ne(o) ? [o] : o };
      const u = t.split(n);
      ((n !== i || (n === i && this.options.ns.indexOf(u[0]) > -1)) && (o = u.shift()),
        (t = u.join(i)));
    }
    return { key: t, namespaces: ne(o) ? [o] : o };
  }
  translate(t, a, n) {
    if (
      (typeof a != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (a = this.options.overloadTranslationOptionHandler(arguments)),
      typeof a == 'object' && (a = { ...a }),
      a || (a = {}),
      t == null)
    )
      return '';
    Array.isArray(t) || (t = [String(t)]);
    const i = a.returnDetails !== void 0 ? a.returnDetails : this.options.returnDetails,
      o = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator,
      { key: r, namespaces: l } = this.extractFromKey(t[t.length - 1], a),
      s = l[l.length - 1],
      u = a.lng || this.language,
      c = a.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === 'cimode') {
      if (c) {
        const v = a.nsSeparator || this.options.nsSeparator;
        return i
          ? {
              res: `${s}${v}${r}`,
              usedKey: r,
              exactUsedKey: r,
              usedLng: u,
              usedNS: s,
              usedParams: this.getUsedParamsDetails(a),
            }
          : `${s}${v}${r}`;
      }
      return i
        ? {
            res: r,
            usedKey: r,
            exactUsedKey: r,
            usedLng: u,
            usedNS: s,
            usedParams: this.getUsedParamsDetails(a),
          }
        : r;
    }
    const f = this.resolve(t, a);
    let d = f && f.res;
    const g = (f && f.usedKey) || r,
      _ = (f && f.exactUsedKey) || r,
      x = Object.prototype.toString.apply(d),
      S = ['[object Number]', '[object Function]', '[object RegExp]'],
      m = a.joinArrays !== void 0 ? a.joinArrays : this.options.joinArrays,
      p = !this.i18nFormat || this.i18nFormat.handleAsObject,
      h = !ne(d) && typeof d != 'boolean' && typeof d != 'number';
    if (p && d && h && S.indexOf(x) < 0 && !(ne(m) && Array.isArray(d))) {
      if (!a.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        const v = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(g, d, { ...a, ns: l })
          : `key '${r} (${this.language})' returned an object instead of string.`;
        return i ? ((f.res = v), (f.usedParams = this.getUsedParamsDetails(a)), f) : v;
      }
      if (o) {
        const v = Array.isArray(d),
          C = v ? [] : {},
          k = v ? _ : g;
        for (const E in d)
          if (Object.prototype.hasOwnProperty.call(d, E)) {
            const M = `${k}${o}${E}`;
            ((C[E] = this.translate(M, { ...a, joinArrays: !1, ns: l })),
              C[E] === M && (C[E] = d[E]));
          }
        d = C;
      }
    } else if (p && ne(m) && Array.isArray(d))
      ((d = d.join(m)), d && (d = this.extendTranslation(d, t, a, n)));
    else {
      let v = !1,
        C = !1;
      const k = a.count !== void 0 && !ne(a.count),
        E = Lu.hasDefaultValue(a),
        M = k ? this.pluralResolver.getSuffix(u, a.count, a) : '',
        z = a.ordinal && k ? this.pluralResolver.getSuffix(u, a.count, { ordinal: !1 }) : '',
        $ = k && !a.ordinal && a.count === 0 && this.pluralResolver.shouldUseIntlApi(),
        V =
          ($ && a[`defaultValue${this.options.pluralSeparator}zero`]) ||
          a[`defaultValue${M}`] ||
          a[`defaultValue${z}`] ||
          a.defaultValue;
      (!this.isValidLookup(d) && E && ((v = !0), (d = V)),
        this.isValidLookup(d) || ((C = !0), (d = r)));
      const O =
          (a.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && C
            ? void 0
            : d,
        A = E && V !== d && this.options.updateMissing;
      if (C || v || A) {
        if ((this.logger.log(A ? 'updateKey' : 'missingKey', u, s, r, A ? V : d), o)) {
          const B = this.resolve(r, { ...a, keySeparator: !1 });
          B &&
            B.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.'
            );
        }
        let N = [];
        const R = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          a.lng || this.language
        );
        if (this.options.saveMissingTo === 'fallback' && R && R[0])
          for (let B = 0; B < R.length; B++) N.push(R[B]);
        else
          this.options.saveMissingTo === 'all'
            ? (N = this.languageUtils.toResolveHierarchy(a.lng || this.language))
            : N.push(a.lng || this.language);
        const j = (B, U, q) => {
          const X = E && q !== d ? q : O;
          (this.options.missingKeyHandler
            ? this.options.missingKeyHandler(B, s, U, X, A, a)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(B, s, U, X, A, a),
            this.emit('missingKey', B, s, U, d));
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && k
            ? N.forEach((B) => {
                const U = this.pluralResolver.getSuffixes(B, a);
                ($ &&
                  a[`defaultValue${this.options.pluralSeparator}zero`] &&
                  U.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  U.push(`${this.options.pluralSeparator}zero`),
                  U.forEach((q) => {
                    j([B], r + q, a[`defaultValue${q}`] || V);
                  }));
              })
            : j(N, r, V));
      }
      ((d = this.extendTranslation(d, t, a, f, n)),
        C && d === r && this.options.appendNamespaceToMissingKey && (d = `${s}:${r}`),
        (C || v) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (d = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${s}:${r}` : r,
                v ? d : void 0
              ))
            : (d = this.options.parseMissingKeyHandler(d))));
    }
    return i ? ((f.res = d), (f.usedParams = this.getUsedParamsDetails(a)), f) : d;
  }
  extendTranslation(t, a, n, i, o) {
    var r = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...n },
        n.lng || this.language || i.usedLng,
        i.usedNS,
        i.usedKey,
        { resolved: i }
      );
    else if (!n.skipInterpolation) {
      n.interpolation &&
        this.interpolator.init({
          ...n,
          interpolation: { ...this.options.interpolation, ...n.interpolation },
        });
      const u =
        ne(t) &&
        (n && n.interpolation && n.interpolation.skipOnVariables !== void 0
          ? n.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let c;
      if (u) {
        const d = t.match(this.interpolator.nestingRegexp);
        c = d && d.length;
      }
      let f = n.replace && !ne(n.replace) ? n.replace : n;
      if (
        (this.options.interpolation.defaultVariables &&
          (f = { ...this.options.interpolation.defaultVariables, ...f }),
        (t = this.interpolator.interpolate(t, f, n.lng || this.language || i.usedLng, n)),
        u)
      ) {
        const d = t.match(this.interpolator.nestingRegexp),
          g = d && d.length;
        c < g && (n.nest = !1);
      }
      (!n.lng &&
        this.options.compatibilityAPI !== 'v1' &&
        i &&
        i.res &&
        (n.lng = this.language || i.usedLng),
        n.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (var d = arguments.length, g = new Array(d), _ = 0; _ < d; _++)
                g[_] = arguments[_];
              return o && o[0] === g[0] && !n.context
                ? (r.logger.warn(
                    `It seems you are nesting recursively key: ${g[0]} in key: ${a[0]}`
                  ),
                  null)
                : r.translate(...g, a);
            },
            n
          )),
        n.interpolation && this.interpolator.reset());
    }
    const l = n.postProcess || this.options.postProcess,
      s = ne(l) ? [l] : l;
    return (
      t != null &&
        s &&
        s.length &&
        n.applyPostProcessor !== !1 &&
        (t = mS.handle(
          s,
          t,
          a,
          this.options && this.options.postProcessPassResolved
            ? { i18nResolved: { ...i, usedParams: this.getUsedParamsDetails(n) }, ...n }
            : n,
          this
        )),
      t
    );
  }
  resolve(t) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n,
      i,
      o,
      r,
      l;
    return (
      ne(t) && (t = [t]),
      t.forEach((s) => {
        if (this.isValidLookup(n)) return;
        const u = this.extractFromKey(s, a),
          c = u.key;
        i = c;
        let f = u.namespaces;
        this.options.fallbackNS && (f = f.concat(this.options.fallbackNS));
        const d = a.count !== void 0 && !ne(a.count),
          g = d && !a.ordinal && a.count === 0 && this.pluralResolver.shouldUseIntlApi(),
          _ =
            a.context !== void 0 &&
            (ne(a.context) || typeof a.context == 'number') &&
            a.context !== '',
          x = a.lngs
            ? a.lngs
            : this.languageUtils.toResolveHierarchy(a.lng || this.language, a.fallbackLng);
        f.forEach((S) => {
          this.isValidLookup(n) ||
            ((l = S),
            !cv[`${x[0]}-${S}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(l) &&
              ((cv[`${x[0]}-${S}`] = !0),
              this.logger.warn(
                `key "${i}" for languages "${x.join(', ')}" won't get resolved as namespace "${l}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
              )),
            x.forEach((m) => {
              if (this.isValidLookup(n)) return;
              r = m;
              const p = [c];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(p, c, m, S, a);
              else {
                let v;
                d && (v = this.pluralResolver.getSuffix(m, a.count, a));
                const C = `${this.options.pluralSeparator}zero`,
                  k = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (d &&
                    (p.push(c + v),
                    a.ordinal &&
                      v.indexOf(k) === 0 &&
                      p.push(c + v.replace(k, this.options.pluralSeparator)),
                    g && p.push(c + C)),
                  _)
                ) {
                  const E = `${c}${this.options.contextSeparator}${a.context}`;
                  (p.push(E),
                    d &&
                      (p.push(E + v),
                      a.ordinal &&
                        v.indexOf(k) === 0 &&
                        p.push(E + v.replace(k, this.options.pluralSeparator)),
                      g && p.push(E + C)));
                }
              }
              let h;
              for (; (h = p.pop()); )
                this.isValidLookup(n) || ((o = h), (n = this.getResource(m, S, h, a)));
            }));
        });
      }),
      { res: n, usedKey: i, exactUsedKey: o, usedLng: r, usedNS: l }
    );
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === '')
    );
  }
  getResource(t, a, n) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, a, n, i)
      : this.resourceStore.getResource(t, a, n, i);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const a = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      n = t.replace && !ne(t.replace);
    let i = n ? t.replace : t;
    if (
      (n && typeof t.count < 'u' && (i.count = t.count),
      this.options.interpolation.defaultVariables &&
        (i = { ...this.options.interpolation.defaultVariables, ...i }),
      !n)
    ) {
      i = { ...i };
      for (const o of a) delete i[o];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const a = 'defaultValue';
    for (const n in t)
      if (
        Object.prototype.hasOwnProperty.call(t, n) &&
        a === n.substring(0, a.length) &&
        t[n] !== void 0
      )
        return !0;
    return !1;
  }
}
const Yd = (e) => e.charAt(0).toUpperCase() + e.slice(1);
class dv {
  constructor(t) {
    ((this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = tn.create('languageUtils')));
  }
  getScriptPartFromCode(t) {
    if (((t = zu(t)), !t || t.indexOf('-') < 0)) return null;
    const a = t.split('-');
    return a.length === 2 || (a.pop(), a[a.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(a.join('-'));
  }
  getLanguagePartFromCode(t) {
    if (((t = zu(t)), !t || t.indexOf('-') < 0)) return t;
    const a = t.split('-');
    return this.formatLanguageCode(a[0]);
  }
  formatLanguageCode(t) {
    if (ne(t) && t.indexOf('-') > -1) {
      if (typeof Intl < 'u' && typeof Intl.getCanonicalLocales < 'u')
        try {
          let i = Intl.getCanonicalLocales(t)[0];
          if ((i && this.options.lowerCaseLng && (i = i.toLowerCase()), i)) return i;
        } catch {}
      const a = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let n = t.split('-');
      return (
        this.options.lowerCaseLng
          ? (n = n.map((i) => i.toLowerCase()))
          : n.length === 2
            ? ((n[0] = n[0].toLowerCase()),
              (n[1] = n[1].toUpperCase()),
              a.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Yd(n[1].toLowerCase())))
            : n.length === 3 &&
              ((n[0] = n[0].toLowerCase()),
              n[1].length === 2 && (n[1] = n[1].toUpperCase()),
              n[0] !== 'sgn' && n[2].length === 2 && (n[2] = n[2].toUpperCase()),
              a.indexOf(n[1].toLowerCase()) > -1 && (n[1] = Yd(n[1].toLowerCase())),
              a.indexOf(n[2].toLowerCase()) > -1 && (n[2] = Yd(n[2].toLowerCase()))),
        n.join('-')
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (
      (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
    );
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let a;
    return (
      t.forEach((n) => {
        if (a) return;
        const i = this.formatLanguageCode(n);
        (!this.options.supportedLngs || this.isSupportedCode(i)) && (a = i);
      }),
      !a &&
        this.options.supportedLngs &&
        t.forEach((n) => {
          if (a) return;
          const i = this.getLanguagePartFromCode(n);
          if (this.isSupportedCode(i)) return (a = i);
          a = this.options.supportedLngs.find((o) => {
            if (o === i) return o;
            if (
              !(o.indexOf('-') < 0 && i.indexOf('-') < 0) &&
              ((o.indexOf('-') > 0 && i.indexOf('-') < 0 && o.substring(0, o.indexOf('-')) === i) ||
                (o.indexOf(i) === 0 && i.length > 1))
            )
              return o;
          });
        }),
      a || (a = this.getFallbackCodes(this.options.fallbackLng)[0]),
      a
    );
  }
  getFallbackCodes(t, a) {
    if (!t) return [];
    if ((typeof t == 'function' && (t = t(a)), ne(t) && (t = [t]), Array.isArray(t))) return t;
    if (!a) return t.default || [];
    let n = t[a];
    return (
      n || (n = t[this.getScriptPartFromCode(a)]),
      n || (n = t[this.formatLanguageCode(a)]),
      n || (n = t[this.getLanguagePartFromCode(a)]),
      n || (n = t.default),
      n || []
    );
  }
  toResolveHierarchy(t, a) {
    const n = this.getFallbackCodes(a || this.options.fallbackLng || [], t),
      i = [],
      o = (r) => {
        r &&
          (this.isSupportedCode(r)
            ? i.push(r)
            : this.logger.warn(`rejecting language code not found in supportedLngs: ${r}`));
      };
    return (
      ne(t) && (t.indexOf('-') > -1 || t.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' && o(this.formatLanguageCode(t)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            o(this.getScriptPartFromCode(t)),
          this.options.load !== 'currentOnly' && o(this.getLanguagePartFromCode(t)))
        : ne(t) && o(this.formatLanguageCode(t)),
      n.forEach((r) => {
        i.indexOf(r) < 0 && o(this.formatLanguageCode(r));
      }),
      i
    );
  }
}
let YM = [
    {
      lngs: [
        'ach',
        'ak',
        'am',
        'arn',
        'br',
        'fil',
        'gun',
        'ln',
        'mfe',
        'mg',
        'mi',
        'oc',
        'pt',
        'pt-BR',
        'tg',
        'tl',
        'ti',
        'tr',
        'uz',
        'wa',
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        'af',
        'an',
        'ast',
        'az',
        'bg',
        'bn',
        'ca',
        'da',
        'de',
        'dev',
        'el',
        'en',
        'eo',
        'es',
        'et',
        'eu',
        'fi',
        'fo',
        'fur',
        'fy',
        'gl',
        'gu',
        'ha',
        'hi',
        'hu',
        'hy',
        'ia',
        'it',
        'kk',
        'kn',
        'ku',
        'lb',
        'mai',
        'ml',
        'mn',
        'mr',
        'nah',
        'nap',
        'nb',
        'ne',
        'nl',
        'nn',
        'no',
        'nso',
        'pa',
        'pap',
        'pms',
        'ps',
        'pt-PT',
        'rm',
        'sco',
        'se',
        'si',
        'so',
        'son',
        'sq',
        'sv',
        'sw',
        'ta',
        'te',
        'tk',
        'ur',
        'yo',
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        'ay',
        'bo',
        'cgg',
        'fa',
        'ht',
        'id',
        'ja',
        'jbo',
        'ka',
        'km',
        'ko',
        'ky',
        'lo',
        'ms',
        'sah',
        'su',
        'th',
        'tt',
        'ug',
        'vi',
        'wo',
        'zh',
      ],
      nr: [1],
      fc: 3,
    },
    { lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4 },
    { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
    { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
    { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ['fr'], nr: [1, 2], fc: 9 },
    { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ['is'], nr: [1, 2], fc: 12 },
    { lngs: ['jv'], nr: [0, 1], fc: 13 },
    { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
    { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
    { lngs: ['mk'], nr: [1, 2], fc: 17 },
    { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
    { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ['or'], nr: [2, 1], fc: 2 },
    { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
    { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
  ],
  XM = {
    1: (e) => +(e > 1),
    2: (e) => +(e != 1),
    3: (e) => 0,
    4: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2,
    5: (e) =>
      e == 0
        ? 0
        : e == 1
          ? 1
          : e == 2
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
              ? 3
              : e % 100 >= 11
                ? 4
                : 5,
    6: (e) => (e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2),
    7: (e) => (e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2),
    8: (e) => (e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3),
    9: (e) => +(e >= 2),
    10: (e) => (e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
    11: (e) => (e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3),
    12: (e) => +(e % 10 != 1 || e % 100 == 11),
    13: (e) => +(e !== 0),
    14: (e) => (e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3),
    15: (e) =>
      e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2,
    16: (e) => (e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2),
    17: (e) => (e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1),
    18: (e) => (e == 0 ? 0 : e == 1 ? 1 : 2),
    19: (e) =>
      e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
          ? 1
          : e % 100 > 10 && e % 100 < 20
            ? 2
            : 3,
    20: (e) => (e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2),
    21: (e) => (e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0),
    22: (e) => (e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3),
  };
const QM = ['v1', 'v2', 'v3'],
  ZM = ['v4'],
  fv = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  WM = () => {
    const e = {};
    return (
      YM.forEach((t) => {
        t.lngs.forEach((a) => {
          e[a] = { numbers: t.nr, plurals: XM[t.fc] };
        });
      }),
      e
    );
  };
class JM {
  constructor(t) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    ((this.languageUtils = t),
      (this.options = a),
      (this.logger = tn.create('pluralResolver')),
      (!this.options.compatibilityJSON || ZM.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.'
        )),
      (this.rules = WM()),
      (this.pluralRulesCache = {}));
  }
  addRule(t, a) {
    this.rules[t] = a;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const n = zu(t === 'dev' ? 'en' : t),
        i = a.ordinal ? 'ordinal' : 'cardinal',
        o = JSON.stringify({ cleanedCode: n, type: i });
      if (o in this.pluralRulesCache) return this.pluralRulesCache[o];
      let r;
      try {
        r = new Intl.PluralRules(n, { type: i });
      } catch {
        if (!t.match(/-|_/)) return;
        const s = this.languageUtils.getLanguagePartFromCode(t);
        r = this.getRule(s, a);
      }
      return ((this.pluralRulesCache[o] = r), r);
    }
    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
  }
  needsPlural(t) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = this.getRule(t, a);
    return this.shouldUseIntlApi()
      ? n && n.resolvedOptions().pluralCategories.length > 1
      : n && n.numbers.length > 1;
  }
  getPluralFormsOfKey(t, a) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, n).map((i) => `${a}${i}`);
  }
  getSuffixes(t) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = this.getRule(t, a);
    return n
      ? this.shouldUseIntlApi()
        ? n
            .resolvedOptions()
            .pluralCategories.sort((i, o) => fv[i] - fv[o])
            .map(
              (i) =>
                `${this.options.prepend}${a.ordinal ? `ordinal${this.options.prepend}` : ''}${i}`
            )
        : n.numbers.map((i) => this.getSuffix(t, i, a))
      : [];
  }
  getSuffix(t, a) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const i = this.getRule(t, n);
    return i
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ''}${i.select(a)}`
        : this.getSuffixRetroCompatible(i, a)
      : (this.logger.warn(`no plural rule found for: ${t}`), '');
  }
  getSuffixRetroCompatible(t, a) {
    const n = t.noAbs ? t.plurals(a) : t.plurals(Math.abs(a));
    let i = t.numbers[n];
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (i === 2 ? (i = 'plural') : i === 1 && (i = ''));
    const o = () =>
      this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
    return this.options.compatibilityJSON === 'v1'
      ? i === 1
        ? ''
        : typeof i == 'number'
          ? `_plural_${i.toString()}`
          : o()
      : this.options.compatibilityJSON === 'v2' ||
          (this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1)
        ? o()
        : this.options.prepend && n.toString()
          ? this.options.prepend + n.toString()
          : n.toString();
  }
  shouldUseIntlApi() {
    return !QM.includes(this.options.compatibilityJSON);
  }
}
const gv = function (e, t, a) {
    let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      o = UM(e, t, a);
    return (!o && i && ne(a) && ((o = vg(e, a, n)), o === void 0 && (o = vg(t, a, n))), o);
  },
  Xd = (e) => e.replace(/\$/g, '$$$$');
class e5 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ((this.logger = tn.create('interpolator')),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((a) => a)),
      this.init(t));
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const {
      escape: a,
      escapeValue: n,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: r,
      suffix: l,
      suffixEscaped: s,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: f,
      nestingPrefix: d,
      nestingPrefixEscaped: g,
      nestingSuffix: _,
      nestingSuffixEscaped: x,
      nestingOptionsSeparator: S,
      maxReplaces: m,
      alwaysFormat: p,
    } = t.interpolation;
    ((this.escape = a !== void 0 ? a : VM),
      (this.escapeValue = n !== void 0 ? n : !0),
      (this.useRawValueToEscape = i !== void 0 ? i : !1),
      (this.prefix = o ? ao(o) : r || '{{'),
      (this.suffix = l ? ao(l) : s || '}}'),
      (this.formatSeparator = u || ','),
      (this.unescapePrefix = c ? '' : f || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : c || ''),
      (this.nestingPrefix = d ? ao(d) : g || ao('$t(')),
      (this.nestingSuffix = _ ? ao(_) : x || ao(')')),
      (this.nestingOptionsSeparator = S || ','),
      (this.maxReplaces = m || 1e3),
      (this.alwaysFormat = p !== void 0 ? p : !1),
      this.resetRegExp());
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (a, n) => (a && a.source === n ? ((a.lastIndex = 0), a) : new RegExp(n, 'g'));
    ((this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`
      )));
  }
  interpolate(t, a, n, i) {
    let o, r, l;
    const s =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      u = (g) => {
        if (g.indexOf(this.formatSeparator) < 0) {
          const m = gv(a, s, g, this.options.keySeparator, this.options.ignoreJSONStructure);
          return this.alwaysFormat
            ? this.format(m, void 0, n, { ...i, ...a, interpolationkey: g })
            : m;
        }
        const _ = g.split(this.formatSeparator),
          x = _.shift().trim(),
          S = _.join(this.formatSeparator).trim();
        return this.format(
          gv(a, s, x, this.options.keySeparator, this.options.ignoreJSONStructure),
          S,
          n,
          { ...i, ...a, interpolationkey: x }
        );
      };
    this.resetRegExp();
    const c = (i && i.missingInterpolationHandler) || this.options.missingInterpolationHandler,
      f =
        i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (g) => Xd(g) },
        { regex: this.regexp, safeValue: (g) => (this.escapeValue ? Xd(this.escape(g)) : Xd(g)) },
      ].forEach((g) => {
        for (l = 0; (o = g.regex.exec(t)); ) {
          const _ = o[1].trim();
          if (((r = u(_)), r === void 0))
            if (typeof c == 'function') {
              const S = c(t, o, i);
              r = ne(S) ? S : '';
            } else if (i && Object.prototype.hasOwnProperty.call(i, _)) r = '';
            else if (f) {
              r = o[0];
              continue;
            } else
              (this.logger.warn(`missed to pass in variable ${_} for interpolating ${t}`),
                (r = ''));
          else !ne(r) && !this.useRawValueToEscape && (r = ov(r));
          const x = g.safeValue(r);
          if (
            ((t = t.replace(o[0], x)),
            f
              ? ((g.regex.lastIndex += r.length), (g.regex.lastIndex -= o[0].length))
              : (g.regex.lastIndex = 0),
            l++,
            l >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, a) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i,
      o,
      r;
    const l = (s, u) => {
      const c = this.nestingOptionsSeparator;
      if (s.indexOf(c) < 0) return s;
      const f = s.split(new RegExp(`${c}[ ]*{`));
      let d = `{${f[1]}`;
      ((s = f[0]), (d = this.interpolate(d, r)));
      const g = d.match(/'/g),
        _ = d.match(/"/g);
      ((g && g.length % 2 === 0 && !_) || _.length % 2 !== 0) && (d = d.replace(/'/g, '"'));
      try {
        ((r = JSON.parse(d)), u && (r = { ...u, ...r }));
      } catch (x) {
        return (
          this.logger.warn(`failed parsing options string in nesting for key ${s}`, x),
          `${s}${c}${d}`
        );
      }
      return (
        r.defaultValue && r.defaultValue.indexOf(this.prefix) > -1 && delete r.defaultValue,
        s
      );
    };
    for (; (i = this.nestingRegexp.exec(t)); ) {
      let s = [];
      ((r = { ...n }),
        (r = r.replace && !ne(r.replace) ? r.replace : r),
        (r.applyPostProcessor = !1),
        delete r.defaultValue);
      let u = !1;
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const c = i[1].split(this.formatSeparator).map((f) => f.trim());
        ((i[1] = c.shift()), (s = c), (u = !0));
      }
      if (((o = a(l.call(this, i[1].trim(), r), r)), o && i[0] === t && !ne(o))) return o;
      (ne(o) || (o = ov(o)),
        o || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`), (o = '')),
        u &&
          (o = s.reduce(
            (c, f) => this.format(c, f, n.lng, { ...n, interpolationkey: i[1].trim() }),
            o.trim()
          )),
        (t = t.replace(i[0], o)),
        (this.regexp.lastIndex = 0));
    }
    return t;
  }
}
const t5 = (e) => {
    let t = e.toLowerCase().trim();
    const a = {};
    if (e.indexOf('(') > -1) {
      const n = e.split('(');
      t = n[0].toLowerCase().trim();
      const i = n[1].substring(0, n[1].length - 1);
      t === 'currency' && i.indexOf(':') < 0
        ? a.currency || (a.currency = i.trim())
        : t === 'relativetime' && i.indexOf(':') < 0
          ? a.range || (a.range = i.trim())
          : i.split(';').forEach((r) => {
              if (r) {
                const [l, ...s] = r.split(':'),
                  u = s
                    .join(':')
                    .trim()
                    .replace(/^'+|'+$/g, ''),
                  c = l.trim();
                (a[c] || (a[c] = u),
                  u === 'false' && (a[c] = !1),
                  u === 'true' && (a[c] = !0),
                  isNaN(u) || (a[c] = parseInt(u, 10)));
              }
            });
    }
    return { formatName: t, formatOptions: a };
  },
  no = (e) => {
    const t = {};
    return (a, n, i) => {
      let o = i;
      i &&
        i.interpolationkey &&
        i.formatParams &&
        i.formatParams[i.interpolationkey] &&
        i[i.interpolationkey] &&
        (o = { ...o, [i.interpolationkey]: void 0 });
      const r = n + JSON.stringify(o);
      let l = t[r];
      return (l || ((l = e(zu(n), i)), (t[r] = l)), l(a));
    };
  };
class a5 {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    ((this.logger = tn.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: no((a, n) => {
          const i = new Intl.NumberFormat(a, { ...n });
          return (o) => i.format(o);
        }),
        currency: no((a, n) => {
          const i = new Intl.NumberFormat(a, { ...n, style: 'currency' });
          return (o) => i.format(o);
        }),
        datetime: no((a, n) => {
          const i = new Intl.DateTimeFormat(a, { ...n });
          return (o) => i.format(o);
        }),
        relativetime: no((a, n) => {
          const i = new Intl.RelativeTimeFormat(a, { ...n });
          return (o) => i.format(o, n.range || 'day');
        }),
        list: no((a, n) => {
          const i = new Intl.ListFormat(a, { ...n });
          return (o) => i.format(o);
        }),
      }),
      this.init(t));
  }
  init(t) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    this.formatSeparator = a.interpolation.formatSeparator || ',';
  }
  add(t, a) {
    this.formats[t.toLowerCase().trim()] = a;
  }
  addCached(t, a) {
    this.formats[t.toLowerCase().trim()] = no(a);
  }
  format(t, a, n) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const o = a.split(this.formatSeparator);
    if (
      o.length > 1 &&
      o[0].indexOf('(') > 1 &&
      o[0].indexOf(')') < 0 &&
      o.find((l) => l.indexOf(')') > -1)
    ) {
      const l = o.findIndex((s) => s.indexOf(')') > -1);
      o[0] = [o[0], ...o.splice(1, l)].join(this.formatSeparator);
    }
    return o.reduce((l, s) => {
      const { formatName: u, formatOptions: c } = t5(s);
      if (this.formats[u]) {
        let f = l;
        try {
          const d = (i && i.formatParams && i.formatParams[i.interpolationkey]) || {},
            g = d.locale || d.lng || i.locale || i.lng || n;
          f = this.formats[u](l, g, { ...c, ...i, ...d });
        } catch (d) {
          this.logger.warn(d);
        }
        return f;
      } else this.logger.warn(`there was no format function for ${u}`);
      return l;
    }, t);
  }
}
const n5 = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class i5 extends Qc {
  constructor(t, a, n) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    (super(),
      (this.backend = t),
      (this.store = a),
      (this.services = n),
      (this.languageUtils = n.languageUtils),
      (this.options = i),
      (this.logger = tn.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = i.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
      (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(n, i.backend, i));
  }
  queueLoad(t, a, n, i) {
    const o = {},
      r = {},
      l = {},
      s = {};
    return (
      t.forEach((u) => {
        let c = !0;
        (a.forEach((f) => {
          const d = `${u}|${f}`;
          !n.reload && this.store.hasResourceBundle(u, f)
            ? (this.state[d] = 2)
            : this.state[d] < 0 ||
              (this.state[d] === 1
                ? r[d] === void 0 && (r[d] = !0)
                : ((this.state[d] = 1),
                  (c = !1),
                  r[d] === void 0 && (r[d] = !0),
                  o[d] === void 0 && (o[d] = !0),
                  s[f] === void 0 && (s[f] = !0)));
        }),
          c || (l[u] = !0));
      }),
      (Object.keys(o).length || Object.keys(r).length) &&
        this.queue.push({
          pending: r,
          pendingCount: Object.keys(r).length,
          loaded: {},
          errors: [],
          callback: i,
        }),
      {
        toLoad: Object.keys(o),
        pending: Object.keys(r),
        toLoadLanguages: Object.keys(l),
        toLoadNamespaces: Object.keys(s),
      }
    );
  }
  loaded(t, a, n) {
    const i = t.split('|'),
      o = i[0],
      r = i[1];
    (a && this.emit('failedLoading', o, r, a),
      !a && n && this.store.addResourceBundle(o, r, n, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = a ? -1 : 2),
      a && n && (this.state[t] = 0));
    const l = {};
    (this.queue.forEach((s) => {
      (jM(s.loaded, [o], r),
        n5(s, t),
        a && s.errors.push(a),
        s.pendingCount === 0 &&
          !s.done &&
          (Object.keys(s.loaded).forEach((u) => {
            l[u] || (l[u] = {});
            const c = s.loaded[u];
            c.length &&
              c.forEach((f) => {
                l[u][f] === void 0 && (l[u][f] = !0);
              });
          }),
          (s.done = !0),
          s.errors.length ? s.callback(s.errors) : s.callback()));
    }),
      this.emit('loaded', l),
      (this.queue = this.queue.filter((s) => !s.done)));
  }
  read(t, a, n) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
      r = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return r(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({ lng: t, ns: a, fcName: n, tried: i, wait: o, callback: r });
      return;
    }
    this.readingCalls++;
    const l = (u, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const f = this.waitingReads.shift();
          this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback);
        }
        if (u && c && i < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, a, n, i + 1, o * 2, r);
          }, o);
          return;
        }
        r(u, c);
      },
      s = this.backend[n].bind(this.backend);
    if (s.length === 2) {
      try {
        const u = s(t, a);
        u && typeof u.then == 'function' ? u.then((c) => l(null, c)).catch(l) : l(null, u);
      } catch (u) {
        l(u);
      }
      return;
    }
    return s(t, a, l);
  }
  prepareLoading(t, a) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return (
        this.logger.warn('No backend was added via i18next.use. Will not load resources.'),
        i && i()
      );
    (ne(t) && (t = this.languageUtils.toResolveHierarchy(t)), ne(a) && (a = [a]));
    const o = this.queueLoad(t, a, n, i);
    if (!o.toLoad.length) return (o.pending.length || i(), null);
    o.toLoad.forEach((r) => {
      this.loadOne(r);
    });
  }
  load(t, a, n) {
    this.prepareLoading(t, a, {}, n);
  }
  reload(t, a, n) {
    this.prepareLoading(t, a, { reload: !0 }, n);
  }
  loadOne(t) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const n = t.split('|'),
      i = n[0],
      o = n[1];
    this.read(i, o, 'read', void 0, void 0, (r, l) => {
      (r && this.logger.warn(`${a}loading namespace ${o} for language ${i} failed`, r),
        !r && l && this.logger.log(`${a}loaded namespace ${o} for language ${i}`, l),
        this.loaded(t, r, l));
    });
  }
  saveMissing(t, a, n, i, o) {
    let r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      l = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(a)
    ) {
      this.logger.warn(
        `did not save key "${n}" as the namespace "${a}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!'
      );
      return;
    }
    if (!(n == null || n === '')) {
      if (this.backend && this.backend.create) {
        const s = { ...r, isUpdate: o },
          u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let c;
            (u.length === 5 ? (c = u(t, a, n, i, s)) : (c = u(t, a, n, i)),
              c && typeof c.then == 'function' ? c.then((f) => l(null, f)).catch(l) : l(null, c));
          } catch (c) {
            l(c);
          }
        else u(t, a, n, i, l, s);
      }
      !t || !t[0] || this.store.addResource(t[0], a, n, i);
    }
  }
}
const pv = () => ({
    debug: !1,
    initImmediate: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (e) => {
      let t = {};
      if (
        (typeof e[1] == 'object' && (t = e[1]),
        ne(e[1]) && (t.defaultValue = e[1]),
        ne(e[2]) && (t.tDescription = e[2]),
        typeof e[2] == 'object' || typeof e[3] == 'object')
      ) {
        const a = e[3] || e[2];
        Object.keys(a).forEach((n) => {
          t[n] = a[n];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  mv = (e) => (
    ne(e.ns) && (e.ns = [e.ns]),
    ne(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]),
    ne(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf('cimode') < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
    e
  ),
  Cs = () => {},
  o5 = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((a) => {
      typeof e[a] == 'function' && (e[a] = e[a].bind(e));
    });
  };
class Tl extends Qc {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = mv(t)),
      (this.services = {}),
      (this.logger = tn),
      (this.modules = { external: [] }),
      o5(this),
      a && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return (this.init(t, a), this);
      setTimeout(() => {
        this.init(t, a);
      }, 0);
    }
  }
  init() {
    var t = this;
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    ((this.isInitializing = !0),
      typeof a == 'function' && ((n = a), (a = {})),
      !a.defaultNS &&
        a.defaultNS !== !1 &&
        a.ns &&
        (ne(a.ns)
          ? (a.defaultNS = a.ns)
          : a.ns.indexOf('translation') < 0 && (a.defaultNS = a.ns[0])));
    const i = pv();
    ((this.options = { ...i, ...this.options, ...mv(a) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = { ...i.interpolation, ...this.options.interpolation }),
      a.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = a.keySeparator),
      a.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = a.nsSeparator));
    const o = (c) => (c ? (typeof c == 'function' ? new c() : c) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? tn.init(o(this.modules.logger), this.options)
        : tn.init(null, this.options);
      let c;
      this.modules.formatter ? (c = this.modules.formatter) : typeof Intl < 'u' && (c = a5);
      const f = new dv(this.options);
      this.store = new uv(this.options.resources, this.options);
      const d = this.services;
      ((d.logger = tn),
        (d.resourceStore = this.store),
        (d.languageUtils = f),
        (d.pluralResolver = new JM(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === i.interpolation.format) &&
          ((d.formatter = o(c)),
          d.formatter.init(d, this.options),
          (this.options.interpolation.format = d.formatter.format.bind(d.formatter))),
        (d.interpolator = new e5(this.options)),
        (d.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (d.backendConnector = new i5(o(this.modules.backend), d.resourceStore, d, this.options)),
        d.backendConnector.on('*', function (g) {
          for (var _ = arguments.length, x = new Array(_ > 1 ? _ - 1 : 0), S = 1; S < _; S++)
            x[S - 1] = arguments[S];
          t.emit(g, ...x);
        }),
        this.modules.languageDetector &&
          ((d.languageDetector = o(this.modules.languageDetector)),
          d.languageDetector.init &&
            d.languageDetector.init(d, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((d.i18nFormat = o(this.modules.i18nFormat)),
          d.i18nFormat.init && d.i18nFormat.init(this)),
        (this.translator = new Lu(this.services, this.options)),
        this.translator.on('*', function (g) {
          for (var _ = arguments.length, x = new Array(_ > 1 ? _ - 1 : 0), S = 1; S < _; S++)
            x[S - 1] = arguments[S];
          t.emit(g, ...x);
        }),
        this.modules.external.forEach((g) => {
          g.init && g.init(this);
        }));
    }
    if (
      ((this.format = this.options.interpolation.format),
      n || (n = Cs),
      this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== 'dev' && (this.options.lng = c[0]);
    }
    (!this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn('init: no languageDetector is used and no lng is defined'),
      ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'].forEach(
        (c) => {
          this[c] = function () {
            return t.store[c](...arguments);
          };
        }
      ),
      ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'].forEach((c) => {
        this[c] = function () {
          return (t.store[c](...arguments), t);
        };
      }));
    const s = Ar(),
      u = () => {
        const c = (f, d) => {
          ((this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!'
              ),
            (this.isInitialized = !0),
            this.options.isClone || this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            s.resolve(d),
            n(f, d));
        };
        if (this.languages && this.options.compatibilityAPI !== 'v1' && !this.isInitialized)
          return c(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, c);
      };
    return (this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), s);
  }
  loadResources(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cs;
    const i = ne(t) ? t : this.language;
    if (
      (typeof t == 'function' && (n = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        i &&
        i.toLowerCase() === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return n();
      const o = [],
        r = (l) => {
          if (!l || l === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(l).forEach((u) => {
            u !== 'cimode' && o.indexOf(u) < 0 && o.push(u);
          });
        };
      (i
        ? r(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((s) => r(s)),
        this.options.preload && this.options.preload.forEach((l) => r(l)),
        this.services.backendConnector.load(o, this.options.ns, (l) => {
          (!l && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language),
            n(l));
        }));
    } else n(null);
  }
  reloadResources(t, a, n) {
    const i = Ar();
    return (
      typeof t == 'function' && ((n = t), (t = void 0)),
      typeof a == 'function' && ((n = a), (a = void 0)),
      t || (t = this.languages),
      a || (a = this.options.ns),
      n || (n = Cs),
      this.services.backendConnector.reload(t, a, (o) => {
        (i.resolve(), n(o));
      }),
      i
    );
  }
  use(t) {
    if (!t)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()'
      );
    if (!t.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()'
      );
    return (
      t.type === 'backend' && (this.modules.backend = t),
      (t.type === 'logger' || (t.log && t.warn && t.error)) && (this.modules.logger = t),
      t.type === 'languageDetector' && (this.modules.languageDetector = t),
      t.type === 'i18nFormat' && (this.modules.i18nFormat = t),
      t.type === 'postProcessor' && mS.addPostProcessor(t),
      t.type === 'formatter' && (this.modules.formatter = t),
      t.type === '3rdParty' && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(['cimode', 'dev'].indexOf(t) > -1))
      for (let a = 0; a < this.languages.length; a++) {
        const n = this.languages[a];
        if (!(['cimode', 'dev'].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
          this.resolvedLanguage = n;
          break;
        }
      }
  }
  changeLanguage(t, a) {
    var n = this;
    this.isLanguageChangingTo = t;
    const i = Ar();
    this.emit('languageChanging', t);
    const o = (s) => {
        ((this.language = s),
          (this.languages = this.services.languageUtils.toResolveHierarchy(s)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(s));
      },
      r = (s, u) => {
        (u
          ? (o(u),
            this.translator.changeLanguage(u),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', u),
            this.logger.log('languageChanged', u))
          : (this.isLanguageChangingTo = void 0),
          i.resolve(function () {
            return n.t(...arguments);
          }),
          a &&
            a(s, function () {
              return n.t(...arguments);
            }));
      },
      l = (s) => {
        !t && !s && this.services.languageDetector && (s = []);
        const u = ne(s) ? s : this.services.languageUtils.getBestMatchFromCodes(s);
        (u &&
          (this.language || o(u),
          this.translator.language || this.translator.changeLanguage(u),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(u)),
          this.loadResources(u, (c) => {
            r(c, u);
          }));
      };
    return (
      !t && this.services.languageDetector && !this.services.languageDetector.async
        ? l(this.services.languageDetector.detect())
        : !t && this.services.languageDetector && this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(l)
            : this.services.languageDetector.detect(l)
          : l(t),
      i
    );
  }
  getFixedT(t, a, n) {
    var i = this;
    const o = function (r, l) {
      let s;
      if (typeof l != 'object') {
        for (var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), f = 2; f < u; f++)
          c[f - 2] = arguments[f];
        s = i.options.overloadTranslationOptionHandler([r, l].concat(c));
      } else s = { ...l };
      ((s.lng = s.lng || o.lng),
        (s.lngs = s.lngs || o.lngs),
        (s.ns = s.ns || o.ns),
        s.keyPrefix !== '' && (s.keyPrefix = s.keyPrefix || n || o.keyPrefix));
      const d = i.options.keySeparator || '.';
      let g;
      return (
        s.keyPrefix && Array.isArray(r)
          ? (g = r.map((_) => `${s.keyPrefix}${d}${_}`))
          : (g = s.keyPrefix ? `${s.keyPrefix}${d}${r}` : r),
        i.t(g, s)
      );
    };
    return (ne(t) ? (o.lng = t) : (o.lngs = t), (o.ns = a), (o.keyPrefix = n), o);
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return (
        this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages
        ),
        !1
      );
    const n = a.lng || this.resolvedLanguage || this.languages[0],
      i = this.options ? this.options.fallbackLng : !1,
      o = this.languages[this.languages.length - 1];
    if (n.toLowerCase() === 'cimode') return !0;
    const r = (l, s) => {
      const u = this.services.backendConnector.state[`${l}|${s}`];
      return u === -1 || u === 0 || u === 2;
    };
    if (a.precheck) {
      const l = a.precheck(this, r);
      if (l !== void 0) return l;
    }
    return !!(
      this.hasResourceBundle(n, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (r(n, t) && (!i || r(o, t)))
    );
  }
  loadNamespaces(t, a) {
    const n = Ar();
    return this.options.ns
      ? (ne(t) && (t = [t]),
        t.forEach((i) => {
          this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
        }),
        this.loadResources((i) => {
          (n.resolve(), a && a(i));
        }),
        n)
      : (a && a(), Promise.resolve());
  }
  loadLanguages(t, a) {
    const n = Ar();
    ne(t) && (t = [t]);
    const i = this.options.preload || [],
      o = t.filter((r) => i.indexOf(r) < 0 && this.services.languageUtils.isSupportedCode(r));
    return o.length
      ? ((this.options.preload = i.concat(o)),
        this.loadResources((r) => {
          (n.resolve(), a && a(r));
        }),
        n)
      : (a && a(), Promise.resolve());
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
      !t)
    )
      return 'rtl';
    const a = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      n = (this.services && this.services.languageUtils) || new dv(pv());
    return a.indexOf(n.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr';
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = arguments.length > 1 ? arguments[1] : void 0;
    return new Tl(t, a);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cs;
    const n = t.forkResourceStore;
    n && delete t.forkResourceStore;
    const i = { ...this.options, ...t, isClone: !0 },
      o = new Tl(i);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) && (o.logger = o.logger.clone(t)),
      ['store', 'services', 'language'].forEach((l) => {
        o[l] = this[l];
      }),
      (o.services = { ...this.services }),
      (o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
      n && ((o.store = new uv(this.store.data, i)), (o.services.resourceStore = o.store)),
      (o.translator = new Lu(o.services, i)),
      o.translator.on('*', function (l) {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++)
          u[c - 1] = arguments[c];
        o.emit(l, ...u);
      }),
      o.init(i, a),
      (o.translator.options = i),
      (o.translator.backendConnector.services.utils = {
        hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
      }),
      o
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const Ht = Tl.createInstance();
Ht.createInstance = Tl.createInstance;
Ht.createInstance;
Ht.dir;
Ht.init;
Ht.loadResources;
Ht.reloadResources;
Ht.use;
Ht.changeLanguage;
Ht.getFixedT;
Ht.t;
Ht.exists;
Ht.setDefaultNamespace;
Ht.hasLoadedNamespace;
Ht.loadNamespaces;
Ht.loadLanguages;
const r5 = 'AquaView Giannutri',
  l5 = 'Privacy',
  s5 = 'Privacy Policy',
  u5 = 'Questa è la pagina Privacy.',
  c5 = 'Cambia lingua',
  d5 = 'I nostri appartamenti',
  f5 = 'Chi siamo',
  g5 = 'IT',
  p5 = 'EN',
  m5 = 'Home',
  h5 = 'Scopri di più',
  v5 = 'Terrazzo panoramico',
  _5 = 'posti letto',
  y5 = 'bagni',
  b5 = 'Vista mare',
  S5 = "Appartamenti sull'acqua",
  x5 = 'per vacanze a Giannutri',
  w5 = 'Soggiorni esclusivi sull’isola di Giannutri. Contatto diretto, senza intermediari.',
  C5 = 'L’isola di Giannutri',
  k5 = 'Giannutri',
  E5 = "Scopri l'isola",
  F5 = 'Contattaci',
  T5 = 'Benvenuti ad AquaView Giannutri',
  R5 =
    'AquaView propone una selezione curata di appartamenti per vacanze sull’isola di Giannutri, ideali per chi cerca mare cristallino, tranquillità e un contatto autentico con la natura.',
  A5 =
    'Gestiamo direttamente le proprietà, offrendo un’esperienza semplice, trasparente e senza intermediazioni.',
  M5 = "Un'isola fuori dal comune",
  O5 =
    'Giannutri è un’isola unica dell’Arcipelago Toscano, caratterizzata da mare limpido, natura protetta e un’atmosfera autentica e rilassata.',
  N5 = 'È la destinazione ideale per chi desidera una vacanza lontana dal turismo di massa.',
  z5 = 'Perché scegliere AquaView',
  B5 = 'Contatto diretto, senza agenzie',
  L5 = 'Appartamenti selezionati',
  $5 = 'Assistenza prima e durante il soggiorno',
  D5 = 'Esperienza autentica sull’isola',
  j5 = 'Nome',
  U5 = 'Il nome è obbligatorio',
  H5 = 'Cognome',
  V5 = 'Telefono',
  G5 = 'Numero non valido',
  I5 = 'Prefisso',
  P5 = 'Prefisso obbigatorio',
  q5 = 'Email',
  K5 = 'Email obbligatoria',
  Y5 = 'Email non valida',
  X5 = 'Messaggio',
  Q5 = 'Messaggio obbligatorio',
  Z5 = 'Invia messaggio',
  W5 = 'Link utili',
  J5 = 'AquaView Giannutri. Tutti i diritti riservati.',
  eO = {
    aquaview_giannutri: r5,
    privacy_title: l5,
    privacy_policy: s5,
    privacy_text: u5,
    change_language: c5,
    ours_apartments: d5,
    who_are: f5,
    lang_it: g5,
    lang_en: p5,
    home: m5,
    find_out_more: h5,
    panoramic_terrace: v5,
    beds: _5,
    bathrooms: y5,
    sea_vie: b5,
    home_title: S5,
    home_title2: x5,
    home_subtitle: w5,
    giannutri_island: C5,
    giannutri: k5,
    discovery_island: E5,
    contact_us: F5,
    welcome_title: T5,
    welcome_subtitle: R5,
    welcome_subtitle2: A5,
    discovery_island_title: M5,
    discovery_island_body1: O5,
    discovery_island_body2: N5,
    why_aquaview: z5,
    why_aquaview_direct_contact: B5,
    why_aquaview_selected_apartments: L5,
    why_aquaview_assistance: $5,
    why_aquaview_experience: D5,
    name: j5,
    name_required: U5,
    surname: H5,
    phone: V5,
    phone_not_valid: G5,
    prefix: I5,
    prefix_required: P5,
    email: q5,
    email_required: K5,
    email_not_valid: Y5,
    message: X5,
    message_required: Q5,
    send_message: Z5,
    useful_links: W5,
    aquaview_all_rights_reserved: J5,
  },
  tO = 'AquaView Giannutri',
  aO = 'Privacy',
  nO = 'Privacy Policy',
  iO = 'This is the Privacy page.',
  oO = 'Change language',
  rO = 'Our apartments',
  lO = 'Who we are',
  sO = 'IT',
  uO = 'EN',
  cO = 'Home',
  dO = 'Find out more',
  fO = 'Panoramic terrace',
  gO = 'beds',
  pO = 'bathrooms',
  mO = 'Sea view',
  hO = 'Waterfront apartments',
  vO = 'for holidays in Giannutri',
  _O = 'Exclusive stays on the island of Giannutri. Direct contact, no intermediaries.',
  yO = 'The island of Giannutri',
  bO = 'Giannutri',
  SO = 'Discover the island',
  xO = 'Contact us',
  wO = 'Welcome to AquaView Giannutri',
  CO =
    'AquaView offers a carefully selected collection of holiday apartments on the island of Giannutri, ideal for those seeking crystal-clear sea, tranquility, and an authentic connection with nature.',
  kO =
    'We manage the properties directly, offering a simple, transparent experience with no intermediaries.',
  EO = 'An extraordinary island',
  FO =
    'Giannutri is a unique island in the Tuscan Archipelago, characterized by clear waters, protected nature, and an authentic, relaxing atmosphere.',
  TO = 'It is the ideal destination for those who want a holiday away from mass tourism.',
  RO = 'Why choose AquaView',
  AO = 'Direct contact, no agencies',
  MO = 'Carefully selected apartments',
  OO = 'Assistance before and during your stay',
  NO = 'Authentic island experience',
  zO = 'First name',
  BO = 'First name is required',
  LO = 'Last name',
  $O = 'Phone',
  DO = 'Invalid phone number',
  jO = 'Prefix',
  UO = 'Prefix is required',
  HO = 'Email',
  VO = 'Email is required',
  GO = 'Invalid email',
  IO = 'Message',
  PO = 'Message is required',
  qO = 'Send message',
  KO = 'Useful links',
  YO = 'AquaView Giannutri. All rights reserved.',
  XO = {
    aquaview_giannutri: tO,
    privacy_title: aO,
    privacy_policy: nO,
    privacy_text: iO,
    change_language: oO,
    ours_apartments: rO,
    who_are: lO,
    lang_it: sO,
    lang_en: uO,
    home: cO,
    find_out_more: dO,
    panoramic_terrace: fO,
    beds: gO,
    bathrooms: pO,
    sea_vie: mO,
    home_title: hO,
    home_title2: vO,
    home_subtitle: _O,
    giannutri_island: yO,
    giannutri: bO,
    discovery_island: SO,
    contact_us: xO,
    welcome_title: wO,
    welcome_subtitle: CO,
    welcome_subtitle2: kO,
    discovery_island_title: EO,
    discovery_island_body1: FO,
    discovery_island_body2: TO,
    why_aquaview: RO,
    why_aquaview_direct_contact: AO,
    why_aquaview_selected_apartments: MO,
    why_aquaview_assistance: OO,
    why_aquaview_experience: NO,
    name: zO,
    name_required: BO,
    surname: LO,
    phone: $O,
    phone_not_valid: DO,
    prefix: jO,
    prefix_required: UO,
    email: HO,
    email_required: VO,
    email_not_valid: GO,
    message: IO,
    message_required: PO,
    send_message: qO,
    useful_links: KO,
    aquaview_all_rights_reserved: YO,
  },
  QO = { it: { translation: eO }, en: { translation: XO } };
Ht.use(NM).init({
  resources: QO,
  lng: localStorage.getItem('localLanguage') || 'it',
  fallbackLng: localStorage.getItem('localLanguage') || 'it',
  interpolation: { escapeValue: !1 },
});
var _g = new Map(),
  ks = new WeakMap(),
  hv = 0,
  ZO;
function WO(e) {
  return e ? (ks.has(e) || ((hv += 1), ks.set(e, hv.toString())), ks.get(e)) : '0';
}
function JO(e) {
  return Object.keys(e)
    .sort()
    .filter((t) => e[t] !== void 0)
    .map((t) => `${t}_${t === 'root' ? WO(e.root) : e[t]}`)
    .toString();
}
function eN(e) {
  const t = JO(e);
  let a = _g.get(t);
  if (!a) {
    const n = new Map();
    let i;
    const o = new IntersectionObserver((r) => {
      r.forEach((l) => {
        var s;
        const u = l.isIntersecting && i.some((c) => l.intersectionRatio >= c);
        (e.trackVisibility && typeof l.isVisible > 'u' && (l.isVisible = u),
          (s = n.get(l.target)) == null ||
            s.forEach((c) => {
              c(u, l);
            }));
      });
    }, e);
    ((i = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
      (a = { id: t, observer: o, elements: n }),
      _g.set(t, a));
  }
  return a;
}
function tN(e, t, a = {}, n = ZO) {
  if (typeof window.IntersectionObserver > 'u' && n !== void 0) {
    const s = e.getBoundingClientRect();
    return (
      t(n, {
        isIntersecting: n,
        target: e,
        intersectionRatio: typeof a.threshold == 'number' ? a.threshold : 0,
        time: 0,
        boundingClientRect: s,
        intersectionRect: s,
        rootBounds: s,
      }),
      () => {}
    );
  }
  const { id: i, observer: o, elements: r } = eN(a),
    l = r.get(e) || [];
  return (
    r.has(e) || r.set(e, l),
    l.push(t),
    o.observe(e),
    function () {
      (l.splice(l.indexOf(t), 1),
        l.length === 0 && (r.delete(e), o.unobserve(e)),
        r.size === 0 && (o.disconnect(), _g.delete(i)));
    }
  );
}
function aN({
  threshold: e,
  delay: t,
  trackVisibility: a,
  rootMargin: n,
  root: i,
  triggerOnce: o,
  skip: r,
  initialInView: l,
  fallbackInView: s,
  onChange: u,
} = {}) {
  var c;
  const [f, d] = y.useState(null),
    g = y.useRef(u),
    _ = y.useRef(l),
    [x, S] = y.useState({ inView: !!l, entry: void 0 });
  ((g.current = u),
    y.useEffect(() => {
      if ((_.current === void 0 && (_.current = l), r || !f)) return;
      let v;
      return (
        (v = tN(
          f,
          (C, k) => {
            const E = _.current;
            ((_.current = C),
              !(E === void 0 && !C) &&
                (S({ inView: C, entry: k }),
                g.current && g.current(C, k),
                k.isIntersecting && o && v && (v(), (v = void 0))));
          },
          { root: i, rootMargin: n, threshold: e, trackVisibility: a, delay: t },
          s
        )),
        () => {
          v && v();
        }
      );
    }, [Array.isArray(e) ? e.toString() : e, f, i, n, o, r, a, s, t]));
  const m = (c = x.entry) == null ? void 0 : c.target,
    p = y.useRef(void 0);
  !f &&
    m &&
    !o &&
    !r &&
    p.current !== m &&
    ((p.current = m), S({ inView: !!l, entry: void 0 }), (_.current = l));
  const h = [d, x.inView, x.entry];
  return ((h.ref = h[0]), (h.inView = h[1]), (h.entry = h[2]), h);
}
function nN({ inView: e, appartament: t }) {
  const { t: a } = dr();
  return w.jsxs(M4, {
    className: `home-card${e ? ' in-view' : ''}`,
    children: [
      w.jsx('img', { src: t.imgUrl, alt: t.name }),
      w.jsxs(H4, {
        className: 'home-card-content',
        children: [
          w.jsx(Xe, { variant: 'h6', align: 'center', fontWeight: 700, children: t.name }),
          w.jsx('ul', {
            children: t.focalPoints.map((n, i) =>
              w.jsxs(
                'li',
                { children: [n != null && n.numbers ? `${n.numbers} ` : '', a(n.label)] },
                i
              )
            ),
          }),
        ],
      }),
      w.jsx(L4, {
        className: 'home-card-actions',
        children: w.jsx(xn, { variant: 'contained', href: '#', children: a('find_out_more') }),
      }),
    ],
  });
}
const hS = '/assets/Giannutri-logo-c46e5711.png';
var Zl = (e) => e.type === 'checkbox',
  Ei = (e) => e instanceof Date,
  Wt = (e) => e == null;
const vS = (e) => typeof e == 'object';
var _t = (e) => !Wt(e) && !Array.isArray(e) && vS(e) && !Ei(e),
  _S = (e) => (_t(e) && e.target ? (Zl(e.target) ? e.target.checked : e.target.value) : e),
  iN = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  yS = (e, t) => e.has(iN(t)),
  oN = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return _t(t) && t.hasOwnProperty('isPrototypeOf');
  },
  sm = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u';
function ut(e) {
  if (e instanceof Date) return new Date(e);
  const t = typeof FileList < 'u' && e instanceof FileList;
  if (sm && (e instanceof Blob || t)) return e;
  const a = Array.isArray(e);
  if (!a && !(_t(e) && oN(e))) return e;
  const n = a ? [] : Object.create(Object.getPrototypeOf(e));
  for (const i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = ut(e[i]));
  return n;
}
var Zc = (e) => /^\w*$/.test(e),
  Qe = (e) => e === void 0,
  um = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  cm = (e) => um(e.replace(/["|']|\]/g, '').split(/\.|\[/)),
  K = (e, t, a) => {
    if (!t || !_t(e)) return a;
    const n = (Zc(t) ? [t] : cm(t)).reduce((i, o) => (Wt(i) ? i : i[o]), e);
    return Qe(n) || n === e ? (Qe(e[t]) ? a : e[t]) : n;
  },
  ia = (e) => typeof e == 'boolean',
  It = (e) => typeof e == 'function',
  Ue = (e, t, a) => {
    let n = -1;
    const i = Zc(t) ? [t] : cm(t),
      o = i.length,
      r = o - 1;
    for (; ++n < o; ) {
      const l = i[n];
      let s = a;
      if (n !== r) {
        const u = e[l];
        s = _t(u) || Array.isArray(u) ? u : isNaN(+i[n + 1]) ? {} : [];
      }
      if (l === '__proto__' || l === 'constructor' || l === 'prototype') return;
      ((e[l] = s), (e = e[l]));
    }
  };
const $u = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  ja = {
    onBlur: 'onBlur',
    onChange: 'onChange',
    onSubmit: 'onSubmit',
    onTouched: 'onTouched',
    all: 'all',
  },
  mn = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  },
  bS = J.createContext(null);
bS.displayName = 'HookFormControlContext';
const dm = () => J.useContext(bS);
var SS = (e, t, a, n = !0) => {
  const i = { defaultValues: t._defaultValues };
  for (const o in e)
    Object.defineProperty(i, o, {
      get: () => {
        const r = o;
        return (
          t._proxyFormState[r] !== ja.all && (t._proxyFormState[r] = !n || ja.all),
          a && (a[r] = !0),
          e[r]
        );
      },
    });
  return i;
};
const fm = typeof window < 'u' ? J.useLayoutEffect : J.useEffect;
function rN(e) {
  const t = dm(),
    { control: a = t, disabled: n, name: i, exact: o } = e || {},
    [r, l] = J.useState(a._formState),
    s = J.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    });
  return (
    fm(
      () =>
        a._subscribe({
          name: i,
          formState: s.current,
          exact: o,
          callback: (u) => {
            !n && l({ ...a._formState, ...u });
          },
        }),
      [i, n, o]
    ),
    J.useEffect(() => {
      s.current.isValid && a._setValid(!0);
    }, [a]),
    J.useMemo(() => SS(r, a, s.current, !1), [r, a])
  );
}
var sa = (e) => typeof e == 'string',
  yg = (e, t, a, n, i) =>
    sa(e)
      ? (n && t.watch.add(e), K(a, e, i))
      : Array.isArray(e)
        ? e.map((o) => (n && t.watch.add(o), K(a, o)))
        : (n && (t.watchAll = !0), a),
  bg = (e) => Wt(e) || !vS(e);
function Ua(e, t, a = new WeakSet()) {
  if (bg(e) || bg(t)) return Object.is(e, t);
  if (Ei(e) && Ei(t)) return Object.is(e.getTime(), t.getTime());
  const n = Object.keys(e),
    i = Object.keys(t);
  if (n.length !== i.length) return !1;
  if (a.has(e) || a.has(t)) return !0;
  (a.add(e), a.add(t));
  for (const o of n) {
    const r = e[o];
    if (!i.includes(o)) return !1;
    if (o !== 'ref') {
      const l = t[o];
      if (
        (Ei(r) && Ei(l)) || (_t(r) && _t(l)) || (Array.isArray(r) && Array.isArray(l))
          ? !Ua(r, l, a)
          : !Object.is(r, l)
      )
        return !1;
    }
  }
  return !0;
}
function lN(e) {
  const t = dm(),
    { control: a = t, name: n, defaultValue: i, disabled: o, exact: r, compute: l } = e || {},
    s = J.useRef(i),
    u = J.useRef(l),
    c = J.useRef(void 0),
    f = J.useRef(a),
    d = J.useRef(n);
  u.current = l;
  const [g, _] = J.useState(() => {
      const v = a._getWatch(n, s.current);
      return u.current ? u.current(v) : v;
    }),
    x = J.useCallback(
      (v) => {
        const C = yg(n, a._names, v || a._formValues, !1, s.current);
        return u.current ? u.current(C) : C;
      },
      [a._formValues, a._names, n]
    ),
    S = J.useCallback(
      (v) => {
        if (!o) {
          const C = yg(n, a._names, v || a._formValues, !1, s.current);
          if (u.current) {
            const k = u.current(C);
            Ua(k, c.current) || (_(k), (c.current = k));
          } else _(C);
        }
      },
      [a._formValues, a._names, o, n]
    );
  (fm(
    () => (
      (f.current !== a || !Ua(d.current, n)) && ((f.current = a), (d.current = n), S()),
      a._subscribe({
        name: n,
        formState: { values: !0 },
        exact: r,
        callback: (v) => {
          S(v.values);
        },
      })
    ),
    [a, r, n, S]
  ),
    J.useEffect(() => a._removeUnmounted()));
  const m = f.current !== a,
    p = d.current,
    h = J.useMemo(() => {
      if (o) return null;
      const v = !m && !Ua(p, n);
      return m || v ? x() : null;
    }, [o, m, n, p, x]);
  return h !== null ? h : g;
}
function sN(e) {
  const t = dm(),
    {
      name: a,
      disabled: n,
      control: i = t,
      shouldUnregister: o,
      defaultValue: r,
      exact: l = !0,
    } = e,
    s = yS(i._names.array, a),
    u = J.useMemo(() => K(i._formValues, a, K(i._defaultValues, a, r)), [i, a, r]),
    c = lN({ control: i, name: a, defaultValue: u, exact: l }),
    f = rN({ control: i, name: a, exact: l }),
    d = J.useRef(e),
    g = J.useRef(void 0),
    _ = J.useRef(
      i.register(a, { ...e.rules, value: c, ...(ia(e.disabled) ? { disabled: e.disabled } : {}) })
    );
  d.current = e;
  const x = J.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!K(f.errors, a) },
            isDirty: { enumerable: !0, get: () => !!K(f.dirtyFields, a) },
            isTouched: { enumerable: !0, get: () => !!K(f.touchedFields, a) },
            isValidating: { enumerable: !0, get: () => !!K(f.validatingFields, a) },
            error: { enumerable: !0, get: () => K(f.errors, a) },
          }
        ),
      [f, a]
    ),
    S = J.useCallback(
      (v) => _.current.onChange({ target: { value: _S(v), name: a }, type: $u.CHANGE }),
      [a]
    ),
    m = J.useCallback(
      () => _.current.onBlur({ target: { value: K(i._formValues, a), name: a }, type: $u.BLUR }),
      [a, i._formValues]
    ),
    p = J.useCallback(
      (v) => {
        const C = K(i._fields, a);
        C &&
          C._f &&
          v &&
          (C._f.ref = {
            focus: () => It(v.focus) && v.focus(),
            select: () => It(v.select) && v.select(),
            setCustomValidity: (k) => It(v.setCustomValidity) && v.setCustomValidity(k),
            reportValidity: () => It(v.reportValidity) && v.reportValidity(),
          });
      },
      [i._fields, a]
    ),
    h = J.useMemo(
      () => ({
        name: a,
        value: c,
        ...(ia(n) || f.disabled ? { disabled: f.disabled || n } : {}),
        onChange: S,
        onBlur: m,
        ref: p,
      }),
      [a, n, f.disabled, S, m, p, c]
    );
  return (
    J.useEffect(() => {
      const v = i._options.shouldUnregister || o,
        C = g.current;
      (C && C !== a && !s && i.unregister(C),
        i.register(a, {
          ...d.current.rules,
          ...(ia(d.current.disabled) ? { disabled: d.current.disabled } : {}),
        }));
      const k = (E, M) => {
        const z = K(i._fields, E);
        z && z._f && (z._f.mount = M);
      };
      if ((k(a, !0), v)) {
        const E = ut(K(i._options.defaultValues, a, d.current.defaultValue));
        (Ue(i._defaultValues, a, E), Qe(K(i._formValues, a)) && Ue(i._formValues, a, E));
      }
      return (
        !s && i.register(a),
        (g.current = a),
        () => {
          (s ? v && !i._state.action : v) ? i.unregister(a) : k(a, !1);
        }
      );
    }, [a, i, s, o]),
    J.useEffect(() => {
      i._setDisabledField({ disabled: n, name: a });
    }, [n, a, i]),
    J.useMemo(() => ({ field: h, formState: f, fieldState: x }), [h, f, x])
  );
}
const uN = (e) => e.render(sN(e)),
  cN = J.createContext(null);
cN.displayName = 'HookFormContext';
var dN = (e, t, a, n, i) =>
    t ? { ...a[e], types: { ...(a[e] && a[e].types ? a[e].types : {}), [n]: i || !0 } } : {},
  ol = (e) => (Array.isArray(e) ? e : [e]),
  vv = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (i) => {
        for (const o of e) o.next && o.next(i);
      },
      subscribe: (i) => (
        e.push(i),
        {
          unsubscribe: () => {
            e = e.filter((o) => o !== i);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  };
function xS(e, t) {
  const a = {};
  for (const n in e)
    if (e.hasOwnProperty(n)) {
      const i = e[n],
        o = t[n];
      if (i && _t(i) && o) {
        const r = xS(i, o);
        _t(r) && (a[n] = r);
      } else e[n] && (a[n] = o);
    }
  return a;
}
var Gt = (e) => _t(e) && !Object.keys(e).length,
  gm = (e) => e.type === 'file',
  Du = (e) => {
    if (!sm) return !1;
    const t = e ? e.ownerDocument : 0;
    return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
  },
  wS = (e) => e.type === 'select-multiple',
  pm = (e) => e.type === 'radio',
  fN = (e) => pm(e) || Zl(e),
  Qd = (e) => Du(e) && e.isConnected;
function gN(e, t) {
  const a = t.slice(0, -1).length;
  let n = 0;
  for (; n < a; ) e = Qe(e) ? n++ : e[t[n++]];
  return e;
}
function pN(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !Qe(e[t])) return !1;
  return !0;
}
function ct(e, t) {
  const a = Array.isArray(t) ? t : Zc(t) ? [t] : cm(t),
    n = a.length === 1 ? e : gN(e, a),
    i = a.length - 1,
    o = a[i];
  return (
    n && delete n[o],
    i !== 0 && ((_t(n) && Gt(n)) || (Array.isArray(n) && pN(n))) && ct(e, a.slice(0, -1)),
    e
  );
}
var mN = (e) => {
  for (const t in e) if (It(e[t])) return !0;
  return !1;
};
function CS(e) {
  return Array.isArray(e) || (_t(e) && !mN(e));
}
function Sg(e, t = {}) {
  for (const a in e) {
    const n = e[a];
    CS(n) ? ((t[a] = Array.isArray(n) ? [] : {}), Sg(n, t[a])) : Qe(n) || (t[a] = !0);
  }
  return t;
}
function co(e, t, a) {
  a || (a = Sg(t));
  for (const n in e) {
    const i = e[n];
    if (CS(i))
      Qe(t) || bg(a[n])
        ? (a[n] = Sg(i, Array.isArray(i) ? [] : {}))
        : co(i, Wt(t) ? {} : t[n], a[n]);
    else {
      const o = t[n];
      a[n] = !Ua(i, o);
    }
  }
  return a;
}
const _v = { value: !1, isValid: !1 },
  yv = { value: !0, isValid: !0 };
var kS = (e) => {
    if (Array.isArray(e)) {
      if (e.length > 1) {
        const t = e.filter((a) => a && a.checked && !a.disabled).map((a) => a.value);
        return { value: t, isValid: !!t.length };
      }
      return e[0].checked && !e[0].disabled
        ? e[0].attributes && !Qe(e[0].attributes.value)
          ? Qe(e[0].value) || e[0].value === ''
            ? yv
            : { value: e[0].value, isValid: !0 }
          : yv
        : _v;
    }
    return _v;
  },
  ES = (e, { valueAsNumber: t, valueAsDate: a, setValueAs: n }) =>
    Qe(e) ? e : t ? (e === '' ? NaN : e && +e) : a && sa(e) ? new Date(e) : n ? n(e) : e;
const bv = { isValid: !1, value: null };
var FS = (e) =>
  Array.isArray(e)
    ? e.reduce((t, a) => (a && a.checked && !a.disabled ? { isValid: !0, value: a.value } : t), bv)
    : bv;
function Sv(e) {
  const t = e.ref;
  return gm(t)
    ? t.files
    : pm(t)
      ? FS(e.refs).value
      : wS(t)
        ? [...t.selectedOptions].map(({ value: a }) => a)
        : Zl(t)
          ? kS(e.refs).value
          : ES(Qe(t.value) ? e.ref.value : t.value, e);
}
var hN = (e, t, a, n) => {
    const i = {};
    for (const o of e) {
      const r = K(t, o);
      r && Ue(i, o, r._f);
    }
    return { criteriaMode: a, names: [...e], fields: i, shouldUseNativeValidation: n };
  },
  ju = (e) => e instanceof RegExp,
  Mr = (e) => (Qe(e) ? e : ju(e) ? e.source : _t(e) ? (ju(e.value) ? e.value.source : e.value) : e),
  xv = (e) => ({
    isOnSubmit: !e || e === ja.onSubmit,
    isOnBlur: e === ja.onBlur,
    isOnChange: e === ja.onChange,
    isOnAll: e === ja.all,
    isOnTouch: e === ja.onTouched,
  });
const wv = 'AsyncFunction';
var vN = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (It(e.validate) && e.validate.constructor.name === wv) ||
      (_t(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === wv))
    ),
  _N = (e) =>
    e.mount &&
    (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate),
  Cv = (e, t, a) =>
    !a &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))));
const rl = (e, t, a, n) => {
  for (const i of a || Object.keys(e)) {
    const o = K(e, i);
    if (o) {
      const { _f: r, ...l } = o;
      if (r) {
        if (r.refs && r.refs[0] && t(r.refs[0], i) && !n) return !0;
        if (r.ref && t(r.ref, r.name) && !n) return !0;
        if (rl(l, t)) break;
      } else if (_t(l) && rl(l, t)) break;
    }
  }
};
function kv(e, t, a) {
  const n = K(e, a);
  if (n || Zc(a)) return { error: n, name: a };
  const i = a.split('.');
  for (; i.length; ) {
    const o = i.join('.'),
      r = K(t, o),
      l = K(e, o);
    if (r && !Array.isArray(r) && a !== o) return { name: a };
    if (l && l.type) return { name: o, error: l };
    if (l && l.root && l.root.type) return { name: `${o}.root`, error: l.root };
    i.pop();
  }
  return { name: a };
}
var yN = (e, t, a, n) => {
    a(e);
    const { name: i, ...o } = e;
    return (
      Gt(o) ||
      Object.keys(o).length >= Object.keys(t).length ||
      Object.keys(o).find((r) => t[r] === (!n || ja.all))
    );
  },
  bN = (e, t, a) =>
    !e ||
    !t ||
    e === t ||
    ol(e).some((n) => n && (a ? n === t : n.startsWith(t) || t.startsWith(n))),
  SN = (e, t, a, n, i) =>
    i.isOnAll
      ? !1
      : !a && i.isOnTouch
        ? !(t || e)
        : (a ? n.isOnBlur : i.isOnBlur)
          ? !e
          : (a ? n.isOnChange : i.isOnChange)
            ? e
            : !0,
  xN = (e, t) => !um(K(e, t)).length && ct(e, t),
  wN = (e, t, a) => {
    const n = ol(K(e, a));
    return (Ue(n, 'root', t[a]), Ue(e, a, n), e);
  };
function Ev(e, t, a = 'validate') {
  if (sa(e) || (Array.isArray(e) && e.every(sa)) || (ia(e) && !e))
    return { type: a, message: sa(e) ? e : '', ref: t };
}
var io = (e) => (_t(e) && !ju(e) ? e : { value: e, message: '' }),
  Fv = async (e, t, a, n, i, o) => {
    const {
        ref: r,
        refs: l,
        required: s,
        maxLength: u,
        minLength: c,
        min: f,
        max: d,
        pattern: g,
        validate: _,
        name: x,
        valueAsNumber: S,
        mount: m,
      } = e._f,
      p = K(a, x);
    if (!m || t.has(x)) return {};
    const h = l ? l[0] : r,
      v = (b) => {
        i && h.reportValidity && (h.setCustomValidity(ia(b) ? '' : b || ''), h.reportValidity());
      },
      C = {},
      k = pm(r),
      E = Zl(r),
      M = k || E,
      z =
        ((S || gm(r)) && Qe(r.value) && Qe(p)) ||
        (Du(r) && r.value === '') ||
        p === '' ||
        (Array.isArray(p) && !p.length),
      $ = dN.bind(null, x, n, C),
      V = (b, O, A, N = mn.maxLength, R = mn.minLength) => {
        const j = b ? O : A;
        C[x] = { type: b ? N : R, message: j, ref: r, ...$(b ? N : R, j) };
      };
    if (
      o
        ? !Array.isArray(p) || !p.length
        : s &&
          ((!M && (z || Wt(p))) || (ia(p) && !p) || (E && !kS(l).isValid) || (k && !FS(l).isValid))
    ) {
      const { value: b, message: O } = sa(s) ? { value: !!s, message: s } : io(s);
      if (b && ((C[x] = { type: mn.required, message: O, ref: h, ...$(mn.required, O) }), !n))
        return (v(O), C);
    }
    if (!z && (!Wt(f) || !Wt(d))) {
      let b, O;
      const A = io(d),
        N = io(f);
      if (!Wt(p) && !isNaN(p)) {
        const R = r.valueAsNumber || (p && +p);
        (Wt(A.value) || (b = R > A.value), Wt(N.value) || (O = R < N.value));
      } else {
        const R = r.valueAsDate || new Date(p),
          j = (q) => new Date(new Date().toDateString() + ' ' + q),
          B = r.type == 'time',
          U = r.type == 'week';
        (sa(A.value) && p && (b = B ? j(p) > j(A.value) : U ? p > A.value : R > new Date(A.value)),
          sa(N.value) &&
            p &&
            (O = B ? j(p) < j(N.value) : U ? p < N.value : R < new Date(N.value)));
      }
      if ((b || O) && (V(!!b, A.message, N.message, mn.max, mn.min), !n))
        return (v(C[x].message), C);
    }
    if ((u || c) && !z && (sa(p) || (o && Array.isArray(p)))) {
      const b = io(u),
        O = io(c),
        A = !Wt(b.value) && p.length > +b.value,
        N = !Wt(O.value) && p.length < +O.value;
      if ((A || N) && (V(A, b.message, O.message), !n)) return (v(C[x].message), C);
    }
    if (g && !z && sa(p)) {
      const { value: b, message: O } = io(g);
      if (
        ju(b) &&
        !p.match(b) &&
        ((C[x] = { type: mn.pattern, message: O, ref: r, ...$(mn.pattern, O) }), !n)
      )
        return (v(O), C);
    }
    if (_) {
      if (It(_)) {
        const b = await _(p, a),
          O = Ev(b, h);
        if (O && ((C[x] = { ...O, ...$(mn.validate, O.message) }), !n)) return (v(O.message), C);
      } else if (_t(_)) {
        let b = {};
        for (const O in _) {
          if (!Gt(b) && !n) break;
          const A = Ev(await _[O](p, a), h, O);
          A && ((b = { ...A, ...$(O, A.message) }), v(A.message), n && (C[x] = b));
        }
        if (!Gt(b) && ((C[x] = { ref: h, ...b }), !n)) return C;
      }
    }
    return (v(!0), C);
  };
const CN = { mode: ja.onSubmit, reValidateMode: ja.onChange, shouldFocusError: !0 };
function kN(e = {}) {
  let t = { ...CN, ...e },
    a = {
      submitCount: 0,
      isDirty: !1,
      isReady: !1,
      isLoading: It(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    n = {},
    i = _t(t.defaultValues) || _t(t.values) ? ut(t.defaultValues || t.values) || {} : {},
    o = t.shouldUnregister ? {} : ut(i),
    r = { action: !1, mount: !1, watch: !1, keepIsValid: !1 },
    l = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    s,
    u = 0;
  const c = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    f = { ...c };
  let d = { ...f };
  const g = { array: vv(), state: vv() },
    _ = t.criteriaMode === ja.all,
    x = (F) => (T) => {
      (clearTimeout(u), (u = setTimeout(F, T)));
    },
    S = async (F) => {
      if (!r.keepIsValid && !t.disabled && (f.isValid || d.isValid || F)) {
        let T;
        (t.resolver ? ((T = Gt((await M()).errors)), m()) : (T = await $(n, !0)),
          T !== a.isValid && g.state.next({ isValid: T }));
      }
    },
    m = (F, T) => {
      !t.disabled &&
        (f.isValidating || f.validatingFields || d.isValidating || d.validatingFields) &&
        ((F || Array.from(l.mount)).forEach((L) => {
          L && (T ? Ue(a.validatingFields, L, T) : ct(a.validatingFields, L));
        }),
        g.state.next({
          validatingFields: a.validatingFields,
          isValidating: !Gt(a.validatingFields),
        }));
    },
    p = (F, T = [], L, I, P = !0, G = !0) => {
      if (I && L && !t.disabled) {
        if (((r.action = !0), G && Array.isArray(K(n, F)))) {
          const Q = L(K(n, F), I.argA, I.argB);
          P && Ue(n, F, Q);
        }
        if (G && Array.isArray(K(a.errors, F))) {
          const Q = L(K(a.errors, F), I.argA, I.argB);
          (P && Ue(a.errors, F, Q), xN(a.errors, F));
        }
        if ((f.touchedFields || d.touchedFields) && G && Array.isArray(K(a.touchedFields, F))) {
          const Q = L(K(a.touchedFields, F), I.argA, I.argB);
          P && Ue(a.touchedFields, F, Q);
        }
        ((f.dirtyFields || d.dirtyFields) && (a.dirtyFields = co(i, o)),
          g.state.next({
            name: F,
            isDirty: b(F, T),
            dirtyFields: a.dirtyFields,
            errors: a.errors,
            isValid: a.isValid,
          }));
      } else Ue(o, F, T);
    },
    h = (F, T) => {
      (Ue(a.errors, F, T), g.state.next({ errors: a.errors }));
    },
    v = (F) => {
      ((a.errors = F), g.state.next({ errors: a.errors, isValid: !1 }));
    },
    C = (F, T, L, I) => {
      const P = K(n, F);
      if (P) {
        const G = K(o, F, Qe(L) ? K(i, F) : L);
        (Qe(G) || (I && I.defaultChecked) || T ? Ue(o, F, T ? G : Sv(P._f)) : N(F, G),
          r.mount && !r.action && S());
      }
    },
    k = (F, T, L, I, P) => {
      let G = !1,
        Q = !1;
      const ve = { name: F };
      if (!t.disabled) {
        if (!L || I) {
          (f.isDirty || d.isDirty) &&
            ((Q = a.isDirty), (a.isDirty = ve.isDirty = b()), (G = Q !== ve.isDirty));
          const de = Ua(K(i, F), T);
          ((Q = !!K(a.dirtyFields, F)),
            de ? ct(a.dirtyFields, F) : Ue(a.dirtyFields, F, !0),
            (ve.dirtyFields = a.dirtyFields),
            (G = G || ((f.dirtyFields || d.dirtyFields) && Q !== !de)));
        }
        if (L) {
          const de = K(a.touchedFields, F);
          de ||
            (Ue(a.touchedFields, F, L),
            (ve.touchedFields = a.touchedFields),
            (G = G || ((f.touchedFields || d.touchedFields) && de !== L)));
        }
        G && P && g.state.next(ve);
      }
      return G ? ve : {};
    },
    E = (F, T, L, I) => {
      const P = K(a.errors, F),
        G = (f.isValid || d.isValid) && ia(T) && a.isValid !== T;
      if (
        (t.delayError && L
          ? ((s = x(() => h(F, L))), s(t.delayError))
          : (clearTimeout(u), (s = null), L ? Ue(a.errors, F, L) : ct(a.errors, F)),
        (L ? !Ua(P, L) : P) || !Gt(I) || G)
      ) {
        const Q = { ...I, ...(G && ia(T) ? { isValid: T } : {}), errors: a.errors, name: F };
        ((a = { ...a, ...Q }), g.state.next(Q));
      }
    },
    M = async (F) => (
      m(F, !0),
      await t.resolver(
        o,
        t.context,
        hN(F || l.mount, n, t.criteriaMode, t.shouldUseNativeValidation)
      )
    ),
    z = async (F) => {
      const { errors: T } = await M(F);
      if ((m(F), F))
        for (const L of F) {
          const I = K(T, L);
          I ? Ue(a.errors, L, I) : ct(a.errors, L);
        }
      else a.errors = T;
      return T;
    },
    $ = async (F, T, L = { valid: !0 }) => {
      for (const I in F) {
        const P = F[I];
        if (P) {
          const { _f: G, ...Q } = P;
          if (G) {
            const ve = l.array.has(G.name),
              de = P._f && vN(P._f);
            de && f.validatingFields && m([G.name], !0);
            const et = await Fv(P, l.disabled, o, _, t.shouldUseNativeValidation && !T, ve);
            if (
              (de && f.validatingFields && m([G.name]),
              et[G.name] && ((L.valid = !1), T || e.shouldUseNativeValidation))
            )
              break;
            !T &&
              (K(et, G.name)
                ? ve
                  ? wN(a.errors, et, G.name)
                  : Ue(a.errors, G.name, et[G.name])
                : ct(a.errors, G.name));
          }
          !Gt(Q) && (await $(Q, T, L));
        }
      }
      return L.valid;
    },
    V = () => {
      for (const F of l.unMount) {
        const T = K(n, F);
        T && (T._f.refs ? T._f.refs.every((L) => !Qd(L)) : !Qd(T._f.ref)) && At(F);
      }
      l.unMount = new Set();
    },
    b = (F, T) => !t.disabled && (F && T && Ue(o, F, T), !Ua(X(), i)),
    O = (F, T, L) => yg(F, l, { ...(r.mount ? o : Qe(T) ? i : sa(F) ? { [F]: T } : T) }, L, T),
    A = (F) => um(K(r.mount ? o : i, F, t.shouldUnregister ? K(i, F, []) : [])),
    N = (F, T, L = {}) => {
      const I = K(n, F);
      let P = T;
      if (I) {
        const G = I._f;
        G &&
          (!G.disabled && Ue(o, F, ES(T, G)),
          (P = Du(G.ref) && Wt(T) ? '' : T),
          wS(G.ref)
            ? [...G.ref.options].forEach((Q) => (Q.selected = P.includes(Q.value)))
            : G.refs
              ? Zl(G.ref)
                ? G.refs.forEach((Q) => {
                    (!Q.defaultChecked || !Q.disabled) &&
                      (Array.isArray(P)
                        ? (Q.checked = !!P.find((ve) => ve === Q.value))
                        : (Q.checked = P === Q.value || !!P));
                  })
                : G.refs.forEach((Q) => (Q.checked = Q.value === P))
              : gm(G.ref)
                ? (G.ref.value = '')
                : ((G.ref.value = P), G.ref.type || g.state.next({ name: F, values: ut(o) })));
      }
      ((L.shouldDirty || L.shouldTouch) && k(F, P, L.shouldTouch, L.shouldDirty, !0),
        L.shouldValidate && q(F));
    },
    R = (F, T, L) => {
      for (const I in T) {
        if (!T.hasOwnProperty(I)) return;
        const P = T[I],
          G = F + '.' + I,
          Q = K(n, G);
        (l.array.has(F) || _t(P) || (Q && !Q._f)) && !Ei(P) ? R(G, P, L) : N(G, P, L);
      }
    },
    j = (F, T, L = {}) => {
      const I = K(n, F),
        P = l.array.has(F),
        G = ut(T);
      (Ue(o, F, G),
        P
          ? (g.array.next({ name: F, values: ut(o) }),
            (f.isDirty || f.dirtyFields || d.isDirty || d.dirtyFields) &&
              L.shouldDirty &&
              g.state.next({ name: F, dirtyFields: co(i, o), isDirty: b(F, G) }))
          : I && !I._f && !Wt(G)
            ? R(F, G, L)
            : N(F, G, L),
        Cv(F, l)
          ? g.state.next({ ...a, name: F, values: ut(o) })
          : g.state.next({ name: r.mount ? F : void 0, values: ut(o) }));
    },
    B = async (F) => {
      r.mount = !0;
      const T = F.target;
      let L = T.name,
        I = !0;
      const P = K(n, L),
        G = (de) => {
          I = Number.isNaN(de) || (Ei(de) && isNaN(de.getTime())) || Ua(de, K(o, L, de));
        },
        Q = xv(t.mode),
        ve = xv(t.reValidateMode);
      if (P) {
        let de, et;
        const Se = T.type ? Sv(P._f) : _S(F),
          wt = F.type === $u.BLUR || F.type === $u.FOCUS_OUT,
          Ln =
            (!_N(P._f) && !t.resolver && !K(a.errors, L) && !P._f.deps) ||
            SN(wt, K(a.touchedFields, L), a.isSubmitted, ve, Q),
          gi = Cv(L, l, wt);
        (Ue(o, L, Se),
          wt
            ? (!T || !T.readOnly) && (P._f.onBlur && P._f.onBlur(F), s && s(0))
            : P._f.onChange && P._f.onChange(F));
        const fr = k(L, Se, wt),
          Wl = !Gt(fr) || gi;
        if ((!wt && g.state.next({ name: L, type: F.type, values: ut(o) }), Ln))
          return (
            (f.isValid || d.isValid) && (t.mode === 'onBlur' ? wt && S() : wt || S()),
            Wl && g.state.next({ name: L, ...(gi ? {} : fr) })
          );
        if ((!wt && gi && g.state.next({ ...a }), t.resolver)) {
          const { errors: gr } = await M([L]);
          if ((m([L]), G(Se), I)) {
            const Jl = kv(a.errors, n, L),
              pr = kv(gr, n, Jl.name || L);
            ((de = pr.error), (L = pr.name), (et = Gt(gr)));
          }
        } else
          (m([L], !0),
            (de = (await Fv(P, l.disabled, o, _, t.shouldUseNativeValidation))[L]),
            m([L]),
            G(Se),
            I && (de ? (et = !1) : (f.isValid || d.isValid) && (et = await $(n, !0))));
        I &&
          (P._f.deps && (!Array.isArray(P._f.deps) || P._f.deps.length > 0) && q(P._f.deps),
          E(L, et, de, fr));
      }
    },
    U = (F, T) => {
      if (K(a.errors, T) && F.focus) return (F.focus(), 1);
    },
    q = async (F, T = {}) => {
      let L, I;
      const P = ol(F);
      if (t.resolver) {
        const G = await z(Qe(F) ? F : P);
        ((L = Gt(G)), (I = F ? !P.some((Q) => K(G, Q)) : L));
      } else
        F
          ? ((I = (
              await Promise.all(
                P.map(async (G) => {
                  const Q = K(n, G);
                  return await $(Q && Q._f ? { [G]: Q } : Q);
                })
              )
            ).every(Boolean)),
            !(!I && !a.isValid) && S())
          : (I = L = await $(n));
      return (
        g.state.next({
          ...(!sa(F) || ((f.isValid || d.isValid) && L !== a.isValid) ? {} : { name: F }),
          ...(t.resolver || !F ? { isValid: L } : {}),
          errors: a.errors,
        }),
        T.shouldFocus && !I && rl(n, U, F ? P : l.mount),
        I
      );
    },
    X = (F, T) => {
      let L = { ...(r.mount ? o : i) };
      return (
        T && (L = xS(T.dirtyFields ? a.dirtyFields : a.touchedFields, L)),
        Qe(F) ? L : sa(F) ? K(L, F) : F.map((I) => K(L, I))
      );
    },
    ye = (F, T) => ({
      invalid: !!K((T || a).errors, F),
      isDirty: !!K((T || a).dirtyFields, F),
      error: K((T || a).errors, F),
      isValidating: !!K(a.validatingFields, F),
      isTouched: !!K((T || a).touchedFields, F),
    }),
    le = (F) => {
      (F && ol(F).forEach((T) => ct(a.errors, T)), g.state.next({ errors: F ? a.errors : {} }));
    },
    Ee = (F, T, L) => {
      const I = (K(n, F, { _f: {} })._f || {}).ref,
        P = K(a.errors, F) || {},
        { ref: G, message: Q, type: ve, ...de } = P;
      (Ue(a.errors, F, { ...de, ...T, ref: I }),
        g.state.next({ name: F, errors: a.errors, isValid: !1 }),
        L && L.shouldFocus && I && I.focus && I.focus());
    },
    je = (F, T) =>
      It(F) ? g.state.subscribe({ next: (L) => 'values' in L && F(O(void 0, T), L) }) : O(F, T, !0),
    Je = (F) =>
      g.state.subscribe({
        next: (T) => {
          bN(F.name, T.name, F.exact) &&
            yN(T, F.formState || f, st, F.reRenderRoot) &&
            F.callback({ values: { ...o }, ...a, ...T, defaultValues: i });
        },
      }).unsubscribe,
    Ze = (F) => (
      (r.mount = !0),
      (d = { ...d, ...F.formState }),
      Je({ ...F, formState: { ...c, ...F.formState } })
    ),
    At = (F, T = {}) => {
      for (const L of F ? ol(F) : l.mount)
        (l.mount.delete(L),
          l.array.delete(L),
          T.keepValue || (ct(n, L), ct(o, L)),
          !T.keepError && ct(a.errors, L),
          !T.keepDirty && ct(a.dirtyFields, L),
          !T.keepTouched && ct(a.touchedFields, L),
          !T.keepIsValidating && ct(a.validatingFields, L),
          !t.shouldUnregister && !T.keepDefaultValue && ct(i, L));
      (g.state.next({ values: ut(o) }),
        g.state.next({ ...a, ...(T.keepDirty ? { isDirty: b() } : {}) }),
        !T.keepIsValid && S());
    },
    Le = ({ disabled: F, name: T }) => {
      if ((ia(F) && r.mount) || F || l.disabled.has(T)) {
        const P = l.disabled.has(T) !== !!F;
        (F ? l.disabled.add(T) : l.disabled.delete(T), P && r.mount && !r.action && S());
      }
    },
    te = (F, T = {}) => {
      let L = K(n, F);
      const I = ia(T.disabled) || ia(t.disabled);
      return (
        Ue(n, F, {
          ...(L || {}),
          _f: { ...(L && L._f ? L._f : { ref: { name: F } }), name: F, mount: !0, ...T },
        }),
        l.mount.add(F),
        L ? Le({ disabled: ia(T.disabled) ? T.disabled : t.disabled, name: F }) : C(F, !0, T.value),
        {
          ...(I ? { disabled: T.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!T.required,
                min: Mr(T.min),
                max: Mr(T.max),
                minLength: Mr(T.minLength),
                maxLength: Mr(T.maxLength),
                pattern: Mr(T.pattern),
              }
            : {}),
          name: F,
          onChange: B,
          onBlur: B,
          ref: (P) => {
            if (P) {
              (te(F, T), (L = K(n, F)));
              const G =
                  (Qe(P.value) &&
                    P.querySelectorAll &&
                    P.querySelectorAll('input,select,textarea')[0]) ||
                  P,
                Q = fN(G),
                ve = L._f.refs || [];
              if (Q ? ve.find((de) => de === G) : G === L._f.ref) return;
              (Ue(n, F, {
                _f: {
                  ...L._f,
                  ...(Q
                    ? {
                        refs: [...ve.filter(Qd), G, ...(Array.isArray(K(i, F)) ? [{}] : [])],
                        ref: { type: G.type, name: F },
                      }
                    : { ref: G }),
                },
              }),
                C(F, !1, void 0, G));
            } else
              ((L = K(n, F, {})),
                L._f && (L._f.mount = !1),
                (t.shouldUnregister || T.shouldUnregister) &&
                  !(yS(l.array, F) && r.action) &&
                  l.unMount.add(F));
          },
        }
      );
    },
    se = () => t.shouldFocusError && rl(n, U, l.mount),
    Fe = (F) => {
      ia(F) &&
        (g.state.next({ disabled: F }),
        rl(
          n,
          (T, L) => {
            const I = K(n, L);
            I &&
              ((T.disabled = I._f.disabled || F),
              Array.isArray(I._f.refs) &&
                I._f.refs.forEach((P) => {
                  P.disabled = I._f.disabled || F;
                }));
          },
          0,
          !1
        ));
    },
    St = (F, T) => async (L) => {
      let I;
      L && (L.preventDefault && L.preventDefault(), L.persist && L.persist());
      let P = ut(o);
      if ((g.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: G, values: Q } = await M();
        (m(), (a.errors = G), (P = ut(Q)));
      } else await $(n);
      if (l.disabled.size) for (const G of l.disabled) ct(P, G);
      if ((ct(a.errors, 'root'), Gt(a.errors))) {
        g.state.next({ errors: {} });
        try {
          await F(P, L);
        } catch (G) {
          I = G;
        }
      } else (T && (await T({ ...a.errors }, L)), se(), setTimeout(se));
      if (
        (g.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Gt(a.errors) && !I,
          submitCount: a.submitCount + 1,
          errors: a.errors,
        }),
        I)
      )
        throw I;
    },
    ie = (F, T = {}) => {
      K(n, F) &&
        (Qe(T.defaultValue)
          ? j(F, ut(K(i, F)))
          : (j(F, T.defaultValue), Ue(i, F, ut(T.defaultValue))),
        T.keepTouched || ct(a.touchedFields, F),
        T.keepDirty ||
          (ct(a.dirtyFields, F), (a.isDirty = T.defaultValue ? b(F, ut(K(i, F))) : b())),
        T.keepError || (ct(a.errors, F), f.isValid && S()),
        g.state.next({ ...a }));
    },
    be = (F, T = {}) => {
      const L = F ? ut(F) : i,
        I = ut(L),
        P = Gt(F),
        G = P ? i : I;
      if ((T.keepDefaultValues || (i = L), !T.keepValues)) {
        if (T.keepDirtyValues) {
          const Q = new Set([...l.mount, ...Object.keys(co(i, o))]);
          for (const ve of Array.from(Q)) {
            const de = K(a.dirtyFields, ve),
              et = K(o, ve),
              Se = K(G, ve);
            de && !Qe(et) ? Ue(G, ve, et) : !de && !Qe(Se) && j(ve, Se);
          }
        } else {
          if (sm && Qe(F))
            for (const Q of l.mount) {
              const ve = K(n, Q);
              if (ve && ve._f) {
                const de = Array.isArray(ve._f.refs) ? ve._f.refs[0] : ve._f.ref;
                if (Du(de)) {
                  const et = de.closest('form');
                  if (et) {
                    et.reset();
                    break;
                  }
                }
              }
            }
          if (T.keepFieldsRef) for (const Q of l.mount) j(Q, K(G, Q));
          else n = {};
        }
        ((o = t.shouldUnregister ? (T.keepDefaultValues ? ut(i) : {}) : ut(G)),
          g.array.next({ values: { ...G } }),
          g.state.next({ values: { ...G } }));
      }
      ((l = {
        mount: T.keepDirtyValues ? l.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: '',
      }),
        (r.mount =
          !f.isValid || !!T.keepIsValid || !!T.keepDirtyValues || (!t.shouldUnregister && !Gt(G))),
        (r.watch = !!t.shouldUnregister),
        (r.keepIsValid = !!T.keepIsValid),
        (r.action = !1),
        T.keepErrors || (a.errors = {}),
        g.state.next({
          submitCount: T.keepSubmitCount ? a.submitCount : 0,
          isDirty: P ? !1 : T.keepDirty ? a.isDirty : !!(T.keepDefaultValues && !Ua(F, i)),
          isSubmitted: T.keepIsSubmitted ? a.isSubmitted : !1,
          dirtyFields: P
            ? {}
            : T.keepDirtyValues
              ? T.keepDefaultValues && o
                ? co(i, o)
                : a.dirtyFields
              : T.keepDefaultValues && F
                ? co(i, F)
                : T.keepDirty
                  ? a.dirtyFields
                  : {},
          touchedFields: T.keepTouched ? a.touchedFields : {},
          errors: T.keepErrors ? a.errors : {},
          isSubmitSuccessful: T.keepIsSubmitSuccessful ? a.isSubmitSuccessful : !1,
          isSubmitting: !1,
          defaultValues: i,
        }));
    },
    xt = (F, T) => be(It(F) ? F(o) : F, { ...t.resetOptions, ...T }),
    Mt = (F, T = {}) => {
      const L = K(n, F),
        I = L && L._f;
      if (I) {
        const P = I.refs ? I.refs[0] : I.ref;
        P.focus &&
          setTimeout(() => {
            (P.focus(), T.shouldSelect && It(P.select) && P.select());
          });
      }
    },
    st = (F) => {
      a = { ...a, ...F };
    },
    Kt = {
      control: {
        register: te,
        unregister: At,
        getFieldState: ye,
        handleSubmit: St,
        setError: Ee,
        _subscribe: Je,
        _runSchema: M,
        _updateIsValidating: m,
        _focusError: se,
        _getWatch: O,
        _getDirty: b,
        _setValid: S,
        _setFieldArray: p,
        _setDisabledField: Le,
        _setErrors: v,
        _getFieldArray: A,
        _reset: be,
        _resetDefaultValues: () =>
          It(t.defaultValues) &&
          t.defaultValues().then((F) => {
            (xt(F, t.resetOptions), g.state.next({ isLoading: !1 }));
          }),
        _removeUnmounted: V,
        _disableForm: Fe,
        _subjects: g,
        _proxyFormState: f,
        get _fields() {
          return n;
        },
        get _formValues() {
          return o;
        },
        get _state() {
          return r;
        },
        set _state(F) {
          r = F;
        },
        get _defaultValues() {
          return i;
        },
        get _names() {
          return l;
        },
        set _names(F) {
          l = F;
        },
        get _formState() {
          return a;
        },
        get _options() {
          return t;
        },
        set _options(F) {
          t = { ...t, ...F };
        },
      },
      subscribe: Ze,
      trigger: q,
      register: te,
      handleSubmit: St,
      watch: je,
      setValue: j,
      getValues: X,
      reset: xt,
      resetField: ie,
      clearErrors: le,
      unregister: At,
      setError: Ee,
      setFocus: Mt,
      getFieldState: ye,
    };
  return { ...Kt, formControl: Kt };
}
function EN(e = {}) {
  const t = J.useRef(void 0),
    a = J.useRef(void 0),
    [n, i] = J.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: It(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      isReady: !1,
      defaultValues: It(e.defaultValues) ? void 0 : e.defaultValues,
    });
  if (!t.current)
    if (e.formControl)
      ((t.current = { ...e.formControl, formState: n }),
        e.defaultValues &&
          !It(e.defaultValues) &&
          e.formControl.reset(e.defaultValues, e.resetOptions));
    else {
      const { formControl: r, ...l } = kN(e);
      t.current = { ...l, formState: n };
    }
  const o = t.current.control;
  return (
    (o._options = e),
    fm(() => {
      const r = o._subscribe({
        formState: o._proxyFormState,
        callback: () => i({ ...o._formState }),
        reRenderRoot: !0,
      });
      return (i((l) => ({ ...l, isReady: !0 })), (o._formState.isReady = !0), r);
    }, [o]),
    J.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]),
    J.useEffect(() => {
      (e.mode && (o._options.mode = e.mode),
        e.reValidateMode && (o._options.reValidateMode = e.reValidateMode));
    }, [o, e.mode, e.reValidateMode]),
    J.useEffect(() => {
      e.errors && (o._setErrors(e.errors), o._focusError());
    }, [o, e.errors]),
    J.useEffect(() => {
      e.shouldUnregister && o._subjects.state.next({ values: o._getWatch() });
    }, [o, e.shouldUnregister]),
    J.useEffect(() => {
      if (o._proxyFormState.isDirty) {
        const r = o._getDirty();
        r !== n.isDirty && o._subjects.state.next({ isDirty: r });
      }
    }, [o, n.isDirty]),
    J.useEffect(() => {
      var r;
      e.values && !Ua(e.values, a.current)
        ? (o._reset(e.values, { keepFieldsRef: !0, ...o._options.resetOptions }),
          (!((r = o._options.resetOptions) === null || r === void 0) && r.keepIsValid) ||
            o._setValid(),
          (a.current = e.values),
          i((l) => ({ ...l })))
        : o._resetDefaultValues();
    }, [o, e.values]),
    J.useEffect(() => {
      (o._state.mount || (o._setValid(), (o._state.mount = !0)),
        o._state.watch && ((o._state.watch = !1), o._subjects.state.next({ ...o._formState })),
        o._removeUnmounted());
    }),
    (t.current.formState = J.useMemo(() => SS(n, o), [o, n])),
    t.current
  );
}
const FN = [
    {
      name: 'Afghanistan',
      dial_code: '+93',
      code: 'AF',
      sigla: 'AFG',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/40px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Flag_of_Afghanistan_%282013%E2%80%932021%29.svg/60px-Flag_of_Afghanistan_%282013%E2%80%932021%29.svg.png 2x',
    },
    {
      name: 'United States',
      dial_code: '+1',
      code: 'US',
      sigla: 'USA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/40px-Flag_of_the_United_States.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/60px-Flag_of_the_United_States.svg.png 2x',
    },
    {
      name: 'Aland Islands',
      dial_code: '+358',
      code: 'AX',
      sigla: 'ALA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_%C3%85land.svg/40px-Flag_of_%C3%85land.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/52/Flag_of_%C3%85land.svg/60px-Flag_of_%C3%85land.svg.png 2x',
    },
    {
      name: 'Albania',
      dial_code: '+355',
      code: 'AL',
      sigla: 'ALB',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/40px-Flag_of_Albania.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/60px-Flag_of_Albania.svg.png 2x',
    },
    {
      name: 'Algeria',
      dial_code: '+213',
      code: 'DZ',
      sigla: 'DZA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/40px-Flag_of_Algeria.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/60px-Flag_of_Algeria.svg.png 2x',
    },
    {
      name: 'AmericanSamoa',
      dial_code: '+1684',
      code: 'AS',
      sigla: 'ASM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag_of_American_Samoa.svg/40px-Flag_of_American_Samoa.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/87/Flag_of_American_Samoa.svg/60px-Flag_of_American_Samoa.svg.png 2x',
    },
    {
      name: 'Andorra',
      dial_code: '+376',
      code: 'AD',
      sigla: 'AND',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/40px-Flag_of_Andorra.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/60px-Flag_of_Andorra.svg.png 2x',
    },
    {
      name: 'Angola',
      dial_code: '+244',
      code: 'AO',
      sigla: 'AGO',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/40px-Flag_of_Angola.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/60px-Flag_of_Angola.svg.png 2x',
    },
    {
      name: 'Anguilla',
      dial_code: '+1264',
      code: 'AI',
      sigla: 'AIA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Anguilla.svg/40px-Flag_of_Anguilla.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Anguilla.svg/60px-Flag_of_Anguilla.svg.png 2x',
    },
    {
      name: 'Antarctica',
      dial_code: '+672',
      code: 'AQ',
      sigla: 'ATA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg/40px-Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg/40px-Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg.png 2x',
    },
    {
      name: 'Antigua and Barbuda',
      dial_code: '+1268',
      code: 'AG',
      sigla: 'ATG',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/40px-Flag_of_Antigua_and_Barbuda.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Antigua_and_Barbuda.svg/60px-Flag_of_Antigua_and_Barbuda.svg.png 2x',
    },
    {
      name: 'Argentina',
      dial_code: '+54',
      code: 'AR',
      sigla: 'ARG',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/40px-Flag_of_Argentina.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/60px-Flag_of_Argentina.svg.png 2x',
    },
    {
      name: 'Armenia',
      dial_code: '+374',
      code: 'AM',
      sigla: 'ARM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/40px-Flag_of_Armenia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/60px-Flag_of_Armenia.svg.png 2x',
    },
    {
      name: 'Aruba',
      dial_code: '+297',
      code: 'AW',
      sigla: 'ABW',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Aruba.svg/40px-Flag_of_Aruba.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Aruba.svg/60px-Flag_of_Aruba.svg.png 2x',
    },
    {
      name: 'Australia',
      dial_code: '+61',
      code: 'AU',
      sigla: 'AUS',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/40px-Flag_of_Australia_%28converted%29.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/60px-Flag_of_Australia_%28converted%29.svg.png 2x',
    },
    {
      name: 'Austria',
      dial_code: '+43',
      code: 'AT',
      sigla: 'AUT',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/40px-Flag_of_Austria.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/60px-Flag_of_Austria.svg.png 2x',
    },
    {
      name: 'Azerbaijan',
      dial_code: '+994',
      code: 'AZ',
      sigla: 'AZE',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/40px-Flag_of_Azerbaijan.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/60px-Flag_of_Azerbaijan.svg.png 2x',
    },
    {
      name: 'Bahamas',
      dial_code: '+1242',
      code: 'BS',
      sigla: 'BHS',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/40px-Flag_of_the_Bahamas.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_the_Bahamas.svg/60px-Flag_of_the_Bahamas.svg.png 2x',
    },
    {
      name: 'Bahrain',
      dial_code: '+973',
      code: 'BH',
      sigla: 'BHR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/40px-Flag_of_Bahrain.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Bahrain.svg/60px-Flag_of_Bahrain.svg.png 2x',
    },
    {
      name: 'Bangladesh',
      dial_code: '+880',
      code: 'BD',
      sigla: 'BGD',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/40px-Flag_of_Bangladesh.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/60px-Flag_of_Bangladesh.svg.png 2x',
    },
    {
      name: 'Barbados',
      dial_code: '+1246',
      code: 'BB',
      sigla: 'BRB',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/40px-Flag_of_Barbados.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Flag_of_Barbados.svg/60px-Flag_of_Barbados.svg.png 2x',
    },
    {
      name: 'Belarus',
      dial_code: '+375',
      code: 'BY',
      sigla: 'BLR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/40px-Flag_of_Belarus.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/60px-Flag_of_Belarus.svg.png 2x',
    },
    {
      name: 'Belgium',
      dial_code: '+32',
      code: 'BE',
      sigla: 'BEL',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/40px-Flag_of_Belgium_%28civil%29.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Belgium_%28civil%29.svg/60px-Flag_of_Belgium_%28civil%29.svg.png 2x',
    },
    {
      name: 'Belize',
      dial_code: '+501',
      code: 'BZ',
      sigla: 'BLZ',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/40px-Flag_of_Belize.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Flag_of_Belize.svg/60px-Flag_of_Belize.svg.png 2x',
    },
    {
      name: 'Benin',
      dial_code: '+229',
      code: 'BJ',
      sigla: 'BEN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/40px-Flag_of_Benin.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/60px-Flag_of_Benin.svg.png 2x',
    },
    {
      name: 'Bermuda',
      dial_code: '+1441',
      code: 'BM',
      sigla: 'BMU',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bermuda.svg/40px-Flag_of_Bermuda.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bermuda.svg/60px-Flag_of_Bermuda.svg.png 2x',
    },
    {
      name: 'Bhutan',
      dial_code: '+975',
      code: 'BT',
      sigla: 'BTN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/40px-Flag_of_Bhutan.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_of_Bhutan.svg/60px-Flag_of_Bhutan.svg.png 2x',
    },
    {
      name: 'Bolivia, Plurinational State of',
      dial_code: '+591',
      code: 'BO',
      sigla: 'BOL',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/40px-Flag_of_Bolivia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Bolivia.svg/60px-Flag_of_Bolivia.svg.png 2x',
    },
    {
      name: 'Bosnia and Herzegovina',
      dial_code: '+387',
      code: 'BA',
      sigla: 'BIH',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/40px-Flag_of_Bosnia_and_Herzegovina.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/60px-Flag_of_Bosnia_and_Herzegovina.svg.png 2x',
    },
    {
      name: 'Botswana',
      dial_code: '+267',
      code: 'BW',
      sigla: 'BWA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/40px-Flag_of_Botswana.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Botswana.svg/60px-Flag_of_Botswana.svg.png 2x',
    },
    {
      name: 'Brazil',
      dial_code: '+55',
      code: 'BR',
      sigla: 'BRA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/40px-Flag_of_Brazil.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/60px-Flag_of_Brazil.svg.png 2x',
    },
    {
      name: 'British Indian Ocean Territory',
      dial_code: '+246',
      code: 'IO',
      sigla: 'IOT',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg/40px-Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg/60px-Flag_of_the_Commissioner_of_the_British_Indian_Ocean_Territory.svg.png 2x',
    },
    {
      name: 'Brunei Darussalam',
      dial_code: '+673',
      code: 'BN',
      sigla: 'BRN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/40px-Flag_of_Brunei.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Brunei.svg/60px-Flag_of_Brunei.svg.png 2x',
    },
    {
      name: 'Bulgaria',
      dial_code: '+359',
      code: 'BG',
      sigla: 'BGR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/40px-Flag_of_Bulgaria.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/60px-Flag_of_Bulgaria.svg.png 2x',
    },
    {
      name: 'Burkina Faso',
      dial_code: '+226',
      code: 'BF',
      sigla: 'BFA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/40px-Flag_of_Burkina_Faso.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Burkina_Faso.svg/60px-Flag_of_Burkina_Faso.svg.png 2x',
    },
    {
      name: 'Burundi',
      dial_code: '+257',
      code: 'BI',
      sigla: 'BDI',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/40px-Flag_of_Burundi.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag_of_Burundi.svg/60px-Flag_of_Burundi.svg.png 2x',
    },
    {
      name: 'Cambodia',
      dial_code: '+855',
      code: 'KH',
      sigla: 'KHM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/40px-Flag_of_Cambodia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/60px-Flag_of_Cambodia.svg.png 2x',
    },
    {
      name: 'Cameroon',
      dial_code: '+237',
      code: 'CM',
      sigla: 'CMR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/40px-Flag_of_Cameroon.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/60px-Flag_of_Cameroon.svg.png 2x',
    },
    {
      name: 'Canada',
      dial_code: '+1',
      code: 'CA',
      sigla: 'CAN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/40px-Flag_of_Canada_%28Pantone%29.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/60px-Flag_of_Canada_%28Pantone%29.svg.png 2x',
    },
    {
      name: 'Cape Verde',
      dial_code: '+238',
      code: 'CV',
      sigla: 'CPV',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/40px-Flag_of_Cape_Verde.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Cape_Verde.svg/60px-Flag_of_Cape_Verde.svg.png 2x',
    },
    {
      name: 'Cayman Islands',
      dial_code: '+ 345',
      code: 'KY',
      sigla: 'CYM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_the_Cayman_Islands.svg/40px-Flag_of_the_Cayman_Islands.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_the_Cayman_Islands.svg/60px-Flag_of_the_Cayman_Islands.svg.png 2x',
    },
    {
      name: 'Central African Republic',
      dial_code: '+236',
      code: 'CF',
      sigla: 'CAF',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/40px-Flag_of_the_Central_African_Republic.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Central_African_Republic.svg/60px-Flag_of_the_Central_African_Republic.svg.png 2x',
    },
    {
      name: 'Chad',
      dial_code: '+235',
      code: 'TD',
      sigla: 'TCD',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/40px-Flag_of_Chad.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Flag_of_Chad.svg/60px-Flag_of_Chad.svg.png 2x',
    },
    {
      name: 'Chile',
      dial_code: '+56',
      code: 'CL',
      sigla: 'CHL',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/40px-Flag_of_Chile.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/60px-Flag_of_Chile.svg.png 2x',
    },
    {
      name: 'China',
      dial_code: '+86',
      code: 'CN',
      sigla: 'CHN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/40px-Flag_of_the_People%27s_Republic_of_China.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/60px-Flag_of_the_People%27s_Republic_of_China.svg.png 2x',
    },
    {
      name: 'Christmas Island',
      dial_code: '+61',
      code: 'CX',
      sigla: 'CXR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/67/Flag_of_Christmas_Island.svg/40px-Flag_of_Christmas_Island.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/67/Flag_of_Christmas_Island.svg/60px-Flag_of_Christmas_Island.svg.png 2x',
    },
    {
      name: 'Cocos (Keeling) Islands',
      dial_code: '+61',
      code: 'CC',
      sigla: 'CCK',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_the_Cocos_%28Keeling%29_Island.png/40px-Flag_of_the_Cocos_%28Keeling%29_Island.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_the_Cocos_%28Keeling%29_Island.png/60px-Flag_of_the_Cocos_%28Keeling%29_Island.png 2x',
    },
    {
      name: 'Colombia',
      dial_code: '+57',
      code: 'CO',
      sigla: 'COL',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/40px-Flag_of_Colombia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/60px-Flag_of_Colombia.svg.png 2x',
    },
    {
      name: 'Comoros',
      dial_code: '+269',
      code: 'KM',
      sigla: 'COM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/40px-Flag_of_the_Comoros.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/94/Flag_of_the_Comoros.svg/60px-Flag_of_the_Comoros.svg.png 2x',
    },
    {
      name: 'Congo',
      dial_code: '+242',
      code: 'CG',
      sigla: 'COG',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/40px-Flag_of_the_Republic_of_the_Congo.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_the_Republic_of_the_Congo.svg/60px-Flag_of_the_Republic_of_the_Congo.svg.png 2x',
    },
    {
      name: 'Congo, The Democratic Republic of the Congo',
      dial_code: '+243',
      code: 'CD',
      sigla: 'COD',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/20px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/40px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png 1.5x',
    },
    {
      name: 'Cook Islands',
      dial_code: '+682',
      code: 'CK',
      sigla: 'COK',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_the_Cook_Islands.svg/40px-Flag_of_the_Cook_Islands.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_the_Cook_Islands.svg/60px-Flag_of_the_Cook_Islands.svg.png 2x',
    },
    {
      name: 'Costa Rica',
      dial_code: '+506',
      code: 'CR',
      sigla: 'CRI',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/40px-Flag_of_Costa_Rica.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Costa_Rica.svg/60px-Flag_of_Costa_Rica.svg.png 2x',
    },
    {
      name: "Cote d'Ivoire",
      dial_code: '+225',
      code: 'CI',
      sigla: 'CIV',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/40px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_C%C3%B4te_d%27Ivoire.svg/60px-Flag_of_C%C3%B4te_d%27Ivoire.svg.png 2x',
    },
    {
      name: 'Croatia',
      dial_code: '+385',
      code: 'HR',
      sigla: 'HRV',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/40px-Flag_of_Croatia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/60px-Flag_of_Croatia.svg.png 2x',
    },
    {
      name: 'Cuba',
      dial_code: '+53',
      code: 'CU',
      sigla: 'CUB',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/40px-Flag_of_Cuba.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Flag_of_Cuba.svg/60px-Flag_of_Cuba.svg.png 2x',
    },
    {
      name: 'Cyprus',
      dial_code: '+357',
      code: 'CY',
      sigla: 'CYP',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/40px-Flag_of_Cyprus.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/60px-Flag_of_Cyprus.svg.png 2x',
    },
    {
      name: 'Czech Republic',
      dial_code: '+420',
      code: 'CZ',
      sigla: 'CZE',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/40px-Flag_of_the_Czech_Republic.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/60px-Flag_of_the_Czech_Republic.svg.png 2x',
    },
    {
      name: 'Denmark',
      dial_code: '+45',
      code: 'DK',
      sigla: 'DNK',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/20px-Flag_of_Denmark.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/40px-Flag_of_Denmark.svg.png 1.5x',
    },
    {
      name: 'Djibouti',
      dial_code: '+253',
      code: 'DJ',
      sigla: 'DJI',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/40px-Flag_of_Djibouti.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_Djibouti.svg/60px-Flag_of_Djibouti.svg.png 2x',
    },
    {
      name: 'Dominica',
      dial_code: '+1767',
      code: 'DM',
      sigla: 'DMA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/40px-Flag_of_Dominica.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Flag_of_Dominica.svg/60px-Flag_of_Dominica.svg.png 2x',
    },
    {
      name: 'Dominican Republic',
      dial_code: '+1849',
      code: 'DO',
      sigla: 'DOM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/40px-Flag_of_the_Dominican_Republic.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_the_Dominican_Republic.svg/60px-Flag_of_the_Dominican_Republic.svg.png 2x',
    },
    {
      name: 'Ecuador',
      dial_code: '+593',
      code: 'EC',
      sigla: 'ECU',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/40px-Flag_of_Ecuador.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/60px-Flag_of_Ecuador.svg.png 2x',
    },
    {
      name: 'Egypt',
      dial_code: '+20',
      code: 'EG',
      sigla: 'EGY',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/40px-Flag_of_Egypt.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/60px-Flag_of_Egypt.svg.png 2x',
    },
    {
      name: 'El Salvador',
      dial_code: '+503',
      code: 'SV',
      sigla: 'SLV',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/40px-Flag_of_El_Salvador.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/34/Flag_of_El_Salvador.svg/60px-Flag_of_El_Salvador.svg.png 2x',
    },
    {
      name: 'Equatorial Guinea',
      dial_code: '+240',
      code: 'GQ',
      sigla: 'GNQ',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/40px-Flag_of_Equatorial_Guinea.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Equatorial_Guinea.svg/60px-Flag_of_Equatorial_Guinea.svg.png 2x',
    },
    {
      name: 'Eritrea',
      dial_code: '+291',
      code: 'ER',
      sigla: 'ERI',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/40px-Flag_of_Eritrea.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/29/Flag_of_Eritrea.svg/60px-Flag_of_Eritrea.svg.png 2x',
    },
    {
      name: 'Estonia',
      dial_code: '+372',
      code: 'EE',
      sigla: 'EST',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/40px-Flag_of_Estonia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/60px-Flag_of_Estonia.svg.png 2x',
    },
    {
      name: 'Ethiopia',
      dial_code: '+251',
      code: 'ET',
      sigla: 'ETH',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/40px-Flag_of_Ethiopia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/60px-Flag_of_Ethiopia.svg.png 2x',
    },
    {
      name: 'Falkland Islands (Malvinas)',
      dial_code: '+500',
      code: 'FK',
      sigla: 'FLK',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_Falkland_Islands.svg/40px-Flag_of_the_Falkland_Islands.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_Falkland_Islands.svg/60px-Flag_of_the_Falkland_Islands.svg.png 2x',
    },
    {
      name: 'Faroe Islands',
      dial_code: '+298',
      code: 'FO',
      sigla: 'FRO',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_the_Faroe_Islands.svg/40px-Flag_of_the_Faroe_Islands.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flag_of_the_Faroe_Islands.svg/60px-Flag_of_the_Faroe_Islands.svg.png 2x',
    },
    {
      name: 'Fiji',
      dial_code: '+679',
      code: 'FJ',
      sigla: 'FJI',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/40px-Flag_of_Fiji.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Fiji.svg/60px-Flag_of_Fiji.svg.png 2x',
    },
    {
      name: 'Finland',
      dial_code: '+358',
      code: 'FI',
      sigla: 'FIN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/40px-Flag_of_Finland.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/60px-Flag_of_Finland.svg.png 2x',
    },
    {
      name: 'France',
      dial_code: '+33',
      code: 'FR',
      sigla: 'FRA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/40px-Flag_of_France.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/60px-Flag_of_France.svg.png 2x',
    },
    {
      name: 'French Guiana',
      dial_code: '+594',
      code: 'GF',
      sigla: 'GUF',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/40px-Flag_of_France.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/60px-Flag_of_France.svg.png 2x',
    },
    {
      name: 'French Polynesia',
      dial_code: '+689',
      code: 'PF',
      sigla: 'PYF',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/db/Flag_of_French_Polynesia.svg/40px-Flag_of_French_Polynesia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/db/Flag_of_French_Polynesia.svg/60px-Flag_of_French_Polynesia.svg.png 2x',
    },
    {
      name: 'Gabon',
      dial_code: '+241',
      code: 'GA',
      sigla: 'GAB',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/20px-Flag_of_Gabon.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Gabon.svg/40px-Flag_of_Gabon.svg.png 1.5x',
    },
    {
      name: 'Gambia',
      dial_code: '+220',
      code: 'GM',
      sigla: 'GMB',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/40px-Flag_of_The_Gambia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_The_Gambia.svg/60px-Flag_of_The_Gambia.svg.png 2x',
    },
    {
      name: 'Georgia',
      dial_code: '+995',
      code: 'GE',
      sigla: 'GEO',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/40px-Flag_of_Georgia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/60px-Flag_of_Georgia.svg.png 2x',
    },
    {
      name: 'Germany',
      dial_code: '+49',
      code: 'DE',
      sigla: 'DEU',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/40px-Flag_of_Germany.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/60px-Flag_of_Germany.svg.png 2x',
    },
    {
      name: 'Ghana',
      dial_code: '+233',
      code: 'GH',
      sigla: 'GHA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/40px-Flag_of_Ghana.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/60px-Flag_of_Ghana.svg.png 2x',
    },
    {
      name: 'Gibraltar',
      dial_code: '+350',
      code: 'GI',
      sigla: 'GIB',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/02/Flag_of_Gibraltar.svg/40px-Flag_of_Gibraltar.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/02/Flag_of_Gibraltar.svg/60px-Flag_of_Gibraltar.svg.png 2x',
    },
    {
      name: 'Greece',
      dial_code: '+30',
      code: 'GR',
      sigla: 'GRC',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/40px-Flag_of_Greece.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/60px-Flag_of_Greece.svg.png 2x',
    },
    {
      name: 'Greenland',
      dial_code: '+299',
      code: 'GL',
      sigla: 'GRL',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Greenland.svg/40px-Flag_of_Greenland.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Greenland.svg/60px-Flag_of_Greenland.svg.png 2x',
    },
    {
      name: 'Grenada',
      dial_code: '+1473',
      code: 'GD',
      sigla: 'GRD',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/40px-Flag_of_Grenada.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Grenada.svg/60px-Flag_of_Grenada.svg.png 2x',
    },
    {
      name: 'Guadeloupe',
      dial_code: '+590',
      code: 'GP',
      sigla: 'GLP',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/40px-Flag_of_France.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/60px-Flag_of_France.svg.png 2x',
    },
    {
      name: 'Guam',
      dial_code: '+1671',
      code: 'GU',
      sigla: 'GUM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Guam.svg/40px-Flag_of_Guam.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/07/Flag_of_Guam.svg/60px-Flag_of_Guam.svg.png 2x',
    },
    {
      name: 'Guatemala',
      dial_code: '+502',
      code: 'GT',
      sigla: 'GTM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/40px-Flag_of_Guatemala.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Flag_of_Guatemala.svg/60px-Flag_of_Guatemala.svg.png 2x',
    },
    {
      name: 'Guernsey',
      dial_code: '+44',
      code: 'GG',
      sigla: 'GGY',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Guernsey.svg/40px-Flag_of_Guernsey.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_Guernsey.svg/60px-Flag_of_Guernsey.svg.png 2x',
    },
    {
      name: 'Guinea',
      dial_code: '+224',
      code: 'GN',
      sigla: 'GIN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/40px-Flag_of_Guinea.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/60px-Flag_of_Guinea.svg.png 2x',
    },
    {
      name: 'Guinea-Bissau',
      dial_code: '+245',
      code: 'GW',
      sigla: 'GNB',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/40px-Flag_of_Guinea-Bissau.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Guinea-Bissau.svg/60px-Flag_of_Guinea-Bissau.svg.png 2x',
    },
    {
      name: 'Guyana',
      dial_code: '+595',
      code: 'GY',
      sigla: 'GUY',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/40px-Flag_of_Guyana.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_Guyana.svg/60px-Flag_of_Guyana.svg.png 2x',
    },
    {
      name: 'Haiti',
      dial_code: '+509',
      code: 'HT',
      sigla: 'HTI',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/40px-Flag_of_Haiti.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Haiti.svg/60px-Flag_of_Haiti.svg.png 2x',
    },
    {
      name: 'Holy See (Vatican City State)',
      dial_code: '+379',
      code: 'VA',
      sigla: 'VAT',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flag_of_Vatican_City_%282023%E2%80%93present%29.svg/20px-Flag_of_Vatican_City_%282023%E2%80%93present%29.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Flag_of_Vatican_City_%282023%E2%80%93present%29.svg/40px-Flag_of_Vatican_City_%282023%E2%80%93present%29.svg.png 1.5x',
    },
    {
      name: 'Honduras',
      dial_code: '+504',
      code: 'HN',
      sigla: 'HND',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Honduras_%282022%E2%80%93present%29.svg/40px-Flag_of_Honduras_%282022%E2%80%93present%29.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Honduras_%282022%E2%80%93present%29.svg/60px-Flag_of_Honduras_%282022%E2%80%93present%29.svg.png 2x',
    },
    {
      name: 'Hong Kong',
      dial_code: '+852',
      code: 'HK',
      sigla: 'HKG',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/40px-Flag_of_Hong_Kong.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/60px-Flag_of_Hong_Kong.svg.png 2x',
    },
    {
      name: 'Hungary',
      dial_code: '+36',
      code: 'HU',
      sigla: 'HUN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/40px-Flag_of_Hungary.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/60px-Flag_of_Hungary.svg.png 2x',
    },
    {
      name: 'Iceland',
      dial_code: '+354',
      code: 'IS',
      sigla: 'ISL',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/40px-Flag_of_Iceland.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/60px-Flag_of_Iceland.svg.png 2x',
    },
    {
      name: 'India',
      dial_code: '+91',
      code: 'IN',
      sigla: 'IND',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/40px-Flag_of_India.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/60px-Flag_of_India.svg.png 2x',
    },
    {
      name: 'Indonesia',
      dial_code: '+62',
      code: 'ID',
      sigla: 'IDN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/40px-Flag_of_Indonesia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/60px-Flag_of_Indonesia.svg.png 2x',
    },
    {
      name: 'Iran, Islamic Republic of Persian Gulf',
      dial_code: '+98',
      code: 'IR',
      sigla: 'IRN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/40px-Flag_of_Iran.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/60px-Flag_of_Iran.svg.png 2x',
    },
    {
      name: 'Iraq',
      dial_code: '+964',
      code: 'IQ',
      sigla: 'IRQ',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/40px-Flag_of_Iraq.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/60px-Flag_of_Iraq.svg.png 2x',
    },
    {
      name: 'Ireland',
      dial_code: '+353',
      code: 'IE',
      sigla: 'IRL',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/40px-Flag_of_Ireland.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/60px-Flag_of_Ireland.svg.png 2x',
    },
    {
      name: 'Isle of Man',
      dial_code: '+44',
      code: 'IM',
      sigla: 'IMN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_the_Isle_of_Man.svg/40px-Flag_of_the_Isle_of_Man.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_the_Isle_of_Man.svg/60px-Flag_of_the_Isle_of_Man.svg.png 2x',
    },
    {
      name: 'Israel',
      dial_code: '+972',
      code: 'IL',
      sigla: 'ISR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/40px-Flag_of_Israel.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/60px-Flag_of_Israel.svg.png 2x',
    },
    {
      name: 'Italy',
      dial_code: '+39',
      code: 'IT',
      sigla: 'ITA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/40px-Flag_of_Italy.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/60px-Flag_of_Italy.svg.png 2x',
    },
    {
      name: 'Jamaica',
      dial_code: '+1876',
      code: 'JM',
      sigla: 'JAM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/40px-Flag_of_Jamaica.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/60px-Flag_of_Jamaica.svg.png 2x',
    },
    {
      name: 'Japan',
      dial_code: '+81',
      code: 'JP',
      sigla: 'JPN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/40px-Flag_of_Japan.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/60px-Flag_of_Japan.svg.png 2x',
    },
    {
      name: 'Jersey',
      dial_code: '+44',
      code: 'JE',
      sigla: 'JEY',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Jersey.svg/40px-Flag_of_Jersey.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Flag_of_Jersey.svg/60px-Flag_of_Jersey.svg.png 2x',
    },
    {
      name: 'Jordan',
      dial_code: '+962',
      code: 'JO',
      sigla: 'JOR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/40px-Flag_of_Jordan.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/60px-Flag_of_Jordan.svg.png 2x',
    },
    {
      name: 'Kazakhstan',
      dial_code: '+77',
      code: 'KZ',
      sigla: 'KAZ',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/40px-Flag_of_Kazakhstan.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/60px-Flag_of_Kazakhstan.svg.png 2x',
    },
    {
      name: 'Kenya',
      dial_code: '+254',
      code: 'KE',
      sigla: 'KEN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/40px-Flag_of_Kenya.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/60px-Flag_of_Kenya.svg.png 2x',
    },
    {
      name: 'Kiribati',
      dial_code: '+686',
      code: 'KI',
      sigla: 'KIR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kiribati.svg/40px-Flag_of_Kiribati.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kiribati.svg/60px-Flag_of_Kiribati.svg.png 2x',
    },
    {
      name: 'Korea, Democratic People9s Republic of Korea',
      dial_code: '+850',
      code: 'KP',
      sigla: 'PRK',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/40px-Flag_of_North_Korea.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/60px-Flag_of_North_Korea.svg.png 2x',
    },
    {
      name: 'Korea, Republic of South Korea',
      dial_code: '+82',
      code: 'KR',
      sigla: 'KOR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/40px-Flag_of_South_Korea.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/60px-Flag_of_South_Korea.svg.png 2x',
    },
    {
      name: 'Kuwait',
      dial_code: '+965',
      code: 'KW',
      sigla: 'KWT',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/40px-Flag_of_Kuwait.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/60px-Flag_of_Kuwait.svg.png 2x',
    },
    {
      name: 'Kyrgyzstan',
      dial_code: '+996',
      code: 'KG',
      sigla: 'KGZ',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/40px-Flag_of_Kyrgyzstan.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Flag_of_Kyrgyzstan.svg/60px-Flag_of_Kyrgyzstan.svg.png 2x',
    },
    {
      name: 'Laos',
      dial_code: '+856',
      code: 'LA',
      sigla: 'LAO',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/40px-Flag_of_Laos.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/56/Flag_of_Laos.svg/60px-Flag_of_Laos.svg.png 2x',
    },
    {
      name: 'Latvia',
      dial_code: '+371',
      code: 'LV',
      sigla: 'LVA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/40px-Flag_of_Latvia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/60px-Flag_of_Latvia.svg.png 2x',
    },
    {
      name: 'Lebanon',
      dial_code: '+961',
      code: 'LB',
      sigla: 'LBN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/40px-Flag_of_Lebanon.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/60px-Flag_of_Lebanon.svg.png 2x',
    },
    {
      name: 'Lesotho',
      dial_code: '+266',
      code: 'LS',
      sigla: 'LSO',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/40px-Flag_of_Lesotho.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Flag_of_Lesotho.svg/60px-Flag_of_Lesotho.svg.png 2x',
    },
    {
      name: 'Liberia',
      dial_code: '+231',
      code: 'LR',
      sigla: 'LBR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/40px-Flag_of_Liberia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Flag_of_Liberia.svg/60px-Flag_of_Liberia.svg.png 2x',
    },
    {
      name: 'Libyan Arab Jamahiriya',
      dial_code: '+218',
      code: 'LY',
      sigla: 'LBY',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/40px-Flag_of_Libya.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Libya.svg/60px-Flag_of_Libya.svg.png 2x',
    },
    {
      name: 'Liechtenstein',
      dial_code: '+423',
      code: 'LI',
      sigla: 'LIE',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/40px-Flag_of_Liechtenstein.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/60px-Flag_of_Liechtenstein.svg.png 2x',
    },
    {
      name: 'Lithuania',
      dial_code: '+370',
      code: 'LT',
      sigla: 'LTU',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/40px-Flag_of_Lithuania.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/60px-Flag_of_Lithuania.svg.png 2x',
    },
    {
      name: 'Luxembourg',
      dial_code: '+352',
      code: 'LU',
      sigla: 'LUX',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/40px-Flag_of_Luxembourg.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/60px-Flag_of_Luxembourg.svg.png 2x',
    },
    {
      name: 'Macao',
      dial_code: '+853',
      code: 'MO',
      sigla: 'MAC',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Macau.svg/40px-Flag_of_Macau.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/63/Flag_of_Macau.svg/60px-Flag_of_Macau.svg.png 2x',
    },
    {
      name: 'Macedonia',
      dial_code: '+389',
      code: 'MK',
      sigla: 'MKD',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/40px-Flag_of_North_Macedonia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/60px-Flag_of_North_Macedonia.svg.png 2x',
    },
    {
      name: 'Madagascar',
      dial_code: '+261',
      code: 'MG',
      sigla: 'MDG',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/40px-Flag_of_Madagascar.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/60px-Flag_of_Madagascar.svg.png 2x',
    },
    {
      name: 'Malawi',
      dial_code: '+265',
      code: 'MW',
      sigla: 'MWI',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/40px-Flag_of_Malawi.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Flag_of_Malawi.svg/60px-Flag_of_Malawi.svg.png 2x',
    },
    {
      name: 'Malaysia',
      dial_code: '+60',
      code: 'MY',
      sigla: 'MYS',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/40px-Flag_of_Malaysia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/60px-Flag_of_Malaysia.svg.png 2x',
    },
    {
      name: 'Maldives',
      dial_code: '+960',
      code: 'MV',
      sigla: 'MDV',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/40px-Flag_of_Maldives.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Maldives.svg/60px-Flag_of_Maldives.svg.png 2x',
    },
    {
      name: 'Mali',
      dial_code: '+223',
      code: 'ML',
      sigla: 'MLI',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/40px-Flag_of_Mali.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_Mali.svg/60px-Flag_of_Mali.svg.png 2x',
    },
    {
      name: 'Malta',
      dial_code: '+356',
      code: 'MT',
      sigla: 'MLT',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/40px-Flag_of_Malta.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/60px-Flag_of_Malta.svg.png 2x',
    },
    {
      name: 'Marshall Islands',
      dial_code: '+692',
      code: 'MH',
      sigla: 'MHL',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/40px-Flag_of_the_Marshall_Islands.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flag_of_the_Marshall_Islands.svg/60px-Flag_of_the_Marshall_Islands.svg.png 2x',
    },
    {
      name: 'Martinique',
      dial_code: '+596',
      code: 'MQ',
      sigla: 'MTQ',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag-of-Martinique.svg/40px-Flag-of-Martinique.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag-of-Martinique.svg/60px-Flag-of-Martinique.svg.png 2x',
    },
    {
      name: 'Mauritania',
      dial_code: '+222',
      code: 'MR',
      sigla: 'MRT',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/40px-Flag_of_Mauritania.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Mauritania.svg/60px-Flag_of_Mauritania.svg.png 2x',
    },
    {
      name: 'Mauritius',
      dial_code: '+230',
      code: 'MU',
      sigla: 'MUS',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/40px-Flag_of_Mauritius.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Mauritius.svg/60px-Flag_of_Mauritius.svg.png 2x',
    },
    {
      name: 'Mayotte',
      dial_code: '+262',
      code: 'YT',
      sigla: 'MYT',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/40px-Flag_of_France.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/60px-Flag_of_France.svg.png 2x',
    },
    {
      name: 'Mexico',
      dial_code: '+52',
      code: 'MX',
      sigla: 'MEX',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/40px-Flag_of_Mexico.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/60px-Flag_of_Mexico.svg.png 2x',
    },
    {
      name: 'Micronesia, Federated States of Micronesia',
      dial_code: '+691',
      code: 'FM',
      sigla: 'FSM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/40px-Flag_of_the_Federated_States_of_Micronesia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg/60px-Flag_of_the_Federated_States_of_Micronesia.svg.png 2x',
    },
    {
      name: 'Moldova',
      dial_code: '+373',
      code: 'MD',
      sigla: 'MDA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/40px-Flag_of_Moldova.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/60px-Flag_of_Moldova.svg.png 2x',
    },
    {
      name: 'Monaco',
      dial_code: '+377',
      code: 'MC',
      sigla: 'MCO',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/20px-Flag_of_Monaco.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/40px-Flag_of_Monaco.svg.png 1.5x',
    },
    {
      name: 'Mongolia',
      dial_code: '+976',
      code: 'MN',
      sigla: 'MNG',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/40px-Flag_of_Mongolia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Mongolia.svg/60px-Flag_of_Mongolia.svg.png 2x',
    },
    {
      name: 'Montenegro',
      dial_code: '+382',
      code: 'ME',
      sigla: 'MNE',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/40px-Flag_of_Montenegro.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/60px-Flag_of_Montenegro.svg.png 2x',
    },
    {
      name: 'Montserrat',
      dial_code: '+1664',
      code: 'MS',
      sigla: 'MSR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Montserrat.svg/40px-Flag_of_Montserrat.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Montserrat.svg/60px-Flag_of_Montserrat.svg.png 2x',
    },
    {
      name: 'Morocco',
      dial_code: '+212',
      code: 'MA',
      sigla: 'MAR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/40px-Flag_of_Morocco.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/60px-Flag_of_Morocco.svg.png 2x',
    },
    {
      name: 'Mozambique',
      dial_code: '+258',
      code: 'MZ',
      sigla: 'MOZ',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/40px-Flag_of_Mozambique.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Mozambique.svg/60px-Flag_of_Mozambique.svg.png 2x',
    },
    {
      name: 'Myanmar',
      dial_code: '+95',
      code: 'MM',
      sigla: 'MMR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/40px-Flag_of_Myanmar.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/60px-Flag_of_Myanmar.svg.png 2x',
    },
    {
      name: 'Namibia',
      dial_code: '+264',
      code: 'NA',
      sigla: 'NAM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/40px-Flag_of_Namibia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Namibia.svg/60px-Flag_of_Namibia.svg.png 2x',
    },
    {
      name: 'Nauru',
      dial_code: '+674',
      code: 'NR',
      sigla: 'NRU',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Nauru.svg/40px-Flag_of_Nauru.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/30/Flag_of_Nauru.svg/60px-Flag_of_Nauru.svg.png 2x',
    },
    {
      name: 'Nepal',
      dial_code: '+977',
      code: 'NP',
      sigla: 'NPL',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/20px-Flag_of_Nepal.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/40px-Flag_of_Nepal.svg.png 1.5x',
    },
    {
      name: 'Netherlands',
      dial_code: '+31',
      code: 'NL',
      sigla: 'NLD',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/40px-Flag_of_the_Netherlands.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/60px-Flag_of_the_Netherlands.svg.png 2x',
    },
    {
      name: 'Netherlands Antilles',
      dial_code: '+599',
      code: 'AN',
      sigla: 'ANT',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_Netherlands_Antilles_%281986%E2%80%932010%29.svg/2560px-Flag_of_the_Netherlands_Antilles_%281986%E2%80%932010%29.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_Netherlands_Antilles_%281986%E2%80%932010%29.svg/2560px-Flag_of_the_Netherlands_Antilles_%281986%E2%80%932010%29.svg.png x2',
    },
    {
      name: 'New Caledonia',
      dial_code: '+687',
      code: 'NC',
      sigla: 'NCL',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flags_of_New_Caledonia.svg/60px-Flags_of_New_Caledonia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flags_of_New_Caledonia.svg/120px-Flags_of_New_Caledonia.svg.png 1.5x',
    },
    {
      name: 'New Zealand',
      dial_code: '+64',
      code: 'NZ',
      sigla: 'NZL',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/40px-Flag_of_New_Zealand.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/60px-Flag_of_New_Zealand.svg.png 2x',
    },
    {
      name: 'Nicaragua',
      dial_code: '+505',
      code: 'NI',
      sigla: 'NIC',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/40px-Flag_of_Nicaragua.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Nicaragua.svg/60px-Flag_of_Nicaragua.svg.png 2x',
    },
    {
      name: 'Niger',
      dial_code: '+227',
      code: 'NE',
      sigla: 'NER',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/20px-Flag_of_Niger.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Niger.svg/40px-Flag_of_Niger.svg.png 1.5x',
    },
    {
      name: 'Nigeria',
      dial_code: '+234',
      code: 'NG',
      sigla: 'NGA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/40px-Flag_of_Nigeria.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/60px-Flag_of_Nigeria.svg.png 2x',
    },
    {
      name: 'Niue',
      dial_code: '+683',
      code: 'NU',
      sigla: 'NIU',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Niue.svg/40px-Flag_of_Niue.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Niue.svg/60px-Flag_of_Niue.svg.png 2x',
    },
    {
      name: 'Norfolk Island',
      dial_code: '+672',
      code: 'NF',
      sigla: 'NFK',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Norfolk_Island.svg/40px-Flag_of_Norfolk_Island.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Norfolk_Island.svg/60px-Flag_of_Norfolk_Island.svg.png 2x',
    },
    {
      name: 'Northern Mariana Islands',
      dial_code: '+1670',
      code: 'MP',
      sigla: 'MNP',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_the_Northern_Mariana_Islands.svg/40px-Flag_of_the_Northern_Mariana_Islands.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_the_Northern_Mariana_Islands.svg/60px-Flag_of_the_Northern_Mariana_Islands.svg.png 2x',
    },
    {
      name: 'Norway',
      dial_code: '+47',
      code: 'NO',
      sigla: 'NOR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/40px-Flag_of_Norway.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/60px-Flag_of_Norway.svg.png 2x',
    },
    {
      name: 'Oman',
      dial_code: '+968',
      code: 'OM',
      sigla: 'OMN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/40px-Flag_of_Oman.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Oman.svg/60px-Flag_of_Oman.svg.png 2x',
    },
    {
      name: 'Pakistan',
      dial_code: '+92',
      code: 'PK',
      sigla: 'PAK',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/40px-Flag_of_Pakistan.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/60px-Flag_of_Pakistan.svg.png 2x',
    },
    {
      name: 'Palau',
      dial_code: '+680',
      code: 'PW',
      sigla: 'PLW',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/40px-Flag_of_Palau.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/60px-Flag_of_Palau.svg.png 2x',
    },
    {
      name: 'Palestinian Territory, Occupied',
      dial_code: '+970',
      code: 'PS',
      sigla: 'PSE',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/40px-Flag_of_Palestine.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/60px-Flag_of_Palestine.svg.png 2x',
    },
    {
      name: 'Panama',
      dial_code: '+507',
      code: 'PA',
      sigla: 'PAN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/40px-Flag_of_Panama.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/60px-Flag_of_Panama.svg.png 2x',
    },
    {
      name: 'Papua New Guinea',
      dial_code: '+675',
      code: 'PG',
      sigla: 'PNG',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/20px-Flag_of_Papua_New_Guinea.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Papua_New_Guinea.svg/40px-Flag_of_Papua_New_Guinea.svg.png 1.5x',
    },
    {
      name: 'Paraguay',
      dial_code: '+595',
      code: 'PY',
      sigla: 'PRY',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/40px-Flag_of_Paraguay.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Paraguay.svg/60px-Flag_of_Paraguay.svg.png 2x',
    },
    {
      name: 'Peru',
      dial_code: '+51',
      code: 'PE',
      sigla: 'PER',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/40px-Flag_of_Peru.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/60px-Flag_of_Peru.svg.png 2x',
    },
    {
      name: 'Philippines',
      dial_code: '+63',
      code: 'PH',
      sigla: 'PHL',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/40px-Flag_of_the_Philippines.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/60px-Flag_of_the_Philippines.svg.png 2x',
    },
    {
      name: 'Pitcairn',
      dial_code: '+872',
      code: 'PN',
      sigla: 'PCN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_the_Pitcairn_Islands.svg/40px-Flag_of_the_Pitcairn_Islands.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_the_Pitcairn_Islands.svg/60px-Flag_of_the_Pitcairn_Islands.svg.png 2x',
    },
    {
      name: 'Poland',
      dial_code: '+48',
      code: 'PL',
      sigla: 'POL',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/40px-Flag_of_Poland.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/60px-Flag_of_Poland.svg.png 2x',
    },
    {
      name: 'Portugal',
      dial_code: '+351',
      code: 'PT',
      sigla: 'PRT',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flag_of_Portugal_%28official%29.svg/40px-Flag_of_Portugal_%28official%29.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flag_of_Portugal_%28official%29.svg/60px-Flag_of_Portugal_%28official%29.svg.png 2x',
    },
    {
      name: 'Puerto Rico',
      dial_code: '+1939',
      code: 'PR',
      sigla: 'PRI',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/40px-Flag_of_Puerto_Rico.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_Puerto_Rico.svg/60px-Flag_of_Puerto_Rico.svg.png 2x',
    },
    {
      name: 'Qatar',
      dial_code: '+974',
      code: 'QA',
      sigla: 'QAT',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/40px-Flag_of_Qatar.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/60px-Flag_of_Qatar.svg.png 2x',
    },
    {
      name: 'Romania',
      dial_code: '+40',
      code: 'RO',
      sigla: 'ROU',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/40px-Flag_of_Romania.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/60px-Flag_of_Romania.svg.png 2x',
    },
    {
      name: 'Russia',
      dial_code: '+7',
      code: 'RU',
      sigla: 'RUS',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/40px-Flag_of_Russia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/60px-Flag_of_Russia.svg.png 2x',
    },
    {
      name: 'Rwanda',
      dial_code: '+250',
      code: 'RW',
      sigla: 'RWA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/40px-Flag_of_Rwanda.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Rwanda.svg/60px-Flag_of_Rwanda.svg.png 2x',
    },
    {
      name: 'Reunion',
      dial_code: '+262',
      code: 'RE',
      sigla: 'REU',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/40px-Flag_of_France.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/60px-Flag_of_France.svg.png 2x',
    },
    {
      name: 'Saint Barthelemy',
      dial_code: '+590',
      code: 'BL',
      sigla: 'BLM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/40px-Flag_of_France.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/60px-Flag_of_France.svg.png 2x',
    },
    {
      name: 'Saint Helena, Ascension and Tristan Da Cunha',
      dial_code: '+290',
      code: 'SH',
      sigla: 'SHN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Saint_Helena.svg/40px-Flag_of_Saint_Helena.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Saint_Helena.svg/60px-Flag_of_Saint_Helena.svg.png 2x',
    },
    {
      name: 'Saint Kitts and Nevis',
      dial_code: '+1869',
      code: 'KN',
      sigla: 'KNA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/40px-Flag_of_Saint_Kitts_and_Nevis.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg/60px-Flag_of_Saint_Kitts_and_Nevis.svg.png 2x',
    },
    {
      name: 'Saint Lucia',
      dial_code: '+1758',
      code: 'LC',
      sigla: 'LCA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/40px-Flag_of_Saint_Lucia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Saint_Lucia.svg/60px-Flag_of_Saint_Lucia.svg.png 2x',
    },
    {
      name: 'Saint Martin',
      dial_code: '+590',
      code: 'MF',
      sigla: 'MAF',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/40px-Flag_of_France.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/60px-Flag_of_France.svg.png 2x',
    },
    {
      name: 'Saint Pierre and Miquelon',
      dial_code: '+508',
      code: 'PM',
      sigla: 'SPM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/40px-Flag_of_France.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/60px-Flag_of_France.svg.png 2x',
    },
    {
      name: 'Saint Vincent and the Grenadines',
      dial_code: '+1784',
      code: 'VC',
      sigla: 'VCT',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/40px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg/60px-Flag_of_Saint_Vincent_and_the_Grenadines.svg.png 2x',
    },
    {
      name: 'Samoa',
      dial_code: '+685',
      code: 'WS',
      sigla: 'WSM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Samoa.svg/40px-Flag_of_Samoa.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Samoa.svg/60px-Flag_of_Samoa.svg.png 2x',
    },
    {
      name: 'San Marino',
      dial_code: '+378',
      code: 'SM',
      sigla: 'SMR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/20px-Flag_of_San_Marino.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/40px-Flag_of_San_Marino.svg.png 1.5x',
    },
    {
      name: 'Sao Tome and Principe',
      dial_code: '+239',
      code: 'ST',
      sigla: 'STP',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg/40px-Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg/60px-Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg.png 2x',
    },
    {
      name: 'Saudi Arabia',
      dial_code: '+966',
      code: 'SA',
      sigla: 'SAU',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/40px-Flag_of_Saudi_Arabia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/60px-Flag_of_Saudi_Arabia.svg.png 2x',
    },
    {
      name: 'Senegal',
      dial_code: '+221',
      code: 'SN',
      sigla: 'SEN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/40px-Flag_of_Senegal.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/60px-Flag_of_Senegal.svg.png 2x',
    },
    {
      name: 'Serbia',
      dial_code: '+381',
      code: 'RS',
      sigla: 'SRB',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/40px-Flag_of_Serbia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/60px-Flag_of_Serbia.svg.png 2x',
    },
    {
      name: 'Seychelles',
      dial_code: '+248',
      code: 'SC',
      sigla: 'SYC',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Seychelles.svg/40px-Flag_of_Seychelles.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Seychelles.svg/60px-Flag_of_Seychelles.svg.png 2x',
    },
    {
      name: 'Sierra Leone',
      dial_code: '+232',
      code: 'SL',
      sigla: 'SLE',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/40px-Flag_of_Sierra_Leone.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/17/Flag_of_Sierra_Leone.svg/60px-Flag_of_Sierra_Leone.svg.png 2x',
    },
    {
      name: 'Singapore',
      dial_code: '+65',
      code: 'SG',
      sigla: 'SGP',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/40px-Flag_of_Singapore.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/60px-Flag_of_Singapore.svg.png 2x',
    },
    {
      name: 'Slovakia',
      dial_code: '+421',
      code: 'SK',
      sigla: 'SVK',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/40px-Flag_of_Slovakia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/60px-Flag_of_Slovakia.svg.png 2x',
    },
    {
      name: 'Slovenia',
      dial_code: '+386',
      code: 'SI',
      sigla: 'SVN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/40px-Flag_of_Slovenia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/60px-Flag_of_Slovenia.svg.png 2x',
    },
    {
      name: 'Solomon Islands',
      dial_code: '+677',
      code: 'SB',
      sigla: 'SLB',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/40px-Flag_of_the_Solomon_Islands.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_the_Solomon_Islands.svg/60px-Flag_of_the_Solomon_Islands.svg.png 2x',
    },
    {
      name: 'Somalia',
      dial_code: '+252',
      code: 'SO',
      sigla: 'SOM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/40px-Flag_of_Somalia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/60px-Flag_of_Somalia.svg.png 2x',
    },
    {
      name: 'South Africa',
      dial_code: '+27',
      code: 'ZA',
      sigla: 'ZAF',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/40px-Flag_of_South_Africa.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/60px-Flag_of_South_Africa.svg.png 2x',
    },
    {
      name: 'South Sudan',
      dial_code: '+211',
      code: 'SS',
      sigla: 'SSD',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_South_Sudan.svg/40px-Flag_of_South_Sudan.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_South_Sudan.svg/60px-Flag_of_South_Sudan.svg.png 2x',
    },
    {
      name: 'South Georgia and the South Sandwich Islands',
      dial_code: '+500',
      code: 'GS',
      sigla: 'SGS',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg/40px-Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg/60px-Flag_of_South_Georgia_and_the_South_Sandwich_Islands.svg.png 2x',
    },
    {
      name: 'Spain',
      dial_code: '+34',
      code: 'ES',
      sigla: 'ESP',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/40px-Flag_of_Spain.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/60px-Flag_of_Spain.svg.png 2x',
    },
    {
      name: 'Sri Lanka',
      dial_code: '+94',
      code: 'LK',
      sigla: 'LKA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/40px-Flag_of_Sri_Lanka.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Sri_Lanka.svg/60px-Flag_of_Sri_Lanka.svg.png 2x',
    },
    {
      name: 'Sudan',
      dial_code: '+249',
      code: 'SD',
      sigla: 'SDN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/40px-Flag_of_Sudan.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Sudan.svg/60px-Flag_of_Sudan.svg.png 2x',
    },
    {
      name: 'Suriname',
      dial_code: '+597',
      code: 'SR',
      sigla: 'SUR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/40px-Flag_of_Suriname.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/60/Flag_of_Suriname.svg/60px-Flag_of_Suriname.svg.png 2x',
    },
    {
      name: 'Svalbard and Jan Mayen',
      dial_code: '+47',
      code: 'SJ',
      sigla: 'SJM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/40px-Flag_of_Norway.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/60px-Flag_of_Norway.svg.png 2x',
    },
    {
      name: 'Swaziland',
      dial_code: '+268',
      code: 'SZ',
      sigla: 'SWZ',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/40px-Flag_of_Eswatini.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Flag_of_Eswatini.svg/60px-Flag_of_Eswatini.svg.png 2x',
    },
    {
      name: 'Sweden',
      dial_code: '+46',
      code: 'SE',
      sigla: 'SWE',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/40px-Flag_of_Sweden.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/60px-Flag_of_Sweden.svg.png 2x',
    },
    {
      name: 'Switzerland',
      dial_code: '+41',
      code: 'CH',
      sigla: 'CHE',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/20px-Flag_of_Switzerland_%28Pantone%29.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/40px-Flag_of_Switzerland_%28Pantone%29.svg.png 1.5x',
    },
    {
      name: 'Syrian Arab Republic',
      dial_code: '+963',
      code: 'SY',
      sigla: 'SYR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Syria_%282025-%29.svg/40px-Flag_of_Syria_%282025-%29.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Syria_%282025-%29.svg/60px-Flag_of_Syria_%282025-%29.svg.png 2x',
    },
    {
      name: 'Taiwan',
      dial_code: '+886',
      code: 'TW',
      sigla: 'TWN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/20px-Flag_of_the_Republic_of_China.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/72/Flag_of_the_Republic_of_China.svg/20px-Flag_of_the_Republic_of_China.svg.png x2',
    },
    {
      name: 'Tajikistan',
      dial_code: '+992',
      code: 'TJ',
      sigla: 'TJK',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/40px-Flag_of_Tajikistan.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Flag_of_Tajikistan.svg/60px-Flag_of_Tajikistan.svg.png 2x',
    },
    {
      name: 'Tanzania, United Republic of Tanzania',
      dial_code: '+255',
      code: 'TZ',
      sigla: 'TZA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/40px-Flag_of_Tanzania.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/60px-Flag_of_Tanzania.svg.png 2x',
    },
    {
      name: 'Thailand',
      dial_code: '+66',
      code: 'TH',
      sigla: 'THA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/40px-Flag_of_Thailand.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/60px-Flag_of_Thailand.svg.png 2x',
    },
    {
      name: 'Timor-Leste',
      dial_code: '+670',
      code: 'TL',
      sigla: 'TLS',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/40px-Flag_of_East_Timor.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/26/Flag_of_East_Timor.svg/60px-Flag_of_East_Timor.svg.png 2x',
    },
    {
      name: 'Togo',
      dial_code: '+228',
      code: 'TG',
      sigla: 'TGO',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_Togo_%283-2%29.svg/40px-Flag_of_Togo_%283-2%29.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Flag_of_Togo_%283-2%29.svg/60px-Flag_of_Togo_%283-2%29.svg.png 2x',
    },
    {
      name: 'Tokelau',
      dial_code: '+690',
      code: 'TK',
      sigla: 'TKL',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_Tokelau.svg/40px-Flag_of_Tokelau.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Flag_of_Tokelau.svg/60px-Flag_of_Tokelau.svg.png 2x',
    },
    {
      name: 'Tonga',
      dial_code: '+676',
      code: 'TO',
      sigla: 'TON',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/40px-Flag_of_Tonga.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Tonga.svg/60px-Flag_of_Tonga.svg.png 2x',
    },
    {
      name: 'Trinidad and Tobago',
      dial_code: '+1868',
      code: 'TT',
      sigla: 'TTO',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/40px-Flag_of_Trinidad_and_Tobago.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Trinidad_and_Tobago.svg/60px-Flag_of_Trinidad_and_Tobago.svg.png 2x',
    },
    {
      name: 'Tunisia',
      dial_code: '+216',
      code: 'TN',
      sigla: 'TUN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/40px-Flag_of_Tunisia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/60px-Flag_of_Tunisia.svg.png 2x',
    },
    {
      name: 'Turkey',
      dial_code: '+90',
      code: 'TR',
      sigla: 'TUR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/40px-Flag_of_Turkey.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/60px-Flag_of_Turkey.svg.png 2x',
    },
    {
      name: 'Turkmenistan',
      dial_code: '+993',
      code: 'TM',
      sigla: 'TKM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/40px-Flag_of_Turkmenistan.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Turkmenistan.svg/60px-Flag_of_Turkmenistan.svg.png 2x',
    },
    {
      name: 'Turks and Caicos Islands',
      dial_code: '+1649',
      code: 'TC',
      sigla: 'TCA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg/40px-Flag_of_the_Turks_and_Caicos_Islands.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_the_Turks_and_Caicos_Islands.svg/60px-Flag_of_the_Turks_and_Caicos_Islands.svg.png 2x',
    },
    {
      name: 'Tuvalu',
      dial_code: '+688',
      code: 'TV',
      sigla: 'TUV',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/40px-Flag_of_Tuvalu.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tuvalu.svg/60px-Flag_of_Tuvalu.svg.png 2x',
    },
    {
      name: 'Uganda',
      dial_code: '+256',
      code: 'UG',
      sigla: 'UGA',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/40px-Flag_of_Uganda.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/60px-Flag_of_Uganda.svg.png 2x',
    },
    {
      name: 'Ukraine',
      dial_code: '+380',
      code: 'UA',
      sigla: 'UKR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/40px-Flag_of_Ukraine.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/60px-Flag_of_Ukraine.svg.png 2x',
    },
    {
      name: 'United Arab Emirates',
      dial_code: '+971',
      code: 'AE',
      sigla: 'ARE',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/40px-Flag_of_the_United_Arab_Emirates.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/60px-Flag_of_the_United_Arab_Emirates.svg.png 2x',
    },
    {
      name: 'United Kingdom',
      dial_code: '+44',
      code: 'GB',
      sigla: 'GBR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/40px-Flag_of_the_United_Kingdom.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/60px-Flag_of_the_United_Kingdom.svg.png 2x',
    },
    {
      name: 'Uruguay',
      dial_code: '+598',
      code: 'UY',
      sigla: 'URY',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/40px-Flag_of_Uruguay.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/60px-Flag_of_Uruguay.svg.png 2x',
    },
    {
      name: 'Uzbekistan',
      dial_code: '+998',
      code: 'UZ',
      sigla: 'UZB',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/40px-Flag_of_Uzbekistan.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Uzbekistan.svg/60px-Flag_of_Uzbekistan.svg.png 2x',
    },
    {
      name: 'Vanuatu',
      dial_code: '+678',
      code: 'VU',
      sigla: 'VUT',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/40px-Flag_of_Vanuatu.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Vanuatu.svg/60px-Flag_of_Vanuatu.svg.png 2x',
    },
    {
      name: 'Venezuela, Bolivarian Republic of Venezuela',
      dial_code: '+58',
      code: 'VE',
      sigla: 'VEN',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/40px-Flag_of_Venezuela.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/60px-Flag_of_Venezuela.svg.png 2x',
    },
    {
      name: 'Vietnam',
      dial_code: '+84',
      code: 'VN',
      sigla: 'VNM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/40px-Flag_of_Vietnam.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/60px-Flag_of_Vietnam.svg.png 2x',
    },
    {
      name: 'Virgin Islands, British',
      dial_code: '+1284',
      code: 'VG',
      sigla: 'VGB',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_British_Virgin_Islands.svg/40px-Flag_of_the_British_Virgin_Islands.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_of_the_British_Virgin_Islands.svg/60px-Flag_of_the_British_Virgin_Islands.svg.png 2x',
    },
    {
      name: 'Virgin Islands, U.S.',
      dial_code: '+1340',
      code: 'VI',
      sigla: 'VIR',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_the_United_States_Virgin_Islands.svg/40px-Flag_of_the_United_States_Virgin_Islands.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Flag_of_the_United_States_Virgin_Islands.svg/60px-Flag_of_the_United_States_Virgin_Islands.svg.png 2x',
    },
    {
      name: 'Wallis and Futuna',
      dial_code: '+681',
      code: 'WF',
      sigla: 'WLF',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/40px-Flag_of_France.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/60px-Flag_of_France.svg.png 2x',
    },
    {
      name: 'Yemen',
      dial_code: '+967',
      code: 'YE',
      sigla: 'YEM',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/40px-Flag_of_Yemen.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/60px-Flag_of_Yemen.svg.png 2x',
    },
    {
      name: 'Zambia',
      dial_code: '+260',
      code: 'ZM',
      sigla: 'ZMB',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Zambia.svg/40px-Flag_of_Zambia.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Zambia.svg/60px-Flag_of_Zambia.svg.png 2x',
    },
    {
      name: 'Zimbabwe',
      dial_code: '+263',
      code: 'ZW',
      sigla: 'ZWE',
      flagSrc:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/40px-Flag_of_Zimbabwe.svg.png',
      flagSrcset:
        '//upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Flag_of_Zimbabwe.svg/60px-Flag_of_Zimbabwe.svg.png 2x',
    },
  ],
  TN = (e) => {
    const t = new Map(),
      a = (n) => Number(n.replace(/[^\d]/g, ''));
    for (const n of e) {
      const i = `${n.dial_code}__${n.flagSrc ?? ''}`;
      t.has(i) || t.set(i, n);
    }
    return Array.from(t.values()).sort((n, i) => a(n.dial_code) - a(i.dial_code));
  };
function RN({ object: e }) {
  var u, c, f, d, g;
  const { t } = dr(),
    {
      register: a,
      handleSubmit: n,
      formState: { errors: i, isSubmitting: o },
      reset: r,
      control: l,
    } = EN(),
    s = (_) => {
      const x = _.phoneNumber ? `${_.phonePrefix} ${_.phoneNumber}` : '',
        S = { ..._, telefono: x };
      (delete S.phonePrefix, delete S.phoneNumber, console.log({ object: e, ...S }));
    };
  return w.jsx(kt, {
    component: 'section',
    sx: { pb: { xs: 3, md: 6 }, pt: 6 },
    id: 'contact',
    children: w.jsxs(Y1, {
      maxWidth: 'sm',
      id: 'form',
      sx: { py: 3, borderRadius: 1 },
      children: [
        w.jsx(Xe, {
          variant: 'h5',
          fontWeight: 700,
          align: 'center',
          gutterBottom: !0,
          children: t('contact_us'),
        }),
        w.jsx(kt, {
          component: 'form',
          onSubmit: n(s),
          noValidate: !0,
          sx: { mt: 4 },
          children: w.jsxs(gt, {
            container: !0,
            spacing: 2,
            children: [
              w.jsx(gt, {
                item: !0,
                size: { xs: 12, sm: 6 },
                children: w.jsx(to, {
                  label: `${t('name')}*`,
                  fullWidth: !0,
                  ...a('nome', { required: t('name_required') }),
                  error: !!i.nome,
                  helperText: (u = i.nome) == null ? void 0 : u.message,
                }),
              }),
              w.jsx(gt, {
                item: !0,
                size: { xs: 12, sm: 6 },
                children: w.jsx(to, { label: `${t('surname')}*`, fullWidth: !0, ...a('cognome') }),
              }),
              w.jsx(gt, {
                item: !0,
                size: { xs: 12, sm: 6 },
                children: w.jsx(to, {
                  label: `${t('email')}*`,
                  fullWidth: !0,
                  ...a('email', {
                    required: t('email_required'),
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: t('email_not_valid') },
                  }),
                  error: !!i.email,
                  helperText: (c = i.email) == null ? void 0 : c.message,
                }),
              }),
              w.jsx(gt, {
                size: { xs: 5, sm: 3 },
                children: w.jsx(uN, {
                  name: 'phonePrefix',
                  control: l,
                  defaultValue: '+39',
                  rules: { required: t('prefix_required') },
                  render: ({ field: _, fieldState: x }) => {
                    var S;
                    return w.jsx(to, {
                      select: !0,
                      label: `${t('prefix')}*`,
                      fullWidth: !0,
                      ..._,
                      error: !!x.error,
                      helperText: (S = x.error) == null ? void 0 : S.message,
                      children: TN(FN).map((m, p) =>
                        w.jsx(
                          pg,
                          {
                            value: m.dial_code,
                            children: w.jsxs(kt, {
                              id: m.name,
                              sx: { display: 'flex', alignItems: 'center', gap: 1 },
                              children: [
                                m.flagSrc
                                  ? w.jsx(kt, {
                                      component: 'img',
                                      src: `https:${m.flagSrc}`,
                                      alt: `flag ${m.name}`,
                                      sx: { width: 24, height: 16, objectFit: 'cover' },
                                    })
                                  : w.jsx(Xe, { variant: 'body2', children: m.sigla }),
                                w.jsx(Xe, { variant: 'body2', children: m.dial_code }),
                              ],
                            }),
                          },
                          m.sigla + p
                        )
                      ),
                    });
                  },
                }),
              }),
              w.jsx(gt, {
                size: { xs: 7, sm: 3 },
                children: w.jsx(to, {
                  label: t('phone'),
                  fullWidth: !0,
                  ...a('phoneNumber', {
                    pattern: { value: /^[0-9\s()-]{6,15}$/, message: t('phone_not_valid') },
                  }),
                  error: !!i.phoneNumber,
                  helperText: (f = i.phoneNumber) == null ? void 0 : f.message,
                }),
              }),
              w.jsx(gt, {
                item: !0,
                size: 12,
                children: w.jsx(to, {
                  label: `${t('message')}*`,
                  fullWidth: !0,
                  multiline: !0,
                  rows: 4,
                  ...a('messaggio', { required: t('message_required') }),
                  error: !!i.messaggio,
                  helperText:
                    (g = (d = i.messaggio) == null ? void 0 : d.message) == null
                      ? void 0
                      : g.toString(),
                }),
              }),
              w.jsx(gt, {
                item: !0,
                size: 12,
                textAlign: 'center',
                children: w.jsx(xn, {
                  type: 'submit',
                  variant: 'contained',
                  size: 'large',
                  children: t('send_message'),
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const AN = Ql(w.jsx('path', { d: 'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z' })),
  MN = [
    {
      name: 'Aquaview 30',
      id: 30,
      focalPoints: [
        { label: 'panoramic_terrace' },
        { label: 'beds', numbers: 2 },
        { label: 'bathrooms', numbers: 1 },
        { label: 'sea_vie' },
      ],
      imgUrl:
        'https://static.wixstatic.com/media/b00006_6e02914d3bdb4c54a44c11985840245f~mv2.png/v1/fill/w_355,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/photo_5980969739435576629_y_edited_edite.png',
    },
    {
      name: 'Aquaview 60',
      id: 60,
      focalPoints: [
        { label: 'panoramic_terrace' },
        { label: 'beds', numbers: 6 },
        { label: 'bathrooms', numbers: 1 },
        { label: 'sea_vie' },
      ],
      imgUrl:
        'https://static.wixstatic.com/media/b00006_040c6098b2024d069d2b203d647bd1e5~mv2.png/v1/fill/w_355,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b00006_040c6098b2024d069d2b203d647bd1e5~mv2.png',
    },
    {
      name: 'Aquaview 90',
      id: 90,
      focalPoints: [
        { label: 'panoramic_terrace' },
        { label: 'beds', numbers: 7 },
        { label: 'bathrooms', numbers: 3 },
        { label: 'sea_vie' },
      ],
      imgUrl:
        'https://static.wixstatic.com/media/b00006_6e02914d3bdb4c54a44c11985840245f~mv2.png/v1/fill/w_355,h_269,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/photo_5980969739435576629_y_edited_edite.png',
    },
  ],
  ON = () => {
    const { t: e } = dr(),
      { ref: t, inView: a } = aN({ triggerOnce: !0, threshold: 0.2 });
    return w.jsxs(w.Fragment, {
      children: [
        w.jsxs('div', {
          className: 'home-hero',
          children: [
            w.jsx('img', {
              className: 'home-hero-img',
              src: 'https://static.wixstatic.com/media/b00006_628574cf16f548f1888442ac1d53afb2~mv2.jpg/v1/fill/w_1960,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b00006_628574cf16f548f1888442ac1d53afb2~mv2.jpg',
              alt: 'giannutri drone.jpg',
            }),
            w.jsxs('div', {
              className: 'home-hero-overlay',
              children: [
                w.jsxs(Xe, {
                  variant: 'h2',
                  align: 'center',
                  className: 'home-hero-title',
                  children: [e('home_title'), w.jsx('br', {}), e('home_title2')],
                }),
                w.jsx(Xe, {
                  variant: 'subtitle2',
                  align: 'center',
                  className: 'home-hero-sub',
                  children: e('home_subtitle'),
                }),
                w.jsx(xn, { variant: 'contained', href: '#contact', children: e('contact_us') }),
              ],
            }),
          ],
        }),
        w.jsx('div', {
          className: 'home-welcome',
          children: w.jsxs('div', {
            className: 'home-welcome-content',
            children: [
              w.jsx(Xe, {
                variant: 'h5',
                align: 'center',
                className: 'home-welcome-title',
                children: e('welcome_title'),
              }),
              w.jsx(Xe, {
                variant: 'body1',
                align: 'center',
                className: 'home-welcome-body',
                children: e('welcome_subtitle'),
              }),
              w.jsx(Xe, {
                variant: 'body1',
                align: 'center',
                className: 'home-welcome-body',
                children: e('welcome_subtitle2'),
              }),
            ],
          }),
        }),
        w.jsxs('div', {
          id: 'ours-apartments',
          className: 'home-cards-section',
          ref: t,
          children: [
            w.jsx(Xe, {
              variant: 'h3',
              className: 'home-cards-title',
              children: e('ours_apartments'),
            }),
            w.jsx(gt, {
              container: !0,
              spacing: 4,
              justifyContent: 'center',
              children: MN.map((n, i) =>
                w.jsx(gt, {
                  item: !0,
                  size: { xs: 12, md: 4 },
                  children: w.jsx(nN, { inView: a, appartament: n }, i),
                })
              ),
            }),
          ],
        }),
        w.jsxs(gt, {
          container: !0,
          className: 'giannutri-section',
          spacing: 2,
          p: { xs: 4, md: 8 },
          alignItems: 'center',
          justifyContent: 'space-between',
          children: [
            w.jsxs(gt, {
              item: !0,
              size: { xs: 12, md: 6 },
              children: [
                w.jsx(Xe, {
                  variant: 'h2',
                  className: 'giannutri-title',
                  children: e('giannutri_island'),
                }),
                w.jsx('div', { className: 'giannutri-bar' }),
                w.jsx(xn, {
                  variant: 'contained',
                  color: 'secondary',
                  href: '/giannutri',
                  className: 'giannutri-btn',
                  children: e('discovery_island'),
                }),
              ],
            }),
            w.jsxs(gt, {
              item: !0,
              size: { xs: 12, md: 6 },
              children: [
                w.jsx(Xe, {
                  variant: 'h5',
                  className: 'giannutri-subtitle',
                  children: e('discovery_island_title'),
                }),
                w.jsx(Xe, {
                  variant: 'body1',
                  className: 'giannutri-body',
                  children: e('discovery_island_body1'),
                }),
                w.jsx(Xe, {
                  variant: 'body1',
                  className: 'giannutri-body',
                  children: e('discovery_island_body2'),
                }),
              ],
            }),
          ],
        }),
        w.jsxs(gt, {
          container: !0,
          className: 'aquaview-section',
          spacing: { xs: 1, md: 2 },
          p: { xs: 4, md: 8 },
          alignItems: 'center',
          justifyContent: 'space-between',
          children: [
            w.jsxs(gt, {
              item: !0,
              size: { xs: 12, md: 6 },
              children: [
                w.jsxs(kt, {
                  sx: { xs: { textAlign: 'center' }, md: {} },
                  children: [
                    w.jsx(Xe, {
                      variant: 'h5',
                      fontWeight: 700,
                      gutterBottom: !0,
                      sx: { md: { color: '#14242d' } },
                      textAlign: { xs: 'center', md: 'left' },
                      children: e('why_aquaview'),
                    }),
                    w.jsx(kt, {
                      children: [
                        'why_aquaview_direct_contact',
                        'why_aquaview_selected_apartments',
                        'why_aquaview_assistance',
                        'why_aquaview_experience',
                      ].map((n) =>
                        w.jsxs(
                          Xe,
                          {
                            component: 'p',
                            display: 'block',
                            children: [w.jsx(AN, {}), ' ', e(n)],
                          },
                          n
                        )
                      ),
                    }),
                  ],
                }),
                w.jsx(kt, {
                  textAlign: { xs: 'center', md: 'left' },
                  pt: { xs: 4 },
                  children: w.jsx(xn, {
                    variant: 'contained',
                    color: 'secondary',
                    href: '/chi-siamo',
                    className: 'giannutri-btn',
                    children: e('who_are'),
                  }),
                }),
              ],
            }),
            w.jsx(gt, {
              item: !0,
              size: { xs: 6, md: 6 },
              children: w.jsx(kt, {
                component: 'img',
                src: hS,
                alt: 'Isola di Giannutri',
                className: 'header__island',
              }),
            }),
          ],
        }),
        w.jsx(RN, { object: 'Ti contatto dalla Home' }),
      ],
    });
  },
  NN = () => {
    const { id: e } = pC();
    return w.jsxs('div', {
      children: [
        w.jsxs('h1', { children: ['Appartamento ', e] }),
        w.jsxs('p', { children: ["Questa è la pagina dell'appartamento con id: ", e] }),
      ],
    });
  },
  zN = () =>
    w.jsxs('div', {
      children: [
        w.jsx('h1', { children: 'Chi Siamo' }),
        w.jsx('p', { children: 'Questa è la pagina Chi Siamo.' }),
      ],
    }),
  BN = () =>
    w.jsxs('div', {
      children: [
        w.jsx('h1', { children: 'Giannutri' }),
        w.jsx('p', { children: 'Questa è la pagina Giannutri.' }),
      ],
    }),
  LN = () => {
    const { t: e, i18n: t } = dr();
    return w.jsxs('div', {
      children: [
        w.jsx('h1', { children: e('privacy_title') }),
        w.jsx('p', { children: e('privacy_text') }),
        w.jsx('button', {
          onClick: () => t.changeLanguage(t.language === 'it' ? 'en' : 'it'),
          children: e('change_language'),
        }),
      ],
    });
  },
  $N = () =>
    w.jsx(ek, {
      children: w.jsxs(RC, {
        children: [
          w.jsx(so, { path: '/', element: w.jsx(ON, {}) }),
          w.jsx(so, { path: '/appartamento/:id', element: w.jsx(NN, {}) }),
          w.jsx(so, { path: '/chi-siamo', element: w.jsx(zN, {}) }),
          w.jsx(so, { path: '/giannutri', element: w.jsx(BN, {}) }),
          w.jsx(so, { path: '/privacy', element: w.jsx(LN, {}) }),
        ],
      }),
    }),
  DN = Ql(w.jsx('path', { d: 'M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z' })),
  jN = Ql(
    w.jsx('path', {
      d: 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    })
  ),
  UN = Ql(w.jsx('path', { d: 'M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z' }));
const HN = { en: 'GBR', it: 'ITA' },
  VN = () => {
    const { t: e, i18n: t } = dr(),
      [a, n] = y.useState(null),
      [i, o] = y.useState(!1),
      [r, l] = y.useState(localStorage.getItem('localLanguage') || 'it'),
      s = (u) => {
        (n(null), u && (l(u), localStorage.setItem('localLanguage', u), t.changeLanguage(u)));
      };
    return w.jsxs(w.Fragment, {
      children: [
        w.jsx(BA, {
          position: 'sticky',
          elevation: 0,
          className: 'header',
          children: w.jsxs(hM, {
            className: 'header__toolbar',
            children: [
              w.jsx(Id, {
                className: 'header__hamburger',
                sx: { bgcolor: 'white' },
                onClick: () => o(!0),
                'aria-label': e('open_menu', 'Apri menu di navigazione'),
                'aria-controls': 'mobile-navigation',
                'aria-expanded': i,
                children: w.jsx(DN, {}),
              }),
              w.jsx(kt, {
                className: 'header__logo',
                children: w.jsxs(Da, {
                  href: '/',
                  underline: 'none',
                  color: 'inherit',
                  className: 'header-logo',
                  'aria-label': e('go_home', 'Vai alla homepage'),
                  children: [
                    w.jsx(Xe, { variant: 'h6', children: e('aquaview_giannutri') }),
                    w.jsx(kt, { component: 'img', src: hS, alt: 'Isola di Giannutri' }),
                  ],
                }),
              }),
              w.jsx('nav', {
                id: 'main-navigation',
                'aria-label': e('main_navigation', 'Navigazione principale'),
                children: w.jsxs(dM, {
                  direction: 'row',
                  spacing: 3,
                  className: 'header__menu',
                  children: [
                    w.jsx(Da, {
                      href: '/',
                      color: 'inherit',
                      underline: 'none',
                      children: e('home'),
                    }),
                    w.jsx(Da, {
                      href: '/#ours-apartments',
                      color: 'inherit',
                      underline: 'none',
                      children: e('ours_apartments'),
                    }),
                    w.jsx(Da, {
                      href: '/giannutri',
                      color: 'inherit',
                      underline: 'none',
                      children: e('giannutri'),
                    }),
                    w.jsx(Da, {
                      href: '/chi-siamo',
                      color: 'inherit',
                      underline: 'none',
                      children: e('who_are'),
                    }),
                  ],
                }),
              }),
              w.jsxs(kt, {
                className: 'header__lang',
                children: [
                  w.jsxs(Id, {
                    onClick: (u) => n(u.currentTarget),
                    'aria-label': e('change_language', 'Cambia lingua'),
                    'aria-controls': a ? 'language-menu' : void 0,
                    'aria-haspopup': 'menu',
                    'aria-expanded': !!a,
                    children: [
                      w.jsx('img', {
                        src: `https://static.parastorage.com/services/linguist-flags/1.969.0/assets/flags/round/${HN[r]}.png`,
                        alt: e(`lang_${r}`),
                      }),
                      e(`lang_${r}`),
                      w.jsx(UN, {}),
                    ],
                  }),
                  w.jsxs(oS, {
                    id: 'language-menu',
                    anchorEl: a,
                    open: !!a,
                    onClose: () => s(),
                    MenuListProps: {
                      role: 'menu',
                      'aria-label': e('language_menu', 'Selezione lingua'),
                    },
                    children: [
                      w.jsxs(pg, {
                        onClick: () => s('it'),
                        children: [
                          w.jsx(kt, {
                            component: 'img',
                            src: 'https://static.parastorage.com/services/linguist-flags/1.969.0/assets/flags/round/ITA.png',
                            sx: { width: 20, mr: 1 },
                          }),
                          e('lang_it', 'IT'),
                        ],
                      }),
                      w.jsxs(pg, {
                        onClick: () => s('en'),
                        children: [
                          w.jsx(kt, {
                            component: 'img',
                            src: 'https://static.parastorage.com/services/linguist-flags/1.969.0/assets/flags/round/GBR.png',
                            sx: { width: 20, mr: 1 },
                          }),
                          e('lang_en', 'EN'),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        w.jsx(x6, {
          id: 'mobile-navigation',
          anchor: 'left',
          open: i,
          onClose: () => o(!1),
          role: 'navigation',
          'aria-label': e('mobile_navigation', 'Navigazione mobile'),
          children: w.jsxs(kt, {
            className: 'mobile-menu',
            children: [
              w.jsxs(kt, {
                className: 'mobile-menu__header',
                children: [
                  w.jsx(Xe, {
                    variant: 'body1',
                    component: 'span',
                    children: e('acquaview_giannutri', 'AquaView Giannutri'),
                  }),
                  w.jsx(Id, {
                    onClick: () => o(!1),
                    'aria-label': e('close_menu', 'Chiudi menu'),
                    children: w.jsx(jN, {}),
                  }),
                ],
              }),
              w.jsx(xn, {
                component: 'a',
                href: '/',
                onClick: () => o(!1),
                children: e('home', 'Home'),
              }),
              w.jsx(xn, {
                component: 'a',
                href: '/#ours-apartments',
                onClick: () => o(!1),
                children: e('ours_apartments'),
              }),
              w.jsx(xn, {
                component: 'a',
                href: '/giannutri',
                onClick: () => o(!1),
                children: e('giannutri'),
              }),
              w.jsx(xn, {
                component: 'a',
                href: '/chi-siamo',
                onClick: () => o(!1),
                children: e('who_are'),
              }),
            ],
          }),
        }),
      ],
    });
  };
const GN = () => {
  const { t: e } = dr();
  return w.jsx(kt, {
    component: 'footer',
    id: 'footer',
    children: w.jsxs(Y1, {
      maxWidth: 'lg',
      children: [
        w.jsxs(gt, {
          container: !0,
          spacing: 4,
          children: [
            w.jsx(gt, {
              item: !0,
              size: { xs: 12, md: 12 },
              children: w.jsx(Xe, {
                variant: 'h6',
                gutterBottom: !0,
                children: e('aquaview_giannutri'),
              }),
            }),
            w.jsx(gt, {
              item: !0,
              size: { xs: 12, md: 4 },
              children: w.jsxs(kt, {
                sx: { display: 'flex', flexDirection: 'column', gap: 1 },
                children: [
                  w.jsx(Da, {
                    href: '/giannutri',
                    color: 'inherit',
                    underline: 'none',
                    children: e('giannutri_island'),
                  }),
                  w.jsx(Da, {
                    href: '/#ours-apartments',
                    color: 'inherit',
                    underline: 'none',
                    children: e('ours_apartments'),
                  }),
                  w.jsx(Da, {
                    href: '/chi-siamo',
                    color: 'inherit',
                    underline: 'none',
                    children: e('who_are'),
                  }),
                  w.jsx(Da, {
                    href: '/privacy',
                    color: 'inherit',
                    underline: 'none',
                    children: e('privacy_policy'),
                  }),
                ],
              }),
            }),
            w.jsxs(gt, {
              item: !0,
              size: { xs: 12, md: 4 },
              children: [
                w.jsx(Xe, { variant: 'h6', gutterBottom: !0, children: 'Contatti' }),
                w.jsxs(Xe, {
                  variant: 'body2',
                  children: [
                    `${e('email')}: `,
                    w.jsx(Da, {
                      href: 'mailto:aquaviewgiannutri@gmail.com',
                      color: 'inherit',
                      underline: 'none',
                      children: 'aquaviewgiannutri@gmail.com',
                    }),
                  ],
                }),
                w.jsxs(Xe, {
                  variant: 'body2',
                  children: [
                    `${e('phone')}: `,
                    w.jsx(Da, {
                      href: 'tel:+393357492944',
                      color: 'inherit',
                      underline: 'none',
                      children: '+39 3357492944',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        w.jsx(kt, {
          sx: { mt: 4, textAlign: 'center' },
          children: w.jsxs(Xe, {
            variant: 'body2',
            children: ['© ', new Date().getFullYear(), ' ', e('aquaview_all_rights_reserved')],
          }),
        }),
      ],
    }),
  });
};
function IN() {
  return w.jsxs(w.Fragment, { children: [w.jsx(VN, {}), w.jsx($N, {}), w.jsx(GN, {})] });
}
F2.createRoot(document.getElementById('root')).render(
  w.jsx(J.StrictMode, { children: w.jsx(IN, {}) })
);
