"use client"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {increment} from "@/app/Redux/feat/count_basket";


interface InterfaceItemProduct {
    nameProduct: string,
    detailProduct: string,
    lang :any
}

export default function Item_Product({nameProduct, detailProduct, lang}: InterfaceItemProduct) {
    const dispatch: any = useDispatch();
    return (
        <div
            className="w-[100%] min-h-[300px] text-zinc-500">
            <div
                className="w-full h-[200px] bg-zinc-100 border border-zinc-400 flex justify-center items-center">
                {lang.item_product.product_image}
            </div>
            <div className="mt-3">
                <div
                    className="break-all leading-[1.5em] overflow-hidden whitespace-nowrap text-ellipsis w-full">
                    <b>
                        {nameProduct}
                    </b>
                </div>
                <div
                    className="mt-2 break-all leading-[1.5em] h-[3em] overflow-hidden whitespace-normal text-ellipsis w-full">
                    {detailProduct}
                </div>
                <button
                    className="mt-3 bg-[#72aa4a] text-white border border-zinc-300 rounded-[20px] w-full p-2 justify-center flex hover:bg-[#7cb852]"
                    onClick={() => dispatch(increment())}
                >
                    <FontAwesomeIcon icon={faCartPlus} className="mr-2 w-[20px] h-[20px]"/>
                    <div>{lang.item_product.add_to_basket}</div>
                </button>
            </div>
        </div>
    )
}