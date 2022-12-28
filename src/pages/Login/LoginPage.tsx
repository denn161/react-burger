import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { emailSchema, passSchema, checkValidate } from '../../components/validation';
import { loginUser } from '../../services/actions/user'
import { userSelector } from '../../services/selectors/userSelector'
import { IForm } from '../../types/formTypes';

import './login.scss'


const LoginPage = (): JSX.Element => {

  const [form, setForm] = useState<Omit<IForm, 'name'>>({
    email: '',
    password: ''
  })

  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [isShowPass, setShowPass] = useState(false);

  const { isLogin } = useSelector(userSelector)

  const inputRef = useRef<HTMLInputElement | null>(null)

  const location = useLocation()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const fromPage = location?.state?.from?.pathname || '/'

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const showPass = (): void => {
    setShowPass(prev => !prev)
  }

  const clearForm = (): void => {
    setForm({ ...form, email: '', password: '' })
  }

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch<any>(loginUser(form, navigate, fromPage))
    if (isLogin) {
      clearForm()
    }

  }, [setForm, form, dispatch, navigate])

  const disable =
    emailErr ||
    passErr ||
    form.password === '' ||
    form.email === ''

  useEffect(() => {
   inputRef?.current?.focus()
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
            autoComplete={'false'}
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
            <Link to={'/fargot-password'} className='login__btn' state={{ login: location }}>Восстановить</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginPage