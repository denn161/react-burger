import { stateConstructor, constructorReducer, TConstructorListState } from "../../services/reducers/constructorReducer";

import * as types from '../../services/actions/constructor'
import { IIngredientElement } from "../../types/constructor";
import { bunElement, fillingId, fillingsElemnts } from "../../constants";




describe('Test constructor Reducer from Redux', () => {
    expect(constructorReducer(undefined, {})).toEqual(stateConstructor)

    test('should be correctly job type GET_INGREDIENTS_CONSTRUCTOR', () => {

        const expected: TConstructorListState = {
            ...stateConstructor
        }

        const recived = constructorReducer(stateConstructor, { type: types.GET_INGREDIENTS_CONSTRUCTOR })
        expect(recived).toEqual(expected)

    })

    test('should be correctly job type POST_BUN_CONSTRUCTOR', () => {

        const expected: TConstructorListState = {
            ...stateConstructor,
            bun: { ...stateConstructor.bun, ...bunElement },
            isFilling: true,
            isBun: true
        }

        const recived = constructorReducer(stateConstructor,
            { type: types.POST_BUN_CONSTRUCTOR, payload: bunElement })

        expect(recived).toEqual(expected)

    })

    test('should be correctly job type POST_FILLING_CONSTRUCTOR', () => {

        const expected: TConstructorListState = {
            ...stateConstructor,
            fillings: [...stateConstructor.fillings, { ...fillingsElemnts[0] }],
            isFilling: true
        }

        const recived = constructorReducer(stateConstructor,
            { type: types.POST_FILLING_CONSTRUCTOR, payload: fillingsElemnts[0] })

        expect(recived).toEqual(expected)

    })

    test('should be correctly job type UPDATE_LIST_FILLINGS', () => {

        const expected: TConstructorListState = {

            ...stateConstructor,
            fillings: fillingsElemnts
        }

        const recived = constructorReducer(stateConstructor,
            { type: types.UPDATE_LIST_FILLINGS, payload: fillingsElemnts })

        expect(recived).toEqual(expected)

    })

    test('should be correctly job type DELETE_FILLING_CONSTRUCTOR', () => {

        const expected: TConstructorListState = {
            ...stateConstructor,

            fillings: stateConstructor.fillings.filter((item) => item.key !== fillingId)
        }

        const recived = constructorReducer(stateConstructor,
            { type: types.DELETE_FILLING_CONSTRUCTOR, payload: fillingId })

        expect(recived).toEqual(expected)

    })

    test('should be correctly job type CLEAR_ORDER_LIST', () => {

        const expected: TConstructorListState = stateConstructor

        const recived = constructorReducer(stateConstructor,
            { type: types.CLEAR_ORDER_LIST })

        expect(recived).toEqual(expected)

    })


})
