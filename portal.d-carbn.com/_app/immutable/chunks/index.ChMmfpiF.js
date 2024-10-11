import {
    c as x
} from "./index.CvmYViMX.js";
import {
    A as _,
    B as y
} from "./scheduler.Bal8Y2GG.js";

function U(t, {
    delay: o = 0,
    duration: s = 400,
    easing: n = _
} = {}) {
    const a = +getComputedStyle(t).opacity;
    return {
        delay: o,
        duration: s,
        easing: n,
        css: c => `opacity: ${c*a}`
    }
}

function V(t, {
    delay: o = 0,
    duration: s = 400,
    easing: n = x,
    x: a = 0,
    y: c = 0,
    opacity: f = 0
} = {}) {
    const r = getComputedStyle(t),
        e = +r.opacity,
        p = r.transform === "none" ? "" : r.transform,
        u = e * (1 - f),
        [m, l] = y(a),
        [$, d] = y(c);
    return {
        delay: o,
        duration: s,
        easing: n,
        css: (i, g) => `
			transform: ${p} translate(${(1-i)*m}${l}, ${(1-i)*$}${d});
			opacity: ${e-u*g}`
    }
}
export {
    V as a, U as f
};