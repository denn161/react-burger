import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { nameShema, emailSchema, passSchema, checkValidate } from '../../components/validation'
import './register.scss'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../services/actions/user'
import { useForm } from '../../hooks/useForm'


const RegisterPage = () => {

  const { values, handleChange, setValues } = useForm({ email: '', pasword: '', name: '' })

  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [isShowPass, setShowPass] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const backToLogin = () => {
    navigate(`/login`)
  }

  const showPass = () => {
    setShowPass(prev => !prev)
  }

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValues({ ...values, name: '', email: '', password: '' })
    dispatch<any>(registerUser(values, navigate, toast))

  }, [dispatch, values, navigate])

  const disable =
    nameErr ||
    emailErr ||
    passErr ||
    values.name === '' ||
    values.email === '' ||
    values.password === '';

  useEffect(() => {
    inputRef?.current?.focus()

  }, [])

  return (
    <div className='register'>
      <form className='register__form' onSubmit={handleSubmit}>
        <h2 className='register__title'>Регистрация</h2>
        <div className='register__input'>
          <Input
            ref={inputRef}
            name={'name'}
            value={values.name}
            type="text"
            placeholder="Имя"
            error={nameErr}
            errorText={
              values.name === '' ? 'Заполните поле' : 'Некорректный формат имени'
            }
            onChange={(e) => {
              handleChange(e)
              checkValidate(nameShema, setNameErr, e.target.value)
            }}
          />
        </div>
        <div className='register__input'>
          <Input
            name="email"
            value={values.email}
            autoComplete={'off'}
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
          />
        </div>
        <div className='register__input'>
          <Input
            name="password"
            value={values.password}
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
          Зарегистрироваться
        </Button>
        <div className='register__footer'>
          <p className='register__text'>Уже зарегистрированы?</p>
          <button className='register__btn' onClick={backToLogin}>Войти</button>
        </div>
      </form>

    </div>
  )
}

export default RegisterPage