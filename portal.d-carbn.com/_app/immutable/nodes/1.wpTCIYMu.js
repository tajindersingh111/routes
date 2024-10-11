import {
    s as w,
    b as C,
    k as f,
    a as E,
    v as M,
    l as g,
    n as v,
    m as b,
    c as k,
    w as q,
    d as h,
    o as u,
    i as A,
    p as c,
    r as B
} from "../chunks/scheduler.Bal8Y2GG.js";
import {
    S as H,
    i as N,
    c as S,
    a as y,
    m as I,
    t as z,
    b as D,
    e as F
} from "../chunks/index.BruxqCn-.js"; /* empty css                     */
import {
    B as U
} from "../chunks/backgroundSvg.B_U_77Uo.js";
import {
    p as V
} from "../chunks/stores.BLmWVoEm.js";

function j(o) {
    let e, s, t, r = "Error",
        l, a, i, _, n, $ = "Back Home";
    return {
        c() {
            e = f("div"), s = f("main"), t = f("h1"), t.textContent = r, l = E(), a = f("h2"), i = M(o[0]), _ = E(), n = f("a"), n.textContent = $, this.h()
        },
        l(p) {
            e = g(p, "DIV", {
                class: !0
            });
            var d = v(e);
            s = g(d, "MAIN", {
                class: !0
            });
            var m = v(s);
            t = g(m, "H1", {
                class: !0,
                "data-svelte-h": !0
            }), b(t) !== "svelte-11dsi3p" && (t.textContent = r), l = k(m), a = g(m, "H2", {
                class: !0
            });
            var x = v(a);
            i = q(x, o[0]), x.forEach(h), _ = k(m), n = g(m, "A", {
                href: !0,
                class: !0,
                "data-svelte-h": !0
            }), b(n) !== "svelte-qguqfm" && (n.textContent = $), m.forEach(h), d.forEach(h), this.h()
        },
        h() {
            u(t, "class", "title svelte-xlwaga"), u(a, "class", "subtitle svelte-xlwaga"), u(n, "href", "/"), u(n, "class", "link"), u(s, "class", "svelte-xlwaga"), u(e, "class", "page svelte-xlwaga")
        },
        m(p, d) {
            A(p, e, d), c(e, s), c(s, t), c(s, l), c(s, a), c(a, i), c(s, _), c(s, n)
        },
        p: B,
        d(p) {
            p && h(e)
        }
    }
}

function G(o) {
    let e, s;
    return e = new U({
        props: {
            $$slots: {
                default: [j]
            },
            $$scope: {
                ctx: o
            }
        }
    }), {
        c() {
            S(e.$$.fragment)
        },
        l(t) {
            y(e.$$.fragment, t)
        },
        m(t, r) {
            I(e, t, r), s = !0
        },
        p(t, [r]) {
            const l = {};
            r & 8 && (l.$$scope = {
                dirty: r,
                ctx: t
            }), e.$set(l)
        },
        i(t) {
            s || (z(e.$$.fragment, t), s = !0)
        },
        o(t) {
            D(e.$$.fragment, t), s = !1
        },
        d(t) {
            F(e, t)
        }
    }
}

function J(o, e, s) {
    let t;
    return C(o, V, a => s(1, t = a)), [(() => {
        var a, i;
        return t.status === 404 ? "Not Found" : t.status === 403 ? "Not Authorized" : (((a = t.error) == null ? void 0 : a.message) ? ? "") === "" ? "Unknown Error" : (i = t.error) == null ? void 0 : i.message
    })()]
}
class R extends H {
    constructor(e) {
        super(), N(this, e, J, G, w, {})
    }
}
export {
    R as component
};