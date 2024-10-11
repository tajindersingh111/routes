import {
    s as $,
    C as p,
    D as g,
    n as c,
    d as a,
    o as n,
    i as H,
    p as o,
    r as k,
    v as B,
    w as P,
    x as j,
    y as Te,
    k as b,
    a as N,
    l as w,
    c as O,
    m as he,
    a9 as de,
    q as ve,
    z as Ue,
    I as Re,
    t as Ze,
    b as ze,
    aa as pe,
    N as ge,
    f as Ne,
    u as Oe,
    g as qe,
    j as xe
} from "../chunks/scheduler.Bal8Y2GG.js";
import {
    S as y,
    i as A,
    f as Ge,
    c as K,
    a as re,
    m as Q,
    t as U,
    g as Be,
    d as Pe,
    b as q,
    e as X
} from "../chunks/index.BruxqCn-.js"; /* empty css                     */
import {
    e as me
} from "../chunks/each.DikZgPhP.js";
import {
    o as We
} from "../chunks/entry.B98oQIZ2.js";
import {
    T as Fe
} from "../chunks/themeSelector.DNxPSqFC.js";
import {
    p as Je
} from "../chunks/stores.BLmWVoEm.js";
import {
    f as _e
} from "../chunks/links.CXgoaKkn.js";
import {
    a as z,
    l as Ke
} from "../chunks/auth.e8T0Sx-3.js";

function Ve(s) {
    let t, i;
    return {
        c() {
            t = p("title"), i = B(s[0])
        },
        l(e) {
            t = g(e, "title", {});
            var l = c(t);
            i = P(l, s[0]), l.forEach(a)
        },
        m(e, l) {
            H(e, t, l), o(t, i)
        },
        p(e, l) {
            l & 1 && j(i, e[0])
        },
        d(e) {
            e && a(t)
        }
    }
}

function Qe(s) {
    let t, i, e = s[0] !== null && Ve(s);
    return {
        c() {
            t = p("svg"), e && e.c(), i = p("path"), this.h()
        },
        l(l) {
            t = g(l, "svg", {
                xmlns: !0,
                viewBox: !0,
                class: !0
            });
            var r = c(t);
            e && e.l(r), i = g(r, "path", {
                d: !0
            }), c(i).forEach(a), r.forEach(a), this.h()
        },
        h() {
            n(i, "d", "M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22"), n(t, "xmlns", "http://www.w3.org/2000/svg"), n(t, "viewBox", "0 0 24 24"), n(t, "class", "svelte-zslijd")
        },
        m(l, r) {
            H(l, t, r), e && e.m(t, null), o(t, i)
        },
        p(l, [r]) {
            l[0] !== null ? e ? e.p(l, r) : (e = Ve(l), e.c(), e.m(t, i)) : e && (e.d(1), e = null)
        },
        i: k,
        o: k,
        d(l) {
            l && a(t), e && e.d()
        }
    }
}

function Xe(s, t, i) {
    let {
        title: e = "Company"
    } = t;
    return s.$$set = l => {
        "title" in l && i(0, e = l.title)
    }, [e]
}
class Ye extends y {
    constructor(t) {
        super(), A(this, t, Xe, Qe, $, {
            title: 0
        })
    }
}

function He(s) {
    let t, i;
    return {
        c() {
            t = p("title"), i = B(s[0])
        },
        l(e) {
            t = g(e, "title", {});
            var l = c(t);
            i = P(l, s[0]), l.forEach(a)
        },
        m(e, l) {
            H(e, t, l), o(t, i)
        },
        p(e, l) {
            l & 1 && j(i, e[0])
        },
        d(e) {
            e && a(t)
        }
    }
}

