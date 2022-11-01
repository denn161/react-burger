import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { linksHeader } from '../../constants';
import styles from './AppHeader.module.css';

const AppHeader = () => {

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {linksHeader.map((item) => {
            if (item.text === '') {
              return (<Link className={styles.logo} to={item.path} key={item.key}>{item.icon}</Link>)
            } else {
              return (<NavLink key={item.key} to={item.path} className={(navClass) => {
                return navClass.isActive ? styles.active : styles.link
              }
              } >
                <li className={styles.header__item}>
                  {item.icon}
                  <span className={styles.text}>{item.text} </span>
                </li>
              </NavLink>)
            }
          })}
        </ul>
      </nav>
    </header>
  )
}




export default AppHeader