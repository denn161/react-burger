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
    CLEAR_ORDER_NUMBER,
    CLOSE_MODAL
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

}

export const constructorReducer = (state = stateConstructor, { type, payload }) => {

    switch (type) {
        case GET_INGREDIENTS_CONSTRUCTOR:
            return { ...state }
        case POST_BUN_CONSTRUCTOR:
            return {
                ...state,
                bun: { ...state.bun, ...payload }
            }
        case POST_FILLING_CONSTRUCTOR:
            return {
                ...state,
                fillings: [...state.fillings, { ...payload }]
            }
        case DELETE_FILLING_CONSTRUCTOR:
            return {
                ...state,
                fillings: state.fillings.filter((item) => item._id !== payload)
            }

        default:
            return state;
    }
}

const stateIngredient = {
    ingredient: {},
    isOpenModal: false,
    isIngredient: false
}


export const ingredientReducer = (state = stateIngredient, { type, payload }) => {
    switch (type) {
        case OPEN_MODAL_INGREDIENT:
            return {
                ...state,
                ingredient: { ...state.ingredient, ...payload },
                isOpenModal: true,
                isIngredient: true
            }

        case CLOSE_MODAL:
            return stateIngredient;


        default:
            return state;
    }
}


const stateOrder = {
    order: {},
    loading: false,
    error: '',
    isOrderModal: false
}

const orderReducer = (state = stateOrder, { type, payload }) => {

    switch (type) {
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
                isOrderModal: true
            }
        case POST_ORDER_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }

        case CLEAR_ORDER_NUMBER:
            return stateOrder;

        default:
            return state
    }

}


export const rootReducer = combineReducers({
    ingredients: ingredientsReduce,
    items: constructorReducer,
    ingredient: ingredientReducer,
    orders: orderReducer
})