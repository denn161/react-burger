import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css'

const $modal = document.getElementById('react-modals');

const ModalOverlay = ({ children, isActive, closePopup }) => {


    const handleCloseModal = (e) => {
        if (e.target.classList.contains('ModalOverlay_overlay__+-qKL')) {
            closePopup()
        }
    }

    return ReactDOM.createPortal(
        <div className={`${styles.overlay} ${isActive ? styles.show : styles.hidden}`}
            onClick={handleCloseModal}>
            {children}
        </div>
        , $modal)
}

ModalOverlay.propTypes = {
    isActive: PropTypes.bool.isRequired,
    children: PropTypes.node,
    closePopup: PropTypes.func.isRequired
}




export default ModalOverlay