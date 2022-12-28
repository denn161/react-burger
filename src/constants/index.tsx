

import { v4 as uuidv4 } from 'uuid'
import { BurgerIcon, Logo, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { getCookie } from "../utils/cookies";
import { ILinksHeaderEl, ITabsElement } from "./types";
import {
    TAPI_URL,
    TAPI_GET_USER,
    TAPI_USER_LOGIN,
    TAPI_USER_LOGOUT,
    TAPI_USER_RECOVER,
    TAPI_USER_REGISTER,
    TAPI_USER_RESET,
    TAPI_USER_TOKEN, TINGREDIENTS_URL, TORDERS_URL
} from './api';


// export const ITEM_PROP_TYPE = PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     proteins: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     carbohydrates: PropTypes.number.isRequired,
//     calories: PropTypes.number.isRequired,
//     price: PropTypes.number.isRequired,
//     image: PropTypes.string.isRequired,
//     image_mobile: PropTypes.string.isRequired,
//     image_large: PropTypes.string.isRequired,
//     __v: PropTypes.number.isRequired,
// });




export const TABS: Array<ITabsElement> = [
    {
        value: 'bun',
        name: 'Булки'
    },
    {
        value: 'sauce',
        name: 'Соусы'
    },
    {
        value: 'main',
        name: 'Начинки'
    }
]


export const linksHeader: Array<ILinksHeaderEl> = [
    {
        key: uuidv4(),
        text: 'Конструктор',
        path: '/home',
        icon: <BurgerIcon type="secondary" />

    },
    {
        key: uuidv4(),
        text: 'Лента заказов',
        path: '/listorders',
        icon: <ListIcon type="secondary" />

    },
    {
        key: uuidv4(),
        text: '',
        path: '/',
        icon: <Logo />

    },
    {
        key: uuidv4(),
        text: 'Личный кабинет',
        path: '/profile',
        icon: <ProfileIcon type="secondary" />

    }

]

interface IProfilesLinkEl {
    id: string
    to: string
    str: string
    title: string
}

export const profilesLink: Array<IProfilesLinkEl> = [
    {
        id: uuidv4(),
        to: '/profile',
        str: 'profile',
        title: 'Профиль'
    },
    {
        id: uuidv4(),
        to: 'orders',
        str: 'profile/orders',
        title: 'История заказов'
    }
]

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



