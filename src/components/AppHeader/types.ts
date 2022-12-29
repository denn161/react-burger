import { ReactNode } from "react";


export interface IHeaderItemProps {
      text: string
      icon: ReactNode
      style: {
            [name: string]: string
      }
}