function et(s) {
    let t, i, e = s[0] !== null && He(s);
    return {
        c() {
            t = p("svg"), e && e.c(), i = p("path"), this.h()
        },
        l(l) {
            t = g(l, "svg", {
                xmlns: !0,
                viewBox: !0,
                class: !0
            });
            var r = c(t);
            e && e.l(r), i = g(r, "path", {
                d: !0
            }), c(i).forEach(a), r.forEach(a), this.h()
        },
        h() {
            n(i, "d", "M18,15H16V17H18M18,11H16V13H18M20,19H12V17H14V15H12V13H14V11H12V9H20M10,7H8V5H10M10,11H8V9H10M10,15H8V13H10M10,19H8V17H10M6,7H4V5H6M6,11H4V9H6M6,15H4V13H6M6,19H4V17H6M12,7V3H2V21H22V7H12Z"), n(t, "xmlns", "http://www.w3.org/2000/svg"), n(t, "viewBox", "0 0 24 24"), n(t, "class", "svelte-zslijd")
        },
        m(l, r) {
            H(l, t, r), e && e.m(t, null), o(t, i)
        },
        p(l, [r]) {
            l[0] !== null ? e ? e.p(l, r) : (e = He(l), e.c(), e.m(t, i)) : e && (e.d(1), e = null)
        },
        i: k,
        o: k,
        d(l) {
            l && a(t), e && e.d()
        }
    }
}

function tt(s, t, i) {
    let {
        title: e = "Company"
    } = t;
    return s.$$set = l => {
        "title" in l && i(0, e = l.title)
    }, [e]
}
class be extends y {
    constructor(t) {
        super(), A(this, t, tt, et, $, {
            title: 0
        })
    }
}

function we(s) {
    let t, i;
    return {
        c() {
            t = p("title"), i = B(s[0])
        },
        l(e) {
            t = g(e, "title", {});
            var l = c(t);
            i = P(l, s[0]), l.forEach(a)
        },
        m(e, l) {
            H(e, t, l), o(t, i)
        },
        p(e, l) {
            l & 1 && j(i, e[0])
        },
        d(e) {
            e && a(t)
        }
    }
}

function lt(s) {
    let t, i, e = s[0] !== null && we(s);
    return {
        c() {
            t = p("svg"), e && e.c(), i = p("path"), this.h()
        },
        l(l) {
            t = g(l, "svg", {
                xmlns: !0,
                viewBox: !0
            });
            var r = c(t);
            e && e.l(r), i = g(r, "path", {
                d: !0
            }), c(i).forEach(a), r.forEach(a), this.h()
        },
        h() {
            n(i, "d", "M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z"), n(t, "xmlns", "http://www.w3.org/2000/svg"), n(t, "viewBox", "0 0 24 24")
        },
        m(l, r) {
            H(l, t, r), e && e.m(t, null), o(t, i)
        },
        p(l, [r]) {
            l[0] !== null ? e ? e.p(l, r) : (e = we(l), e.c(), e.m(t, i)) : e && (e.d(1), e = null)
        },
        i: k,
        o: k,
        d(l) {
            l && a(t), e && e.d()
        }
    }
}

function it(s, t, i) {
    let {
        title: e = "Route"
    } = t;
    return s.$$set = l => {
        "title" in l && i(0, e = l.title)
    }, [e]
}
class st extends y {
    constructor(t) {
        super(), A(this, t, it, lt, $, {
            title: 0
        })
    }
}

function Le(s) {
    let t, i;
    return {
        c() {
            t = p("title"), i = B(s[0])
        },
        l(e) {
            t = g(e, "title", {});
            var l = c(t);
            i = P(l, s[0]), l.forEach(a)
        },
        m(e, l) {
            H(e, t, l), o(t, i)
        },
        p(e, l) {
            l & 1 && j(i, e[0])
        },
        d(e) {
            e && a(t)
        }
    }
}

function rt(s) {
    let t, i, e = s[0] !== null && Le(s);
    return {
        c() {
            t = p("svg"), e && e.c(), i = p("path"), this.h()
        },
        l(l) {
            t = g(l, "svg", {
                xmlns: !0,
                viewBox: !0
            });
            var r = c(t);
            e && e.l(r), i = g(r, "path", {
                d: !0
            }), c(i).forEach(a), r.forEach(a), this.h()
        },
        h() {
            n(i, "d", "M18 18.5C18.83 18.5 19.5 17.83 19.5 17C19.5 16.17 18.83 15.5 18 15.5C17.17 15.5 16.5 16.17 16.5 17C16.5 17.83 17.17 18.5 18 18.5M19.5 9.5H17V12H21.46L19.5 9.5M6 18.5C6.83 18.5 7.5 17.83 7.5 17C7.5 16.17 6.83 15.5 6 15.5C5.17 15.5 4.5 16.17 4.5 17C4.5 17.83 5.17 18.5 6 18.5M20 8L23 12V17H21C21 18.66 19.66 20 18 20C16.34 20 15 18.66 15 17H9C9 18.66 7.66 20 6 20C4.34 20 3 18.66 3 17H1V6C1 4.89 1.89 4 3 4H17V8H20M3 6V15H3.76C4.31 14.39 5.11 14 6 14C6.89 14 7.69 14.39 8.24 15H15V6H3Z"), n(t, "xmlns", "http://www.w3.org/2000/svg"), n(t, "viewBox", "0 0 24 24")
        },
        m(l, r) {
            H(l, t, r), e && e.m(t, null), o(t, i)
        },
        p(l, [r]) {
            l[0] !== null ? e ? e.p(l, r) : (e = Le(l), e.c(), e.m(t, i)) : e && (e.d(1), e = null)
        },
        i: k,
        o: k,
        d(l) {
            l && a(t), e && e.d()
        }
    }
}

