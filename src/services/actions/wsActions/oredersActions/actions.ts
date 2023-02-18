import axios, { AxiosError } from "axios"
import { TwsData } from "../../../../types/orders"
import { getCookie } from "../../../../utils/cookies"
import { TAppDispatch } from "../../../store/types"
import { ORDER_DETAILS } from "../feedActions/constants"
import { ORDER_CONNECTION_CLOSED, ORDER_CONNECTION_INIT, ORDER_POST_ERROR, ORDER_POST_REQUEST, ORDER_POST_SUCCESS } from "./constants"
import { IOrderPostError, IOrderPostRequest, IOrderPostSuccess, IWsClosedOrder, IWsOrderInit } from "./types"



export const wsInitOrderActions = (url: string): IWsOrderInit => ({
   type: ORDER_CONNECTION_INIT,
   payload: url
})



export const wsClosedOrderActions = (): IWsClosedOrder => ({
   type: ORDER_CONNECTION_CLOSED
})


const orderPostRequest = (): IOrderPostRequest => ({
   type: ORDER_POST_REQUEST
})


const orderPostSuccess = (order: any): IOrderPostSuccess => ({
   type: ORDER_POST_SUCCESS,
   payload: order
})


const orderPostError = (message: string): IOrderPostError => ({
   type: ORDER_POST_ERROR,
   payload: message
})


export const getOrderWtihNumber = (orderNumber?: string) => async (dispatch: TAppDispatch) => {

   dispatch(orderPostRequest())

   try {

      const headers = {
         "Content-Type": "application/json",
         Authorization: getCookie('accessToken')
            ? `Bearer ${getCookie('accessToken')}`
            : ''
      }

      const { data } = await axios.get<Omit<TwsData, 'total' | 'totalToday'>>(`${ORDER_DETAILS}/${orderNumber}`, { headers })


      if (data.success) {
         dispatch(orderPostSuccess(data?.orders))
      }

   } catch (error) {
      const err = error as AxiosError
      console.log(err.message)
      dispatch(orderPostError(err.message))

   }


}
