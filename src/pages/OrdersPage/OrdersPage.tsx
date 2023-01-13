import React, { useEffect } from 'react'
import Loader from '../../components/Loader/Loader'
import { OrderFeedList } from '../../components/OrderFeed/OrderFeedList'
import { wsClosedFeedActions, wsInitFeddActions } from '../../services/actions/wsActions/feedActions/actions'
import { wsFildUrl } from '../../services/actions/wsActions/feedActions/constants'
import { ingredientsSelector } from '../../services/selectors/ingredientsSelector'
import { userSelector } from '../../services/selectors/userSelector'
import { wsFildSelectors } from '../../services/selectors/wsFildSelectors'
import { useSelector, useDispatch } from '../../services/store/hooks'
import { getCookie } from '../../utils/cookies'
import  styles from './OrdersPage.module.css'

const OrdersPage = () => {

  const dispatch = useDispatch()

  const { data, isConnect } = useSelector(wsFildSelectors)

  console.log(data?.orders,data?.total,data?.totalToday)

  const {token} =useSelector(userSelector)

  const pendingStatusOrders = data?.orders.filter(item => item.status === 'pending').map(item => item.number)

  const doneStatusOrders = data?.orders.filter(item => item.status === 'done').map(item => item.number)
   


  useEffect(() => {
    if(token){
   dispatch(wsInitFeddActions(`${wsFildUrl}?token=${getCookie('accessToken')}`))
    }else{
      dispatch(
        wsInitFeddActions(`${wsFildUrl}`))
    }
    return () => {
      dispatch(wsClosedFeedActions())
    }

  }, [dispatch])

  if (!isConnect) {
    return <Loader />
  }

  return (
    <main className={styles.content}>
     <h1 className={styles.title}>Лента заказов</h1>

     {data?.orders.length === 50 ? (
            <section className={styles.content__ordersSection}>
              <OrderFeedList  orders={data?.orders} />
            </section>
          ) : (
            <Loader />
          )}  


    </main>
  )
}

export default OrdersPage