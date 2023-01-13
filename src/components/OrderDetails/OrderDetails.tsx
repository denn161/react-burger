import React from 'react'
import done from './images/done.png'
import styles from './OrderDetails.module.css'

import { ingredientSelector } from '../../services/selectors/ingredientSelector';
import { useSelector } from '../../services/store/hooks';



const OrderDetails = () => {

    const { order } = useSelector(ingredientSelector)

    return (
        <div>
            <div className={styles.order__info}>
                <p className={styles.order__number}>
                    {order.number}
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



export default OrderDetails