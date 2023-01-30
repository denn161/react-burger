import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import useOrderDetails from '../../hooks/useOrderDetails'
import { getFeedWtihNumber } from '../../services/actions/wsActions/feedActions/actions'
import { wsFildSelectors } from '../../services/selectors/wsFildSelectors'
import { useDispatch, useSelector } from '../../services/store/hooks'
import OrderDetailsFeed from './OrderDetailsFeed'
import styles from './OrdersPage.module.scss'



const OrdersDetailsPage = () => {


  const { id } = useParams()

  const dispatch = useDispatch()

  const { order, loading } = useSelector(wsFildSelectors)


  const { orders } = useOrderDetails(order)


  useEffect(() => {
    if (id) {
      dispatch(getFeedWtihNumber(id))
    }

  }, [id, dispatch])

  if (loading) return <Loader />

  return (
    <section className={styles.order}>
      {orders.length && orders.map((item) =>
        <OrderDetailsFeed orderDetails={item} key={item.id} />
      )}
    </section>
  )
}


export default OrdersDetailsPage;