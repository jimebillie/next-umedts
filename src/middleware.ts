import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { conf_lang } from "@/app/lang/conf_lang";
import { cookies } from 'next/headers';
import { verifyToken } from './app/Helpers/jwt';

export async function middleware(request: NextRequest) {
    /**
     * -------------------------------------------
     * # Ref how to use cookie
     * -------------------------------------------
     * @desc -
     * @ref https://nextjs.org/docs/app/building-your-application/routing/middleware#using-cookies
     *
     */
    const response: NextResponse = NextResponse.next();
    const _lang: any = request.cookies.has("_lang");
    const { pathname } = request.nextUrl;
    const cookies = request.cookies;
    const authToken = cookies.get('_auth')?.value || '';


    if (!_lang) {
        response.cookies.set("_lang", "th");
    } else {
        const value_lang: any = request.cookies.get("_lang")?.value;
        if (!conf_lang().includes(value_lang))
            /**
             * -------------------------------------------
             * # Check valid of _lang with conf_lang()
             * -------------------------------------------
             * @desc -
             *
             */ {
            /**
             * -------------------------------------------
             * # False : set lang default
             * -------------------------------------------
             * @desc - On false set 'th' everytime
             *
             */
            response.cookies.set("_lang", "th");
        }
    }

    /**
     * -------------------------------------------
     * # Get Referer url
     * -------------------------------------------
     * @desc -
     *
     */
    const url: any = request.headers.get("referer") || request.nextUrl.origin
    /**
     * -------------------------------------------
     * # Set Redirect with cookie
     * -------------------------------------------
     * @desc -
     *
     */
    if (request.nextUrl.pathname.startsWith('/change/lang/en')) {
        const resRedirect: any = NextResponse.redirect(new URL(url, request.url));
        resRedirect.cookies.set("_lang", "en");
        return resRedirect
    }
    if (request.nextUrl.pathname.startsWith('/change/lang/th')) {
        const resRedirect: any = NextResponse.redirect(new URL(url, request.url));
        resRedirect.cookies.set("_lang", "th");
        return resRedirect
    }
    /**
     * -------------------------------------------
     * # Back-office
     * -------------------------------------------
     * @desc - Description
     *
     */
    if (pathname === '/back-office') {
        return NextResponse.redirect(new URL("/back-office/login", request.url));
    }
    if (pathname === '/back-office/login') {
        if (authToken !== "" && (await verifyToken(authToken))?.status === "ok") {
            return NextResponse.redirect(new URL("/back-office/dashboard", request.url));
        } else {
            return response
        }
    }
    if (pathname.startsWith('/back-office/dashboard')) {
        if (authToken !== "" && (await verifyToken(authToken))?.status === "ok") {
            return response
        } else {
            return NextResponse.redirect(new URL("/back-office/login", request.url));
        }
    }


    /**
     * -------------------------------------------
     * # Return response
     * -------------------------------------------
     * @desc -
     *
     */
    return response
}
export const config = {
    matcher: [
        '/change/lang/th',
        '/change/lang/en',
        '/back-office',
        '/back-office/login',
        '/back-office/dashboard/:path*',
    ],
}