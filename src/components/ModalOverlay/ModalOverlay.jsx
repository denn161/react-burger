import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css'

import { useDispatch } from 'react-redux';
import { closeModal } from '../../services/actions';



const ModalOverlay = ({ children, isOpenModal,pathName }) => {


    const dispatch = useDispatch()
     
    const navigate = useNavigate()


    const handleCloseModal = useCallback((e) => {
        if (e.target.classList.contains(`${styles.overlay}`)) {
            dispatch(closeModal())
            navigate(`${pathName}`)
        }
    },[dispatch,navigate])
    return (
        <div className={`${styles.overlay} ${isOpenModal ? styles.show : styles.hidden}`}
            onClick={handleCloseModal}>
            {children}
        </div>
    )
}

ModalOverlay.propTypes = {
    children: PropTypes.node,
    isOpenModal: PropTypes.bool.isRequired,
    pathName:PropTypes.string
}




export default ModalOverlay