export default function DashTop({ setToggleAside, nowToggle }: { setToggleAside: (data: boolean) => void, nowToggle: boolean }) {
    const handleToggle = () => {
        if (nowToggle === false) {
            setToggleAside(true);
        } else {
            setToggleAside(false);
        }
    }
    return (
        <>
            <div className="z-10 fixed top-0 w-[100%] bg-[#f9f9f9] border-b border-[#e4e4e7] shadow-sm py-3 px-5 flex items-center">
                <button onClick={handleToggle} className="border border-gray-300 px-3 py-3 rounded-sm w-[20px] h-[20px]"> {nowToggle === true ? <>
                    <div className="before:w-[10px] before:h-[10px] before:content-[''] before:border-2 before:border-t-0 before:border-l-0 before:origin-center rotate-[-45deg] before:border-gray-400 relative before:absolute flex justify-center items-center">
                    </div>
                </> : <>
                    <div className="before:w-[10px] before:h-[10px] before:content-[''] before:border-2 before:border-t-0 before:border-l-0 before:origin-center rotate-[135deg] before:border-gray-400 relative before:absolute flex justify-center items-center">
                    </div>
                </>} </button>
            </div>
        </>
    )
}