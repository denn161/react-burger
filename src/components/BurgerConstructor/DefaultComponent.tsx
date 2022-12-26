import React,{ReactNode} from 'react'

import styles from './BurgerConstructor.module.css'

 interface IDfaultComponentProps{
      position:string
      children:ReactNode
 }

const DefaultComponent = ({children, position }:IDfaultComponentProps) => {

    const className = `${styles.default} ${position === 'top' ? styles.default__top : styles.default__bottom}`
    return (
        <div className={className}>
            {children}
        </div>
    )
}





export default DefaultComponent