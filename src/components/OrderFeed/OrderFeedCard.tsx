import React from 'react'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { Link, useLocation } from 'react-router-dom'
import IngredientIcon from './IngredientIcon'
import { IOrderItemProps } from './types'
import styles from './OrderFild.module.scss'
//state={{ background: location, order: item }}

const OrderFeedCard = ({ item }: IOrderItemProps) => {

  const location = useLocation()
 

  return (   
      <li className={styles.item}>
         <Link to={`/feed/${item.numberOrder}`}
      className={styles.link} state={{background:location,order:item}} >
        <div className={styles.item__header}>
          <span className={styles.order__number}>#{item.numberOrder}</span>
          <time className="text text_type_main-default text_color_inactive">
            {item.time}
          </time></div>
        <h2 className={styles.item__title}>
          {item?.name}</h2>
        <div className={styles.ingredients}>
          <ul className={styles.ingredients__list}>
            {item.ingredientsImg.map(({ img, key }) =>
              <IngredientIcon img={img} key={key} />
            )}
            <span className={styles.counter}>{item.remainingElements}</span>
          </ul>
          <div className={styles.total}>
            <span >{item.total}</span>
            <span><CurrencyIcon type='secondary'/></span>
          </div>
        </div>
        </Link>
      </li>
 
  )
}

export default OrderFeedCard

