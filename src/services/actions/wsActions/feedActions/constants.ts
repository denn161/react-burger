


export const FILD_CONNECTION_INIT = 'FILD_CONNECTION_INIT'

export const FILD_CONNECTION_SUCCESS = 'FILD_CONNECTION_SUCCESS'

export const FILD_CONNECTION_CLOSE = 'FILD_CONNECTION_CLOSE'

export const FILD_CONNECTION_CLOSED = 'FILD_CONNECTION_CLOSED'

export const FILD_CONNECTION_ERROR = 'FILD_CONNECTION_ERROR'

export const FILD_GET_MESSAGE = 'FILD_GET_MESSAGE'

export const FILD_CONNECTION_START = 'FILD_CONNECTION_START'


//Получение заказа по номеру 

export const FEED_POST_REQUEST = 'FEED_POST_REQUEST'

export const FEED_POST_SUCCESS = 'FEED_POST_SUCCESS'

export const FEED_POST_ERROR = 'FEED_POST_ERROR'




export type TWsActions = {
       wsInit: typeof FILD_CONNECTION_INIT  // инициализация
       wsClose: typeof FILD_CONNECTION_CLOSED
       onOpen: typeof FILD_CONNECTION_SUCCESS
       onClose: typeof FILD_CONNECTION_CLOSE//размонтирование
       onError: typeof FILD_CONNECTION_ERROR
       onMessage: typeof FILD_GET_MESSAGE
       connection: typeof FILD_CONNECTION_START
}

export const feedWsActions: TWsActions = {
       wsInit: FILD_CONNECTION_INIT,
       wsClose: FILD_CONNECTION_CLOSED,
       onOpen: FILD_CONNECTION_SUCCESS,
       onClose: FILD_CONNECTION_CLOSE,
       onError: FILD_CONNECTION_ERROR,
       onMessage: FILD_GET_MESSAGE,
       connection: FILD_CONNECTION_START
};


export const wsFildUrl = "wss://norma.nomoreparties.space/orders/all"

export const ORDER_DETAILS = "https://norma.nomoreparties.space/api/orders"


