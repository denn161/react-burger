import React, { useEffect, useRef } from 'react'
import { openModalHistoryOrder } from '../../services/actions/orderandIngredient'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch } from '../../services/store/hooks'
import IngredientIcon from '../OrderFeed/IngredientIcon'
import { TOrderItemInProps } from '../OrderFeed/types'
import styles from './HistoryOrder.module.scss'


interface IModalHistoryOrderProps {
    order?: TOrderItemInProps

}

const ModalHistoryOrder = ({ order }: IModalHistoryOrderProps) => {

    const dispatch = useDispatch()

    const numberRef = useRef<HTMLParagraphElement | null>(null)

    const className = order?.status === 'Выполнен' ? `${styles.order__done}` : `${styles.order__pending}`


    useEffect(() => {

        if (order) {
            numberRef?.current?.classList.add(`${styles.left}`)
            dispatch(openModalHistoryOrder(order))
        }

        return () => {
            numberRef?.current?.classList.remove(`${styles.left}`)
        }

    }, [dispatch, order])




    return (
        <div className={styles.order__modal}>
            <div className={styles.order__info}>
                <p ref={numberRef} className={styles.order__number}>#{order?.numberOrder}</p>
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

export default ModalHistoryOrder