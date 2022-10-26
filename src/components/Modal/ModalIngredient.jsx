import React from 'react'
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { ingredientSelector } from '../../services/selectors/ingredientSelector';
import styles from './Modal.module.css'

const ModalIngredient = () => {

const {ingredient}=useSelector(ingredientSelector)


    const calories = [
        {
            id: uuidv4(),
            title: 'Калории,ккал',
            number: ingredient && ingredient.calories
        },
        {

            id: uuidv4(),
            title: 'Белки,г',
            number: ingredient.proteins
        },
        {
            id: uuidv4(),
            title: 'Жиры,г',
            number: ingredient.fat
        },
        {
            id: uuidv4(),
            title: 'Углеводы,г',
            number: ingredient.carbohydrates
        }]

    return (
        <>
            {ingredient &&
                <>
                    <div className={styles.modal__content}>
                        <div className={styles.modal__image}>
                            <img className={styles.img} src={ingredient.image_large} alt={ingredient.name} /></div>
                        <p className={styles.modal__name}>{ingredient.name}</p>
                    </div>
                    <ul className={styles.modal__list}>
                        {calories.map((item) =>
                            <CaloriesItem  {...item} key={item.id} />
                        )}
                    </ul>

                </>
            }
        </>

    )
}

const CaloriesItem = ({ title, number }) => {
    return (
        <li className={styles.modal__item}>
            <span className={styles.name}>{title}</span>
            <span className={styles.number}>{number}</span>
        </li>
    )
}




export default ModalIngredient