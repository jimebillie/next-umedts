import LayoutMain from "@/app/layout/layout-main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { get_lang } from "@/app/lang/conf_lang";

export default function AboutUs() {
    const trans: any = get_lang();
    return (
        <>
            <LayoutMain trans={trans}>
                <div className="mt-[2em]">
                    <h1 className="font-bold text-3xl text-[#486178] flex flex-wrap items-center border-b-2 border-[#486178] pb-3">
                        <FontAwesomeIcon icon={faPhoneVolume}
                            className=""
                            style={{ width: "30px", height: "30px", marginRight: "5px" }}
                        />
                        {trans.contact.contact}
                    </h1>
                </div>
            </LayoutMain>
        </>
    );
}
