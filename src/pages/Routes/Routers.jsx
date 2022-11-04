import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import {
  HomePage,
  FargotPage,
  RegisterPage,
  LoginPage,
  ResetPage,
  ProfilePage,
  IngredientPage,
  OrdersPage, HistoryOrders, OrderDetailsPage, ProfileInfo, NotFoundPages
} from '..'
import { PrivateRouter, PublicRouter,PrivatePassAndRecRoute } from '../../hoc'

const Routers = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/home'} />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/login' element={
        <PublicRouter>
          <LoginPage />
        </PublicRouter>
      } />
      <Route path='/register' element={
        <PublicRouter>
          <RegisterPage />
        </PublicRouter>
      } />
      <Route path='/fargot' element={
        <PrivatePassAndRecRoute>
          <FargotPage />
        </PrivatePassAndRecRoute>

      } />
      <Route path='/reset' element={
        <PrivatePassAndRecRoute>
          <ResetPage />
        </PrivatePassAndRecRoute>

      } />
      <Route path='profile/*'
        element={
          <PrivateRouter>
            <ProfilePage />
          </PrivateRouter>}>
        <Route index element={<ProfileInfo />} />
        <Route path='orders' element={<HistoryOrders />} />
        <Route path='orders/:id' element={<OrderDetailsPage />} />
      </Route>
      <Route path='/listorders' element={<OrdersPage />} />
      <Route path='ingredients/:id' element={<IngredientPage />} />
      <Route path='*' element={<NotFoundPages />} />
    </Routes>

  )
}

export default Routers