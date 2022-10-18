import React from 'react'
import PropTypes from 'prop-types';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ITEM_PROP_TYPE } from '../../constants';
import styles from './BurgerIngredients.module.css'


const BurgerList = ({ title, data, getId }) => {

  return (
    <div className={styles.item}>
      <h4 className={styles.item__title}>
        {title}
      </h4>
      <ul className={`${styles.list}`}>
        {data.length && data.map(({ _id, image, __v, price, name, count }) => {
          return <li className={styles.list__item} onClick={() => getId(_id)} key={_id} >
            {count > 0 && <Counter count={count} />}
            <div className={styles.item__content}>
              <img className={styles.image} src={image} alt={name} />
              <p className={`${styles.prices} text text_type_digits-default mt-4 mb-4`}>
                {price}
                <CurrencyIcon type="primary" />
              </p>
            </div>
            <p className={styles.item__name}>
              {name}
            </p>
          </li>
        })}
      </ul>
    </div>
  )
}

BurgerList.propTypes = {
  data: PropTypes.arrayOf(ITEM_PROP_TYPE).isRequired,
  title: PropTypes.string
}

export default BurgerList