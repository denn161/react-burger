import { ThunkAction } from "redux-thunk";
import { Dispatch} from "redux";
import { TApplicationActions } from "../actions/allActions";
import { store } from "./";



export type TRootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,TRootState,unknown,TApplicationActions>

export type TAppDispatch = Dispatch<TApplicationActions>

export type AppDispatch<TReturnType=void> = (action:TApplicationActions|AppThunk<TReturnType>)=>TReturnType

