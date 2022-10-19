import React from 'react'
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css'



const ModalOverlay = ({ children, isActive, closePopup }) => {


    const handleCloseModal = (e) => {
        if (e.target.classList.contains(`${styles.overlay}`)) {
            closePopup()
        }
    }

    return (
        <div className={`${styles.overlay} ${isActive ? styles.show : styles.hidden}`}
            onClick={handleCloseModal}>
            {children}
        </div>
        )
}

ModalOverlay.propTypes = {
    isActive: PropTypes.bool.isRequired,
    children: PropTypes.node,
    closePopup: PropTypes.func.isRequired
}




export default ModalOverlay