import React from 'react';
import AppHeader from './components/AppHeader';
import BurgerIngredients from './components/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor';
import { data } from './utils/data';
import './App.css';

function App() {
  return (
   <div className='wrapper'>
      <div className="App">
     <AppHeader/>
     <main className='container main__container'>
      <BurgerIngredients data={data}/>
      <BurgerConstructor stateData={data}/>
     </main>
     
    </div>
   </div>
  );
}

export default App;
