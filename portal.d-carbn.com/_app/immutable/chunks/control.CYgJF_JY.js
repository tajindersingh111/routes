class i {
    constructor(t, s) {
        this.status = t, typeof s == "string" ? this.body = {
            message: s
        } : s ? this.body = s : this.body = {
            message: `Error: ${t}`
        }
    }
    toString() {
        return JSON.stringify(this.body)
    }
}
class o {
    constructor(t, s) {
        this.status = t, this.location = s
    }
}
class a extends Error {
    constructor(t, s, e) {
        super(e), this.status = t, this.text = s
    }
}
export {
    i as H, o as R, a as S
};