import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import OrderDetails from '../../components/OrderDetails';
import BurgerIngredients from '../../components/BurgerIngredients';
import BurgerConstructor from '../../components/BurgerConstructor';
import { Modal } from '../../components/Modal';
import { closeModal } from '../../services/actions/orderandIngredient';
import { getIngredients } from '../../services/actions/ingredients';
import Loader from '../../components/Loader/Loader';
import { ingredientsSelector } from '../../services/selectors/ingredientsSelector';
import { ingredientSelector } from '../../services/selectors/ingredientSelector';
import styles from './home.module.scss'
import { useCallback } from 'react';


const HomePage = () => {

  const dispatch = useDispatch()

  const { isOrderModal } = useSelector(ingredientSelector)
  const { loading } = useSelector(ingredientsSelector)

  const closeModalOrders = useCallback(() => {
    dispatch<any>(closeModal())
     
  }, [dispatch])

  useEffect(() => {
    dispatch<any>(getIngredients())
  }, [dispatch])

  if (loading) {
    return <Loader />
  }

  return (
    <div className={styles.wrapper}>
      <div className="App">
        <Modal isOpenModal={isOrderModal} pathName={'/home'} title={''} closeModal={closeModalOrders}>
          <OrderDetails />
        </Modal>
        <main className={`${styles.container} ${styles.main__container}`}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      </div>
    </div>
  );
}

export default HomePage