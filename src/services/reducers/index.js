import { combineReducers } from "redux";
import { constructorReducer } from "./constructorReducer";
import { ingredientsReducer } from "./ingredientsReducer";
import { ingredientAndOrderReducer } from "./ordersReducer";
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    items: constructorReducer,
    ingredient: ingredientAndOrderReducer,
    user: userReducer

})