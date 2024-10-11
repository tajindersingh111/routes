import {
    s as F,
    a as $,
    e as T,
    h as H,
    d,
    c as k,
    i as _,
    b as P,
    f as W,
    u as z,
    g as G,
    j as J,
    k as v,
    l as C,
    m as N,
    o as m,
    n as D,
    p as E,
    q as A,
    r as K,
    t as Q,
    v as L,
    w as O
} from "../chunks/scheduler.Bal8Y2GG.js";
import {
    S as X,
    i as Y,
    c as q,
    a as M,
    m as V,
    t as w,
    b as y,
    d as Z,
    e as g,
    g as tt
} from "../chunks/index.BruxqCn-.js";
import {
    o as et,
    g as st
} from "../chunks/entry.B98oQIZ2.js";
import {
    p as lt
} from "../chunks/stores.BLmWVoEm.js"; /* empty css                                                           */
import {
    M as ot
} from "../chunks/modal.n1Zpv6l-.js";
import {
    R as rt
} from "../chunks/resourceLayout.CcXc0dAb.js";
import {
    f as at
} from "../chunks/fetchClient.DtCbC4hg.js";
import {
    f as I
} from "../chunks/links.CXgoaKkn.js";
import {
    e as it
} from "../chunks/index.DYMvb8Iz.js";

function ut(f) {
    let t;
    const l = f[4].default,
        e = W(l, f, f[7], null);
    return {
        c() {
            e && e.c()
        },
        l(s) {
            e && e.l(s)
        },
        m(s, r) {
            e && e.m(s, r), t = !0
        },
        p(s, r) {
            e && e.p && (!t || r & 128) && z(e, l, s, s[7], t ? J(l, s[7], r, null) : G(s[7]), null)
        },
        i(s) {
            t || (w(e, s), t = !0)
        },
        o(s) {
            y(e, s), t = !1
        },
        d(s) {
            e && e.d(s)
        }
    }
}

function j(f) {
    let t, l = "Back to List";
    return {
        c() {
            t = v("a"), t.textContent = l, this.h()
        },
        l(e) {
            t = C(e, "A", {
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }), N(t) !== "svelte-1jvtslj" && (t.textContent = l), this.h()
        },
        h() {
            m(t, "href", I("/routes", {})), m(t, "class", "btn")
        },
        m(e, s) {
            _(e, t, s)
        },
        d(e) {
            e && d(t)
        }
    }
}

function x(f) {
    let t, l, e, s = "Delete",
        r, u, o = f[0].route.id !== "/(app)/(auth)/routes/[routeId]" && R(f),
        a = f[0].route.id !== "/(app)/(auth)/routes/[routeId]/edit" && S(f);
    return {
        c() {
            o && o.c(), t = $(), a && a.c(), l = $(), e = v("button"), e.textContent = s, this.h()
        },
        l(i) {
            o && o.l(i), t = k(i), a && a.l(i), l = k(i), e = C(i, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), N(e) !== "svelte-1f8bw7t" && (e.textContent = s), this.h()
        },
        h() {
            m(e, "class", "btn-error")
        },
        m(i, h) {
            o && o.m(i, h), _(i, t, h), a && a.m(i, h), _(i, l, h), _(i, e, h), r || (u = A(e, "click", f[5]), r = !0)
        },
        p(i, h) {
            i[0].route.id !== "/(app)/(auth)/routes/[routeId]" ? o ? o.p(i, h) : (o = R(i), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null), i[0].route.id !== "/(app)/(auth)/routes/[routeId]/edit" ? a ? a.p(i, h) : (a = S(i), a.c(), a.m(l.parentNode, l)) : a && (a.d(1), a = null)
        },
        d(i) {
            i && (d(t), d(l), d(e)), o && o.d(i), a && a.d(i), r = !1, u()
        }
    }
}

