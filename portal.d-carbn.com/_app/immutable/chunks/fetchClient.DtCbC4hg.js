import {
    e as k
} from "./public.DoyVH2H6.js";
const H = {
        "Content-Type": "application/json"
    },
    D = /\{[^{}]+\}/g;
class I extends Request {
    constructor(t, e) {
        super(t, e);
        for (const n in e) n in this || (this[n] = e[n])
    }
}

function F(r) {
    let {
        baseUrl: t = "",
        fetch: e = globalThis.fetch,
        querySerializer: n,
        bodySerializer: s,
        headers: i,
        ...o
    } = { ...r
    };
    t.endsWith("/") && (t = t.substring(0, t.length - 1)), i = C(H, i);
    const c = [];
    async function u(l, a) {
        const {
            fetch: m = e,
            headers: q,
            params: w = {},
            parseAs: j = "json",
            querySerializer: R,
            bodySerializer: S = s ? ? N,
            ...P
        } = a || {};
        let T = typeof n == "function" ? n : $(n);
        R && (T = typeof R == "function" ? R : $({ ...typeof n == "object" ? n : {},
            ...R
        }));
        const h = {
            redirect: "follow",
            ...o,
            ...P,
            headers: C(i, q, w.header)
        };
        h.body && (h.body = S(h.body)), h.body instanceof FormData && h.headers.delete("Content-Type");
        let b = new I(v(l, {
            baseUrl: t,
            params: w,
            querySerializer: T
        }), h);
        const A = {
            baseUrl: t,
            fetch: m,
            parseAs: j,
            querySerializer: T,
            bodySerializer: S
        };
        for (const d of c)
            if (d && typeof d == "object" && typeof d.onRequest == "function") {
                b.schemaPath = l, b.params = w;
                const y = await d.onRequest(b, A);
                if (y) {
                    if (!(y instanceof Request)) throw new Error("Middleware must return new Request() when modifying the request");
                    b = y
                }
            }
        let f = await m(b);
        for (let d = c.length - 1; d >= 0; d--) {
            const y = c[d];
            if (y && typeof y == "object" && typeof y.onResponse == "function") {
                const E = await y.onResponse(f, A);
                if (E) {
                    if (!(E instanceof Response)) throw new Error("Middleware must return new Response() when modifying the response");
                    f = E
                }
            }
        }
        if (f.status === 204 || f.headers.get("Content-Length") === "0") return f.ok ? {
            data: {},
            response: f
        } : {
            error: {},
            response: f
        };
        if (f.ok) return j === "stream" ? {
            data: f.body,
            response: f
        } : {
            data: await f[j](),
            response: f
        };
        let g = await f.text();
        try {
            g = JSON.parse(g)
        } catch {}
        return {
            error: g,
            response: f
        }
    }
    return {
        async GET(l, a) {
            return u(l, { ...a,
                method: "GET"
            })
        },
        async PUT(l, a) {
            return u(l, { ...a,
                method: "PUT"
            })
        },
        async POST(l, a) {
            return u(l, { ...a,
                method: "POST"
            })
        },
        async DELETE(l, a) {
            return u(l, { ...a,
                method: "DELETE"
            })
        },
        async OPTIONS(l, a) {
            return u(l, { ...a,
                method: "OPTIONS"
            })
        },
        async HEAD(l, a) {
            return u(l, { ...a,
                method: "HEAD"
            })
        },
        async PATCH(l, a) {
            return u(l, { ...a,
                method: "PATCH"
            })
        },
        async TRACE(l, a) {
            return u(l, { ...a,
                method: "TRACE"
            })
        },
        use(...l) {
            for (const a of l)
                if (a) {
                    if (typeof a != "object" || !("onRequest" in a || "onResponse" in a)) throw new Error("Middleware must be an object with one of `onRequest()` or `onResponse()`");
                    c.push(a)
                }
        },
        eject(...l) {
            for (const a of l) {
                const m = c.indexOf(a);
                m !== -1 && c.splice(m, 1)
            }
        }
    }
}

