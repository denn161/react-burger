

import React from 'react'
import {v4 as uuidv4} from 'uuid'
import { TOrderDetail, TUniqType } from '../components/OrderFeed/types'
import { ingredientsSelector } from '../services/selectors/ingredientsSelector'
import { wsFildSelectors } from '../services/selectors/wsFildSelectors'
import { useSelector } from '../services/store/hooks'
import { IIngredientElement } from '../types/constructor'
import formatDate from '../utils/formatteDate'

interface IUseOrderDetail {
      orders:Array<TOrderDetail>
}

const useOrderDetails = ():IUseOrderDetail => {
  
  const {ingredients}=useSelector(ingredientsSelector)

  const {loading,order} =useSelector(wsFildSelectors)

  const orders = order?.map((item)=>{     

    const elIngredients = item.ingredients.reverse().map((id) => ingredients.find((el) => el._id === id))

    .filter((ingredient) => ingredient !== undefined) as IIngredientElement[]
      
    const qtyIngrInOrders = item.ingredients.reduce<{ [key in string]: number }>((acc, id) => {
      return typeof acc[id] !== 'undefined' ? { ...acc, [id]: (acc[id] || 0) + 1 } :
          { ...acc, [id]: 1 }
  }, {})

  const qtyCountsArray = Object.keys(qtyIngrInOrders).map((key) => {
      const ingr = ingredients.find((ingr) => ingr._id === key)      
      return {
          key: uuidv4(),
          type: ingr?.type,
          img: ingr?.image_mobile,
          name: ingr?.name,
          count: qtyIngrInOrders[key],
          price: ingredients.find((item) => item._id === key)?.price,

      }
  }).filter((item) => item !== undefined) as Array<TUniqType> 

  const obj = {
    id: item._id,
    numberOrder: item.number,
    name: item.name,
    time: `${formatDate(item.createdAt)} i-GMT+3`, 
    total: elIngredients.reduce((acc, el) => acc + el?.price, 0),  
    qtyIngridents: qtyCountsArray,
    status: item.status === 'pending' ? 'В работе' : 'Выполнен'
}

return obj 

  }).filter((item)=>item!==undefined) as Array<TOrderDetail>

  return{
    orders  
  }
}

export default useOrderDetails