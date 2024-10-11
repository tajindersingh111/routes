import {
    s as L,
    f as b,
    k as p,
    v as z,
    a as R,
    l as m,
    n as v,
    w as A,
    d,
    c as S,
    o as g,
    i as B,
    p as u,
    x as F,
    u as j,
    g as k,
    j as q
} from "./scheduler.Bal8Y2GG.js";
import {
    S as G,
    i as J,
    t as w,
    b as C
} from "./index.BruxqCn-.js";
const K = e => ({}),
    H = e => ({});

function M(e) {
    let s, i, _, f, c, n, y, r;
    const E = e[2].options,
        a = b(E, e, e[1], H),
        D = e[2].default,
        l = b(D, e, e[1], null);
    return {
        c() {
            s = p("div"), i = p("div"), _ = p("h1"), f = z(e[0]), c = R(), n = p("div"), a && a.c(), y = R(), l && l.c(), this.h()
        },
        l(t) {
            s = m(t, "DIV", {
                class: !0
            });
            var o = v(s);
            i = m(o, "DIV", {
                class: !0
            });
            var h = v(i);
            _ = m(h, "H1", {
                class: !0
            });
            var I = v(_);
            f = A(I, e[0]), I.forEach(d), c = S(h), n = m(h, "DIV", {
                class: !0
            });
            var V = v(n);
            a && a.l(V), V.forEach(d), h.forEach(d), y = S(o), l && l.l(o), o.forEach(d), this.h()
        },
        h() {
            g(_, "class", "title"), g(n, "class", "options svelte-nog7ys"), g(i, "class", "header svelte-nog7ys"), g(s, "class", "content svelte-nog7ys")
        },
        m(t, o) {
            B(t, s, o), u(s, i), u(i, _), u(_, f), u(i, c), u(i, n), a && a.m(n, null), u(s, y), l && l.m(s, null), r = !0
        },
        p(t, [o]) {
            (!r || o & 1) && F(f, t[0]), a && a.p && (!r || o & 2) && j(a, E, t, t[1], r ? q(E, t[1], o, K) : k(t[1]), H), l && l.p && (!r || o & 2) && j(l, D, t, t[1], r ? q(D, t[1], o, null) : k(t[1]), null)
        },
        i(t) {
            r || (w(a, t), w(l, t), r = !0)
        },
        o(t) {
            C(a, t), C(l, t), r = !1
        },
        d(t) {
            t && d(s), a && a.d(t), l && l.d(t)
        }
    }
}

function N(e, s, i) {
    let {
        $$slots: _ = {},
        $$scope: f
    } = s, {
        title: c
    } = s;
    return e.$$set = n => {
        "title" in n && i(0, c = n.title), "$$scope" in n && i(1, f = n.$$scope)
    }, [c, f, _]
}
class Q extends G {
    constructor(s) {
        super(), J(this, s, N, M, L, {
            title: 0
        })
    }
}
export {
    Q as R
};