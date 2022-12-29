import React, { FC, useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom';
import ModalOverlay from '../ModalOverlay';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ModalProps } from './types';
import styles from "./Modal.module.css";

const $modal = document.getElementById('react-modals') as HTMLElement;


const Modal: FC<ModalProps> = ({ children, title, isOpenModal, pathName, closeModal }) => {


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
        <ModalOverlay isOpenModal={isOpenModal} pathName={pathName} closeModal={closeModal}>
            <div className={`${styles.modal}`}>
                <h4>{title}</h4>
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





export default Modal