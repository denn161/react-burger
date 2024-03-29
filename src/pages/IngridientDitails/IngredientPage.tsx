import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from '../../services/store/hooks'
import { ingredientsSelector } from '../../services/selectors/ingredientsSelector'
import './ingredient.scss'
import { IIngredientElement } from '../../types/constructor'



const IngredientPage = () => {

  const { ingredients } = useSelector(ingredientsSelector)

  const { id } = useParams<'id'>()

  const ingredient = ingredients.find((item: IIngredientElement) => item._id === id)



  const element = useMemo(() =>
    <div className='ingredient__info'>
      <h2 className='ingredient__title'>Детали ингредиента</h2>
      <div className='ingredient__content'>
        <div className='ingredient__image'>
          <img className='ingredient__img' src={ingredient?.image_large} alt={ingredient?.name} />
        </div>
        <p className='ingredient__name'>{ingredient?.name}</p>
      </div>
      <ul className='ingredient__list'>
        <li className='ingredient__item'>
          <span className='ingredient__item-title'>Калории,ккал</span>
          <span className='ingredient__item-number'>{ingredient?.calories}</span>
        </li>
        <li className='ingredient__item'>
          <span className='ingredient__item-title'>Белки,г</span>
          <span className='ingredient__item-number'>{ingredient?.proteins}</span>
        </li>
        <li className='ingredient__item'>
          <span className='ingredient__item-title'>Жиры,г</span>
          <span className='ingredient__item-number'>{ingredient?.fat}</span>
        </li>
        <li className='ingredient__item'>
          <span className='ingredient__item-title'>Углеводы,г</span>
          <span className='ingredient__item-number'>{ingredient?.carbohydrates}</span>
        </li>
      </ul>
    </div>

    , [id, ingredient])

  return (
    <section className='ingredient'>
      {element}
    </section>
  )
}

export default IngredientPage