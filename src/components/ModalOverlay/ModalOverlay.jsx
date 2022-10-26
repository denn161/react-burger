import React from 'react'
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { ingredientSelector } from '../../services/selectors/ingredientSelector';
import { closeModal } from '../../services/actions';



const ModalOverlay = ({ children}) => {

    const {isOpenModal} = useSelector(ingredientSelector)
    
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
}




export default ModalOverlay