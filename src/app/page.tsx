import LayoutMain from "@/app/layout/layout-main";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {HomeItemsProduct, HomeSlide} from "@/app/home_client";
import {current_lang, get_lang} from "@/app/lang/conf_lang";

export default function Home() {
    const trans :any= get_lang();
    return (
        <>
            <LayoutMain trans={trans}>
                <HomeSlide/>

                <div className="mt-[3em]">
                    <h1 className="font-bold text-3xl text-green-800 flex flex-wrap items-center border-b-2 border-green-900 pb-3">
                        <FontAwesomeIcon icon={faCartShopping}
                                         className="text-green-900"
                                         style={{width: "30px", height: "30px", marginRight: "5px"}}
                        />
                        {trans.home.our_products}
                    </h1>
                    <HomeItemsProduct currentLang={current_lang()} lang={trans}/>
                </div>
            </LayoutMain>
        </>
    );
}
