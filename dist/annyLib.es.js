function u() {
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
function q(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function N(e) {
  return Object.keys(e).length === 0;
}
const B = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
"WeakMap" in B;
function T(e, t, n) {
  e.insertBefore(t, n || null);
}
function L(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function W(e) {
  return document.createElement(e);
}
function A(e) {
  return Array.from(e.childNodes);
}
let b;
function d(e) {
  b = e;
}
const i = [], E = [];
let s = [];
const S = [], I = /* @__PURE__ */ Promise.resolve();
let g = !1;
function P() {
  g || (g = !0, I.then(M));
}
function y(e) {
  s.push(e);
}
const m = /* @__PURE__ */ new Set();
let c = 0;
function M() {
  if (c !== 0)
    return;
  const e = b;
  do {
    try {
      for (; c < i.length; ) {
        const t = i[c];
        c++, d(t), z(t.$$);
      }
    } catch (t) {
      throw i.length = 0, c = 0, t;
    }
    for (d(null), i.length = 0, c = 0; E.length; )
      E.pop()();
    for (let t = 0; t < s.length; t += 1) {
      const n = s[t];
      m.has(n) || (m.add(n), n());
    }
    s.length = 0;
  } while (i.length);
  for (; S.length; )
    S.pop()();
  g = !1, m.clear(), d(e);
}
function z(e) {
  if (e.fragment !== null) {
    e.update(), _(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(y);
  }
}
function D(e) {
  const t = [], n = [];
  s.forEach((o) => e.indexOf(o) === -1 ? t.push(o) : n.push(o)), n.forEach((o) => o()), s = t;
}
const F = /* @__PURE__ */ new Set();
function G(e, t) {
  e && e.i && (F.delete(e), e.i(t));
}
const H = [
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
[...H];
function J(e, t, n, o) {
  const { fragment: l, after_update: p } = e.$$;
  l && l.m(t, n), o || y(() => {
    const f = e.$$.on_mount.map(C).filter(j);
    e.$$.on_destroy ? e.$$.on_destroy.push(...f) : _(f), e.$$.on_mount = [];
  }), p.forEach(y);
}
function K(e, t) {
  const n = e.$$;
  n.fragment !== null && (D(n.after_update), _(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Q(e, t) {
  e.$$.dirty[0] === -1 && (i.push(e), P(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function R(e, t, n, o, l, p, f, O = [-1]) {
  const h = b;
  d(e);
  const r = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: p,
    update: u,
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
    dirty: O,
    skip_bound: !1,
    root: t.target || h.$$.root
  };
  f && f(r.root);
  let $ = !1;
  if (r.ctx = n ? n(e, t.props || {}, (a, w, ...x) => {
    const k = x.length ? x[0] : w;
    return r.ctx && l(r.ctx[a], r.ctx[a] = k) && (!r.skip_bound && r.bound[a] && r.bound[a](k), $ && Q(e, a)), w;
  }) : [], r.update(), $ = !0, _(r.before_update), r.fragment = o ? o(r.ctx) : !1, t.target) {
    if (t.hydrate) {
      const a = A(t.target);
      r.fragment && r.fragment.l(a), a.forEach(L);
    } else
      r.fragment && r.fragment.c();
    t.intro && G(e.$$.fragment), J(e, t.target, t.anchor, t.customElement), M();
  }
  d(h);
}
class U {
  $destroy() {
    K(this, 1), this.$destroy = u;
  }
  $on(t, n) {
    if (!j(n))
      return u;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return o.push(n), () => {
      const l = o.indexOf(n);
      l !== -1 && o.splice(l, 1);
    };
  }
  $set(t) {
    this.$$set && !N(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function V(e) {
  let t;
  return {
    c() {
      t = W("div"), t.textContent = "comp";
    },
    m(n, o) {
      T(n, t, o);
    },
    p: u,
    i: u,
    o: u,
    d(n) {
      n && L(t);
    }
  };
}
class X extends U {
  constructor(t) {
    super(), R(this, t, null, V, q, {});
  }
}
class Y {
  // initialize plugin
  init() {
    console.log("annyLib init");
    const t = document.querySelector("body"), n = document.createElement("div");
    n.id = "annyLib", t.appendChild(n), new X({
      target: document.getElementById("annyLib")
    });
  }
}
export {
  Y as default
};
