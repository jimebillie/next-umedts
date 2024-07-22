"use server"

import { cookies } from "next/headers"

export async function logout() {
    cookies().delete("_auth")
    return "ok"
}