import React, { useCallback, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { passSchema, restCodeSchema, checkValidate } from '../../utils/validation'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { useForm } from '../../hooks/useForm'
import { resetPassword } from '../../services/actions/user/user'
import './reset.scss'

const initialValues = { password: '', code: '' }

const ResetPage = () => {

  const { values, handleChange, setValues } = useForm(initialValues)

  const [passErr, setPassErr] = useState(false);
  const [codeErr, setCodeErr] = useState(false);
  const [isShowPass, setShowPass] = useState(false);

  const disable =useMemo(()=>passErr || values.password === '' || values.code === '' || codeErr,[passErr,values])

  const navigate = useNavigate()

  const dispatch = useDispatch()


  const backToLogin = () => {
    navigate('/login')
  }

  const showPass = () => {
    setShowPass(prev => !prev)
  }

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(resetPassword(values.password, toast, navigate))
    setValues({ ...values, password: '', code: '' })

  }, [values, navigate, dispatch])



  return (
    <div className='reset'>
      <form className='reset__form' onSubmit={handleSubmit} >
        <h2 className='fargot__title'>Восстановить</h2>
        <div className='reset__input'>
          <Input
            name="password"
            value={values.password}
            autoComplete={'false'}
            type={isShowPass ? 'text' : 'password'}
            placeholder="Введите новый пароль"
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
        <div className='reset__input'>
          <Input
            name="code"
            value={values.code}
            type={'text'}
            placeholder="Введите код из письма"
            error={codeErr}
            errorText={
              values.code === '' ? 'Заполните поле' : 'Некорректный формат кода'
            }
            onChange={(e) => {
              handleChange(e)
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