import { IBody } from "../../services/actions/user/actions";
import {
    FARGOT_PASSWORD_FAILED,
    FARGOT_PASSWORD_REQUEST,
    FARGOT_PASSWORD_SUCCESFLY,
    GET_USER_FAILED, GET_USER_INFO,
    GET_USER_REQUEST, LOGIN_USER_FAILED,
    LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS,
    LOGOUT_USER, POST_USER_FAILED,
    POST_USER_REQUEST, POST_USER_SUCCES,
    SET_FARGOT_CHECKED, UPDATE_USER_INFO,
    UPDATE_USER_INFO_FAILED, UPDATE_USER_INFO_REQUEST
} from "../../services/actions/user/constants";
import { initialUserState } from "../../services/reducers/userReducer";
import { userReducer } from "../../services/reducers/userReducer";


const user: IBody = {
    name: 'test',
    email: 'test@mail.ru',
    password: 'test123161'
}

const responseUser: Omit<IBody, 'password'> = {
    name: 'test',
    email: 'test@mail.ru'
}


describe('Tests userReducer', () => {
    expect(userReducer(undefined, {})).toEqual(initialUserState)

    it('should be action POST_USER_REQUEST', () => {
        const expected = {
            ...initialUserState,
            user: user,
            loading: true
        };
        const recived = userReducer(initialUserState, { type: POST_USER_REQUEST, payload: user })

        expect(recived).toEqual(expected)


    })

    it('should be action POST_USER_SUCCESS', () => {
        const expected = {
            ...initialUserState,
            loading: false,
            user: {
                ...initialUserState.user,
                ...responseUser
            },
            isRegister: true
        }

        const recived = userReducer(initialUserState, { type: POST_USER_SUCCES, payload: responseUser })

        expect(recived).toEqual(expected)

    })

    it('should be action POST_USER_FAILED', () => {
        const expected = {
            ...initialUserState,
            isError: true,
            auth: false,
            loading: false,
            isRegister: false
        }

        const recived = userReducer(initialUserState, { type: POST_USER_FAILED })

        expect(recived).toEqual(expected)


    })


    it('should be action LOGIN_USER_REQUEST', () => {
        const expected = {
            ...initialUserState,
            loading: true
        }

        const recived = userReducer(initialUserState, { type: LOGIN_USER_REQUEST })

        expect(recived).toEqual(expected)


    })

    it('should be action LOGIN_USER_SUCCESS', () => {
        const expected = {
            ...initialUserState,
            user: {
                ...initialUserState.user,
                ...responseUser
            },
            auth: true,
            loading: false,
            isLogin: true,

        }

        const recived = userReducer(initialUserState, { type: LOGIN_USER_SUCCESS, payload: responseUser })

        expect(recived).toEqual(expected)


    })

    it('should be action LOGIN_USER_FAILED', () => {

        const errorMessage = 'Что-то пошло не так'

        const expected = {
            ...initialUserState,
            isError: true,
            isLogin: false,
            auth: false,
            loading: false,
            message: errorMessage

        }

        const recived = userReducer(initialUserState, { type: LOGIN_USER_FAILED, payload: errorMessage })

        expect(recived).toEqual(expected)


    })


    it('should be action GET_USER_REQUEST', () => {

        const expected = {
            ...initialUserState,
            loading: true

        }

        const recived = userReducer(initialUserState, { type: GET_USER_REQUEST })

        expect(recived).toEqual(expected)


    })

    it('should be action GET_USER_INFO', () => {

        const expected = {
            ...initialUserState,
            loading: false,
            user: {
                ...initialUserState.user,
                ...responseUser
            },
            isRegister: true,
            auth: true

        }

        const recived = userReducer(initialUserState, { type: GET_USER_INFO, payload: responseUser })

        expect(recived).toEqual(expected)

    })

    it('should be action GET_USER_FAILED', () => {

        const errorMessage = 'Что-то пошло не так'

        const expected = {
            ...initialUserState,
            isError: true,
            loading: false,
            isRegister: false,
            auth: false,
            message: errorMessage
        }

        const recived = userReducer(initialUserState, { type: GET_USER_FAILED, payload: errorMessage })

        expect(recived).toEqual(expected)


    })


    it('the action UPDATE_USER_INFO_REQUEST is working correctly', () => {

        const expected = {
            ...initialUserState,
            loading: true

        }

        const recived = userReducer(initialUserState, { type: UPDATE_USER_INFO_REQUEST })

        expect(recived).toEqual(expected)

    })

    it('the action UPDATE_USER_INFO is working correctly', () => {

        const expected = {
            ...initialUserState,
            user: {
                ...initialUserState.user,
                ...responseUser
            },
            loading: false,
            auth: true

        }

        const recived = userReducer(initialUserState, { type: UPDATE_USER_INFO, payload: responseUser })

        expect(recived).toEqual(expected)

    })


    it('the action UPDATE_USER_INFO_FAILED is working correctly', () => {

        const errorMessage = 'Что-то пошло не так'

        const expected = {
            ...initialUserState,
            isError: true,
            loading: false,
            auth: false,
            message: errorMessage
        }

        const recived = userReducer(initialUserState, { type: UPDATE_USER_INFO_FAILED, payload: errorMessage })

        expect(recived).toEqual(expected)


    })


    it('the action FARGOT_PASSWORD_REQUEST is working correctly', () => {

        const expected = {
            ...initialUserState,
            loading: true,
            isFargot: false

        }

        const recived = userReducer(initialUserState, { type: FARGOT_PASSWORD_REQUEST })

        expect(recived).toEqual(expected)

    })


    it('the action FARGOT_PASSWORD_SUCCESFLY is working correctly', () => {

        const fargotMessage = 'Пароль успешно восстановлен'
        const expected = {
            ...initialUserState,
            isFargot: true,
            message: fargotMessage,
            loading: false

        }

        const recived = userReducer(initialUserState,
            { type: FARGOT_PASSWORD_SUCCESFLY, payload: fargotMessage })

        expect(recived).toEqual(expected)

    })


    it('the action FARGOT_PASSWORD_FAILED is working correctly', () => {

        const fargotErrorMessage = 'Что-то пошло не так'
        const expected = {
            ...initialUserState,
            isFargot: false,
            isError: true,
            loading: false,
            message: fargotErrorMessage

        }

        const recived = userReducer(initialUserState,
            { type: FARGOT_PASSWORD_FAILED, payload: fargotErrorMessage })

        expect(recived).toEqual(expected)

    })

    it('the action SET_FARGOT_CHECKED is working correctly', () => {

        const expected = {
            ...initialUserState,
            isFargot: true,

        }

        const recived = userReducer(initialUserState,
            { type: SET_FARGOT_CHECKED })

        expect(recived).toEqual(expected)

    })

    it('the action  LOGOUT_USER is working correctly', () => {

        const expected = {
            ...initialUserState,
            token: null

        }

        const recived = userReducer(initialUserState,
            { type: LOGOUT_USER })

        expect(recived).toEqual(expected)

    })







})