import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useOrderDetails from '../../hooks/useOrderDetails'
import { getOrderWtihNumber } from '../../services/actions/wsActions/feedActions/actions'
import { useDispatch } from '../../services/store/hooks'
import OrderDetailsFeed from './OrderDetailsFeed'
import styles from './OrdersPage.module.scss'



const OrdersDetailsPage = () => {


  const { id } = useParams()

  const dispatch = useDispatch()

  
  const {orders} = useOrderDetails()


  useEffect(() => {
    if (id) {
      dispatch(getOrderWtihNumber(id))
    }

  }, [id,dispatch])

  return (
    <section className={styles.order}>
       {orders.length&&orders.map((item)=>
       <OrderDetailsFeed orderDetails={item} key={item.id}/> 
       )}   
    </section>

  )
}


export default OrdersDetailsPage;