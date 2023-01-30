import React, { FC, useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom';
import ModalOverlay from '../ModalOverlay';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalProps } from './types';
import styles from "./Modal.module.scss";

const $modal = document.getElementById('react-modals') as HTMLElement;


const Modal: FC<ModalProps> = ({ children, title, isOpenModal, closeModal }) => {


    const handleCloseModal = () => {
        closeModal()
    }

    const handleKeyCloseModal = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            closeModal()
        }

    }, [])

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
        <ModalOverlay isOpenModal={isOpenModal} closeModal={closeModal}>
            <div className={`${styles.modal}`}>
                <div className={styles.modal__header}>
                    <h4 className={styles.modal__title}>{title}</h4>
                    <button
                        className={`${styles.button}`}
                        onClick={handleCloseModal}>
                        X
                    </button>
                </div>
                {children}
            </div>
        </ModalOverlay>,
        $modal)
}





export default Modal