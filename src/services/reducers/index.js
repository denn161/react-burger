import { combineReducers } from "redux";
import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCES,
    GET_INGREDIENTS_ERROR,
    POST_ORDER_REQUEST,
    POST_ORDER_SUCCESS,
    POST_ORDER_ERROR,
    GET_INGREDIENTS_CONSTRUCTOR,
    POST_BUN_CONSTRUCTOR,
    POST_FILLING_CONSTRUCTOR,
    DELETE_FILLING_CONSTRUCTOR,
    OPEN_MODAL_INGREDIENT,
    CLOSE_MODAL,
    UPDATE_LIST_FILLINGS,
    CLEAR_ORDER_LIST
} from "../actions";

const stateIngridients = {
    ingredients: [],
    loading: false,
    error: ''
}

export const ingredientsReduce = (state = stateIngridients, { type, payload }) => {

    switch (type) {
        case GET_INGREDIENTS_REQUEST:
            return { ...state, loading: true }

        case GET_INGREDIENTS_SUCCES:
            return {
                ...state,
                loading: false,
                ingredients: [...payload]


            }
        case GET_INGREDIENTS_ERROR:
            return { ...state, loading: false, error: payload }

        default:
            return state
    }
}
const stateConstructor = {
    bun: {},
    fillings: [],
    isFilling: false,
    isBun: false
}

export const constructorReducer = (state = stateConstructor, { type, payload }) => {

    switch (type) {
        case GET_INGREDIENTS_CONSTRUCTOR:
            return { ...state }
        case POST_BUN_CONSTRUCTOR:
            return {
                ...state,
                bun: { ...state.bun, ...payload },
                isFilling: true,
                isBun: true
            }
        case POST_FILLING_CONSTRUCTOR:
            return {
                ...state,
                fillings: [...state.fillings, { ...payload }],
                isFilling: true
            }

        case UPDATE_LIST_FILLINGS:
            return {
                ...state,
                fillings: payload
            }
        case DELETE_FILLING_CONSTRUCTOR:
            return {
                ...state,
                fillings: state.fillings.filter((item) => item.key !== payload)
            }
        case CLEAR_ORDER_LIST:
            return stateConstructor;

        default:
            return state;
    }
}

const stateIngredientAndOrder = {
    ingredient: {},
    order: {},
    loading: false,
    isIngredientModal: false,
    isOrderModal: false

}


export const ingredientAnsOrderReducer = (state = stateIngredientAndOrder, { type, payload }) => {
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

        case CLOSE_MODAL:
            return stateIngredientAndOrder;


        default:
            return state;
    }
}


export const rootReducer = combineReducers({
    ingredients: ingredientsReduce,
    items: constructorReducer,
    ingredient: ingredientAnsOrderReducer,

})