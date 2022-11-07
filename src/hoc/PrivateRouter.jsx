import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { userSelector } from '../services/selectors/userSelector';


const PrivateRouter = ({ children }) => {

    const location = useLocation()

    const { token,auth } = useSelector(userSelector)  

    return token||auth ? children : <Navigate to='/login' state={{ from: location }} />
}

PrivateRouter.propTypes={
    children:PropTypes.node.isRequired
  }


export default PrivateRouter;
