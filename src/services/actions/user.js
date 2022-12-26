import { toast } from 'react-toastify'
import {
    API_GET_USER,
    API_USER_LOGIN, API_USER_LOGOUT,
    API_USER_RECOVER, API_USER_REGISTER,
    API_USER_RESET,
    API_USER_TOKEN,
   } from '../../constants'

import { deleteAllCookies, getCookie, setCookie } from "../../utils/cookies"
import { checkResponse, getData } from "../../utils/data"

export const POST_USER_REQUEST = 'POST_USER_REQUEST';
export const POST_USER_SUCCES = 'POST_USER_SUCCESS';
export const POST_USER_FAILED = 'POST_USER_FAILED';

export const LOGIN_USER_SUCCESS = 'LOGIN_USER::LOGIN';
export const LOGOUT_USER = 'LOGOUT_USER::LOGOUT';
export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST::REQUEST';
export const LOGIN_USER_FAILED = 'LOGIN_USER_FAILED::FAILED';

export const SET_STATUS_REQUEST = 'SET_STATUS_REQUEST';

export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';
export const UPDATE_USER_INFO_REQUEST = 'UPDATE_USER_INFO_REQUEST';
export const UPDATE_USER_INFO_FAILED = 'UPDATE_USER_INFO_FAILED';

export const FARGOT_PASSWORD_SUCCESFLY = 'FARGOT_PASSWORD_SUCCESFLY';

export const FARGOT_PASSWORD_REQUEST = 'FARGOT_PASSWORD_REQUEST';

export const FARGOT_PASSWORD_FAILED = 'FARGOT_PASSWORD_FAILED';

export const SET_FARGOT_CHECKED = 'SET_FARGOT_CHECKED';

export const SET_LOGIN_CHECKED = 'SET_LOGIN_CHECKED';


export const RESET__PASSWORD_SUCCESSFLY = 'RESET_PASSWORD_SUCCESSFLY';

export const RESET__PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';


/**
 * Функция регистрации
 */
export const registerUser = (body, navigate, toast) => async dispatch => {

   

    dispatch({ type: POST_USER_REQUEST, payload: body })

    try {    

     const res = await fetch(API_USER_REGISTER, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        checkResponse(res)

     const data = await res.json()

        if (data.success) {
            toast.success('Регистрация прошла успешно!!')
            dispatch({ type: POST_USER_SUCCES, payload: data.user })
            setCookie('accessToken', data.accessToken.split(' ')[1]);
            setCookie('refreshToken', data.refreshToken)
            navigate('/login')

        }

    } catch (error) {
        dispatch({ type: POST_USER_FAILED, payload: error.message })
        toast.error(`${error.message}`)
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

export const loginUser = (body, navigate, toast, fromPage) => async dispatch => {

    
    dispatch({ type: LOGIN_USER_REQUEST })

    try {
        const res = await fetch(API_USER_LOGIN, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: getCookie('accessToken')
                    ? `Bearer ${getCookie('accessToken')}`
                    : ''
            },
            body: JSON.stringify(body)
        })

        if (!res.ok) {
            dispatch({ type: SET_FARGOT_CHECKED })          
            throw new Error('Проверьте логин или пароль')

        }

        const data = await res.json()

        if (data.success) {
            toast.success('Вы вошли в систему!!')
            dispatch({ type: LOGIN_USER_SUCCESS, payload: data.user })
            dispatch({ type: SET_LOGIN_CHECKED })
            setCookie('accessToken', data.accessToken.split(' ')[1]);
            setCookie('refreshToken', data.refreshToken)         
            navigate(`${fromPage}`)

        }


    } catch (error) {
        dispatch({ type: POST_USER_FAILED, payload: error.message })
        toast.error(error.message)

    }
}

/**
 * Функция выхода
 * @param {Notifaction} toast 
 * @param {Hook} navigate 
 * @returns 
 */

export const logout = (toast, navigate) => async dispatch => {

    try {

        const res = await fetch(API_USER_LOGOUT, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ token: getCookie('refreshToken') })
        })

        checkResponse(res)

        const data = await res.json()       

        if (data.success) {
            toast.success('Вы вышли из из системы!')
            dispatch({ type: LOGOUT_USER })
            deleteAllCookies()
            window.localStorage.removeItem('user')
            navigate('/login')

        }


    } catch (error) {
        console.log(error.message)
    }

}

