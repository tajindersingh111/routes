import {
    r as f,
    s as l
} from "./scheduler.Bal8Y2GG.js";
const e = [];

function h(n, b = f) {
    let r;
    const i = new Set;

    function o(t) {
        if (l(n, t) && (n = t, r)) {
            const c = !e.length;
            for (const s of i) s[1](), e.push(s, n);
            if (c) {
                for (let s = 0; s < e.length; s += 2) e[s][0](e[s + 1]);
                e.length = 0
            }
        }
    }

    function u(t) {
        o(t(n))
    }

    function p(t, c = f) {
        const s = [t, c];
        return i.add(s), i.size === 1 && (r = b(o, u) || f), t(n), () => {
            i.delete(s), i.size === 0 && r && (r(), r = null)
        }
    }
    return {
        set: o,
        update: u,
        subscribe: p
    }
}
export {
    h as w
};