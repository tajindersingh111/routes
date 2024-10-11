var R = Object.defineProperty;
var O = (t, e, n) => e in t ? R(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : t[e] = n;
var f = (t, e, n) => (O(t, typeof e != "symbol" ? e + "" : e, n), n);

function L() {}
const lt = t => t;

function F(t, e) {
    for (const n in e) t[n] = e[n];
    return t
}

function G(t) {
    return t()
}

function ot() {
    return Object.create(null)
}

function I(t) {
    t.forEach(G)
}

function z(t) {
    return typeof t == "function"
}

function ut(t, e) {
    return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function"
}
let m;

function at(t, e) {
    return t === e ? !0 : (m || (m = document.createElement("a")), m.href = e, t === m.href)
}

function ft(t) {
    return Object.keys(t).length === 0
}

function U(t, ...e) {
    if (t == null) {
        for (const i of e) i(void 0);
        return L
    }
    const n = t.subscribe(...e);
    return n.unsubscribe ? () => n.unsubscribe() : n
}

function _t(t, e, n) {
    t.$$.on_destroy.push(U(e, n))
}

function dt(t, e, n, i) {
    if (t) {
        const s = M(t, e, n, i);
        return t[0](s)
    }
}

function M(t, e, n, i) {
    return t[1] && i ? F(n.ctx.slice(), t[1](i(e))) : n.ctx
}

function ht(t, e, n, i) {
    if (t[2] && i) {
        const s = t[2](i(n));
        if (e.dirty === void 0) return s;
        if (typeof s == "object") {
            const l = [],
                r = Math.max(e.dirty.length, s.length);
            for (let o = 0; o < r; o += 1) l[o] = e.dirty[o] | s[o];
            return l
        }
        return e.dirty | s
    }
    return e.dirty
}

function mt(t, e, n, i, s, l) {
    if (s) {
        const r = M(e, n, i, l);
        t.p(r, s)
    }
}

function pt(t) {
    if (t.ctx.length > 32) {
        const e = [],
            n = t.ctx.length / 32;
        for (let i = 0; i < n; i++) e[i] = -1;
        return e
    }
    return -1
}

function yt(t) {
    const e = {};
    for (const n in t) n[0] !== "$" && (e[n] = t[n]);
    return e
}

function gt(t) {
    return t && z(t.destroy) ? t.destroy : L
}

function bt(t) {
    const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
    return e ? [parseFloat(e[1]), e[2] || "px"] : [t, "px"]
}
let y = !1;

function xt() {
    y = !0
}

function Et() {
    y = !1
}

function W(t, e, n, i) {
    for (; t < e;) {
        const s = t + (e - t >> 1);
        n(s) <= i ? t = s + 1 : e = s
    }
    return t
}

function J(t) {
    if (t.hydrate_init) return;
    t.hydrate_init = !0;
    let e = t.childNodes;
    if (t.nodeName === "HEAD") {
        const c = [];
        for (let u = 0; u < e.length; u++) {
            const a = e[u];
            a.claim_order !== void 0 && c.push(a)
        }
        e = c
    }
    const n = new Int32Array(e.length + 1),
        i = new Int32Array(e.length);
    n[0] = -1;
    let s = 0;
    for (let c = 0; c < e.length; c++) {
        const u = e[c].claim_order,
            a = (s > 0 && e[n[s]].claim_order <= u ? s + 1 : W(1, s, B => e[n[B]].claim_order, u)) - 1;
        i[c] = n[a] + 1;
        const k = a + 1;
        n[k] = c, s = Math.max(k, s)
    }
    const l = [],
        r = [];
    let o = e.length - 1;
    for (let c = n[s] + 1; c != 0; c = i[c - 1]) {
        for (l.push(e[c - 1]); o >= c; o--) r.push(e[o]);
        o--
    }
    for (; o >= 0; o--) r.push(e[o]);
    l.reverse(), r.sort((c, u) => c.claim_order - u.claim_order);
    for (let c = 0, u = 0; c < r.length; c++) {
        for (; u < l.length && r[c].claim_order >= l[u].claim_order;) u++;
        const a = u < l.length ? l[u] : null;
        t.insertBefore(r[c], a)
    }
}

function K(t, e) {
    t.appendChild(e)
}

function Q(t) {
    if (!t) return document;
    const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
    return e && e.host ? e : t.ownerDocument
}

function Nt(t) {
    const e = w("style");
    return e.textContent = "/* empty */", V(Q(t), e), e.sheet
}

function V(t, e) {
    return K(t.head || t, e), e.sheet
}

function X(t, e) {
    if (y) {
        for (J(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;) t.actual_end_child = t.actual_end_child.nextSibling;
        e !== t.actual_end_child ? (e.claim_order !== void 0 || e.parentNode !== t) && t.insertBefore(e, t.actual_end_child) : t.actual_end_child = e.nextSibling
    } else(e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e)
}

function Y(t, e, n) {
    t.insertBefore(e, n || null)
}

function Z(t, e, n) {
    y && !n ? X(t, e) : (e.parentNode !== t || e.nextSibling != n) && t.insertBefore(e, n || null)
}

function N(t) {
    t.parentNode && t.parentNode.removeChild(t)
}

function Tt(t, e) {
    for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e)
}

function w(t) {
    return document.createElement(t)
}

function S(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t)
}

