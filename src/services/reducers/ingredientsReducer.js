import { GET_INGREDIENTS_ERROR, GET_INGREDIENTS_REQUEST,GET_INGREDIENTS_SUCCES, } from "../actions/ingredients"



const stateIngridients = {
    ingredients: [],
    loading: false,
    error: ''
}

export const ingredientsReducer = (state = stateIngridients, { type, payload }) => {

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