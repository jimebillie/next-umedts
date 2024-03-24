import React from "react";
import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <div className="flex justify-center bg-green-800">
                <div className="w-[90%] md:w-[80%]">
                    <div className="flex justify-between items-center">
                        <Image src="/logo/logo-green.png" alt="logo" width={80} height={80}/>
                        <div className="text-white flex">
                            <a href={""} className="ml-1 py-2 px-5 bg-green-700 hover:bg-green-900 rounded-[5px]">
                                หน้าแรก
                            </a>
                            <a href={""} className="ml-1 py-2 px-5 hover:bg-green-900 rounded-[5px]">
                                เกี่ยวกับเรา
                            </a>
                            <a href={""} className="ml-1 py-2 px-5 hover:bg-green-900 rounded-[5px]">
                                สินค้าทั้งหมด
                            </a>
                            <a href={""} className="ml-1 py-2 px-5 hover:bg-green-900 rounded-[5px]">
                                การรับประกัน
                            </a>
                            <a href={""} className="ml-1 py-2 px-5 hover:bg-green-900 rounded-[5px]">
                                ติดต่อเรา
                            </a>
                            {
                                /**
                                 * -------------------------------------------
                                 * # Change language.
                                 * -------------------------------------------
                                 * @desc -
                                 *
                                 */
                            }
                            <div className="ml-3 flex items-center justify-center">
                                <a className="mx-1 border-[1px] border-white" href="#">
                                    <img
                                        src={"https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg"}
                                        alt={"th"} style={{width: "20px" ,height:"13px"}}/>
                                </a>
                                <a className="mx-1 border-[1px] border-white" href="#">
                                    <img
                                        src={"https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1600px-Flag_of_the_United_Kingdom.svg.png?20190917170937"}
                                        alt={"th"} style={{width: "20px" ,height:"13px"}}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}