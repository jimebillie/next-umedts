"use client"
import { logout } from "./sever/logout"
import Link from "next/link";
export default function DashAside({ userDetail, nowToggle }: { userDetail?: any, nowToggle: boolean }) {
    async function handdleLogout() {
        const _logout: any = await logout();
        if (_logout === "ok") {
            window.location.reload();
        }
    }
    return (
        <>
            <div className={`w-[300px] bg-[#f3f3f3] border-r border-[#e4e4e7] fixed top-0 bottom-0 flex flex-col transition-transform duration-300 ${nowToggle ? 'translate-x-[-300px]' : 'translate-x-0'}`}>

                <div className="mt-[49px] bg-[rgb(243,243,243)] py-3 px-5 shadow-sm">
                    <div className="border border-dashed border-gray-2 p-2 bg-white font-semibold flex">
                        <div className="flex-grow line-clamp-1 break-all">
                            Hi, {userDetail.user}
                        </div>
                        <div className="pl-2">
                            <small className="underline cursor-pointer" onClick={handdleLogout}>Logout</small>
                        </div>
                    </div>
                </div>
                <div className="px-5 py-3 flex-grow-1 overflow-y-auto">

                    <div className="font-semibold">Menu</div>
                    <div className="pl-5 border-l border-gray-400 py-3">
                        <div className="relative before:w-[10px] before:h-[10px] before:content-[''] before:absolute before:border-t before:border-gray-400 before:left-[-20px] before:top-3">
                            <Link href="/back-office/dashboard">จัดการ Slide หน้าแรก</Link>
                        </div>
                        <div className="relative before:w-[10px] before:h-[10px] before:content-[''] before:absolute before:border-t before:border-gray-400 before:left-[-20px] before:top-3">
                            <Link href="#2">menu2</Link>
                        </div>
                        <div className="relative before:w-[10px] before:h-[10px] before:content-[''] before:absolute before:border-t before:border-gray-400 before:left-[-20px] before:top-3">
                            <Link href="#3">menu3</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}