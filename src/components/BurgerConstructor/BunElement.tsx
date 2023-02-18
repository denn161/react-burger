import React from 'react'
import { IIngredientElement } from '../../types/constructor';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerConstructor.module.css'
import { EmptyObject } from '../../services/reducers/constructorReducer';


interface BunElementProps {
  item: IIngredientElement | EmptyObject
  position: 'top' | 'bottom' | undefined
  text: string
}



const BunElement = ({ item, position, text }: BunElementProps) => {

  const dataTestId = text && `bun-element-${text}`

  return (
    <div className={styles.bun} data-testid={dataTestId}>
      <ConstructorElement
        type={position}
        isLocked={true}
        text={`${item.name} ${text && text}`}
        price={item.price}
        thumbnail={item.image}
        key={item._id} />

    </div>
  )
}



export default BunElement