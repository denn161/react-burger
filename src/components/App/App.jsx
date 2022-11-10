import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Routers from '../../pages/Routes/Routers';
import { ToastContainer } from 'react-toastify';
import AppHeader from '../AppHeader';
import styles from './App.module.css'
import 'react-toastify/dist/ReactToastify.css';
import { getCookie } from '../../utils/cookies';
import { useSelector } from 'react-redux';
import { userSelector } from '../../services/selectors/userSelector';


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
