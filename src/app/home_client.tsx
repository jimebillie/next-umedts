"use client"
import {useState} from "react";
import Item_Product from "@/app/component/item_product";

/**
 * -------------------------------------------
 * # slide
 * -------------------------------------------
 * @desc -
 * @reff -
 */
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay, Navigation, A11y} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import {ComponentItemProduct} from "@/app/component/component_gateway";

export function HomeItemsProduct({currentLang,lang}:{currentLang:any,lang:any}) {

    /**
     * -------------------------------------------
     * # Mockup data
     * -------------------------------------------
     * @desc -
     * @reff -
     */
    const [arrayProduct, setArrayProduct] = useState<any>(["x", "x", "x", "x", "x", "x", "x", "x"])
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
            className="mt-[1.5em] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-[4rem] mb-5">
            {arrayProduct.map((v: any, i: any) => (
                <ComponentItemProduct key={v + i}
                                      nameProduct={nameProduct}
                                      detailProduct={detailProduct}
                                      lang={lang}
                />
            ))}
        </div>
    )
}

export function HomeSlide() {
    return (
        <Swiper
            className="cursor-grab border border-zinc-200"
            style={{width: "100%"}}
            modules={[Pagination, Autoplay, Navigation, A11y]}
            navigation={false}
            autoplay={{delay: 5000}}
            pagination={{clickable: true}}
            onSwiper={(swiper) => {
            }}
            onSlideChange={() => {
            }}
        >
            <SwiperSlide>
                <img
                    className="w-[100%]"
                    src={"/home/slide_test.png"}
                    alt={""}/>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="w-[100%]"
                    src={"/home/slide_test.png"}
                    alt={""}/>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    className="w-[100%]"
                    src={"/home/slide_test.png"}
                    alt={""}/>
            </SwiperSlide>
        </Swiper>
    )
}
