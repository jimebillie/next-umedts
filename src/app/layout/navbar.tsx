"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Navbar() {
    const [bergerToggle, setBergerToggle] = useState<number>(0);

    function bergerClick() {
        if (bergerToggle === 0) {
            setBergerToggle(1)
        } else {
            setBergerToggle(0)
        }
    }

    /**
     * -------------------------------------------
     * # Event on resize
     * -------------------------------------------
     * @desc -
     *
     */
    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                setBergerToggle(0)
            }
        });
    }, []);

    const [pathNow, setPathNow] = useState("");
    useEffect(() => {
        // Check if window is defined before using window.location.pathname
        if (typeof window !== 'undefined') {
            setPathNow(window.location.pathname);
        }
    }, [typeof window !== 'undefined' ? window.location.pathname : null]);


    return (
        <>
            <div className="flex justify-center bg-[#ebffdc] border border-[#ddf1d0] relative z-10">
                <div className="w-[90%] md:w-[80%]">
                    <div className="flex justify-between items-center">
                        <Link href={"/"}>
                            <Image src="/logo/logo-green.png" alt="logo" width={80} height={80} priority={true}/>
                        </Link>

                        <button className="md:hidden text-[#367f01] cursor-pointer bg-[#d1ebc1] rounded-[5px] p-2 px-3"
                                onClick={bergerClick}>
                            <FontAwesomeIcon icon={faBars} className="w-[30px] h-[30px]"/>
                        </button>

                        <div
                            className={`absolute left-0 w-full top-[80px] ${bergerToggle === 0 ? 'hidden' : 'flex'} justify-center ||start md|| md:flex md:static md:justify-end`}>
                            <div
                                className={`text-[#367f01] font-semibold relative w-[95%] bg-white border border-zinc-200 flex flex-col items-start left-0 p-5 rounded-b-3xl drop-shadow-2xl ||start md|| md:border-0 md:flex md:bg-[unset] md:flex-row md:items-center md:w-auto md:top-auto md:left-auto md:p-0 md:rounded-b-none md:drop-shadow-none z-10`
                                }>
                                <Link href={"/"}
                                      className={`ml-1 py-2 px-2 ${pathNow === "/" ? 'underline underline-offset-[5px] decoration-[2px]' : ''} hover:underline hover:underline-offset-[5px] hover:decoration-[2px]`}>
                                    หน้าแรก
                                </Link>
                                <Link href={"/product"}
                                      className={`ml-1 py-2 px-2 ${pathNow === "/product" ? 'underline underline-offset-[5px] decoration-[2px]' : ''} hover:underline hover:underline-offset-[5px] hover:decoration-[2px]`}>
                                    สินค้าทั้งหมด
                                </Link>
                                <Link href={"/aboutus"}
                                      className={`ml-1 py-2 px-2 ${pathNow === "/aboutus" ? 'underline underline-offset-[5px] decoration-[2px]' : ''} hover:underline hover:underline-offset-[5px] hover:decoration-[2px]`}>
                                    เกี่ยวกับเรา
                                </Link>
                                <Link href={"/product_warranty"}
                                      className={`ml-1 py-2 px-2 ${pathNow === "/product_warranty" ? 'underline underline-offset-[5px] decoration-[2px]' : ''} hover:underline hover:underline-offset-[5px] hover:decoration-[2px]`}>
                                    การรับประกัน
                                </Link>
                                <Link href={"/contact"}
                                      className={`ml-1 py-2 px-2 ${pathNow === "/contact" ? 'underline underline-offset-[5px] decoration-[2px]' : ''} hover:underline hover:underline-offset-[5px] hover:decoration-[2px]`}>
                                    ติดต่อเรา
                                </Link>
                                {
                                    /**
                                     * -------------------------------------------
                                     * # Change language.
                                     * -------------------------------------------
                                     * @desc -
                                     *
                                     */
                                }
                                <div className="px-2 mt-3 sm:mt-0 flex items-center justify-center">
                                    <a className="mx-1 border-[2px] border-[white]" href="#">
                                        <img
                                            src={"https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg"}
                                            alt={"th"} style={{width: "20px", height: "13px"}}/>
                                    </a>
                                    <a className="mx-1 border-[2px] border-[white]" href="#">
                                        <img
                                            src={"https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1600px-Flag_of_the_United_Kingdom.svg.png?20190917170937"}
                                            alt={"th"} style={{width: "20px", height: "13px"}}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}