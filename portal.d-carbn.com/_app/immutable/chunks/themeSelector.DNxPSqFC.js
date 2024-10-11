import {
    s as H,
    k as _,
    a as j,
    l as w,
    n as k,
    c as B,
    d as f,
    o as a,
    i as A,
    p as v,
    P as F,
    r as L,
    b as N,
    H as x,
    C as T,
    D as E
} from "./scheduler.Bal8Y2GG.js";
import {
    S as O,
    i as P
} from "./index.BruxqCn-.js";
import {
    p as U,
    i as z,
    c as C
} from "./entry.B98oQIZ2.js";
import {
    p as q
} from "./stores.BLmWVoEm.js";

function R(o) {
    const e = JSON.parse(o);
    return e.data && (e.data = U(e.data)), e
}

function S(o) {
    return HTMLElement.prototype.cloneNode.call(o)
}

function I(o, e = () => {}) {
    const t = async ({
        action: r,
        result: n,
        reset: m = !0,
        invalidateAll: h = !0
    }) => {
        n.type === "success" && (m && HTMLFormElement.prototype.reset.call(o), h && await z()), (location.origin + location.pathname === r.origin + r.pathname || n.type === "redirect" || n.type === "error") && C(n)
    };
    async function s(r) {
        var b, y, M, D;
        if (((b = r.submitter) != null && b.hasAttribute("formmethod") ? r.submitter.formMethod : S(o).method) !== "post") return;
        r.preventDefault();
        const m = new URL((y = r.submitter) != null && y.hasAttribute("formaction") ? r.submitter.formAction : S(o).action),
            h = new FormData(o),
            c = (M = r.submitter) == null ? void 0 : M.getAttribute("name");
        c && h.append(c, ((D = r.submitter) == null ? void 0 : D.getAttribute("value")) ? ? "");
        const g = new AbortController;
        let p = !1;
        const i = await e({
            action: m,
            cancel: () => p = !0,
            controller: g,
            formData: h,
            formElement: o,
            submitter: r.submitter
        }) ? ? t;
        if (p) return;
        let l;
        try {
            const u = await fetch(m, {
                method: "POST",
                headers: {
                    accept: "application/json",
                    "x-sveltekit-action": "true"
                },
                cache: "no-store",
                body: h,
                signal: g.signal
            });
            l = R(await u.text()), l.type === "error" && (l.status = u.status)
        } catch (u) {
            if ((u == null ? void 0 : u.name) === "AbortError") return;
            l = {
                type: "error",
                error: u
            }
        }
        i({
            action: m,
            formData: h,
            formElement: o,
            update: u => t({
                action: m,
                result: l,
                reset: u == null ? void 0 : u.reset,
                invalidateAll: u == null ? void 0 : u.invalidateAll
            }),
            result: l
        })
    }
    return HTMLFormElement.prototype.addEventListener.call(o, "submit", s), {
        destroy() {
            HTMLFormElement.prototype.removeEventListener.call(o, "submit", s)
        }
    }
}

function J(o) {
    let e, t;
    return {
        c() {
            e = T("svg"), t = T("path"), this.h()
        },
        l(s) {
            e = E(s, "svg", {
                fill: !0,
                stroke: !0,
                viewBox: !0,
                xmlns: !0,
                class: !0
            });
            var r = k(e);
            t = E(r, "path", {
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
                "stroke-width": !0,
                d: !0
            }), k(t).forEach(f), r.forEach(f), this.h()
        },
        h() {
            a(t, "stroke-linecap", "round"), a(t, "stroke-linejoin", "round"), a(t, "stroke-width", "2"), a(t, "d", "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"), a(e, "fill", "none"), a(e, "stroke", "var(--svg-color)"), a(e, "viewBox", "0 0 24 24"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "class", "svelte-ss55u1")
        },
        m(s, r) {
            A(s, e, r), v(e, t)
        },
        d(s) {
            s && f(e)
        }
    }
}

