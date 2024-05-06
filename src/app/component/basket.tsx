"use client"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons/faCartArrowDown";
import {useSelector} from "react-redux";
import {RootState} from "@/app/Redux/Store";

interface IBasket{
    trans:any
}
export default function Basket({trans}:IBasket){
    const countBasket:any = useSelector((state:RootState) => state.countBasket.value)
 return (
     <div className={`fixed bottom-[20px] right-[20px] z-10 ${countBasket === 0 ? "hidden" : ""}`}>
        <div className="border-[2px] border-green-700 py-[5px] px-[15px] bg-green-50 text-green-700 font-bold flex justify-center items-center text-2xl">
            <FontAwesomeIcon className="mr-2" icon={faCartArrowDown} style={{width:"25px", height:"25px"}}/>
            {trans.basket.basket} ( <span className="text-red-400">{countBasket}</span> )
        </div>
     </div>
 )
}