import React, { useCallback, useState } from 'react'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { emailSchema, checkValidate } from '../../utils/validation'
import { useNavigate } from 'react-router-dom'
import './fargot-page.scss'
import { fargotPassword } from '../../services/actions/user/user'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from '../../services/store/hooks'


const FargotPage = () => {

  // const [email, setEmail] = useState('')

  const { values, handleChange, clearForm } = useForm({ email: '' })

  const [emailErr, setEmailErr] = useState(false);

  const navigate = useNavigate()

  const dispatch = useDispatch()


  const backToLogin = () => {
    navigate(`/login`)
  }

  const disable = emailErr || values.email === ''

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(fargotPassword(values.email, navigate))
    clearForm({ ...values, email: '' })

  }, [navigate, dispatch])
  return (
    <div className='fargot'>
      <form className='fargot__form' onSubmit={handleSubmit}>
        <h2 className='fargot__title'>Восстановить</h2>
        <div className='fargot__input'>
          <Input
            name="email"
            value={values.email || ''}
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
        <Button type="primary" size="large" disabled={disable} htmlType='submit'>
          Восстановить
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

export default FargotPage