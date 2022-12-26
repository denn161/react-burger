import React, { useCallback, useState } from 'react'
import { toast } from 'react-toastify'
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { emailSchema, checkValidate } from '../../components/validation'
import { useNavigate } from 'react-router-dom'
import './fargot-page.scss'
import { useDispatch } from 'react-redux'
import { fargotPassword } from '../../services/actions/user'


const FargotPage = () => {

  const [email, setEmail] = useState('')
  
  const [emailErr, setEmailErr] = useState(false);

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const changeInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const backToLogin = () => {
    navigate(`/login`)
  }

  const disable = emailErr || email === ''

  const handleSubmit = useCallback((e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch<any>(fargotPassword(email, navigate))
    setEmail('')

  }, [navigate, dispatch])
  return (
    <div className='fargot'>
      <form className='fargot__form' onSubmit={handleSubmit}>
        <h2 className='fargot__title'>Восстановить</h2>
        <div className='fargot__input'>
          <Input
            name="email"
            value={email}
            type="email"
            placeholder="E-mail"
            error={emailErr}
            errorText={
              email === '' ? 'Заполните поле' : 'Некорректный формат e-mail'
            }
            onChange={(e) => {
              changeInput(e)
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