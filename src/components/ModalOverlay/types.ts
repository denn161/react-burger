import { ReactNode } from "react"


export interface ModalOverlayProps {
    children: ReactNode
    isOpenModal: boolean
    pathName: string
    closeModal: () => void

}