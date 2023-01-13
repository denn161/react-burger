import React from 'react'
import { TOrder } from '../../types/orders'
import {  } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './OrderFild.module.css'


interface IOrderItemProps{
    item:TOrder
}

const OrderFeedItem = ({item}:IOrderItemProps) => {


  return (
    <li className={styles.order__item}>
     <div>
       <span className={styles.order__number}>#{item.number}</span>

     </div>

    </li>
  )
}

export default OrderFeedItem