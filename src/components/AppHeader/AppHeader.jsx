import React from 'react'
import { BurgerIcon, Logo, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import HeaderItem from './HeaderItem';
import styles from './AppHeader.module.css';

const AppHeader = () => {

  const style = {
    color: '#8585AD'
  }
  return (
    <header className={styles.header}>
      <nav className='container'>
        <ul className='header__inner'>
          <div className={styles.header__buttons}>
            <HeaderItem icon={<BurgerIcon type='primary' />} text={'Конструктор'} />
            <HeaderItem icon={<ListIcon type='secondary' />} text={'Лента заказов'} style={style} />
          </div>
          <Logo />
          <HeaderItem icon={<ProfileIcon type='secondary' />} text={'Личный кабинет'} style={style} />
        </ul>
      </nav>
    </header>
  )
}




export default AppHeader