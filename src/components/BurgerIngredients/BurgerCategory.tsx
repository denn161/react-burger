import React from 'react'
import styles from './BurgerIngredients.module.css'
import BurgerIngredient from './BurgerIngredient';
import { IBurgerCategoryProps } from './types';




const BurgerCategory = ({ title, products, id, targetRef }: IBurgerCategoryProps) => {

  return (
    <div className={styles.item} ref={targetRef} id={id}>
      <h4 className={styles.item__title}>
        {title}
      </h4>
      <ul className={`${styles.list}`} data-testid='ingredients'>
        {products.length && products.map((item) => {
          return (<BurgerIngredient item={item} key={item._id} />)
        })}
      </ul>
    </div>
  )
}



export default BurgerCategory