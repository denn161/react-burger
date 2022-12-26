import React from 'react'
import PropTypes from 'prop-types';
import { ITEM_PROP_TYPE } from '../../constants';
import styles from './BurgerIngredients.module.css'
import BurgerIngredient from './BurgerIngredient';


const BurgerCategory = ({ title, products, id, targetRef }) => {

  return (
    <div className={styles.item} ref={targetRef} id={id}>
      <h4 className={styles.item__title}>
        {title}
      </h4>
      <ul className={`${styles.list}`}>
        {products.length && products.map((item) => {
          return (<BurgerIngredient item={item} key={item._id} />)
        })}
      </ul>
    </div>
  )
}

BurgerCategory.propTypes = {
  products: PropTypes.arrayOf(ITEM_PROP_TYPE).isRequired,
  title: PropTypes.string,
  id: PropTypes.string,
  targetRef: PropTypes.func
}

export default BurgerCategory