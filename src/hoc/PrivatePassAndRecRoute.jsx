import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { userSelector } from '../services/selectors/userSelector'
const PrivatePassAndRecRoute = ({children}) => {


  const {isFargot} = useSelector(userSelector)
   

  return isFargot ? children : <Navigate to='/home' replace/>  
}

export{PrivatePassAndRecRoute}