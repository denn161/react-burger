import React, { useCallback, useEffect } from 'react'
import ModalOverlay from '../ModalOverlay';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";



const Modal = ({ isActive, closePopup, children, title }) => {



    const handleKeyCloseModal = useCallback((e) => {
        if (e.key === "Escape") {
            closePopup()
        }

    }, [closePopup])

    useEffect(() => {
        if (!isActive) {
            return
        }
        document.addEventListener('keydown', handleKeyCloseModal)
        return () => {
            document.removeEventListener('keydown', handleKeyCloseModal)
        }

    }, [isActive,handleKeyCloseModal])



    return (
        <ModalOverlay isActive={isActive} closePopup={closePopup}>
            <div className={`${styles.modal}`}>
                <div className={`${styles.modal__header}'}`}>
                    <p style={{ marginBottom: 40 }} className="text text_type_main-large">{title}</p>
                    <button
                        className={`${styles.button}`}
                        onClick={closePopup}>
                        <CloseIcon type="primary" />
                    </button>
                </div>
                {children}
            </div>
        </ModalOverlay>

    )
}

Modal.defaultProps = {
    title: null
}

Modal.propTypes = {
    isActive: PropTypes.bool.isRequired,
    closePopup: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string,


}

export default Modal