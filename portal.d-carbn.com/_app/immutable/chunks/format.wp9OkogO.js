const r = t => new Date(t).toLocaleString(),
    n = t => t.toISOString().slice(0, -5) + "Z",
    c = t => {
        const o = t / 36e5,
            s = o % 1 * 60,
            e = s % 1 * 60;
        return `${a(Math.floor(o))}hrs ${a(Math.floor(s))}mins ${a(Math.floor(e))}secs`
    },
    a = t => t.toString().padStart(2, String(0)),
    m = t => new Date(t).toJSON().substring(0, 10),
    i = t => new Date(t).toLocaleDateString(),
    d = "dd/MM/yy HH:mm",
    S = "dd/MM/yy";
export {
    i as a, d as b, S as c, r as d, c as m, m as s, n as u
};