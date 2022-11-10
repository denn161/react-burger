import {
    CLOSE_MODAL,
    OPEN_MODAL_INGREDIENT,
    POST_ORDER_ERROR,
    POST_ORDER_REQUEST,
    POST_ORDER_SUCCESS
} from "../actions/orderandIngredient"
import { SET_LOGIN_CHECKED } from "../actions/user"


const stateIngredientAndOrder = {
    ingredient: {},
    order: {},
    loading: false,
    isLogin: false,
    isIngredientModal: false,
    isOrderModal: false

}

export const ingredientAndOrderReducer = (state = stateIngredientAndOrder, { type, payload }) => {
    switch (type) {
        case OPEN_MODAL_INGREDIENT:
            return {
                ...state,
                ingredient: { ...state.ingredient, ...payload },
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
                order: payload,
                loading: false,
                isOrderModal: true,
                isIngredientModal: false
            }

        case POST_ORDER_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case SET_LOGIN_CHECKED:
            return {
                ...state,
                isLogin: true
            }

        case CLOSE_MODAL:
            return stateIngredientAndOrder;


        default:
            return state;
    }
}