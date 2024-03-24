import LayoutMain from "@/app/component/layout-main";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <>
            <LayoutMain>
                <div className="bg-zinc-300 border border-zinc-400 text-zinc-500 text-3xl flex flex-col items-center justify-center w-[100%] h-[500px]">
                    พื้นที่รูปสไลด์
                    <div className="text-sm mt-3">
                        ปัจจุบัน (1,000px, 600px)
                    </div>
                </div>

                <div className="mt-[3em]">
                    <h1 className="font-bold text-3xl text-zinc-700 flex flex-wrap items-center">
                        <FontAwesomeIcon icon={faCartShopping} style={{width:"30px",height:"30px", marginRight:"5px"}}/>สินค้าของเรา
                    </h1>
                    <div className="mt-[1.3em] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="w-[100%] h-[300px] bg-zinc-300 flex flex-col items-center justify-center border border-zinc-400 text-zinc-500">(250px, 300px)</div>
                        <div className="w-[100%] h-[300px] bg-zinc-300 flex flex-col items-center justify-center border border-zinc-400 text-zinc-500">(250px, 300px)</div>
                        <div className="w-[100%] h-[300px] bg-zinc-300 flex flex-col items-center justify-center border border-zinc-400 text-zinc-500">(250px, 300px)</div>
                        <div className="w-[100%] h-[300px] bg-zinc-300 flex flex-col items-center justify-center border border-zinc-400 text-zinc-500">(250px, 300px)</div>
                        <div className="w-[100%] h-[300px] bg-zinc-300 flex flex-col items-center justify-center border border-zinc-400 text-zinc-500">(250px, 300px)</div>
                        <div className="w-[100%] h-[300px] bg-zinc-300 flex flex-col items-center justify-center border border-zinc-400 text-zinc-500">(250px, 300px)</div>
                        <div className="w-[100%] h-[300px] bg-zinc-300 flex flex-col items-center justify-center border border-zinc-400 text-zinc-500">(250px, 300px)</div>
                        <div className="w-[100%] h-[300px] bg-zinc-300 flex flex-col items-center justify-center border border-zinc-400 text-zinc-500">(250px, 300px)</div>
                    </div>
                </div>
            </LayoutMain>
        </>
    );
}
