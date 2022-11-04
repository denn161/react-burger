import {
    API_GET_USER,
    API_USER_LOGIN, API_USER_LOGOUT,
    API_USER_RECOVER, API_USER_REGISTER,
    API_USER_RESET,
    API_USER_TOKEN,
    INGREDIENTS_URL,
    ORDERS_URL
} from "../../constants"
import { deleteAllCookies, getCookie, setCookie } from "../../utils/cookies"
import { checkResponse, getData } from "../../utils/data"


// Получение ингридиентов
export const GET_INGREDIENTS_SUCCES = 'GET_INGREDIENTS_SUCCES'
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR'

// Получение заказа
export const POST_ORDER_REQUEST = 'GET_ORDER_REQUEST'
export const POST_ORDER_SUCCESS = 'GET_ORDER_SUCCESS'
export const POST_ORDER_ERROR = 'GET_ORDER_ERROR'
export const SET_LOGIN_CHECKED = 'SET_LOGIN_CHECKED'
export const CLEAR_ORDER_NUMBER = 'CLEAR_ORDER_NUMBER,'

// Ингредиенты конструктора

export const GET_INGREDIENTS_CONSTRUCTOR = 'GET_INGREDIENTS_CONSTRUCTOR';
export const POST_BUN_CONSTRUCTOR = 'POST_BUN_CONSTRUCTOR';
export const POST_FILLING_CONSTRUCTOR = 'POST_ELEMENT_CONSTRUCTOR';
export const DELETE_FILLING_CONSTRUCTOR = 'DELETE_ELEMENT_CONSTRUCTOR';
export const UPDATE_LIST_FILLINGS = 'UPDATE_LIST_FILLINGS';

// Открытие и закрытие модалки

export const OPEN_MODAL_INGREDIENT = 'OPEN_MODAL_INGREDIENT';
export const CLOSE_MODAL = 'CLOSE_MODAL_INGREDIENT';
export const OPEN_MODAL_ORDER = 'OPEN_MODAL_ORDER';
export const CLEAR_ORDER_LIST = 'CLEAR_ORDER_LIST';

//Post Users

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

//passwordS

export const FARGOT_PASSWORD_SUCCESFLY = 'FARGOT_PASSWORD_SUCCESFLY';

export const FARGOT_PASSWORD_REQUEST = 'FARGOT_PASSWORD_REQUEST';

export const FARGOT_PASSWORD_FAILED = 'FARGOT_PASSWORD_FAILED';

export const SET_FARGOT_CHECKED = 'SET_FARGOT_CHECKED';


export const RESET__PASSWORD_SUCCESSFLY = 'RESET_PASSWORD_SUCCESSFLY';

export const RESET__PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';




// Actions Get All Ingridients

export const getIngredients = () => async dispatch => {

    dispatch({ type: GET_INGREDIENTS_REQUEST })
    try {
        const { data } = await getData(INGREDIENTS_URL)
        dispatch({ type: GET_INGREDIENTS_SUCCES, payload: data })

    } catch (error) {
        console.log(error.message)
        dispatch({ type: GET_INGREDIENTS_ERROR, error: error.message })

    }

}

//Actions Get Order Number

export const getOrderNumber = (burgersIds) => async dispatch => {

    dispatch({ type: POST_ORDER_REQUEST })
    try {

    const { order, success } = await getData(ORDERS_URL, 'POST', { ingredients: [...burgersIds] })
        if (success) {
            dispatch({ type: POST_ORDER_SUCCESS, payload: order })


        }

    } catch (error) {
        console.log(error.message)
        dispatch({ type: POST_ORDER_ERROR, payload: error.message })

    }

}

//actions Constructor

export const getElementsByConstructor = () => ({
    type: GET_INGREDIENTS_CONSTRUCTOR
})

export const addBunByConstructor = (bun) => ({
    type: POST_BUN_CONSTRUCTOR,
    payload: bun
})

export const addFillingConstructor = (item) => ({
    type: POST_FILLING_CONSTRUCTOR,
    payload: item
})

export const deleteFillingOfConstructor = (itemId) => ({
    type: DELETE_FILLING_CONSTRUCTOR,
    payload: itemId
})


//GET Ingridient of Modal
export const openModalIngredient = (element) => ({
    type: OPEN_MODAL_INGREDIENT,
    payload: element
})


export const closeModal = () => dispatch => {
    dispatch({ type: CLOSE_MODAL })
    dispatch({ type: CLEAR_ORDER_LIST })
}

////////////////////Users/////////////////////////////////////////////////////

//register

export const registerUser = (body, navigate, toast) => async dispatch => {

    dispatch({ type: POST_USER_REQUEST, payload: body })
    try {

        const data = await getData(API_USER_REGISTER, 'POST', { ...body })

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

//login

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
            throw new Error('Что-то пошло не так...')
        }

        const data = await res.json()


        if (data.success) {
            toast.success('Вы вошли в систему!!')
            dispatch({ type: LOGIN_USER_SUCCESS, payload: data.user })
            dispatch({type:SET_LOGIN_CHECKED})
            setCookie('accessToken', data.accessToken.split(' ')[1]);
            setCookie('refreshToken', data.refreshToken);
            navigate(`${fromPage}`)
        }

    } catch (error) {
        dispatch({ type: POST_USER_FAILED, payload: error.message })
        toast.error('Что-то пошло не так...')

    }
}


//logout
export const logout = (toast, navigate) => async dispatch => {

    try {
        const data = await getData(API_USER_LOGOUT, 'POST', {
            token: getCookie('refreshToken')
        })
        if (data.success) {
            toast.success('Вы вышли из из системы!')
            dispatch({ type: LOGOUT_USER })
            deleteAllCookies()
            navigate('/login')

        }

    } catch (error) {
        console.log(error.message)
    }

}

//updateToken

const updateToken = () => async dispatch => {

    try {

        const data = await getData(API_USER_TOKEN, 'POST', {
            token: getCookie('refreshToken')
        })

        if (data.success) {
            setCookie('accessToken', data.accessToken.split(' ')[1]);
            setCookie('refreshToken', data.refreshToken);
        }

    } catch (error) {
        console.log(error.message)
    }


}


//getUser

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
        if (!res.status.ok) {
            dispatch(updateToken())
        }
        checkResponse(res)
        const data = await res.json()


        if (data.success) {
            dispatch({ type: GET_USER_INFO, payload: data.user })

        }

    } catch (error) {
        console.log(error.message)
        dispatch({ type: GET_USER_FAILED, payload: error.message })
    }

}



//update user info

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

        if (data.success) {
            toast.success('Данные успешно обновлены!!')
            dispatch({ type: UPDATE_USER_INFO, payload: data.user })
        }

    } catch (error) {
        console.log(error.message)
        dispatch({ type: UPDATE_USER_INFO_FAILED, payload: error.message })
    }


}

//Fargot Password
export const fargotPassword = (email, navigate, toast) => async dispatch => {

    dispatch({ type: FARGOT_PASSWORD_REQUEST })

    try {

        const data = await getData(API_USER_RECOVER, 'POST', { email })
        console.log(data)

        if (data.success) {
            toast.success('Это успех!!')
            dispatch({ type: FARGOT_PASSWORD_SUCCESFLY, payload: data?.message })
            navigate('/reset')
        }
    } catch (error) {
        console.log(error.message)
        dispatch({ type: FARGOT_PASSWORD_FAILED, payload: error.message })
    }


}



//Reset Password
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




