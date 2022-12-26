import React from 'react'
import { IIngredientElement } from '../../types/constructor';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerConstructor.module.css'

 
 interface BunElementProps {
     item:IIngredientElement
     position:'top'|'bottom'|undefined
     text:string
 }


const BunElement = ({ item, position, text }:BunElementProps) => {

  return (
    <div className={styles.bun}>
      <ConstructorElement
        type={position}
        isLocked={true}
        text={`${item.name} ${text}`}
        price={item.price}
        thumbnail={item.image}
        key={item._id} />

    </div>
  )
}



export default BunElement