"use client"
import React from "react";
import Navbar from "@/app/layout/navbar";
import Footer from "@/app/layout/footer";
import {ComponentBasket} from "@/app/component/component_gateway";

export default function LayoutMain({children, trans}: { children: React.ReactNode,trans:any}) {
    return (
        <>
            {

                /**
                 * -------------------------------------------
                 * # Nav bar
                 * -------------------------------------------
                 * @desc -
                 *
                 */
            }
            <Navbar trans={trans}/>
            {

                /**
                 * -------------------------------------------
                 * # Contain
                 * -------------------------------------------
                 * @desc -
                 *
                 */
            }
            <div className="flex justify-center min-h-[90vh]">
                <div className="w-[90%] md:w-[80%] py-[50px] bg-white">
                    {children}
                </div>
            </div>
            {

                /**
                 * -------------------------------------------
                 * # Footer
                 * -------------------------------------------
                 * @desc -
                 *
                 */
            }
            <Footer trans={trans}/>
            <ComponentBasket trans={trans}/>
        </>
    )
}