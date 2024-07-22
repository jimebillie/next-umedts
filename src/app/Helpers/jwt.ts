import * as jose from "jose"
import { cookies } from "next/headers";
const _key: any = process.env.JWT_SECRET;

export async function signToken(_payload: {}) {
    try {
        const _secretKey: Uint8Array = new TextEncoder().encode(_key)
        const _token = await new jose.SignJWT(_payload)
            .setProtectedHeader({ alg: 'HS256' })
            .sign(_secretKey);
        return { status: "ok", msg: _token }
    } catch (err: any) {
        return { status: "failed", msg: "" + err }
    }
}
export async function verifyToken(_token: string) {
    try {
        const _secretKey: Uint8Array = new TextEncoder().encode(_key)
        return { status: "ok", msg: (await jose.jwtVerify(_token, _secretKey)).payload }
    } catch (err: any) {
        return { status: "failed", msg: "" + err }
    }
}

export async function _getDetailUser() {
    try {
        const _auth: any = cookies().get("_auth")?.value;
        const _token: any = await verifyToken(_auth)
        return { status: "ok", msg: _token.msg }
    } catch (err: any) {
        return { status: "failed", msg: "" + err }
    }
}