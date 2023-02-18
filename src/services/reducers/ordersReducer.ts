import { IIngredientElement } from "../../types/constructor"
import { IOrder } from "../../types/orders"
import {
    CLOSE_MODAL,
    OPEN_MODAL_INGREDIENT,
    POST_ORDER_ERROR,
    POST_ORDER_REQUEST,
    POST_ORDER_SUCCESS,
    TOrderAndIngredientActions
} from "../actions/orderandIngredient"





export type TIngredientAndOrderListState = {
    ingredient: Partial<IIngredientElement>
    order: Partial<IOrder>
    loading: boolean
    isLogin: boolean
    isIngredientModal: boolean
    isOrderModal: boolean
    error: string
}


export const stateIngredientAndOrder: TIngredientAndOrderListState = {
    ingredient: {},
    order: {},
    loading: false,
    isLogin: false,
    isIngredientModal: false,
    isOrderModal: false,
    error: ''

}

export const ingredientAndOrderReducer = (
    state = stateIngredientAndOrder,
    action: TOrderAndIngredientActions | any): TIngredientAndOrderListState => {
    switch (action.type) {
        case OPEN_MODAL_INGREDIENT:
            return {
                ...state,
                ingredient: { ...state.ingredient, ...action.payload },
                isIngredientModal: true

            }

        case POST_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_ORDER_SUCCESS:
            return {
                ...state,
                order: action.payload,
                loading: false,
                isOrderModal: true,
                isIngredientModal: false
            }

        case POST_ORDER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLOSE_MODAL:
            return stateIngredientAndOrder;


        default:
            return state;
    }
}