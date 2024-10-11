import {
    ab as me,
    H as gt
} from "./scheduler.Bal8Y2GG.js";
import {
    w as be
} from "./index.fEkeEtJ7.js";
import {
    H as ae,
    S as ke,
    R as Ge
} from "./control.CYgJF_JY.js";
new URL("sveltekit-internal://");

function mt(e, n) {
    return e === "/" || n === "ignore" ? e : n === "never" ? e.endsWith("/") ? e.slice(0, -1) : e : n === "always" && !e.endsWith("/") ? e + "/" : e
}

function _t(e) {
    return e.split("%25").map(decodeURI).join("%25")
}

function yt(e) {
    for (const n in e) e[n] = decodeURIComponent(e[n]);
    return e
}

function de({
    href: e
}) {
    return e.split("#")[0]
}
const wt = ["href", "pathname", "search", "toString", "toJSON"];

function vt(e, n, t) {
    const a = new URL(e);
    Object.defineProperty(a, "searchParams", {
        value: new Proxy(a.searchParams, {
            get(r, o) {
                if (o === "get" || o === "getAll" || o === "has") return i => (t(i), r[o](i));
                n();
                const s = Reflect.get(r, o);
                return typeof s == "function" ? s.bind(r) : s
            }
        }),
        enumerable: !0,
        configurable: !0
    });
    for (const r of wt) Object.defineProperty(a, r, {
        get() {
            return n(), e[r]
        },
        enumerable: !0,
        configurable: !0
    });
    return a
}
const bt = "/__data.json",
    kt = ".html__data.json";

function Et(e) {
    return e.endsWith(".html") ? e.replace(/\.html$/, kt) : e.replace(/\/$/, "") + bt
}

function At(...e) {
    let n = 5381;
    for (const t of e)
        if (typeof t == "string") {
            let a = t.length;
            for (; a;) n = n * 33 ^ t.charCodeAt(--a)
        } else if (ArrayBuffer.isView(t)) {
        const a = new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
        let r = a.length;
        for (; r;) n = n * 33 ^ a[--r]
    } else throw new TypeError("value must be a string or TypedArray");
    return (n >>> 0).toString(36)
}

function St(e) {
    const n = atob(e),
        t = new Uint8Array(n.length);
    for (let a = 0; a < n.length; a++) t[a] = n.charCodeAt(a);
    return t.buffer
}
const Be = window.fetch;
window.fetch = (e, n) => ((e instanceof Request ? e.method : (n == null ? void 0 : n.method) || "GET") !== "GET" && q.delete(Ee(e)), Be(e, n));
const q = new Map;

function Rt(e, n) {
    const t = Ee(e, n),
        a = document.querySelector(t);
    if (a != null && a.textContent) {
        let {
            body: r,
            ...o
        } = JSON.parse(a.textContent);
        const s = a.getAttribute("data-ttl");
        return s && q.set(t, {
            body: r,
            init: o,
            ttl: 1e3 * Number(s)
        }), a.getAttribute("data-b64") !== null && (r = St(r)), Promise.resolve(new Response(r, o))
    }
    return window.fetch(e, n)
}

function It(e, n, t) {
    if (q.size > 0) {
        const a = Ee(e, t),
            r = q.get(a);
        if (r) {
            if (performance.now() < r.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(t == null ? void 0 : t.cache)) return new Response(r.body, r.init);
            q.delete(a)
        }
    }
    return window.fetch(n, t)
}

