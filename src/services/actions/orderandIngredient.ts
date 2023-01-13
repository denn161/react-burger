import axios, { AxiosError } from "axios"
import { ORDERS_URL } from "../../constants/api"
import { getCookie } from "../../utils/cookies"
import { IIngredientElement } from "../../types/constructor"
import { TAppDispatch } from "../store/types"
import { IOrder, IOrderResponse } from "../../types/orders"


export const POST_ORDER_REQUEST: 'POST_ORDER_REQUEST' = 'POST_ORDER_REQUEST'
export const POST_ORDER_SUCCESS: 'POST_ORDER_SUCCESS' = 'POST_ORDER_SUCCESS'
export const POST_ORDER_ERROR: 'POST_ORDER_ERROR' = 'POST_ORDER_ERROR'
export const CLEAR_ORDER_NUMBER: 'CLEAR_ORDER_NUMBER' = 'CLEAR_ORDER_NUMBER'
export const OPEN_MODAL_INGREDIENT: 'OPEN_MODAL_INGREDIENT' = 'OPEN_MODAL_INGREDIENT';
export const CLOSE_MODAL: 'CLOSE_MODAL' = 'CLOSE_MODAL';
export const OPEN_MODAL_ORDER: 'OPEN_MODAL_ORDER' = 'OPEN_MODAL_ORDER';
export const CLEAR_ORDER_LIST: 'CLEAR_ORDER_LIST' = 'CLEAR_ORDER_LIST';


  

export interface IPostOrderRequest {
      readonly type: typeof POST_ORDER_REQUEST
}

export interface IPostOrderSuccess {
      readonly type: typeof POST_ORDER_SUCCESS
      readonly payload: IOrder
}

export interface IPostOrderError {
      readonly type: typeof POST_ORDER_ERROR
      readonly payload: string
}

export interface IOpenModalIngredient {
      readonly type: typeof OPEN_MODAL_INGREDIENT
      readonly payload: IIngredientElement
}

export interface ICloseModal {
      readonly type: typeof CLOSE_MODAL
}

export interface IClearOrderList {
      readonly type: typeof CLEAR_ORDER_LIST
}


export type TOrderAndIngredientActions = IPostOrderRequest
      | IPostOrderSuccess | IPostOrderError |
      IOpenModalIngredient | ICloseModal

export const postOrderRequest = (): IPostOrderRequest => ({
      type: POST_ORDER_REQUEST
})

export const postOrderSuccess = (order: IOrder): IPostOrderSuccess => ({
      type: POST_ORDER_SUCCESS,
      payload: order

})

export const postOrderError = (message: string): IPostOrderError => ({
      type: POST_ORDER_ERROR,
      payload: message
})


export const closeModalAction = (): ICloseModal => ({
      type: CLOSE_MODAL
})

export const clearOrderList = (): IClearOrderList => ({
      type: CLEAR_ORDER_LIST
})

export const getOrderNumber = (burgersIds: Array<string>) => async (dispatch:TAppDispatch) => {

      dispatch(postOrderRequest())

      try {

            const body = { ingredients: [...burgersIds] }

            const headers = {
                  "Content-Type": "application/json",
                  Authorization: getCookie('accessToken')
                        ? `Bearer ${getCookie('accessToken')}`
                        : ''
            }

            const { data } = await axios.post<IOrderResponse>(ORDERS_URL, body, { headers })

            if (data.success) {
                  dispatch(postOrderSuccess(data.order))
            }

      } catch (error) {
            const err = error as AxiosError
            console.log(err.message)
            dispatch(postOrderError(err.message))

      }

}

//GET Ingridient of Modal
export const openModalIngredient = (element: IIngredientElement): IOpenModalIngredient => ({
      type: OPEN_MODAL_INGREDIENT,
      payload: element
})


export const closeModal = () => (dispatch:TAppDispatch): void => {
      dispatch(closeModalAction())
      dispatch(clearOrderList())
}