function A(t) {
    return document.createTextNode(t)
}

function vt() {
    return A(" ")
}

function wt() {
    return A("")
}

function At(t, e, n, i) {
    return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i)
}

function kt(t) {
    return function(e) {
        return e.preventDefault(), t.call(this, e)
    }
}

function Dt(t) {
    return function(e) {
        return e.stopPropagation(), t.call(this, e)
    }
}

function Ht(t, e, n) {
    n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n)
}

function Lt(t) {
    return t.dataset.svelteH
}

function Mt(t) {
    return Array.from(t.childNodes)
}

function C(t) {
    t.claim_info === void 0 && (t.claim_info = {
        last_index: 0,
        total_claimed: 0
    })
}

function P(t, e, n, i, s = !1) {
    C(t);
    const l = (() => {
        for (let r = t.claim_info.last_index; r < t.length; r++) {
            const o = t[r];
            if (e(o)) {
                const c = n(o);
                return c === void 0 ? t.splice(r, 1) : t[r] = c, s || (t.claim_info.last_index = r), o
            }
        }
        for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
            const o = t[r];
            if (e(o)) {
                const c = n(o);
                return c === void 0 ? t.splice(r, 1) : t[r] = c, s ? c === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = r, o
            }
        }
        return i()
    })();
    return l.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, l
}

function j(t, e, n, i) {
    return P(t, s => s.nodeName === e, s => {
        const l = [];
        for (let r = 0; r < s.attributes.length; r++) {
            const o = s.attributes[r];
            n[o.name] || l.push(o.name)
        }
        l.forEach(r => s.removeAttribute(r))
    }, () => i(e))
}

function St(t, e, n) {
    return j(t, e, n, w)
}

function Ct(t, e, n) {
    return j(t, e, n, S)
}

function $(t, e) {
    return P(t, n => n.nodeType === 3, n => {
        const i = "" + e;
        if (n.data.startsWith(i)) {
            if (n.data.length !== i.length) return n.splitText(i.length)
        } else n.data = i
    }, () => A(e), !0)
}

function Pt(t) {
    return $(t, " ")
}

function D(t, e, n) {
    for (let i = n; i < t.length; i += 1) {
        const s = t[i];
        if (s.nodeType === 8 && s.textContent.trim() === e) return i
    }
    return -1
}

function jt(t, e) {
    const n = D(t, "HTML_TAG_START", 0),
        i = D(t, "HTML_TAG_END", n + 1);
    if (n === -1 || i === -1) return new b(e);
    C(t);
    const s = t.splice(n, i - n + 1);
    N(s[0]), N(s[s.length - 1]);
    const l = s.slice(1, s.length - 1);
    if (l.length === 0) return new b(e);
    for (const r of l) r.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1;
    return new b(e, l)
}

function qt(t, e) {
    e = "" + e, t.data !== e && (t.data = e)
}

function Bt(t, e) {
    t.value = e ? ? ""
}

function Rt(t, e, n, i) {
    n == null ? t.style.removeProperty(e) : t.style.setProperty(e, n, "")
}

function Ot(t, e, n) {
    for (let i = 0; i < t.options.length; i += 1) {
        const s = t.options[i];
        if (s.__value === e) {
            s.selected = !0;
            return
        }
    }(!n || e !== void 0) && (t.selectedIndex = -1)
}

function Ft(t) {
    const e = t.querySelector(":checked");
    return e && e.__value
}

function Gt(t, e, n) {
    t.classList.toggle(e, !!n)
}

function tt(t, e, {
    bubbles: n = !1,
    cancelable: i = !1
} = {}) {
    return new CustomEvent(t, {
        detail: e,
        bubbles: n,
        cancelable: i
    })
}

