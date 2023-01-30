
import { IIngredientElement } from "../../types/constructor";



// Ингредиенты конструктора

export const GET_INGREDIENTS_CONSTRUCTOR: 'GET_INGREDIENTS_CONSTRUCTOR' = 'GET_INGREDIENTS_CONSTRUCTOR';
export const POST_BUN_CONSTRUCTOR: 'POST_BUN_CONSTRUCTOR' = 'POST_BUN_CONSTRUCTOR';
export const POST_FILLING_CONSTRUCTOR: 'POST_FILLING_CONSTRUCTOR' = 'POST_FILLING_CONSTRUCTOR';
export const DELETE_FILLING_CONSTRUCTOR: 'DELETE_FILLING_CONSTRUCTOR' = 'DELETE_FILLING_CONSTRUCTOR';
export const CLEAR_ORDER_LIST: 'CLEAR_ORDER_LIST' = 'CLEAR_ORDER_LIST';
export const UPDATE_LIST_FILLINGS: 'UPDATE_LIST_FILLINGS' = 'UPDATE_LIST_FILLINGS';



export interface IGetElementsConstructor {
    readonly type: typeof GET_INGREDIENTS_CONSTRUCTOR
}


export interface IAddBuByConstructor {
    readonly type: typeof POST_BUN_CONSTRUCTOR,
    readonly payload: IIngredientElement
}


export interface IAddFillingConstructor {
    readonly type: typeof POST_FILLING_CONSTRUCTOR,
    readonly payload: IIngredientElement
}

export interface IDeleteFillinigOfConstructor {
    readonly type: typeof DELETE_FILLING_CONSTRUCTOR,
    readonly payload: string
}

interface IUpdateFillingsList {
    readonly type: typeof UPDATE_LIST_FILLINGS
    readonly payload: Array<IIngredientElement>

}

export interface IClearOrderList {
    readonly type: typeof CLEAR_ORDER_LIST
}


export type TConstructorActions = IGetElementsConstructor
    | IAddBuByConstructor
    | IAddFillingConstructor
    | IDeleteFillinigOfConstructor | IUpdateFillingsList | IClearOrderList



export const updateFillingsList = (newArr: Array<IIngredientElement>): IUpdateFillingsList => ({
    type: UPDATE_LIST_FILLINGS,
    payload: newArr
})

export const getElementsByConstructor = (): IGetElementsConstructor => ({
    type: GET_INGREDIENTS_CONSTRUCTOR
})

export const addBunByConstructor = (bun: IIngredientElement): IAddBuByConstructor => ({
    type: POST_BUN_CONSTRUCTOR,
    payload: bun
})

export const addFillingConstructor = (item: IIngredientElement): IAddFillingConstructor => ({
    type: POST_FILLING_CONSTRUCTOR,
    payload: item
})

export const deleteFillingOfConstructor = (itemId: string): IDeleteFillinigOfConstructor => ({
    type: DELETE_FILLING_CONSTRUCTOR,
    payload: itemId
})


export const clearOrderList = (): IClearOrderList => ({
    type: CLEAR_ORDER_LIST
})


export type AllActionsConstructor = ReturnType<typeof updateFillingsList>
    | ReturnType<typeof getElementsByConstructor> | ReturnType<typeof addBunByConstructor>
    | ReturnType<typeof addFillingConstructor> | ReturnType<typeof deleteFillingOfConstructor>
    | ReturnType<typeof clearOrderList>








