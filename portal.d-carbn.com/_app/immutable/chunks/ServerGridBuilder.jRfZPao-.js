var gn = Object.defineProperty;
var pn = (t, e, r) => e in t ? gn(t, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : t[e] = r;
var Z = (t, e, r) => (pn(t, typeof e != "symbol" ? e + "" : e, r), r);
import {
    r as $,
    A as _n,
    s as He,
    k as w,
    l as O,
    m as ke,
    o as E,
    i as R,
    d as _,
    X as Gt,
    n as y,
    p as v,
    q as Y,
    F as zt,
    a as N,
    c as H,
    K as dt,
    I as Ke,
    v as F,
    w as B,
    x as be,
    M as ct,
    P as zr,
    t as yt,
    C as U,
    D as G,
    J as vn,
    L as mn,
    H as bn,
    E as er,
    N as ve,
    e as xe,
    a7 as Zr,
    a8 as Wr
} from "./scheduler.Bal8Y2GG.js";
import {
    n as En,
    l as yn,
    j as Dn,
    k as Tn,
    S as Pe,
    i as Ve,
    g as ft,
    d as ht,
    t as oe,
    b as de,
    c as Le,
    a as Ce,
    m as Re,
    e as Me
} from "./index.BruxqCn-.js";
import {
    e as ae,
    u as jr,
    f as xr
} from "./each.DikZgPhP.js";
import {
    c as wn
} from "./index.CvmYViMX.js";

function Yr(t, e, r, n) {
    if (!e) return $;
    const a = t.getBoundingClientRect();
    if (e.left === a.left && e.right === a.right && e.top === a.top && e.bottom === a.bottom) return $;
    const {
        delay: i = 0,
        duration: s = 300,
        easing: l = _n,
        start: c = En() + i,
        end: o = c + s,
        tick: u = $,
        css: d
    } = r(t, {
        from: e,
        to: a
    }, n);
    let f = !0,
        p = !1,
        b;

    function D() {
        d && (b = Dn(t, 0, 1, s, i, l, d)), i || (p = !0)
    }

    function T() {
        d && Tn(t, b), f = !1
    }
    return yn(g => {
        if (!p && g >= c && (p = !0), p && g >= o && (u(1, 0), T()), !f) return !1;
        if (p) {
            const h = g - c,
                m = 0 + 1 * l(h / s);
            u(m, 1 - m)
        }
        return !0
    }), D(), u(0, 1), T
}

function $r(t) {
    const e = getComputedStyle(t);
    if (e.position !== "absolute" && e.position !== "fixed") {
        const {
            width: r,
            height: n
        } = e, a = t.getBoundingClientRect();
        t.style.position = "absolute", t.style.width = r, t.style.height = n, On(t, a)
    }
}

function On(t, e) {
    const r = t.getBoundingClientRect();
    if (e.left !== r.left || e.top !== r.top) {
        const n = getComputedStyle(t),
            a = n.transform === "none" ? "" : n.transform;
        t.style.transform = `${a} translate(${e.left-r.left}px, ${e.top-r.top}px)`
    }
}

function kn(t) {
    let e, r = '<div class="lds-roller"><div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div></div>';
    return {
        c() {
            e = w("div"), e.innerHTML = r, this.h()
        },
        l(n) {
            e = O(n, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), ke(e) !== "svelte-5jkgh9" && (e.innerHTML = r), this.h()
        },
        h() {
            E(e, "class", "loading-wrapper")
        },
        m(n, a) {
            R(n, e, a)
        },
        p: $,
        i: $,
        o: $,
        d(n) {
            n && _(e)
        }
    }
}
class In extends Pe {
    constructor(e) {
        super(), Ve(this, e, null, kn, He, {})
    }
}

function qr(t, {
    from: e,
    to: r
}, n = {}) {
    const a = getComputedStyle(t),
        i = a.transform === "none" ? "" : a.transform,
        [s, l] = a.transformOrigin.split(" ").map(parseFloat),
        c = e.left + e.width * s / r.width - (r.left + s),
        o = e.top + e.height * l / r.height - (r.top + l),
        {
            delay: u = 0,
            duration: d = p => Math.sqrt(p) * 120,
            easing: f = wn
        } = n;
    return {
        delay: u,
        duration: Gt(d) ? d(Math.sqrt(c * c + o * o)) : d,
        easing: f,
        css: (p, b) => {
            const D = b * c,
                T = b * o,
                g = p + b * e.width / r.width,
                h = p + b * e.height / r.height;
            return `transform: ${i} translate(${D}px, ${T}px) scale(${g}, ${h});`
        }
    }
}

function tr(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e && (n = n.filter(function(a) {
            return Object.getOwnPropertyDescriptor(t, a).enumerable
        })), r.push.apply(r, n)
    }
    return r
}

function gt(t) {
    for (var e = 1; e < arguments.length; e++) {
        var r = arguments[e] != null ? arguments[e] : {};
        e % 2 ? tr(Object(r), !0).forEach(function(n) {
            Ye(t, n, r[n])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : tr(Object(r)).forEach(function(n) {
            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n))
        })
    }
    return t
}

function Je(t) {
    "@babel/helpers - typeof";
    return Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e
    } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, Je(t)
}

function Ye(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t
}

function Sn(t, e) {
    if (t == null) return {};
    var r = {},
        n = Object.keys(t),
        a, i;
    for (i = 0; i < n.length; i++) a = n[i], !(e.indexOf(a) >= 0) && (r[a] = t[a]);
    return r
}

function An(t, e) {
    if (t == null) return {};
    var r = Sn(t, e),
        n, a;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        for (a = 0; a < i.length; a++) n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
    }
    return r
}

function Ln(t, e) {
    return Rn(t) || Nn(t, e) || Zt(t, e) || Pn()
}

function me(t) {
    return Cn(t) || Mn(t) || Zt(t) || Hn()
}

function Cn(t) {
    if (Array.isArray(t)) return Rt(t)
}

function Rn(t) {
    if (Array.isArray(t)) return t
}

function Mn(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t)
}

function Nn(t, e) {
    var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (r != null) {
        var n = [],
            a = !0,
            i = !1,
            s, l;
        try {
            for (r = r.call(t); !(a = (s = r.next()).done) && (n.push(s.value), !(e && n.length === e)); a = !0);
        } catch (c) {
            i = !0, l = c
        } finally {
            try {
                !a && r.return != null && r.return()
            } finally {
                if (i) throw l
            }
        }
        return n
    }
}

function Zt(t, e) {
    if (t) {
        if (typeof t == "string") return Rt(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rt(t, e)
    }
}

function Rt(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
    return n
}

function Hn() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function Pn() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function nt(t, e) {
    var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (!r) {
        if (Array.isArray(t) || (r = Zt(t)) || e) {
            r && (t = r);
            var n = 0,
                a = function() {};
            return {
                s: a,
                n: function() {
                    return n >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[n++]
                    }
                },
                e: function(c) {
                    throw c
                },
                f: a
            }
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var i = !0,
        s = !1,
        l;
    return {
        s: function() {
            r = r.call(t)
        },
        n: function() {
            var c = r.next();
            return i = c.done, c
        },
        e: function(c) {
            s = !0, l = c
        },
        f: function() {
            try {
                !i && r.return != null && r.return()
            } finally {
                if (s) throw l
            }
        }
    }
}
var Vn = "finalize",
    Fn = "consider";

function $e(t, e, r) {
    t.dispatchEvent(new CustomEvent(Vn, {
        detail: {
            items: e,
            info: r
        }
    }))
}

function Ne(t, e, r) {
    t.dispatchEvent(new CustomEvent(Fn, {
        detail: {
            items: e,
            info: r
        }
    }))
}
var Dt = "draggedEntered",
    it = "draggedLeft",
    Tt = "draggedOverIndex",
    Wt = "draggedLeftDocument",
    pt = {
        LEFT_FOR_ANOTHER: "leftForAnother",
        OUTSIDE_OF_ANY: "outsideOfAny"
    };

function Bn(t, e, r) {
    t.dispatchEvent(new CustomEvent(Dt, {
        detail: {
            indexObj: e,
            draggedEl: r
        }
    }))
}

function Un(t, e, r) {
    t.dispatchEvent(new CustomEvent(it, {
        detail: {
            draggedEl: e,
            type: pt.LEFT_FOR_ANOTHER,
            theOtherDz: r
        }
    }))
}

function Gn(t, e) {
    t.dispatchEvent(new CustomEvent(it, {
        detail: {
            draggedEl: e,
            type: pt.OUTSIDE_OF_ANY
        }
    }))
}

function zn(t, e, r) {
    t.dispatchEvent(new CustomEvent(Tt, {
        detail: {
            indexObj: e,
            draggedEl: r
        }
    }))
}

function Zn(t) {
    window.dispatchEvent(new CustomEvent(Wt, {
        detail: {
            draggedEl: t
        }
    }))
}
var ue = {
        DRAG_STARTED: "dragStarted",
        DRAGGED_ENTERED: Dt,
        DRAGGED_ENTERED_ANOTHER: "dragEnteredAnother",
        DRAGGED_OVER_INDEX: Tt,
        DRAGGED_LEFT: it,
        DRAGGED_LEFT_ALL: "draggedLeftAll",
        DROPPED_INTO_ZONE: "droppedIntoZone",
        DROPPED_INTO_ANOTHER: "droppedIntoAnother",
        DROPPED_OUTSIDE_OF_ANY: "droppedOutsideOfAny",
        DRAG_STOPPED: "dragStopped"
    },
    fe = {
        POINTER: "pointer",
        KEYBOARD: "keyboard"
    },
    wt = "isDndShadowItem",
    jt = "data-is-dnd-shadow-item-internal",
    Wn = "data-is-dnd-shadow-item-hint",
    jn = "id:dnd-shadow-placeholder-0000",
    xn = "dnd-action-dragged-el",
    X = "id",
    Mt = 0;

function Kr() {
    Mt++
}

function Qr() {
    if (Mt === 0) throw new Error("Bug! trying to decrement when there are no dropzones");
    Mt--
}
var xt = typeof window > "u";

function Nt(t) {
    var e, r = t.getBoundingClientRect(),
        n = getComputedStyle(t),
        a = n.transform;
    if (a) {
        var i, s, l, c;
        if (a.startsWith("matrix3d(")) e = a.slice(9, -1).split(/, /), i = +e[0], s = +e[5], l = +e[12], c = +e[13];
        else if (a.startsWith("matrix(")) e = a.slice(7, -1).split(/, /), i = +e[0], s = +e[3], l = +e[4], c = +e[5];
        else return r;
        var o = n.transformOrigin,
            u = r.x - l - (1 - i) * parseFloat(o),
            d = r.y - c - (1 - s) * parseFloat(o.slice(o.indexOf(" ") + 1)),
            f = i ? r.width / i : t.offsetWidth,
            p = s ? r.height / s : t.offsetHeight;
        return {
            x: u,
            y: d,
            width: f,
            height: p,
            top: d,
            right: u + f,
            bottom: d + p,
            left: u
        }
    } else return r
}

function Xr(t) {
    var e = Nt(t);
    return {
        top: e.top + window.scrollY,
        bottom: e.bottom + window.scrollY,
        left: e.left + window.scrollX,
        right: e.right + window.scrollX
    }
}

function Jr(t) {
    var e = t.getBoundingClientRect();
    return {
        top: e.top + window.scrollY,
        bottom: e.bottom + window.scrollY,
        left: e.left + window.scrollX,
        right: e.right + window.scrollX
    }
}

function en(t) {
    return {
        x: (t.left + t.right) / 2,
        y: (t.top + t.bottom) / 2
    }
}

function Yn(t, e) {
    return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
}

function Ot(t, e) {
    return t.y <= e.bottom && t.y >= e.top && t.x >= e.left && t.x <= e.right
}

function et(t) {
    return en(Jr(t))
}

function rr(t, e) {
    var r = et(t),
        n = Xr(e);
    return Ot(r, n)
}

function $n(t, e) {
    var r = et(t),
        n = et(e);
    return Yn(r, n)
}

function qn(t) {
    var e = Jr(t);
    return e.right < 0 || e.left > document.documentElement.scrollWidth || e.bottom < 0 || e.top > document.documentElement.scrollHeight
}
var We;

function Yt() {
    We = new Map
}
Yt();

function Kn(t) {
    var e = Array.from(t.children).findIndex(function(r) {
        return r.getAttribute(jt)
    });
    if (e >= 0) return We.has(t) || We.set(t, new Map), We.get(t).set(e, Xr(t.children[e])), e
}

function Qn(t, e) {
    if (!rr(t, e)) return null;
    var r = e.children;
    if (r.length === 0) return {
        index: 0,
        isProximityBased: !0
    };
    for (var n = Kn(e), a = 0; a < r.length; a++)
        if (rr(t, r[a])) {
            var i = We.has(e) && We.get(e).get(a);
            return i && !Ot(et(t), i) ? {
                index: n,
                isProximityBased: !1
            } : {
                index: a,
                isProximityBased: !1
            }
        }
    for (var s = Number.MAX_VALUE, l = void 0, c = 0; c < r.length; c++) {
        var o = $n(t, r[c]);
        o < s && (s = o, l = c)
    }
    return {
        index: l,
        isProximityBased: !0
    }
}

function lt(t) {
    return JSON.stringify(t, null, 2)
}

function _t(t) {
    if (!t) throw new Error("cannot get depth of a falsy node");
    return tn(t, 0)
}

function tn(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return t.parentElement ? tn(t.parentElement, e + 1) : e - 1
}

function Xn(t, e) {
    if (Object.keys(t).length !== Object.keys(e).length) return !1;
    for (var r in t)
        if (!{}.hasOwnProperty.call(e, r) || e[r] !== t[r]) return !1;
    return !0
}

function Jn(t, e) {
    if (t.length !== e.length) return !1;
    for (var r = 0; r < t.length; r++)
        if (t[r] !== e[r]) return !1;
    return !0
}
var ei = 200,
    nr = 10,
    Ht;

function ti(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ei,
        n = arguments.length > 3 ? arguments[3] : void 0,
        a, i, s = !1,
        l, c = Array.from(e).sort(function(u, d) {
            return _t(d) - _t(u)
        });

    function o() {
        var u = et(t),
            d = n.multiScrollIfNeeded();
        if (!d && l && Math.abs(l.x - u.x) < nr && Math.abs(l.y - u.y) < nr) {
            Ht = window.setTimeout(o, r);
            return
        }
        if (qn(t)) {
            Zn(t);
            return
        }
        l = u;
        var f = !1,
            p = nt(c),
            b;
        try {
            for (p.s(); !(b = p.n()).done;) {
                var D = b.value;
                d && Yt();
                var T = Qn(t, D);
                if (T !== null) {
                    var g = T.index;
                    f = !0, D !== a ? (a && Un(a, t, D), Bn(D, T, t), a = D) : g !== i && (zn(D, T, t), i = g);
                    break
                }
            }
        } catch (h) {
            p.e(h)
        } finally {
            p.f()
        }!f && s && a ? (Gn(a, t), a = void 0, i = void 0, s = !1) : s = !0, Ht = window.setTimeout(o, r)
    }
    o()
}

function ri() {
    clearTimeout(Ht), Yt()
}
var Xe = 30;

function ni() {
    var t;

    function e() {
        t = {
            directionObj: void 0,
            stepPx: 0
        }
    }
    e();

    function r(i) {
        var s = t,
            l = s.directionObj,
            c = s.stepPx;
        l && (i.scrollBy(l.x * c, l.y * c), window.requestAnimationFrame(function() {
            return r(i)
        }))
    }

    function n(i) {
        return Xe - i
    }

    function a(i, s) {
        if (!s) return !1;
        var l = ii(i, s);
        if (l === null) return e(), !1;
        var c = !!t.directionObj,
            o = !1,
            u = !1;
        return s.scrollHeight > s.clientHeight && (l.bottom < Xe ? (o = !0, t.directionObj = {
            x: 0,
            y: 1
        }, t.stepPx = n(l.bottom)) : l.top < Xe && (o = !0, t.directionObj = {
            x: 0,
            y: -1
        }, t.stepPx = n(l.top)), !c && o) || s.scrollWidth > s.clientWidth && (l.right < Xe ? (u = !0, t.directionObj = {
            x: 1,
            y: 0
        }, t.stepPx = n(l.right)) : l.left < Xe && (u = !0, t.directionObj = {
            x: -1,
            y: 0
        }, t.stepPx = n(l.left)), !c && u) ? (r(s), !0) : (e(), !1)
    }
    return {
        scrollIfNeeded: a,
        resetScrolling: e
    }
}

function ii(t, e) {
    var r = e === document.scrollingElement ? {
        top: 0,
        bottom: window.innerHeight,
        left: 0,
        right: window.innerWidth
    } : e.getBoundingClientRect();
    return Ot(t, r) ? {
        top: t.y - r.top,
        bottom: r.bottom - t.y,
        left: t.x - r.left,
        right: r.right - t.x
    } : null
}

function ai() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
        e = arguments.length > 1 ? arguments[1] : void 0,
        r = si(t),
        n = Array.from(r).sort(function(l, c) {
            return _t(c) - _t(l)
        }),
        a = ni(),
        i = a.scrollIfNeeded;

    function s() {
        var l = e();
        if (!l || !n) return !1;
        for (var c = n.filter(function(d) {
                return Ot(l, d.getBoundingClientRect()) || d === document.scrollingElement
            }), o = 0; o < c.length; o++) {
            var u = i(l, c[o]);
            if (u) return !0
        }
        return !1
    }
    return {
        multiScrollIfNeeded: r.size > 0 ? s : function() {
            return !1
        }
    }
}

function li(t) {
    if (!t) return [];
    for (var e = [], r = t; r;) {
        var n = window.getComputedStyle(r),
            a = n.overflow;
        a.split(" ").some(function(i) {
            return i.includes("auto") || i.includes("scroll")
        }) && e.push(r), r = r.parentElement
    }
    return e
}

function si(t) {
    var e = new Set,
        r = nt(t),
        n;
    try {
        for (r.s(); !(n = r.n()).done;) {
            var a = n.value;
            li(a).forEach(function(i) {
                return e.add(i)
            })
        }
    } catch (i) {
        r.e(i)
    } finally {
        r.f()
    }
    return (document.scrollingElement.scrollHeight > document.scrollingElement.clientHeight || document.scrollingElement.scrollWidth > document.scrollingElement.clientHeight) && e.add(document.scrollingElement), e
}

function oi(t) {
    var e = t.cloneNode(!0),
        r = [],
        n = t.tagName === "SELECT",
        a = n ? [t] : me(t.querySelectorAll("select")),
        i = nt(a),
        s;
    try {
        for (i.s(); !(s = i.n()).done;) {
            var l = s.value;
            r.push(l.value)
        }
    } catch (m) {
        i.e(m)
    } finally {
        i.f()
    }
    if (a.length > 0)
        for (var c = n ? [e] : me(e.querySelectorAll("select")), o = 0; o < c.length; o++) {
            var u = c[o],
                d = r[o],
                f = u.querySelector('option[value="'.concat(d, '"'));
            f && f.setAttribute("selected", !0)
        }
    var p = t.tagName === "CANVAS",
        b = p ? [t] : me(t.querySelectorAll("canvas"));
    if (b.length > 0)
        for (var D = p ? [e] : me(e.querySelectorAll("canvas")), T = 0; T < D.length; T++) {
            var g = b[T],
                h = D[T];
            h.width = g.width, h.height = g.height, h.getContext("2d").drawImage(g, 0, 0)
        }
    return e
}
var tt = Object.freeze({
        USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
    }),
    ui = Ye({}, tt.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);

function rn(t) {
    if (!tt[t]) throw new Error("Can't get non existing feature flag ".concat(t, "! Supported flags: ").concat(Object.keys(tt)));
    return ui[t]
}
var di = .2;

function Fe(t) {
    return "".concat(t, " ").concat(di, "s ease")
}

function ci(t, e) {
    var r = t.getBoundingClientRect(),
        n = oi(t);
    nn(t, n), n.id = xn, n.style.position = "fixed";
    var a = r.top,
        i = r.left;
    if (n.style.top = "".concat(a, "px"), n.style.left = "".concat(i, "px"), e) {
        var s = en(r);
        a -= s.y - e.y, i -= s.x - e.x, window.setTimeout(function() {
            n.style.top = "".concat(a, "px"), n.style.left = "".concat(i, "px")
        }, 0)
    }
    return n.style.margin = "0", n.style.boxSizing = "border-box", n.style.height = "".concat(r.height, "px"), n.style.width = "".concat(r.width, "px"), n.style.transition = "".concat(Fe("top"), ", ").concat(Fe("left"), ", ").concat(Fe("background-color"), ", ").concat(Fe("opacity"), ", ").concat(Fe("color"), " "), window.setTimeout(function() {
        return n.style.transition += ", ".concat(Fe("width"), ", ").concat(Fe("height"))
    }, 0), n.style.zIndex = "9999", n.style.cursor = "grabbing", n
}

function fi(t) {
    t.style.cursor = "grab"
}

function hi(t, e, r, n) {
    nn(e, t);
    var a = e.getBoundingClientRect(),
        i = t.getBoundingClientRect(),
        s = a.width - i.width,
        l = a.height - i.height;
    if (s || l) {
        var c = {
            left: (r - i.left) / i.width,
            top: (n - i.top) / i.height
        };
        rn(tt.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) || (t.style.height = "".concat(a.height, "px"), t.style.width = "".concat(a.width, "px")), t.style.left = "".concat(parseFloat(t.style.left) - c.left * s, "px"), t.style.top = "".concat(parseFloat(t.style.top) - c.top * l, "px")
    }
}

function nn(t, e) {
    var r = window.getComputedStyle(t);
    Array.from(r).filter(function(n) {
        return n.startsWith("background") || n.startsWith("padding") || n.startsWith("font") || n.startsWith("text") || n.startsWith("align") || n.startsWith("justify") || n.startsWith("display") || n.startsWith("flex") || n.startsWith("border") || n === "opacity" || n === "color" || n === "list-style-type" || rn(tt.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) && (n === "width" || n === "height")
    }).forEach(function(n) {
        return e.style.setProperty(n, r.getPropertyValue(n), r.getPropertyPriority(n))
    })
}

function gi(t, e) {
    t.draggable = !1, t.ondragstart = function() {
        return !1
    }, e ? (t.style.userSelect = "", t.style.WebkitUserSelect = "", t.style.cursor = "") : (t.style.userSelect = "none", t.style.WebkitUserSelect = "none", t.style.cursor = "grab")
}

function an(t) {
    t.style.display = "none", t.style.position = "fixed", t.style.zIndex = "-5"
}

function pi(t) {
    t.style.visibility = "hidden", t.setAttribute(jt, "true")
}

function _i(t) {
    t.style.visibility = "", t.removeAttribute(jt)
}

function ot(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {},
        r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
            return []
        };
    t.forEach(function(n) {
        var a = e(n);
        Object.keys(a).forEach(function(i) {
            n.style[i] = a[i]
        }), r(n).forEach(function(i) {
            return n.classList.add(i)
        })
    })
}

