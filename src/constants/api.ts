import { getCookie } from "../utils/cookies"

const API_URL = 'https://norma.nomoreparties.space/api'

export const INGREDIENTS_URL = `${API_URL}/ingredients`

export const ORDERS_URL = `${API_URL}/orders`

export const API_USER_REGISTER = `${API_URL}/auth/register`

export const API_USER_LOGIN = `${API_URL}/auth/login`

export const API_USER_TOKEN= `${API_URL}/auth/token`

export const API_USER_LOGOUT = `${API_URL}/auth/logout`

export const API_USER_RESET = `${API_URL}/password-reset/reset`

export const API_USER_RECOVER = `${API_URL}/password-reset`

export const API_GET_USER = `${API_URL}/auth/user`

export const accessToken: string | undefined = getCookie('accessToken');

export const refreshToken: string | undefined = getCookie('refreshToken');
