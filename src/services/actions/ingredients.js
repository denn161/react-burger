import {  INGREDIENTS_URL} from '../../constants/api'
import { getData } from '../../utils/data'


export const GET_INGREDIENTS_SUCCES = 'GET_INGREDIENTS_SUCCES'
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR'



export const getIngredients = () => async dispatch => {

    dispatch({ type: GET_INGREDIENTS_REQUEST })
    
    try {      

        const { data } = await getData(INGREDIENTS_URL,{method:'GET'})
     
        dispatch({ type: GET_INGREDIENTS_SUCCES, payload: data })

    } catch (error) {
        console.log(error.message)
        dispatch({ type: GET_INGREDIENTS_ERROR, error: error.message })

    }

}