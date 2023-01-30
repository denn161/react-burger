import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { ModalOverlayProps } from './types';
import styles from './ModalOverlay.module.css'



const ModalOverlay = ({ children, isOpenModal, closeModal }: ModalOverlayProps) => {

    const navigate = useNavigate()

    const handleCloseOverlay = useCallback((e: React.SyntheticEvent) => {
        if ((e.target as Element).classList.contains(`${styles.overlay}`)) {
            closeModal()
            navigate('/')
          
        }
    }, [navigate])
    return (
        <div className={`${styles.overlay} ${isOpenModal ? styles.show : styles.hidden}`}
            onClick={handleCloseOverlay}>
            {children}
        </div>
    )
}


export default ModalOverlay