function It(t, e) {
    const n = [];
    let i = 0;
    for (const s of e.childNodes)
        if (s.nodeType === 8) {
            const l = s.textContent.trim();
            l === `HEAD_${t}_END` ? (i -= 1, n.push(s)) : l === `HEAD_${t}_START` && (i += 1, n.push(s))
        } else i > 0 && n.push(s);
    return n
}
class et {
    constructor(e = !1) {
        f(this, "is_svg", !1);
        f(this, "e");
        f(this, "n");
        f(this, "t");
        f(this, "a");
        this.is_svg = e, this.e = this.n = null
    }
    c(e) {
        this.h(e)
    }
    m(e, n, i = null) {
        this.e || (this.is_svg ? this.e = S(n.nodeName) : this.e = w(n.nodeType === 11 ? "TEMPLATE" : n.nodeName), this.t = n.tagName !== "TEMPLATE" ? n : n.content, this.c(e)), this.i(i)
    }
    h(e) {
        this.e.innerHTML = e, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes)
    }
    i(e) {
        for (let n = 0; n < this.n.length; n += 1) Y(this.t, this.n[n], e)
    }
    p(e) {
        this.d(), this.h(e), this.i(this.a)
    }
    d() {
        this.n.forEach(N)
    }
}
class b extends et {
    constructor(n = !1, i) {
        super(n);
        f(this, "l");
        this.e = this.n = null, this.l = i
    }
    c(n) {
        this.l ? this.n = this.l : super.c(n)
    }
    i(n) {
        for (let i = 0; i < this.n.length; i += 1) Z(this.t, this.n[i], n)
    }
}

function zt(t, e) {
    return new t(e)
}
let p;

function x(t) {
    p = t
}

function g() {
    if (!p) throw new Error("Function called outside component initialization");
    return p
}

function Ut(t) {
    g().$$.on_mount.push(t)
}

function Wt(t) {
    g().$$.after_update.push(t)
}

function Jt(t) {
    g().$$.on_destroy.push(t)
}

function Kt() {
    const t = g();
    return (e, n, {
        cancelable: i = !1
    } = {}) => {
        const s = t.$$.callbacks[e];
        if (s) {
            const l = tt(e, n, {
                cancelable: i
            });
            return s.slice().forEach(r => {
                r.call(t, l)
            }), !l.defaultPrevented
        }
        return !0
    }
}
const h = [],
    H = [];
let d = [];
const T = [],
    q = Promise.resolve();
let v = !1;

function nt() {
    v || (v = !0, q.then(st))
}

function Qt() {
    return nt(), q
}

function it(t) {
    d.push(t)
}

function Vt(t) {
    T.push(t)
}
const E = new Set;
let _ = 0;

function st() {
    if (_ !== 0) return;
    const t = p;
    do {
        try {
            for (; _ < h.length;) {
                const e = h[_];
                _++, x(e), rt(e.$$)
            }
        } catch (e) {
            throw h.length = 0, _ = 0, e
        }
        for (x(null), h.length = 0, _ = 0; H.length;) H.pop()();
        for (let e = 0; e < d.length; e += 1) {
            const n = d[e];
            E.has(n) || (E.add(n), n())
        }
        d.length = 0
    } while (h.length);
    for (; T.length;) T.pop()();
    v = !1, E.clear(), x(t)
}

function rt(t) {
    if (t.fragment !== null) {
        t.update(), I(t.before_update);
        const e = t.dirty;
        t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(it)
    }
}

function Xt(t) {
    const e = [],
        n = [];
    d.forEach(i => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach(i => i()), d = e
}
export {
    Xt as $, lt as A, bt as B, S as C, Ct as D, Rt as E, Kt as F, kt as G, Ut as H, Tt as I, it as J, Ot as K, Ft as L, Bt as M, Gt as N, Dt as O, gt as P, st as Q, Wt as R, Jt as S, F as T, yt as U, Q as V, Nt as W, z as X, tt as Y, ot as Z, ft as _, vt as a, p as a0, x as a1, G as a2, h as a3, nt as a4, xt as a5, Et as a6, b as a7, jt as a8, at as a9, zt as aa, Qt as ab, _t as b, Pt as c, N as d, wt as e, dt as f, pt as g, It as h, Z as i, ht as j, w as k, St as l, Lt as m, Mt as n, Ht as o, X as p, At as q, L as r, ut as s, I as t, mt as u, A as v, $ as w, qt as x, H as y, Vt as z
};