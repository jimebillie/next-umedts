import Item_Product from "@/app/component/item_product";
import Basket from "@/app/component/basket";

interface IComponentItemProduct {
    nameProduct: string,
    detailProduct: string,
    lang: any
}

export function ComponentItemProduct({nameProduct, detailProduct, lang}: IComponentItemProduct) {
    return (
        <Item_Product nameProduct={nameProduct} detailProduct={detailProduct} lang={lang}/>
    )
}
interface IComponentBasket{
    trans:any
}
export function ComponentBasket({trans}:IComponentBasket){
    return (
        <Basket trans={trans}/>
    )
}