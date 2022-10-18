import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import styles from './Modal.module.css'

const ModalIngredient = ({ indgredient }) => {

    const calories = [
        {
            id: uuidv4(),
            title: 'Калории,ккал',
            number: indgredient && indgredient.calories
        },
        {

            id: uuidv4(),
            title: 'Белки,г',
            number: indgredient && indgredient.proteins
        },
        {
            id: uuidv4(),
            title: 'Жиры,г',
            number: indgredient && indgredient.fat
        },
        {
            id: uuidv4(),
            title: 'Углеводы,г',
            number: indgredient && indgredient.carbohydrates
        }]

    return (
        <>
            {indgredient &&
                <>
                    <div className={styles.modal__content}>
                        <div className={styles.modal__image}><img className={styles.img} src={indgredient.image_large} alt={indgredient.name} /></div>
                        <p className={styles.modal__name}>{indgredient.name}</p>
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