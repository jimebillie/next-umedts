import React from "react";
import Image from "next/image";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faPhoneVolume, faQuoteLeft, faQuoteRight} from "@fortawesome/free-solid-svg-icons";
import {faLine, faWeixin} from "@fortawesome/free-brands-svg-icons";


interface IFooter {
    trans: any
}
export default function Footer({trans}: IFooter) {
    return (
        <>
            <div className="flex justify-center py-5 bg-[#ebffdc] text-[#347207] border border-[#ddf1d0]">
                <div className="w-[90%] md:w-[80%]">
                    {
                        /**
                         * -------------------------------------------
                         * # Grid wrap
                         * -------------------------------------------
                         * @desc -
                         *
                         */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            /**
                             * -------------------------------------------
                             * # Column 1
                             * -------------------------------------------
                             * @desc -
                             *
                             */}
                        <div className="">
                            <div className="relative top-[-15px] left-[0px]">
                                <Image src={"/logo/logo-green.webp"} alt={"logo"} width={70} height={70}
                                       priority={true}/>
                            </div>
                            <div>
                                <div
                                    className="text-2xl p-3 rounded-2xl text-[#518f24] bg-[#c7ecac] border border-[#badca2]">
                                    {trans.footer.name_company}
                                    <div className="mt-[0.5em] flex flex-wrap text-sm text-[#5e9733]">
                                        {trans.footer.sub_name_company}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            /**
                             * -------------------------------------------
                             * # Column 2
                             * -------------------------------------------
                             * @desc -
                             *
                             */}
                        <div className="">
                            <h3 className="text-3xl underline underline-offset-[10px]">
                                {trans.footer.service}
                            </h3>
                            <div className="mt-[1.3em]">
                                <div className="my-[1em] flex flex-wrap">
                                    - 1 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
                                    beatae.
                                </div>
                                <div className="my-[1em] flex flex-wrap">
                                    - 2 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
                                    ut?
                                </div>
                                <div className="my-[1em] flex flex-wrap">
                                    - 3 : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,
                                    quas.
                                </div>
                            </div>
                        </div>
                        {
                            /**
                             * -------------------------------------------
                             * # Column 3
                             * -------------------------------------------
                             * @desc -
                             *
                             */}
                        <div className="">
                            <h3 className="text-3xl underline underline-offset-[10px]">
                                {trans.contact.contact}
                            </h3>
                            <p className="mt-[1.3em]">
                                {trans.contact.address}
                            </p>
                            <div className="mt-[1.3em]">
                                <div className="my-[3px] flex flex-wrap">
                                    <FontAwesomeIcon icon={faPhoneVolume} style={{width: "20px", height: "20px"}}/>
                                    <a className="ml-2" href="tel:021143652">02-114-3652</a>
                                </div>
                                <div className="my-[3px] flex flex-wrap">
                                    <FontAwesomeIcon icon={faPhoneVolume} style={{width: "20px", height: "20px"}}/>
                                    <a className="ml-2" href="tel:0989569289">098-956-9289</a>
                                </div>
                                <div className="my-[3px] flex flex-wrap">
                                    <FontAwesomeIcon icon={faEnvelope} style={{width: "20px", height: "20px"}}/>
                                    <a className="ml-2" href="mailto:infoumedical@gmail.com">infoumedical@gmail.com</a>
                                </div>
                                <div className="my-[3px] flex flex-wrap">
                                    <FontAwesomeIcon icon={faLine} style={{width: "20px", height: "20px"}}/>
                                    <div className="ml-2">
                                        @udms2022
                                    </div>
                                </div>
                                <div className="my-[3px] flex flex-wrap">
                                    <FontAwesomeIcon icon={faWeixin} style={{width: "20px", height: "20px"}}/>
                                    <div className="ml-2">
                                        +66989569289
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}