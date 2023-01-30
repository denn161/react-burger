import { TwsData } from "../../../../types/orders"
import { ORDER_CONNECTION_CLOSE, ORDER_CONNECTION_CLOSED, ORDER_CONNECTION_ERROR, ORDER_CONNECTION_INIT, ORDER_CONNECTION_START, ORDER_CONNECTION_SUCCESS, ORDER_GET_MESSAGE, ORDER_POST_ERROR, ORDER_POST_REQUEST, ORDER_POST_SUCCESS } from "./constants"


export interface IWsOrderInit {
    readonly type: typeof ORDER_CONNECTION_INIT
    readonly payload: string
}


export interface IWsSuccessOrder {
    readonly type: typeof ORDER_CONNECTION_SUCCESS
    readonly payload: Event
}

export interface IWsErrorOrder {
    readonly type: typeof ORDER_CONNECTION_ERROR
    readonly payload: string
}

export interface IWsCloseOrder {
    readonly type: typeof ORDER_CONNECTION_CLOSE
    readonly payload: Event
}

export interface IWsClosedOrder {
    readonly type: typeof ORDER_CONNECTION_CLOSED
}

export interface IWsGetMessageOrder {
    readonly type: typeof ORDER_GET_MESSAGE
    readonly payload: TwsData

}

export interface IWsStartOrder {
    readonly type: typeof ORDER_CONNECTION_START
}


export interface IOrderPostRequest {
    readonly type: typeof ORDER_POST_REQUEST
}

export interface IOrderPostSuccess {
    readonly type: typeof ORDER_POST_SUCCESS
    readonly payload: any
}

export interface IOrderPostError {
    readonly type: typeof ORDER_POST_ERROR
    readonly payload: string
}


export type TWsOrderActions = IWsOrderInit | IWsCloseOrder | IWsClosedOrder
    | IWsErrorOrder | IWsGetMessageOrder | IWsStartOrder | IWsSuccessOrder | IOrderPostRequest
    | IOrderPostSuccess | IOrderPostError 