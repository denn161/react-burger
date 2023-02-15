import  axios from 'axios'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as types from '../../services/actions/ingredients'
import { ingredients } from '../../constants'
 


describe('testing for the correct operation of the action getIngredients', () => {

    const mockGet = jest.spyOn(axios, 'get');

    it(' 3 dispatches are called correctly in the action',  () => {

        mockGet.mockResolvedValue({data:ingredients,success:true})
        

        const errorMessage = 'Что-то пошло не так'

        const expectedActions = [
            { type: types.GET_INGREDIENTS_REQUEST},
            { type: types.GET_INGREDIENTS_SUCCES, payload: ingredients },
            { type: types.GET_INGREDIENTS_ERROR, payload: errorMessage }
        ]

        const middleware = [thunk]

        const mockStore = configureStore(middleware)

        const store = mockStore({data:null})
        

        return store.dispatch(types.getIngredients()).then(()=>{
           expect(store.getActions()).toEqual(expectedActions)
        })



    })


})