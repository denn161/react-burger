
import { getCookie } from '../../utils/cookies'
import {
    POST_USER_REQUEST,
    POST_USER_SUCCES,
    POST_USER_FAILED,
    LOGOUT_USER,
    LOGIN_USER_REQUEST,
    LOGIN_USER_FAILED,
    LOGIN_USER_SUCCESS,
    GET_USER_FAILED,
    GET_USER_INFO,
    GET_USER_REQUEST,
    UPDATE_USER_INFO,
    UPDATE_USER_INFO_FAILED,
    UPDATE_USER_INFO_REQUEST,
    FARGOT_PASSWORD_SUCCESFLY,
    FARGOT_PASSWORD_REQUEST,
    FARGOT_PASSWORD_FAILED,
    SET_FARGOT_CHECKED,
    RESET__PASSWORD_FAILED,
    RESET__PASSWORD_SUCCESSFLY,
    SET_LOGIN_CHECKED,
} from '../actions/user'


const initialUserState = {
    user: {},
    loading: false,
    isError: false,
    isFargot: false,
    auth: false,
    isRegister: false,
    isLogin: false,
    message: '',
    token: !!getCookie('refreshToken')
}

export const userReducer = (state = initialUserState, { type, payload }) => {

    switch (type) {
        case POST_USER_REQUEST:
            return {
                ...state,
                user: payload,
                loading: true
            }

        case POST_USER_SUCCES:
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user,
                    ...payload
                },
                isRegister: true
            }
        case POST_USER_FAILED:
            return {
                ...state,
                isError: true,
                auth: false,
                loading: false,
                isRegister: false
            }

        case LOGIN_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...payload
                },
                auth: true,
                loading: false,
                isLogin: true,


            }
        case LOGIN_USER_FAILED:
            return {
                ...state,
                isError: true,
                isLogin: false
            }
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true

            }

        case GET_USER_INFO:
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user,
                    ...payload
                },
                isRegister: true,
                auth: true


            }
        case GET_USER_FAILED:
            return {
                ...state,
                isError: true,
                loading: false,
                isRegister: false
            }
        case UPDATE_USER_INFO_REQUEST:
            return {
                ...state,
                loading: true,


            }
        case UPDATE_USER_INFO:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...payload
                },
                loading: false,
                auth: true

            }
        case UPDATE_USER_INFO_FAILED:
            return {
                ...state,
                loading: false,
                isError: true
            }
        case FARGOT_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
                isFargot: false
            }
        case FARGOT_PASSWORD_SUCCESFLY:
            return {
                ...state,
                isFargot: true,
                message: payload,
                loading: false


            }
        case FARGOT_PASSWORD_FAILED:
            return {
                ...state,
                isError: true,
                loading: false
            }

        case SET_FARGOT_CHECKED:
            return {
                ...state,
                isFargot: true
            }

        case LOGOUT_USER:
            return {
                ...initialUserState,
                token: ''
            }


        default:
            return state
    }


}