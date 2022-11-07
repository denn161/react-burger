import React from 'react'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { userSelector } from '../services/selectors/userSelector'
const PrivatePassAndRecRoute = ({children}) => {


  const {isFargot} = useSelector(userSelector)
   

  return isFargot ? children : <Navigate to='/home' replace/>  
}

PrivatePassAndRecRoute.propTypes={
  children:PropTypes.node.isRequired
}

export{PrivatePassAndRecRoute}