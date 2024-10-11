import {
    g as n
} from "./entry.B98oQIZ2.js";
import {
    e as r
} from "./index.DYMvb8Iz.js";
import {
    f as e
} from "./fetchClient.DtCbC4hg.js";
import {
    f as a
} from "./links.CXgoaKkn.js";
const i = async () => {
        (await e.POST("/v1/auth/logout")).error && r(500, {
            message: "Something went wrong"
        }), n(a("/login", {}), {
            invalidateAll: !0
        })
    },
    l = async s => ((await e.POST("/v1/auth/forgot-password", {
        body: {
            email: s
        }
    })).error && r(500, {
        message: "Something went wrong"
    }), alert(`We have sent you an email with instructions on how to reset your password

Email: ${s}`), i()),
    g = (s, o) => s.permissions.includes(o),
    h = (s, o) => {
        for (const t of o)
            if (s.permissions.includes(t)) return !0;
        return !1
    };
export {
    g as a, h, i as l, l as r
};