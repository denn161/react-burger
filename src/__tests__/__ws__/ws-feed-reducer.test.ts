import { wsData } from '../../constants'
import * as types from '../../services/actions/wsActions/feedActions/constants'
import { wsFildReducer, initialState, IInitialState } from '../../services/reducers/wsFeedReducer'
import { TOrder } from '../../types/orders'

describe('Test wsfeedReducer from Redux', () => {
    
    expect(wsFildReducer(undefined, {})).toEqual(initialState)

    it('should be correctly job type FILD_CONNECTION_START', () => {

        const expected: IInitialState = {
            ...initialState,
            isConnect: true,
            connectionError: '',
            isDisconnect: false
        }

        const recived = wsFildReducer(initialState, { type: types.FILD_CONNECTION_START })

        expect(recived).toEqual(expected)
    })


    it('should be correctly job type FILD_GET_MESSAGE', () => {

        const expected: IInitialState = {
            ...initialState,
            data: wsData,
            isConnect: false
        }

        const recived = wsFildReducer(initialState,
            { type: types.FILD_GET_MESSAGE, payload: wsData })

        expect(recived).toEqual(expected)
    })

    it('should be correctly job type FILD_CONNECTION_CLOSE', () => {

        const expected: IInitialState = {
            ...initialState,
            isConnect: false,
            isDisconnect: true
        }

        const recived = wsFildReducer(initialState,
            { type: types.FILD_CONNECTION_CLOSE })

        expect(recived).toEqual(expected)
    })

    it('should be correctly job type  FILD_CONNECTION_CLOSED', () => {

        const expected: IInitialState = {
            ...initialState,
            isConnect: false,
            isDisconnect: true
        }

        const recived = wsFildReducer(initialState,
            { type: types.FILD_CONNECTION_CLOSED })

        expect(recived).toEqual(expected)
    })

    it('should be correctly job type   FILD_CONNECTION_SUCCESS', () => {

        const expected: IInitialState = {
            ...initialState,
            isConnect: true,
        }

        const recived = wsFildReducer(initialState,
            { type: types.FILD_CONNECTION_SUCCESS })

        expect(recived).toEqual(expected)
    })
    it('should be correctly job type  FILD_CONNECTION_ERROR', () => {

        const errorWebSocket = 'Error socket'

        const expected: IInitialState = {
            ...initialState,
            isConnect: false,
            connectionError: errorWebSocket,
            isDisconnect: true
        }

        const recived = wsFildReducer(initialState,
            { type: types.FILD_CONNECTION_ERROR, payload: errorWebSocket })

        expect(recived).toEqual(expected)
    })

    it('should be correctly job type FEED_POST_REQUEST', () => {

        const expected: IInitialState = {
            ...initialState,
            loading: true
        }

        const recived = wsFildReducer(initialState,
            { type: types.FEED_POST_REQUEST })

        expect(recived).toEqual(expected)
    })
    it('should be correctly job type FEED_POST_SUCCESS', () => {

        const expected: IInitialState = {
            ...initialState,
            loading: false,
            order: wsData.orders
        }

        const recived = wsFildReducer(initialState,

            { type: types.FEED_POST_SUCCESS, payload: wsData.orders })

        expect(recived).toEqual(expected)
    })

    it('should be correctly job type  FEED_POST_ERROR', () => {

        const errorMessage = 'Что-то пошло не так'

        const expected: IInitialState = {
            ...initialState,
            loading: false,
            error: errorMessage
        }

        const recived = wsFildReducer(initialState,

            { type: types.FEED_POST_ERROR, payload: errorMessage })

        expect(recived).toEqual(expected)
    }) 
})