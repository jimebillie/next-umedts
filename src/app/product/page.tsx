"use client"
import LayoutMain from "@/app/layout/layout-main";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {faProductHunt} from "@fortawesome/free-brands-svg-icons";
import Item_Product from "@/app/component/item_product";


export default function Product() {
    const [arrayProduct, setArrayProduct] = useState<any>([{},{},{},{},{},{},{},{},{},{},{},{},])

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
                        {arrayProduct.map((v: any,i:any) => (
                            <Item_Product
                                key={v + i}
                                nameProduct={" ชื่อสินค้า Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vel."}
                                detailProduct={"รายละเอียด Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,quis."}
                            />
                        ))}
                    </div>
                </div>
            </LayoutMain>
        </>
    );
}
