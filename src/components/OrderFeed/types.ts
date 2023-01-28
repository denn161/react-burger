import { TIconProps } from "@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons/utils";
import { IIngredientElement } from "../../types/constructor";


type TImgElement={
    img: string;
    key:string
    
}

 export type TUniqType={
    key:string
    type:string
    img?:string
    count:number
    price?:number
    name?:string  
}

export type TOrderDetail={
    id: string;
    numberOrder: number;
    name: string;
    time: string;
    total: number;
    qtyIngridents: TUniqType[];
    status: string;
}

export type TOrderItemInProps={
    id:string;
    numberOrder: number;
    name: string;
    time: string;
    ingredientsImg:Array<TImgElement> 
    total: number;
    remainingElements:string,
    qtyIngridents:Array<TUniqType>,
    status:string

  
}

 export interface IOrderItemProps{
    item:TOrderItemInProps
} 

