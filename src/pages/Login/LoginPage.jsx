import React, { useCallback, useState } from 'react'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { emailSchema, passSchema, checkValidate } from '../../components/validation'
import { useNavigate } from 'react-router-dom'

import './login.scss'

const LoginPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [isShowPass, setShowPass] = useState(false);

  const navigate = useNavigate()

  const backToRegister = () => {
    navigate(`/register`)
  }

  const recoverPass = () => {
    navigate('/fargot')
  }

  const changeInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const showPass = () => {
    setShowPass(prev => !prev)
  }

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    setForm({ ...form, password: '', email: '' })

  }, [setForm, form])

  const disable =
    emailErr ||
    passErr ||
    form.name === '' ||
    form.email === ''

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
            <button className='login__btn' onClick={backToRegister}>Регистрация</button>
          </p>
          <p className='login__text'>Забыли пароль?
            <button className='login__btn' onClick={recoverPass}>Восстановить</button>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginPage