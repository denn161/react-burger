export const ORDER_CONNECTION_INIT = 'FILD_CONNECTION_INIT'

export const ORDER_CONNECTION_SUCCESS = 'FILD_CONNECTION_SUCCESS'

export const ORDER_CONNECTION_CLOSE = 'FILD_CONNECTION_CLOSE'

export const ORDER_CONNECTION_CLOSED = 'FILD_CONNECTION_CLOSED'

export const ORDER_CONNECTION_ERROR = 'FILD_CONNECTION_ERROR'

export const ORDER_GET_MESSAGE = 'FILD_GET_MESSAGE'

export const ORDER_CONNECTION_START = 'FILD_CONNECTION_START'


//Получение заказа по номеру 

export const ORDER_POST_REQUEST = 'FEED_POST_REQUEST'

export const ORDER_POST_SUCCESS = 'FEED_POST_SUCCESS'

export const ORDER_POST_ERROR = 'FEED_POST_ERROR'



export type TWsActionsHistoryOrder = {
       wsInit: typeof ORDER_CONNECTION_INIT  // инициализация
       wsClose: typeof ORDER_CONNECTION_CLOSED
       onOpen: typeof ORDER_CONNECTION_SUCCESS
       onClose: typeof ORDER_CONNECTION_CLOSE//размонтирование
       onError: typeof ORDER_CONNECTION_ERROR
       onMessage: typeof ORDER_GET_MESSAGE
       connection: typeof ORDER_CONNECTION_START
}

export const historyOrderWsActions: TWsActionsHistoryOrder = {
       wsInit: ORDER_CONNECTION_INIT,
       wsClose: ORDER_CONNECTION_CLOSED,
       onOpen: ORDER_CONNECTION_SUCCESS,
       onClose: ORDER_CONNECTION_CLOSE,
       onError: ORDER_CONNECTION_ERROR,
       onMessage: ORDER_GET_MESSAGE,
       connection: ORDER_CONNECTION_START
};


export const WS_ORDER_URL = "wss://norma.nomoreparties.space/orders"