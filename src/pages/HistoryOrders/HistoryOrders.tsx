import React, { useEffect } from 'react'
import Loader from '../../components/Loader/Loader'
import useOrders from '../../hooks/useOrders'
import { wsClosedOrderActions, wsInitOrderActions } from '../../services/actions/wsActions/oredersActions/actions'
import { WS_ORDER_URL } from '../../services/actions/wsActions/oredersActions/constants'
import { wsOrderSelectors } from '../../services/selectors/wsOrderSelectors'
import { useDispatch, useSelector } from '../../services/store/hooks'
import { getCookie } from '../../utils/cookies'
import HistoryOrdersList from '../../components/HistoryOrder/HistoryOrdersList'
import './index.scss'



const HistoryOrders = () => {

  const dispatch = useDispatch()

  const { token, data, isConnect } = useSelector(wsOrderSelectors)

  const { elements } = useOrders(data?.orders)


  useEffect(() => {
    if (!!token) {
      dispatch(wsInitOrderActions(`${WS_ORDER_URL}?token=${getCookie('accessToken')}`))
    }

    return () => {
      dispatch(wsClosedOrderActions())
    }

  }, [dispatch, token])



  return (
    <section className='history'>
      {elements?.length && (<HistoryOrdersList orders={elements} />)}
      {isConnect && (<Loader />)}
    </section>
  )
}

export default HistoryOrders