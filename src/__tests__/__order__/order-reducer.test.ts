import {
    stateIngredientAndOrder,
    ingredientAndOrderReducer,
    TIngredientAndOrderListState
} from "../../services/reducers/ordersReducer";
import * as types from '../../services/actions/orderandIngredient'
import { bunElement, orderElement } from "../../constants";


describe('Test orderReducer from redux', () => {
    expect(ingredientAndOrderReducer(undefined, {})).toEqual(stateIngredientAndOrder)

    it('should be correctly job type OPEN_MODAL_INGREDIENT', () => {

        const expected: TIngredientAndOrderListState = {
            ...stateIngredientAndOrder,
            ingredient: { ...stateIngredientAndOrder.ingredient, ...bunElement },
            isIngredientModal: true
        }

        const recived = ingredientAndOrderReducer(stateIngredientAndOrder,
            { type: types.OPEN_MODAL_INGREDIENT, payload: bunElement })

        expect(recived).toEqual(expected)

    })

    it('should be correctly job type POST_ORDER_REQUEST', () => {

        const expected: TIngredientAndOrderListState = {
            ...stateIngredientAndOrder,
            loading: true
        }

        const recived = ingredientAndOrderReducer(stateIngredientAndOrder,
            { type: types.POST_ORDER_REQUEST })

        expect(recived).toEqual(expected)

    })

    it('should be correctly job type POST_ORDER_SUCCESS', () => {

        const expected: TIngredientAndOrderListState = {
            ...stateIngredientAndOrder,
            order: orderElement,
            loading: false,
            isOrderModal: true,
            isIngredientModal: false
        }

        const recived = ingredientAndOrderReducer(stateIngredientAndOrder,
            { type: types.POST_ORDER_SUCCESS, payload: orderElement })

        expect(recived).toEqual(expected)

    })

    it('should be correctly job type  POST_ORDER_ERROR', () => {

        const errorMessage = 'Что-то пошло не так'

        const expected: TIngredientAndOrderListState = {
            ...stateIngredientAndOrder,
            loading: false,
            error: errorMessage
        }

        const recived = ingredientAndOrderReducer(stateIngredientAndOrder,
            { type: types.POST_ORDER_ERROR, payload: errorMessage })

        expect(recived).toEqual(expected)

    })

    it('should be correctly job type  CLOSE_MODAL', () => {

        const expected: TIngredientAndOrderListState = stateIngredientAndOrder

        const recived = ingredientAndOrderReducer(stateIngredientAndOrder,
            { type: types.CLOSE_MODAL })

        expect(recived).toEqual(expected)

    })
})