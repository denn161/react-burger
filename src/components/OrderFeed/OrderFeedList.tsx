import React from 'react'
import { TOrder } from '../../types/orders'
import OrderFeedCard from './OrderFeedCard'
import useOrders from '../../hooks/useOrders'
import styles from './OrderFild.module.scss'
import { useSelector } from '../../services/store/hooks'
import { wsFildSelectors } from '../../services/selectors/wsFildSelectors'
import Loader from '../Loader/Loader'

interface IOrderListProps {
  orders: Array<TOrder>
}


export const OrderFeedList = ({ orders }: IOrderListProps): JSX.Element => {

  const { isConnect } = useSelector(wsFildSelectors)

  const { elements } = useOrders(orders)

  return (
    <ul className={styles.orders__list}>
      {isConnect && (<Loader />)}
      {orders.length === 50 && elements.map((item) =>
        <OrderFeedCard key={item.id} item={item} />
      )}

    </ul>
  )
}