function p(r, t, e) {
    if (t == null) return "";
    if (typeof t == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
    return `${r}=${(e==null?void 0:e.allowReserved)===!0?t:encodeURIComponent(t)}`
}

function O(r, t, e) {
    if (!t || typeof t != "object") return "";
    const n = [],
        s = {
            simple: ",",
            label: ".",
            matrix: ";"
        }[e.style] || "&";
    if (e.style !== "deepObject" && e.explode === !1) {
        for (const c in t) n.push(c, e.allowReserved === !0 ? t[c] : encodeURIComponent(t[c]));
        const o = n.join(",");
        switch (e.style) {
            case "form":
                return `${r}=${o}`;
            case "label":
                return `.${o}`;
            case "matrix":
                return `;${r}=${o}`;
            default:
                return o
        }
    }
    for (const o in t) {
        const c = e.style === "deepObject" ? `${r}[${o}]` : o;
        n.push(p(c, t[o], e))
    }
    const i = n.join(s);
    return e.style === "label" || e.style === "matrix" ? `${s}${i}` : i
}

function x(r, t, e) {
    if (!Array.isArray(t)) return "";
    if (e.explode === !1) {
        const i = {
                form: ",",
                spaceDelimited: "%20",
                pipeDelimited: "|"
            }[e.style] || ",",
            o = (e.allowReserved === !0 ? t : t.map(c => encodeURIComponent(c))).join(i);
        switch (e.style) {
            case "simple":
                return o;
            case "label":
                return `.${o}`;
            case "matrix":
                return `;${r}=${o}`;
            default:
                return `${r}=${o}`
        }
    }
    const n = {
            simple: ",",
            label: ".",
            matrix: ";"
        }[e.style] || "&",
        s = [];
    for (const i of t) e.style === "simple" || e.style === "label" ? s.push(e.allowReserved === !0 ? i : encodeURIComponent(i)) : s.push(p(r, i, e));
    return e.style === "label" || e.style === "matrix" ? `${n}${s.join(n)}` : s.join(n)
}

function $(r) {
    return function(e) {
        const n = [];
        if (e && typeof e == "object")
            for (const s in e) {
                const i = e[s];
                if (i != null) {
                    if (Array.isArray(i)) {
                        n.push(x(s, i, {
                            style: "form",
                            explode: !0,
                            ...r == null ? void 0 : r.array,
                            allowReserved: (r == null ? void 0 : r.allowReserved) || !1
                        }));
                        continue
                    }
                    if (typeof i == "object") {
                        n.push(O(s, i, {
                            style: "deepObject",
                            explode: !0,
                            ...r == null ? void 0 : r.object,
                            allowReserved: (r == null ? void 0 : r.allowReserved) || !1
                        }));
                        continue
                    }
                    n.push(p(s, i, r))
                }
            }
        return n.join("&")
    }
}

function L(r, t) {
    let e = r;
    for (const n of r.match(D) ? ? []) {
        let s = n.substring(1, n.length - 1),
            i = !1,
            o = "simple";
        if (s.endsWith("*") && (i = !0, s = s.substring(0, s.length - 1)), s.startsWith(".") ? (o = "label", s = s.substring(1)) : s.startsWith(";") && (o = "matrix", s = s.substring(1)), !t || t[s] === void 0 || t[s] === null) continue;
        const c = t[s];
        if (Array.isArray(c)) {
            e = e.replace(n, x(s, c, {
                style: o,
                explode: i
            }));
            continue
        }
        if (typeof c == "object") {
            e = e.replace(n, O(s, c, {
                style: o,
                explode: i
            }));
            continue
        }
        if (o === "matrix") {
            e = e.replace(n, `;${p(s,c)}`);
            continue
        }
        e = e.replace(n, o === "label" ? `.${c}` : c)
    }
    return e
}

function N(r) {
    return JSON.stringify(r)
}

function v(r, t) {
    var s;
    let e = `${t.baseUrl}${r}`;
    (s = t.params) != null && s.path && (e = L(e, t.params.path));
    let n = t.querySerializer(t.params.query ? ? {});
    return n.startsWith("?") && (n = n.substring(1)), n && (e += `?${n}`), e
}

function C(...r) {
    const t = new Headers;
    for (const e of r) {
        if (!e || typeof e != "object") continue;
        const n = e instanceof Headers ? e.entries() : Object.entries(e);
        for (const [s, i] of n)
            if (i === null) t.delete(s);
            else if (Array.isArray(i))
            for (const o of i) t.append(s, o);
        else i !== void 0 && t.set(s, i)
    }
    return t
}
const z = r => {
        var t;
        return decodeURIComponent(((t = document.cookie.split(";").map(e => e.split("=", 2)).find(e => e[0].trim() === r)) == null ? void 0 : t[1]) ? ? "")
    },
    W = fetch,
    U = F({
        baseUrl: k.PUBLIC_API_URL,
        credentials: "include",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        fetch: W
    });
U.use({
    onRequest: async r => {
        if (r.method === "get" || r.method === "GET") return r;
        let t = z("XSRF-TOKEN");
        return t = await _(), r.headers.set("X-XSRF-TOKEN", t ? ? ""), r
    },
    onResponse: async r => {
        if (r.status !== 419) return r
    }
});
const _ = () => U.GET("/sanctum/csrf-cookie").then(() => z("XSRF-TOKEN"));
export {
    U as f, _ as g
};