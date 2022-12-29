import React, { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { IModalIngredientProps, IColoriesEl } from './types';
import { closeModal, openModalIngredient } from '../../services/actions/orderandIngredient';
import styles from './Modal.module.css'


const ModalIngredient = ({ ingredient }: IModalIngredientProps) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleGoIngr = useCallback(() => {
        dispatch<any>(closeModal())
        navigate(`/ingredients/${ingredient?._id}`)
    }
        , [dispatch, navigate])


    const calories: Array<IColoriesEl> = [
        {
            id: uuidv4(),
            title: 'Калории,ккал',
            number: ingredient?.calories
        },
        {

            id: uuidv4(),
            title: 'Белки,г',
            number: ingredient?.proteins
        },
        {
            id: uuidv4(),
            title: 'Жиры,г',
            number: ingredient?.fat
        },
        {
            id: uuidv4(),
            title: 'Углеводы,г',
            number: ingredient?.carbohydrates
        }]

    useEffect(() => {
        if (ingredient) {
            dispatch<any>(openModalIngredient(ingredient))
        }

    }, [dispatch, ingredient])

    return (
        <>
            {ingredient &&
                <>

                    <div className={styles.modal__content} onClick={handleGoIngr}>
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

const CaloriesItem = ({ title, number }: Omit<IColoriesEl, 'id'>) => {
    return (
        <li className={styles.modal__item}>
            <span className={styles.name}>{title}</span>
            <span className={styles.number}>{number}</span>
        </li>
    )
}



export default ModalIngredient