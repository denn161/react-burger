import React from 'react'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
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
  HistoryOrderDetailsPage,
  ProfileInfo,
  OrdersDetailsPage,
  NotFoundPages
} from '..'
import { Modal, ModalIngredient } from '../../components/Modal'
import { PrivateRouter, PublicRouter, PrivatePassAndRecRoute } from '../../hoc'
import { closeModal } from '../../services/actions/orderandIngredient'
import { ingredientSelector } from '../../services/selectors/ingredientSelector'

const Routers = () => {

  const location = useLocation()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { isIngredientModal } = useSelector(ingredientSelector)

  const background = location?.state && location?.state?.background

  const pathName:string = background?.pathname || '/'

  const item = location?.state?.el

  const closeModalIngredient = useCallback(() => {
    dispatch(closeModal())
    navigate(`${pathName}`)
  }, [dispatch, navigate, pathName])

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
        </Route>
        <Route path='profile/orders/:id' element={<HistoryOrderDetailsPage />} />
        <Route path='/fild' element={<OrdersPage />} />
        <Route path='/fild/:id' element={<OrdersDetailsPage />} />    
        <Route path='ingredients/:id' element={<IngredientPage />} />
        <Route path='*' element={<NotFoundPages />} />
      </Routes>
      {background && (
        <Routes>
          <Route path='/ingredients/:id' element={
            <Modal title={'Детали ингредиента'} isOpenModal={isIngredientModal}
              closeModal={closeModalIngredient} >
              <ModalIngredient ingredient={item} />
            </Modal>
          } />
        </Routes>
      )}

    </div>

  )
}

export default Routers