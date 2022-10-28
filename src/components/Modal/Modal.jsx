import React, { useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom';
import ModalOverlay from '../ModalOverlay';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { useDispatch } from 'react-redux';
import { closeModal } from '../../services/actions';

const $modal = document.getElementById('react-modals');


const Modal = ({ children, title, isOpenModal }) => {


    const dispatch = useDispatch()

    const handleCloseModal = () => {
        dispatch(closeModal())
    }

    const handleKeyCloseModal = useCallback((e) => {
        if (e.key === "Escape") {
            dispatch(closeModal());
        }

    }, [dispatch])

    useEffect(() => {
        if (!isOpenModal) {
            return
        }
        document.addEventListener('keydown', handleKeyCloseModal)
        return () => {
            document.removeEventListener('keydown', handleKeyCloseModal)
        }

    }, [isOpenModal, handleKeyCloseModal])

    return ReactDOM.createPortal(
        <ModalOverlay isOpenModal={isOpenModal}>
            <div className={`${styles.modal}`}>
                <div className={`${styles.modal__header}'}`}>
                    <p style={{ marginBottom: 40 }} className="text text_type_main-large">{title}</p>
                    <button
                        className={`${styles.button}`}
                        onClick={handleCloseModal}>
                        <CloseIcon type="primary" />
                    </button>
                </div>
                {children}
            </div>
        </ModalOverlay>,
        $modal)
}

Modal.defaultProps = {
    title: null
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    isOpenModal: PropTypes.bool.isRequired
}

export default Modal