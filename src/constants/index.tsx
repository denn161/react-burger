

import { v4 as uuidv4 } from 'uuid'
import { BurgerIcon, Logo, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { getCookie } from "../utils/cookies";
import { ILinksHeaderEl, ITabsElement } from "./types";
import { IIngredientElement } from '../types/constructor';
import { IOrder, TwsData } from '../types/orders';

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
        path: '/feed',
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

//Test data of JEST///////////////////////////////////////

export const ingredients = [
    {
        _id: "60d3b41abdacab0026a733c6",
        name: "Краторная булка N-200i",
        type: "bun",
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0
    },
    {
        _id: "60d3b41abdacab0026a733c7",
        name: "Флюоресцентная булка R2-D3",
        type: "bun",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "https://code.s3.yandex.net/react/code/bun-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
        __v: 0
    },
    {
        _id: "60d3b41abdacab0026a733c8",
        name: "Филе Люминесцентного тетраодонтимформа",
        type: "main",
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: "https://code.s3.yandex.net/react/code/meat-03.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
        __v: 0
    },
    {
        _id: "60d3b41abdacab0026a733c9",
        name: "Мясо бессмертных моллюсков Protostomia",
        type: "main",
        proteins: 433,
        fat: 244,
        carbohydrates: 33,
        calories: 420,
        price: 1337,
        image: "https://code.s3.yandex.net/react/code/meat-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
        __v: 0
    },
    {
        _id: "60d3b41abdacab0026a733ca",
        name: "Говяжий метеорит (отбивная)",
        type: "main",
        proteins: 800,
        fat: 800,
        carbohydrates: 300,
        calories: 2674,
        price: 3000,
        image: "https://code.s3.yandex.net/react/code/meat-04.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
        __v: 0
    },
    {
        _id: "60d3b41abdacab0026a733cb",
        name: "Биокотлета из марсианской Магнолии",
        type: "main",
        proteins: 420,
        fat: 142,
        carbohydrates: 242,
        calories: 4242,
        price: 424,
        image: "https://code.s3.yandex.net/react/code/meat-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
        __v: 0
    },
    {
        _id: "60d3b41abdacab0026a733cc",
        name: "Соус Spicy-X",
        type: "sauce",
        proteins: 30,
        fat: 20,
        carbohydrates: 40,
        calories: 30,
        price: 90,
        image: "https://code.s3.yandex.net/react/code/sauce-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
        __v: 0
    },
    {
        _id: "60d3b41abdacab0026a733cd",
        name: "Соус фирменный Space Sauce",
        type: "sauce",
        proteins: 50,
        fat: 22,
        carbohydrates: 11,
        calories: 14,
        price: 80,
        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
        __v: 0
    },
    {
        _id: "60d3b41abdacab0026a733ce",
        name: "Соус традиционный галактический",
        type: "sauce",
        proteins: 42,
        fat: 24,
        carbohydrates: 42,
        calories: 99,
        price: 15,
        image: "https://code.s3.yandex.net/react/code/sauce-03.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
        __v: 0,

    },
    {
        _id: "60d3b41abdacab0026a733cf",
        name: "Соус с шипами Антарианского плоскоходца",
        type: "sauce",
        proteins: 101,
        fat: 99,
        carbohydrates: 100,
        calories: 100,
        price: 88,
        image: "https://code.s3.yandex.net/react/code/sauce-01.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
        __v: 0
    },
    {
        _id: "60d3b41abdacab0026a733d0",
        name: "Хрустящие минеральные кольца",
        type: "main",
        proteins: 808,
        fat: 689,
        carbohydrates: 609,
        calories: 986,
        price: 300,
        image: "https://code.s3.yandex.net/react/code/mineral_rings.png",
        image_mobile: "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/mineral_rings-large.png",
        __v: 0
    },
    {
        _id: "60d3b41abdacab0026a733d1",
        name: "Плоды Фалленианского дерева",
        type: "main",
        proteins: 20,
        fat: 5,
        carbohydrates: 55,
        calories: 77,
        price: 874,
        image: "https://code.s3.yandex.net/react/code/sp_1.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sp_1-large.png",
        __v: 0
    },
    {
        _id: "60d3b41abdacab0026a733d2",
        name: "Кристаллы марсианских альфа-сахаридов",
        type: "main",
        proteins: 234,
        fat: 432,
        carbohydrates: 111,
        calories: 189,
        price: 762,
        image: "https://code.s3.yandex.net/react/code/core.png",
        image_mobile: "https://code.s3.yandex.net/react/code/core-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/core-large.png",
        __v: 0
    },
    {
        _id: "60d3b41abdacab0026a733d3",
        name: "Мини-салат Экзо-Плантаго",
        type: "main",
        proteins: 1,
        fat: 2,
        carbohydrates: 3,
        calories: 6,
        price: 4400,
        image: "https://code.s3.yandex.net/react/code/salad.png",
        image_mobile: "https://code.s3.yandex.net/react/code/salad-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/salad-large.png",
        __v: 0
    },
    {
        _id: "60d3b41abdacab0026a733d4",
        name: "Сыр с астероидной плесенью",
        type: "main",
        proteins: 84,
        fat: 48,
        carbohydrates: 420,
        calories: 3377,
        price: 4142,
        image: "https://code.s3.yandex.net/react/code/cheese.png",
        image_mobile: "https://code.s3.yandex.net/react/code/cheese-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/cheese-large.png",
        __v: 0
    }
]


export const bunElement = ingredients.find((item) => item.type === 'bun') as IIngredientElement

export const fillingsElemnts = ingredients.filter((item) => item.type === 'bun').map((el) => {
    return { ...el, key: el._id }
}) as Array<IIngredientElement>

export const fillingId: string = "60d3b41abdacab0026a733ce"

export const orderElement: IOrder = {

    ingredients: [
        {
            _id: "60d3b41abdacab0026a733cd",
            name: "Соус фирменный Space Sauce",
            type: "sauce",
            proteins: 50,
            fat: 22,
            carbohydrates: 11,
            calories: 14,
            price: 80,
            image: "https://code.s3.yandex.net/react/code/sauce-04.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            __v: 0,
            key: "60d3b41abdacab0026a733cd"
        },
        {
            _id: "60d3b41abdacab0026a733ce",
            name: "Соус традиционный галактический",
            type: "sauce",
            proteins: 42,
            fat: 24,
            carbohydrates: 42,
            calories: 99,
            price: 15,
            image: "https://code.s3.yandex.net/react/code/sauce-03.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-03-large.png",
            __v: 0,
            key: "60d3b41abdacab0026a733ce"
        },
        {
            _id: "60d3b41abdacab0026a733cf",
            name: "Соус с шипами Антарианского плоскоходца",
            type: "sauce",
            proteins: 101,
            fat: 99,
            carbohydrates: 100,
            calories: 100,
            price: 88,
            image: "https://code.s3.yandex.net/react/code/sauce-01.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
            __v: 0,
            key: "60d3b41abdacab0026a733cf"
        },
        {
            _id: "60d3b41abdacab0026a733c8",
            name: "Филе Люминесцентного тетраодонтимформа",
            type: "main",
            proteins: 44,
            fat: 26,
            carbohydrates: 85,
            calories: 643,
            price: 988,
            image: "https://code.s3.yandex.net/react/code/meat-03.png",
            image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
            __v: 0,
            key: "60d3b41abdacab0026a733c8",
        },
        {
            _id: "60d3b41abdacab0026a733c9",
            name: "Мясо бессмертных моллюсков Protostomia",
            type: "main",
            proteins: 433,
            fat: 244,
            carbohydrates: 33,
            calories: 420,
            price: 1337,
            image: "https://code.s3.yandex.net/react/code/meat-02.png",
            image_mobile: "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/meat-02-large.png",
            __v: 0,
            key: "60d3b41abdacab0026a733c9",
        }
    ],
    _id: "63ee2235936b17001be5e562",
    owner: {
        name: "denn161",
        email: "denn123161@yandex.ru",
        createdAt: "2022-12-28T18:43:38.989Z",
        updatedAt: "2023-01-05T19:43:13.160Z"
    },
    status: "done",
    name: "Люминесцентный бессмертный space антарианский традиционный-галактический бургер",
    createdAt: "2023-02-16T12:31:49.030Z",
    updatedAt: "2023-02-16T12:31:49.404Z",
    number: 40926,
    price: 2508
}

export const wsData:TwsData = {
    
    "success": true,
    "orders": [
        {
            "_id": "63ee2425936b17001be5e570",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733d4",
                "60d3b41abdacab0026a733ca",
                "60d3b41abdacab0026a733cd"
            ],
            "status": "done",
            "name": "Астероидный space флюоресцентный метеоритный бургер",
            "createdAt": "2023-02-16T12:40:05.867Z",
            "updatedAt": "2023-02-16T12:40:06.268Z",
            "number": 40928
        },
        {
            "_id": "63ee22af936b17001be5e565",
            "ingredients": [
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cf",
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733cd"
            ],
            "status": "done",
            "name": "Space краторный антарианский бургер",
            "createdAt": "2023-02-16T12:33:51.354Z",
            "updatedAt": "2023-02-16T12:33:51.745Z",
            "number": 40927
        },
        {
            "_id": "63ee2235936b17001be5e562",
            "ingredients": [
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733ce",
                "60d3b41abdacab0026a733cf",
                "60d3b41abdacab0026a733c8",
                "60d3b41abdacab0026a733c9"
            ],
            "status": "done",
            "name": "Люминесцентный бессмертный space антарианский традиционный-галактический бургер",
            "createdAt": "2023-02-16T12:31:49.030Z",
            "updatedAt": "2023-02-16T12:31:49.404Z",
            "number": 40926
        },
        {
            "_id": "63ee18f4936b17001be5e54d",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733d1",
                "60d3b41abdacab0026a733cb",
                "60d3b41abdacab0026a733c9",
                "60d3b41abdacab0026a733c9",
                "60d3b41abdacab0026a733cd"
            ],
            "status": "done",
            "name": "Фалленианский флюоресцентный бессмертный space био-марсианский бургер",
            "createdAt": "2023-02-16T11:52:20.757Z",
            "updatedAt": "2023-02-16T11:52:21.198Z",
            "number": 40925
        },
        {
            "_id": "63ee06c9936b17001be5e510",
            "ingredients": [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733cc",
                "60d3b41abdacab0026a733c6"
            ],
            "status": "done",
            "name": "Spicy краторный бургер",
            "createdAt": "2023-02-16T10:34:49.776Z",
            "updatedAt": "2023-02-16T10:34:50.186Z",
            "number": 40924
        },
        {
            "_id": "63edca62936b17001be5e447",
            "ingredients": [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733d4",
                "60d3b41abdacab0026a733c6"
            ],
            "status": "done",
            "name": "Астероидный краторный бургер",
            "createdAt": "2023-02-16T06:17:06.338Z",
            "updatedAt": "2023-02-16T06:17:06.765Z",
            "number": 40923
        },
        {
            "_id": "63edc8aa936b17001be5e445",
            "ingredients": [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733d4",
                "60d3b41abdacab0026a733c6"
            ],
            "status": "done",
            "name": "Астероидный краторный бургер",
            "createdAt": "2023-02-16T06:09:46.826Z",
            "updatedAt": "2023-02-16T06:09:47.194Z",
            "number": 40922
        },
        {
            "_id": "63edc3c3936b17001be5e440",
            "ingredients": [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733d4",
                "60d3b41abdacab0026a733c6"
            ],
            "status": "done",
            "name": "Астероидный краторный бургер",
            "createdAt": "2023-02-16T05:48:51.198Z",
            "updatedAt": "2023-02-16T05:48:51.579Z",
            "number": 40921
        },
        {
            "_id": "63edbf7a936b17001be5e437",
            "ingredients": [
                "60d3b41abdacab0026a733c6",
                "60d3b41abdacab0026a733d4",
                "60d3b41abdacab0026a733c6"
            ],
            "status": "done",
            "name": "Астероидный краторный бургер",
            "createdAt": "2023-02-16T05:30:34.677Z",
            "updatedAt": "2023-02-16T05:30:35.043Z",
            "number": 40920
        },
        {
            "_id": "63ed6fc2936b17001be5e3e1",
            "ingredients": [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733c7"
            ],
            "status": "done",
            "name": "Флюоресцентный бургер",
            "createdAt": "2023-02-15T23:50:26.169Z",
            "updatedAt": "2023-02-15T23:50:26.593Z",
            "number": 40919
        },

    ],
    "total": 40837,
    "totalToday": 62
}










////////////////////////////////////////////End///////////////////////////////



///Slice of Feed Component and OrderHistory component/////////////////////
export const MAX_SLICE_LENGTH = 4;

export const FEED_MAX_ORDERS_NUMBER = 20