function at(s, t, i) {
    let {
        title: e = "Vehicle"
    } = t;
    return s.$$set = l => {
        "title" in l && i(0, e = l.title)
    }, [e]
}
class nt extends y {
    constructor(t) {
        super(), A(this, t, at, rt, $, {
            title: 0
        })
    }
}

function Ce(s) {
    let t, i;
    return {
        c() {
            t = p("title"), i = B(s[0])
        },
        l(e) {
            t = g(e, "title", {});
            var l = c(t);
            i = P(l, s[0]), l.forEach(a)
        },
        m(e, l) {
            H(e, t, l), o(t, i)
        },
        p(e, l) {
            l & 1 && j(i, e[0])
        },
        d(e) {
            e && a(t)
        }
    }
}

function ot(s) {
    let t, i, e = s[0] !== null && Ce(s);
    return {
        c() {
            t = p("svg"), e && e.c(), i = p("path"), this.h()
        },
        l(l) {
            t = g(l, "svg", {
                xmlns: !0,
                viewBox: !0
            });
            var r = c(t);
            e && e.l(r), i = g(r, "path", {
                d: !0
            }), c(i).forEach(a), r.forEach(a), this.h()
        },
        h() {
            n(i, "d", "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"), n(t, "xmlns", "http://www.w3.org/2000/svg"), n(t, "viewBox", "0 0 24 24")
        },
        m(l, r) {
            H(l, t, r), e && e.m(t, null), o(t, i)
        },
        p(l, [r]) {
            l[0] !== null ? e ? e.p(l, r) : (e = Ce(l), e.c(), e.m(t, i)) : e && (e.d(1), e = null)
        },
        i: k,
        o: k,
        d(l) {
            l && a(t), e && e.d()
        }
    }
}

function ct(s, t, i) {
    let {
        title: e = "User"
    } = t;
    return s.$$set = l => {
        "title" in l && i(0, e = l.title)
    }, [e]
}
class De extends y {
    constructor(t) {
        super(), A(this, t, ct, ot, $, {
            title: 0
        })
    }
}

function Me(s) {
    let t, i;
    return {
        c() {
            t = p("title"), i = B(s[0])
        },
        l(e) {
            t = g(e, "title", {});
            var l = c(t);
            i = P(l, s[0]), l.forEach(a)
        },
        m(e, l) {
            H(e, t, l), o(t, i)
        },
        p(e, l) {
            l & 1 && j(i, e[0])
        },
        d(e) {
            e && a(t)
        }
    }
}

function ft(s) {
    let t, i, e = s[0] !== null && Me(s);
    return {
        c() {
            t = p("svg"), e && e.c(), i = p("path"), this.h()
        },
        l(l) {
            t = g(l, "svg", {
                xmlns: !0,
                viewBox: !0
            });
            var r = c(t);
            e && e.l(r), i = g(r, "path", {
                d: !0
            }), c(i).forEach(a), r.forEach(a), this.h()
        },
        h() {
            n(i, "d", "M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z"), n(t, "xmlns", "http://www.w3.org/2000/svg"), n(t, "viewBox", "0 0 24 24")
        },
        m(l, r) {
            H(l, t, r), e && e.m(t, null), o(t, i)
        },
        p(l, [r]) {
            l[0] !== null ? e ? e.p(l, r) : (e = Me(l), e.c(), e.m(t, i)) : e && (e.d(1), e = null)
        },
        i: k,
        o: k,
        d(l) {
            l && a(t), e && e.d()
        }
    }
}

