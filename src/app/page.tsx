"use client"
import LayoutMain from "@/app/layout/layout-main";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus, faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay, Navigation, A11y} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import {useState} from "react";
import Item_Product from "@/app/component/item_product";


export default function Home() {
    const [arrayProduct, setArrayProduct] = useState<any>(["x", "x", "x", "x", "x", "x", "x", "x"])

    return (
        <>
            <LayoutMain>

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


                <div className="mt-[3em]">
                    <h1 className="font-bold text-3xl text-green-800 flex flex-wrap items-center border-b-2 border-green-900 pb-3">
                        <FontAwesomeIcon icon={faCartShopping}
                                         className="text-green-900"
                                         style={{width: "30px", height: "30px", marginRight: "5px"}}
                        />
                        สินค้าของเรา
                    </h1>

                    <div
                        className="mt-[1.5em] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-[4rem] mb-5">
                        {arrayProduct.map((v: any, i: any) => (
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
