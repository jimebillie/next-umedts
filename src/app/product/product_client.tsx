"use client"
import {useState} from "react";
import {ComponentItemProduct} from "@/app/component/component_gateway";

export default function ProductClient({currentLang, lang}: { currentLang: any, lang: any }) {

    /**
     * -------------------------------------------
     * # Mockup data
     * -------------------------------------------
     * @desc -
     * @reff -
     */
    const [arrayProduct, setArrayProduct] = useState<any>([
        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
    ])

    let nameProduct: string = "ชื่อสินค้า Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vel."
    let detailProduct: string = "รายละเอียด Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,quis."

    if (currentLang === "th") {
        nameProduct = "ชื่อสินค้า Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vel."
        detailProduct = "รายละเอียด Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,quis."
    }
    if (currentLang === "en") {
        nameProduct = "Name Product Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vel."
        detailProduct = "Detail Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo,quis."
    }
    return (
        <div
            className="mt-[1.3em] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-[4rem] mb-5">
            {arrayProduct.map((v: any, i: any) => (
                <ComponentItemProduct
                    key={v + i}
                    nameProduct={nameProduct}
                    detailProduct={detailProduct}
                    lang={lang}
                />
            ))}
        </div>
    )
}