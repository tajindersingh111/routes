import {
    t as j,
    b as q
} from "./index.BruxqCn-.js";
import {
    t as z
} from "./scheduler.Bal8Y2GG.js";

function F(e) {
    return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e)
}

function G(e, c) {
    e.d(1), c.delete(e.key)
}

function B(e, c) {
    q(e, 1, 1, () => {
        c.delete(e.key)
    })
}

function H(e, c) {
    e.f(), B(e, c)
}

function I(e, c, x, C, S, g, o, k, p, A, u, b) {
    let i = e.length,
        f = g.length,
        d = i;
    const a = {};
    for (; d--;) a[e[d].key] = d;
    const h = [],
        w = new Map,
        y = new Map,
        _ = [];
    for (d = f; d--;) {
        const n = b(S, g, d),
            t = x(n);
        let s = o.get(t);
        s ? _.push(() => s.p(n, c)) : (s = A(t, n), s.c()), w.set(t, h[d] = s), t in a && y.set(t, Math.abs(d - a[t]))
    }
    const M = new Set,
        v = new Set;

    function m(n) {
        j(n, 1), n.m(k, u), o.set(n.key, n), u = n.first, f--
    }
    for (; i && f;) {
        const n = h[f - 1],
            t = e[i - 1],
            s = n.key,
            l = t.key;
        n === t ? (u = n.first, i--, f--) : w.has(l) ? !o.has(s) || M.has(s) ? m(n) : v.has(l) ? i-- : y.get(s) > y.get(l) ? (v.add(s), m(n)) : (M.add(l), i--) : (p(t, o), i--)
    }
    for (; i--;) {
        const n = e[i];
        w.has(n.key) || p(n, o)
    }
    for (; f;) m(h[f - 1]);
    return z(_), h
}
export {
    G as d, F as e, H as f, I as u
};