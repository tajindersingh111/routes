import {
    s as b,
    f as w,
    k as p,
    a as k,
    l as g,
    n as h,
    c as L,
    d as u,
    o as v,
    i as $,
    p as y,
    u as S,
    g as V,
    j as z,
    b as N,
    J as D
} from "../chunks/scheduler.Bal8Y2GG.js";
import {
    S as E,
    i as I,
    t as f,
    b as c,
    d as T,
    c as j,
    a as q,
    m as C,
    h as m,
    e as J,
    g as P
} from "../chunks/index.BruxqCn-.js"; /* empty css                     */
import {
    b as U,
    a as A,
    o as B
} from "../chunks/entry.B98oQIZ2.js";
import {
    L as F
} from "../chunks/loading.DPFq8fxy.js";
import {
    f as d
} from "../chunks/index.ChMmfpiF.js";
import {
    i as G,
    a as H,
    r as K
} from "../chunks/loading.CjNYnET0.js";

function _(l) {
    let a, r, i, e;
    return r = new F({}), {
        c() {
            a = p("div"), j(r.$$.fragment), this.h()
        },
        l(s) {
            a = g(s, "DIV", {
                class: !0
            });
            var t = h(a);
            q(r.$$.fragment, t), t.forEach(u), this.h()
        },
        h() {
            v(a, "class", "loading-wrapper svelte-8vzr6f")
        },
        m(s, t) {
            $(s, a, t), C(r, a, null), e = !0
        },
        i(s) {
            e || (f(r.$$.fragment, s), s && D(() => {
                e && (i || (i = m(a, d, {}, !0)), i.run(1))
            }), e = !0)
        },
        o(s) {
            c(r.$$.fragment, s), s && (i || (i = m(a, d, {}, !1)), i.run(0)), e = !1
        },
        d(s) {
            s && u(a), J(r), s && i && i.end()
        }
    }
}

function M(l) {
    let a, r, i, e = l[0].size && _();
    const s = l[2].default,
        t = w(s, l, l[1], null);
    return {
        c() {
            a = p("div"), e && e.c(), r = k(), t && t.c(), this.h()
        },
        l(n) {
            a = g(n, "DIV", {
                class: !0
            });
            var o = h(a);
            e && e.l(o), r = L(o), t && t.l(o), o.forEach(u), this.h()
        },
        h() {
            v(a, "class", "page-wrapper")
        },
        m(n, o) {
            $(n, a, o), e && e.m(a, null), y(a, r), t && t.m(a, null), i = !0
        },
        p(n, [o]) {
            n[0].size ? e ? o & 1 && f(e, 1) : (e = _(), e.c(), f(e, 1), e.m(a, r)) : e && (P(), c(e, 1, 1, () => {
                e = null
            }), T()), t && t.p && (!i || o & 2) && S(t, s, n, n[1], i ? z(s, n[1], o, null) : V(n[1]), null)
        },
        i(n) {
            i || (f(e), f(t, n), i = !0)
        },
        o(n) {
            c(e), c(t, n), i = !1
        },
        d(n) {
            n && u(a), e && e.d(), t && t.d(n)
        }
    }
}

function O(l, a, r) {
    let i;
    N(l, G, t => r(0, i = t));
    let {
        $$slots: e = {},
        $$scope: s
    } = a;
    return U(t => {
        t.willUnload || H("page-transition")
    }), A(() => K("page-transition")), B(t => {
        if (document.startViewTransition) return new Promise(n => {
            document.startViewTransition(async () => {
                n(), await t.complete
            })
        })
    }), l.$$set = t => {
        "$$scope" in t && r(1, s = t.$$scope)
    }, [i, s, e]
}
class ee extends E {
    constructor(a) {
        super(), I(this, a, O, M, b, {})
    }
}
export {
    ee as component
};