import React, { useEffect } from 'react';
import Routers from '../../pages/Routes/Routers';
import { ToastContainer } from 'react-toastify';
import { AppHeader } from '../AppHeader';
import styles from './App.module.css'
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';

function App() {


const dispatch = useDispatch()


  useEffect(() => {
    dispatch<any>(getIngredients())
  }, [dispatch])

  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <Routers />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )

}

export default App;
