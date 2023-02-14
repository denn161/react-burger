
import { getCookie } from '../../utils/cookies'
import { IBody, TUserActions } from '../actions/user/actions'
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
} from '../actions/user/constants'



type TUserSate = {
    user: IBody
    loading: boolean
    isError: boolean
    isFargot: boolean
    auth: boolean
    isRegister: boolean
    isLogin: boolean
    message: string
    token: boolean | null

}

 export const initialUserState: TUserSate = {
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

export const userReducer = (state = initialUserState, action: TUserActions|any): TUserSate => {

    switch (action.type) {
        case POST_USER_REQUEST:
            return {
                ...state,
                user: action.payload,
                loading: true
            }

        case POST_USER_SUCCES:
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user,
                    ...action.payload
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
                    ...action.payload
                },
                auth: true,
                loading: false,
                isLogin: true,


            }
        case LOGIN_USER_FAILED:
            return {
                ...state,
                isError: true,
                isLogin: false,
                auth: false,
                loading: false,
                message:action.payload
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
                    ...action.payload
                },
                isRegister: true,
                auth: true


            }
        case GET_USER_FAILED:
            return {
                ...state,
                isError: true,
                loading: false,
                isRegister: false,
                auth: false,
                message:action.payload
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
                    ...action.payload
                },
                loading: false,
                auth: true

            }
        case UPDATE_USER_INFO_FAILED:
            return {
                ...state,
                loading: false,
                isError: true,
                auth: false
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
                message: action.payload,
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
                token: null
            }

        default:
            return state
    }

}