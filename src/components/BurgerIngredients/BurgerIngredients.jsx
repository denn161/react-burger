import React, { useState } from 'react'
import PropTypes from 'prop-types';
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from './BurgerIngredient';
import styles from './BurgerIngredients.module.css';
import { ITEM_PROP_TYPE } from '../../constants';

const BurgerIngredients = ({data}) => {

   const [current,setCurrent]=useState('one')

   const tabs = [
    {value:'one',
     name:'Булки'
      },
      {value:'two',
     name:'Соусы'
      },
      {value:'three',
       name:'Начинки'
      }
   ]
   
  return (
    <section className={`${styles.section}`}>
        <h2 className={styles.title}>
          Собери бургер
       </h2>
       <div className={`${styles.tabs} mt-5`}>
              {tabs.map(({value,name},index)=>
                <Tab  key={index}  value={value} active={current === value} onClick={setCurrent}>
                 {name}
              </Tab>
              )}    
                  
            </div>
            <div className={styles.items}>
            <div className={styles.item}>
                <h4 className={styles.item__title}>
                    Булки
                </h4>
                <ul className={`${styles.list}`}>
                    {data.map(({_id,image,__v,price,name,type}) => {
                        if(type === 'bun') {
                      return <BurgerIngredient key={_id} image={image} count={__v} price={price} name={name} />
                        }
                    })}
                </ul>
            </div>
            <div className="mt-10">
                <h4  className={styles.item__title}>
                   Соусы
                </h4>
                <ul className={`${styles.list}`}>
                    {data.map(({_id,image,__v,price,name,type}) => {
                        if(type === 'sauce') {
                      return <BurgerIngredient key={_id} image={image} count={__v} price={price} name={name} />
                        }
                    })}
                </ul>
            </div>
            <div className="mt-10">
                <h4 className={styles.item__title}>
                   Начинки
                </h4>
                <ul className={`${styles.list}`}>
                    {data.map(({_id,image,__v,price,name,type}) => {
                        if(type === 'main') {
                      return <BurgerIngredient key={_id} image={image} count={__v} price={price} name={name} />
                        }
                    })}
                </ul>
            </div>

            </div>


    </section>
  )
}

BurgerIngredients.propTypes={  
 data:PropTypes.arrayOf(ITEM_PROP_TYPE).isRequired    
}

export default BurgerIngredients;