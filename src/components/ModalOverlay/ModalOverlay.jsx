import React, { useCallback, useEffect } from 'react'
import styles from './ModalOverlay.module.css'

const ModalOverlay = ({ children, isActive, closePopup }) => {


    const handleCloseModal = (e) => {
        if (e.target.classList.contains('ModalOverlay_overlay__+-qKL')) {
            closePopup()
        }
    }
    const handleKeyCloseModal = useCallback((e) => {
        if (e.key === "Escape") {
            closePopup()
        }

    }, [])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyCloseModal)
        return () => {
            document.removeEventListener('keydown', handleKeyCloseModal)
        }

    }, [])

    return (
        <div className={`${styles.overlay} ${isActive ? styles.show : styles.hidden}`}
            onClick={handleCloseModal}


        >

            {children}

        </div>
    )
}

export default ModalOverlay