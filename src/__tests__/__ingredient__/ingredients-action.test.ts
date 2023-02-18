import thunk from "redux-thunk";
import axios from 'axios'
import configureStore from 'redux-mock-store'
import * as types from "../../services/actions/ingredients";
import { ingredients } from "../../constants";

describe('Test thunkAction ingredients', () => {

    const mockGet = jest.spyOn(axios, 'get')

    it('thunkAction should be successfily result', () => {

        mockGet.mockResolvedValue({ data: { data: ingredients, success: true } })

        const expectedActions = [
            { type: types.GET_INGREDIENTS_REQUEST },
            { type: types.GET_INGREDIENTS_SUCCES, payload: ingredients }
        ]

        const middleware = [thunk]

        const mockStore = configureStore(middleware) 

        const store = mockStore({data:null})

        return store.dispatch(types.getIngredients()).then(()=>{
              expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('thunkAction should be successfily result', () => {

        mockGet.mockRejectedValueOnce({ data: {success: false }})

         const errorMessage = 'Что-то пошло не так'

        const expectedActions = [
            {type:types.GET_INGREDIENTS_ERROR,payload:errorMessage}
        ]

        const middleware = [thunk]

        const mockStore = configureStore(middleware) 

        const store = mockStore({data:null})

        return store.dispatch(types.getIngredients()).catch(()=>{
          expect(store.getActions()).toEqual(expectedActions)
        })
    })

})