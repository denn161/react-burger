import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { userSelector } from '../services/selectors/userSelector'


interface PrivatePassAndRecRouteProps {
  children: ReactNode
}

const PrivatePassAndRecRoute = ({ children }: PrivatePassAndRecRouteProps) => {


  const { isFargot } = useSelector(userSelector)


  return <>{isFargot ? children : <Navigate to='/login' replace />}</>
}

export { PrivatePassAndRecRoute }