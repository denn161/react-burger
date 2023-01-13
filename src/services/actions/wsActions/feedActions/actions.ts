
import { TwsData } from "../../../../types/orders";
import { FILD_CONNECTION_CLOSED, FILD_CONNECTION_INIT } from "./constants";
import { IWsClosedFeed, IWsInitFeed } from "./types";


export const wsInitFeddActions=(url:string):IWsInitFeed=>({
   type:FILD_CONNECTION_INIT,
   payload:url
})

export const wsClosedFeedActions = ():IWsClosedFeed=>({
   type:FILD_CONNECTION_CLOSED
})

