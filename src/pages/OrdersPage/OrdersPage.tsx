import React, { useEffect, useMemo } from 'react'
import Loader from '../../components/Loader/Loader'
import { OrderFeedList } from '../../components/OrderFeed/OrderFeedList'
import { FEED_MAX_ORDERS_NUMBER } from '../../constants'
import { wsClosedFeedActions, wsInitFeddActions } from '../../services/actions/wsActions/feedActions/actions'
import { wsFildUrl } from '../../services/actions/wsActions/feedActions/constants'
import { userSelector } from '../../services/selectors/userSelector'
import { wsFildSelectors } from '../../services/selectors/wsFildSelectors'
import { useSelector, useDispatch } from '../../services/store/hooks'
import styles from './OrdersPage.module.scss'

const OrdersPage = () => {

  const dispatch = useDispatch()

  const { data, isConnect, isDisconnect, token } = useSelector(wsFildSelectors)


  const pendingStatusOrders = useMemo(() => {
    return data?.orders?.filter(item => item.status === 'pending').slice(0, FEED_MAX_ORDERS_NUMBER).map(item => item.number)
  }, [data])

  const doneStatusOrders = useMemo(() => {
    return data?.orders?.filter(item => item.status === 'done').slice(0, FEED_MAX_ORDERS_NUMBER).map(item => item.number)
  }, [data])


  useEffect(() => {
    dispatch(wsInitFeddActions(`${wsFildUrl}`))


    return () => {
      dispatch(wsClosedFeedActions())
    }

  }, [dispatch])

  // useEffect(()=>{

  //    if(!!token){
  //     dispatch(wsInitFeddActions(`${wsFildUrl}?token=${token}`))  
  //    }

  //    return ()=>{
  //     dispatch(wsClosedFeedActions())
  //    }


  // },[token,dispatch])


  return (
    <main className='container'>
      <h1 className={styles.title}>Лента заказов</h1>
      <div className={styles.orders__inner}>
        {data?.orders?.length === 50 && (
          <section className={styles.orders__content}>
            <OrderFeedList orders={data?.orders} />
          </section>
        )}
        <section className={styles.orders__info}>
          <div className={styles.orders__list}>
            <div className={styles.orders__item} >
              <p className={styles.orders__title}>Готовы:</p>
              <ul className={styles.orders__numbers}>
                {doneStatusOrders?.map((number) =>
                  <li className={styles.orders__done} key={number}>{number}</li>
                )}
              </ul>
            </div>
            <div className={styles.orders__item}>
              <p className={styles.orders__title}>В работе:</p>
              <ul className={styles.orders__numbers}>
                {pendingStatusOrders?.map((number) =>
                  <li className={styles.orders__pending} key={number}>{number}</li>
                )}
              </ul>
            </div>
          </div>
          <div className={styles.orders__prices}>
            <div className={styles.orders__box}>
              <p className={styles.orders__subtitle}>
                Выполнено за все время:
              </p>
              <p className={styles.orders__price}>{data.total}</p>
            </div>
            <div className={styles.orders__box}>
              <p className={styles.orders__subtitle}>
                Выполнено за сегодня:
              </p>
              <p className={styles.orders__price}>{data.totalToday}</p>
            </div>
          </div>
        </section>
      </div>


    </main>
  )
}

export default OrdersPage