function Ee(e, n) {
    let a = `script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;
    if (n != null && n.headers || n != null && n.body) {
        const r = [];
        n.headers && r.push([...new Headers(n.headers)].join(",")), n.body && (typeof n.body == "string" || ArrayBuffer.isView(n.body)) && r.push(n.body), a += `[data-hash="${At(...r)}"]`
    }
    return a
}
const Lt = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;

function Pt(e) {
    const n = [];
    return {
        pattern: e === "/" ? /^\/$/ : new RegExp(`^${Ut(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const s=a.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return he(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return he(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const u=Lt.exec(c),[,h,g,d,_]=u;return n.push({name:d,matcher:_,optional:!!h,rest:!!g,chained:g?f===1&&s[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return he(c)}).join("")}).join("")}/?$`),
        params: n
    }
}

function Tt(e) {
    return !/^\([^)]+\)$/.test(e)
}

function Ut(e) {
    return e.slice(1).split("/").filter(Tt)
}

function Nt(e, n, t) {
    const a = {},
        r = e.slice(1),
        o = r.filter(i => i !== void 0);
    let s = 0;
    for (let i = 0; i < n.length; i += 1) {
        const c = n[i];
        let f = r[i - s];
        if (c.chained && c.rest && s && (f = r.slice(i - s, i + 1).filter(u => u).join("/"), s = 0), f === void 0) {
            c.rest && (a[c.name] = "");
            continue
        }
        if (!c.matcher || t[c.matcher](f)) {
            a[c.name] = f;
            const u = n[i + 1],
                h = r[i + 1];
            u && !u.rest && u.optional && h && c.chained && (s = 0), !u && !h && Object.keys(a).length === o.length && (s = 0);
            continue
        }
        if (c.optional && c.chained) {
            s++;
            continue
        }
        return
    }
    if (!s) return a
}

function he(e) {
    return e.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}

function xt({
    nodes: e,
    server_loads: n,
    dictionary: t,
    matchers: a
}) {
    const r = new Set(n);
    return Object.entries(t).map(([i, [c, f, u]]) => {
        const {
            pattern: h,
            params: g
        } = Pt(i), d = {
            id: i,
            exec: _ => {
                const l = h.exec(_);
                if (l) return Nt(l, g, a)
            },
            errors: [1, ...u || []].map(_ => e[_]),
            layouts: [0, ...f || []].map(s),
            leaf: o(c)
        };
        return d.errors.length = d.layouts.length = Math.max(d.errors.length, d.layouts.length), d
    });

    function o(i) {
        const c = i < 0;
        return c && (i = ~i), [c, e[i]]
    }

    function s(i) {
        return i === void 0 ? i : [r.has(i), e[i]]
    }
}

function Ke(e, n = JSON.parse) {
    try {
        return n(sessionStorage[e])
    } catch {}
}

function Oe(e, n, t = JSON.stringify) {
    const a = t(n);
    try {
        sessionStorage[e] = a
    } catch {}
}
var Me;
const P = ((Me = globalThis.__sveltekit_suolzy) == null ? void 0 : Me.base) ? ? "";
var qe;
const Ot = ((qe = globalThis.__sveltekit_suolzy) == null ? void 0 : qe.assets) ? ? P,
    jt = "1720090662488",
    ze = "sveltekit:snapshot",
    Ye = "sveltekit:scroll",
    Je = "sveltekit:states",
    $t = "sveltekit:pageurl",
    D = "sveltekit:history",
    B = "sveltekit:navigation",
    X = {
        tap: 1,
        hover: 2,
        viewport: 3,
        eager: 4,
        off: -1,
        false: -1
    },
    J = location.origin;

function We(e) {
    if (e instanceof URL) return e;
    let n = document.baseURI;
    if (!n) {
        const t = document.getElementsByTagName("base");
        n = t.length ? t[0].href : document.URL
    }
    return new URL(e, n)
}

function Ae() {
    return {
        x: pageXOffset,
        y: pageYOffset
    }
}

function $(e, n) {
    return e.getAttribute(`data-sveltekit-${n}`)
}
const je = { ...X,
    "": X.hover
};

function Xe(e) {
    let n = e.assignedSlot ? ? e.parentNode;
    return (n == null ? void 0 : n.nodeType) === 11 && (n = n.host), n
}

function Ze(e, n) {
    for (; e && e !== n;) {
        if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
        e = Xe(e)
    }
}

function _e(e, n) {
    let t;
    try {
        t = new URL(e instanceof SVGAElement ? e.href.baseVal : e.href, document.baseURI)
    } catch {}
    const a = e instanceof SVGAElement ? e.target.baseVal : e.target,
        r = !t || !!a || re(t, n) || (e.getAttribute("rel") || "").split(/\s+/).includes("external"),
        o = (t == null ? void 0 : t.origin) === J && e.hasAttribute("download");
    return {
        url: t,
        external: r,
        target: a,
        download: o
    }
}

function Z(e) {
    let n = null,
        t = null,
        a = null,
        r = null,
        o = null,
        s = null,
        i = e;
    for (; i && i !== document.documentElement;) a === null && (a = $(i, "preload-code")), r === null && (r = $(i, "preload-data")), n === null && (n = $(i, "keepfocus")), t === null && (t = $(i, "noscroll")), o === null && (o = $(i, "reload")), s === null && (s = $(i, "replacestate")), i = Xe(i);

    function c(f) {
        switch (f) {
            case "":
            case "true":
                return !0;
            case "off":
            case "false":
                return !1;
            default:
                return
        }
    }
    return {
        preload_code: je[a ? ? "off"],
        preload_data: je[r ? ? "off"],
        keepfocus: c(n),
        noscroll: c(t),
        reload: c(o),
        replace_state: c(s)
    }
}

function $e(e) {
    const n = be(e);
    let t = !0;

    function a() {
        t = !0, n.update(s => s)
    }

    function r(s) {
        t = !1, n.set(s)
    }

    function o(s) {
        let i;
        return n.subscribe(c => {
            (i === void 0 || t && c !== i) && s(i = c)
        })
    }
    return {
        notify: a,
        set: r,
        subscribe: o
    }
}

function Dt() {
    const {
        set: e,
        subscribe: n
    } = be(!1);
    let t;
    async function a() {
        clearTimeout(t);
        try {
            const r = await fetch(`${Ot}/_app/version.json`, {
                headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache"
                }
            });
            if (!r.ok) return !1;
            const s = (await r.json()).version !== jt;
            return s && (e(!0), clearTimeout(t)), s
        } catch {
            return !1
        }
    }
    return {
        subscribe: n,
        check: a
    }
}

function re(e, n) {
    return e.origin !== J || !e.pathname.startsWith(n)
}
const Ct = -1,
    Vt = -2,
    Ft = -3,
    Ht = -4,
    Mt = -5,
    qt = -6;

function sn(e, n) {
    return Qe(JSON.parse(e), n)
}

function Qe(e, n) {
    if (typeof e == "number") return r(e, !0);
    if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
    const t = e,
        a = Array(t.length);

    function r(o, s = !1) {
        if (o === Ct) return;
        if (o === Ft) return NaN;
        if (o === Ht) return 1 / 0;
        if (o === Mt) return -1 / 0;
        if (o === qt) return -0;
        if (s) throw new Error("Invalid input");
        if (o in a) return a[o];
        const i = t[o];
        if (!i || typeof i != "object") a[o] = i;
        else if (Array.isArray(i))
            if (typeof i[0] == "string") {
                const c = i[0],
                    f = n == null ? void 0 : n[c];
                if (f) return a[o] = f(r(i[1]));
                switch (c) {
                    case "Date":
                        a[o] = new Date(i[1]);
                        break;
                    case "Set":
                        const u = new Set;
                        a[o] = u;
                        for (let d = 1; d < i.length; d += 1) u.add(r(i[d]));
                        break;
                    case "Map":
                        const h = new Map;
                        a[o] = h;
                        for (let d = 1; d < i.length; d += 2) h.set(r(i[d]), r(i[d + 1]));
                        break;
                    case "RegExp":
                        a[o] = new RegExp(i[1], i[2]);
                        break;
                    case "Object":
                        a[o] = Object(i[1]);
                        break;
                    case "BigInt":
                        a[o] = BigInt(i[1]);
                        break;
                    case "null":
                        const g = Object.create(null);
                        a[o] = g;
                        for (let d = 1; d < i.length; d += 2) g[i[d]] = r(i[d + 1]);
                        break;
                    default:
                        throw new Error(`Unknown type ${c}`)
                }
            } else {
                const c = new Array(i.length);
                a[o] = c;
                for (let f = 0; f < i.length; f += 1) {
                    const u = i[f];
                    u !== Vt && (c[f] = r(u))
                }
            }
        else {
            const c = {};
            a[o] = c;
            for (const f in i) {
                const u = i[f];
                c[f] = r(u)
            }
        }
        return a[o]
    }
    return r(0)
}
const et = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...et];
const Gt = new Set([...et]);
[...Gt];

function Bt(e) {
    return e.filter(n => n != null)
}
const Kt = "x-sveltekit-invalidated",
    zt = "x-sveltekit-trailing-slash";

function Q(e) {
    return e instanceof ae || e instanceof ke ? e.status : 500
}

function Yt(e) {
    return e instanceof ke ? e.text : "Internal Error"
}
const j = Ke(Ye) ? ? {},
    K = Ke(ze) ? ? {},
    U = {
        url: $e({}),
        page: $e({}),
        navigating: be(null),
        updated: Dt()
    };

function Se(e) {
    j[e] = Ae()
}

function Jt(e, n) {
    let t = e + 1;
    for (; j[t];) delete j[t], t += 1;
    for (t = n + 1; K[t];) delete K[t], t += 1
}

function V(e) {
    return location.href = e.href, new Promise(() => {})
}

function De() {}
let oe, ye, ee, T, we, H;
const tt = [],
    te = [];
let I = null;
const Re = [],
    nt = [];
let x = [],
    y = {
        branch: [],
        error: null,
        url: null
    },
    Ie = !1,
    ne = !1,
    Ce = !0,
    z = !1,
    M = !1,
    at = !1,
    ie = !1,
    O, A, L, S, F;
const G = new Set;
let pe;
async function cn(e, n, t) {
    var r, o;
    document.URL !== location.href && (location.href = location.href), H = e, oe = xt(e), T = document.documentElement, we = n, ye = e.nodes[0], ee = e.nodes[1], ye(), ee(), A = (r = history.state) == null ? void 0 : r[D], L = (o = history.state) == null ? void 0 : o[B], A || (A = L = Date.now(), history.replaceState({ ...history.state,
        [D]: A,
        [B]: L
    }, ""));
    const a = j[A];
    a && (history.scrollRestoration = "manual", scrollTo(a.x, a.y)), t ? await nn(we, t) : en(location.href, {
        replaceState: !0
    }), tn()
}
async function Wt() {
    if (await (pe || (pe = Promise.resolve())), !pe) return;
    pe = null;
    const e = le(y.url, !0);
    I = null;
    const n = F = {},
        t = e && await Te(e);
    if (!(!t || n !== F)) {
        if (t.type === "redirect") return se(new URL(t.location, y.url).href, {}, 1, n);
        t.props.page && (S = t.props.page), y = t.state, rt(), O.$set(t.props)
    }
}

function rt() {
    tt.length = 0, ie = !1
}

function ot(e) {
    te.some(n => n == null ? void 0 : n.snapshot) && (K[e] = te.map(n => {
        var t;
        return (t = n == null ? void 0 : n.snapshot) == null ? void 0 : t.capture()
    }))
}

function it(e) {
    var n;
    (n = K[e]) == null || n.forEach((t, a) => {
        var r, o;
        (o = (r = te[a]) == null ? void 0 : r.snapshot) == null || o.restore(t)
    })
}

function Ve() {
    Se(A), Oe(Ye, j), ot(L), Oe(ze, K)
}
async function se(e, n, t, a) {
    return W({
        type: "goto",
        url: We(e),
        keepfocus: n.keepFocus,
        noscroll: n.noScroll,
        replace_state: n.replaceState,
        state: n.state,
        redirect_count: t,
        nav_token: a,
        accept: () => {
            n.invalidateAll && (ie = !0)
        }
    })
}
async function Xt(e) {
    if (e.id !== (I == null ? void 0 : I.id)) {
        const n = {};
        G.add(n), I = {
            id: e.id,
            token: n,
            promise: Te({ ...e,
                preload: n
            }).then(t => (G.delete(n), t.type === "loaded" && t.state.error && (I = null), t))
        }
    }
    return I.promise
}
async function ge(e) {
    const n = oe.find(t => t.exec(lt(e)));
    n && await Promise.all([...n.layouts, n.leaf].map(t => t == null ? void 0 : t[1]()))
}

function st(e, n, t) {
    var o;
    y = e.state;
    const a = document.querySelector("style[data-sveltekit]");
    a && a.remove(), S = e.props.page, O = new H.root({
        target: n,
        props: { ...e.props,
            stores: U,
            components: te
        },
        hydrate: t
    }), it(L);
    const r = {
        from: null,
        to: {
            params: y.params,
            route: {
                id: ((o = y.route) == null ? void 0 : o.id) ? ? null
            },
            url: new URL(location.href)
        },
        willUnload: !1,
        type: "enter",
        complete: Promise.resolve()
    };
    x.forEach(s => s(r)), ne = !0
}
async function Y({
    url: e,
    params: n,
    branch: t,
    status: a,
    error: r,
    route: o,
    form: s
}) {
    let i = "never";
    if (P && (e.pathname === P || e.pathname === P + "/")) i = "always";
    else
        for (const d of t)(d == null ? void 0 : d.slash) !== void 0 && (i = d.slash);
    e.pathname = mt(e.pathname, i), e.search = e.search;
    const c = {
        type: "loaded",
        state: {
            url: e,
            params: n,
            branch: t,
            error: r,
            route: o
        },
        props: {
            constructors: Bt(t).map(d => d.node.component),
            page: S
        }
    };
    s !== void 0 && (c.props.form = s);
    let f = {},
        u = !S,
        h = 0;
    for (let d = 0; d < Math.max(t.length, y.branch.length); d += 1) {
        const _ = t[d],
            l = y.branch[d];
        (_ == null ? void 0 : _.data) !== (l == null ? void 0 : l.data) && (u = !0), _ && (f = { ...f,
            ..._.data
        }, u && (c.props[`data_${h}`] = f), h += 1)
    }
    return (!y.url || e.href !== y.url.href || y.error !== r || s !== void 0 && s !== S.form || u) && (c.props.page = {
        error: r,
        params: n,
        route: {
            id: (o == null ? void 0 : o.id) ? ? null
        },
        state: {},
        status: a,
        url: new URL(e),
        form: s ? ? null,
        data: u ? f : S.data
    }), c
}
async function Le({
    loader: e,
    parent: n,
    url: t,
    params: a,
    route: r,
    server_data_node: o
}) {
    var u, h, g;
    let s = null,
        i = !0;
    const c = {
            dependencies: new Set,
            params: new Set,
            parent: !1,
            route: !1,
            url: !1,
            search_params: new Set
        },
        f = await e();
    if ((u = f.universal) != null && u.load) {
        let d = function(...l) {
            for (const m of l) {
                const {
                    href: b
                } = new URL(m, t);
                c.dependencies.add(b)
            }
        };
        const _ = {
            route: new Proxy(r, {
                get: (l, m) => (i && (c.route = !0), l[m])
            }),
            params: new Proxy(a, {
                get: (l, m) => (i && c.params.add(m), l[m])
            }),
            data: (o == null ? void 0 : o.data) ? ? null,
            url: vt(t, () => {
                i && (c.url = !0)
            }, l => {
                i && c.search_params.add(l)
            }),
            async fetch(l, m) {
                let b;
                l instanceof Request ? (b = l.url, m = {
                    body: l.method === "GET" || l.method === "HEAD" ? void 0 : await l.blob(),
                    cache: l.cache,
                    credentials: l.credentials,
                    headers: l.headers,
                    integrity: l.integrity,
                    keepalive: l.keepalive,
                    method: l.method,
                    mode: l.mode,
                    redirect: l.redirect,
                    referrer: l.referrer,
                    referrerPolicy: l.referrerPolicy,
                    signal: l.signal,
                    ...m
                }) : b = l;
                const R = new URL(b, t);
                return i && d(R.href), R.origin === t.origin && (b = R.href.slice(t.origin.length)), ne ? It(b, R.href, m) : Rt(b, m)
            },
            setHeaders: () => {},
            depends: d,
            parent() {
                return i && (c.parent = !0), n()
            },
            untrack(l) {
                i = !1;
                try {
                    return l()
                } finally {
                    i = !0
                }
            }
        };
        s = await f.universal.load.call(null, _) ? ? null
    }
    return {
        node: f,
        loader: e,
        server: o,
        universal: (h = f.universal) != null && h.load ? {
            type: "data",
            data: s,
            uses: c
        } : null,
        data: s ? ? (o == null ? void 0 : o.data) ? ? null,
        slash: ((g = f.universal) == null ? void 0 : g.trailingSlash) ? ? (o == null ? void 0 : o.slash)
    }
}

function Fe(e, n, t, a, r, o) {
    if (ie) return !0;
    if (!r) return !1;
    if (r.parent && e || r.route && n || r.url && t) return !0;
    for (const s of r.search_params)
        if (a.has(s)) return !0;
    for (const s of r.params)
        if (o[s] !== y.params[s]) return !0;
    for (const s of r.dependencies)
        if (tt.some(i => i(new URL(s)))) return !0;
    return !1
}

function Pe(e, n) {
    return (e == null ? void 0 : e.type) === "data" ? e : (e == null ? void 0 : e.type) === "skip" ? n ? ? null : null
}

function Zt(e, n) {
    if (!e) return new Set(n.searchParams.keys());
    const t = new Set([...e.searchParams.keys(), ...n.searchParams.keys()]);
    for (const a of t) {
        const r = e.searchParams.getAll(a),
            o = n.searchParams.getAll(a);
        r.every(s => o.includes(s)) && o.every(s => r.includes(s)) && t.delete(a)
    }
    return t
}

function He({
    error: e,
    url: n,
    route: t,
    params: a
}) {
    return {
        type: "loaded",
        state: {
            error: e,
            url: n,
            route: t,
            params: a,
            branch: []
        },
        props: {
            page: S,
            constructors: []
        }
    }
}
async function Te({
    id: e,
    invalidating: n,
    url: t,
    params: a,
    route: r,
    preload: o
}) {
    if ((I == null ? void 0 : I.id) === e) return G.delete(I.token), I.promise;
    const {
        errors: s,
        layouts: i,
        leaf: c
    } = r, f = [...i, c];
    s.forEach(p => p == null ? void 0 : p().catch(() => {})), f.forEach(p => p == null ? void 0 : p[1]().catch(() => {}));
    let u = null;
    const h = y.url ? e !== y.url.pathname + y.url.search : !1,
        g = y.route ? r.id !== y.route.id : !1,
        d = Zt(y.url, t);
    let _ = !1;
    const l = f.map((p, v) => {
        var N;
        const k = y.branch[v],
            E = !!(p != null && p[0]) && ((k == null ? void 0 : k.loader) !== p[1] || Fe(_, g, h, d, (N = k.server) == null ? void 0 : N.uses, a));
        return E && (_ = !0), E
    });
    if (l.some(Boolean)) {
        try {
            u = await dt(t, l)
        } catch (p) {
            const v = await C(p, {
                url: t,
                params: a,
                route: {
                    id: e
                }
            });
            return G.has(o) ? He({
                error: v,
                url: t,
                params: a,
                route: r
            }) : ce({
                status: Q(p),
                error: v,
                url: t,
                route: r
            })
        }
        if (u.type === "redirect") return u
    }
    const m = u == null ? void 0 : u.nodes;
    let b = !1;
    const R = f.map(async (p, v) => {
        var fe;
        if (!p) return;
        const k = y.branch[v],
            E = m == null ? void 0 : m[v];
        if ((!E || E.type === "skip") && p[1] === (k == null ? void 0 : k.loader) && !Fe(b, g, h, d, (fe = k.universal) == null ? void 0 : fe.uses, a)) return k;
        if (b = !0, (E == null ? void 0 : E.type) === "error") throw E;
        return Le({
            loader: p[1],
            url: t,
            params: a,
            route: r,
            parent: async () => {
                var xe;
                const Ne = {};
                for (let ue = 0; ue < v; ue += 1) Object.assign(Ne, (xe = await R[ue]) == null ? void 0 : xe.data);
                return Ne
            },
            server_data_node: Pe(E === void 0 && p[0] ? {
                type: "skip"
            } : E ? ? null, p[0] ? k == null ? void 0 : k.server : void 0)
        })
    });
    for (const p of R) p.catch(() => {});
    const w = [];
    for (let p = 0; p < f.length; p += 1)
        if (f[p]) try {
            w.push(await R[p])
        } catch (v) {
            if (v instanceof Ge) return {
                type: "redirect",
                location: v.location
            };
            if (G.has(o)) return He({
                error: await C(v, {
                    params: a,
                    url: t,
                    route: {
                        id: r.id
                    }
                }),
                url: t,
                params: a,
                route: r
            });
            let k = Q(v),
                E;
            if (m != null && m.includes(v)) k = v.status ? ? k, E = v.error;
            else if (v instanceof ae) E = v.body;
            else {
                if (await U.updated.check()) return await V(t);
                E = await C(v, {
                    params: a,
                    url: t,
                    route: {
                        id: r.id
                    }
                })
            }
            const N = await ct(p, w, s);
            return N ? await Y({
                url: t,
                params: a,
                branch: w.slice(0, N.idx).concat(N.node),
                status: k,
                error: E,
                route: r
            }) : await ut(t, {
                id: r.id
            }, E, k)
        } else w.push(void 0);
    return await Y({
        url: t,
        params: a,
        branch: w,
        status: 200,
        error: null,
        route: r,
        form: n ? void 0 : null
    })
}
async function ct(e, n, t) {
    for (; e--;)
        if (t[e]) {
            let a = e;
            for (; !n[a];) a -= 1;
            try {
                return {
                    idx: a + 1,
                    node: {
                        node: await t[e](),
                        loader: t[e],
                        data: {},
                        server: null,
                        universal: null
                    }
                }
            } catch {
                continue
            }
        }
}
async function ce({
    status: e,
    error: n,
    url: t,
    route: a
}) {
    const r = {};
    let o = null;
    if (H.server_loads[0] === 0) try {
        const f = await dt(t, [!0]);
        if (f.type !== "data" || f.nodes[0] && f.nodes[0].type !== "data") throw 0;
        o = f.nodes[0] ? ? null
    } catch {
        (t.origin !== J || t.pathname !== location.pathname || Ie) && await V(t)
    }
    const i = await Le({
            loader: ye,
            url: t,
            params: r,
            route: a,
            parent: () => Promise.resolve({}),
            server_data_node: Pe(o)
        }),
        c = {
            node: await ee(),
            loader: ee,
            universal: null,
            server: null,
            data: null
        };
    return await Y({
        url: t,
        params: r,
        branch: [i, c],
        status: e,
        error: n,
        route: null
    })
}

function le(e, n) {
    if (!e || re(e, P)) return;
    let t;
    try {
        t = H.hooks.reroute({
            url: new URL(e)
        }) ? ? e.pathname
    } catch {
        return
    }
    const a = lt(t);
    for (const r of oe) {
        const o = r.exec(a);
        if (o) return {
            id: e.pathname + e.search,
            invalidating: n,
            route: r,
            params: yt(o),
            url: e
        }
    }
}

function lt(e) {
    return _t(e.slice(P.length) || "/")
}

function ft({
    url: e,
    type: n,
    intent: t,
    delta: a
}) {
    let r = !1;
    const o = pt(y, t, e, n);
    a !== void 0 && (o.navigation.delta = a);
    const s = { ...o.navigation,
        cancel: () => {
            r = !0, o.reject(new Error("navigation cancelled"))
        }
    };
    return z || Re.forEach(i => i(s)), r ? null : o
}
async function W({
    type: e,
    url: n,
    popped: t,
    keepfocus: a,
    noscroll: r,
    replace_state: o,
    state: s = {},
    redirect_count: i = 0,
    nav_token: c = {},
    accept: f = De,
    block: u = De
}) {
    const h = le(n, !1),
        g = ft({
            url: n,
            type: e,
            delta: t == null ? void 0 : t.delta,
            intent: h
        });
    if (!g) {
        u();
        return
    }
    const d = A,
        _ = L;
    f(), z = !0, ne && U.navigating.set(g.navigation), F = c;
    let l = h && await Te(h);
    if (!l) {
        if (re(n, P)) return await V(n);
        l = await ut(n, {
            id: null
        }, await C(new ke(404, "Not Found", `Not found: ${n.pathname}`), {
            url: n,
            params: {},
            route: {
                id: null
            }
        }), 404)
    }
    if (n = (h == null ? void 0 : h.url) || n, F !== c) return g.reject(new Error("navigation aborted")), !1;
    if (l.type === "redirect")
        if (i >= 20) l = await ce({
            status: 500,
            error: await C(new Error("Redirect loop"), {
                url: n,
                params: {},
                route: {
                    id: null
                }
            }),
            url: n,
            route: {
                id: null
            }
        });
        else return se(new URL(l.location, n).href, {}, i + 1, c), !1;
    else l.props.page.status >= 400 && await U.updated.check() && await V(n);
    if (rt(), Se(d), ot(_), l.props.page.url.pathname !== n.pathname && (n.pathname = l.props.page.url.pathname), s = t ? t.state : s, !t) {
        const w = o ? 0 : 1,
            p = {
                [D]: A += w,
                [B]: L += w,
                [Je]: s
            };
        (o ? history.replaceState : history.pushState).call(history, p, "", n), o || Jt(A, L)
    }
    if (I = null, l.props.page.state = s, ne) {
        y = l.state, l.props.page && (l.props.page.url = n);
        const w = (await Promise.all(nt.map(p => p(g.navigation)))).filter(p => typeof p == "function");
        if (w.length > 0) {
            let p = function() {
                x = x.filter(v => !w.includes(v))
            };
            w.push(p), x.push(...w)
        }
        O.$set(l.props), at = !0
    } else st(l, we, !1);
    const {
        activeElement: m
    } = document;
    await me();
    const b = t ? t.scroll : r ? Ae() : null;
    if (Ce) {
        const w = n.hash && document.getElementById(decodeURIComponent(n.hash.slice(1)));
        b ? scrollTo(b.x, b.y) : w ? w.scrollIntoView() : scrollTo(0, 0)
    }
    const R = document.activeElement !== m && document.activeElement !== document.body;
    !a && !R && ve(), Ce = !0, l.props.page && (S = l.props.page), z = !1, e === "popstate" && it(L), g.fulfil(void 0), x.forEach(w => w(g.navigation)), U.navigating.set(null)
}
async function ut(e, n, t, a) {
    return e.origin === J && e.pathname === location.pathname && !Ie ? await ce({
        status: a,
        error: t,
        url: e,
        route: n
    }) : await V(e)
}

function Qt() {
    let e;
    T.addEventListener("mousemove", o => {
        const s = o.target;
        clearTimeout(e), e = setTimeout(() => {
            a(s, 2)
        }, 20)
    });

    function n(o) {
        a(o.composedPath()[0], 1)
    }
    T.addEventListener("mousedown", n), T.addEventListener("touchstart", n, {
        passive: !0
    });
    const t = new IntersectionObserver(o => {
        for (const s of o) s.isIntersecting && (ge(s.target.href), t.unobserve(s.target))
    }, {
        threshold: 0
    });

    function a(o, s) {
        const i = Ze(o, T);
        if (!i) return;
        const {
            url: c,
            external: f,
            download: u
        } = _e(i, P);
        if (f || u) return;
        const h = Z(i);
        if (!h.reload)
            if (s <= h.preload_data) {
                const g = le(c, !1);
                g && Xt(g)
            } else s <= h.preload_code && ge(c.pathname)
    }

    function r() {
        t.disconnect();
        for (const o of T.querySelectorAll("a")) {
            const {
                url: s,
                external: i,
                download: c
            } = _e(o, P);
            if (i || c) continue;
            const f = Z(o);
            f.reload || (f.preload_code === X.viewport && t.observe(o), f.preload_code === X.eager && ge(s.pathname))
        }
    }
    x.push(r), r()
}

function C(e, n) {
    if (e instanceof ae) return e.body;
    const t = Q(e),
        a = Yt(e);
    return H.hooks.handleError({
        error: e,
        event: n,
        status: t,
        message: a
    }) ? ? {
        message: a
    }
}

function Ue(e, n) {
    gt(() => (e.push(n), () => {
        const t = e.indexOf(n);
        e.splice(t, 1)
    }))
}

function ln(e) {
    Ue(x, e)
}

function fn(e) {
    Ue(Re, e)
}

function un(e) {
    Ue(nt, e)
}

function en(e, n = {}) {
    return e = We(e), e.origin !== J ? Promise.reject(new Error("goto: invalid URL")) : se(e, n, 0)
}

function dn() {
    return ie = !0, Wt()
}
async function hn(e) {
    if (e.type === "error") {
        const n = new URL(location.href),
            {
                branch: t,
                route: a
            } = y;
        if (!a) return;
        const r = await ct(y.branch.length, t, a.errors);
        if (r) {
            const o = await Y({
                url: n,
                params: y.params,
                branch: t.slice(0, r.idx).concat(r.node),
                status: e.status ? ? 500,
                error: e.error,
                route: a
            });
            y = o.state, O.$set(o.props), me().then(ve)
        }
    } else e.type === "redirect" ? se(e.location, {
        invalidateAll: !0
    }, 0) : (O.$set({
        form: null,
        page: { ...S,
            form: e.data,
            status: e.status
        }
    }), await me(), O.$set({
        form: e.data
    }), e.type === "success" && ve())
}

function tn() {
    var n;
    history.scrollRestoration = "manual", addEventListener("beforeunload", t => {
        let a = !1;
        if (Ve(), !z) {
            const r = pt(y, void 0, null, "leave"),
                o = { ...r.navigation,
                    cancel: () => {
                        a = !0, r.reject(new Error("navigation cancelled"))
                    }
                };
            Re.forEach(s => s(o))
        }
        a ? (t.preventDefault(), t.returnValue = "") : history.scrollRestoration = "auto"
    }), addEventListener("visibilitychange", () => {
        document.visibilityState === "hidden" && Ve()
    }), (n = navigator.connection) != null && n.saveData || Qt(), T.addEventListener("click", async t => {
        var g;
        if (t.button || t.which !== 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.defaultPrevented) return;
        const a = Ze(t.composedPath()[0], T);
        if (!a) return;
        const {
            url: r,
            external: o,
            target: s,
            download: i
        } = _e(a, P);
        if (!r) return;
        if (s === "_parent" || s === "_top") {
            if (window.parent !== window) return
        } else if (s && s !== "_self") return;
        const c = Z(a);
        if (!(a instanceof SVGAElement) && r.protocol !== location.protocol && !(r.protocol === "https:" || r.protocol === "http:") || i) return;
        if (o || c.reload) {
            ft({
                url: r,
                type: "link"
            }) ? z = !0 : t.preventDefault();
            return
        }
        const [u, h] = r.href.split("#");
        if (h !== void 0 && u === de(location)) {
            const [, d] = y.url.href.split("#");
            if (d === h) {
                t.preventDefault(), h === "" || h === "top" && a.ownerDocument.getElementById("top") === null ? window.scrollTo({
                    top: 0
                }) : (g = a.ownerDocument.getElementById(h)) == null || g.scrollIntoView();
                return
            }
            if (M = !0, Se(A), e(r), !c.replace_state) return;
            M = !1
        }
        t.preventDefault(), await new Promise(d => {
            requestAnimationFrame(() => {
                setTimeout(d, 0)
            }), setTimeout(d, 100)
        }), W({
            type: "link",
            url: r,
            keepfocus: c.keepfocus,
            noscroll: c.noscroll,
            replace_state: c.replace_state ? ? r.href === location.href
        })
    }), T.addEventListener("submit", t => {
        if (t.defaultPrevented) return;
        const a = HTMLFormElement.prototype.cloneNode.call(t.target),
            r = t.submitter;
        if (((r == null ? void 0 : r.formMethod) || a.method) !== "get") return;
        const s = new URL((r == null ? void 0 : r.hasAttribute("formaction")) && (r == null ? void 0 : r.formAction) || a.action);
        if (re(s, P)) return;
        const i = t.target,
            c = Z(i);
        if (c.reload) return;
        t.preventDefault(), t.stopPropagation();
        const f = new FormData(i),
            u = r == null ? void 0 : r.getAttribute("name");
        u && f.append(u, (r == null ? void 0 : r.getAttribute("value")) ? ? ""), s.search = new URLSearchParams(f).toString(), W({
            type: "form",
            url: s,
            keepfocus: c.keepfocus,
            noscroll: c.noscroll,
            replace_state: c.replace_state ? ? s.href === location.href
        })
    }), addEventListener("popstate", async t => {
        var a;
        if ((a = t.state) != null && a[D]) {
            const r = t.state[D];
            if (F = {}, r === A) return;
            const o = j[r],
                s = t.state[Je] ? ? {},
                i = new URL(t.state[$t] ? ? location.href),
                c = t.state[B],
                f = de(location) === de(y.url);
            if (c === L && (at || f)) {
                e(i), j[A] = Ae(), o && scrollTo(o.x, o.y), s !== S.state && (S = { ...S,
                    state: s
                }, O.$set({
                    page: S
                })), A = r;
                return
            }
            const h = r - A;
            await W({
                type: "popstate",
                url: i,
                popped: {
                    state: s,
                    scroll: o,
                    delta: h
                },
                accept: () => {
                    A = r, L = c
                },
                block: () => {
                    history.go(-h)
                },
                nav_token: F
            })
        } else if (!M) {
            const r = new URL(location.href);
            e(r)
        }
    }), addEventListener("hashchange", () => {
        M && (M = !1, history.replaceState({ ...history.state,
            [D]: ++A,
            [B]: L
        }, "", location.href))
    });
    for (const t of document.querySelectorAll("link")) t.rel === "icon" && (t.href = t.href);
    addEventListener("pageshow", t => {
        t.persisted && U.navigating.set(null)
    });

    function e(t) {
        y.url = t, U.page.set({ ...S,
            url: t
        }), U.page.notify()
    }
}
async function nn(e, {
    status: n = 200,
    error: t,
    node_ids: a,
    params: r,
    route: o,
    data: s,
    form: i
}) {
    Ie = !0;
    const c = new URL(location.href);
    ({
        params: r = {},
        route: o = {
            id: null
        }
    } = le(c, !1) || {});
    let f;
    try {
        const u = a.map(async (d, _) => {
                const l = s[_];
                return l != null && l.uses && (l.uses = ht(l.uses)), Le({
                    loader: H.nodes[d],
                    url: c,
                    params: r,
                    route: o,
                    parent: async () => {
                        const m = {};
                        for (let b = 0; b < _; b += 1) Object.assign(m, (await u[b]).data);
                        return m
                    },
                    server_data_node: Pe(l)
                })
            }),
            h = await Promise.all(u),
            g = oe.find(({
                id: d
            }) => d === o.id);
        if (g) {
            const d = g.layouts;
            for (let _ = 0; _ < d.length; _++) d[_] || h.splice(_, 0, void 0)
        }
        f = await Y({
            url: c,
            params: r,
            branch: h,
            status: n,
            error: t,
            form: i,
            route: g ? ? null
        })
    } catch (u) {
        if (u instanceof Ge) {
            await V(new URL(u.location, location.href));
            return
        }
        f = await ce({
            status: Q(u),
            error: await C(u, {
                url: c,
                params: r,
                route: o
            }),
            url: c,
            route: o
        })
    }
    f.props.page && (f.props.page.state = {}), st(f, e, !0)
}
async function dt(e, n) {
    var r;
    const t = new URL(e);
    t.pathname = Et(e.pathname), e.pathname.endsWith("/") && t.searchParams.append(zt, "1"), t.searchParams.append(Kt, n.map(o => o ? "1" : "0").join(""));
    const a = await Be(t.href);
    if (!a.ok) {
        let o;
        throw (r = a.headers.get("content-type")) != null && r.includes("application/json") ? o = await a.json() : a.status === 404 ? o = "Not Found" : a.status === 500 && (o = "Internal Error"), new ae(a.status, o)
    }
    return new Promise(async o => {
        var h;
        const s = new Map,
            i = a.body.getReader(),
            c = new TextDecoder;

        function f(g) {
            return Qe(g, {
                Promise: d => new Promise((_, l) => {
                    s.set(d, {
                        fulfil: _,
                        reject: l
                    })
                })
            })
        }
        let u = "";
        for (;;) {
            const {
                done: g,
                value: d
            } = await i.read();
            if (g && !u) break;
            for (u += !d && u ? `
` : c.decode(d, {
                    stream: !0
                });;) {
                const _ = u.indexOf(`
`);
                if (_ === -1) break;
                const l = JSON.parse(u.slice(0, _));
                if (u = u.slice(_ + 1), l.type === "redirect") return o(l);
                if (l.type === "data")(h = l.nodes) == null || h.forEach(m => {
                    (m == null ? void 0 : m.type) === "data" && (m.uses = ht(m.uses), m.data = f(m.data))
                }), o(l);
                else if (l.type === "chunk") {
                    const {
                        id: m,
                        data: b,
                        error: R
                    } = l, w = s.get(m);
                    s.delete(m), R ? w.reject(f(R)) : w.fulfil(f(b))
                }
            }
        }
    })
}

function ht(e) {
    return {
        dependencies: new Set((e == null ? void 0 : e.dependencies) ? ? []),
        params: new Set((e == null ? void 0 : e.params) ? ? []),
        parent: !!(e != null && e.parent),
        route: !!(e != null && e.route),
        url: !!(e != null && e.url),
        search_params: new Set((e == null ? void 0 : e.search_params) ? ? [])
    }
}

function ve() {
    const e = document.querySelector("[autofocus]");
    if (e) e.focus();
    else {
        const n = document.body,
            t = n.getAttribute("tabindex");
        n.tabIndex = -1, n.focus({
            preventScroll: !0,
            focusVisible: !1
        }), t !== null ? n.setAttribute("tabindex", t) : n.removeAttribute("tabindex");
        const a = getSelection();
        if (a && a.type !== "None") {
            const r = [];
            for (let o = 0; o < a.rangeCount; o += 1) r.push(a.getRangeAt(o));
            setTimeout(() => {
                if (a.rangeCount === r.length) {
                    for (let o = 0; o < a.rangeCount; o += 1) {
                        const s = r[o],
                            i = a.getRangeAt(o);
                        if (s.commonAncestorContainer !== i.commonAncestorContainer || s.startContainer !== i.startContainer || s.endContainer !== i.endContainer || s.startOffset !== i.startOffset || s.endOffset !== i.endOffset) return
                    }
                    a.removeAllRanges()
                }
            })
        }
    }
}

function pt(e, n, t, a) {
    var c, f;
    let r, o;
    const s = new Promise((u, h) => {
        r = u, o = h
    });
    return s.catch(() => {}), {
        navigation: {
            from: {
                params: e.params,
                route: {
                    id: ((c = e.route) == null ? void 0 : c.id) ? ? null
                },
                url: e.url
            },
            to: t && {
                params: (n == null ? void 0 : n.params) ? ? null,
                route: {
                    id: ((f = n == null ? void 0 : n.route) == null ? void 0 : f.id) ? ? null
                },
                url: t
            },
            willUnload: !n,
            type: a,
            complete: s
        },
        fulfil: r,
        reject: o
    }
}
export {
    ln as a, fn as b, hn as c, cn as d, en as g, dn as i, un as o, sn as p, U as s
};