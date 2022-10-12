import React from 'react';
import AppHeader from '../AppHeader';
import BurgerIngredients from '../BurgerIngredients';
import BurgerConstructor from '../BurgerConstructor';
import { data,dataResult } from '../../utils/data';


function App() {
  return (
   <div className='wrapper'>
      <div className="App">
     <AppHeader/>
     <main className='container main__container'>
      <BurgerIngredients data={dataResult}/>
      <BurgerConstructor stateData={data}/>
     </main>
     
    </div>
   </div>
  );
}

export default App;
