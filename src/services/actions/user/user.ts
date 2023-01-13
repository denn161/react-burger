import { toast } from 'react-toastify'
import axios, { AxiosError } from 'axios'
import {
    API_GET_USER,
    API_USER_LOGIN, API_USER_LOGOUT,
    API_USER_RECOVER, API_USER_REGISTER,
    API_USER_RESET,
    API_USER_TOKEN,
} from '../../../constants/api'
import { deleteAllCookies, getCookie, setCookie } from "../../../utils/cookies"

import {
    fargotPasswordFailed,
    fargotPasswordRequest, fargotPasswordSuccess,
    getUserFailed, getUserInfo, getUserRequest,
    IBody, IPostSuccessResponse, loginUserFailed,
    loginUserRequest, loginUserSuccess, logoutUser,
    postUserFailed, postUserRequest, postUserSuccess,
    resetPasswordFailed, resetPasswordSuccess,
    setLoginChecked, updateUserInfoFailed,
    updateUserInfoRequest,updateUserInfoSuccess
} from './actions'
import {TAppDispatch } from '../../store/types'

/**
 * Функция регистрации
 */
export const registerUser = (body: IBody, navigate: any) => async (dispatch:TAppDispatch) => {

    dispatch(postUserRequest(body))

    try {

        const headers = { "Content-Type": "application/json" }

        const { data } = await axios.post<IPostSuccessResponse>(API_USER_REGISTER, body, { headers })

        if (data.success) {
            toast.success('Регистрация прошла успешно!!')
            dispatch(postUserSuccess(data.user))
            setCookie('accessToken', data.accessToken.split(' ')[1]);
            setCookie('refreshToken', data.refreshToken)
            navigate('/login')
        }

    } catch (error) {
        const err = error as AxiosError

        dispatch(postUserFailed(err.message))
        toast.error(`${err.message}`)
    }
}


/**
 * Функция авторизации
 * @param {Objeсt} body 
 * @param {Hook} navigate 
 * @param {Notification} toast 
 * @param {String Path} fromPage 
 * @returns Object data.user
 */

export const loginUser = (body: IBody, navigate: any, fromPage: string) => async (dispatch:TAppDispatch) => {

    dispatch(loginUserRequest())

    try {

        const headers = {
            "Content-Type": "application/json",
            Authorization: getCookie('accessToken')
                ? `Bearer ${getCookie('accessToken')}`
                : ''
        }

        const { data } = await axios.post<IPostSuccessResponse>(API_USER_LOGIN, body, { headers })

        // if (!res.ok) {
        //     dispatch({ type: SET_FARGOT_CHECKED })          
        //     throw new Error('Проверьте логин или пароль')

        // }       

        if (data.success) {
            toast.success('Вы вошли в систему!!')
            dispatch(loginUserSuccess(data.user))
            dispatch(setLoginChecked())
            setCookie('accessToken', data.accessToken.split(' ')[1]);
            setCookie('refreshToken', data.refreshToken)
            navigate(`${fromPage}`)

        }

    } catch (error) {
        const err = error as AxiosError
        dispatch(loginUserFailed(err.message))
        toast.error(err.message)
    }
}

/**
 * Функция выхода
 * @param {Notifaction} toast 
 * @param {Hook} navigate 
 * @returns 
 */

export const logout = (toast: any, navigate: any) => async (dispatch:TAppDispatch) => {

    try {

        const tokenData = { token: getCookie('refreshToken') }
        const headers = {
            "Content-Type": "application/json"
        }

        const { data } = await axios.post(API_USER_LOGOUT, tokenData, { headers })

        if (data.success) {
            toast.success('Вы вышли из из системы!')
            dispatch(logoutUser())
            deleteAllCookies()
            navigate('/login')
        }


    } catch (error) {
        const err = error as AxiosError
        console.log(err.message)
    }

}

/**
 * Функция обновления токена
 * @returns token
 */
