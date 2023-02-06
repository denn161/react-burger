import { useCallback, useEffect, useMemo, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { TOrderItemInProps, TUniqType } from "../components/OrderFeed/types"
import { MAX_SLICE_LENGTH } from "../constants"
import { ingredientsSelector } from "../services/selectors/ingredientsSelector"
import { wsFildSelectors } from "../services/selectors/wsFildSelectors"
import { useSelector } from "../services/store/hooks"
import { IIngredientElement } from "../types/constructor"
import { TOrder } from "../types/orders"
import formatDate from "../utils/formatteDate"

interface IUseOrders {
    elements: Array<TOrderItemInProps>,
    orderDetails?: TOrderItemInProps
}

const useOrders = (orders: Array<TOrder>, id?: string): IUseOrders => {

    const [orderDetails, setOrderDetails] = useState<TOrderItemInProps>()

    const { ingredients } = useSelector(ingredientsSelector)

    const elements = useMemo(
        () =>
            ingredients && orders && orders.map((item) => {
                const ids = item.ingredients     
                     
                const lastIngredient = ids.slice(-1).join('')
                const el = ingredients.find((ing)=>ing._id===lastIngredient)
                 if(el?.type==='bun'){
                    ids.reverse()

                 }                

                const elIngredients = ids.map((id) => ingredients.find((el) => el._id === id))

                    .filter((ingredient) => ingredient !== undefined) as IIngredientElement[]

                const elIngredientsImg = elIngredients.length > MAX_SLICE_LENGTH ? elIngredients.map((item) => (
                    {
                        img: item?.image_mobile,
                        key: uuidv4()
                    })).slice(0, MAX_SLICE_LENGTH) : elIngredients.map((item) => ({
                        img: item?.image_mobile,
                        key: uuidv4()
                    }))

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
                    ingredientsImg: elIngredientsImg,
                    total: elIngredients.reduce((acc, el) => acc + el?.price, 0),
                    remainingElements: `${elIngredients.length > MAX_SLICE_LENGTH ? `+${elIngredients.length - MAX_SLICE_LENGTH}` : ''}`,
                    qtyIngridents: qtyCountsArray,
                    status: item.status === 'pending' ? 'Готовится' : item.status === 'created' ? 'Создан' : 'Выполнен'
                }

                return obj
            }),
        [ingredients, orders]
    )
    const searchOrderDetails = useCallback(() => {
        const uniqElements = elements?.filter((el, pos) => elements?.indexOf(el) === pos)
        const order = uniqElements?.find((item) => item.id === id)
        setOrderDetails(order)
    }, [id, elements])

    useEffect(() => {
        if (id) {
            searchOrderDetails()
        }

    }, [id])

    return {
        elements, orderDetails
    }
}

export default useOrders