"use client"
import { _getDetailUser } from "@/app/Helpers/jwt";
import DashAside from "./DashAside";
import DashContent from "./DashContent";
import DashTop from "./DashTop";
import { useEffect, useState } from "react";

export default function DashLayoutClient({ children, userDetail }: { children: React.ReactNode, userDetail: any }) {
    const [toggleAside, setToggleAside] = useState<boolean>(false)
    useEffect(() => { }, [toggleAside])
    useEffect(() => {
        if (window.innerWidth <= 768) {
            setToggleAside(true)
        } else {
            setToggleAside(false)
        }
        window.addEventListener("resize", () => {
            const _wdSize = window.innerWidth
            if (_wdSize <= 768) {
                setToggleAside(true)
            } else {
                setToggleAside(false)
            }
        })

    }, [])
    return (
        <>
            <DashTop setToggleAside={setToggleAside} nowToggle={toggleAside} />
            <DashAside userDetail={userDetail} nowToggle={toggleAside} />
            <DashContent nowToggle={toggleAside} > {children} </DashContent>
        </>
    )
}