import React from 'react'
import PropTypes from 'prop-types';
import BurgerIngredient from './BurgerIngredient'
import { ITEM_PROP_TYPE} from '../../constants';
import styles from './BurgerIngredients.module.css'

const BurgerItem = ({title,data}) => {
  return (
    <div className={styles.item}>
    <h4 className={styles.item__title}>
        {title}
    </h4>
    <ul className={`${styles.list}`}>
        {data.map(({_id,image,__v,price,name}) => {         
          return <BurgerIngredient key={_id} image={image} count={__v} price={price} name={name} />        
        })}
    </ul>
</div>
  )
}

BurgerItem.propTypes={  
  data:PropTypes.arrayOf(ITEM_PROP_TYPE).isRequired   
   }

export default BurgerItem