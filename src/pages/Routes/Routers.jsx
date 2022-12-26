import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import {
  HomePage,
  FargotPage,
  RegisterPage,
  LoginPage,
  ResetPage,
  ProfilePage,
  IngredientPage,
  OrdersPage,
  HistoryOrders,
  OrderDetailsPage,
  ProfileInfo,
  NotFoundPages
} from '..'
import { Modal, ModalIngredient } from '../../components/Modal'
import { PrivateRouter, PublicRouter, PrivatePassAndRecRoute } from '../../hoc'
import { ingredientSelector } from '../../services/selectors/ingredientSelector'

const Routers = () => {

  const location = useLocation()

  const { isIngredientModal } = useSelector(ingredientSelector)

  const background = location?.state && location?.state?.background

  const pathName = background?.pathname || '/'

  const item = location?.state?.el

  return (

    <div>
      <Routes location={background || location}>
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
        <Route path='/fargot-password' element={
          <PublicRouter>
            <FargotPage />
          </PublicRouter>

        } />
        <Route path='/reset-password' element={
          <PrivatePassAndRecRoute>
            <ResetPage />
          </PrivatePassAndRecRoute>
        } />
        <Route path='profile/*'
          element={
            <PrivateRouter>
              <ProfilePage />
            </PrivateRouter>}>
          <Route index element={
            <PrivateRouter>
              <ProfileInfo />
            </PrivateRouter>
          } />
          <Route path='orders' element={<HistoryOrders />} />
          <Route path='orders/:id' element={<OrderDetailsPage />} />
        </Route>
        <Route path='/listorders' element={<OrdersPage />} />
        <Route path='ingredients/:id' element={<IngredientPage />} />
        <Route path='*' element={<NotFoundPages />} />
      </Routes>
      {background && (
        <Routes>
          <Route path='/ingredients/:id' element={
            <Modal title={'Детали ингредиента'} isOpenModal={isIngredientModal} pathName={pathName} >
              <ModalIngredient ingredient={item} />
            </Modal>
          } />
        </Routes>
      )}

    </div>

  )
}

export default Routers