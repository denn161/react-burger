import { Middleware, MiddlewareAPI } from "redux";
import { getCookie } from "../../utils/cookies";
import { TWsActions } from "../actions/wsActions/feedActions/constants";

import { AppDispatch, TRootState } from "../store/types";


export const socketMiddleware = (
    wsActions: TWsActions
): Middleware => {
    return (store: MiddlewareAPI<AppDispatch, TRootState>) => {

        let socket: WebSocket | null = null;

        return (next) => (action) => {
            const { dispatch } = store;           
            const {
                onClose,
                onError,
                onMessage,
                onOpen,
                wsClose,
                wsInit,
                connection
            } = wsActions;
            if (action.type===wsInit&&action.payload) {
                console.log(action.payload)
                socket = new WebSocket(action.payload);
                dispatch({ type: connection });
            }

            if (socket) {
                socket.onopen = (event: Event) => {
                   dispatch({type:onOpen,payload:event})
                };
                socket.onerror = (event: Event) => {
                    dispatch({ type: onError, payload: 'Error socket' });
                };

                socket.onmessage = (event: MessageEvent) => {
                    const { data } = event;
                    const parsedData = JSON.parse(data);
                    dispatch({type:onMessage,payload:parsedData})

                 
                };

                socket.onclose = (event: Event) => {
                     dispatch({type:onClose,payload:event})
                };

                if (action.type===wsClose) {
                    socket.close();
                    socket = null;
                }
            }

            next(action);
        };
    };
};



