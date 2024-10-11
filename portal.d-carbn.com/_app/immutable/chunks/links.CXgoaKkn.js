import {
    e as r
} from "./public.DoyVH2H6.js";
const s = (e, o) => `${r.PUBLIC_API_URL}${e.replace(/{([^{}]*)}/g,(a,t)=>o[t]||a)}`,
    c = (e, o) => e.replace(/{([^{}]*)}/g, (a, t) => o[t] || a);
export {
    s as a, c as f
};