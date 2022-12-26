import React, { useCallback, useState} from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { nameShema, emailSchema, passSchema, checkValidate } from '../../components/validation'
import './register.scss'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../services/actions/user'


const RegisterPage = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
    name: ''
  })

  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [isShowPass, setShowPass] = useState(false);

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const backToLogin = () => {
    navigate(`/login`)
  }

  const changeInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const showPass = () => {
    setShowPass(prev => !prev)
  }

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    setForm({ ...form, name: '', email: '', password: '' })
    dispatch(registerUser(form, navigate, toast))

  }, [dispatch, form, navigate])

  const disable =
    nameErr ||
    emailErr ||
    passErr ||
    form.name === '' ||
    form.email === '' ||
    form.password === '';




  return (
    <div className='register'>
      <form className='register__form' onSubmit={handleSubmit}>
        <h2 className='register__title'>Регистрация</h2>
        <div className='register__input'>
          <Input
            name={'name'}
            value={form.name}
            type="text"
            placeholder="Имя"
            error={nameErr}
            errorText={
              form.name === '' ? 'Заполните поле' : 'Некорректный формат имени'
            }
            onChange={(e) => {
              changeInput(e)
              checkValidate(nameShema, setNameErr, e.target.value)
            }}
          />
        </div>
        <div className='register__input'>
          <Input
            name="email"
            value={form.email}
            autoComplete={'off'}
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
        <div className='register__input'>
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