function vt(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {},
        r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
            return []
        };
    t.forEach(function(n) {
        var a = e(n);
        Object.keys(a).forEach(function(i) {
            n.style[i] = ""
        }), r(n).forEach(function(i) {
            return n.classList.contains(i) && n.classList.remove(i)
        })
    })
}

function vi(t) {
    var e = t.style.minHeight;
    t.style.minHeight = window.getComputedStyle(t).getPropertyValue("height");
    var r = t.style.minWidth;
    return t.style.minWidth = window.getComputedStyle(t).getPropertyValue("width"),
        function() {
            t.style.minHeight = e, t.style.minWidth = r
        }
}
var mi = "--any--",
    bi = 100,
    Ei = 20,
    ir = 3,
    ar = {
        outline: "rgba(255, 255, 102, 0.7) solid 2px"
    },
    lr = "data-is-dnd-original-dragged-item",
    Te, te, ce, kt, W, It, Ae, ne, Ie, ge, Ue = !1,
    $t = !1,
    qt, at = !1,
    ut = [],
    De = new Map,
    K = new Map,
    Ct = new WeakMap;

function yi(t, e) {
    De.has(e) || De.set(e, new Set), De.get(e).has(t) || (De.get(e).add(t), Kr())
}

function sr(t, e) {
    De.get(e).delete(t), Qr(), De.get(e).size === 0 && De.delete(e)
}

function Di() {
    var t = De.get(kt),
        e = nt(t),
        r;
    try {
        for (e.s(); !(r = e.n()).done;) {
            var n = r.value;
            n.addEventListener(Dt, ln), n.addEventListener(it, sn), n.addEventListener(Tt, on)
        }
    } catch (l) {
        e.e(l)
    } finally {
        e.f()
    }
    window.addEventListener(Wt, qe);
    var a = Math.max.apply(Math, me(Array.from(t.keys()).map(function(l) {
            return K.get(l).dropAnimationDurationMs
        }))),
        i = a === 0 ? Ei : Math.max(a, bi),
        s = ai(t, function() {
            return ge
        });
    ti(te, t, i * 1.07, s)
}

function Ti() {
    var t = De.get(kt),
        e = nt(t),
        r;
    try {
        for (e.s(); !(r = e.n()).done;) {
            var n = r.value;
            n.removeEventListener(Dt, ln), n.removeEventListener(it, sn), n.removeEventListener(Tt, on)
        }
    } catch (a) {
        e.e(a)
    } finally {
        e.f()
    }
    window.removeEventListener(Wt, qe), ri()
}

function St(t) {
    return t.findIndex(function(e) {
        return !!e[wt]
    })
}

function wi(t) {
    var e;
    return gt(gt({}, t), {}, (e = {}, Ye(e, wt, !0), Ye(e, X, jn), e))
}

function ln(t) {
    var e = K.get(t.currentTarget),
        r = e.items,
        n = e.dropFromOthersDisabled;
    if (!(n && t.currentTarget !== W)) {
        if (at = !1, r = r.filter(function(u) {
                return u[X] !== Ae[X]
            }), W !== t.currentTarget) {
            var a = K.get(W).items,
                i = a.filter(function(u) {
                    return !u[wt]
                });
            Ne(W, i, {
                trigger: ue.DRAGGED_ENTERED_ANOTHER,
                id: ce[X],
                source: fe.POINTER
            })
        }
        var s = t.detail.indexObj,
            l = s.index,
            c = s.isProximityBased,
            o = c && l === t.currentTarget.children.length - 1 ? l + 1 : l;
        ne = t.currentTarget, r.splice(o, 0, Ae), Ne(t.currentTarget, r, {
            trigger: ue.DRAGGED_ENTERED,
            id: ce[X],
            source: fe.POINTER
        })
    }
}

function sn(t) {
    if (Ue) {
        var e = K.get(t.currentTarget),
            r = e.items,
            n = e.dropFromOthersDisabled;
        if (!(n && t.currentTarget !== W && t.currentTarget !== ne)) {
            var a = me(r),
                i = St(a);
            i !== -1 && a.splice(i, 1);
            var s = ne;
            ne = void 0;
            var l = t.detail,
                c = l.type,
                o = l.theOtherDz;
            if (c === pt.OUTSIDE_OF_ANY || c === pt.LEFT_FOR_ANOTHER && o !== W && K.get(o).dropFromOthersDisabled) {
                at = !0, ne = W;
                var u = s === W ? a : me(K.get(W).items);
                u.splice(It, 0, Ae), Ne(W, u, {
                    trigger: ue.DRAGGED_LEFT_ALL,
                    id: ce[X],
                    source: fe.POINTER
                })
            }
            Ne(t.currentTarget, a, {
                trigger: ue.DRAGGED_LEFT,
                id: ce[X],
                source: fe.POINTER
            })
        }
    }
}

function on(t) {
    var e = K.get(t.currentTarget),
        r = e.items,
        n = e.dropFromOthersDisabled;
    if (!(n && t.currentTarget !== W)) {
        var a = me(r);
        at = !1;
        var i = t.detail.indexObj.index,
            s = St(a);
        s !== -1 && a.splice(s, 1), a.splice(i, 0, Ae), Ne(t.currentTarget, a, {
            trigger: ue.DRAGGED_OVER_INDEX,
            id: ce[X],
            source: fe.POINTER
        })
    }
}

function mt(t) {
    t.preventDefault();
    var e = t.touches ? t.touches[0] : t;
    ge = {
        x: e.clientX,
        y: e.clientY
    }, te.style.transform = "translate3d(".concat(ge.x - Ie.x, "px, ").concat(ge.y - Ie.y, "px, 0)")
}

function qe() {
    $t = !0, window.removeEventListener("mousemove", mt), window.removeEventListener("touchmove", mt), window.removeEventListener("mouseup", qe), window.removeEventListener("touchend", qe), Ti(), fi(te), ne || (ne = W);
    var t = K.get(ne),
        e = t.items,
        r = t.type;
    vt(De.get(r), function(i) {
        return K.get(i).dropTargetStyle
    }, function(i) {
        return K.get(i).dropTargetClasses
    });
    var n = St(e);
    n === -1 && ne === W && (n = It), e = e.map(function(i) {
        return i[wt] ? ce : i
    });

    function a() {
        qt(), $e(ne, e, {
            trigger: at ? ue.DROPPED_OUTSIDE_OF_ANY : ue.DROPPED_INTO_ZONE,
            id: ce[X],
            source: fe.POINTER
        }), ne !== W && $e(W, K.get(W).items, {
            trigger: ue.DROPPED_INTO_ANOTHER,
            id: ce[X],
            source: fe.POINTER
        }), n !== -1 && _i(ne.children[n]), Ii()
    }
    Oi(n, a)
}

