import React from 'react'
import PropTypes from 'prop-types';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerConstructor.module.css';
import { ITEM_PROP_TYPE } from '../../constants';


const BurgerConstructor = ({ stateData, openOrderModal }) => {

  const total = stateData.length && stateData.reduce((acc, item) => acc + item.price, 0)

  return (
    <>
      {stateData.length && <section className={styles.section__constructor}>
        <ul className={styles.list}>
          {stateData.length && stateData.map((item, index) => {
            return <li className={styles.list__item} key={item._id} >
              <ConstructorElement
                type="top"
                isLocked={index === 0 ? false : index === stateData.length - 1 ? false : true}
                text={`${item.name} ${index === 0 ? '(верх)' : (index === stateData.length - 1 ? '(низ)' : '')}`}
                price={item.price}
                thumbnail={item.image}
              />
            </li>
          }
          )}
        </ul>
        <div className={`${styles.info} mt-10`}>
          <p className={`text text_type_digits-medium ${styles.price} mr-10`}>
            {total}
            <CurrencyIcon type="primary" /></p>
          <Button type="primary" size="medium" onClick={openOrderModal} >
            Оформить заказ
          </Button>
        </div>
      </section>}
    </>
  )
}

BurgerConstructor.propTypes = {
  stateData: PropTypes.arrayOf(ITEM_PROP_TYPE).isRequired
}

export default BurgerConstructor