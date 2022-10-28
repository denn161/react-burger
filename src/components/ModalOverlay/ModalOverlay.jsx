import React from 'react'
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css'
import { useDispatch } from 'react-redux';
import { closeModal } from '../../services/actions';



const ModalOverlay = ({ children, isOpenModal }) => {


    const dispatch = useDispatch()


    const handleCloseModal = (e) => {
        if (e.target.classList.contains(`${styles.overlay}`)) {
            dispatch(closeModal())
        }
    }
    return (
        <div className={`${styles.overlay} ${isOpenModal ? styles.show : styles.hidden}`}
            onClick={handleCloseModal}>
            {children}
        </div>
    )
}

ModalOverlay.propTypes = {
    children: PropTypes.node,
    isOpenModal: PropTypes.bool.isRequired
}




export default ModalOverlay