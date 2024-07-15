"use client"
import Image from "next/image"
import { FormEvent } from "react"
import { authen } from "./server"
export default function Login() {
    async function handdleSubmit(event: FormEvent) {
        event.preventDefault()
        const form: any = document.querySelector("form")
        const formData = new FormData(form);
        console.log(await authen(formData))


    }
    return (
        <>
            <div className="fixed flex-col top-0 left-0 right-0 bottom-0 overflow-auto flex justify-start items-center bg-gray-900">
                <div className="mt-[100px] flex justify-center mb-5 flex-col items-center text-center">
                    <Image src="/logo/logo-green.webp" alt="Logo" width={100} height={100} />
                    <h1 className="text-xl md:text-3xl text-gray-500">
                        Back-Office : umedets
                    </h1>
                </div>
                <div className="w-[90%] md:w-[30%]  border-[1px] border-gray-700 p-5 rounded shadow-sm bg-gray-800 text-gray-500">
                    <form onSubmit={handdleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="">Username : </label>
                            <input className="p-2 w-full border-gray-500 border bg-gray-700 outline-none text-white" type="text" name="username" id="" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Password : </label>
                            <input className="p-2 w-full border-gray-500 border bg-gray-700 outline-none text-white" type="password" name="password" id="" />
                        </div>
                        <div>
                            <button type="submit" className="mt-3 p-3 w-full bg-[#111827] rounded-sm hover:bg-[#1e232e] border-[1px] border-gray-500">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}