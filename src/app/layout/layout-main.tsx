"use client"
import React from "react";
import Navbar from "@/app/layout/navbar";
import Footer from "@/app/layout/footer";
import Basket from "@/app/component/basket";

export default function LayoutMain({children}: { children: React.ReactNode }) {
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
            <Navbar/>
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
            <Footer/>
            <Basket/>
        </>
    )
}