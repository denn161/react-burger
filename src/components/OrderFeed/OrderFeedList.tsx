import React from 'react'
import { TOrder } from '../../types/orders'
import OrderFeedCard from './OrderFeedCard'
import useOrders from '../../hooks/useOrders'
import styles from './OrderFild.module.scss'

interface IOrderListProps {
  orders: Array<TOrder>
}


export const OrderFeedList = ({ orders }: IOrderListProps): JSX.Element => { 

  const { elements } = useOrders()

  return (
    <ul className={styles.orders__list}>
      {orders.length === 50 ? elements.map((item) =>
        <OrderFeedCard key={item.id} item={item} />
      ) : (<p>Заказов пока нет.Сделайте заказ</p>)}

    </ul>
  )
}
