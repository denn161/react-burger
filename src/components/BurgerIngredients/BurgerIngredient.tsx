import React, { useCallback, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useDrag } from 'react-dnd';
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './BurgerIngredients.module.css'
import { itemsSelectorByConstructor } from '../../services/selectors/itemsConstructorSelector';
import { BurgerIngredientProps } from './types';
import { IIngredientElement } from '../../types/constructor';
import { useSelector } from '../../services/store/hooks';



const BurgerIngredient = ({ item }: BurgerIngredientProps) => {

  const { bun, fillings } = useSelector(itemsSelectorByConstructor)

  const location = useLocation()

  const changeCountIngredient = useCallback(() => {
    let count = 0
    if (bun._id === item._id) {
      count++
    }

    fillings.forEach((el: IIngredientElement) => el._id === item._id && count++)

    return count

  }, [bun, item, fillings])


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
    <Link to={`/ingredients/${item._id}`}
      state={{ background: location, el: item }}
      className={styles.link}>
      <li style={style}
        className={styles.list__item}
        ref={targetRef}
        data-testid={item.dataTestId} >
        {changeCountIngredient() > 0 && <Counter count={changeCountIngredient()} />}
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
    </Link>
  )
}


export default BurgerIngredient