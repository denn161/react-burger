import React from 'react'
import PropTypes from 'prop-types';
import {ConstructorElement,CurrencyIcon,Button,DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerConstructor.module.css';
import { ITEM_PROP_TYPE } from '../../constants';

const BurgerConstructor = ({stateData}) => {  
     return (
    <section className={styles.section__constructor}>
     <ul className={styles.list}>
       <li className={styles.list__item} >
       <ConstructorElement
        type="top"
        isLocked={true}
        text={`${stateData[0].name}`}
        price={stateData[0].price}
        thumbnail={stateData[0].image}
        />
       </li>
       <li className={styles.list__item}  >
       <DragIcon type="primary" />
       <ConstructorElement
        type="undefined"
        isLocked={false}
        text={`${stateData[5].name}`}
        price={stateData[5].price}
        thumbnail={stateData[5].image}
        />
       </li>
       <li className={styles.list__item}  >
       <DragIcon type="primary" />
       <ConstructorElement
        type="undefined"
        isLocked={false}
        text={`${stateData[4].name}`}
        price={stateData[4].price}
        thumbnail={stateData[4].image}
        />
       </li>
       <li className={styles.list__item}>
       <DragIcon type="primary" />
       <ConstructorElement
        type="undefined"
        isLocked={false}
        text={`${stateData[7].name}`}
        price={stateData[7].price}
        thumbnail={stateData[7].image}
        />
       </li>
       <li className={styles.list__item} >
       <DragIcon type="primary" />
       <ConstructorElement
        type="undefined"
        isLocked={false}
        text={`${stateData[8].name}`}
        price={stateData[8].price}
        thumbnail={stateData[8].image}
        />
       </li>
       <li className={styles.list__item}  >
       <DragIcon type="primary" />
       <ConstructorElement
        type="undefined"
        isLocked={false}
        text={`${stateData[8].name}`}
        price={stateData[8].price}
        thumbnail={stateData[8].image}
        />
       </li>
       <li className={styles.list__item} >
       <ConstructorElement
        type="bottom"
        isLocked={true}
        text={`${stateData[0].name}`}
        price={stateData[0].price}
        thumbnail={stateData[0].image}
        />
       </li>
     </ul>
     <div className={`${styles.info} mt-10`}>
        <p className={`text text_type_digits-medium ${styles.price} mr-10`}>
                 610
          <CurrencyIcon type="primary" /></p>
          <Button type="primary" size="medium">
            Оформить заказ
            </Button>
            </div>      
    </section>
  )
}

BurgerConstructor.propTypes={
  stateData:PropTypes.arrayOf(ITEM_PROP_TYPE).isRequired    
}

export default BurgerConstructor