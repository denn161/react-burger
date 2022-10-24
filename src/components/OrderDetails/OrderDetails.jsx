import React from 'react'
import PropTypes from 'prop-types';
import done from './images/done.png'
import styles from './OrderDetails.module.css'



const OrderDetails = ({ id }) => {
    return (
        <div>
            <div className={styles.order__info}>
                <p className={styles.order__number}>
                    {id}
                </p>
                <p className={styles.order__text}>идентификатор заказа</p>
            </div>
            <img className={styles.img} src={done} alt="Done" />
            <div className={styles.order__content} >
                <p className={styles.order__job}>Ваш заказ начали готовить</p>
                <p className={styles.order__pending}>Дождитесь готовности на орбитальной станции</p>
            </div>
        </div>
    )
}

OrderDetails.propTypes = {
    id: PropTypes.number.isRequired
}

export default OrderDetails