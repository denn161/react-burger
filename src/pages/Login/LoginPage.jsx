import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { emailSchema, passSchema, checkValidate } from '../../components/validation';
import { loginUser } from '../../services/actions'
import { userSelector } from '../../services/selectors/userSelector'
import './login.scss'

const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [isShowPass, setShowPass] = useState(false);

  const { isStatus, auth } = useSelector(userSelector)

  const inputRef = useRef(null)

  const location = useLocation()
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const fromPage = location?.state?.from?.pathname || '/' 

  const changeInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const showPass = () => {
    setShowPass(prev => !prev)
  }

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    setForm({ ...form, password: '', email: '' })
    dispatch(loginUser(form, navigate, toast, fromPage))

  }, [setForm, form, dispatch, navigate])

  const disable =
    emailErr ||
    passErr ||
    form.name === '' ||
    form.email === ''


  useEffect(() => {
  inputRef?.current.focus()

  }, [])

  return (
    <div className='login'>
      <form className='login__form' onSubmit={handleSubmit}>
        <h2 className='login__title'>Вход</h2>
        <div className='login__input'>
          <Input
            name="email"
            value={form.email}
            type="email"
            placeholder="E-mail"
            error={emailErr}
            errorText={
              form.email === '' ? 'Заполните поле' : 'Некорректный формат e-mail'
            }
            onChange={(e) => {
              changeInput(e)
              checkValidate(emailSchema, setEmailErr, e.target.value)
            }}
            ref={inputRef}
          />
        </div>
        <div className='login__input'>
          <Input
            name="password"
            value={form.password}
            type={isShowPass ? 'text' : 'password'}
            placeholder="Password"
            error={passErr}
            errorText={
              form.password === '' ? 'Заполните поле' : 'Некорректный пароль'
            }
            onChange={(e) => {
              changeInput(e)
              checkValidate(passSchema, setPassErr, e.target.value)
            }}
            icon="ShowIcon"
            onIconClick={showPass}
          />
        </div>
        <Button type="primary" size="large" disabled={disable} htmlType='submit'>
          Войти
        </Button>
        <div className='login__footer'>
          <p className='login__text'>Вы — новый пользователь?
            <Link to={'/register'} className='login__btn' >Регистрация</Link>
          </p>
          <p className='login__text'>Забыли пароль?
            <Link to={'/fargot'} className='login__btn'>Восстановить</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginPage