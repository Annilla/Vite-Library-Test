function s() {
}
function C(e) {
  return e();
}
function v() {
  return /* @__PURE__ */ Object.create(null);
}
function _(e) {
  e.forEach(C);
}
function j(e) {
  return typeof e == "function";
}
function O(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function q(e) {
  return Object.keys(e).length === 0;
}
const B = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in B;
function L(e, t, n) {
  e.insertBefore(t, n || null);
}
function A(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function T(e) {
  return document.createElement(e);
}
function W(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function I(e) {
  return Array.from(e.childNodes);
}
let b;
function d(e) {
  b = e;
}
const i = [], E = [];
let u = [];
const S = [], P = /* @__PURE__ */ Promise.resolve();
let g = !1;
function z() {
  g || (g = !0, P.then(M));
}
function y(e) {
  u.push(e);
}
const p = /* @__PURE__ */ new Set();
let c = 0;
function M() {
  if (c !== 0)
    return;
  const e = b;
  do {
    try {
      for (; c < i.length; ) {
        const t = i[c];
        c++, d(t), D(t.$$);
      }
    } catch (t) {
      throw i.length = 0, c = 0, t;
    }
    for (d(null), i.length = 0, c = 0; E.length; )
      E.pop()();
    for (let t = 0; t < u.length; t += 1) {
      const n = u[t];
      p.has(n) || (p.add(n), n());
    }
    u.length = 0;
  } while (i.length);
  for (; S.length; )
    S.pop()();
  g = !1, p.clear(), d(e);
}
function D(e) {
  if (e.fragment !== null) {
    e.update(), _(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(y);
  }
}
function F(e) {
  const t = [], n = [];
  u.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), u = t;
}
const G = /* @__PURE__ */ new Set();
function H(e, t) {
  e && e.i && (G.delete(e), e.i(t));
}
const J = [
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
[...J];
function K(e, t, n, o) {
  const { fragment: l, after_update: m } = e.$$;
  l && l.m(t, n), o || y(() => {
    const f = e.$$.on_mount.map(C).filter(j);
    e.$$.on_destroy ? e.$$.on_destroy.push(...f) : _(f), e.$$.on_mount = [];
  }), m.forEach(y);
}
function Q(e, t) {
  const n = e.$$;
  n.fragment !== null && (F(n.after_update), _(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function R(e, t) {
  e.$$.dirty[0] === -1 && (i.push(e), z(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function U(e, t, n, o, l, m, f, N = [-1]) {
  const h = b;
  d(e);
  const r = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: m,
    update: s,
    not_equal: l,
    bound: v(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (h ? h.$$.context : [])),
    // everything else
    callbacks: v(),
    dirty: N,
    skip_bound: !1,
    root: t.target || h.$$.root
  };
  f && f(r.root);
  let $ = !1;
  if (r.ctx = n ? n(e, t.props || {}, (a, w, ...x) => {
    const k = x.length ? x[0] : w;
    return r.ctx && l(r.ctx[a], r.ctx[a] = k) && (!r.skip_bound && r.bound[a] && r.bound[a](k), $ && R(e, a)), w;
  }) : [], r.update(), $ = !0, _(r.before_update), r.fragment = o ? o(r.ctx) : !1, t.target) {
    if (t.hydrate) {
      const a = I(t.target);
      r.fragment && r.fragment.l(a), a.forEach(A);
    } else
      r.fragment && r.fragment.c();
    t.intro && H(e.$$.fragment), K(e, t.target, t.anchor, t.customElement), M();
  }
  d(h);
}
class V {
  $destroy() {
    Q(this, 1), this.$destroy = s;
  }
  $on(t, n) {
    if (!j(n))
      return s;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return o.push(n), () => {
      const l = o.indexOf(n);
      l !== -1 && o.splice(l, 1);
    };
  }
  $set(t) {
    this.$$set && !q(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function X(e) {
  let t;
  return {
    c() {
      t = T("div"), t.textContent = "comp", W(t, "class", "annylib-w-24 annylib-bg-gray-200");
    },
    m(n, o) {
      L(n, t, o);
    },
    p: s,
    i: s,
    o: s,
    d(n) {
      n && A(t);
    }
  };
}
class Y extends V {
  constructor(t) {
    super(), U(this, t, null, X, O, {});
  }
}
class Z {
  // initialize plugin
  init() {
    const t = "annyLib", n = document.querySelector("body"), o = document.createElement("div");
    o.id = t, n.appendChild(o), new Y({
      target: document.getElementById(t)
    });
  }
}
export {
  Z as default
};