const updateToken = () => async (dispatch: TAppDispatch) => {

    try {
        const tokenData = { token: getCookie('refreshToken') }
        const headers = { "Content-Type": "application/json" }
        const { data } = await axios.post(API_USER_TOKEN, tokenData, { headers })

        if (data.success) {
            setCookie('accessToken', data.accessToken.split(' ')[1]);
            setCookie('refreshToken', data.refreshToken);
        }

    } catch (error) {
        const err = error as AxiosError
        console.log(err.message)
    }

}

/**
 * Функция получения пользователя из БД
 * @returns 
 */
export const getUser = () => async (dispatch:TAppDispatch) => {

    dispatch(getUserRequest())
    try {
        const headers = {
            "Content-Type": "application/json",
            Authorization: getCookie('accessToken')
                ? `Bearer ${getCookie('accessToken')}`
                : ''
        }

        const { data } = await axios.get<IPostSuccessResponse>(API_GET_USER, { headers })

        if (data.success) {
            dispatch(getUserInfo(data.user))
        }

    } catch (error) {
        const err = error as AxiosError
        if (err.message === 'jwt expired' || 'jwt malformed') {
             updateToken()
        }
        console.log(err.message)
        dispatch(getUserFailed(err.message))
    }

}



/**
 * Функция обновления данных 
 * @param {Object} form Данные от клиента
 * @param {Notificaton} toast 
 * @returns data.user Новые данные 
 */

export const updateUserInfo = (form: IBody) => async (dispatch:TAppDispatch) => {

    dispatch(updateUserInfoRequest())
    try {

        const body = { ...form }
        const headers = {
            "Content-Type": "application/json",
            Authorization: getCookie('accessToken')
                ? `Bearer ${getCookie('accessToken')}`
                : ''
        }

        const { data } = await axios.patch<IPostSuccessResponse>(API_GET_USER, body, { headers })
        if (data?.success) {
            toast.success('Данные успешно обновлены!!')
            dispatch(updateUserInfoSuccess(data.user))

        }

    } catch (error) {

        const err = error as AxiosError
        console.log(err.message)
        dispatch(updateUserInfoFailed(err.message))
    }

}

/**
 * Функция сброса пароля
 * @param {String} email 
 * @param {Hook} navigate 
 * @param {Notification} toast 
 * @returns 
 */

export const fargotPassword = (email: string, navigate: any) => async (dispatch:TAppDispatch) => {

    dispatch(fargotPasswordRequest())

    try {

        const body = { email }

        const headers = {
            "Content-Type": "application/json",
            Authorization: getCookie('accessToken')
                ? `Bearer ${getCookie('accessToken')}`
                : ''
        }
        const { data } = await axios.post(API_USER_RECOVER, body, { headers })

        if (data.success) {
            toast.success('Это успех!!')
            dispatch(fargotPasswordSuccess(data?.message))
            navigate('/reset-password')
        }
    } catch (error) {
        const err = error as AxiosError
        console.log(err.message)
        dispatch(fargotPasswordFailed(err.message))
    }

}

/**
 * Функия обновления пароля
 * @param {string} password 
 * @param {notification} toast 
 * @param {hook} navigate 
 * @returns 
 */

export const resetPassword = (password: string, toast: any, navigate: any) => async (dispatch:TAppDispatch) => {
    try {

        const body = { password: password, token: getCookie('accessToken') }

        const headers = {
            "Content-Type": "application/json",
            Authorization: getCookie('accessToken')
                ? `Bearer ${getCookie('accessToken')}`
                : ''
        }
        const { data } = await axios.post(API_USER_RESET, body, { headers })

        if (data.success) {
            toast.success('Пароль изменен!')
            dispatch(resetPasswordSuccess())
            navigate('/login')
        }

    } catch (error) {
        const err = error as AxiosError
        console.log(err.message)
        dispatch(resetPasswordFailed(err.message))

    }

}
