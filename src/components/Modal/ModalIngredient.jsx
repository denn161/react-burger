import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types';
import {useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import styles from './Modal.module.css'

import { closeModal, openModalIngredient } from '../../services/actions';

const ModalIngredient = ({ ingredient }) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleGoIngr = useCallback(() => {
        dispatch(closeModal())
        navigate(`/ingredients/${ingredient?._id}`)
    }
        , [dispatch, navigate])


    const calories = [
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
        dispatch(openModalIngredient(ingredient))
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

const CaloriesItem = ({ title, number }) => {
    return (
        <li className={styles.modal__item}>
            <span className={styles.name}>{title}</span>
            <span className={styles.number}>{number}</span>
        </li>
    )
}

ModalIngredient.propTypes = {
    ingredient: PropTypes.object.isRequired
}


export default ModalIngredient