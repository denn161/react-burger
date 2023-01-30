import { TwsData } from "../../../../types/orders";
import { FEED_POST_ERROR, FEED_POST_REQUEST, FEED_POST_SUCCESS, FILD_CONNECTION_CLOSE, FILD_CONNECTION_CLOSED, FILD_CONNECTION_ERROR, FILD_CONNECTION_INIT, FILD_CONNECTION_START, FILD_CONNECTION_SUCCESS, FILD_GET_MESSAGE } from "./constants";


export interface IWsInitFeed {
    readonly type: typeof FILD_CONNECTION_INIT
    readonly payload: string
}

export interface IWsSuccessFeed {
    readonly type: typeof FILD_CONNECTION_SUCCESS
    readonly payload: Event
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

export interface IWsStartFeed {
    readonly type: typeof FILD_CONNECTION_START
}


export interface IFeedPostRequest {
    readonly type: typeof FEED_POST_REQUEST
}

export interface IFeedPostSuccess {
    readonly type: typeof FEED_POST_SUCCESS
    readonly payload: any
}

export interface IFeedPostError {
    readonly type: typeof FEED_POST_ERROR
    readonly payload: string
}


export type TWsFeedActions = IWsInitFeed
    | IWsSuccessFeed | IWsErrorFeed
    | IWsCloseFeed | IWsClosedFeed | IWsGetMessageFeed | IWsStartFeed
    | IFeedPostRequest | IFeedPostSuccess | IFeedPostError