function R(f) {
    let t, l, e;
    return {
        c() {
            t = v("a"), l = L("Details"), this.h()
        },
        l(s) {
            t = C(s, "A", {
                href: !0,
                class: !0
            });
            var r = D(t);
            l = O(r, "Details"), r.forEach(d), this.h()
        },
        h() {
            m(t, "href", e = I("/routes/{routeId}", {
                routeId: f[2]
            })), m(t, "class", "btn")
        },
        m(s, r) {
            _(s, t, r), E(t, l)
        },
        p(s, r) {
            r & 4 && e !== (e = I("/routes/{routeId}", {
                routeId: s[2]
            })) && m(t, "href", e)
        },
        d(s) {
            s && d(t)
        }
    }
}

function S(f) {
    let t, l, e;
    return {
        c() {
            t = v("a"), l = L("Edit"), this.h()
        },
        l(s) {
            t = C(s, "A", {
                href: !0,
                class: !0
            });
            var r = D(t);
            l = O(r, "Edit"), r.forEach(d), this.h()
        },
        h() {
            m(t, "href", e = I("/routes/{routeId}/edit", {
                routeId: f[2]
            })), m(t, "class", "btn")
        },
        m(s, r) {
            _(s, t, r), E(t, l)
        },
        p(s, r) {
            r & 4 && e !== (e = I("/routes/{routeId}/edit", {
                routeId: s[2]
            })) && m(t, "href", e)
        },
        d(s) {
            s && d(t)
        }
    }
}

function nt(f) {
    let t, l, e = "Create",
        s, r, u, o = "Upload CSV Without Stops",
        a, i, h = "Upload CSV From Stops",
        c = f[0].route.id !== B && j(),
        p = f[2] && x(f);
    return {
        c() {
            c && c.c(), t = $(), l = v("a"), l.textContent = e, s = $(), p && p.c(), r = $(), u = v("a"), u.textContent = o, a = $(), i = v("a"), i.textContent = h, this.h()
        },
        l(n) {
            c && c.l(n), t = k(n), l = C(n, "A", {
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }), N(l) !== "svelte-vkq452" && (l.textContent = e), s = k(n), p && p.l(n), r = k(n), u = C(n, "A", {
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }), N(u) !== "svelte-18vi13a" && (u.textContent = o), a = k(n), i = C(n, "A", {
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }), N(i) !== "svelte-1eje95i" && (i.textContent = h), this.h()
        },
        h() {
            m(l, "href", I("/routes/create", {})), m(l, "class", "btn"), m(u, "href", I("/routes/upload-route-csv", {})), m(u, "class", "btn"), m(i, "href", I("/routes/upload-stops-csv", {})), m(i, "class", "btn")
        },
        m(n, b) {
            c && c.m(n, b), _(n, t, b), _(n, l, b), _(n, s, b), p && p.m(n, b), _(n, r, b), _(n, u, b), _(n, a, b), _(n, i, b)
        },
        p(n, b) {
            n[0].route.id !== B ? c || (c = j(), c.c(), c.m(t.parentNode, t)) : c && (c.d(1), c = null), n[2] ? p ? p.p(n, b) : (p = x(n), p.c(), p.m(r.parentNode, r)) : p && (p.d(1), p = null)
        },
        d(n) {
            n && (d(t), d(l), d(s), d(r), d(u), d(a), d(i)), c && c.d(n), p && p.d(n)
        }
    }
}

function U(f) {
    let t, l;
    return t = new ot({
        props: {
            $$slots: {
                default: [ft]
            },
            $$scope: {
                ctx: f
            }
        }
    }), {
        c() {
            q(t.$$.fragment)
        },
        l(e) {
            M(t.$$.fragment, e)
        },
        m(e, s) {
            V(t, e, s), l = !0
        },
        p(e, s) {
            const r = {};
            s & 130 && (r.$$scope = {
                dirty: s,
                ctx: e
            }), t.$set(r)
        },
        i(e) {
            l || (w(t.$$.fragment, e), l = !0)
        },
        o(e) {
            y(t.$$.fragment, e), l = !1
        },
        d(e) {
            g(t, e)
        }
    }
}

