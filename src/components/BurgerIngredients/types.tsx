import { ReactNode } from "react"
import { IIngredientElement } from "../../types/constructor"

export interface IBurgerCategoryProps {
     title: string
     products: Array<IIngredientElement>
     id: string
     targetRef: () => void
}


export interface BurgerIngredientProps {
     item: IIngredientElement
}