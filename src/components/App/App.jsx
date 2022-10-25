import React, { useCallback, useState } from 'react';
import AppHeader from '../AppHeader';
import OrderDetails from '../OrderDetails';
import BurgerIngredients from '../BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor';
import useFetch from '../../hooks/useFetch';
import { IngridientsContext } from '../../services';
import { getConstructorData, mutationArr } from '../../utils/data';
import { INGREDIENTS_URL, ORDERS_URL } from '../../constants';
import styles from './App.module.css';
import { Modal, ModalIngredient } from '../Modal';


function App() {

  const { data } = useFetch(INGREDIENTS_URL);

  const [active, setActive] = useState(false)

  const [orderActive, setOrderActive] = useState(false)

  const [productId, setProductId] = useState(null)

  const [orderNumber, setOrderNumber] = useState(null)

  const dataResult = mutationArr(data);

  const findElement = data.length && data.find((item) => item._id === productId)

  const mutationData = getConstructorData(data, "60d3b41abdacab0026a733c6")

  const number = orderNumber?String(orderNumber):'098766'

  const closeModalIngredient = () => {
    setActive(false)
  }

  const closeOrderModal = () => {
    setOrderActive(false)
  }



  const openOrderModal = useCallback(() => {
    setOrderActive(true)
  })
  const getOrderNumber = useCallback(async () => {
    try {
      const res = await fetch(ORDERS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients: [...mutationData.map((i) => i._id)] })
      })
      if (!res.ok) {
        return Promise.reject(`Error:${res.status}`)
      }
      const { success, order } = await res.json()
      if (success) {
        setOrderNumber(order?.number)
        openOrderModal()

      }
    } catch (error) {
      console.log(error.message)
    }

  }, [openOrderModal, mutationData, setOrderNumber])

  return (
    <div className={styles.wrapper}>
      <div className="App">
        <Modal isActive={active}
          closePopup={closeModalIngredient}
          title={'Детали ингридиента'} >
          <ModalIngredient indgredient={findElement} />
        </Modal >
        <Modal isActive={orderActive} closePopup={closeOrderModal} classes={true}  >
          <OrderDetails id={number} />
        </Modal>
        <AppHeader />
        <main className={`${styles.container} ${styles.main__container}`}>
          <BurgerIngredients data={dataResult} getId={setProductId} setActive={setActive} />
          <IngridientsContext.Provider value={{ mutationData, getOrderNumber }}>
            {data.length && <BurgerConstructor />}
          </IngridientsContext.Provider>
        </main>
      </div>

    </div>
  );
}

export default App;
