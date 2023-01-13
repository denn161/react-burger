import { getData } from "../../utils/data"
import { ORDERS_URL} from "../../constants/api"
import { getCookie } from "../../utils/cookies"


export const POST_ORDER_REQUEST = 'GET_ORDER_REQUEST'
export const POST_ORDER_SUCCESS = 'GET_ORDER_SUCCESS'
export const POST_ORDER_ERROR = 'GET_ORDER_ERROR'
export const CLEAR_ORDER_NUMBER = 'CLEAR_ORDER_NUMBER,'
export const OPEN_MODAL_INGREDIENT = 'OPEN_MODAL_INGREDIENT';
export const CLOSE_MODAL = 'CLOSE_MODAL_INGREDIENT';
export const OPEN_MODAL_ORDER = 'OPEN_MODAL_ORDER';
export const CLEAR_ORDER_LIST = 'CLEAR_ORDER_LIST';

 


export const getOrderNumber = (burgersIds) => async dispatch => {

    dispatch({ type: POST_ORDER_REQUEST })

    try {
       
        const options = {
            method: 'POST',
            headers: {
               "Content-Type": "application/json",
               Authorization: getCookie('accessToken')
                  ? `Bearer ${getCookie('accessToken')}`
                  : ''
            },
          body: JSON.stringify({ ingredients: [...burgersIds] })
        }

        const { order, success } = await getData(ORDERS_URL,options )
        if (success) {
       dispatch({ type: POST_ORDER_SUCCESS, payload: order })


        }

    } catch (error) {
        console.log(error.message)
        dispatch({ type: POST_ORDER_ERROR, payload: error.message })

    }

}



//GET Ingridient of Modal
export const openModalIngredient = (element) => ({
    type: OPEN_MODAL_INGREDIENT,
    payload: element
})


export const closeModal = () => dispatch => {
    dispatch({ type: CLOSE_MODAL })
    dispatch({ type: CLEAR_ORDER_LIST })
}