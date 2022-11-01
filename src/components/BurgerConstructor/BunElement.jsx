import React from 'react'
import PropTypes from 'prop-types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './BurgerConstructor.module.css'

const BunElement = ({ item, position, text }) => {

  return (
    <div className={styles.bun}>
      <ConstructorElement
        type={position}
        isLocked={true}
        text={`${item.name} ${text}`}
        price={item.price}
        thumbnail={item.image}
        key={item._id} />

    </div>
  )
}

BunElement.propTypes = {
  item: PropTypes.object.isRequired,
  position: PropTypes.string.isRequired,
  text: PropTypes.string

}

export default BunElement