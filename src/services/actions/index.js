
import { INGREDIENTS_URL, ORDERS_URL } from "../../constants"


// Получение ингридиентов
export const GET_INGREDIENTS_SUCCES = 'GET_INGREDIENTS_SUCCES'
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST'
export const GET_INGREDIENTS_ERROR = 'GET_INGREDIENTS_ERROR'

// Получение заказа
export const POST_ORDER_REQUEST = 'GET_ORDER_REQUEST'
export const POST_ORDER_SUCCESS = 'GET_ORDER_SUCCESS'
export const POST_ORDER_ERROR = 'GET_ORDER_ERROR'
export const CLEAR_ORDER_NUMBER = 'CLEAR_ORDER_NUMBER,'

// Ингредиенты конструктора

export const GET_INGREDIENTS_CONSTRUCTOR = 'GET_INGREDIENTS_CONSTRUCTOR';
export const POST_BUN_CONSTRUCTOR = 'POST_BUN_CONSTRUCTOR';
export const POST_FILLING_CONSTRUCTOR = 'POST_ELEMENT_CONSTRUCTOR';
export const DELETE_FILLING_CONSTRUCTOR = 'DELETE_ELEMENT_CONSTRUCTOR';

// Открытие и закрытие модалки
export const OPEN_MODAL_INGREDIENT = 'OPEN_MODAL_INGREDIENT';
export const CLOSE_MODAL = 'CLOSE_MODAL_INGREDIENT'

// Actions Get All Ingridients

export const getIngredients = () => async dispatch => {

    dispatch({ type: GET_INGREDIENTS_REQUEST })
    try {
        const res = await fetch(INGREDIENTS_URL);
        if (!res.ok) {
            throw new Error('Что то пошло не так ....')
        }
        const { data} = await res.json()
      dispatch({ type: GET_INGREDIENTS_SUCCES,payload:data })

    } catch (error) {
        console.log(error.message)
        dispatch({ type: GET_INGREDIENTS_ERROR, error: error.message })

    }

}

//Actions Get Order Number

export const getOrderNumber =  (burgersIds) => dispatch => {

    dispatch({ type: CLEAR_ORDER_NUMBER })
    dispatch({ type: POST_ORDER_REQUEST })
    try {
        const res =  fetch(ORDERS_URL, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ingredients: [...burgersIds] })
        })
        if (!res.ok) {
            throw new Error('Что-то пошло не так...')
        }
        const { order, success } =  res.json()
        success && dispatch({ type: POST_ORDER_SUCCESS, payload: order })

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


export const closeModal = () => ({
    type: CLOSE_MODAL
})



