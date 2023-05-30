function B() {
  let e = {
    system: ""
  };
  return {
    setting: e,
    setConfig: (t) => {
      e.system = t.system;
    }
  };
}
const j = B();
function h() {
}
function A(e) {
  return e();
}
function v() {
  return /* @__PURE__ */ Object.create(null);
}
function _(e) {
  e.forEach(A);
}
function M(e) {
  return typeof e == "function";
}
function L(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function W(e) {
  return Object.keys(e).length === 0;
}
const I = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in I;
function E(e, t) {
  e.appendChild(t);
}
function P(e, t, n) {
  e.insertBefore(t, n || null);
}
function O(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function V(e) {
  return document.createElement(e);
}
function C(e) {
  return document.createTextNode(e);
}
function z(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function D(e) {
  return Array.from(e.childNodes);
}
function F(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
let b;
function d(e) {
  b = e;
}
const u = [], S = [];
let f = [];
const N = [], G = /* @__PURE__ */ Promise.resolve();
let g = !1;
function H() {
  g || (g = !0, G.then(q));
}
function y(e) {
  f.push(e);
}
const p = /* @__PURE__ */ new Set();
let c = 0;
function q() {
  if (c !== 0)
    return;
  const e = b;
  do {
    try {
      for (; c < u.length; ) {
        const t = u[c];
        c++, d(t), J(t.$$);
      }
    } catch (t) {
      throw u.length = 0, c = 0, t;
    }
    for (d(null), u.length = 0, c = 0; S.length; )
      S.pop()();
    for (let t = 0; t < f.length; t += 1) {
      const n = f[t];
      p.has(n) || (p.add(n), n());
    }
    f.length = 0;
  } while (u.length);
  for (; N.length; )
    N.pop()();
  g = !1, p.clear(), d(e);
}
function J(e) {
  if (e.fragment !== null) {
    e.update(), _(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(y);
  }
}
function K(e) {
  const t = [], n = [];
  f.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), f = t;
}
const Q = /* @__PURE__ */ new Set();
function R(e, t) {
  e && e.i && (Q.delete(e), e.i(t));
}
const U = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
[...U];
function X(e, t, n, o) {
  const { fragment: i, after_update: s } = e.$$;
  i && i.m(t, n), o || y(() => {
    const l = e.$$.on_mount.map(A).filter(M);
    e.$$.on_destroy ? e.$$.on_destroy.push(...l) : _(l), e.$$.on_mount = [];
  }), s.forEach(y);
}
function Y(e, t) {
  const n = e.$$;
  n.fragment !== null && (K(n.after_update), _(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Z(e, t) {
  e.$$.dirty[0] === -1 && (u.push(e), H(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function ee(e, t, n, o, i, s, l, T = [-1]) {
  const m = b;
  d(e);
  const r = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: h,
    not_equal: i,
    bound: v(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (m ? m.$$.context : [])),
    // everything else
    callbacks: v(),
    dirty: T,
    skip_bound: !1,
    root: t.target || m.$$.root
  };
  l && l(r.root);
  let $ = !1;
  if (r.ctx = n ? n(e, t.props || {}, (a, w, ...x) => {
    const k = x.length ? x[0] : w;
    return r.ctx && i(r.ctx[a], r.ctx[a] = k) && (!r.skip_bound && r.bound[a] && r.bound[a](k), $ && Z(e, a)), w;
  }) : [], r.update(), $ = !0, _(r.before_update), r.fragment = o ? o(r.ctx) : !1, t.target) {
    if (t.hydrate) {
      const a = D(t.target);
      r.fragment && r.fragment.l(a), a.forEach(O);
    } else
      r.fragment && r.fragment.c();
    t.intro && R(e.$$.fragment), X(e, t.target, t.anchor, t.customElement), q();
  }
  d(m);
}
class te {
  $destroy() {
    Y(this, 1), this.$destroy = h;
  }
  $on(t, n) {
    if (!M(n))
      return h;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return o.push(n), () => {
      const i = o.indexOf(n);
      i !== -1 && o.splice(i, 1);
    };
  }
  $set(t) {
    this.$$set && !W(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function ne(e) {
  let t, n, o = (
    /*configValue*/
    e[0].system + ""
  ), i;
  return {
    c() {
      t = V("div"), n = C("System Name is "), i = C(o), z(t, "class", "annylib-preflight annylib-w-24 annylib-bg-gray-200");
    },
    m(s, l) {
      P(s, t, l), E(t, n), E(t, i);
    },
    p(s, [l]) {
      l & /*configValue*/
      1 && o !== (o = /*configValue*/
      s[0].system + "") && F(i, o);
    },
    i: h,
    o: h,
    d(s) {
      s && O(t);
    }
  };
}
function oe(e, t, n) {
  let o;
  return o = j.setting, [o];
}
class re extends te {
  constructor(t) {
    super(), ee(this, t, oe, ne, L, {});
  }
}
class ie {
  constructor(t) {
    j.setConfig(t);
  }
  // initialize plugin
  init() {
    const t = "annyLib", n = document.querySelector("body"), o = document.createElement("div");
    o.id = t, n.appendChild(o), new re({
      target: document.getElementById(t)
    });
  }
}
export {
  ie as default
};