function ft(f) {
    let t, l = "Are you sure you want to delete",
        e, s, r, u = "Close",
        o, a, i = "Delete",
        h, c;
    return {
        c() {
            t = v("h2"), t.textContent = l, e = $(), s = v("div"), r = v("button"), r.textContent = u, o = $(), a = v("button"), a.textContent = i, this.h()
        },
        l(p) {
            t = C(p, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), N(t) !== "svelte-f7ixjg" && (t.textContent = l), e = k(p), s = C(p, "DIV", {
                class: !0
            });
            var n = D(s);
            r = C(n, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), N(r) !== "svelte-1ejmsne" && (r.textContent = u), o = k(n), a = C(n, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), N(a) !== "svelte-rwp0wc" && (a.textContent = i), n.forEach(d), this.h()
        },
        h() {
            m(t, "class", "subtitle"), m(r, "class", "btn"), m(a, "class", "btn-error"), m(s, "class", "row")
        },
        m(p, n) {
            _(p, t, n), _(p, e, n), _(p, s, n), E(s, r), E(s, o), E(s, a), h || (c = [A(r, "click", f[6]), A(a, "click", f[3])], h = !0)
        },
        p: K,
        d(p) {
            p && (d(t), d(e), d(s)), h = !1, Q(c)
        }
    }
}

function ct(f) {
    let t, l, e, s, r;
    l = new rt({
        props: {
            title: "Routes",
            $$slots: {
                options: [nt],
                default: [ut]
            },
            $$scope: {
                ctx: f
            }
        }
    });
    let u = f[1] && U(f);
    return {
        c() {
            t = $(), q(l.$$.fragment), e = $(), u && u.c(), s = T(), this.h()
        },
        l(o) {
            H("svelte-5py58m", document.head).forEach(d), t = k(o), M(l.$$.fragment, o), e = k(o), u && u.l(o), s = T(), this.h()
        },
        h() {
            document.title = "D-carbN - Routes"
        },
        m(o, a) {
            _(o, t, a), V(l, o, a), _(o, e, a), u && u.m(o, a), _(o, s, a), r = !0
        },
        p(o, [a]) {
            const i = {};
            a & 135 && (i.$$scope = {
                dirty: a,
                ctx: o
            }), l.$set(i), o[1] ? u ? (u.p(o, a), a & 2 && w(u, 1)) : (u = U(o), u.c(), w(u, 1), u.m(s.parentNode, s)) : u && (tt(), y(u, 1, 1, () => {
                u = null
            }), Z())
        },
        i(o) {
            r || (w(l.$$.fragment, o), w(u), r = !0)
        },
        o(o) {
            y(l.$$.fragment, o), y(u), r = !1
        },
        d(o) {
            o && (d(t), d(e), d(s)), g(l, o), u && u.d(o)
        }
    }
}
const B = "/(app)/(auth)/routes";

function pt(f, t, l) {
    let e, s;
    P(f, lt, c => l(0, s = c));
    let {
        $$slots: r = {},
        $$scope: u
    } = t;
    const o = async () => {
        const c = await at.DELETE("/v1/routes/{id}", {
            params: {
                path: {
                    id: e
                }
            }
        });
        c.error && it(c.response.status, c.error), st(I("/routes", {}), {
            invalidateAll: !0
        })
    };
    let a = !1;
    et(() => {
        l(1, a = !1)
    });
    const i = () => l(1, a = !0),
        h = () => l(1, a = !1);
    return f.$$set = c => {
        "$$scope" in c && l(7, u = c.$$scope)
    }, f.$$.update = () => {
        var c, p;
        f.$$.dirty & 1 && l(2, e = (p = (c = s.data.route) == null ? void 0 : c.data) == null ? void 0 : p.id)
    }, [s, a, e, o, r, i, h, u]
}
class Nt extends X {
    constructor(t) {
        super(), Y(this, t, pt, ct, F, {})
    }
}
export {
    Nt as component
};