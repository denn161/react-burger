import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';
import AppHeader from '../AppHeader';
import OrderDetails from '../OrderDetails';
import BurgerIngredients from '../BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor';
import styles from './App.module.css';
import { Modal, ModalIngredient } from '../Modal';
import { getIngredients } from '../../services/actions';
import { ingredientSelector } from '../../services/selectors/ingredientSelector';
import { oredersSelector } from '../../services/selectors/ordersSelector';



function App() {

  const dispatch = useDispatch()

   const {isIngredient}=useSelector(ingredientSelector)
   

   const {isOrderModal}=useSelector(oredersSelector)
  


  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return (
    <div className={styles.wrapper}>
      <div className="App">
        {isIngredient&&
        <Modal title={'Детали ингридиента'}>
          <ModalIngredient/>
        </Modal>}
        {isOrderModal&& <Modal>
          <OrderDetails/>
        </Modal>}
        <AppHeader />
        <main className={`${styles.container} ${styles.main__container}`}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            {<BurgerConstructor />}
          </DndProvider>
        </main>
      </div>
    </div>
  );
}

export default App;
