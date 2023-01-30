import { TOrder, TwsData } from "../../types/orders"
import { getCookie } from "../../utils/cookies"
import { ORDER_CONNECTION_CLOSE, ORDER_CONNECTION_CLOSED, ORDER_CONNECTION_ERROR, ORDER_CONNECTION_START, ORDER_CONNECTION_SUCCESS, ORDER_GET_MESSAGE, ORDER_POST_ERROR, ORDER_POST_REQUEST, ORDER_POST_SUCCESS } from "../actions/wsActions/oredersActions/constants"
import { TWsOrderActions } from "../actions/wsActions/oredersActions/types"
import { EmptyObject } from "./constructorReducer"




interface IInitialState {
    isConnect: boolean
    isDisconnect: boolean
    loading: boolean
    error: string
    data: EmptyObject | TwsData
    order?: Array<TOrder>
    connectionError: string | undefined
    token?: string
}


const initialState: IInitialState = {
    isConnect: false,
    isDisconnect: false,
    loading: false,
    error: '',
    data: {},
    order: [],
    connectionError: undefined,
    token: getCookie('accessToken') && getCookie('accessToken')
}


export const wsOrderReducer = (state = initialState, action: TWsOrderActions): IInitialState => {
    switch (action.type) {

        case ORDER_CONNECTION_START:
            return {
                ...state,
                isConnect: true,
                connectionError: '',
                isDisconnect: false


            }
        case ORDER_GET_MESSAGE:
            return {
                ...state,
                data: action.payload,
                isConnect: false


            }
        case ORDER_CONNECTION_CLOSE:
            return {
                ...state,
                isConnect: false,
                isDisconnect: true
            }
        case ORDER_CONNECTION_CLOSED:
            return {
                ...state,
                isConnect: false,
                isDisconnect: true
            }
        case ORDER_CONNECTION_SUCCESS:
            return {
                ...state,
                isConnect: true,
            }
        case ORDER_CONNECTION_ERROR:
            return {
                ...state,
                isConnect: false,
                connectionError: action.payload,
                isDisconnect: true
            }

        case ORDER_POST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ORDER_POST_SUCCESS:

            return {
                ...state,
                loading: false,
                order: action.payload
            }

        case ORDER_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }


        default:
            return state

    }




}