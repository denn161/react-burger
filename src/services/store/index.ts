import { combineReducers } from "redux";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";
import { constructorReducer } from "../reducers/constructorReducer";
import { ingredientsReducer } from "../reducers/ingredientsReducer";
import { ingredientAndOrderReducer } from "../reducers/ordersReducer";
import { userReducer } from "../reducers/userReducer";
import { socketMiddleware } from "../middlewareSocket/middlewareSocket";
import { feedWsActions } from "../actions/wsActions/feedActions/constants";
import { wsFildReducer } from "../reducers/wsFeedReducer";



export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    items: constructorReducer,
    ingredient: ingredientAndOrderReducer,
    user: userReducer,
    fild:wsFildReducer

})

export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk,socketMiddleware(feedWsActions))))