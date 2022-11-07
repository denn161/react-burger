import React from 'react'
import PropTypes from 'prop-types';

import { Link, useMatch } from 'react-router-dom'

import './index.scss'


const CustomLink = ({ children, to, str, ...props }) => {

  const match = useMatch(str)

  const className = match ? 'link-active link' : 'link'

  return (
    <Link to={to} {...props} className={className}>
      {children}
    </Link>
  )
}

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  str: PropTypes.string.isRequired,
  props: PropTypes.object
}



export default CustomLink