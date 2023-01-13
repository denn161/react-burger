import React, {useCallback } from 'react'
import {toast} from 'react-toastify'
import { profilesLink } from '../../constants'
import {  Outlet, useLocation, useNavigate } from 'react-router-dom'
import CustomLink from '../../components/customLink'
import './profile.scss'
import { useDispatch } from 'react-redux'
import { logout } from '../../services/actions/user/user'



const ProfilePage = () => {
 

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const location = useLocation()
  
const isProfile = location?.pathname==='/profile'

 
 
  const handleLogout = useCallback(()=>{

  dispatch(logout(toast,navigate)) 

},[dispatch,navigate])
 
  return (
    <section className='profile container'>
      <div className='profile__nav'>
      <aside className='profile__asside'>
        <ul className='profile__list'>
          {profilesLink.map(({ id,to,str, title }) =>
            <li key={id} className={'profile__item'}>
              <CustomLink to={to} str={str}>
                {title}
              </CustomLink>
            </li>
          )}
          <li className='profile__item'>
          <button className='profile__btn' onClick={handleLogout}>Выход</button>
          </li>
        </ul>
        {isProfile && (<p
        className={'profile__text'}>
        В этом разделе вы можете изменить свои персональные данные
      </p>)}
      </aside>
      </div>
      <div className='profile__info'>       
        <Outlet />
      </div>
    </section>
  )
}

export default ProfilePage