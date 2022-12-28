import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useDrag } from 'react-dnd';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerIngredients.module.css'
import { itemsSelectorByConstructor } from '../../services/selectors/itemsConstructorSelector';

const BurgerIngredient = ({ item }) => {

  const { bun, fillings } = useSelector(itemsSelectorByConstructor)

  const location = useLocation()

  let count = 0;

  if (bun._id === item._id) {
    count++
  }

  fillings.forEach((el) => el._id === item._id && count++)

  const [{ isDrag }, targetRef] = useDrag({
    type: 'ingredient',
    item: { ...item },
    collect: monitor => ({
      isDrag: monitor.isDragging()
    })

  })

  const style = {
    opacity: isDrag ? 0 : 1
  }

  return (
    <Link to={`/ingredients/${item._id}`} state={{ background: location, el: item }} >
      <li style={style} className={styles.list__item} key={item._id} ref={targetRef} >
        {count > 0 && <Counter count={count} />}
        <div className={styles.item__content}>
          <img className={styles.image} src={item.image} alt={item.name} />
          <p className={`${styles.prices} text text_type_digits-default mt-4 mb-4`}>
            {item.price}
            <CurrencyIcon type="primary"/>
          </p>
        </div>
        <p className={styles.item__name}>
          {item.name}
        </p>
      </li>
    </Link>
  )
}

BurgerIngredient.propTypes = {
  item: PropTypes.object.isRequired

}

export default BurgerIngredient