import LayoutMain from "@/app/layout/layout-main";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faProductHunt} from "@fortawesome/free-brands-svg-icons";
import ProductClient from "@/app/product/product_client";
import {current_lang, get_lang} from "@/app/lang/conf_lang";


export default function Product() {
    const trans: any = get_lang();
    const currentLang :any= current_lang();
    return (
        <>
            <LayoutMain trans={get_lang()}>
                <div className="mt-[2em]">
                    <h1 className="font-bold text-3xl text-[#486178] flex flex-wrap items-center border-b-2 border-[#486178] pb-3">
                        <FontAwesomeIcon icon={faProductHunt}
                                         className=""
                                         style={{width: "30px", height: "30px", marginRight: "5px"}}
                        />
                        {trans.products.products}
                    </h1>
                    <ProductClient currentLang={currentLang} lang={trans}/>
                </div>
            </LayoutMain>
        </>
    );
}
