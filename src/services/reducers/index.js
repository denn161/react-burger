import { combineReducers } from "redux";
import { getCookie } from "../../utils/cookies";
import {
    GET_INGREDIENTS_REQUEST,
    GET_INGREDIENTS_SUCCES,
    GET_INGREDIENTS_ERROR,
    POST_ORDER_REQUEST,
    POST_ORDER_SUCCESS,
    POST_ORDER_ERROR,
    GET_INGREDIENTS_CONSTRUCTOR,
    POST_BUN_CONSTRUCTOR,
    POST_FILLING_CONSTRUCTOR,
    DELETE_FILLING_CONSTRUCTOR,
    OPEN_MODAL_INGREDIENT,
    CLOSE_MODAL,
    UPDATE_LIST_FILLINGS,
    CLEAR_ORDER_LIST,
    POST_USER_REQUEST,
    POST_USER_SUCCES,
    POST_USER_FAILED,
    LOGIN_USER,
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
} from "../actions";

const stateIngridients = {
    ingredients: [],
    loading: false,
    error: ''
}

export const ingredientsReduce = (state = stateIngridients, { type, payload }) => {

    switch (type) {
        case GET_INGREDIENTS_REQUEST:
            return { ...state, loading: true }

        case GET_INGREDIENTS_SUCCES:
            return {
                ...state,
                loading: false,
                ingredients: [...payload]


            }
        case GET_INGREDIENTS_ERROR:
            return { ...state, loading: false, error: payload }

        default:
            return state
    }
}
const stateConstructor = {
    bun: {},
    fillings: [],
    isFilling: false,
    isBun: false
}

export const constructorReducer = (state = stateConstructor, { type, payload }) => {

    switch (type) {
        case GET_INGREDIENTS_CONSTRUCTOR:
            return { ...state }
        case POST_BUN_CONSTRUCTOR:
            return {
                ...state,
                bun: { ...state.bun, ...payload },
                isFilling: true,
                isBun: true
            }
        case POST_FILLING_CONSTRUCTOR:
            return {
                ...state,
                fillings: [...state.fillings, { ...payload }],
                isFilling: true
            }

        case UPDATE_LIST_FILLINGS:
            return {
                ...state,
                fillings: payload
            }
        case DELETE_FILLING_CONSTRUCTOR:
            return {
                ...state,
                fillings: state.fillings.filter((item) => item.key !== payload)
            }
        case CLEAR_ORDER_LIST:
            return stateConstructor;

        default:
            return state;
    }
}

const stateIngredientAndOrder = {
    ingredient: {},
    order: {},
    loading: false,
    isLogin:false,
    isIngredientModal: false,
    isOrderModal: false

}

export const ingredientAndOrderReducer = (state = stateIngredientAndOrder, { type, payload }) => {
    switch (type) {
        case OPEN_MODAL_INGREDIENT:
            return {
                ...state,
                ingredient: { ...state.ingredient, ...payload },
                isIngredientModal: true

            }

        case POST_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case POST_ORDER_SUCCESS:
            return {
                ...state,
                order: payload,
                loading: false,
                isOrderModal: true,
                isIngredientModal: false
            }

        case POST_ORDER_ERROR:
            return {
                ...state,
                loading: false,
                error: payload
            }
        case SET_LOGIN_CHECKED:
             return {
                 ...state,
                 isLogin:true
             }    

        case CLOSE_MODAL:
            return stateIngredientAndOrder;


        default:
            return state;
    }
}

const initialUserState = {
    user: {},
    loading: false,
    isError: false,
    isFargot:false,
    auth: false,
    isStatus: false,
    message: '',
    token:getCookie('accessToken')?getCookie('accessToken'):null
}

const userReducer = (state = initialUserState, { type, payload }) => {

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
                auth: true,
                isStatus: true
            }
        case POST_USER_FAILED:
            return {
                ...state,
                isError: true,
                auth: false,
                loading: false,
                isStatus: false
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
                isStatus: true

            }
        case LOGIN_USER_FAILED:
            return {
                ...state,
                isError: true,
                isFargot:true,
                isStatus: false
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
                isStatus: true,
                auth:true

            }
        case GET_USER_FAILED:
            return {
                ...state,
                isError: true,
                loading: false,
                isStatus: false
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
                auth: true,
                isStatus: true
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
                    loading:true
                } 
         case FARGOT_PASSWORD_SUCCESFLY:
              return {
                ...state,
                 isFargot:true,
                 message:payload,
                 loading:false

              }
          case FARGOT_PASSWORD_FAILED:
               return {
                ...state,
                 isError:true,
                 loading:false
               }
            
           case SET_FARGOT_CHECKED:
             return {
                 ...state,
                 isFargot:true
             }    



        case LOGOUT_USER:
            return initialUserState


        default:
            return state
    }


}





export const rootReducer = combineReducers({
    ingredients: ingredientsReduce,
    items: constructorReducer,
    ingredient: ingredientAndOrderReducer,
    user: userReducer

})