import React from 'react'
import PropTypes from 'prop-types';
import styles from './AppHeader.module.css'


const HeaderItem = ({icon,text,style}) => {
  return (
     <li className={styles.header__item}  >
   {icon}
       <span  style={style} className={styles.text}>{text}</span>
    </li>
  )
}

HeaderItem.propTypes={
    icon:PropTypes.object,
    text:PropTypes.string,
    style:PropTypes.object
}

export default HeaderItem