function K(o) {
    let e, t;
    return {
        c() {
            e = T("svg"), t = T("path"), this.h()
        },
        l(s) {
            e = E(s, "svg", {
                fill: !0,
                stroke: !0,
                viewBox: !0,
                xmlns: !0,
                class: !0
            });
            var r = k(e);
            t = E(r, "path", {
                "stroke-linecap": !0,
                "stroke-linejoin": !0,
                "stroke-width": !0,
                d: !0
            }), k(t).forEach(f), r.forEach(f), this.h()
        },
        h() {
            a(t, "stroke-linecap", "round"), a(t, "stroke-linejoin", "round"), a(t, "stroke-width", "2"), a(t, "d", "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"), a(e, "fill", "none"), a(e, "stroke", "var(--svg-color)"), a(e, "viewBox", "0 0 24 24"), a(e, "xmlns", "http://www.w3.org/2000/svg"), a(e, "class", "svelte-ss55u1")
        },
        m(s, r) {
            A(s, e, r), v(e, t)
        },
        d(s) {
            s && f(e)
        }
    }
}

function G(o) {
    let e, t, s, r, n, m, h, c;

    function g(i, l) {
        return i[0] ? K : J
    }
    let p = g(o),
        d = p(o);
    return {
        c() {
            e = _("form"), t = _("button"), s = _("input"), r = j(), n = _("span"), d.c(), this.h()
        },
        l(i) {
            e = w(i, "FORM", {
                method: !0
            });
            var l = k(e);
            t = w(l, "BUTTON", {
                class: !0,
                formaction: !0
            });
            var b = k(t);
            s = w(b, "INPUT", {
                type: !0,
                name: !0,
                id: !0,
                class: !0
            }), r = B(b), n = w(b, "SPAN", {
                class: !0
            });
            var y = k(n);
            d.l(y), y.forEach(f), b.forEach(f), l.forEach(f), this.h()
        },
        h() {
            a(s, "type", "checkbox"), a(s, "name", "theme-selector"), a(s, "id", "theme-selector"), s.checked = o[0], a(s, "class", "svelte-ss55u1"), a(n, "class", "svelte-ss55u1"), a(t, "class", "theme-selector-wrapper svelte-ss55u1"), a(t, "formaction", m = `/theme?/setTheme&theme=${o[3](!o[0])}&redirectTo=${o[1].url}`), a(e, "method", "post")
        },
        m(i, l) {
            A(i, e, l), v(e, t), v(t, s), v(t, r), v(t, n), d.m(n, null), h || (c = F(I.call(null, e, o[2])), h = !0)
        },
        p(i, [l]) {
            l & 1 && (s.checked = i[0]), p !== (p = g(i)) && (d.d(1), d = p(i), d && (d.c(), d.m(n, null))), l & 3 && m !== (m = `/theme?/setTheme&theme=${i[3](!i[0])}&redirectTo=${i[1].url}`) && a(t, "formaction", m)
        },
        i: L,
        o: L,
        d(i) {
            i && f(e), d.d(), h = !1, c()
        }
    }
}

function Q(o, e, t) {
    let s;
    N(o, q, c => t(1, s = c));
    let r = null,
        {
            isDarkTheme: n = !1
        } = e;
    x(async () => {
        if (r = document.querySelector(":root"), !r) return;
        (r.getAttribute("theme") ? ? "light") === "dark" && t(0, n = !0)
    });
    const m = ({
            action: c
        }) => {
            t(0, n = !n), document.documentElement.setAttribute("theme", h(n))
        },
        h = c => c ? "dark" : "light";
    return o.$$set = c => {
        "isDarkTheme" in c && t(0, n = c.isDarkTheme)
    }, [n, s, m, h]
}
class Z extends O {
    constructor(e) {
        super(), P(this, e, Q, G, H, {
            isDarkTheme: 0
        })
    }
}
export {
    Z as T
};