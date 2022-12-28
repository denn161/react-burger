import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../services/actions/orderandIngredient';
import { ModalOverlayProps } from './types';
import styles from './ModalOverlay.module.css'



const ModalOverlay = ({ children, isOpenModal, pathName }: ModalOverlayProps) => {


    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleCloseModal = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget.classList.contains(`${styles.overlay}`)) {
            dispatch<any>(closeModal())
            navigate(`${pathName}`)
        }
    }, [dispatch, navigate])
    return (
        <div className={`${styles.overlay} ${isOpenModal ? styles.show : styles.hidden}`}
            onClick={handleCloseModal}>
            {children}
        </div>
    )
}


export default ModalOverlay