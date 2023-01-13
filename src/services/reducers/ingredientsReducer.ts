import { IIngredientElement } from "../../types/constructor"
import {
    GET_INGREDIENTS_ERROR,
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCES,
    TIngredientsActions,
} from "../actions/ingredients"



type TIngredientsListState = {
    ingredients: Array<IIngredientElement>
    loading: boolean
    error: string
}

const stateIngridients: TIngredientsListState = {
    ingredients: [],
    loading: false,
    error: ''
}

export const ingredientsReducer = (state = stateIngridients, action: TIngredientsActions) => {

    switch (action.type) {
        case GET_INGREDIENTS_REQUEST:
            return { ...state, loading: true }

        case GET_INGREDIENTS_SUCCES:
            return {
                ...state,
                loading: false,
                ingredients: [...action.payload]
            }
        case GET_INGREDIENTS_ERROR:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}