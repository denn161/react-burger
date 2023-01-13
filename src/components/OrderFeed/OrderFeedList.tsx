import React from 'react'
import { TOrder } from '../../types/orders'
import OrderFeedItem from './OrderFeedItem'
import styles from './OrderFild.module.css'

 interface IOrderListProps{
     orders:Array<TOrder>
 }     


export const OrderFeedList = ({orders}:IOrderListProps):JSX.Element => {

  

  return (
    <ul className={styles.orders__list}>
      {orders.length&&orders.length===50&&orders.map((item)=>
          <OrderFeedItem key={item._id} item={item}/>
      
      )}



    </ul>
  )
}
