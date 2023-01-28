import { ReactNode } from 'react';
import { IIngredientElement } from '../../types/constructor';



export interface IModalIngredientProps {
    ingredient: IIngredientElement
}

export interface IColoriesEl {
    id: string
    title: string
    number: number

}

export interface ModalProps {
    title?: string
    isOpenModal: boolean
    children: ReactNode
    closeModal: () => void
}

