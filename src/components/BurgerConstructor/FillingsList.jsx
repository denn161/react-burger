import React, { useCallback } from 'react'
import PropTypes from 'prop-types';
import FillingItem from './FillingItem'
import styles from './BurgerConstructor.module.css'
import { useDispatch } from 'react-redux'
import { deleteFillingOfConstructor, UPDATE_LIST_FILLINGS } from '../../services/actions'
import { ITEM_PROP_TYPE } from '../../constants';


const FillingsList = ({ ingredients, isFilling }) => {

    const dispatch = useDispatch()

    const deleteIngredient = useCallback((id) => {
        dispatch(deleteFillingOfConstructor(id))
    }, [dispatch])

    const moveCard = (dragIndex, hoverIndex) => {
        const dragCard = ingredients[dragIndex]
        const newCard = [...ingredients]
        newCard.splice(dragIndex, 1)
        newCard.splice(hoverIndex, 0, dragCard)
        dispatch({ type: UPDATE_LIST_FILLINGS, payload: newCard })
    }

    return (
        <ul className={`${styles.list} ${ingredients.length === 0 ? styles.list__center : ''}`}>
            {isFilling && ingredients.length ? ingredients.map((item, index) => {
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

FillingsList.propTypes = {
    ingredients: PropTypes.arrayOf(ITEM_PROP_TYPE).isRequired,
    isFilling: PropTypes.bool
}




export default FillingsList