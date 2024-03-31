"use client"
import LayoutMain from "@/app/component/layout-main";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {faProductHunt} from "@fortawesome/free-brands-svg-icons";


export default function Product() {
    const [arrayProduct, setArrayProduct] = useState<any>(["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"])

    return (
        <>
            <LayoutMain>
                <div className="mt-[2em]">
                    <h1 className="font-bold text-3xl text-green-800 flex flex-wrap items-center border-b-2 border-green-900 pb-3">
                        <FontAwesomeIcon icon={faProductHunt}
                                         className="text-green-900"
                                         style={{width: "30px", height: "30px", marginRight: "5px"}}
                        />
                        สินค้าทั้งหมด
                    </h1>

                    <div
                        className="mt-[1.3em] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-[4rem] mb-5">
                        {arrayProduct.map((v: any, i: any) => (
                            <div
                                className="w-[100%] min-h-[300px] text-zinc-500">
                                <div
                                    className="w-full h-[200px] bg-zinc-100 border border-zinc-400 flex justify-center items-center">
                                    รูปสินค้า
                                </div>
                                <div className="mt-3">
                                    <div
                                        className="break-all leading-[1.5em] overflow-hidden whitespace-nowrap text-ellipsis w-full">
                                        <b>ชื่อสินค้า Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae,
                                            vel.</b>
                                    </div>
                                    <div
                                        className="break-all leading-[1.5em] h-[3em] overflow-hidden whitespace-normal text-ellipsis w-full">
                                        รายละเอียด Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,
                                        quis.
                                    </div>
                                    <button
                                        className="mt-3 bg-green-800 text-white border border-zinc-300 rounded-[20px] w-full p-2 justify-center flex hover:bg-green-700">
                                        <FontAwesomeIcon icon={faCartPlus} className="mr-2 w-[20px] h-[20px]"/>
                                        <div>เพิ่มสินค้า</div>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </LayoutMain>
        </>
    );
}
