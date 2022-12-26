import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { userSelector } from '../services/selectors/userSelector';


 interface PublicRouterProps{
   children:ReactNode
 }

const PublicRouter = ({ children }:PublicRouterProps) => {

  const location = useLocation()

  const { token, auth } = useSelector(userSelector)

  return !token ? (children) : <Navigate to={'/home'} replace />
}

export default PublicRouter;
