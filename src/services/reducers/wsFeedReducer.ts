

import { stat } from "fs";
import { TwsData } from "../../types/orders";
import { FILD_CONNECTION_CLOSE, FILD_CONNECTION_CLOSED, FILD_CONNECTION_ERROR, FILD_CONNECTION_START, FILD_CONNECTION_SUCCESS, FILD_GET_MESSAGE } from "../actions/wsActions/feedActions/constants";
import { TWsFeedActions } from "../actions/wsActions/feedActions/types";

 interface IInitialState {
       isConnect: boolean
       data: TwsData | null
       connectionError: string | undefined
}


const initialState: IInitialState = {
       isConnect: false,
       data: null,
       connectionError: undefined
}


export const wsFildReducer = (state = initialState, action: TWsFeedActions): IInitialState => {
       switch (action.type) {
              case FILD_CONNECTION_START:
                     return {
                            ...state,
                            isConnect: true,
                            connectionError: ''


                     }
              case FILD_GET_MESSAGE:
                     return {
                            ...state,
                            data: action.payload
                     }
              case FILD_CONNECTION_CLOSE:
                      return{
                         ...state,
                         isConnect:false    
                      }       
              case FILD_CONNECTION_CLOSED:
                      return {
                             ...state,
                             isConnect:false
                      }
              case FILD_CONNECTION_SUCCESS:
                       return {
                             ...state,
                             isConnect:true,
                       }
              case FILD_CONNECTION_ERROR : 
              return {
                      ...state,
                      isConnect:false,
                      connectionError:action.payload
              }         
                              

              default:
                     return state

       }




}

