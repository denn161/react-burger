import React from 'react'
import { IHeaderItemProps } from './types'
import styles from './AppHeader.module.css'

     

const HeaderItem = ({ icon, text, style }:IHeaderItemProps) => {
  return (
    <li className={styles.header__item}  >
      {icon}
      <span style={style} className={styles.text}>{text}</span>
    </li>
  )
}


export default HeaderItem