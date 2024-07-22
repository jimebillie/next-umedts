"use client"

import { FormEvent, HTMLAttributes, useEffect, useState } from "react"
import {saveSlide } from "./pageServer"
import Image from "next/image"
import { get } from "http"

export default function DashboardClient() {
    const [dataSlide, setDataSlide] = useState<any>({})
    const handdleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const form: any = document.getElementById("addSlide")
        let formData = new FormData(form);
        const _save = await saveSlide(formData)
        const _btn = document.querySelector("button[type='submit']") as HTMLElement
        _btn.setAttribute("disabled", "true")
        if (_save.status === 1) {
            alert("บันทึกเรียบร้อย")
            const ipt = document.querySelector("input[name='_file']") as HTMLInputElement
            ipt.value = ""
            _btn.removeAttribute("disabled")
            fetchSlideData()
        } else {
            alert("Something went wrong!")
            _btn.removeAttribute("disabled")
        }
    }
    const handdleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile: any = e.target?.files ?? null;
        if (selectedFile !== null) {
            if (selectedFile[0].type.split("/")[0] !== "image") {
                alert('โปรดใช้ไฟล์ภาพ')
                e.target.value = ""
            }
        }
    }
    const fetchSlideData = async () => {
        try {
            const _api = await fetch("/api/get-slide", { method: "get"})
            const _res = await _api.json()
            setDataSlide(_res)
        } catch (err: any) {
            console.log("can't call api")
        }
    };
    useEffect(() => {
        fetchSlideData();
    }, [])
    return (
        <>
            <h1 className="text-2xl mb-3">
                จัดการ Slide หน้าแรก
            </h1>

            <div >
                <div>
                    เพิ่ม slide ใหม่
                </div>
                <form id="addSlide" onSubmit={handdleSubmit}>
                    <input type="file" name="_file" required onChange={handdleFile} />
                    <button className=" mt-3 md:mt-0 ml-0 md:ml-2 border-2 border-green-900 px-3 bg-green-800 rounded-sm text-white hover:bg-green-700" type="submit"> บันทึก</button>
                </form>

                {
                    
                    dataSlide?.status === 1 ? dataSlide.msg.map((v: any, i: any) => (
                        <div key={i}>
                            <Image src={`/api/get-flie-upload/${v.name}`} alt={`slide-${i}`} width={50} height={50} priority />
                        </div>
                    )) : null
                }


            </div>
        </>
    )
}