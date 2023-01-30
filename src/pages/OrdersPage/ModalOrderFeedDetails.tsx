import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useEffect, useRef } from 'react'
import IngredientIcon from '../../components/OrderFeed/IngredientIcon'
import { TOrderItemInProps } from '../../components/OrderFeed/types'
import { openModalFeedOrder } from '../../services/actions/orderandIngredient'
import { useDispatch } from '../../services/store/hooks'
import styles from './OrdersPage.module.scss'


interface IOrderFeedProps {
  orderDetails?: TOrderItemInProps
  id?: string

}

const ModalOrderFeedDetails = ({ orderDetails, id }: IOrderFeedProps) => {

  const className = orderDetails?.status === 'Выполнен' ? `${styles.order__done}` : `${styles.order__pending}`

  const dispatch = useDispatch()

  const numberRef = useRef<HTMLParagraphElement | null>(null)

  useEffect(() => {

    if (orderDetails) {
      numberRef?.current?.classList.add(`${styles.left}`)
      dispatch(openModalFeedOrder(orderDetails))
    }

    return () => {
      numberRef?.current?.classList.remove(`${styles.left}`)
    }

  }, [dispatch, orderDetails])

  return (

    <div className={styles.order__modal}>
      <div className={styles.order__info}>
        <p ref={numberRef} className={styles.order__number}>#{orderDetails?.numberOrder}</p>
        <h2 className={styles.order__name}>{orderDetails?.name}</h2>
        <p className={className}>{orderDetails?.status}</p>
      </div>
      <div className={styles.order__structure}>
        <p className={styles.list__title}>Состав:</p>
        <ul className={styles.order__list}>
          {orderDetails?.qtyIngridents.map((item) => {
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
          {orderDetails?.time}
        </p>
        <p className={styles.order__total}>
          {orderDetails?.total}
          <CurrencyIcon type='primary' />
        </p>
      </div>
    </div>
  )
}

export default ModalOrderFeedDetails