import { wsData } from '../../constants'
import * as types from '../../services/actions/wsActions/oredersActions//constants'
import { wsOrderReducer, initialState, IInitialState } from '../../services/reducers/wsOrderReducer'


describe('Test wsfeedReducer from Redux', () => {

    expect(wsOrderReducer(undefined, {})).toEqual(initialState)

    it('should be correctly job type ORDER_CONNECTION_START', () => {

        const expected: IInitialState = {
            ...initialState,
            isConnect: true,
            connectionError: '',
            isDisconnect: false
        }

        const recived = wsOrderReducer(initialState,

            { type: types.ORDER_CONNECTION_START })

        expect(recived).toEqual(expected)
    })


    it('should be correctly job type ORDER_GET_MESSAGE', () => {
        const expected: IInitialState = {
            ...initialState,
            data: wsData,
            isConnect: false
        }

        const recived = wsOrderReducer(initialState,
            { type: types.ORDER_GET_MESSAGE, payload: wsData })

        expect(recived).toEqual(expected)
    })

    it('should be correctly job type ORDER_CONNECTION_CLOSE', () => {

        const expected: IInitialState = {
            ...initialState,
            isConnect: false,
            isDisconnect: true
        }

        const recived = wsOrderReducer(initialState,
            { type: types.ORDER_CONNECTION_CLOSE })

        expect(recived).toEqual(expected)
    })

    it('should be correctly job type  ORDER_CONNECTION_CLOSED', () => {

        const expected: IInitialState = {
            ...initialState,
            isConnect: false,
            isDisconnect: true
        }

        const recived = wsOrderReducer(initialState,
            { type: types.ORDER_CONNECTION_CLOSED })

        expect(recived).toEqual(expected)
    })

    it('should be correctly job type  ORDER_CONNECTION_SUCCESS', () => {

        const expected: IInitialState = {
            ...initialState,
            isConnect: true,
        }

        const recived = wsOrderReducer(initialState,
            { type: types.ORDER_CONNECTION_SUCCESS })

        expect(recived).toEqual(expected)
    })
    it('should be correctly job type  ORDER_CONNECTION_ERROR', () => {

        const errorWebSocket = 'Error socket'

        const expected: IInitialState = {
            ...initialState,
            isConnect: false,
            connectionError: errorWebSocket,
            isDisconnect: true
        }

        const recived = wsOrderReducer(initialState,
            { type: types.ORDER_CONNECTION_ERROR, payload: errorWebSocket })

        expect(recived).toEqual(expected)
    })

    it('should be correctly job type  ORDER_POST_REQUEST', () => {

        const expected: IInitialState = {
            ...initialState,
            loading: true
        }

        const recived = wsOrderReducer(initialState,
            { type: types.ORDER_POST_REQUEST })

        expect(recived).toEqual(expected)
    })
    it('should be correctly job type ORDER_POST_SUCCESS', () => {

        const expected: IInitialState = {
            ...initialState,
            loading: false,
            order: wsData.orders
        }

        const recived = wsOrderReducer(initialState,

            { type: types.ORDER_POST_SUCCESS, payload: wsData.orders })

        expect(recived).toEqual(expected)
    })

    it('should be correctly job type   ORDER_POST_ERROR', () => {

        const errorMessage = 'Что-то пошло не так'

        const expected: IInitialState = {
            ...initialState,
            loading: false,
            error: errorMessage
        }

        const recived = wsOrderReducer(initialState,

            { type: types.ORDER_POST_ERROR, payload: errorMessage })

        expect(recived).toEqual(expected)
    })
})