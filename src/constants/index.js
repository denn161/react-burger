

import PropTypes from "prop-types";

export const ITEM_PROP_TYPE = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
});

export const TABS = [
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




const API_URL = 'https://norma.nomoreparties.space/api'
export const INGREDIENTS_URL = `${API_URL}/ingredients`
export const ORDERS_URL = `${API_URL}/orders`

