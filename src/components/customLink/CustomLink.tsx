import React, { FC, ReactNode } from 'react'

import { Link, useMatch } from 'react-router-dom'

import './index.scss'

interface CustomLinkProps{
   children:ReactNode
   to:string 
   str:string    
}


const CustomLink:FC<CustomLinkProps> = ({ children, to, str, ...props }) => {

  const match = useMatch(str)

  const className = match ? 'link-active link' : 'link'

  return (
    <Link to={to} {...props} className={className}>
      {children}
    </Link>
  )
}



export default CustomLink