import React from 'react';
import Routers from '../../pages/Routes/Routers';
import AppHeader from '../AppHeader';
import styles from './App.module.css'


function App() {
  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <Routers />
    </div>
  )

}

export default App;