function ut(s, t, i) {
    let {
        title: e = "Report"
    } = t;
    return s.$$set = l => {
        "title" in l && i(0, e = l.title)
    }, [e]
}
class ht extends y {
    constructor(t) {
        super(), A(this, t, ut, ft, $, {
            title: 0
        })
    }
}

function ke(s) {
    let t, i;
    return {
        c() {
            t = p("title"), i = B(s[0])
        },
        l(e) {
            t = g(e, "title", {});
            var l = c(t);
            i = P(l, s[0]), l.forEach(a)
        },
        m(e, l) {
            H(e, t, l), o(t, i)
        },
        p(e, l) {
            l & 1 && j(i, e[0])
        },
        d(e) {
            e && a(t)
        }
    }
}

function dt(s) {
    let t, i, e = s[0] !== null && ke(s);
    return {
        c() {
            t = p("svg"), e && e.c(), i = p("path"), this.h()
        },
        l(l) {
            t = g(l, "svg", {
                xmlns: !0,
                viewBox: !0
            });
            var r = c(t);
            e && e.l(r), i = g(r, "path", {
                d: !0
            }), c(i).forEach(a), r.forEach(a), this.h()
        },
        h() {
            n(i, "d", "M12,5A3.5,3.5 0 0,0 8.5,8.5A3.5,3.5 0 0,0 12,12A3.5,3.5 0 0,0 15.5,8.5A3.5,3.5 0 0,0 12,5M12,7A1.5,1.5 0 0,1 13.5,8.5A1.5,1.5 0 0,1 12,10A1.5,1.5 0 0,1 10.5,8.5A1.5,1.5 0 0,1 12,7M5.5,8A2.5,2.5 0 0,0 3,10.5C3,11.44 3.53,12.25 4.29,12.68C4.65,12.88 5.06,13 5.5,13C5.94,13 6.35,12.88 6.71,12.68C7.08,12.47 7.39,12.17 7.62,11.81C6.89,10.86 6.5,9.7 6.5,8.5C6.5,8.41 6.5,8.31 6.5,8.22C6.2,8.08 5.86,8 5.5,8M18.5,8C18.14,8 17.8,8.08 17.5,8.22C17.5,8.31 17.5,8.41 17.5,8.5C17.5,9.7 17.11,10.86 16.38,11.81C16.5,12 16.63,12.15 16.78,12.3C16.94,12.45 17.1,12.58 17.29,12.68C17.65,12.88 18.06,13 18.5,13C18.94,13 19.35,12.88 19.71,12.68C20.47,12.25 21,11.44 21,10.5A2.5,2.5 0 0,0 18.5,8M12,14C9.66,14 5,15.17 5,17.5V19H19V17.5C19,15.17 14.34,14 12,14M4.71,14.55C2.78,14.78 0,15.76 0,17.5V19H3V17.07C3,16.06 3.69,15.22 4.71,14.55M19.29,14.55C20.31,15.22 21,16.06 21,17.07V19H24V17.5C24,15.76 21.22,14.78 19.29,14.55M12,16C13.53,16 15.24,16.5 16.23,17H7.77C8.76,16.5 10.47,16 12,16Z"), n(t, "xmlns", "http://www.w3.org/2000/svg"), n(t, "viewBox", "0 0 24 24")
        },
        m(l, r) {
            H(l, t, r), e && e.m(t, null), o(t, i)
        },
        p(l, [r]) {
            l[0] !== null ? e ? e.p(l, r) : (e = ke(l), e.c(), e.m(t, i)) : e && (e.d(1), e = null)
        },
        i: k,
        o: k,
        d(l) {
            l && a(t), e && e.d()
        }
    }
}

function vt(s, t, i) {
    let {
        title: e = "Users"
    } = t;
    return s.$$set = l => {
        "title" in l && i(0, e = l.title)
    }, [e]
}
class pt extends y {
    constructor(t) {
        super(), A(this, t, vt, dt, $, {
            title: 0
        })
    }
}

