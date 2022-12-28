
import { ReactNode} from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { userSelector } from '../services/selectors/userSelector';


interface PrivateRouterProps{
   children:ReactNode
}

 export const PrivateRouter = ( {children} :PrivateRouterProps) => {

  const location = useLocation()

  const { token, auth } = useSelector(userSelector)

  return <>{token || auth ? children: <Navigate to='/login' state={{ from: location }} replace />}</>
}



