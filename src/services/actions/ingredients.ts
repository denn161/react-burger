import axios, { AxiosError } from 'axios'
import { INGREDIENTS_URL } from '../../constants/api'
import { IIngredientElement } from '../../types/constructor'
import { TAppDispatch } from '../store/types'



export const GET_INGREDIENTS_SUCCES = 'GET_INGREDIENTS_SUCCES'
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR'


interface IGetIngredients {
    readonly type: typeof GET_INGREDIENTS_REQUEST
}

interface IGetIngredientsSuccess {
    readonly type: typeof GET_INGREDIENTS_SUCCES
    readonly payload: Array<IIngredientElement>
}

interface IGetIngredientsFailed {
    readonly type: typeof GET_INGREDIENTS_ERROR,
    readonly payload: string
}



const getIngredientsRequest = (): IGetIngredients => ({
    type: GET_INGREDIENTS_REQUEST
})

const getIngredientsSuccess = (data: Array<IIngredientElement>): IGetIngredientsSuccess => ({
    type: GET_INGREDIENTS_SUCCES,
    payload: data
})


const getIngredientsFailed = (message: string): IGetIngredientsFailed => ({
    type: GET_INGREDIENTS_ERROR,
    payload: message
})


interface IResolveResponse {
    data: Array<IIngredientElement>
    success: boolean

}

export const getIngredients = () => async (dispatch: TAppDispatch) => {

       dispatch({type:GET_INGREDIENTS_REQUEST})
 
    try {
     
        const {data} = await axios.get<IResolveResponse>(INGREDIENTS_URL)         
         
       if(data.success){
        dispatch(getIngredientsSuccess(data.data))
       }

    } catch (error) {
        const err = error as AxiosError
        console.log(err.message,'Ошибка в функции getIngredients')
        dispatch(getIngredientsFailed('Что-то пошло не так'))

    }
}


export type TIngredientsActions = IGetIngredients | IGetIngredientsSuccess | IGetIngredientsFailed