function Ee(s) {
    let t, i;
    return {
        c() {
            t = p("title"), i = B(s[0])
        },
        l(e) {
            t = g(e, "title", {});
            var l = c(t);
            i = P(l, s[0]), l.forEach(a)
        },
        m(e, l) {
            H(e, t, l), o(t, i)
        },
        p(e, l) {
            l & 1 && j(i, e[0])
        },
        d(e) {
            e && a(t)
        }
    }
}

function gt(s) {
    let t, i, e = s[0] !== null && Ee(s);
    return {
        c() {
            t = p("svg"), e && e.c(), i = p("path"), this.h()
        },
        l(l) {
            t = g(l, "svg", {
                xmlns: !0,
                viewBox: !0
            });
            var r = c(t);
            e && e.l(r), i = g(r, "path", {
                d: !0
            }), c(i).forEach(a), r.forEach(a), this.h()
        },
        h() {
            n(i, "d", "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"), n(t, "xmlns", "http://www.w3.org/2000/svg"), n(t, "viewBox", "0 0 24 24")
        },
        m(l, r) {
            H(l, t, r), e && e.m(t, null), o(t, i)
        },
        p(l, [r]) {
            l[0] !== null ? e ? e.p(l, r) : (e = Ee(l), e.c(), e.m(t, i)) : e && (e.d(1), e = null)
        },
        i: k,
        o: k,
        d(l) {
            l && a(t), e && e.d()
        }
    }
}

function mt(s, t, i) {
    let {
        title: e = "Delivery Service Provider"
    } = t;
    return s.$$set = l => {
        "title" in l && i(0, e = l.title)
    }, [e]
}
class Ie extends y {
    constructor(t) {
        super(), A(this, t, mt, gt, $, {
            title: 0
        })
    }
}

function $e(s) {
    let t, i;
    return {
        c() {
            t = p("title"), i = B(s[0])
        },
        l(e) {
            t = g(e, "title", {});
            var l = c(t);
            i = P(l, s[0]), l.forEach(a)
        },
        m(e, l) {
            H(e, t, l), o(t, i)
        },
        p(e, l) {
            l & 1 && j(i, e[0])
        },
        d(e) {
            e && a(t)
        }
    }
}

function _t(s) {
    let t, i, e = s[0] !== null && $e(s);
    return {
        c() {
            t = p("svg"), e && e.c(), i = p("path"), this.h()
        },
        l(l) {
            t = g(l, "svg", {
                xmlns: !0,
                viewBox: !0
            });
            var r = c(t);
            e && e.l(r), i = g(r, "path", {
                d: !0
            }), c(i).forEach(a), r.forEach(a), this.h()
        },
        h() {
            n(i, "d", "M6 19H8V21H6V19M12 3L2 8V21H4V13H20V21H22V8L12 3M8 11H4V9H8V11M14 11H10V9H14V11M20 11H16V9H20V11M6 15H8V17H6V15M10 15H12V17H10V15M10 19H12V21H10V19M14 19H16V21H14V19Z"), n(t, "xmlns", "http://www.w3.org/2000/svg"), n(t, "viewBox", "0 0 24 24")
        },
        m(l, r) {
            H(l, t, r), e && e.m(t, null), o(t, i)
        },
        p(l, [r]) {
            l[0] !== null ? e ? e.p(l, r) : (e = $e(l), e.c(), e.m(t, i)) : e && (e.d(1), e = null)
        },
        i: k,
        o: k,
        d(l) {
            l && a(t), e && e.d()
        }
    }
}

