import { execPath } from "process";
import { IBody } from "../../services/actions/user/actions";
import { GET_USER_FAILED, GET_USER_INFO, GET_USER_REQUEST, LOGIN_USER_FAILED, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, POST_USER_FAILED, POST_USER_REQUEST, POST_USER_SUCCES } from "../../services/actions/user/constants";
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





})