function Oi(t, e) {
    var r = t > -1 ? Nt(ne.children[t]) : Nt(ne),
        n = {
            x: r.left - parseFloat(te.style.left),
            y: r.top - parseFloat(te.style.top)
        },
        a = K.get(ne),
        i = a.dropAnimationDurationMs,
        s = "transform ".concat(i, "ms ease");
    te.style.transition = te.style.transition ? te.style.transition + "," + s : s, te.style.transform = "translate3d(".concat(n.x, "px, ").concat(n.y, "px, 0)"), window.setTimeout(e, i)
}

function ki(t, e) {
    ut.push({
        dz: t,
        destroy: e
    }), window.requestAnimationFrame(function() {
        an(t), document.body.appendChild(t)
    })
}

function Ii() {
    te.remove(), Te.remove(), ut.length && (ut.forEach(function(t) {
        var e = t.dz,
            r = t.destroy;
        r(), e.remove()
    }), ut = []), te = void 0, Te = void 0, ce = void 0, kt = void 0, W = void 0, It = void 0, Ae = void 0, ne = void 0, Ie = void 0, ge = void 0, Ue = !1, $t = !1, qt = void 0, at = !1
}

function Si(t, e) {
    var r = !1,
        n = {
            items: void 0,
            type: void 0,
            flipDurationMs: 0,
            dragDisabled: !1,
            morphDisabled: !1,
            dropFromOthersDisabled: !1,
            dropTargetStyle: ar,
            dropTargetClasses: [],
            transformDraggedElement: function() {},
            centreDraggedOnCursor: !1
        },
        a = new Map;

    function i() {
        window.addEventListener("mousemove", c, {
            passive: !1
        }), window.addEventListener("touchmove", c, {
            passive: !1,
            capture: !1
        }), window.addEventListener("mouseup", l, {
            passive: !1
        }), window.addEventListener("touchend", l, {
            passive: !1
        })
    }

    function s() {
        window.removeEventListener("mousemove", c), window.removeEventListener("touchmove", c), window.removeEventListener("mouseup", l), window.removeEventListener("touchend", l)
    }

    function l() {
        s(), Te = void 0, Ie = void 0, ge = void 0
    }

    function c(f) {
        f.preventDefault();
        var p = f.touches ? f.touches[0] : f;
        ge = {
            x: p.clientX,
            y: p.clientY
        }, (Math.abs(ge.x - Ie.x) >= ir || Math.abs(ge.y - Ie.y) >= ir) && (s(), u())
    }

    function o(f) {
        if (!(f.target !== f.currentTarget && (f.target.value !== void 0 || f.target.isContentEditable)) && !f.button && !Ue) {
            f.stopPropagation();
            var p = f.touches ? f.touches[0] : f;
            Ie = {
                x: p.clientX,
                y: p.clientY
            }, ge = gt({}, Ie), Te = f.currentTarget, i()
        }
    }

    function u() {
        Ue = !0;
        var f = a.get(Te);
        It = f, W = Te.parentElement;
        var p = W.closest("dialog") || W.getRootNode(),
            b = p.body || p,
            D = n.items,
            T = n.type,
            g = n.centreDraggedOnCursor,
            h = me(D);
        ce = h[f], kt = T, Ae = wi(ce), te = ci(Te, g && ge), Te.setAttribute(lr, !0);

        function m() {
            te.parentElement ? window.requestAnimationFrame(m) : (b.appendChild(te), te.focus(), Di(), an(Te), b.appendChild(Te), Ae[X] = ce[X])
        }
        window.requestAnimationFrame(m), ot(Array.from(De.get(n.type)).filter(function(k) {
            return k === W || !K.get(k).dropFromOthersDisabled
        }), function(k) {
            return K.get(k).dropTargetStyle
        }, function(k) {
            return K.get(k).dropTargetClasses
        }), h.splice(f, 1, Ae), qt = vi(W), Ne(W, h, {
            trigger: ue.DRAG_STARTED,
            id: ce[X],
            source: fe.POINTER
        }), window.addEventListener("mousemove", mt, {
            passive: !1
        }), window.addEventListener("touchmove", mt, {
            passive: !1,
            capture: !1
        }), window.addEventListener("mouseup", qe, {
            passive: !1
        }), window.addEventListener("touchend", qe, {
            passive: !1
        })
    }

    function d(f) {
        var p = f.items,
            b = p === void 0 ? void 0 : p,
            D = f.flipDurationMs,
            T = D === void 0 ? 0 : D,
            g = f.type,
            h = g === void 0 ? mi : g,
            m = f.dragDisabled,
            k = m === void 0 ? !1 : m,
            I = f.morphDisabled,
            A = I === void 0 ? !1 : I,
            P = f.dropFromOthersDisabled,
            j = P === void 0 ? !1 : P,
            le = f.dropTargetStyle,
            S = le === void 0 ? ar : le,
            L = f.dropTargetClasses,
            C = L === void 0 ? [] : L,
            z = f.transformDraggedElement,
            M = z === void 0 ? function() {} : z,
            x = f.centreDraggedOnCursor,
            pe = x === void 0 ? !1 : x;
        n.dropAnimationDurationMs = T, n.type && h !== n.type && sr(t, n.type), n.type = h, n.items = me(b), n.dragDisabled = k, n.morphDisabled = A, n.transformDraggedElement = M, n.centreDraggedOnCursor = pe, r && Ue && !$t && (!Xn(S, n.dropTargetStyle) || !Jn(C, n.dropTargetClasses)) && (vt([t], function() {
            return n.dropTargetStyle
        }, function() {
            return C
        }), ot([t], function() {
            return S
        }, function() {
            return C
        })), n.dropTargetStyle = S, n.dropTargetClasses = me(C);

        function V(he, Q) {
            return K.get(he) ? K.get(he)[Q] : n[Q]
        }
        r && Ue && n.dropFromOthersDisabled !== j && (j ? vt([t], function(he) {
            return V(he, "dropTargetStyle")
        }, function(he) {
            return V(he, "dropTargetClasses")
        }) : ot([t], function(he) {
            return V(he, "dropTargetStyle")
        }, function(he) {
            return V(he, "dropTargetClasses")
        })), n.dropFromOthersDisabled = j, K.set(t, n), yi(t, h);
        for (var Ee = St(n.items), Oe = 0; Oe < t.children.length; Oe++) {
            var se = t.children[Oe];
            if (gi(se, k), Oe === Ee) {
                n.transformDraggedElement(te, ce, Oe), A || hi(te, se, ge.x, ge.y), pi(se);
                continue
            }
            se.removeEventListener("mousedown", Ct.get(se)), se.removeEventListener("touchstart", Ct.get(se)), k || (se.addEventListener("mousedown", o), se.addEventListener("touchstart", o), Ct.set(se, o)), a.set(se, Oe), r || (r = !0)
        }
    }
    return d(e), {
        update: function(p) {
            d(p)
        },
        destroy: function() {
            function p() {
                sr(t, K.get(t).type), K.delete(t)
            }
            Ue && !t.closest("[".concat(lr, "]")) ? ki(t, p) : p()
        }
    }
}
var st, Pt = {
        DND_ZONE_ACTIVE: "dnd-zone-active",
        DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
    },
    un = (st = {}, Ye(st, Pt.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Ye(st, Pt.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list"), st),
    Ai = "dnd-action-aria-alert",
    q;

function Vt() {
    q || (q = document.createElement("div"), function() {
        q.id = Ai, q.style.position = "fixed", q.style.bottom = "0", q.style.left = "0", q.style.zIndex = "-5", q.style.opacity = "0", q.style.height = "0", q.style.width = "0", q.setAttribute("role", "alert")
    }(), document.body.prepend(q), Object.entries(un).forEach(function(t) {
        var e = Ln(t, 2),
            r = e[0],
            n = e[1];
        return document.body.prepend(Ri(r, n))
    }))
}

function Li() {
    return xt ? null : (document.readyState === "complete" ? Vt() : window.addEventListener("DOMContentLoaded", Vt), gt({}, Pt))
}

function Ci() {
    xt || !q || (Object.keys(un).forEach(function(t) {
        var e;
        return (e = document.getElementById(t)) === null || e === void 0 ? void 0 : e.remove()
    }), q.remove(), q = void 0)
}

function Ri(t, e) {
    var r = document.createElement("div");
    return r.id = t, r.innerHTML = "<p>".concat(e, "</p>"), r.style.display = "none", r.style.position = "fixed", r.style.zIndex = "-5", r
}

function je(t) {
    if (!xt) {
        q || Vt(), q.innerHTML = "";
        var e = document.createTextNode(t);
        q.appendChild(e), q.style.display = "none", q.style.display = "inline"
    }
}
var Mi = "--any--",
    or = {
        outline: "rgba(255, 255, 102, 0.7) solid 2px"
    },
    _e = !1,
    Ft, ie, Ge = "",
    Be, we, Se = "",
    bt = new WeakSet,
    ur = new WeakMap,
    dr = new WeakMap,
    Bt = new Map,
    ee = new Map,
    ye = new Map,
    Et;

function Ni(t, e) {
    ye.size === 0 && (Et = Li(), window.addEventListener("keydown", dn), window.addEventListener("click", cn)), ye.has(e) || ye.set(e, new Set), ye.get(e).has(t) || (ye.get(e).add(t), Kr())
}

function cr(t, e) {
    ie === t && rt(), ye.get(e).delete(t), Qr(), ye.get(e).size === 0 && ye.delete(e), ye.size === 0 && (window.removeEventListener("keydown", dn), window.removeEventListener("click", cn), Et = void 0, Ci())
}

function dn(t) {
    if (_e) switch (t.key) {
        case "Escape":
            {
                rt();
                break
            }
    }
}

function cn() {
    _e && (bt.has(document.activeElement) || rt())
}

function Hi(t) {
    if (_e) {
        var e = t.currentTarget;
        if (e !== ie) {
            Ge = e.getAttribute("aria-label") || "";
            var r = ee.get(ie),
                n = r.items,
                a = n.find(function(d) {
                    return d[X] === we
                }),
                i = n.indexOf(a),
                s = n.splice(i, 1)[0],
                l = ee.get(e),
                c = l.items,
                o = l.autoAriaDisabled;
            e.getBoundingClientRect().top < ie.getBoundingClientRect().top || e.getBoundingClientRect().left < ie.getBoundingClientRect().left ? (c.push(s), o || je("Moved item ".concat(Se, " to the end of the list ").concat(Ge))) : (c.unshift(s), o || je("Moved item ".concat(Se, " to the beginning of the list ").concat(Ge)));
            var u = ie;
            $e(u, n, {
                trigger: ue.DROPPED_INTO_ANOTHER,
                id: we,
                source: fe.KEYBOARD
            }), $e(e, c, {
                trigger: ue.DROPPED_INTO_ZONE,
                id: we,
                source: fe.KEYBOARD
            }), ie = e
        }
    }
}

function fn() {
    Bt.forEach(function(t, e) {
        var r = t.update;
        return r(ee.get(e))
    })
}

function rt() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    ee.get(ie).autoAriaDisabled || je("Stopped dragging item ".concat(Se)), bt.has(document.activeElement) && document.activeElement.blur(), t && Ne(ie, ee.get(ie).items, {
        trigger: ue.DRAG_STOPPED,
        id: we,
        source: fe.KEYBOARD
    }), vt(ye.get(Ft), function(e) {
        return ee.get(e).dropTargetStyle
    }, function(e) {
        return ee.get(e).dropTargetClasses
    }), Be = null, we = null, Se = "", Ft = null, ie = null, Ge = "", _e = !1, fn()
}

function Pi(t, e) {
    var r = {
        items: void 0,
        type: void 0,
        dragDisabled: !1,
        zoneTabIndex: 0,
        zoneItemTabIndex: 0,
        dropFromOthersDisabled: !1,
        dropTargetStyle: or,
        dropTargetClasses: [],
        autoAriaDisabled: !1
    };

    function n(u, d, f) {
        u.length <= 1 || u.splice(f, 1, u.splice(d, 1, u[f])[0])
    }

    function a(u) {
        switch (u.key) {
            case "Enter":
            case " ":
                {
                    if ((u.target.disabled !== void 0 || u.target.href || u.target.isContentEditable) && !bt.has(u.target)) return;u.preventDefault(),
                    u.stopPropagation(),
                    _e ? rt() : i(u);
                    break
                }
            case "ArrowDown":
            case "ArrowRight":
                {
                    if (!_e) return;u.preventDefault(),
                    u.stopPropagation();
                    var d = ee.get(t),
                        f = d.items,
                        p = Array.from(t.children),
                        b = p.indexOf(u.currentTarget);b < p.length - 1 && (r.autoAriaDisabled || je("Moved item ".concat(Se, " to position ").concat(b + 2, " in the list ").concat(Ge)), n(f, b, b + 1), $e(t, f, {
                        trigger: ue.DROPPED_INTO_ZONE,
                        id: we,
                        source: fe.KEYBOARD
                    }));
                    break
                }
            case "ArrowUp":
            case "ArrowLeft":
                {
                    if (!_e) return;u.preventDefault(),
                    u.stopPropagation();
                    var D = ee.get(t),
                        T = D.items,
                        g = Array.from(t.children),
                        h = g.indexOf(u.currentTarget);h > 0 && (r.autoAriaDisabled || je("Moved item ".concat(Se, " to position ").concat(h, " in the list ").concat(Ge)), n(T, h, h - 1), $e(t, T, {
                        trigger: ue.DROPPED_INTO_ZONE,
                        id: we,
                        source: fe.KEYBOARD
                    }));
                    break
                }
        }
    }

    function i(u) {
        l(u.currentTarget), ie = t, Ft = r.type, _e = !0;
        var d = Array.from(ye.get(r.type)).filter(function(p) {
            return p === ie || !ee.get(p).dropFromOthersDisabled
        });
        if (ot(d, function(p) {
                return ee.get(p).dropTargetStyle
            }, function(p) {
                return ee.get(p).dropTargetClasses
            }), !r.autoAriaDisabled) {
            var f = "Started dragging item ".concat(Se, ". Use the arrow keys to move it within its list ").concat(Ge);
            d.length > 1 && (f += ", or tab to another list in order to move the item into it"), je(f)
        }
        Ne(t, ee.get(t).items, {
            trigger: ue.DRAG_STARTED,
            id: we,
            source: fe.KEYBOARD
        }), fn()
    }

    function s(u) {
        _e && u.currentTarget !== Be && (u.stopPropagation(), rt(!1), i(u))
    }

    function l(u) {
        var d = ee.get(t),
            f = d.items,
            p = Array.from(t.children),
            b = p.indexOf(u);
        Be = u, Be.tabIndex = r.zoneItemTabIndex, we = f[b][X], Se = p[b].getAttribute("aria-label") || ""
    }

    function c(u) {
        var d = u.items,
            f = d === void 0 ? [] : d,
            p = u.type,
            b = p === void 0 ? Mi : p,
            D = u.dragDisabled,
            T = D === void 0 ? !1 : D,
            g = u.zoneTabIndex,
            h = g === void 0 ? 0 : g,
            m = u.zoneItemTabIndex,
            k = m === void 0 ? 0 : m,
            I = u.dropFromOthersDisabled,
            A = I === void 0 ? !1 : I,
            P = u.dropTargetStyle,
            j = P === void 0 ? or : P,
            le = u.dropTargetClasses,
            S = le === void 0 ? [] : le,
            L = u.autoAriaDisabled,
            C = L === void 0 ? !1 : L;
        r.items = me(f), r.dragDisabled = T, r.dropFromOthersDisabled = A, r.zoneTabIndex = h, r.zoneItemTabIndex = k, r.dropTargetStyle = j, r.dropTargetClasses = S, r.autoAriaDisabled = C, r.type && b !== r.type && cr(t, r.type), r.type = b, Ni(t, b), C || (t.setAttribute("aria-disabled", T), t.setAttribute("role", "list"), t.setAttribute("aria-describedby", T ? Et.DND_ZONE_DRAG_DISABLED : Et.DND_ZONE_ACTIVE)), ee.set(t, r), _e ? t.tabIndex = t === ie || Be.contains(t) || r.dropFromOthersDisabled || ie && r.type !== ee.get(ie).type ? -1 : 0 : t.tabIndex = r.zoneTabIndex, t.addEventListener("focus", Hi);
        for (var z = function(pe) {
                var V = t.children[pe];
                bt.add(V), V.tabIndex = _e ? -1 : r.zoneItemTabIndex, C || V.setAttribute("role", "listitem"), V.removeEventListener("keydown", ur.get(V)), V.removeEventListener("click", dr.get(V)), T || (V.addEventListener("keydown", a), ur.set(V, a), V.addEventListener("click", s), dr.set(V, s)), _e && r.items[pe][X] === we && (Be = V, Be.tabIndex = r.zoneItemTabIndex, V.focus())
            }, M = 0; M < t.children.length; M++) z(M)
    }
    c(e);
    var o = {
        update: function(d) {
            c(d)
        },
        destroy: function() {
            cr(t, r.type), ee.delete(t), Bt.delete(t)
        }
    };
    return Bt.set(t, o), o
}
var Vi = ["items", "flipDurationMs", "type", "dragDisabled", "morphDisabled", "dropFromOthersDisabled", "zoneTabIndex", "zoneItemTabIndex", "dropTargetStyle", "dropTargetClasses", "transformDraggedElement", "autoAriaDisabled", "centreDraggedOnCursor"];

function hn(t, e) {
    if (Fi(t)) return {
        update: function() {},
        destroy: function() {}
    };
    fr(e);
    var r = Si(t, e),
        n = Pi(t, e);
    return {
        update: function(i) {
            fr(i), r.update(i), n.update(i)
        },
        destroy: function() {
            r.destroy(), n.destroy()
        }
    }
}

function Fi(t) {
    return !!t.closest("[".concat(Wn, '="true"]'))
}

function fr(t) {
    var e = t.items;
    t.flipDurationMs, t.type, t.dragDisabled, t.morphDisabled, t.dropFromOthersDisabled;
    var r = t.zoneTabIndex,
        n = t.zoneItemTabIndex;
    t.dropTargetStyle;
    var a = t.dropTargetClasses;
    t.transformDraggedElement, t.autoAriaDisabled, t.centreDraggedOnCursor;
    var i = An(t, Vi);
    if (Object.keys(i).length > 0 && console.warn("dndzone will ignore unknown options", i), !e) throw new Error("no 'items' key provided to dndzone");
    var s = e.find(function(l) {
        return !{}.hasOwnProperty.call(l, X)
    });
    if (s) throw new Error("missing '".concat(X, "' property for item ").concat(lt(s)));
    if (a && !Array.isArray(a)) throw new Error("dropTargetClasses should be an array but instead it is a ".concat(Je(a), ", ").concat(lt(a)));
    if (r && !hr(r)) throw new Error("zoneTabIndex should be a number but instead it is a ".concat(Je(r), ", ").concat(lt(r)));
    if (n && !hr(n)) throw new Error("zoneItemTabIndex should be a number but instead it is a ".concat(Je(n), ", ").concat(lt(n)))
}

function hr(t) {
    return !isNaN(t) && function(e) {
        return (e | 0) === e
    }(parseFloat(t))
}

function Bi(t) {
    let e, r, n, a, i;
    return {
        c() {
            e = w("label"), r = w("input"), n = w("span"), this.h()
        },
        l(s) {
            e = O(s, "LABEL", {
                class: !0
            });
            var l = y(e);
            r = O(l, "INPUT", {
                type: !0,
                name: !0,
                id: !0
            }), n = O(l, "SPAN", {}), y(n).forEach(_), l.forEach(_), this.h()
        },
        h() {
            E(r, "type", "checkbox"), r.checked = t[0], E(r, "name", t[1]), E(r, "id", t[1]), E(e, "class", "switch")
        },
        m(s, l) {
            R(s, e, l), v(e, r), v(e, n), a || (i = Y(r, "input", t[2]), a = !0)
        },
        p(s, [l]) {
            l & 1 && (r.checked = s[0]), l & 2 && E(r, "name", s[1]), l & 2 && E(r, "id", s[1])
        },
        i: $,
        o: $,
        d(s) {
            s && _(e), a = !1, i()
        }
    }
}

function Ui(t, e, r) {
    let {
        value: n = !1
    } = e, {
        name: a
    } = e;
    const i = zt();

    function s() {
        r(0, n = !n), i("input", {
            value: n
        })
    }
    return t.$$set = l => {
        "value" in l && r(0, n = l.value), "name" in l && r(1, a = l.name)
    }, [n, a, s]
}
class Gi extends Pe {
    constructor(e) {
        super(), Ve(this, e, Ui, Bi, He, {
            value: 0,
            name: 1
        })
    }
}

function gr(t, e, r) {
    const n = t.slice();
    return n[7] = e[r], n
}

function pr(t) {
    let e, r;
    return {
        c() {
            e = w("p"), r = F(t[1])
        },
        l(n) {
            e = O(n, "P", {});
            var a = y(e);
            r = B(a, t[1]), a.forEach(_)
        },
        m(n, a) {
            R(n, e, a), v(e, r)
        },
        p(n, a) {
            a & 2 && be(r, n[1])
        },
        d(n) {
            n && _(e)
        }
    }
}

function _r(t) {
    let e, r = t[7].label + "",
        n, a, i;
    return {
        c() {
            e = w("option"), n = F(r), a = N(), this.h()
        },
        l(s) {
            e = O(s, "OPTION", {});
            var l = y(e);
            n = B(l, r), a = H(l), l.forEach(_), this.h()
        },
        h() {
            e.__value = i = t[7].id, ct(e, e.__value)
        },
        m(s, l) {
            R(s, e, l), v(e, n), v(e, a)
        },
        p(s, l) {
            l & 4 && r !== (r = s[7].label + "") && be(n, r), l & 4 && i !== (i = s[7].id) && (e.__value = i, ct(e, e.__value))
        },
        d(s) {
            s && _(e)
        }
    }
}

function zi(t) {
    let e, r, n, a, i, s = t[1] && pr(t),
        l = ae(t[2]),
        c = [];
    for (let o = 0; o < l.length; o += 1) c[o] = _r(gr(t, l, o));
    return {
        c() {
            e = w("label"), s && s.c(), r = N(), n = w("select");
            for (let o = 0; o < c.length; o += 1) c[o].c();
            this.h()
        },
        l(o) {
            e = O(o, "LABEL", {
                class: !0
            });
            var u = y(e);
            s && s.l(u), r = H(u), n = O(u, "SELECT", {});
            var d = y(n);
            for (let f = 0; f < c.length; f += 1) c[f].l(d);
            d.forEach(_), u.forEach(_), this.h()
        },
        h() {
            E(e, "class", "shgrid-pkg_select-label")
        },
        m(o, u) {
            R(o, e, u), s && s.m(e, null), v(e, r), v(e, n);
            for (let d = 0; d < c.length; d += 1) c[d] && c[d].m(n, null);
            dt(n, t[0]), a || (i = Y(n, "input", t[4]), a = !0)
        },
        p(o, [u]) {
            if (o[1] ? s ? s.p(o, u) : (s = pr(o), s.c(), s.m(e, r)) : s && (s.d(1), s = null), u & 4) {
                l = ae(o[2]);
                let d;
                for (d = 0; d < l.length; d += 1) {
                    const f = gr(o, l, d);
                    c[d] ? c[d].p(f, u) : (c[d] = _r(f), c[d].c(), c[d].m(n, null))
                }
                for (; d < c.length; d += 1) c[d].d(1);
                c.length = l.length
            }
            u & 5 && dt(n, o[0])
        },
        i: $,
        o: $,
        d(o) {
            o && _(e), s && s.d(), Ke(c, o), a = !1, i()
        }
    }
}

function Zi(t, e, r) {
    let {
        label: n = null
    } = e, {
        value: a
    } = e, {
        options: i
    } = e;
    const s = zt();

    function l(o) {
        r(0, a = o), s("input", {
            value: a
        })
    }
    const c = o => l(o.currentTarget.value);
    return t.$$set = o => {
        "label" in o && r(1, n = o.label), "value" in o && r(0, a = o.value), "options" in o && r(2, i = o.options)
    }, [a, n, i, l, c]
}
class vr extends Pe {
    constructor(e) {
        super(), Ve(this, e, Zi, zi, He, {
            label: 1,
            value: 0,
            options: 2
        })
    }
}

function mr(t, e, r) {
    const n = t.slice();
    return n[15] = e[r], n[17] = r, n
}

function br(t, e) {
    let r, n, a = e[17] === 0 ? "Sort by" : "Then by",
        i, s, l, c, o, u, d, f, p, b, D, T, g = '<svg class="shgrid-pkg_sorter-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Remove sorting layer</title><path d="M19,13H5V11H19V13Z"></path></svg>',
        h, m, k = $,
        I, A, P;

    function j(...L) {
        return e[6](e[17], ...L)
    }
    f = new vr({
        props: {
            value: e[15].key.toString(),
            options: e[0].columns
        }
    }), f.$on("input", j);

    function le(...L) {
        return e[7](e[17], ...L)
    }
    b = new vr({
        props: {
            value: e[15].dir,
            options: [{
                id: "asc",
                label: "Ascending"
            }, {
                id: "desc",
                label: "Descending"
            }]
        }
    }), b.$on("input", le), b.$on("input", e[8]);

    function S() {
        return e[9](e[17])
    }
    return {
        key: t,
        first: null,
        c() {
            r = w("li"), n = w("p"), i = F(a), s = N(), l = U("svg"), c = U("title"), o = F("drag"), u = U("path"), d = N(), Le(f.$$.fragment), p = N(), Le(b.$$.fragment), D = N(), T = w("button"), T.innerHTML = g, h = N(), this.h()
        },
        l(L) {
            r = O(L, "LI", {
                class: !0
            });
            var C = y(r);
            n = O(C, "P", {});
            var z = y(n);
            i = B(z, a), z.forEach(_), s = H(C), l = G(C, "svg", {
                class: !0,
                xmlns: !0,
                viewBox: !0
            });
            var M = y(l);
            c = G(M, "title", {});
            var x = y(c);
            o = B(x, "drag"), x.forEach(_), u = G(M, "path", {
                d: !0
            }), y(u).forEach(_), M.forEach(_), d = H(C), Ce(f.$$.fragment, C), p = H(C), Ce(b.$$.fragment, C), D = H(C), T = O(C, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), ke(T) !== "svelte-wtwqn7" && (T.innerHTML = g), h = H(C), C.forEach(_), this.h()
        },
        h() {
            E(u, "d", "M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"), E(l, "class", "shgrid-pkg_sorter-svg"), E(l, "xmlns", "http://www.w3.org/2000/svg"), E(l, "viewBox", "0 0 24 24"), E(T, "class", "shgrid-pkg_sorter-btn-error"), E(r, "class", "shgrid-pkg_option-sorter-row"), this.first = r
        },
        m(L, C) {
            R(L, r, C), v(r, n), v(n, i), v(r, s), v(r, l), v(l, c), v(c, o), v(l, u), v(r, d), Re(f, r, null), v(r, p), Re(b, r, null), v(r, D), v(r, T), v(r, h), I = !0, A || (P = Y(T, "click", S), A = !0)
        },
        p(L, C) {
            e = L, (!I || C & 8) && a !== (a = e[17] === 0 ? "Sort by" : "Then by") && be(i, a);
            const z = {};
            C & 8 && (z.value = e[15].key.toString()), C & 1 && (z.options = e[0].columns), f.$set(z);
            const M = {};
            C & 8 && (M.value = e[15].dir), b.$set(M)
        },
        r() {
            m = r.getBoundingClientRect()
        },
        f() {
            $r(r), k()
        },
        a() {
            k(), k = Yr(r, m, qr, {
                duration: e[2]
            })
        },
        i(L) {
            I || (oe(f.$$.fragment, L), oe(b.$$.fragment, L), I = !0)
        },
        o(L) {
            de(f.$$.fragment, L), de(b.$$.fragment, L), I = !1
        },
        d(L) {
            L && _(r), Me(f), Me(b), A = !1, P()
        }
    }
}

function Wi(t) {
    let e, r, n = "Sorting",
        a, i, s = [],
        l = new Map,
        c, o, u, d = '<span>Add Sorting Layer</span> <svg class="shgrid-pkg_sorter-add-sorter-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Add sorting layer</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg>',
        f, p, b, D = ae(t[3]);
    const T = g => g[15].id;
    for (let g = 0; g < D.length; g += 1) {
        let h = mr(t, D, g),
            m = T(h);
        l.set(m, s[g] = br(m, h))
    }
    return {
        c() {
            e = w("div"), r = w("p"), r.textContent = n, a = N(), i = w("ul");
            for (let g = 0; g < s.length; g += 1) s[g].c();
            o = N(), u = w("button"), u.innerHTML = d, this.h()
        },
        l(g) {
            e = O(g, "DIV", {
                class: !0
            });
            var h = y(e);
            r = O(h, "P", {
                class: !0,
                "data-svelte-h": !0
            }), ke(r) !== "svelte-1ub2bpf" && (r.textContent = n), a = H(h), i = O(h, "UL", {});
            var m = y(i);
            for (let k = 0; k < s.length; k += 1) s[k].l(m);
            m.forEach(_), o = H(h), u = O(h, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), ke(u) !== "svelte-j7op25" && (u.innerHTML = d), h.forEach(_), this.h()
        },
        h() {
            E(r, "class", "shgrid-pkg_sorters-subtitle"), E(u, "class", "shgrid-pkg_btn-add-sorter"), E(e, "class", "shgrid-pkg_options-sorters")
        },
        m(g, h) {
            R(g, e, h), v(e, r), v(e, a), v(e, i);
            for (let m = 0; m < s.length; m += 1) s[m] && s[m].m(i, null);
            v(e, o), v(e, u), f = !0, p || (b = [zr(c = hn.call(null, i, {
                items: t[3],
                flipDurationMs: t[2],
                dropFromOthersDisabled: !0
            })), Y(i, "consider", t[10]), Y(i, "finalize", t[11]), Y(u, "click", t[12])], p = !0)
        },
        p(g, [h]) {
            if (h & 41) {
                D = ae(g[3]), ft();
                for (let m = 0; m < s.length; m += 1) s[m].r();
                s = jr(s, h, T, 1, g, D, l, i, xr, br, null, mr);
                for (let m = 0; m < s.length; m += 1) s[m].a();
                ht()
            }
            c && Gt(c.update) && h & 12 && c.update.call(null, {
                items: g[3],
                flipDurationMs: g[2],
                dropFromOthersDisabled: !0
            })
        },
        i(g) {
            if (!f) {
                for (let h = 0; h < D.length; h += 1) oe(s[h]);
                f = !0
            }
        },
        o(g) {
            for (let h = 0; h < s.length; h += 1) de(s[h]);
            f = !1
        },
        d(g) {
            g && _(e);
            for (let h = 0; h < s.length; h += 1) s[h].d();
            p = !1, yt(b)
        }
    }
}

function ji(t, e, r) {
    let {
        builder: n
    } = e, {
        rerender: a
    } = e, {
        flipDurationMs: i = 300
    } = e;
    const s = g => g.sorters.map((h, m) => ({
        key: h[0],
        dir: h[1],
        id: m
    }));
    let l = s(n);

    function c() {
        var h, m;
        const g = ((m = (h = n.columns) == null ? void 0 : h[0]) == null ? void 0 : m.id) ? ? "";
        n.sorters.push([g, "asc"]), n.buildData(), r(3, l = s(n))
    }

    function o(g) {
        n.sorters.splice(g, 1), n.buildData(), r(3, l = s(n))
    }
    const u = (g, h) => {
            r(0, n.sorters[g][0] = h.detail.value, n), n.buildData()
        },
        d = (g, h) => {
            r(0, n.sorters[g][1] = h.detail.value, n), n.buildData()
        },
        f = () => n.buildData(),
        p = g => o(g),
        b = g => r(3, l = g.detail.items),
        D = g => {
            r(3, l = g.detail.items), r(0, n.sorters = l.map(h => [h.key, h.dir]), n), a()
        },
        T = () => c();
    return t.$$set = g => {
        "builder" in g && r(0, n = g.builder), "rerender" in g && r(1, a = g.rerender), "flipDurationMs" in g && r(2, i = g.flipDurationMs)
    }, t.$$.update = () => {
        t.$$.dirty & 1
    }, [n, a, i, l, c, o, u, d, f, p, b, D, T]
}
class xi extends Pe {
    constructor(e) {
        super(), Ve(this, e, ji, Wi, He, {
            builder: 0,
            rerender: 1,
            flipDurationMs: 2
        })
    }
}

function Er(t, e, r) {
    const n = t.slice();
    return n[7] = e[r], n[8] = e, n[9] = r, n
}

function yr(t, e) {
    let r, n, a, i, s, l, c, o = e[7].label + "",
        u, d, f, p, b, D, T = $,
        g;

    function h() {
        return e[3](e[7], e[8], e[9])
    }
    return p = new Gi({
        props: {
            name: e[7].id.toString(),
            value: !e[7].hidden
        }
    }), p.$on("input", h), {
        key: t,
        first: null,
        c() {
            r = w("li"), n = U("svg"), a = U("title"), i = F("drag"), s = U("path"), l = N(), c = w("label"), u = F(o), f = N(), Le(p.$$.fragment), b = N(), this.h()
        },
        l(m) {
            r = O(m, "LI", {
                class: !0
            });
            var k = y(r);
            n = G(k, "svg", {
                class: !0,
                xmlns: !0,
                viewBox: !0
            });
            var I = y(n);
            a = G(I, "title", {});
            var A = y(a);
            i = B(A, "drag"), A.forEach(_), s = G(I, "path", {
                d: !0
            }), y(s).forEach(_), I.forEach(_), l = H(k), c = O(k, "LABEL", {
                for: !0
            });
            var P = y(c);
            u = B(P, o), P.forEach(_), f = H(k), Ce(p.$$.fragment, k), b = H(k), k.forEach(_), this.h()
        },
        h() {
            E(s, "d", "M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"), E(n, "class", "shgrid-pkg_options-column-svg"), E(n, "xmlns", "http://www.w3.org/2000/svg"), E(n, "viewBox", "0 0 24 24"), E(c, "for", d = e[7].id.toString()), E(r, "class", "shgrid-pkg_column-option-row"), this.first = r
        },
        m(m, k) {
            R(m, r, k), v(r, n), v(n, a), v(a, i), v(n, s), v(r, l), v(r, c), v(c, u), v(r, f), Re(p, r, null), v(r, b), g = !0
        },
        p(m, k) {
            e = m, (!g || k & 4) && o !== (o = e[7].label + "") && be(u, o), (!g || k & 4 && d !== (d = e[7].id.toString())) && E(c, "for", d);
            const I = {};
            k & 4 && (I.name = e[7].id.toString()), k & 4 && (I.value = !e[7].hidden), p.$set(I)
        },
        r() {
            D = r.getBoundingClientRect()
        },
        f() {
            $r(r), T()
        },
        a() {
            T(), T = Yr(r, D, qr, {
                duration: Ut
            })
        },
        i(m) {
            g || (oe(p.$$.fragment, m), g = !0)
        },
        o(m) {
            de(p.$$.fragment, m), g = !1
        },
        d(m) {
            m && _(r), Me(p)
        }
    }
}

function Yi(t) {
    let e, r, n, a = "Columns",
        i, s, l = [],
        c = new Map,
        o, u, d, f, p, b, D = ae(t[2]);
    const T = g => g[7].id;
    for (let g = 0; g < D.length; g += 1) {
        let h = Er(t, D, g),
            m = T(h);
        c.set(m, l[g] = yr(m, h))
    }
    return d = new xi({
        props: {
            builder: t[0],
            rerender: t[1]
        }
    }), {
        c() {
            e = w("div"), r = w("div"), n = w("h4"), n.textContent = a, i = N(), s = w("ul");
            for (let g = 0; g < l.length; g += 1) l[g].c();
            u = N(), Le(d.$$.fragment), this.h()
        },
        l(g) {
            e = O(g, "DIV", {
                class: !0
            });
            var h = y(e);
            r = O(h, "DIV", {
                class: !0
            });
            var m = y(r);
            n = O(m, "H4", {
                class: !0,
                "data-svelte-h": !0
            }), ke(n) !== "svelte-146ld6b" && (n.textContent = a), i = H(m), s = O(m, "UL", {});
            var k = y(s);
            for (let I = 0; I < l.length; I += 1) l[I].l(k);
            k.forEach(_), m.forEach(_), u = H(h), Ce(d.$$.fragment, h), h.forEach(_), this.h()
        },
        h() {
            E(n, "class", "shgrid-pkg_columns-subtitle"), E(r, "class", "shgrid-pkg_options-columns"), E(e, "class", "shgrid-pkg_option-block")
        },
        m(g, h) {
            R(g, e, h), v(e, r), v(r, n), v(r, i), v(r, s);
            for (let m = 0; m < l.length; m += 1) l[m] && l[m].m(s, null);
            v(e, u), Re(d, e, null), f = !0, p || (b = [zr(o = hn.call(null, s, {
                items: t[2],
                flipDurationMs: Ut,
                dropFromOthersDisabled: !0
            })), Y(s, "consider", t[4]), Y(s, "finalize", t[5])], p = !0)
        },
        p(g, [h]) {
            if (h & 5) {
                D = ae(g[2]), ft();
                for (let k = 0; k < l.length; k += 1) l[k].r();
                l = jr(l, h, T, 1, g, D, c, s, xr, yr, null, Er);
                for (let k = 0; k < l.length; k += 1) l[k].a();
                ht()
            }
            o && Gt(o.update) && h & 4 && o.update.call(null, {
                items: g[2],
                flipDurationMs: Ut,
                dropFromOthersDisabled: !0
            });
            const m = {};
            h & 1 && (m.builder = g[0]), h & 2 && (m.rerender = g[1]), d.$set(m)
        },
        i(g) {
            if (!f) {
                for (let h = 0; h < D.length; h += 1) oe(l[h]);
                oe(d.$$.fragment, g), f = !0
            }
        },
        o(g) {
            for (let h = 0; h < l.length; h += 1) de(l[h]);
            de(d.$$.fragment, g), f = !1
        },
        d(g) {
            g && _(e);
            for (let h = 0; h < l.length; h += 1) l[h].d();
            Me(d), p = !1, yt(b)
        }
    }
}
const Ut = 300;

function $i(t) {
    return t.sorters.map((e, r) => ({
        id: r,
        key: e[0],
        dir: e[1]
    }))
}

function qi(t, e, r) {
    let {
        builder: n
    } = e, {
        rerender: a
    } = e, i = n.columns;
    $i(n);
    const s = (o, u, d) => {
            r(2, u[d].hidden = !o.hidden, i), n.buildData()
        },
        l = o => {
            r(2, i = o.detail.items), a()
        },
        c = o => {
            r(0, n.columns = o.detail.items, n), r(2, i = [...n.columns]), a()
        };
    return t.$$set = o => {
        "builder" in o && r(0, n = o.builder), "rerender" in o && r(1, a = o.rerender)
    }, [n, a, i, s, l, c]
}
class Ki extends Pe {
    constructor(e) {
        super(), Ve(this, e, qi, Yi, He, {
            builder: 0,
            rerender: 1
        })
    }
}

function Dr(t, e, r) {
    const n = t.slice();
    return n[10] = e[r], n
}

function Tr(t) {
    let e, r, n = "Per Page",
        a, i, s, l, c = ae(t[0].paginator.limitOptions),
        o = [];
    for (let u = 0; u < c.length; u += 1) o[u] = wr(Dr(t, c, u));
    return {
        c() {
            e = w("div"), r = w("p"), r.textContent = n, a = N(), i = w("select");
            for (let u = 0; u < o.length; u += 1) o[u].c();
            this.h()
        },
        l(u) {
            e = O(u, "DIV", {
                class: !0
            });
            var d = y(e);
            r = O(d, "P", {
                class: !0,
                "data-svelte-h": !0
            }), ke(r) !== "svelte-9fw2ey" && (r.textContent = n), a = H(d), i = O(d, "SELECT", {
                class: !0
            });
            var f = y(i);
            for (let p = 0; p < o.length; p += 1) o[p].l(f);
            f.forEach(_), d.forEach(_), this.h()
        },
        h() {
            E(r, "class", "shgrid-pkg_pagination-search-input shgrid-pkg_paginator-text-no-before"), E(i, "class", "shgrid-pkg_pagination-select"), t[0].paginator.limit === void 0 && vn(() => t[7].call(i)), E(e, "class", "shgrid-pkg_pagination-select-wrapper")
        },
        m(u, d) {
            R(u, e, d), v(e, r), v(e, a), v(e, i);
            for (let f = 0; f < o.length; f += 1) o[f] && o[f].m(i, null);
            dt(i, t[0].paginator.limit, !0), s || (l = [Y(i, "change", t[6]), Y(i, "change", t[7])], s = !0)
        },
        p(u, d) {
            if (d & 1) {
                c = ae(u[0].paginator.limitOptions);
                let f;
                for (f = 0; f < c.length; f += 1) {
                    const p = Dr(u, c, f);
                    o[f] ? o[f].p(p, d) : (o[f] = wr(p), o[f].c(), o[f].m(i, null))
                }
                for (; f < o.length; f += 1) o[f].d(1);
                o.length = c.length
            }
            d & 1 && dt(i, u[0].paginator.limit)
        },
        d(u) {
            u && _(e), Ke(o, u), s = !1, yt(l)
        }
    }
}

function wr(t) {
    let e, r = t[10] + "",
        n, a;
    return {
        c() {
            e = w("option"), n = F(r), this.h()
        },
        l(i) {
            e = O(i, "OPTION", {});
            var s = y(e);
            n = B(s, r), s.forEach(_), this.h()
        },
        h() {
            e.__value = a = t[10], ct(e, e.__value)
        },
        m(i, s) {
            R(i, e, s), v(e, n)
        },
        p(i, s) {
            s & 1 && r !== (r = i[10] + "") && be(n, r), s & 1 && a !== (a = i[10]) && (e.__value = a, ct(e, e.__value))
        },
        d(i) {
            i && _(e)
        }
    }
}

function Qi(t) {
    let e, r, n, a, i, s, l, c, o, u, d, f = t[2] + 1 + "",
        p, b, D = t[3] + 1 + "",
        T, g, h, m, k, I, A, P, j, le, S, L, C = "Page",
        z, M, x, pe, V, Ee, Oe = "Go →",
        se, he, Q = t[0].paginator.limitOptions !== null && Tr(t);
    return {
        c() {
            e = w("form"), r = w("div"), n = w("button"), a = U("svg"), i = U("title"), s = F("Previous Page"), l = U("path"), o = N(), u = w("p"), d = F("Page "), p = F(f), b = F(" of "), T = F(D), g = N(), h = w("button"), m = U("svg"), k = U("title"), I = F("Next Page"), A = U("path"), j = N(), Q && Q.c(), le = N(), S = w("div"), L = w("p"), L.textContent = C, z = N(), M = w("input"), V = N(), Ee = w("button"), Ee.textContent = Oe, this.h()
        },
        l(J) {
            e = O(J, "FORM", {
                class: !0
            });
            var re = y(e);
            r = O(re, "DIV", {
                class: !0
            });
            var ze = y(r);
            n = O(ze, "BUTTON", {
                type: !0,
                class: !0
            });
            var Kt = y(n);
            a = G(Kt, "svg", {
                xmlns: !0,
                viewBox: !0,
                class: !0
            });
            var At = y(a);
            i = G(At, "title", {});
            var Qt = y(i);
            s = B(Qt, "Previous Page"), Qt.forEach(_), l = G(At, "path", {
                d: !0
            }), y(l).forEach(_), At.forEach(_), Kt.forEach(_), o = H(ze), u = O(ze, "P", {
                class: !0
            });
            var Qe = y(u);
            d = B(Qe, "Page "), p = B(Qe, f), b = B(Qe, " of "), T = B(Qe, D), Qe.forEach(_), g = H(ze), h = O(ze, "BUTTON", {
                type: !0,
                class: !0
            });
            var Xt = y(h);
            m = G(Xt, "svg", {
                xmlns: !0,
                viewBox: !0,
                class: !0
            });
            var Lt = y(m);
            k = G(Lt, "title", {});
            var Jt = y(k);
            I = B(Jt, "Next Page"), Jt.forEach(_), A = G(Lt, "path", {
                d: !0
            }), y(A).forEach(_), Lt.forEach(_), Xt.forEach(_), ze.forEach(_), j = H(re), Q && Q.l(re), le = H(re), S = O(re, "DIV", {
                class: !0
            });
            var Ze = y(S);
            L = O(Ze, "P", {
                class: !0,
                "data-svelte-h": !0
            }), ke(L) !== "svelte-199z12j" && (L.textContent = C), z = H(Ze), M = O(Ze, "INPUT", {
                class: !0,
                type: !0,
                max: !0,
                min: !0
            }), V = H(Ze), Ee = O(Ze, "BUTTON", {
                class: !0,
                type: !0,
                "data-svelte-h": !0
            }), ke(Ee) !== "svelte-1p6bykq" && (Ee.textContent = Oe), Ze.forEach(_), re.forEach(_), this.h()
        },
        h() {
            E(l, "d", "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"), E(a, "xmlns", "http://www.w3.org/2000/svg"), E(a, "viewBox", "0 0 24 24"), E(a, "class", "shgrid-pkg_paginator-btn-svg"), E(n, "type", "button"), n.disabled = c = t[2] < 1, E(n, "class", "shgrid-pkg_pagination-btn"), E(u, "class", "shgrid-pkg_paginator-text"), E(A, "d", "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"), E(m, "xmlns", "http://www.w3.org/2000/svg"), E(m, "viewBox", "0 0 24 24"), E(m, "class", "shgrid-pkg_paginator-btn-svg"), E(h, "type", "button"), h.disabled = P = t[2] >= t[3], E(h, "class", "shgrid-pkg_pagination-btn"), E(r, "class", "shgrid-pkg_pagination-btns"), E(L, "class", "shgrid-pkg_pagination-search-input shgrid-pkg_paginator-text-no-before"), E(M, "class", "shgrid-pkg_pagination-search-input-no-rounding shgrid-pkg_pagination-search-input"), E(M, "type", "number"), M.value = x = t[2] + 1, E(M, "max", pe = 1 + t[0].count / t[0].paginator.limit), E(M, "min", 1), E(Ee, "class", "shgrid-pkg_pagination-search-btn"), E(Ee, "type", "button"), E(S, "class", "shgrid-pkg_pagination-search-wrapper"), E(e, "class", "shgrid-pkg_pagination")
        },
        m(J, re) {
            R(J, e, re), v(e, r), v(r, n), v(n, a), v(a, i), v(i, s), v(a, l), v(r, o), v(r, u), v(u, d), v(u, p), v(u, b), v(u, T), v(r, g), v(r, h), v(h, m), v(m, k), v(k, I), v(m, A), v(e, j), Q && Q.m(e, null), v(e, le), v(e, S), v(S, L), v(S, z), v(S, M), v(S, V), v(S, Ee), se || (he = [Y(n, "click", t[4]), Y(h, "click", t[5]), Y(M, "input", t[8]), Y(Ee, "click", t[9])], se = !0)
        },
        p(J, [re]) {
            re & 4 && c !== (c = J[2] < 1) && (n.disabled = c), re & 4 && f !== (f = J[2] + 1 + "") && be(p, f), re & 8 && D !== (D = J[3] + 1 + "") && be(T, D), re & 12 && P !== (P = J[2] >= J[3]) && (h.disabled = P), J[0].paginator.limitOptions !== null ? Q ? Q.p(J, re) : (Q = Tr(J), Q.c(), Q.m(e, le)) : Q && (Q.d(1), Q = null), re & 4 && x !== (x = J[2] + 1) && M.value !== x && (M.value = x), re & 1 && pe !== (pe = 1 + J[0].count / J[0].paginator.limit) && E(M, "max", pe)
        },
        i: $,
        o: $,
        d(J) {
            J && _(e), Q && Q.d(), se = !1, yt(he)
        }
    }
}

function Xi(t, e, r) {
    let n, a, {
            builder: i
        } = e,
        s = n ? ? 0;
    const l = () => i.setPage(n - 1),
        c = () => i.setPage(n + 1),
        o = p => i.buildData();

    function u() {
        i.paginator.limit = mn(this), r(0, i)
    }
    const d = p => r(1, s = +p.currentTarget.value - 1),
        f = () => i.setPage(s);
    return t.$$set = p => {
        "builder" in p && r(0, i = p.builder)
    }, t.$$.update = () => {
        t.$$.dirty & 1 && r(2, n = Math.floor(i.paginator.offset / i.paginator.limit)), t.$$.dirty & 1 && r(3, a = Math.floor(i.count / i.paginator.limit))
    }, [i, s, n, a, l, c, o, u, d, f]
}
class Ji extends Pe {
    constructor(e) {
        super(), Ve(this, e, Xi, Qi, He, {
            builder: 0
        })
    }
}

function ea(t) {
    let e, r, n, a, i, s, l;
    return {
        c() {
            e = w("div"), r = w("h3"), n = F("Error: "), a = F(t[0]), i = N(), s = w("p"), l = F(t[1]), this.h()
        },
        l(c) {
            e = O(c, "DIV", {
                class: !0
            });
            var o = y(e);
            r = O(o, "H3", {
                class: !0
            });
            var u = y(r);
            n = B(u, "Error: "), a = B(u, t[0]), u.forEach(_), i = H(o), s = O(o, "P", {});
            var d = y(s);
            l = B(d, t[1]), d.forEach(_), o.forEach(_), this.h()
        },
        h() {
            E(r, "class", "subtitle"), E(e, "class", "wrapper svelte-rfcc3f")
        },
        m(c, o) {
            R(c, e, o), v(e, r), v(r, n), v(r, a), v(e, i), v(e, s), v(s, l)
        },
        p(c, [o]) {
            o & 1 && be(a, c[0]), o & 2 && be(l, c[1])
        },
        i: $,
        o: $,
        d(c) {
            c && _(e)
        }
    }
}

function ta(t, e, r) {
    let {
        code: n
    } = e, {
        message: a
    } = e;
    return t.$$set = i => {
        "code" in i && r(0, n = i.code), "message" in i && r(1, a = i.message)
    }, [n, a]
}
class ra extends Pe {
    constructor(e) {
        super(), Ve(this, e, ta, ea, He, {
            code: 0,
            message: 1
        })
    }
}

function Or(t, e, r) {
    const n = t.slice();
    return n[18] = e[r], n[19] = e, n[20] = r, n
}

function kr(t, e, r) {
    const n = t.slice();
    return n[21] = e[r], n
}

function Ir(t, e, r) {
    const n = t.slice();
    return n[21] = e[r], n[20] = r, n
}

function Sr(t, e, r) {
    const n = t.slice();
    return n[21] = e[r], n[25] = e, n[26] = r, n
}

function Ar(t) {
    let e, r = '<p>Options</p> <svg class="shgrid-pkg_options-btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Options</title><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"></path></svg>',
        n, a;
    return {
        c() {
            e = w("button"), e.innerHTML = r, this.h()
        },
        l(i) {
            e = O(i, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), ke(e) !== "svelte-gfuabc" && (e.innerHTML = r), this.h()
        },
        h() {
            E(e, "class", "shgrid-pkg_options-btn")
        },
        m(i, s) {
            R(i, e, s), n || (a = Y(e, "click", t[10]), n = !0)
        },
        p: $,
        d(i) {
            i && _(e), n = !1, a()
        }
    }
}

function Lr(t) {
    let e, r;
    return e = new Ki({
        props: {
            builder: t[0],
            rerender: t[7]
        }
    }), {
        c() {
            Le(e.$$.fragment)
        },
        l(n) {
            Ce(e.$$.fragment, n)
        },
        m(n, a) {
            Re(e, n, a), r = !0
        },
        p(n, a) {
            const i = {};
            a & 1 && (i.builder = n[0]), e.$set(i)
        },
        i(n) {
            r || (oe(e.$$.fragment, n), r = !0)
        },
        o(n) {
            de(e.$$.fragment, n), r = !1
        },
        d(n) {
            Me(e, n)
        }
    }
}

function Cr(t) {
    let e, r, n, a, i;
    return {
        c() {
            e = w("th"), r = w("label"), n = w("input"), this.h()
        },
        l(s) {
            e = O(s, "TH", {});
            var l = y(e);
            r = O(l, "LABEL", {
                class: !0,
                style: !0
            });
            var c = y(r);
            n = O(c, "INPUT", {
                type: !0,
                class: !0,
                style: !0
            }), c.forEach(_), l.forEach(_), this.h()
        },
        h() {
            E(n, "type", "checkbox"), n.checked = t[3], E(n, "class", "shgrid-pkg_selection-checkbox shgrid-pkg_checkbox"), er(n, "vertical-align", "bottom"), E(r, "class", "shgrid-pkg_th-label"), er(r, "padding", "0")
        },
        m(s, l) {
            R(s, e, l), v(e, r), v(r, n), a || (i = Y(n, "change", t[11]), a = !0)
        },
        p(s, l) {
            l & 8 && (n.checked = s[3])
        },
        d(s) {
            s && _(e), a = !1, i()
        }
    }
}

function Rr(t) {
    let e;
    return {
        c() {
            e = w("th")
        },
        l(r) {
            e = O(r, "TH", {}), y(e).forEach(_)
        },
        m(r, n) {
            R(r, e, n)
        },
        d(r) {
            r && _(e)
        }
    }
}

function Mr(t) {
    let e, r, n, a;

    function i(o, u) {
        var d, f;
        return ((f = (d = o[0].sorters) == null ? void 0 : d[0]) == null ? void 0 : f[0]) === o[21].id ? ia : na
    }
    let s = i(t),
        l = s(t);

    function c() {
        return t[12](t[21])
    }
    return {
        c() {
            e = w("button"), r = U("svg"), l.c(), this.h()
        },
        l(o) {
            e = O(o, "BUTTON", {
                class: !0
            });
            var u = y(e);
            r = G(u, "svg", {
                class: !0,
                xmlns: !0,
                viewBox: !0
            });
            var d = y(r);
            l.l(d), d.forEach(_), u.forEach(_), this.h()
        },
        h() {
            E(r, "class", "shgrid-pkg_th-svg"), E(r, "xmlns", "http://www.w3.org/2000/svg"), E(r, "viewBox", "0 0 24 24"), E(e, "class", "shgrid-pkg_th-btn-hidden")
        },
        m(o, u) {
            R(o, e, u), v(e, r), l.m(r, null), n || (a = Y(e, "click", c), n = !0)
        },
        p(o, u) {
            t = o, s === (s = i(t)) && l ? l.p(t, u) : (l.d(1), l = s(t), l && (l.c(), l.m(r, null)))
        },
        d(o) {
            o && _(e), l.d(), n = !1, a()
        }
    }
}

function na(t) {
    let e, r, n;
    return {
        c() {
            e = U("title"), r = F("sort"), n = U("path"), this.h()
        },
        l(a) {
            e = G(a, "title", {});
            var i = y(e);
            r = B(i, "sort"), i.forEach(_), n = G(a, "path", {
                d: !0
            }), y(n).forEach(_), this.h()
        },
        h() {
            E(n, "d", "M18 21L14 17H17V7H14L18 3L22 7H19V17H22M2 19V17H12V19M2 13V11H9V13M2 7V5H6V7H2Z")
        },
        m(a, i) {
            R(a, e, i), v(e, r), R(a, n, i)
        },
        p: $,
        d(a) {
            a && (_(e), _(n))
        }
    }
}

function ia(t) {
    let e;

    function r(i, s) {
        var l, c;
        return ((c = (l = i[0].sorters) == null ? void 0 : l[0]) == null ? void 0 : c[1]) === "desc" ? la : aa
    }
    let n = r(t),
        a = n(t);
    return {
        c() {
            a.c(), e = xe()
        },
        l(i) {
            a.l(i), e = xe()
        },
        m(i, s) {
            a.m(i, s), R(i, e, s)
        },
        p(i, s) {
            n !== (n = r(i)) && (a.d(1), a = n(i), a && (a.c(), a.m(e.parentNode, e)))
        },
        d(i) {
            i && _(e), a.d(i)
        }
    }
}

function aa(t) {
    let e, r, n;
    return {
        c() {
            e = U("title"), r = F("sort-alphabetical-ascending"), n = U("path"), this.h()
        },
        l(a) {
            e = G(a, "title", {});
            var i = y(e);
            r = B(i, "sort-alphabetical-ascending"), i.forEach(_), n = G(a, "path", {
                d: !0
            }), y(n).forEach(_), this.h()
        },
        h() {
            E(n, "d", "M19 17H22L18 21L14 17H17V3H19M11 13V15L7.67 19H11V21H5V19L8.33 15H5V13M9 3H7C5.9 3 5 3.9 5 5V11H7V9H9V11H11V5C11 3.9 10.11 3 9 3M9 7H7V5H9Z")
        },
        m(a, i) {
            R(a, e, i), v(e, r), R(a, n, i)
        },
        d(a) {
            a && (_(e), _(n))
        }
    }
}

function la(t) {
    let e, r, n;
    return {
        c() {
            e = U("title"), r = F("sort-alphabetical-descending"), n = U("path"), this.h()
        },
        l(a) {
            e = G(a, "title", {});
            var i = y(e);
            r = B(i, "sort-alphabetical-descending"), i.forEach(_), n = G(a, "path", {
                d: !0
            }), y(n).forEach(_), this.h()
        },
        h() {
            E(n, "d", "M19 7H22L18 3L14 7H17V21H19M11 13V15L7.67 19H11V21H5V19L8.33 15H5V13M9 3H7C5.9 3 5 3.9 5 5V11H7V9H9V11H11V5C11 3.9 10.11 3 9 3M9 7H7V5H9Z")
        },
        m(a, i) {
            R(a, e, i), v(e, r), R(a, n, i)
        },
        d(a) {
            a && (_(e), _(n))
        }
    }
}

function Nr(t) {
    let e, r, n;

    function a(...i) {
        return t[13](t[21], t[25], t[26], ...i)
    }
    return {
        c() {
            e = w("input"), this.h()
        },
        l(i) {
            e = O(i, "INPUT", {
                class: !0,
                type: !0
            }), this.h()
        },
        h() {
            E(e, "class", "shgrid-pkg_th-input"), E(e, "type", "text")
        },
        m(i, s) {
            R(i, e, s), r || (n = Y(e, "input", a), r = !0)
        },
        p(i, s) {
            t = i
        },
        d(i) {
            i && _(e), r = !1, n()
        }
    }
}

function Hr(t) {
    var f, p;
    let e, r, n, a, i = t[21].label + "",
        s, l, c, o, u = ((f = t[21]) == null ? void 0 : f.sortable) != !1 && Mr(t),
        d = ((p = t[21]) == null ? void 0 : p.searchable) != !1 && Nr(t);
    return {
        c() {
            e = w("th"), r = w("label"), n = w("div"), a = w("p"), s = F(i), l = N(), u && u.c(), c = N(), d && d.c(), o = N(), this.h()
        },
        l(b) {
            e = O(b, "TH", {});
            var D = y(e);
            r = O(D, "LABEL", {
                class: !0
            });
            var T = y(r);
            n = O(T, "DIV", {
                class: !0
            });
            var g = y(n);
            a = O(g, "P", {
                class: !0
            });
            var h = y(a);
            s = B(h, i), h.forEach(_), l = H(g), u && u.l(g), g.forEach(_), c = H(T), d && d.l(T), T.forEach(_), o = H(D), D.forEach(_), this.h()
        },
        h() {
            var b;
            E(a, "class", "shgrid-pkg_th"), E(n, "class", "shgrid-pkg_th-label-top"), ve(n, "shgrid-pkg_th-label-top-sortable", ((b = t[21]) == null ? void 0 : b.sortable) !== !1), E(r, "class", "shgrid-pkg_th-label")
        },
        m(b, D) {
            R(b, e, D), v(e, r), v(r, n), v(n, a), v(a, s), v(n, l), u && u.m(n, null), v(r, c), d && d.m(r, null), v(e, o)
        },
        p(b, D) {
            var T, g, h;
            D & 64 && i !== (i = b[21].label + "") && be(s, i), ((T = b[21]) == null ? void 0 : T.sortable) != !1 ? u ? u.p(b, D) : (u = Mr(b), u.c(), u.m(n, null)) : u && (u.d(1), u = null), D & 64 && ve(n, "shgrid-pkg_th-label-top-sortable", ((g = b[21]) == null ? void 0 : g.sortable) !== !1), ((h = b[21]) == null ? void 0 : h.searchable) != !1 ? d ? d.p(b, D) : (d = Nr(b), d.c(), d.m(r, null)) : d && (d.d(1), d = null)
        },
        d(b) {
            b && _(e), u && u.d(), d && d.d()
        }
    }
}

function sa(t) {
    let e, r = ae(t[5]),
        n = [];
    for (let a = 0; a < r.length; a += 1) n[a] = Gr(Or(t, r, a));
    return {
        c() {
            for (let a = 0; a < n.length; a += 1) n[a].c();
            e = xe()
        },
        l(a) {
            for (let i = 0; i < n.length; i += 1) n[i].l(a);
            e = xe()
        },
        m(a, i) {
            for (let s = 0; s < n.length; s += 1) n[s] && n[s].m(a, i);
            R(a, e, i)
        },
        p(a, i) {
            if (i & 749) {
                r = ae(a[5]);
                let s;
                for (s = 0; s < r.length; s += 1) {
                    const l = Or(a, r, s);
                    n[s] ? n[s].p(l, i) : (n[s] = Gr(l), n[s].c(), n[s].m(e.parentNode, e))
                }
                for (; s < n.length; s += 1) n[s].d(1);
                n.length = r.length
            }
        },
        i: $,
        o: $,
        d(a) {
            a && _(e), Ke(n, a)
        }
    }
}

function oa(t) {
    let e, r, n, a;
    return n = new ra({
        props: {
            message: t[0].error.message,
            code: t[0].error.code
        }
    }), {
        c() {
            e = w("tr"), r = w("td"), Le(n.$$.fragment), this.h()
        },
        l(i) {
            e = O(i, "TR", {});
            var s = y(e);
            r = O(s, "TD", {
                colspan: !0
            });
            var l = y(r);
            Ce(n.$$.fragment, l), l.forEach(_), s.forEach(_), this.h()
        },
        h() {
            E(r, "colspan", "999")
        },
        m(i, s) {
            R(i, e, s), v(e, r), Re(n, r, null), a = !0
        },
        p(i, s) {
            const l = {};
            s & 1 && (l.message = i[0].error.message), s & 1 && (l.code = i[0].error.code), n.$set(l)
        },
        i(i) {
            a || (oe(n.$$.fragment, i), a = !0)
        },
        o(i) {
            de(n.$$.fragment, i), a = !1
        },
        d(i) {
            i && _(e), Me(n)
        }
    }
}

function ua(t) {
    let e, r, n, a;
    return n = new In({}), {
        c() {
            e = w("tr"), r = w("td"), Le(n.$$.fragment), this.h()
        },
        l(i) {
            e = O(i, "TR", {});
            var s = y(e);
            r = O(s, "TD", {
                colspan: !0
            });
            var l = y(r);
            Ce(n.$$.fragment, l), l.forEach(_), s.forEach(_), this.h()
        },
        h() {
            E(r, "colspan", "999")
        },
        m(i, s) {
            R(i, e, s), v(e, r), Re(n, r, null), a = !0
        },
        p: $,
        i(i) {
            a || (oe(n.$$.fragment, i), a = !0)
        },
        o(i) {
            de(n.$$.fragment, i), a = !1
        },
        d(i) {
            i && _(e), Me(n)
        }
    }
}

function Pr(t) {
    let e, r, n, a, i;

    function s() {
        return t[14](t[18])
    }
    return {
        c() {
            e = w("td"), r = w("input"), this.h()
        },
        l(l) {
            e = O(l, "TD", {
                class: !0
            });
            var c = y(e);
            r = O(c, "INPUT", {
                type: !0,
                class: !0
            }), c.forEach(_), this.h()
        },
        h() {
            E(r, "type", "checkbox"), r.checked = n = t[18].isSelected, E(r, "class", "shgrid-pkg_selection-checkbox shgrid-pkg_checkbox"), E(e, "class", "shgrid-pkg_td shgrid-pkg_selection-td")
        },
        m(l, c) {
            R(l, e, c), v(e, r), a || (i = Y(r, "input", s), a = !0)
        },
        p(l, c) {
            t = l, c & 32 && n !== (n = t[18].isSelected) && (r.checked = n)
        },
        d(l) {
            l && _(e), a = !1, i()
        }
    }
}

function Vr(t) {
    let e, r, n, a;

    function i(o, u) {
        return o[18].isOpen ? ca : da
    }
    let s = i(t),
        l = s(t);

    function c() {
        return t[15](t[18], t[19], t[20])
    }
    return {
        c() {
            e = w("td"), r = w("button"), l.c(), this.h()
        },
        l(o) {
            e = O(o, "TD", {
                class: !0
            });
            var u = y(e);
            r = O(u, "BUTTON", {
                class: !0
            });
            var d = y(r);
            l.l(d), d.forEach(_), u.forEach(_), this.h()
        },
        h() {
            E(r, "class", "shgrid-pkg_expand-btn"), E(e, "class", "shgrid-pkg_td")
        },
        m(o, u) {
            R(o, e, u), v(e, r), l.m(r, null), n || (a = Y(r, "click", c), n = !0)
        },
        p(o, u) {
            t = o, s !== (s = i(t)) && (l.d(1), l = s(t), l && (l.c(), l.m(r, null)))
        },
        d(o) {
            o && _(e), l.d(), n = !1, a()
        }
    }
}

function da(t) {
    let e, r, n, a;
    return {
        c() {
            e = U("svg"), r = U("title"), n = F("Expand"), a = U("path"), this.h()
        },
        l(i) {
            e = G(i, "svg", {
                class: !0,
                xmlns: !0,
                viewBox: !0
            });
            var s = y(e);
            r = G(s, "title", {});
            var l = y(r);
            n = B(l, "Expand"), l.forEach(_), a = G(s, "path", {
                d: !0
            }), y(a).forEach(_), s.forEach(_), this.h()
        },
        h() {
            E(a, "d", "M10,21V19H6.41L10.91,14.5L9.5,13.09L5,17.59V14H3V21H10M14.5,10.91L19,6.41V10H21V3H14V5H17.59L13.09,9.5L14.5,10.91Z"), E(e, "class", "shgrid-pkg_expand-btn-svg"), E(e, "xmlns", "http://www.w3.org/2000/svg"), E(e, "viewBox", "0 0 24 24")
        },
        m(i, s) {
            R(i, e, s), v(e, r), v(r, n), v(e, a)
        },
        d(i) {
            i && _(e)
        }
    }
}

function ca(t) {
    let e, r, n, a;
    return {
        c() {
            e = U("svg"), r = U("title"), n = F("Shrink"), a = U("path"), this.h()
        },
        l(i) {
            e = G(i, "svg", {
                class: !0,
                xmlns: !0,
                viewBox: !0
            });
            var s = y(e);
            r = G(s, "title", {});
            var l = y(r);
            n = B(l, "Shrink"), l.forEach(_), a = G(s, "path", {
                d: !0
            }), y(a).forEach(_), s.forEach(_), this.h()
        },
        h() {
            E(a, "d", "M19.5,3.09L15,7.59V4H13V11H20V9H16.41L20.91,4.5L19.5,3.09M4,13V15H7.59L3.09,19.5L4.5,20.91L9,16.41V20H11V13H4Z"), E(e, "class", "shgrid-pkg_expand-btn-svg"), E(e, "xmlns", "http://www.w3.org/2000/svg"), E(e, "viewBox", "0 0 24 24")
        },
        m(i, s) {
            R(i, e, s), v(e, r), v(r, n), v(e, a)
        },
        d(i) {
            i && _(e)
        }
    }
}

function fa(t) {
    let e, r, n = t[0].formatCell(t[18].data, t[21].id.toString()) + "",
        a;

    function i() {
        return t[16](t[21], t[18])
    }
    return {
        c() {
            e = w("a"), r = new Zr(!1), this.h()
        },
        l(s) {
            e = O(s, "A", {
                href: !0,
                class: !0
            });
            var l = y(e);
            r = Wr(l, !1), l.forEach(_), this.h()
        },
        h() {
            var s;
            r.a = null, E(e, "href", a = i()), E(e, "class", "shgrid-pkg_td-link"), ve(e, "shgrid-pkg_hover-highlight-row", t[21].link === void 0), ve(e, "shgrid-pkg_hover-highlight-cell", t[21].link !== void 0), ve(e, "shgrid-pkg_selected-a", (s = t[0].selected) == null ? void 0 : s.has(t[18].data.id))
        },
        m(s, l) {
            R(s, e, l), r.m(n, e)
        },
        p(s, l) {
            var c;
            t = s, l & 97 && n !== (n = t[0].formatCell(t[18].data, t[21].id.toString()) + "") && r.p(n), l & 97 && a !== (a = i()) && E(e, "href", a), l & 64 && ve(e, "shgrid-pkg_hover-highlight-row", t[21].link === void 0), l & 64 && ve(e, "shgrid-pkg_hover-highlight-cell", t[21].link !== void 0), l & 33 && ve(e, "shgrid-pkg_selected-a", (c = t[0].selected) == null ? void 0 : c.has(t[18].data.id))
        },
        d(s) {
            s && _(e)
        }
    }
}

function ha(t) {
    let e, r, n = t[0].formatCell(t[18].data, t[21].id.toString()) + "";
    return {
        c() {
            e = w("div"), r = new Zr(!1), this.h()
        },
        l(a) {
            e = O(a, "DIV", {});
            var i = y(e);
            r = Wr(i, !1), i.forEach(_), this.h()
        },
        h() {
            r.a = null
        },
        m(a, i) {
            R(a, e, i), r.m(n, e)
        },
        p(a, i) {
            i & 97 && n !== (n = a[0].formatCell(a[18].data, a[21].id.toString()) + "") && r.p(n)
        },
        d(a) {
            a && _(e)
        }
    }
}

function Fr(t) {
    let e, r, n, a;

    function i(o, u) {
        return o[0].rowLink === void 0 && o[21].link === void 0 ? ha : fa
    }
    let s = i(t),
        l = s(t);

    function c(...o) {
        return t[17](t[18], t[21], ...o)
    }
    return {
        c() {
            e = w("td"), l.c(), r = N(), this.h()
        },
        l(o) {
            e = O(o, "TD", {
                class: !0
            });
            var u = y(e);
            l.l(u), r = H(u), u.forEach(_), this.h()
        },
        h() {
            E(e, "class", "shgrid-pkg_td")
        },
        m(o, u) {
            R(o, e, u), l.m(e, null), v(e, r), n || (a = Y(e, "click", c), n = !0)
        },
        p(o, u) {
            t = o, s === (s = i(t)) && l ? l.p(t, u) : (l.d(1), l = s(t), l && (l.c(), l.m(e, r)))
        },
        d(o) {
            o && _(e), l.d(), n = !1, a()
        }
    }
}

function Br(t) {
    let e, r, n, a, i = ae(t[0].columns),
        s = [];
    for (let l = 0; l < i.length; l += 1) s[l] = Ur(kr(t, i, l));
    return {
        c() {
            e = w("tr"), r = w("td"), n = w("div");
            for (let l = 0; l < s.length; l += 1) s[l].c();
            a = N(), this.h()
        },
        l(l) {
            e = O(l, "TR", {
                class: !0
            });
            var c = y(e);
            r = O(c, "TD", {
                colspan: !0,
                class: !0
            });
            var o = y(r);
            n = O(o, "DIV", {
                class: !0
            });
            var u = y(n);
            for (let d = 0; d < s.length; d += 1) s[d].l(u);
            u.forEach(_), o.forEach(_), a = H(c), c.forEach(_), this.h()
        },
        h() {
            E(n, "class", "shgrid-pkg_expanded-wrapper"), E(r, "colspan", "999"), E(r, "class", "shgrid-pkg_expanded"), E(e, "class", "shgrid-pkg_expanded"), ve(e, "shgrid-pkg_odd-darker", t[20] % 2 - 1)
        },
        m(l, c) {
            R(l, e, c), v(e, r), v(r, n);
            for (let o = 0; o < s.length; o += 1) s[o] && s[o].m(n, null);
            v(e, a)
        },
        p(l, c) {
            if (c & 1) {
                i = ae(l[0].columns);
                let o;
                for (o = 0; o < i.length; o += 1) {
                    const u = kr(l, i, o);
                    s[o] ? s[o].p(u, c) : (s[o] = Ur(u), s[o].c(), s[o].m(n, null))
                }
                for (; o < s.length; o += 1) s[o].d(1);
                s.length = i.length
            }
        },
        d(l) {
            l && _(e), Ke(s, l)
        }
    }
}

function Ur(t) {
    let e, r, n = t[21].label + "",
        a, i, s, l, c = JSON.stringify(t[0].data[t[20]][t[21].id]) + "",
        o, u;
    return {
        c() {
            e = w("div"), r = w("p"), a = F(n), i = F(":"), s = N(), l = w("p"), o = F(c), u = N(), this.h()
        },
        l(d) {
            e = O(d, "DIV", {
                class: !0
            });
            var f = y(e);
            r = O(f, "P", {});
            var p = y(r);
            a = B(p, n), i = B(p, ":"), p.forEach(_), s = H(f), l = O(f, "P", {});
            var b = y(l);
            o = B(b, c), b.forEach(_), u = H(f), f.forEach(_), this.h()
        },
        h() {
            E(e, "class", "shgrid-pkg_expanded-row")
        },
        m(d, f) {
            R(d, e, f), v(e, r), v(r, a), v(r, i), v(e, s), v(e, l), v(l, o), v(e, u)
        },
        p(d, f) {
            f & 1 && n !== (n = d[21].label + "") && be(a, n), f & 1 && c !== (c = JSON.stringify(d[0].data[d[20]][d[21].id]) + "") && be(o, c)
        },
        d(d) {
            d && _(e)
        }
    }
}

function Gr(t) {
    let e, r, n, a, i, s = t[0].selected !== void 0 && Pr(t),
        l = t[2] && Vr(t),
        c = ae(t[6]),
        o = [];
    for (let d = 0; d < c.length; d += 1) o[d] = Fr(Ir(t, c, d));
    let u = t[18].isOpen && Br(t);
    return {
        c() {
            e = w("tr"), s && s.c(), r = N(), l && l.c(), n = N();
            for (let d = 0; d < o.length; d += 1) o[d].c();
            a = N(), u && u.c(), i = xe(), this.h()
        },
        l(d) {
            e = O(d, "TR", {
                class: !0
            });
            var f = y(e);
            s && s.l(f), r = H(f), l && l.l(f), n = H(f);
            for (let p = 0; p < o.length; p += 1) o[p].l(f);
            f.forEach(_), a = H(d), u && u.l(d), i = xe(), this.h()
        },
        h() {
            var d;
            E(e, "class", "shgrid-pkg_body-tr"), ve(e, "shgrid-pkg_odd-darker", t[20] % 2 - 1), ve(e, "shgrid-pkg_selected-tr", (d = t[0].selected) == null ? void 0 : d.has(t[18].data.id))
        },
        m(d, f) {
            R(d, e, f), s && s.m(e, null), v(e, r), l && l.m(e, null), v(e, n);
            for (let p = 0; p < o.length; p += 1) o[p] && o[p].m(e, null);
            R(d, a, f), u && u.m(d, f), R(d, i, f)
        },
        p(d, f) {
            var p;
            if (d[0].selected !== void 0 ? s ? s.p(d, f) : (s = Pr(d), s.c(), s.m(e, r)) : s && (s.d(1), s = null), d[2] ? l ? l.p(d, f) : (l = Vr(d), l.c(), l.m(e, n)) : l && (l.d(1), l = null), f & 609) {
                c = ae(d[6]);
                let b;
                for (b = 0; b < c.length; b += 1) {
                    const D = Ir(d, c, b);
                    o[b] ? o[b].p(D, f) : (o[b] = Fr(D), o[b].c(), o[b].m(e, null))
                }
                for (; b < o.length; b += 1) o[b].d(1);
                o.length = c.length
            }
            f & 33 && ve(e, "shgrid-pkg_selected-tr", (p = d[0].selected) == null ? void 0 : p.has(d[18].data.id)), d[18].isOpen ? u ? u.p(d, f) : (u = Br(d), u.c(), u.m(i.parentNode, i)) : u && (u.d(1), u = null)
        },
        d(d) {
            d && (_(e), _(a), _(i)), s && s.d(), l && l.d(), Ke(o, d), u && u.d(d)
        }
    }
}

function ga(t) {
    let e, r, n, a, i, s, l, c, o, u, d, f, p, b, D, T, g = t[1] && Ar(t),
        h = t[4] && Lr(t),
        m = t[0].selected !== void 0 && Cr(t),
        k = t[2] && Rr(),
        I = ae(t[6]),
        A = [];
    for (let S = 0; S < I.length; S += 1) A[S] = Hr(Sr(t, I, S));
    const P = [ua, oa, sa],
        j = [];

    function le(S, L) {
        return S[0].loading ? 0 : S[0].error !== null ? 1 : 2
    }
    return f = le(t), p = j[f] = P[f](t), D = new Ji({
        props: {
            builder: t[0]
        }
    }), {
        c() {
            e = w("div"), g && g.c(), r = N(), n = w("div"), h && h.c(), a = N(), i = w("table"), s = w("thead"), l = w("tr"), m && m.c(), c = N(), k && k.c(), o = N();
            for (let S = 0; S < A.length; S += 1) A[S].c();
            u = N(), d = w("tbody"), p.c(), b = N(), Le(D.$$.fragment), this.h()
        },
        l(S) {
            e = O(S, "DIV", {
                class: !0
            });
            var L = y(e);
            g && g.l(L), r = H(L), n = O(L, "DIV", {});
            var C = y(n);
            h && h.l(C), a = H(C), i = O(C, "TABLE", {
                class: !0
            });
            var z = y(i);
            s = O(z, "THEAD", {});
            var M = y(s);
            l = O(M, "TR", {});
            var x = y(l);
            m && m.l(x), c = H(x), k && k.l(x), o = H(x);
            for (let V = 0; V < A.length; V += 1) A[V].l(x);
            x.forEach(_), M.forEach(_), u = H(z), d = O(z, "TBODY", {});
            var pe = y(d);
            p.l(pe), pe.forEach(_), z.forEach(_), C.forEach(_), b = H(L), Ce(D.$$.fragment, L), L.forEach(_), this.h()
        },
        h() {
            E(i, "class", "shgrid-pkg_table"), E(e, "class", "shgrid-wrapper")
        },
        m(S, L) {
            R(S, e, L), g && g.m(e, null), v(e, r), v(e, n), h && h.m(n, null), v(n, a), v(n, i), v(i, s), v(s, l), m && m.m(l, null), v(l, c), k && k.m(l, null), v(l, o);
            for (let C = 0; C < A.length; C += 1) A[C] && A[C].m(l, null);
            v(i, u), v(i, d), j[f].m(d, null), v(e, b), Re(D, e, null), T = !0
        },
        p(S, [L]) {
            if (S[1] ? g ? g.p(S, L) : (g = Ar(S), g.c(), g.m(e, r)) : g && (g.d(1), g = null), S[4] ? h ? (h.p(S, L), L & 16 && oe(h, 1)) : (h = Lr(S), h.c(), oe(h, 1), h.m(n, a)) : h && (ft(), de(h, 1, 1, () => {
                    h = null
                }), ht()), S[0].selected !== void 0 ? m ? m.p(S, L) : (m = Cr(S), m.c(), m.m(l, c)) : m && (m.d(1), m = null), S[2] ? k || (k = Rr(), k.c(), k.m(l, o)) : k && (k.d(1), k = null), L & 65) {
                I = ae(S[6]);
                let M;
                for (M = 0; M < I.length; M += 1) {
                    const x = Sr(S, I, M);
                    A[M] ? A[M].p(x, L) : (A[M] = Hr(x), A[M].c(), A[M].m(l, null))
                }
                for (; M < A.length; M += 1) A[M].d(1);
                A.length = I.length
            }
            let C = f;
            f = le(S), f === C ? j[f].p(S, L) : (ft(), de(j[C], 1, 1, () => {
                j[C] = null
            }), ht(), p = j[f], p ? p.p(S, L) : (p = j[f] = P[f](S), p.c()), oe(p, 1), p.m(d, null));
            const z = {};
            L & 1 && (z.builder = S[0]), D.$set(z)
        },
        i(S) {
            T || (oe(h), oe(p), oe(D.$$.fragment, S), T = !0)
        },
        o(S) {
            de(h), de(p), de(D.$$.fragment, S), T = !1
        },
        d(S) {
            S && _(e), g && g.d(), h && h.d(), m && m.d(), k && k.d(), Ke(A, S), j[f].d(), Me(D)
        }
    }
}

function pa(t, e, r) {
    let n, a, {
            hasOptions: i = !0
        } = e,
        {
            canExpandRows: s = !0
        } = e,
        {
            builder: l
        } = e,
        c = () => {
            r(0, l)
        };
    l.setListener(c);
    let o = !1;
    const u = () => {
        o ? (a.forEach(I => {
            var A;
            I.isSelected && ((A = l.selected) == null || A.delete(I.data.id, I.data))
        }), r(3, o = !1)) : (a.forEach(I => {
            var A;
            I.isSelected = !0, (A = l.selected) == null || A.set(I.data.id, I.data)
        }), r(3, o = !0)), r(5, a), r(0, l)
    };
    bn(() => {
        l.buildDataOnLoad || l.buildData()
    });
    let d = !1;
    const f = zt(),
        p = () => r(4, d = !d),
        b = I => u(),
        D = I => l.sortColumn(I.id.toString()),
        T = (I, A, P, j) => {
            r(6, A[P].filter = j.currentTarget.value, n), l.setPage(0), l.buildData()
        },
        g = I => {
            var A, P;
            I.isSelected ? ((A = l.selected) == null || A.delete(I.data.id), r(3, o = !1)) : (P = l.selected) == null || P.set(I.data.id, I.data), console.log(l.selected), f("updatedSelection", l.selected), c()
        },
        h = (I, A, P) => r(5, A[P].isOpen = !I.isOpen, a),
        m = (I, A) => {
            if (I.link !== void 0) return I.link(A.data);
            if (l.rowLink !== void 0) return l.rowLink(A.data)
        },
        k = (I, A, P) => f("cellClick", {
            e: P,
            row: I,
            column: A
        });
    return t.$$set = I => {
        "hasOptions" in I && r(1, i = I.hasOptions), "canExpandRows" in I && r(2, s = I.canExpandRows), "builder" in I && r(0, l = I.builder)
    }, t.$$.update = () => {
        t.$$.dirty & 1 && r(6, n = l.columns.filter(I => !I.hidden)), t.$$.dirty & 1 && r(5, a = l.data.map(I => ({
            data: I,
            isOpen: !1,
            isSelected: l.selected === void 0 ? !1 : l.selected.has(I.id)
        })))
    }, [l, i, s, o, d, a, n, c, u, f, p, b, D, T, g, h, m, k]
}
class Da extends Pe {
    constructor(e) {
        super(), Ve(this, e, pa, ga, He, {
            hasOptions: 1,
            canExpandRows: 2,
            builder: 0
        })
    }
}
class _a {
    sortColumn(e) {
        this.sorters.length === 0 || this.sorters[0][0] !== e ? this.sorters = [
            [e, "asc"]
        ] : this.sorters[0][1] === "asc" ? this.sorters[0][1] = "desc" : this.sorters = [], this.setPage(0), this.buildData()
    }
    triggerRender() {
        this.listener && this.listener()
    }
    setListener(e) {
        this.listener = e
    }
    formatCell(e, r) {
        const n = this.columns.find(a => a.id == r);
        return n === void 0 ? (console.error("formatter could not find column: ", r), "") : n.formatter == null ? e[r] : n.formatter(e)
    }
}
class Ta extends _a {
    constructor({
        columns: r,
        url: n,
        mapper: a,
        additionalFetchOptions: i,
        sorters: s,
        rowLink: l,
        limit: c,
        offset: o,
        limitOptions: u,
        buildQueryForFilters: d,
        buildQueryForSorters: f,
        buildQueryForOffset: p,
        buildQueryForLimit: b,
        selected: D,
        initialData: T,
        debounce: g
    }) {
        super();
        Z(this, "count");
        Z(this, "data");
        Z(this, "paginator");
        Z(this, "pageCount");
        Z(this, "columns");
        Z(this, "sorters");
        Z(this, "mapper");
        Z(this, "url");
        Z(this, "additionalFetchOptions");
        Z(this, "res");
        Z(this, "listener");
        Z(this, "loading");
        Z(this, "rowLink");
        Z(this, "error");
        Z(this, "buildQueryForSorters");
        Z(this, "buildQueryForFilters");
        Z(this, "buildQueryForOffset");
        Z(this, "buildQueryForLimit");
        Z(this, "selected");
        Z(this, "buildDataOnLoad");
        Z(this, "debounce");
        Z(this, "timeout", null);
        this.columns = r, this.mapper = a ? ? (h => h), this.paginator = {
            limit: c ? ? 15,
            offset: o ? ? 0,
            limitOptions: u ? ? null
        }, this.url = new URL(n), this.data = [], this.count = 0, this.additionalFetchOptions = i ? ? {}, this.sorters = s ? ? [], this.loading = !0, this.rowLink = l, this.error = null, this.selected = D, this.buildQueryForSorters = f ? ? ((h, m) => h.append("sort", JSON.stringify(m))), this.buildQueryForFilters = d ? ? ((h, m) => h.append("filters", JSON.stringify(m))), this.buildQueryForOffset = p ? ? ((h, m) => h.append("offset", m.toString())), this.buildQueryForLimit = b ? ? ((h, m) => h.append("limit", m.toString())), this.buildDataOnLoad = T !== void 0, T !== void 0 && (this.loading = !0, T instanceof Promise ? Promise.resolve(T).then(h => {
            this.loading = !1, this.data = h.data, this.count = h.count, this.triggerRender()
        }) : (this.loading = !1, this.data = T.data, this.count = T.count, this.triggerRender())), this.debounce = g ? ? 250
    }
    buildQueryUrl() {
        const r = new URL(this.url),
            n = [];
        for (const i of this.columns) i.filter === void 0 || i.filter === "" || n.push([i.id, i.filter]);
        return this.buildQueryForFilters(r.searchParams, n), this.buildQueryForSorters(r.searchParams, this.sorters), this.buildQueryForOffset(r.searchParams, this.paginator.offset), this.buildQueryForLimit(r.searchParams, this.paginator.limit), r.toString()
    }
    buildData() {
        const r = async () => {
            var n, a;
            this.loading = !0, this.triggerRender();
            try {
                if (this.res = await this.query(this.buildQueryUrl(), {}), this.res.status >= 200 && this.res.status < 300) {
                    this.error = null;
                    const {
                        data: i,
                        count: s
                    } = await this.res.json().then(l => this.mapper(l));
                    this.data = i, this.count = s
                } else this.error = {
                    code: this.res.status,
                    message: (n = this.res) == null ? void 0 : n.statusText
                }
            } catch (i) {
                console.log({
                    e: i
                }), this.error = {
                    code: 500,
                    message: ((a = this.res) == null ? void 0 : a.statusText) ? ? i.message ? ? "Unknown error occurred"
                }
            }
            this.loading = !1, this.triggerRender()
        };
        clearTimeout(this.timeout), this.timeout = setTimeout(r, this.debounce)
    }
    async query(r, n) {
        return await fetch(r, Object.assign(n, this.additionalFetchOptions))
    }
    async setPage(r) {
        this.paginator.offset = this.paginator.limit * r, this.buildData()
    }
}
export {
    Da as S, Ta as a
};