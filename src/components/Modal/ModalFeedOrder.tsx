import React, { useEffect } from 'react'
import { openModalFeedOrder } from '../../services/actions/orderandIngredient'
import { useDispatch } from '../../services/store/hooks'
import { TOrderItemInProps } from '../OrderFeed/types'

interface IModalFeedOrderProps{
     orderDetails?:TOrderItemInProps
}


const ModalFeedOrder = ({orderDetails}:IModalFeedOrderProps) => {

 const dispatch = useDispatch()


  useEffect(() => {
     if (orderDetails) {
    dispatch(openModalFeedOrder(orderDetails))
        }

    },[dispatch, orderDetails])



  return (
    <div>ModalFeedOrder</div>
  )



}

export default ModalFeedOrder