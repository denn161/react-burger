import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { emailSchema, passSchema, checkValidate } from '../../utils/validation';
import { loginUser } from '../../services/actions/user'
import { userSelector } from '../../services/selectors/userSelector'
import {useForm } from '../../hooks/useForm';
import './login.scss'


const initialValues = { email: '', password: '' }

const LoginPage = (): JSX.Element => {

  const { values, handleChange, setValues,clearForm } = useForm(initialValues)

  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [isShowPass, setShowPass] = useState(false);

  const { isLogin } = useSelector(userSelector)

  const inputRef = useRef<HTMLInputElement | null>(null)

  const location = useLocation()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const fromPage = location?.state?.from?.pathname || '/'

  const showPass = (): void => {
    setShowPass(prev => !prev)
  } 

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch<any>(loginUser(values, navigate, fromPage))
    if (isLogin) {
      clearForm({...values,email:'',password:''})
    }

  }, [setValues, values, dispatch, navigate])

  const disable =
    emailErr ||
    passErr ||
    values.password === '' ||
    values.email === ''

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
            value={values.email||''}
            type="email"
            placeholder="E-mail"
            error={emailErr}
            errorText={
              values.email === '' ? 'Заполните поле' : 'Некорректный формат e-mail'
            }
            onChange={(e) => {
              handleChange(e)
              checkValidate(emailSchema, setEmailErr, e.target.value)
            }}
            ref={inputRef}
          />
        </div>
        <div className='login__input'>
          <Input
            name="password"
            value={values.password||''}
            type={isShowPass ? 'text' : 'password'}
            autoComplete={'false'}
            placeholder="Password"
            error={passErr}
            errorText={
              values.password === '' ? 'Заполните поле' : 'Некорректный пароль'
            }
            onChange={(e) => {
              handleChange(e)
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