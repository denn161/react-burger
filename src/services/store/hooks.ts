
import { TypedUseSelectorHook, useSelector as selectorHook, useDispatch as dispatchHook } from "react-redux";
import type {} from 'redux-thunk/extend-redux'
import { AppDispatch, TAppDispatch, TRootState } from "./types";




export const useSelector: TypedUseSelectorHook<TRootState> = selectorHook

export const useDispatch:()=>AppDispatch=dispatchHook


