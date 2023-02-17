import { IIngredientElement } from "../../types/constructor"
import {
    DELETE_FILLING_CONSTRUCTOR,
    GET_INGREDIENTS_CONSTRUCTOR,
    POST_BUN_CONSTRUCTOR,
    POST_FILLING_CONSTRUCTOR,
    AllActionsConstructor,
    UPDATE_LIST_FILLINGS
} from "../actions/constructor"

import { CLEAR_ORDER_LIST } from "../actions/orderandIngredient"

export type EmptyObject = {
    [K in any]: never
}

export type TConstructorListState = {
    bun: EmptyObject | IIngredientElement
    fillings: Array<IIngredientElement>
    isFilling: boolean
    isBun: boolean
}

export const stateConstructor: TConstructorListState = {
    bun: {},
    fillings: [],
    isFilling: false,
    isBun: false
}

export const constructorReducer = (state = stateConstructor, action: AllActionsConstructor | any): TConstructorListState => {

    switch (action.type) {
        case GET_INGREDIENTS_CONSTRUCTOR:
            return { ...state }
        case POST_BUN_CONSTRUCTOR:
            return {
                ...state,
                bun: { ...state.bun, ...action.payload },
                isFilling: true,
                isBun: true
            }
        case POST_FILLING_CONSTRUCTOR:

            return {
                ...state,
                fillings: [...state.fillings, { ...action.payload }],
                isFilling: true
            }

        case UPDATE_LIST_FILLINGS:
            return {
                ...state,
                fillings: action.payload
            }
        case DELETE_FILLING_CONSTRUCTOR:
            return {
                ...state,
                fillings: state.fillings.filter((item) => item.key !== action.payload)
            }
        case CLEAR_ORDER_LIST:
            return stateConstructor;

        default:
            return state;
    }
}









