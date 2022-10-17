import React, { useState } from 'react';
import AppHeader from '../AppHeader';
import OrderDetails from '../OrderDetails';
import BurgerIngredients from '../BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor';
import useFetch from '../../hooks/useFetch';
import { mutationArr } from '../../utils/data';
import { API_URL } from '../../constants';
import styles from './App.module.css';
import { Modal, ModalIngredient } from '../Modal';


function App() {

  const { data, loading, error } = useFetch(API_URL);

  const [active, setActive] = useState(false)

  const [orderActive, setOrderActive] = useState(false)

  const [productId, setProductId] = useState(null)

  const dataResult = mutationArr(data);

  const findElement = data.length && data.find((item) => item._id === productId)


  const closeModalIngredient = () => {
    setActive(false)
  }

  const closeOrderModal = () => {
    setOrderActive(false)
  }

  const openOrderModal = () => {
    setOrderActive(true)
  }

  return (
    <div className={styles.wrapper}>
      <div className="App">
        <Modal isActive={active}
          closePopup={closeModalIngredient}
          title={'Детали ингридиента'} >
          <ModalIngredient indgredient={findElement} />
        </Modal >
        <Modal isActive={orderActive} closePopup={closeOrderModal} classes={true} >
          <OrderDetails id={'0345789'} />
        </Modal>

        <AppHeader />
        <main className={`${styles.container} ${styles.main__container}`}>
          <BurgerIngredients data={dataResult} getId={setProductId} setActive={setActive} />
          <BurgerConstructor stateData={data} openOrderModal={openOrderModal} />
        </main>
      </div>

    </div>
  );
}

export default App;
