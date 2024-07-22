"use client"
import { useEffect, useState } from "react"

export default function DashContent({ children, nowToggle }: { children: React.ReactNode, nowToggle: boolean }) {

    return (
        <>
            <div className={`mt-[49px] px-5 pt-3 transition-all duration-300 ${nowToggle === true ? 'ml-[0px]' : 'ml-[300px]'}`}>{children}</div>
        </>
    )
}