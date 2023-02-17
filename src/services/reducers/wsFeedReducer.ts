


import { TOrder, TwsData } from "../../types/orders";
import { getCookie } from "../../utils/cookies";
import {
       FEED_POST_ERROR,
       FEED_POST_REQUEST,
       FEED_POST_SUCCESS,
       FILD_CONNECTION_CLOSE,
       FILD_CONNECTION_CLOSED,
       FILD_CONNECTION_ERROR,
       FILD_CONNECTION_START,
       FILD_CONNECTION_SUCCESS,
       FILD_GET_MESSAGE
} from "../actions/wsActions/feedActions/constants";
import { TWsFeedActions } from "../actions/wsActions/feedActions/types";
import { EmptyObject } from './constructorReducer'


export interface IInitialState {
       isConnect: boolean
       isDisconnect: boolean
       loading: boolean
       error: string
       data: EmptyObject | TwsData
       order?: Array<TOrder>
       connectionError: string | undefined
       token?: string
}


export const initialState: IInitialState = {
       isConnect: false,
       isDisconnect: false,
       loading: false,
       error: '',
       data: {},
       order: [],
       connectionError: undefined,
       token: getCookie('accessToken') && getCookie('accessToken')
}


export const wsFildReducer = (state = initialState, action: TWsFeedActions | any): IInitialState => {
       switch (action.type) {
              case FILD_CONNECTION_START:
                     return {
                            ...state,
                            isConnect: true,
                            connectionError: '',
                            isDisconnect: false


                     }
              case FILD_GET_MESSAGE:
                     return {
                            ...state,
                            data: action.payload,
                            isConnect: false

                     }
              case FILD_CONNECTION_CLOSE:
                     return {
                            ...state,
                            isConnect: false,
                            isDisconnect: true
                     }
              case FILD_CONNECTION_CLOSED:
                     return {
                            ...state,
                            isConnect: false,
                            isDisconnect: true
                     }
              case FILD_CONNECTION_SUCCESS:
                     return {
                            ...state,
                            isConnect: true,
                     }
              case FILD_CONNECTION_ERROR:
                     return {
                            ...state,
                            isConnect: false,
                            connectionError: action.payload,
                            isDisconnect: true
                     }

              case FEED_POST_REQUEST:
                     return {
                            ...state,
                            loading: true
                     }
              case FEED_POST_SUCCESS:

                     return {
                            ...state,
                            loading: false,
                            order: action.payload
                     }

              case FEED_POST_ERROR:
                     return {
                            ...state,
                            loading: false,
                            error: action.payload
                     }


              default:
                     return state

       }




}

