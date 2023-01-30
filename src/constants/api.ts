import { getCookie } from "../utils/cookies"

const API_URL = 'https://norma.nomoreparties.space/api'

export const INGREDIENTS_URL: `${typeof API_URL}/ingredients` = `${API_URL}/ingredients`

export const ORDERS_URL: `${typeof API_URL}/orders` = `${API_URL}/orders`

export const API_USER_REGISTER: `${typeof API_URL}/auth/register` = `${API_URL}/auth/register`

export const API_USER_LOGIN: `${typeof API_URL}/auth/login` = `${API_URL}/auth/login`

export const API_USER_TOKEN: `${typeof API_URL}/auth/token` = `${API_URL}/auth/token`

export const API_USER_LOGOUT: `${typeof API_URL}/auth/logout` = `${API_URL}/auth/logout`

export const API_USER_RESET: `${typeof API_URL}/password-reset/reset` = `${API_URL}/password-reset/reset`

export const API_USER_RECOVER: `${typeof API_URL}/password-reset` = `${API_URL}/password-reset`

export const API_GET_USER: `${typeof API_URL}/auth/user` = `${API_URL}/auth/user`

export const accessToken: string | undefined = getCookie('accessToken');

export const refreshToken: string | undefined = getCookie('refreshToken');
