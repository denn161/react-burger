import React, { FC, ReactNode, SyntheticEvent, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ModalOverlay from '../ModalOverlay';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Modal.module.css";
import { useDispatch } from 'react-redux';
import { closeModal } from '../../services/actions/orderandIngredient';

const $modal = document.getElementById('react-modals') as HTMLElement;

 interface ModalProps {
       title:string 
       isOpenModal:boolean 
       pathName:string
       children:ReactNode
 } 


const Modal:FC<ModalProps> = ({ children, title, isOpenModal, pathName }) => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleCloseModal = useCallback(() => {
        dispatch<any>(closeModal())
        navigate(`${pathName}`)

    }, [navigate, dispatch])

    const handleKeyCloseModal = useCallback((e:KeyboardEvent) => {
        if (e.key === "Escape") {
            dispatch<any>(closeModal());
            navigate(`${pathName}`)
        }

    }, [dispatch, navigate])

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
        <ModalOverlay isOpenModal={isOpenModal} pathName={pathName}>
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





export default Modal