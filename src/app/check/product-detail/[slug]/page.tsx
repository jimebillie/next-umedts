import { get_lang } from "@/app/lang/conf_lang";
import LayoutMain from "@/app/layout/layout-main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image"
import { redirect } from 'next/navigation'

export default function Page({ params }: { params: { slug: string } }) {
    const trans: any = get_lang();
    if(params.slug !== "669ceee01e9178a6354d54a3"){
        redirect(`/`)
    }
    return (
        <>
            <LayoutMain trans={trans}>
                <div className="mt-[2em]">
                    <div className="border dorder-zinc-300 py-5 px-5 md:px-[70px]">
                        <div className="flex justify-center mb-3">
                            <Image src="/logo/logo-with-detail.webp" alt="" width={300} height={300} priority={true} draggable="false" />
                        </div>

                        <div>
                            <div className="flex flex-wrap mb-3">
                                <div className="font-bold mr-2">
                                    Company name :
                                </div>
                                <div className="text-zinc-700">
                                    โซอาร์คลินิก
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-3">
                                <div className="font-bold mr-2">
                                    Branch :
                                </div>
                                <div className="text-zinc-700">
                                    อุดมสูข
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-3">
                                <div className="font-bold mr-2">
                                    Product Name :
                                </div>
                                <div className="text-zinc-700">
                                    UFU005 - Micro Focused Ultrasound
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-3">
                                <div className="font-bold mr-2">
                                    Serial number :
                                </div>
                                <div className="text-zinc-700">
                                    UN16JUNE24-BKK-0010
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-3">
                                <div className="font-bold mr-2">
                                    Certificate numbe :
                                </div>
                                <div className="text-zinc-700">
                                    1122334455
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-[50px] mb-3">
                            <span className="font-bold">Approve Date : </span> <span className="text-zinc-700">2004-07-16</span>
                        </div>
                        <div className="flex justify-center">
                            <div id="wrap-prd-img" className="relative overflow-hidden w-[100%] md:w-[300px] border border-zinc-300">
                                <img className="w-[100%]" src="/check-product/i1.png" alt="" draggable="false" />
                                <div className="absolute inset-0 pointer-events-none">
                                    <Watermark />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </LayoutMain>
        </>
    )
}

const Watermark = () => {
    const watermarkSrc = "/check-product/umedts-sure.webp";
    const positions = [
        { top: '10%', left: '-10%' },
        { top: '10%', left: '50%' },
        { top: '10%', left: '90%' },
        { top: '50%', left: '10%' },
        { top: '50%', left: '50%' },
        { top: '50%', left: '90%' },
        { top: '90%', left: '-5%' },
        { top: '90%', left: '50%' },
        { top: '90%', left: '90%' },
        { top: '30%', left: '30%' }
    ];

    const watermarks = positions.map((pos, index) => (
        <img
            key={index}
            src={watermarkSrc}
            alt="Watermark"
            className="absolute opacity-30"
            style={{
                width: '70px',
                ...pos,
                transform: `rotate(0deg)` // Set all images to horizontal
            }}
            draggable="false"
        />
    ));

    return <>{watermarks}</>;
};