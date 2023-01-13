import { IIngredientElement } from "./constructor";

export type TOwner = {
    createdAt: string
    email: string
    name: string
    updatedAt: string

}

export interface IOrder {
    createdAt: string
    ingredients: Array<IIngredientElement>
    name: string
    number: number
    owner: TOwner
    price: number
    status: string
    updatedAt: string
    _id: string
}

export interface IOrderResponse {
    success: boolean
    order: IOrder
    name: string

}

 export type TOrder = {
    _id: string
    ingredients: string[]
    status: string
    name: string
    createdAt: string
    updatedAt: string
    number: number
}

export type TwsData = {
    success: boolean
    orders: Array<TOrder>
    total: number
    totalToday: number

};

export type TOrderSuccess = {
    success: true
    name: string
    order: {
        ingredients: Array<IIngredientElement>
        owner:TOwner
        _id: string
        status: string
        createdAt: string
        updatedAt: string
        number: number
        price: number
    };
};