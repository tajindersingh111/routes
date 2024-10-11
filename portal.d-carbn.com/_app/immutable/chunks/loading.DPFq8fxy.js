import {
    s as v,
    k as d,
    l as n,
    m as r,
    o as c,
    i as o,
    r as t,
    d as m
} from "./scheduler.Bal8Y2GG.js";
import {
    S as w,
    i as b
} from "./index.BruxqCn-.js";

function h(l) {
    let s, i = '<div class="lds-roller svelte-b8s8w"><div class="svelte-b8s8w"></div> <div class="svelte-b8s8w"></div> <div class="svelte-b8s8w"></div> <div class="svelte-b8s8w"></div> <div class="svelte-b8s8w"></div> <div class="svelte-b8s8w"></div> <div class="svelte-b8s8w"></div> <div class="svelte-b8s8w"></div></div>';
    return {
        c() {
            s = d("div"), s.innerHTML = i, this.h()
        },
        l(e) {
            s = n(e, "DIV", {
                class: !0,
                "data-svelte-h": !0
            }), r(s) !== "svelte-5jkgh9" && (s.innerHTML = i), this.h()
        },
        h() {
            c(s, "class", "loading-wrapper svelte-b8s8w")
        },
        m(e, a) {
            o(e, s, a)
        },
        p: t,
        i: t,
        o: t,
        d(e) {
            e && m(s)
        }
    }
}
class f extends w {
    constructor(s) {
        super(), b(this, s, null, h, v, {})
    }
}
export {
    f as L
};