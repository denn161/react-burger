import * as types from '../../services/actions/ingredients'
import { stateIngridients,ingredientsReducer } from "../../services/reducers/ingredientsReducer"; 
import {ingredients} from '../../constants'



describe('Test ingredients Reducer from Redux',()=>{

 expect(ingredientsReducer(undefined,{})).toEqual(stateIngridients)

 it('should be action GET_INGREDIENTS_REQUEST',()=>{
      
    const expected = {
         ...stateIngridients,
         loading:true
    }

    const recived = ingredientsReducer(stateIngridients,{type:types.GET_INGREDIENTS_REQUEST})

    expect(recived).toEqual(expected)


 })

 it('should be action GET_INGREDIENTS_SUCCESS',()=>{
      
    const expected = {
         ...stateIngridients,
         loading: false,
         ingredients: [...ingredients]
    }

    const recived = ingredientsReducer(stateIngridients,
        {type:types.GET_INGREDIENTS_SUCCES,payload:ingredients})

    expect(recived).toEqual(expected)

 })

 it('should be action GET_INGREDIENTS_FAILED',()=>{

     const errorMessage = 'Что-то пошло не так'
      
    const expected = {
         ...stateIngridients,
           loading: false,
          error: errorMessage
    }

    const recived = ingredientsReducer(stateIngridients,
        {type:types.GET_INGREDIENTS_ERROR,payload:errorMessage})

    expect(recived).toEqual(expected)

 }) 

})