function Vt(s, t, i) {
    let {
        title: e = "Depot"
    } = t;
    return s.$$set = l => {
        "title" in l && i(0, e = l.title)
    }, [e]
}
class Ht extends y {
    constructor(t) {
        super(), A(this, t, Vt, _t, $, {
            title: 0
        })
    }
}
const bt = () => [{
        label: "Login",
        icon: De,
        href: "/login",
        basePageId: "/(app)/(no-auth)/login"
    }],
    wt = s => {
        var e, l;
        const t = [];
        t.push({
            label: "Dashboard",
            icon: Ye,
            href: "/dashboard",
            basePageId: "/(app)/(auth)/dashboard"
        });
        const i = ((e = s.company) == null ? void 0 : e.id) || ((l = s.delivery_service_provider) == null ? void 0 : l.company.id);
        return i && t.push({
            label: "Company",
            icon: be,
            href: _e("/companies/{companyId}", {
                companyId: i
            }),
            basePageId: "/(app)/(auth)/companies"
        }), z(s, "list:companies") && t.push({
            label: "Companies",
            icon: be,
            href: "/companies",
            basePageId: "/(app)/(auth)/companies"
        }), s != null && s.delivery_service_provider && t.push({
            label: "Delivery Service Provider",
            icon: Ie,
            href: _e("/delivery-service-providers/{deliveryServiceProviderId}", {
                deliveryServiceProviderId: s.delivery_service_provider.id
            }),
            basePageId: "/(app)/(auth)/delivery-service-providers"
        }), z(s, "list:deliveryServiceProviders") && t.push({
            label: "Delivery Service Providers",
            icon: Ie,
            href: "/delivery-service-providers",
            basePageId: "/(app)/(auth)/delivery-service-providers"
        }), z(s, "list:depots") && t.push({
            label: "Depots",
            icon: Ht,
            href: "/depots",
            basePageId: "/(app)/(auth)/depots"
        }), z(s, "list:vehicles") && t.push({
            label: "Vehicles",
            icon: nt,
            href: "/vehicles",
            basePageId: "/(app)/(auth)/vehicles"
        }), z(s, "list:routes") && t.push({
            label: "Routes",
            icon: st,
            href: "/routes",
            basePageId: "/(app)/(auth)/routes"
        }), z(s, "list:reports") && t.push({
            label: "Reports",
            icon: ht,
            href: "/reports",
            basePageId: "/(app)/(auth)/reports"
        }), z(s, "list:users") && t.push({
            label: "Manage Users",
            icon: pt,
            href: "/users",
            basePageId: "/(app)/(auth)/users"
        }), t.push({
            label: "Profile",
            icon: De,
            href: "/profile",
            basePageId: "/(app)/(auth)/profile"
        }), t
    },
    Lt = "" + new URL("../assets/logo-black.Ca_2b7NV.png",
        import.meta.url).href,
    Ct = "" + new URL("../assets/logo-white.fO1fUcys.png",
        import.meta.url).href;

function ye(s, t, i) {
    const e = s.slice();
    return e[8] = t[i], e
}

function Ae(s) {
    let t, i, e, l, r = s[8].label + "",
        m, d;
    var E = s[8].icon;

    function v(f, u) {
        return {}
    }
    return E && (e = pe(E, v())), {
        c() {
            t = b("li"), i = b("a"), e && K(e.$$.fragment), l = b("span"), m = B(r), this.h()
        },
        l(f) {
            t = w(f, "LI", {});
            var u = c(t);
            i = w(u, "A", {
                href: !0,
                class: !0
            });
            var V = c(i);
            e && re(e.$$.fragment, V), l = w(V, "SPAN", {});
            var L = c(l);
            m = P(L, r), L.forEach(a), V.forEach(a), u.forEach(a), this.h()
        },
        h() {
            var f;
            n(i, "href", s[8].href), n(i, "class", "svelte-ju65go"), ge(i, "active", (f = s[3].route.id) == null ? void 0 : f.includes(s[8].basePageId))
        },
        m(f, u) {
            H(f, t, u), o(t, i), e && Q(e, i, null), o(i, l), o(l, m), d = !0
        },
        p(f, u) {
            var V;
            if (E !== (E = f[8].icon)) {
                if (e) {
                    Be();
                    const L = e;
                    q(L.$$.fragment, 1, 0, () => {
                        X(L, 1)
                    }), Pe()
                }
                E ? (e = pe(E, v()), K(e.$$.fragment), U(e.$$.fragment, 1), Q(e, i, l)) : e = null
            }(!d || u & 24) && ge(i, "active", (V = f[3].route.id) == null ? void 0 : V.includes(f[8].basePageId))
        },
        i(f) {
            d || (e && U(e.$$.fragment, f), d = !0)
        },
        o(f) {
            e && q(e.$$.fragment, f), d = !1
        },
        d(f) {
            f && a(t), e && X(e)
        }
    }
}

