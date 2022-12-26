import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Routers from '../../pages/Routes/Routers';
import { ToastContainer } from 'react-toastify';
import{ AppHeader} from '../AppHeader';
import styles from './App.module.css'
import 'react-toastify/dist/ReactToastify.css';

function App() { 


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
