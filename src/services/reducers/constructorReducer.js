import { DELETE_FILLING_CONSTRUCTOR, GET_INGREDIENTS_CONSTRUCTOR, POST_BUN_CONSTRUCTOR, POST_FILLING_CONSTRUCTOR, UPDATE_LIST_FILLINGS } from "../actions/constructor"
import { CLEAR_ORDER_LIST } from "../actions/orderandIngredient"




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