function Mt(s) {
    let t, i, e, l, r, m, d, E, v, f = '<svg class="open-btn svelte-ju65go" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>open menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path></svg> <svg class="close-btn svelte-ju65go" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close menu</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path></svg>',
        u, V, L, R, G, T, ae = "Logout",
        Y, ee, te, x, W, D, le, F, ie, ne, Z = me(s[4]),
        _ = [];
    for (let h = 0; h < Z.length; h += 1) _[h] = Ae(ye(s, Z, h));
    const Se = h => q(_[h], 1, 1, () => {
        _[h] = null
    });

    function je(h) {
        s[7](h)
    }
    let oe = {};
    return s[1] !== void 0 && (oe.isDarkTheme = s[1]), D = new Fe({
        props: oe
    }), Te.push(() => Ge(D, "isDarkTheme", je)), {
        c() {
            t = b("div"), i = b("aside"), e = b("a"), l = b("img"), m = N(), d = b("input"), E = N(), v = b("label"), v.innerHTML = f, u = N(), V = b("nav"), L = b("ul");
            for (let h = 0; h < _.length; h += 1) _[h].c();
            R = N(), G = b("li"), T = b("button"), T.textContent = ae, Y = N(), ee = b("hr"), te = N(), x = b("ul"), W = b("li"), K(D.$$.fragment), this.h()
        },
        l(h) {
            t = w(h, "DIV", {
                class: !0
            });
            var C = c(t);
            i = w(C, "ASIDE", {
                class: !0
            });
            var I = c(i);
            e = w(I, "A", {
                href: !0,
                class: !0
            });
            var M = c(e);
            l = w(M, "IMG", {
                src: !0,
                alt: !0
            }), M.forEach(a), m = O(I), d = w(I, "INPUT", {
                type: !0,
                id: !0,
                "aria-hidden": !0,
                class: !0
            }), E = O(I), v = w(I, "LABEL", {
                for: !0,
                class: !0,
                "aria-hidden": !0,
                "data-svelte-h": !0
            }), he(v) !== "svelte-17wcokt" && (v.innerHTML = f), u = O(I), V = w(I, "NAV", {
                class: !0
            });
            var S = c(V);
            L = w(S, "UL", {
                class: !0
            });
            var J = c(L);
            for (let se = 0; se < _.length; se += 1) _[se].l(J);
            R = O(J), G = w(J, "LI", {});
            var ce = c(G);
            T = w(ce, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), he(T) !== "svelte-h412v7" && (T.textContent = ae), ce.forEach(a), J.forEach(a), Y = O(S), ee = w(S, "HR", {}), te = O(S), x = w(S, "UL", {
                class: !0
            });
            var fe = c(x);
            W = w(fe, "LI", {});
            var ue = c(W);
            re(D.$$.fragment, ue), ue.forEach(a), fe.forEach(a), S.forEach(a), I.forEach(a), C.forEach(a), this.h()
        },
        h() {
            de(l.src, r = s[2]) || n(l, "src", r), n(l, "alt", "D-Carbn"), n(e, "href", "/"), n(e, "class", "logo-img svelte-ju65go"), n(d, "type", "checkbox"), n(d, "id", "hamburger-toggle"), n(d, "aria-hidden", "true"), n(d, "class", "svelte-ju65go"), n(v, "for", "hamburger-toggle"), n(v, "class", "menu svelte-ju65go"), n(v, "aria-hidden", "true"), n(T, "class", "btn"), n(L, "class", "svelte-ju65go"), n(x, "class", "additional svelte-ju65go"), n(V, "class", "svelte-ju65go"), n(i, "class", "svelte-ju65go"), n(t, "class", "aside-wrapper svelte-ju65go")
        },
        m(h, C) {
            H(h, t, C), o(t, i), o(i, e), o(e, l), o(i, m), o(i, d), d.checked = s[0], o(i, E), o(i, v), o(i, u), o(i, V), o(V, L);
            for (let I = 0; I < _.length; I += 1) _[I] && _[I].m(L, null);
            o(L, R), o(L, G), o(G, T), o(V, Y), o(V, ee), o(V, te), o(V, x), o(x, W), Q(D, W, null), F = !0, ie || (ne = [ve(d, "change", s[6]), ve(T, "click", Ke)], ie = !0)
        },
        p(h, [C]) {
            if ((!F || C & 4 && !de(l.src, r = h[2])) && n(l, "src", r), C & 1 && (d.checked = h[0]), C & 24) {
                Z = me(h[4]);
                let M;
                for (M = 0; M < Z.length; M += 1) {
                    const S = ye(h, Z, M);
                    _[M] ? (_[M].p(S, C), U(_[M], 1)) : (_[M] = Ae(S), _[M].c(), U(_[M], 1), _[M].m(L, R))
                }
                for (Be(), M = Z.length; M < _.length; M += 1) Se(M);
                Pe()
            }
            const I = {};
            !le && C & 2 && (le = !0, I.isDarkTheme = h[1], Ue(() => le = !1)), D.$set(I)
        },
        i(h) {
            if (!F) {
                for (let C = 0; C < Z.length; C += 1) U(_[C]);
                U(D.$$.fragment, h), F = !0
            }
        },
        o(h) {
            _ = _.filter(Boolean);
            for (let C = 0; C < _.length; C += 1) q(_[C]);
            q(D.$$.fragment, h), F = !1
        },
        d(h) {
            h && a(t), Re(_, h), X(D), ie = !1, Ze(ne)
        }
    }
}

