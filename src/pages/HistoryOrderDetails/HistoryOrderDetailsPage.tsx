import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import HistoryOrderDetails from '../../components/HistoryOrder/HistoryOrderDetails'
import Loader from '../../components/Loader/Loader'
import useOrderDetails from '../../hooks/useOrderDetails'
import { getOrderWtihNumber } from '../../services/actions/wsActions/oredersActions/actions'
import { wsOrderSelectors } from '../../services/selectors/wsOrderSelectors'
import { useDispatch, useSelector } from '../../services/store/hooks'
import './index.scss'

const HistoryOrderDetailsPage = () => {

  const { id } = useParams()

  const disptach = useDispatch()

  const { order, loading, token } = useSelector(wsOrderSelectors)


  const { orders } = useOrderDetails(order)


  useEffect(() => {
    if (id) {
      disptach(getOrderWtihNumber(id))
    }


  }, [disptach, id])

  if (loading) return <Loader />

  return (
    <section className='section__history'>
      {orders?.length && orders.map((order) =>
        <HistoryOrderDetails order={order} key={order?.id} />
      )}
    </section>
  )
}

export default HistoryOrderDetailsPage