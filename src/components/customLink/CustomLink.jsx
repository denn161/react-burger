import React from 'react'

import { Link, useMatch } from 'react-router-dom'

import './index.scss'


const CustomLink = ({children,to,str,...props}) => {
    
  const match = useMatch(str)    
   
  const className = match ? 'link-active link':'link'

  return (
    <Link to={to} {...props} className={className}>
     {children}
    </Link>
  )
}

export default CustomLink