import React from 'react'
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid'
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerConstructor.module.css';
// import { ITEM_PROP_TYPE } from '../../constants';
import { getConstructorData } from '../../utils/data';



const BurgerConstructor = ({ stateData, openOrderModal }) => {

  const total = stateData.length && stateData.reduce((acc, item) => acc + item.price, 0)

  const mutationData = stateData.length && getConstructorData(stateData, "60d3b41abdacab0026a733c6")

  const result = mutationData.length && mutationData.map((item) => {
    return { ...item, _id: uuidv4() }
  })

  return (
    <>
      {stateData.length &&
        <section className={styles.section__constructor}>
          <ConstructorElement
            type={'top'}
            isLocked={true}
            text={`${result[0].name} (верх)`}
            price={result[0].price}
            thumbnail={result[0].image}
            key={result[0]._id}
          />
          <ul className={styles.list}>
            {result.length && result.map((item) => {
              if (item.type !== 'bun') {
              return <li className={styles.list__item} key={item._id} >
                  <DragIcon type="primary" />
                  <ConstructorElement
                    type={'middle'}
                    isLocked={false}
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                  />
                </li>
              }
            }
            )}
          </ul>
          <ConstructorElement
            type={'bottom'}
            isLocked={true}
            text={`${result[6].name} (низ)`}
            price={result[6].price}
            thumbnail={result[6].image}
            key={result[6]._id}
          />
          <div className={`${styles.info} mt-10`}>
            <p className={`text text_type_digits-medium ${styles.price} mr-10`}>
              {total}
              <CurrencyIcon type="primary" /></p>
            <Button   type={'primary'} size="medium" htmlType='button' onClick={openOrderModal} >
              Оформить заказ
            </Button>
          </div>
        </section>
      }
    </>
  )
}

BurgerConstructor.propTypes = {
  stateData: PropTypes.array.isRequired,
  openOrderModal: PropTypes.func.isRequired
}

export default BurgerConstructor