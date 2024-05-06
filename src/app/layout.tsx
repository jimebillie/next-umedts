import "./globals.css";
import React from "react";
import {Providers} from "@/app/Redux/Provider";
import {current_lang} from "@/app/lang/conf_lang";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang={current_lang()}>
        <head>
            <title>umedts</title>
            <link rel={"icon"} href={"/logo/logo-green.png"}/>
        </head>
        <body>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    )
}