function kt(s, t, i) {
    let e, l;
    ze(s, Je, u => i(3, l = u));
    let r = !1,
        {
            user: m
        } = t,
        {
            isOpen: d = !1
        } = t;
    We(() => {
        i(0, d = !1)
    });
    let E = m === null ? bt() : wt(m);

    function v() {
        d = this.checked, i(0, d)
    }

    function f(u) {
        r = u, i(1, r)
    }
    return s.$$set = u => {
        "user" in u && i(5, m = u.user), "isOpen" in u && i(0, d = u.isOpen)
    }, s.$$.update = () => {
        s.$$.dirty & 2 && i(2, e = r ? Ct : Lt)
    }, i(1, r = document.querySelector(":root").getAttribute("theme") === "dark"), [d, r, e, l, E, m, v, f]
}
class Et extends y {
    constructor(t) {
        super(), A(this, t, kt, Mt, $, {
            user: 5,
            isOpen: 0
        })
    }
}

function It(s) {
    let t, i, e, l, r, m, d;
    e = new Et({
        props: {
            user: s[0].user
        }
    });
    const E = s[2].default,
        v = Ne(E, s, s[1], null);
    return {
        c() {
            t = b("div"), i = b("div"), K(e.$$.fragment), l = N(), r = b("div"), m = b("div"), v && v.c(), this.h()
        },
        l(f) {
            t = w(f, "DIV", {
                class: !0
            });
            var u = c(t);
            i = w(u, "DIV", {
                class: !0
            });
            var V = c(i);
            re(e.$$.fragment, V), V.forEach(a), l = O(u), r = w(u, "DIV", {
                class: !0
            });
            var L = c(r);
            m = w(L, "DIV", {
                class: !0
            });
            var R = c(m);
            v && v.l(R), R.forEach(a), L.forEach(a), u.forEach(a), this.h()
        },
        h() {
            n(i, "class", "side-bar svelte-z214ti"), n(m, "class", "page-content svelte-z214ti"), n(r, "class", "outer-page-content svelte-z214ti"), n(t, "class", "page svelte-z214ti")
        },
        m(f, u) {
            H(f, t, u), o(t, i), Q(e, i, null), o(t, l), o(t, r), o(r, m), v && v.m(m, null), d = !0
        },
        p(f, [u]) {
            const V = {};
            u & 1 && (V.user = f[0].user), e.$set(V), v && v.p && (!d || u & 2) && Oe(v, E, f, f[1], d ? xe(E, f[1], u, null) : qe(f[1]), null)
        },
        i(f) {
            d || (U(e.$$.fragment, f), U(v, f), d = !0)
        },
        o(f) {
            q(e.$$.fragment, f), q(v, f), d = !1
        },
        d(f) {
            f && a(t), X(e), v && v.d(f)
        }
    }
}

function $t(s, t, i) {
    let {
        $$slots: e = {},
        $$scope: l
    } = t, {
        data: r
    } = t;
    return s.$$set = m => {
        "data" in m && i(0, r = m.data), "$$scope" in m && i(1, l = m.$$scope)
    }, [r, l, e]
}
class Rt extends y {
    constructor(t) {
        super(), A(this, t, $t, It, $, {
            data: 0
        })
    }
}
export {
    Rt as component
};