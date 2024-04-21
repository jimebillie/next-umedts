import "./globals.css";
import React from "react";
import {Providers} from "@/app/Redux/Provider";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
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
