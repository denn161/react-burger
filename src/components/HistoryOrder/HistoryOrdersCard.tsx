import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import IngredientIcon from '../OrderFeed/IngredientIcon'
import { TOrderItemInProps } from '../OrderFeed/types'
import './history-orders.scss'

interface IHistoryOrdersCard {
    order: TOrderItemInProps
}

const HistoryOrdersCard = ({ order }: IHistoryOrdersCard) => {

    const location = useLocation()

    const className = order.status === 'Выполнен' ? 'history__item-done history__item-status'

        : 'history__item-status'

    return (
        <li className='history__item'>
            <Link to={`/profile/orders/${order?.numberOrder}`}
                className='history__link' state={{ backgroundHistory: location, orderHistory: order }} >
                <div className='history__item-header'>
                    <span className='history__item-number'>#{order?.numberOrder}</span>
                    <time className="text text_type_main-default text_color_inactive">
                        {order?.time}
                    </time></div>
                <h2 className='history__item-title'>
                    {order?.name}</h2>
                <p className={className}>{order.status}</p>
                <div className='history__item-ingredients'>
                    <ul className='history__item-list'>
                        {order?.ingredientsImg?.map(({ img, key }) =>
                            <IngredientIcon img={img} key={key} />
                        )}
                        <span className='history__item-count'>{order?.remainingElements}</span>
                    </ul>
                    <div className='history__item-total'>
                        <span className='history__item-summ' >{order?.total}</span>
                        <span className='history__item-icon'><CurrencyIcon type='primary' /></span>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default HistoryOrdersCard