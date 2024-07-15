import * as jose from "jose"

export async function signToken(_payload: {}) {
    try {
        
    } catch (err: any) {
        
    }
}
export async function verifyToken(_token: string) {
    try {
        const _key: any = process.env.JWT_SECRET;
        const _secretKey: Uint8Array = new TextEncoder().encode(_key)
        return { status: "ok", msg: (await jose.jwtVerify(_token, _secretKey)).payload }
    } catch (err: any) {
        return { status: "failed", msg: "" + err }
    }
}