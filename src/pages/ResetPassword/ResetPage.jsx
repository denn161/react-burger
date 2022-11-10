import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { passSchema, restCodeSchema, checkValidate } from '../../components/validation'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { resetPassword } from '../../services/actions/user'
import './reset.scss'

const ResetPage = () => {

  const [reset, setReset] = useState({
    password: '',
    code: ''
  })
  const [passErr, setPassErr] = useState(false);
  const [codeErr, setCodeErr] = useState(false);
  const [isShowPass, setShowPass] = useState(false);

  const disable = passErr || reset.password === '' || reset.code === '' || codeErr

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const backToLogin = () => {
    navigate('/login')
  }

  const changeInput = e => {
    setReset({ ...reset, [e.target.name]: e.target.value })
  }

  const showPass = () => {
    setShowPass(prev => !prev)
  }

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    dispatch(resetPassword(reset.password, toast, navigate))
    setReset({ ...reset, password: '', code: '' })

  }, [reset, navigate,dispatch])

  return (
    <div className='reset'>
      <form className='reset__form' onSubmit={handleSubmit} >
        <h2 className='fargot__title'>Восстановить</h2>
        <div className='reset__input'>
          <Input
            name="password"
            value={reset.password}
            type={isShowPass ? 'text' : 'password'}
            placeholder="Введите новый пароль"
            error={passErr}
            errorText={
              reset.password === '' ? 'Заполните поле' : 'Некорректный пароль'
            }
            onChange={(e) => {
              changeInput(e)
              checkValidate(passSchema, setPassErr, e.target.value)
            }}
            icon="ShowIcon"
            onIconClick={showPass}
          />
        </div>
        <div className='reset__input'>
          <Input
            name="code"
            value={reset.code}
            type={'text'}
            placeholder="Введите код из письма"
            error={codeErr}
            errorText={
              reset.code === '' ? 'Заполните поле' : 'Некорректный формат кода'
            }
            onChange={(e) => {
              changeInput(e)
              checkValidate(restCodeSchema, setCodeErr, e.target.value)
            }}
          />
        </div>
        <Button type="primary" size="large" disabled={disable} htmlType='submit'>
          Сохранить
        </Button>
        <div className='fargot__footer'>
          <p className='fargot__text'>Вспомнили пароль?
            <button className='fargot__btn' onClick={backToLogin}>Войти</button>
          </p>
        </div>
      </form>
    </div>
  )
}

export default ResetPage