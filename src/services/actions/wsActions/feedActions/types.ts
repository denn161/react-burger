import { TwsData } from "../../../../types/orders";
import { FILD_CONNECTION_CLOSE, FILD_CONNECTION_CLOSED, FILD_CONNECTION_ERROR, FILD_CONNECTION_INIT, FILD_CONNECTION_START, FILD_CONNECTION_SUCCESS, FILD_GET_MESSAGE } from "./constants";


export interface IWsInitFeed {
    readonly type: typeof FILD_CONNECTION_INIT
    readonly payload: string
}

export interface IWsSuccessFeed {
    readonly type: typeof FILD_CONNECTION_SUCCESS
    readonly payload:Event
}

export interface IWsErrorFeed {
    readonly type: typeof FILD_CONNECTION_ERROR
    readonly payload: string
}

export interface IWsCloseFeed {
    readonly type: typeof FILD_CONNECTION_CLOSE
    readonly payload: Event
}

export interface IWsClosedFeed {
    readonly type: typeof FILD_CONNECTION_CLOSED
}

export interface IWsGetMessageFeed {
    readonly type: typeof FILD_GET_MESSAGE
    readonly payload: TwsData

}

export interface IWsStartFeed{
      readonly type:typeof FILD_CONNECTION_START
}


export type TWsFeedActions = IWsInitFeed
    | IWsSuccessFeed | IWsErrorFeed
    | IWsCloseFeed | IWsClosedFeed | IWsGetMessageFeed|IWsStartFeed



