import React from 'react'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import ModalHistoryOrder from '../../components/HistoryOrder/ModalHistoryOrder'
import { Modal, ModalIngredient } from '../../components/Modal'
import { PrivateRouter, PublicRouter, PrivatePassAndRecRoute } from '../../hoc'
import { closeModal } from '../../services/actions/orderandIngredient'
import { ingredientSelector } from '../../services/selectors/ingredientSelector'
import FargotPage from '../FargotPassword/FargotPage'
import HistoryOrderDetailsPage from '../HistoryOrderDetails/HistoryOrderDetailsPage'
import HistoryOrders from '../HistoryOrders/HistoryOrders'
import HomePage from '../Home/HomePage'
import IngredientPage from '../IngridientDitails/IngredientPage'
import LoginPage from '../Login/LoginPage'
import NotFoundPages from '../NotFoundPages/NotFoundPages'
import ModalOrderFeedDetails from '../OrdersPage/ModalOrderFeedDetails'
import OrdersDetailsPage from '../OrdersPage/OrdersDetailsPage'
import OrdersPage from '../OrdersPage/OrdersPage'
import ProfileInfo from '../Profile/ProfileInfo'
import ProfilePage from '../Profile/ProfilePage'
import RegisterPage from '../Register/RegisterPage'
import ResetPage from '../ResetPassword/ResetPage'


const Routers = () => {

  const location = useLocation()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { isIngredientModal } = useSelector(ingredientSelector)

  const background = location?.state && location?.state?.background

  const backgroundFeed = location?.state && location?.state?.backgroundFeed

  const backgroundHistory = location?.state && location?.state?.backgroundHistory

  const pathNameIngredient: string = background?.pathname || '/'

  const pathNameFeedOrder: string = backgroundFeed?.pathname || '/feed'

  const pathNameHistoryOrder: string = backgroundHistory?.pathname || '/profile/orders'


  const item = location?.state?.el

  const orderDeatails = location?.state?.order

  const orderHistoryDetails = location?.state?.orderHistory


  const closeModalIngredient = useCallback(() => {
    dispatch(closeModal())
    navigate(`${pathNameIngredient}`)
  }, [dispatch, navigate, pathNameIngredient])

  const closeModalFeedOrder = useCallback(() => {
    dispatch(closeModal())
    navigate(`${pathNameFeedOrder}`)
  }, [dispatch, navigate, pathNameFeedOrder])


  const closeModalHistoryOrder = useCallback(() => {
    dispatch(closeModal())
    navigate(`${pathNameHistoryOrder}`)
  }, [dispatch, navigate, pathNameHistoryOrder])


  return (
    <div>
      <Routes location={background || backgroundFeed || backgroundHistory || location}>
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
        <Route path='feed' element={<OrdersPage />} />
        <Route path='feed/:id' element={<OrdersDetailsPage />} />
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
      {backgroundFeed && (
        <Routes>
          <Route path='feed/:id' element={
            <Modal isOpenModal={isIngredientModal}
              closeModal={closeModalFeedOrder} >
              <ModalOrderFeedDetails orderDetails={orderDeatails} />
            </Modal>
          } />
        </Routes>
      )}
      {backgroundHistory && (
        <Routes>
          <Route path='profile/orders/:id' element={
            <Modal isOpenModal={isIngredientModal}
              closeModal={closeModalHistoryOrder} >
              <ModalHistoryOrder order={orderHistoryDetails} />
            </Modal>
          } />
        </Routes>
      )}

    </div>

  )
}

export default Routers