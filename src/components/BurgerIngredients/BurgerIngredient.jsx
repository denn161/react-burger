
import React from 'react'

import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from './BurgerIngredients.module.css'

import PropTypes from "prop-types";

const BurgerIngredient = ({image,count,price,name}) => {

  return (
    <li className={styles.list__item}>
     {count>0 && <Counter count={count}/>}
         <div className={styles.item__content}>
         <img className={styles.image} src={image} alt={name}/>
            <p className={`${styles.prices} text text_type_digits-default mt-4 mb-4`}>
                {price}
                <CurrencyIcon type="primary" />
            </p>
         </div>
            <p className={styles.item__name}>
                {name}
            </p>

    </li>
  )
}

BurgerIngredient.propTypes = {
    count: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default BurgerIngredient