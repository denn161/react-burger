import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import {HomePage,FargotPage,RegisterPage,LoginPage,ResetPage,ProfilePage,IngredientPage,OrdersPage} from '..'

const Routers = () => {

  return (  
     <Routes>
      <Route path='/' element={<Navigate to={'/home'}/>}/>
      <Route path='/home' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/fargot' element={<FargotPage/>}/>
      <Route path='/reset' element={<ResetPage/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
      <Route path='/orders' element={<OrdersPage/>}/>
      <Route path='ingredients/:id' element={<IngredientPage/>}/>
     </Routes>
   
  )
}

export default Routers