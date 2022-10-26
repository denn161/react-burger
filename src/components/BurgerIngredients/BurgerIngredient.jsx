import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { openModalIngredient } from '../../services/actions'
import styles from './BurgerIngredients.module.css'

const BurgerIngredient = ({item}) => {



  const dispatch = useDispatch() 
   
  const handleOpenModal = useCallback( (item) => {

   dispatch(openModalIngredient(item))
    
    

},[dispatch])

  return (   
   <li className={styles.list__item} onClick={()=>handleOpenModal(item)} key={item._id} >
            {item.count > 0 && <Counter count={item.count} />}
            <div className={styles.item__content}>
              <img className={styles.image} src={item.image} alt={item.name} />
              <p className={`${styles.prices} text text_type_digits-default mt-4 mb-4`}>
                {item.price}
                <CurrencyIcon type="primary" />
              </p>
            </div>
            <p className={styles.item__name}>
              {item.name}
            </p>
          </li>    
  )
}

export default BurgerIngredient