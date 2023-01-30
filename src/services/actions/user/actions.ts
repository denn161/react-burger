import {
    POST_USER_REQUEST
    , POST_USER_SUCCES,
    POST_USER_FAILED,
    LOGIN_USER_FAILED,
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    SET_STATUS_REQUEST,
    SET_FARGOT_CHECKED,
    SET_LOGIN_CHECKED,
    GET_USER_FAILED,
    GET_USER_INFO,
    GET_USER_REQUEST,
    UPDATE_USER_INFO,
    UPDATE_USER_INFO_FAILED,
    UPDATE_USER_INFO_REQUEST,
    FARGOT_PASSWORD_FAILED,
    FARGOT_PASSWORD_REQUEST,
    FARGOT_PASSWORD_SUCCESFLY,
    RESET__PASSWORD_FAILED,
    RESET__PASSWORD_SUCCESSFLY
} from './constants'


export interface IPostSuccessResponse {
    accessToken: string
    refreshToken: string
    success: boolean
    user: { email: string, name: string }
}


export interface IBody {
    email?: string
    password?: string
    name?: string
}

//interfaces User

interface IPostUserRequest {
    readonly type: typeof POST_USER_REQUEST
    readonly payload: IBody
}

interface IPostUserSuccess {
    readonly type: typeof POST_USER_SUCCES
    readonly payload: IBody

}

interface IPostUserFailed {
    readonly type: typeof POST_USER_FAILED
    readonly payload: unknown
}

interface ILoginReguest {
    readonly type: typeof LOGIN_USER_REQUEST
}

interface ILoginUserSuccess {
    readonly type: typeof LOGIN_USER_SUCCESS
    readonly payload: IBody
}

interface ILoginUserFailed {
    readonly type: typeof LOGIN_USER_FAILED
    readonly payload: string
}

interface ISetLoginChecked {
    readonly type: typeof SET_LOGIN_CHECKED
}

interface ILogoutUser {
    readonly type: typeof LOGOUT_USER
}

interface IGetUserRequest {
    readonly type: typeof GET_USER_REQUEST
}

interface IGetUserInfo {
    readonly type: typeof GET_USER_INFO
    readonly payload: IBody
}

interface IGetUserFailed {
    readonly type: typeof GET_USER_FAILED
    readonly payload: string
}


interface IUpdateUserInfoRequest {
    readonly type: typeof UPDATE_USER_INFO_REQUEST

}

interface IUpdateUserInfoSuccess {
    readonly type: typeof UPDATE_USER_INFO
    readonly payload: IBody
}

interface IUpdateUserInfoFailed {
    readonly type: typeof UPDATE_USER_INFO_FAILED
    readonly payload: string
}


interface IFargotPasswordUserRequest {
    readonly type: typeof FARGOT_PASSWORD_REQUEST
}

interface IFargotPasswordUserSuccess {
    readonly type: typeof FARGOT_PASSWORD_SUCCESFLY
    readonly payload: string
}

interface IFargotPasswordUserFailed {
    readonly type: typeof FARGOT_PASSWORD_FAILED
    readonly payload: string
}

interface IsetFargotChecked {
    readonly type: typeof SET_FARGOT_CHECKED
}


interface IResetPasswordSuccess {
    readonly type: typeof RESET__PASSWORD_SUCCESSFLY

}

interface IResetPasswordFailed {
    readonly type: typeof RESET__PASSWORD_FAILED
    readonly payload: string
}


export type TUserActions = IPostUserRequest | IPostUserSuccess | IPostUserFailed | ILoginReguest
    | ILoginUserSuccess | ILoginUserFailed | ILogoutUser | IUpdateUserInfoSuccess | IUpdateUserInfoRequest
    | IUpdateUserInfoFailed | IFargotPasswordUserRequest | IFargotPasswordUserSuccess | IFargotPasswordUserFailed
    | IResetPasswordSuccess | IResetPasswordFailed | IGetUserInfo | IGetUserRequest | IGetUserFailed
    | ISetLoginChecked | IsetFargotChecked


//actionsUser


//registerActions

export const postUserRequest = (body: IBody): IPostUserRequest => ({
    type: POST_USER_REQUEST,
    payload: body
})

export const postUserSuccess = (user: IBody): IPostUserSuccess => ({
    type: POST_USER_SUCCES,
    payload: user
})

export const postUserFailed = (message: unknown): IPostUserFailed => ({
    type: POST_USER_FAILED,
    payload: message
})



//loginActions 

export const loginUserRequest = (): ILoginReguest => ({
    type: LOGIN_USER_REQUEST
})

export const loginUserSuccess = (body: IBody): ILoginUserSuccess => ({
    type: LOGIN_USER_SUCCESS,
    payload: body
})

export const loginUserFailed = (message: string): ILoginUserFailed => ({
    type: LOGIN_USER_FAILED,
    payload: message
})


export const setLoginChecked = (): ISetLoginChecked => ({
    type: SET_LOGIN_CHECKED
})

//logoutUserAction

export const logoutUser = (): ILogoutUser => ({ type: LOGOUT_USER })

//getUserActions

export const getUserRequest = (): IGetUserRequest => ({ type: GET_USER_REQUEST })

export const getUserInfo = (body: IBody): IGetUserInfo => ({ type: GET_USER_INFO, payload: body })

export const getUserFailed = (message: string): IGetUserFailed => ({ type: GET_USER_FAILED, payload: message })

//updateUserActions 

export const updateUserInfoRequest = (): IUpdateUserInfoRequest => ({ type: UPDATE_USER_INFO_REQUEST })

export const updateUserInfoSuccess = (user: IBody): IUpdateUserInfoSuccess => ({ type: UPDATE_USER_INFO, payload: user })

export const updateUserInfoFailed = (message: string): IUpdateUserInfoFailed => ({ type: UPDATE_USER_INFO_FAILED, payload: message })


//fargotUserPasswordActions 

export const fargotPasswordRequest = (): IFargotPasswordUserRequest => ({ type: FARGOT_PASSWORD_REQUEST })

export const fargotPasswordSuccess = (message: string): IFargotPasswordUserSuccess => ({
    type: FARGOT_PASSWORD_SUCCESFLY,
    payload: message
})

export const setFargotChecked = (): IsetFargotChecked => ({
    type: SET_FARGOT_CHECKED
})

export const fargotPasswordFailed = (message: string): IFargotPasswordUserFailed => ({
    type: FARGOT_PASSWORD_FAILED,
    payload: message
})


//resetPasswordUserActions 

export const resetPasswordSuccess = (): IResetPasswordSuccess => ({
    type: RESET__PASSWORD_SUCCESSFLY
})

export const resetPasswordFailed = (message: string): IResetPasswordFailed => ({
    type: RESET__PASSWORD_FAILED,
    payload: message
})