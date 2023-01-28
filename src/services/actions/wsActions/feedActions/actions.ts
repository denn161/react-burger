
import axios, { AxiosError } from "axios";
import { TwsData } from "../../../../types/orders";
import { getCookie } from "../../../../utils/cookies";
import { TAppDispatch } from "../../../store/types";
import { FEED_POST_ERROR, FEED_POST_REQUEST, FEED_POST_SUCCESS, FILD_CONNECTION_CLOSED, FILD_CONNECTION_INIT, ORDER_DETAILS } from "./constants";
import { IFeedPostError, IFeedPostRequest, IFeedPostSuccess, IWsClosedFeed, IWsInitFeed } from "./types";


export const wsInitFeddActions=(url:string):IWsInitFeed=>({
   type:FILD_CONNECTION_INIT,
   payload:url
})

export const wsClosedFeedActions = ():IWsClosedFeed=>({
   type:FILD_CONNECTION_CLOSED
})


export const feedPostRequest = ():IFeedPostRequest=>({
     type:FEED_POST_REQUEST
})

export const feedPostSuccess = (order:any):IFeedPostSuccess=>({
     type:FEED_POST_SUCCESS,
     payload:order
})

export const feedPostError =(message:string):IFeedPostError=>({
     type:FEED_POST_ERROR,
     payload:message
})


export const getOrderWtihNumber = (orderNumber?:string)=>async (dispatch:TAppDispatch)=>{
     
 dispatch(feedPostRequest())
   
   try {     

      const headers = {
            "Content-Type": "application/json",
            Authorization: getCookie('accessToken')
                  ? `Bearer ${getCookie('accessToken')}`
                  : ''
      }

     const { data } = await axios.get<Omit<TwsData,'total'|'totalToday'>>(`${ORDER_DETAILS}/${orderNumber}`, { headers })  
      

      if (data.success) {
            dispatch(feedPostSuccess(data?.orders))
      }

} catch (error) {
      const err = error as AxiosError
      console.log(err.message)
      dispatch(feedPostError(err.message))

}

 
}



