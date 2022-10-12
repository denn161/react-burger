import React, { useState } from 'react'
import PropTypes from 'prop-types';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerIngredients.module.css';
import { TABS } from '../../constants';
import BurgerItem from './BurgerItem';

const BurgerIngredients = ({data}) => {

   const [current,setCurrent]=useState('one')  
   
  return (
    <section className={`${styles.section}`}>
        <h2 className={styles.title}>
          Собери бургер
       </h2>
       <div className={`${styles.tabs} mt-5`}>
              {TABS.map(({value,name},index)=>
                <Tab  key={index}  value={value} active={current === value} onClick={setCurrent}>
                 {name}
              </Tab>
              )}                  
            </div>
            <div className={styles.items}>
              {data.map((item,index)=>
              <BurgerItem title={item.title} data={item.products} key={index} />
              )}
            </div>
    </section>
  )
}
BurgerIngredients.propTypes={  
 data:PropTypes.array.isRequired   
}

export default BurgerIngredients;