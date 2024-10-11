import {
    s as Zs,
    k as l,
    a as f,
    v as x,
    l as s,
    n as r,
    m as E,
    c,
    d as o,
    w as $,
    o as a,
    i as B,
    p as e,
    x as S,
    r as wl,
    q as Ks,
    t as ta
} from "../chunks/scheduler.Bal8Y2GG.js";
import {
    S as ys,
    i as ea,
    c as as,
    a as os,
    m as ns,
    t as Je,
    b as Vt,
    d as la,
    e as rs,
    g as sa
} from "../chunks/index.BruxqCn-.js";
import {
    d as De,
    a as Qs,
    m as Ws
} from "../chunks/format.wp9OkogO.js";
import {
    f as y,
    a as aa
} from "../chunks/links.CXgoaKkn.js";
import {
    s as oa
} from "../chunks/columns.CGYih0Kf.js";
import {
    S as na,
    a as ra
} from "../chunks/ServerGridBuilder.jRfZPao-.js"; /* empty css                               */
import {
    i as ia
} from "../chunks/entry.B98oQIZ2.js";
import {
    M as da
} from "../chunks/modal.n1Zpv6l-.js"; /* empty css                                                           */ /* empty css                                                        */ /* empty css                                                            */ /* empty css                                                          */ /* empty css                                                       */ /* empty css                                                              */
import {
    f as fa
} from "../chunks/fetchClient.DtCbC4hg.js";
import {
    a as ca
} from "../chunks/auth.e8T0Sx-3.js";

function ua(i) {
    let t, d = "None";
    return {
        c() {
            t = l("p"), t.textContent = d
        },
        l(n) {
            t = s(n, "P", {
                "data-svelte-h": !0
            }), E(t) !== "svelte-8wc9ky" && (t.textContent = d)
        },
        m(n, u) {
            B(n, t, u)
        },
        p: wl,
        d(n) {
            n && o(t)
        }
    }
}

function va(i) {
    let t, d = i[0].vehicle.registration_reference + "",
        n, u;
    return {
        c() {
            t = l("a"), n = x(d), this.h()
        },
        l(p) {
            t = s(p, "A", {
                href: !0,
                class: !0
            });
            var _ = r(t);
            n = $(_, d), _.forEach(o), this.h()
        },
        h() {
            a(t, "href", u = y("/vehicles/{vehicleId}", {
                vehicleId: i[0].vehicle.id
            })), a(t, "class", "link")
        },
        m(p, _) {
            B(p, t, _), e(t, n)
        },
        p(p, _) {
            _ & 1 && d !== (d = p[0].vehicle.registration_reference + "") && S(n, d), _ & 1 && u !== (u = y("/vehicles/{vehicleId}", {
                vehicleId: p[0].vehicle.id
            })) && a(t, "href", u)
        },
        d(p) {
            p && o(t)
        }
    }
}

function pa(i) {
    let t, d = "None";
    return {
        c() {
            t = l("p"), t.textContent = d
        },
        l(n) {
            t = s(n, "P", {
                "data-svelte-h": !0
            }), E(t) !== "svelte-8wc9ky" && (t.textContent = d)
        },
        m(n, u) {
            B(n, t, u)
        },
        p: wl,
        d(n) {
            n && o(t)
        }
    }
}

function _a(i) {
    let t, d = i[0].depot.name + "",
        n, u;
    return {
        c() {
            t = l("a"), n = x(d), this.h()
        },
        l(p) {
            t = s(p, "A", {
                href: !0,
                class: !0
            });
            var _ = r(t);
            n = $(_, d), _.forEach(o), this.h()
        },
        h() {
            a(t, "href", u = y("/depots/{depotId}", {
                depotId: i[0].depot.id
            })), a(t, "class", "link")
        },
        m(p, _) {
            B(p, t, _), e(t, n)
        },
        p(p, _) {
            _ & 1 && d !== (d = p[0].depot.name + "") && S(n, d), _ & 1 && u !== (u = y("/depots/{depotId}", {
                depotId: p[0].depot.id
            })) && a(t, "href", u)
        },
        d(p) {
            p && o(t)
        }
    }
}