/**
 * Функция обновления токена
 * @returns token
 */
const updateToken = () => async dispatch => {

    try {
        const res = await fetch(API_USER_TOKEN,{
            method:'POST',
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({token:getCookie('refreshToken')})
        })

        const data = await res.json()

        if (data.success) {
            setCookie('accessToken', data.accessToken.split(' ')[1]);
            setCookie('refreshToken', data.refreshToken);      
         

        }

    } catch (error) {
        console.log(error.message)
    }


}

/**
 * Функция получения пользователя из БД
 * @returns 
 */
export const getUser = () => async dispatch => {

    dispatch({ type: GET_USER_REQUEST })
    try {
        const res = await fetch(API_GET_USER, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: getCookie('accessToken')
                    ? `Bearer ${getCookie('accessToken')}`
                    : ''
            }
        })

        checkResponse(res)

        const data = await res.json()

        if (data.success) {
            dispatch({ type: GET_USER_INFO, payload: data.user })


        }

    } catch (error) {  
        if (error.message === 'jwt expired' || 'jwt malformed'){
            dispatch(updateToken())
        }
        console.log(error.message)
        dispatch({ type: GET_USER_FAILED, payload: error.message })
    }

}



/**
 * Функция обновления данных 
 * @param {Object} form Данные от клиента
 * @param {Notificaton} toast 
 * @returns data.user Новые данные 
 */

export const updateUserInfo = (form, toast) => async dispatch => {

    dispatch({ type: UPDATE_USER_INFO_REQUEST })
    try {
        const res = await fetch(API_GET_USER, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Authorization: getCookie('accessToken')
                    ? `Bearer ${getCookie('accessToken')}`
                    : ''
            },
            body: JSON.stringify({ ...form })
        })

        checkResponse(res)

        const data = await res.json()



        if (data?.success) {
            toast.success('Данные успешно обновлены!!')
            dispatch({ type: UPDATE_USER_INFO, payload: data.user })

        }

    } catch (error) {
        console.log(error.message)
        dispatch({ type: UPDATE_USER_INFO_FAILED, payload: error.message })
    }


}


/**
 * Функция сброса пароля
 * @param {String} email 
 * @param {Hook} navigate 
 * @param {Notification} toast 
 * @returns 
 */

export const fargotPassword = (email, navigate) => async dispatch => {

    dispatch({ type: FARGOT_PASSWORD_REQUEST })

    try {

        const data = await getData(API_USER_RECOVER, 'POST', { email })
          

        if (data.success) {
            toast.success('Это успех!!')
            dispatch({ type: FARGOT_PASSWORD_SUCCESFLY, payload: data?.message })
            navigate('/reset-password')
        }
    } catch (error) {
        console.log(error.message)
        dispatch({ type: FARGOT_PASSWORD_FAILED, payload: error.message })
    }


}

/**
 * Функия обновления пароля
 * @param {string} password 
 * @param {notification} toast 
 * @param {hook} navigate 
 * @returns 
 */

export const resetPassword = (password, toast, navigate) => async dispatch => {

    try {

        const data = await getData(API_USER_RESET, 'POST', { password: password, token: getCookie('accessToken') })

        if (data.success) {
            toast.success('Пароль изменен!')
            dispatch({ type: RESET__PASSWORD_SUCCESSFLY })
            navigate('/login')
        }


    } catch (error) {
        console.log(error.message)
        dispatch({ type: RESET__PASSWORD_FAILED })

    }

}
