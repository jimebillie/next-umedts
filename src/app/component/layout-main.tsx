import React from "react";
import Navbar from "@/app/component/navbar";
import Footer from "@/app/component/footer";

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
            <div className="flex justify-center min-h-[90vh] bg-zinc-200">
                <div className="w-[90%] md:w-[80%] p-5 bg-white">
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
        </>
    )
}