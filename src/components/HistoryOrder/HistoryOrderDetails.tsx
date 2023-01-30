import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import IngredientIcon from '../OrderFeed/IngredientIcon'
import { TOrderDetail } from '../OrderFeed/types'
import styles from './HistoryOrder.module.scss'


interface IHistoryOrderProps {
    order: TOrderDetail
}

const HistoryOrderDetails = ({ order }: IHistoryOrderProps) => {


    const className = order?.status === 'Выполнен' ? `${styles.order__done}` : `${styles.order__pending}`

    return (
        <div className={styles.order__modal}>
            <div className={styles.order__info}>
                <p className={styles.order__number}>#{order?.numberOrder}</p>
                <h2 className={styles.order__name}>{order?.name}</h2>
                <p className={className}>{order?.status}</p>
            </div>
            <div className={styles.order__structure}>
                <p className={styles.list__title}>Состав:</p>
                <ul className={styles.order__list}>
                    {order?.qtyIngridents.map((item) => {
                        return (<li key={item.key} className={styles.order__item}>
                            <div className={styles.order__names}>
                                <IngredientIcon img={item.img} />
                                <p className={styles.order__title}>{item.name}</p>
                            </div>
                            <div className={styles.order__prices}>
                                <span className={styles.order__count}>
                                    {item.count}

                                </span>
                                x
                                <span className={styles.order__price}>
                                    {item.price}
                                </span>
                                <CurrencyIcon type='primary' />
                            </div>
                        </li>)
                    }
                    )}
                </ul>
            </div>
            <div className={styles.order__footer}>
                <p className={styles.order__time}>
                    {order?.time}
                </p>
                <p className={styles.order__total}>
                    {order?.total}
                    <CurrencyIcon type='primary' />
                </p>
            </div>
        </div>
    )

}

export default HistoryOrderDetails