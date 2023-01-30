import React, { useEffect } from 'react';
import Routers from '../../pages/Routes/Routers';
import { ToastContainer } from 'react-toastify';
import { AppHeader } from '../AppHeader';
import 'react-toastify/dist/ReactToastify.css';
import { getIngredients } from '../../services/actions/ingredients';
import { useDispatch } from '../../services/store/hooks';
import styles from './App.module.css'
import { wsInitFeddActions } from '../../services/actions/wsActions/feedActions/actions';
import { wsFildUrl } from '../../services/actions/wsActions/feedActions/constants';


function App() {

const dispatch = useDispatch()  
   

  useEffect(() => {
    dispatch(getIngredients())  
    
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
