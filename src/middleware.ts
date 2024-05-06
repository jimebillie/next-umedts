import {NextResponse} from 'next/server'
import type {NextRequest} from 'next/server'
import {conf_lang} from "@/app/lang/conf_lang";

export function middleware(request: NextRequest) {
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
             */
        {
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
        const resRedirect :any = NextResponse.redirect(new URL(url, request.url));
        resRedirect.cookies.set("_lang", "en");
        return resRedirect
    }
    if (request.nextUrl.pathname.startsWith('/change/lang/th')) {
        const resRedirect :any = NextResponse.redirect(new URL(url, request.url));
        resRedirect.cookies.set("_lang", "th");
        return resRedirect
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