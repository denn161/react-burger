import React from 'react'
import { TOrderItemInProps } from '../OrderFeed/types'
import './history-orders.scss'
import HistoryOrdersCard from './HistoryOrdersCard'
import './history-orders.scss'


interface IHistoryOrdersListProps {
  orders: Array<TOrderItemInProps>
}


const HistoryOrdersList = ({ orders }: IHistoryOrdersListProps) => {

  return (
    <ul className='history__list'>
      {orders?.map((item) =>
        <HistoryOrdersCard order={item} key={item.id} />
      )}
    </ul>
  )
}

export default HistoryOrdersList