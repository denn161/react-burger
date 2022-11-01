import React from 'react'
import PropTypes from 'prop-types';
import styles from './BurgerConstructor.module.css'

const DefaultComponent = ({ children, position }) => {

    const className = `${styles.default} ${position === 'top' ? styles.default__top : styles.default__bottom}`
    return (
        <div className={className}>
            {children}
        </div>
    )
}

DefaultComponent.propTypes = {
    children: PropTypes.node,
    position: PropTypes.string
}



export default DefaultComponent