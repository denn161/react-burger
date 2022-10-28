import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import AppHeader from '../AppHeader';
import OrderDetails from '../OrderDetails';
import BurgerIngredients from '../BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor';
import { Modal, ModalIngredient } from '../Modal';
import { getIngredients } from '../../services/actions';
import Loader from '../Loader/Loader';
import { ingredientsSelector } from '../../services/selectors/ingredientsSelector';
import { ingredientSelector } from '../../services/selectors/ingredientSelector';
import styles from './App.module.css';



function App() {

  const dispatch = useDispatch()

  const { isIngredientModal, isOrderModal } = useSelector(ingredientSelector)
  const { loading } = useSelector(ingredientsSelector)


  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  if (loading) {
    return <Loader />
  }

  return (
    <div className={styles.wrapper}>
      <div className="App">
        {isIngredientModal &&
          <Modal title={'Детали ингридиента'} isOpenModal={isIngredientModal}>
            <ModalIngredient />
          </Modal>}
        <Modal isOpenModal={isOrderModal}>
          <OrderDetails />
        </Modal>
        <AppHeader />
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

export default App;
