import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userSelector } from '../services/selectors/userSelector';


interface PublicRouterProps {
  children: ReactNode
}

export const PublicRouter = ({ children }: PublicRouterProps) => {

  const { token } = useSelector(userSelector)

  return <>{!token ? children : <Navigate to={'/home'} replace />}</>
}


