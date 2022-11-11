import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { userSelector } from '../services/selectors/userSelector';


const PublicRouter = ({ children }) => {

  const location = useLocation()

  const { token, auth } = useSelector(userSelector)

  return !token ? (children) : <Navigate to={'/home'} replace />
}

PublicRouter.propTypes = {
  children: PropTypes.node.isRequired
}
export default PublicRouter;