function ha(i) {
    let t, d, n = "Details",
        u, p, _, w, k = "Vehicle",
        I, O, T, g, h = "Depot",
        b, V, U, A, H, L = "Start Postcode",
        P, N, C = (i[0].start_postcode ? ? "Unknown") + "",
        D, M, R, j, Ke = "End Postcode",
        ge, G, J = (i[0].end_postcode ? ? "Unknown") + "",
        Y, F, q, K, z, Qe = "Start Time",
        ee, X, te = (i[0].start_time ? De(i[0].start_time) : "Unknown") + "",
        Z, Le, le, Ve, is = "End Time",
        Pl, We, Xe = (i[0].end_time ? De(i[0].end_time) : "Unknown") + "",
        Ut, Dl, se, ae, Ue, ds = "Date",
        gl, Ye, Ze = (i[0].date ? Qs(i[0].date) : "Unknown") + "",
        xt, Vl, oe, xe, fs = "Route Id",
        Ul, ye, et = (i[0].route_id ? ? "Unknown") + "",
        $t, xl, ne, re, $e, cs = "Clients Client",
        $l, tt, lt = (i[0].clients_client ? ? "Unknown") + "",
        St, Sl, ie, Se, us = "Planned or Actual",
        Tl, st, at = i[0].planned_or_actual + "",
        Tt, ql, de, fe, Te, vs = "Start Mileage",
        Rl, ot, nt = (i[0].start_mileage ? ? "Unknown") + "",
        qt, Al, ce, qe, ps = "End Mileage",
        Nl, rt, it = (i[0].end_mileage ? ? "Unknown") + "",
        Rt, Hl, jl, Fl, Re, _s = "Stops Fields",
        Ml, ue, ve, Ae, hs = "Total Number of Stops",
        Bl, dt, ft = (i[0].total_number_of_stops ? ? "Unknown") + "",
        At, Ol, pe, Ne, ms = "Total Number of Delivery Stops",
        zl, ct, ut = (i[0].total_number_of_delivery_stops ? ? "Unknown") + "",
        Nt, Ll, Ge, _e, He, Cs = "Total Number of Collection Stops",
        Gl, vt, pt = (i[0].total_number_of_collection_stops ? ? "Unknown") + "",
        Ht, Jl, he, me, je, bs = "Total Delivered Parcels",
        Kl, _t, ht = (i[0].total_delivered_parcels ? ? "Unknown") + "",
        jt, Ql, Ce, Fe, Es = "Total Collected Parcels",
        Wl, mt, Ct = (i[0].total_collected_parcels ? ? "Unknown") + "",
        Ft, Xl, be, Ee, Me, ks = "Total Undelivered Parcels",
        Yl, bt, Et = (i[0].total_undelivered_parcels ? ? "Unknown") + "",
        Mt, Zl, ke, Be, Is = "Total Uncollected Parcels",
        yl, kt, It = (i[0].total_uncollected_parcels ? ? "Unknown") + "",
        Bt, es, Ie, we, Oe, ws = "Total Route Time",
        ts, wt, Pt = (i[0].total_route_time_ms ? Ws(i[0].total_route_time_ms) : "Unknown") + "",
        Ot, ls, Pe, ze, Ps = "Total Route Miles",
        ss, Dt, gt = (i[0].total_route_miles ? ? "Unknown") + "",
        zt;

    function Ds(m, v) {
        return m[0].vehicle ? va : ua
    }
    let Lt = Ds(i),
        Q = Lt(i);

    function gs(m, v) {
        return m[0].depot ? _a : pa
    }
    let Gt = gs(i),
        W = Gt(i);
    return {
        c() {
            t = l("div"), d = l("h2"), d.textContent = n, u = f(), p = l("div"), _ = l("div"), w = l("p"), w.textContent = k, I = f(), Q.c(), O = f(), T = l("div"), g = l("p"), g.textContent = h, b = f(), W.c(), V = f(), U = l("div"), A = l("div"), H = l("p"), H.textContent = L, P = f(), N = l("p"), D = x(C), M = f(), R = l("div"), j = l("p"), j.textContent = Ke, ge = f(), G = l("p"), Y = x(J), F = f(), q = l("div"), K = l("div"), z = l("p"), z.textContent = Qe, ee = f(), X = l("p"), Z = x(te), Le = f(), le = l("div"), Ve = l("p"), Ve.textContent = is, Pl = f(), We = l("p"), Ut = x(Xe), Dl = f(), se = l("div"), ae = l("div"), Ue = l("p"), Ue.textContent = ds, gl = f(), Ye = l("p"), xt = x(Ze), Vl = f(), oe = l("div"), xe = l("p"), xe.textContent = fs, Ul = f(), ye = l("p"), $t = x(et), xl = f(), ne = l("div"), re = l("div"), $e = l("p"), $e.textContent = cs, $l = f(), tt = l("p"), St = x(lt), Sl = f(), ie = l("div"), Se = l("p"), Se.textContent = us, Tl = f(), st = l("p"), Tt = x(at), ql = f(), de = l("div"), fe = l("div"), Te = l("p"), Te.textContent = vs, Rl = f(), ot = l("p"), qt = x(nt), Al = f(), ce = l("div"), qe = l("p"), qe.textContent = ps, Nl = f(), rt = l("p"), Rt = x(it), Hl = f(), jl = l("hr"), Fl = f(), Re = l("h2"), Re.textContent = _s, Ml = f(), ue = l("div"), ve = l("div"), Ae = l("p"), Ae.textContent = hs, Bl = f(), dt = l("p"), At = x(ft), Ol = f(), pe = l("div"), Ne = l("p"), Ne.textContent = ms, zl = f(), ct = l("p"), Nt = x(ut), Ll = f(), Ge = l("div"), _e = l("div"), He = l("p"), He.textContent = Cs, Gl = f(), vt = l("p"), Ht = x(pt), Jl = f(), he = l("div"), me = l("div"), je = l("p"), je.textContent = bs, Kl = f(), _t = l("p"), jt = x(ht), Ql = f(), Ce = l("div"), Fe = l("p"), Fe.textContent = Es, Wl = f(), mt = l("p"), Ft = x(Ct), Xl = f(), be = l("div"), Ee = l("div"), Me = l("p"), Me.textContent = ks, Yl = f(), bt = l("p"), Mt = x(Et), Zl = f(), ke = l("div"), Be = l("p"), Be.textContent = Is, yl = f(), kt = l("p"), Bt = x(It), es = f(), Ie = l("div"), we = l("div"), Oe = l("p"), Oe.textContent = ws, ts = f(), wt = l("p"), Ot = x(Pt), ls = f(), Pe = l("div"), ze = l("p"), ze.textContent = Ps, ss = f(), Dt = l("p"), zt = x(gt), this.h()
        },
        l(m) {
            t = s(m, "DIV", {
                class: !0
            });
            var v = r(t);
            d = s(v, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), E(d) !== "svelte-muef8j" && (d.textContent = n), u = c(v), p = s(v, "DIV", {
                class: !0
            });
            var Jt = r(p);
            _ = s(Jt, "DIV", {
                class: !0
            });
            var Kt = r(_);
            w = s(Kt, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(w) !== "svelte-aozblw" && (w.textContent = k), I = c(Kt), Q.l(Kt), Kt.forEach(o), O = c(Jt), T = s(Jt, "DIV", {
                class: !0
            });
            var Qt = r(T);
            g = s(Qt, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(g) !== "svelte-weqlv6" && (g.textContent = h), b = c(Qt), W.l(Qt), Qt.forEach(o), Jt.forEach(o), V = c(v), U = s(v, "DIV", {
                class: !0
            });
            var Wt = r(U);
            A = s(Wt, "DIV", {
                class: !0
            });
            var Xt = r(A);
            H = s(Xt, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(H) !== "svelte-yd7ovd" && (H.textContent = L), P = c(Xt), N = s(Xt, "P", {});
            var Vs = r(N);
            D = $(Vs, C), Vs.forEach(o), Xt.forEach(o), M = c(Wt), R = s(Wt, "DIV", {
                class: !0
            });
            var Yt = r(R);
            j = s(Yt, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(j) !== "svelte-zifxls" && (j.textContent = Ke), ge = c(Yt), G = s(Yt, "P", {});
            var Us = r(G);
            Y = $(Us, J), Us.forEach(o), Yt.forEach(o), Wt.forEach(o), F = c(v), q = s(v, "DIV", {
                class: !0
            });
            var Zt = r(q);
            K = s(Zt, "DIV", {
                class: !0
            });
            var yt = r(K);
            z = s(yt, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(z) !== "svelte-1q1nckb" && (z.textContent = Qe), ee = c(yt), X = s(yt, "P", {});
            var xs = r(X);
            Z = $(xs, te), xs.forEach(o), yt.forEach(o), Le = c(Zt), le = s(Zt, "DIV", {
                class: !0
            });
            var el = r(le);
            Ve = s(el, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(Ve) !== "svelte-i6o7pq" && (Ve.textContent = is), Pl = c(el), We = s(el, "P", {});
            var $s = r(We);
            Ut = $($s, Xe), $s.forEach(o), el.forEach(o), Zt.forEach(o), Dl = c(v), se = s(v, "DIV", {
                class: !0
            });
            var tl = r(se);
            ae = s(tl, "DIV", {
                class: !0
            });
            var ll = r(ae);
            Ue = s(ll, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(Ue) !== "svelte-1ejmlkc" && (Ue.textContent = ds), gl = c(ll), Ye = s(ll, "P", {});
            var Ss = r(Ye);
            xt = $(Ss, Ze), Ss.forEach(o), ll.forEach(o), Vl = c(tl), oe = s(tl, "DIV", {
                class: !0
            });
            var sl = r(oe);
            xe = s(sl, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(xe) !== "svelte-1bpk7pa" && (xe.textContent = fs), Ul = c(sl), ye = s(sl, "P", {});
            var Ts = r(ye);
            $t = $(Ts, et), Ts.forEach(o), sl.forEach(o), tl.forEach(o), xl = c(v), ne = s(v, "DIV", {
                class: !0
            });
            var al = r(ne);
            re = s(al, "DIV", {
                class: !0
            });
            var ol = r(re);
            $e = s(ol, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E($e) !== "svelte-gvgqrx" && ($e.textContent = cs), $l = c(ol), tt = s(ol, "P", {});
            var qs = r(tt);
            St = $(qs, lt), qs.forEach(o), ol.forEach(o), Sl = c(al), ie = s(al, "DIV", {
                class: !0
            });
            var nl = r(ie);
            Se = s(nl, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(Se) !== "svelte-1mf513b" && (Se.textContent = us), Tl = c(nl), st = s(nl, "P", {});
            var Rs = r(st);
            Tt = $(Rs, at), Rs.forEach(o), nl.forEach(o), al.forEach(o), ql = c(v), de = s(v, "DIV", {
                class: !0
            });
            var rl = r(de);
            fe = s(rl, "DIV", {
                class: !0
            });
            var il = r(fe);
            Te = s(il, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(Te) !== "svelte-ki5mr0" && (Te.textContent = vs), Rl = c(il), ot = s(il, "P", {});
            var As = r(ot);
            qt = $(As, nt), As.forEach(o), il.forEach(o), Al = c(rl), ce = s(rl, "DIV", {
                class: !0
            });
            var dl = r(ce);
            qe = s(dl, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(qe) !== "svelte-dfbc9x" && (qe.textContent = ps), Nl = c(dl), rt = s(dl, "P", {});
            var Ns = r(rt);
            Rt = $(Ns, it), Ns.forEach(o), dl.forEach(o), rl.forEach(o), Hl = c(v), jl = s(v, "HR", {}), Fl = c(v), Re = s(v, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), E(Re) !== "svelte-1nt0r5j" && (Re.textContent = _s), Ml = c(v), ue = s(v, "DIV", {
                class: !0
            });
            var fl = r(ue);
            ve = s(fl, "DIV", {
                class: !0
            });
            var cl = r(ve);
            Ae = s(cl, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(Ae) !== "svelte-11bhh0d" && (Ae.textContent = hs), Bl = c(cl), dt = s(cl, "P", {});
            var Hs = r(dt);
            At = $(Hs, ft), Hs.forEach(o), cl.forEach(o), Ol = c(fl), pe = s(fl, "DIV", {
                class: !0
            });
            var ul = r(pe);
            Ne = s(ul, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(Ne) !== "svelte-19v6sy7" && (Ne.textContent = ms), zl = c(ul), ct = s(ul, "P", {});
            var js = r(ct);
            Nt = $(js, ut), js.forEach(o), ul.forEach(o), fl.forEach(o), Ll = c(v), Ge = s(v, "DIV", {
                class: !0
            });
            var Fs = r(Ge);
            _e = s(Fs, "DIV", {
                class: !0
            });
            var vl = r(_e);
            He = s(vl, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(He) !== "svelte-d6noab" && (He.textContent = Cs), Gl = c(vl), vt = s(vl, "P", {});
            var Ms = r(vt);
            Ht = $(Ms, pt), Ms.forEach(o), vl.forEach(o), Fs.forEach(o), Jl = c(v), he = s(v, "DIV", {
                class: !0
            });
            var pl = r(he);
            me = s(pl, "DIV", {
                class: !0
            });
            var _l = r(me);
            je = s(_l, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(je) !== "svelte-12lhats" && (je.textContent = bs), Kl = c(_l), _t = s(_l, "P", {});
            var Bs = r(_t);
            jt = $(Bs, ht), Bs.forEach(o), _l.forEach(o), Ql = c(pl), Ce = s(pl, "DIV", {
                class: !0
            });
            var hl = r(Ce);
            Fe = s(hl, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(Fe) !== "svelte-8eepjb" && (Fe.textContent = Es), Wl = c(hl), mt = s(hl, "P", {});
            var Os = r(mt);
            Ft = $(Os, Ct), Os.forEach(o), hl.forEach(o), pl.forEach(o), Xl = c(v), be = s(v, "DIV", {
                class: !0
            });
            var ml = r(be);
            Ee = s(ml, "DIV", {
                class: !0
            });
            var Cl = r(Ee);
            Me = s(Cl, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(Me) !== "svelte-p405el" && (Me.textContent = ks), Yl = c(Cl), bt = s(Cl, "P", {});
            var zs = r(bt);
            Mt = $(zs, Et), zs.forEach(o), Cl.forEach(o), Zl = c(ml), ke = s(ml, "DIV", {
                class: !0
            });
            var bl = r(ke);
            Be = s(bl, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(Be) !== "svelte-15pfuqi" && (Be.textContent = Is), yl = c(bl), kt = s(bl, "P", {});
            var Ls = r(kt);
            Bt = $(Ls, It), Ls.forEach(o), bl.forEach(o), ml.forEach(o), es = c(v), Ie = s(v, "DIV", {
                class: !0
            });
            var El = r(Ie);
            we = s(El, "DIV", {
                class: !0
            });
            var kl = r(we);
            Oe = s(kl, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(Oe) !== "svelte-1deyff0" && (Oe.textContent = ws), ts = c(kl), wt = s(kl, "P", {});
            var Gs = r(wt);
            Ot = $(Gs, Pt), Gs.forEach(o), kl.forEach(o), ls = c(El), Pe = s(El, "DIV", {
                class: !0
            });
            var Il = r(Pe);
            ze = s(Il, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(ze) !== "svelte-qe0rpt" && (ze.textContent = Ps), ss = c(Il), Dt = s(Il, "P", {});
            var Js = r(Dt);
            zt = $(Js, gt), Js.forEach(o), Il.forEach(o), El.forEach(o), v.forEach(o), this.h()
        },
        h() {
            a(d, "class", "subtitle"), a(w, "class", "field-label"), a(_, "class", "field-group"), a(g, "class", "field-label"), a(T, "class", "field-group"), a(p, "class", "field-row"), a(H, "class", "field-label"), a(A, "class", "field-group"), a(j, "class", "field-label"), a(R, "class", "field-group"), a(U, "class", "field-row"), a(z, "class", "field-label"), a(K, "class", "field-group"), a(Ve, "class", "field-label"), a(le, "class", "field-group"), a(q, "class", "field-row"), a(Ue, "class", "field-label"), a(ae, "class", "field-group"), a(xe, "class", "field-label"), a(oe, "class", "field-group"), a(se, "class", "field-row"), a($e, "class", "field-label"), a(re, "class", "field-group"), a(Se, "class", "field-label"), a(ie, "class", "field-group"), a(ne, "class", "field-row"), a(Te, "class", "field-label"), a(fe, "class", "field-group"), a(qe, "class", "field-label"), a(ce, "class", "field-group"), a(de, "class", "field-row"), a(Re, "class", "subtitle"), a(Ae, "class", "field-label"), a(ve, "class", "field-group"), a(Ne, "class", "field-label"), a(pe, "class", "field-group"), a(ue, "class", "field-row"), a(He, "class", "field-label"), a(_e, "class", "field-group"), a(Ge, "class", "field-row"), a(je, "class", "field-label"), a(me, "class", "field-group"), a(Fe, "class", "field-label"), a(Ce, "class", "field-group"), a(he, "class", "field-row"), a(Me, "class", "field-label"), a(Ee, "class", "field-group"), a(Be, "class", "field-label"), a(ke, "class", "field-group"), a(be, "class", "field-row"), a(Oe, "class", "field-label"), a(we, "class", "field-group"), a(ze, "class", "field-label"), a(Pe, "class", "field-group"), a(Ie, "class", "field-row"), a(t, "class", "block")
        },
        m(m, v) {
            B(m, t, v), e(t, d), e(t, u), e(t, p), e(p, _), e(_, w), e(_, I), Q.m(_, null), e(p, O), e(p, T), e(T, g), e(T, b), W.m(T, null), e(t, V), e(t, U), e(U, A), e(A, H), e(A, P), e(A, N), e(N, D), e(U, M), e(U, R), e(R, j), e(R, ge), e(R, G), e(G, Y), e(t, F), e(t, q), e(q, K), e(K, z), e(K, ee), e(K, X), e(X, Z), e(q, Le), e(q, le), e(le, Ve), e(le, Pl), e(le, We), e(We, Ut), e(t, Dl), e(t, se), e(se, ae), e(ae, Ue), e(ae, gl), e(ae, Ye), e(Ye, xt), e(se, Vl), e(se, oe), e(oe, xe), e(oe, Ul), e(oe, ye), e(ye, $t), e(t, xl), e(t, ne), e(ne, re), e(re, $e), e(re, $l), e(re, tt), e(tt, St), e(ne, Sl), e(ne, ie), e(ie, Se), e(ie, Tl), e(ie, st), e(st, Tt), e(t, ql), e(t, de), e(de, fe), e(fe, Te), e(fe, Rl), e(fe, ot), e(ot, qt), e(de, Al), e(de, ce), e(ce, qe), e(ce, Nl), e(ce, rt), e(rt, Rt), e(t, Hl), e(t, jl), e(t, Fl), e(t, Re), e(t, Ml), e(t, ue), e(ue, ve), e(ve, Ae), e(ve, Bl), e(ve, dt), e(dt, At), e(ue, Ol), e(ue, pe), e(pe, Ne), e(pe, zl), e(pe, ct), e(ct, Nt), e(t, Ll), e(t, Ge), e(Ge, _e), e(_e, He), e(_e, Gl), e(_e, vt), e(vt, Ht), e(t, Jl), e(t, he), e(he, me), e(me, je), e(me, Kl), e(me, _t), e(_t, jt), e(he, Ql), e(he, Ce), e(Ce, Fe), e(Ce, Wl), e(Ce, mt), e(mt, Ft), e(t, Xl), e(t, be), e(be, Ee), e(Ee, Me), e(Ee, Yl), e(Ee, bt), e(bt, Mt), e(be, Zl), e(be, ke), e(ke, Be), e(ke, yl), e(ke, kt), e(kt, Bt), e(t, es), e(t, Ie), e(Ie, we), e(we, Oe), e(we, ts), e(we, wt), e(wt, Ot), e(Ie, ls), e(Ie, Pe), e(Pe, ze), e(Pe, ss), e(Pe, Dt), e(Dt, zt)
        },
        p(m, [v]) {
            Lt === (Lt = Ds(m)) && Q ? Q.p(m, v) : (Q.d(1), Q = Lt(m), Q && (Q.c(), Q.m(_, null))), Gt === (Gt = gs(m)) && W ? W.p(m, v) : (W.d(1), W = Gt(m), W && (W.c(), W.m(T, null))), v & 1 && C !== (C = (m[0].start_postcode ? ? "Unknown") + "") && S(D, C), v & 1 && J !== (J = (m[0].end_postcode ? ? "Unknown") + "") && S(Y, J), v & 1 && te !== (te = (m[0].start_time ? De(m[0].start_time) : "Unknown") + "") && S(Z, te), v & 1 && Xe !== (Xe = (m[0].end_time ? De(m[0].end_time) : "Unknown") + "") && S(Ut, Xe), v & 1 && Ze !== (Ze = (m[0].date ? Qs(m[0].date) : "Unknown") + "") && S(xt, Ze), v & 1 && et !== (et = (m[0].route_id ? ? "Unknown") + "") && S($t, et), v & 1 && lt !== (lt = (m[0].clients_client ? ? "Unknown") + "") && S(St, lt), v & 1 && at !== (at = m[0].planned_or_actual + "") && S(Tt, at), v & 1 && nt !== (nt = (m[0].start_mileage ? ? "Unknown") + "") && S(qt, nt), v & 1 && it !== (it = (m[0].end_mileage ? ? "Unknown") + "") && S(Rt, it), v & 1 && ft !== (ft = (m[0].total_number_of_stops ? ? "Unknown") + "") && S(At, ft), v & 1 && ut !== (ut = (m[0].total_number_of_delivery_stops ? ? "Unknown") + "") && S(Nt, ut), v & 1 && pt !== (pt = (m[0].total_number_of_collection_stops ? ? "Unknown") + "") && S(Ht, pt), v & 1 && ht !== (ht = (m[0].total_delivered_parcels ? ? "Unknown") + "") && S(jt, ht), v & 1 && Ct !== (Ct = (m[0].total_collected_parcels ? ? "Unknown") + "") && S(Ft, Ct), v & 1 && Et !== (Et = (m[0].total_undelivered_parcels ? ? "Unknown") + "") && S(Mt, Et), v & 1 && It !== (It = (m[0].total_uncollected_parcels ? ? "Unknown") + "") && S(Bt, It), v & 1 && Pt !== (Pt = (m[0].total_route_time_ms ? Ws(m[0].total_route_time_ms) : "Unknown") + "") && S(Ot, Pt), v & 1 && gt !== (gt = (m[0].total_route_miles ? ? "Unknown") + "") && S(zt, gt)
        },
        i: wl,
        o: wl,
        d(m) {
            m && o(t), Q.d(), W.d()
        }
    }
}

function ma(i, t, d) {
    let {
        route: n
    } = t;
    return i.$$set = u => {
        "route" in u && d(0, n = u.route)
    }, [n]
}
class Ca extends ys {
    constructor(t) {
        super(), ea(this, t, ma, ha, Zs, {
            route: 0
        })
    }
}

function Xs(i) {
    let t, d;
    return t = new da({
        props: {
            $$slots: {
                default: [ba]
            },
            $$scope: {
                ctx: i
            }
        }
    }), {
        c() {
            as(t.$$.fragment)
        },
        l(n) {
            os(t.$$.fragment, n)
        },
        m(n, u) {
            ns(t, n, u), d = !0
        },
        p(n, u) {
            const p = {};
            u & 1030 && (p.$$scope = {
                dirty: u,
                ctx: n
            }), t.$set(p)
        },
        i(n) {
            d || (Je(t.$$.fragment, n), d = !0)
        },
        o(n) {
            Vt(t.$$.fragment, n), d = !1
        },
        d(n) {
            rs(t, n)
        }
    }
}

function Ys(i) {
    let t, d;
    return {
        c() {
            t = l("p"), d = x(i[2]), this.h()
        },
        l(n) {
            t = s(n, "P", {
                class: !0
            });
            var u = r(t);
            d = $(u, i[2]), u.forEach(o), this.h()
        },
        h() {
            a(t, "class", "error-text")
        },
        m(n, u) {
            B(n, t, u), e(t, d)
        },
        p(n, u) {
            u & 4 && S(d, n[2])
        },
        d(n) {
            n && o(t)
        }
    }
}

function ba(i) {
    let t, d = "Are you sure you want to delete",
        n, u, p, _, w = "Close",
        k, I, O = "Delete",
        T, g, h = i[2] && Ys(i);
    return {
        c() {
            t = l("h2"), t.textContent = d, n = f(), h && h.c(), u = f(), p = l("div"), _ = l("button"), _.textContent = w, k = f(), I = l("button"), I.textContent = O, this.h()
        },
        l(b) {
            t = s(b, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), E(t) !== "svelte-f7ixjg" && (t.textContent = d), n = c(b), h && h.l(b), u = c(b), p = s(b, "DIV", {
                class: !0
            });
            var V = r(p);
            _ = s(V, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), E(_) !== "svelte-orbqhr" && (_.textContent = w), k = c(V), I = s(V, "BUTTON", {
                class: !0,
                "data-svelte-h": !0
            }), E(I) !== "svelte-13gaf1p" && (I.textContent = O), V.forEach(o), this.h()
        },
        h() {
            a(t, "class", "subtitle"), a(_, "class", "btn"), a(I, "class", "btn-error"), a(p, "class", "row")
        },
        m(b, V) {
            B(b, t, V), B(b, n, V), h && h.m(b, V), B(b, u, V), B(b, p, V), e(p, _), e(p, k), e(p, I), T || (g = [Ks(_, "click", i[7]), Ks(I, "click", i[8])], T = !0)
        },
        p(b, V) {
            b[2] ? h ? h.p(b, V) : (h = Ys(b), h.c(), h.m(u.parentNode, u)) : h && (h.d(1), h = null)
        },
        d(b) {
            b && (o(t), o(n), o(u), o(p)), h && h.d(b), T = !1, ta(g)
        }
    }
}

function Ea(i) {
    let t, d, n, u, p = "Admin Section",
        _, w, k, I, O = "ID",
        T, g, h = i[0].id + "",
        b, V, U, A, H, L = "Created At",
        P, N, C = De(i[0].created_at) + "",
        D, M, R, j, Ke = "Updated At",
        ge, G, J = De(i[0].updated_at) + "",
        Y;
    return {
        c() {
            t = l("hr"), d = f(), n = l("div"), u = l("h2"), u.textContent = p, _ = f(), w = l("div"), k = l("div"), I = l("p"), I.textContent = O, T = f(), g = l("p"), b = x(h), V = f(), U = l("div"), A = l("div"), H = l("p"), H.textContent = L, P = f(), N = l("p"), D = x(C), M = f(), R = l("div"), j = l("p"), j.textContent = Ke, ge = f(), G = l("p"), Y = x(J), this.h()
        },
        l(F) {
            t = s(F, "HR", {}), d = c(F), n = s(F, "DIV", {
                class: !0
            });
            var q = r(n);
            u = s(q, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), E(u) !== "svelte-kk7di9" && (u.textContent = p), _ = c(q), w = s(q, "DIV", {
                class: !0
            });
            var K = r(w);
            k = s(K, "DIV", {
                class: !0
            });
            var z = r(k);
            I = s(z, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(I) !== "svelte-jq96wf" && (I.textContent = O), T = c(z), g = s(z, "P", {});
            var Qe = r(g);
            b = $(Qe, h), Qe.forEach(o), z.forEach(o), K.forEach(o), V = c(q), U = s(q, "DIV", {
                class: !0
            });
            var ee = r(U);
            A = s(ee, "DIV", {
                class: !0
            });
            var X = r(A);
            H = s(X, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(H) !== "svelte-2q3a3" && (H.textContent = L), P = c(X), N = s(X, "P", {});
            var te = r(N);
            D = $(te, C), te.forEach(o), X.forEach(o), M = c(ee), R = s(ee, "DIV", {
                class: !0
            });
            var Z = r(R);
            j = s(Z, "P", {
                class: !0,
                "data-svelte-h": !0
            }), E(j) !== "svelte-v2a7bs" && (j.textContent = Ke), ge = c(Z), G = s(Z, "P", {});
            var Le = r(G);
            Y = $(Le, J), Le.forEach(o), Z.forEach(o), ee.forEach(o), q.forEach(o), this.h()
        },
        h() {
            a(u, "class", "subtitle"), a(I, "class", "field-label"), a(k, "class", "field-group"), a(w, "class", "field-row"), a(H, "class", "field-label"), a(A, "class", "field-group"), a(j, "class", "field-label"), a(R, "class", "field-group"), a(U, "class", "field-row"), a(n, "class", "block")
        },
        m(F, q) {
            B(F, t, q), B(F, d, q), B(F, n, q), e(n, u), e(n, _), e(n, w), e(w, k), e(k, I), e(k, T), e(k, g), e(g, b), e(n, V), e(n, U), e(U, A), e(A, H), e(A, P), e(A, N), e(N, D), e(U, M), e(U, R), e(R, j), e(R, ge), e(R, G), e(G, Y)
        },
        p(F, q) {
            q & 1 && h !== (h = F[0].id + "") && S(b, h), q & 1 && C !== (C = De(F[0].created_at) + "") && S(D, C), q & 1 && J !== (J = De(F[0].updated_at) + "") && S(Y, J)
        },
        d(F) {
            F && (o(t), o(d), o(n))
        }
    }
}

function ka(i) {
    let t, d, n, u, p, _, w, k, I, O = "Stops",
        T, g, h, b, V, U, A, H = ca(i[3], "show:adminSections"),
        L, P = i[1] && Xs(i);
    n = new Ca({
        props: {
            route: i[0]
        }
    }), U = new na({
        props: {
            builder: i[4],
            canExpandRows: !1,
            hasOptions: !1
        }
    }), U.$on("cellClick", i[9]);
    let N = H && Ea(i);
    return {
        c() {
            P && P.c(), t = f(), d = l("div"), as(n.$$.fragment), u = f(), p = l("hr"), _ = f(), w = l("div"), k = l("div"), I = l("h2"), I.textContent = O, T = f(), g = l("a"), h = x("Create Stop"), V = f(), as(U.$$.fragment), A = f(), N && N.c(), this.h()
        },
        l(C) {
            P && P.l(C), t = c(C), d = s(C, "DIV", {
                class: !0
            });
            var D = r(d);
            os(n.$$.fragment, D), u = c(D), p = s(D, "HR", {}), _ = c(D), w = s(D, "DIV", {
                class: !0
            });
            var M = r(w);
            k = s(M, "DIV", {
                class: !0
            });
            var R = r(k);
            I = s(R, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), E(I) !== "svelte-17lsvlo" && (I.textContent = O), T = c(R), g = s(R, "A", {
                class: !0,
                href: !0
            });
            var j = r(g);
            h = $(j, "Create Stop"), j.forEach(o), R.forEach(o), V = c(M), os(U.$$.fragment, M), M.forEach(o), A = c(D), N && N.l(D), D.forEach(o), this.h()
        },
        h() {
            a(I, "class", "subtitle"), a(g, "class", "btn"), a(g, "href", b = y("/routes/{routeId}/stops/create", {
                routeId: i[0].id
            })), a(k, "class", "row"), a(w, "class", "block"), a(d, "class", "blocks")
        },
        m(C, D) {
            P && P.m(C, D), B(C, t, D), B(C, d, D), ns(n, d, null), e(d, u), e(d, p), e(d, _), e(d, w), e(w, k), e(k, I), e(k, T), e(k, g), e(g, h), e(w, V), ns(U, w, null), e(d, A), N && N.m(d, null), L = !0
        },
        p(C, [D]) {
            C[1] ? P ? (P.p(C, D), D & 2 && Je(P, 1)) : (P = Xs(C), P.c(), Je(P, 1), P.m(t.parentNode, t)) : P && (sa(), Vt(P, 1, 1, () => {
                P = null
            }), la());
            const M = {};
            D & 1 && (M.route = C[0]), n.$set(M), (!L || D & 1 && b !== (b = y("/routes/{routeId}/stops/create", {
                routeId: C[0].id
            }))) && a(g, "href", b), H && N.p(C, D)
        },
        i(C) {
            L || (Je(P), Je(n.$$.fragment, C), Je(U.$$.fragment, C), L = !0)
        },
        o(C) {
            Vt(P), Vt(n.$$.fragment, C), Vt(U.$$.fragment, C), L = !1
        },
        d(C) {
            C && (o(t), o(d)), P && P.d(C), rs(n), rs(U), N && N.d()
        }
    }
}

function Ia(i, t, d) {
    let {
        data: n
    } = t, u = n.route.data, p = n.user;
    const _ = new ra({
            url: aa("/v1/routes/{routeId}/stops", {
                routeId: u.id
            }),
            columns: [...oa, {
                id: "edit",
                label: "Edit",
                link: h => y("/routes/{routeId}/stops/{stopId}/edit", {
                    stopId: h.id,
                    routeId: u.id
                }),
                formatter: () => "Edit",
                sortable: !1,
                searchable: !1
            }, {
                id: "delete",
                label: "Delete",
                link: () => y("/routes/{routeId}", {
                    routeId: u.id
                }),
                formatter: () => "Delete",
                sortable: !1,
                searchable: !1
            }],
            additionalFetchOptions: {
                credentials: "include"
            },
            sorters: [
                ["sequence", "asc"]
            ],
            rowLink: h => y("/routes/{routeId}/stops/{stopId}", {
                stopId: h.id,
                routeId: u.id
            })
        }),
        w = async () => {
            if (d(2, I = null), k === null) return;
            const h = await fa.DELETE("/v1/routes/{routeId}/stops/{stopId}", {
                params: {
                    path: {
                        routeId: u.id,
                        stopId: k
                    }
                }
            });
            if (h.error === void 0) {
                d(1, k = null), await ia(), _.buildData();
                return
            }
            d(2, I = h.error.message)
        };
    let k = null,
        I = null;
    const O = () => d(1, k = null),
        T = () => w(),
        g = h => {
            const {
                column: b,
                row: V
            } = h.detail;
            b.id === "delete" && d(1, k = V.data.id), console.log({
                deletingStopId: k
            }), console.log(h.detail)
        };
    return i.$$set = h => {
        "data" in h && d(6, n = h.data)
    }, i.$$.update = () => {
        i.$$.dirty & 64 && console.log({
            data: n
        }), i.$$.dirty & 64 && d(0, u = n.route.data)
    }, [u, k, I, p, _, w, n, O, T, g]
}
class Ma extends ys {
    constructor(t) {
        super(), ea(this, t, Ia, ka, Zs, {
            data: 6
        })
    }
}
export {
    Ma as component
};