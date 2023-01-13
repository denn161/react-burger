

import { v4 as uuidv4 } from 'uuid'
import { BurgerIcon, Logo, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { getCookie } from "../utils/cookies";
import { ILinksHeaderEl, ITabsElement } from "./types";

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
        path: '/fild',
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




