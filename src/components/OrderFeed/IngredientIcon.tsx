import React from 'react'
import { ingredientsSelector } from '../../services/selectors/ingredientsSelector'
import { useSelector } from '../../services/store/hooks'
import styles from './OrderFild.module.scss'

interface IIngridientIconProps {
  img?: string

}

const IngredientIcon = ({ img }: IIngridientIconProps) => {

  return (
    <>
      <img className={styles.image} data-testid='image-tag' src={img} alt="Ingredient" />
    </>


  )
}

export default IngredientIcon