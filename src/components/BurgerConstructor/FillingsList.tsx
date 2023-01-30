import React, { useCallback } from 'react'
import FillingItem from './FillingItem'
import styles from './BurgerConstructor.module.css'

import { deleteFillingOfConstructor, updateFillingsList, UPDATE_LIST_FILLINGS } from '../../services/actions/constructor';
import { IIngredientElement } from '../../types/constructor';
import { useDispatch } from '../../services/store/hooks';


interface FillingsListProps {
    ingredients: Array<IIngredientElement>
    isFilling: boolean
}


const FillingsList = ({ ingredients, isFilling }: FillingsListProps) => {

    const dispatch = useDispatch()

    const deleteIngredient = useCallback((id: string) => {
        dispatch(deleteFillingOfConstructor(id))
    }, [dispatch])

    const moveCard = (dragIndex: number, hoverIndex: number) => {
        const dragCard = ingredients[dragIndex]
        const newCard: Array<IIngredientElement> = [...ingredients]
        newCard.splice(dragIndex, 1)
        newCard.splice(hoverIndex, 0, dragCard)
        dispatch(updateFillingsList(newCard))
    }

    return (
        <ul className={`${styles.list} ${ingredients.length === 0 ? styles.list__center : ''}`}>
            {isFilling && ingredients.length ? ingredients.map((item, index: number) => {
                item.index = index
                return (<FillingItem
                    item={item}
                    index={index}
                    moveCard={moveCard}
                    deleteFilling={deleteIngredient}
                    key={item.key} />)
            }
            ) : <p className={styles.default__text}>Добавьте начинки</p>}
        </ul>
    )
}


export default FillingsList