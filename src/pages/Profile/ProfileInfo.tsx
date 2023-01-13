import React, { useState, useRef, useEffect, useCallback, useMemo, SyntheticEvent } from 'react';
import { useDispatch, useSelector } from '../../services/store/hooks';
import { nameShema, emailSchema, passSchema, checkValidate } from '../../utils/validation';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import './profile.scss';
import { userSelector } from '../../services/selectors/userSelector';
import Loader from '../../components/Loader/Loader';
import { getUser, updateUserInfo } from '../../services/actions/user/user';
import { useForm } from '../../hooks/useForm';


type names = 'nameState' | 'loginState' | 'pswdState'

type TInitalInputState = {
  [key in names]: boolean

}

const initialInputState: TInitalInputState = {
  nameState: true,
  loginState: true,
  pswdState: true
};

const ProfileInfo = () => {


  const { values, handleChange,
    setValues, nameErr, loginErr,
    passErr, setNameErr, setLoginErr,
    setPassErr } = useForm({ email: 'denn161', name: 'Денис', password: '' })


  const [inputsState, setInputsState] = useState(initialInputState);

  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const loginInputRef = useRef<HTMLInputElement | null>(null);
  const pswdInputRef = useRef<HTMLInputElement | null>(null);


  const dispatch = useDispatch()

  const { user, loading } = useSelector(userSelector)

  const disable = nameErr || loginErr || passErr || values.name === '' || values.email === ''

  const isShowBtns = useMemo(() => {
    return values.name !== user.name || values.email !== user.email || values.password !== ''

  }, [values, user])

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUserInfo(values))

  }, [dispatch, values])

  const reverseForm = useCallback((e: SyntheticEvent) => {
    e.preventDefault();
    setValues({
      ...values,
      ...user
    })
    setPassErr(false)
    checkValidate(nameShema, setNameErr, user.name);
    checkValidate(emailSchema, setLoginErr, user.email);

  }, [values, user])


  useEffect(() => {
    dispatch(getUser())

  }, [dispatch])

  const updateUser = useCallback(() => {
    setValues({ ...values, ...user })

  }, [user, values])


  useEffect(() => {
    if (user) {
      updateUser()
    }

  }, [user])

  if (loading) {
    return <Loader />
  }

  return (
    <section className='profile__content'>
      <form className='profile__form' onSubmit={handleSubmit}>
        <Input
          ref={nameInputRef}
          name="name"
          type="text"
          value={values.name || ''}
          onChange={e => {
            handleChange(e)
            checkValidate(nameShema, setNameErr, e.target.value);
          }}
          icon="EditIcon"
          placeholder="Имя"
          error={nameErr}
          errorText={
            values.name === ''
              ? 'Заполните поле'
              : 'Некорректный формат имени'
          }
          onIconClick={() => {
            setInputsState({
              ...initialInputState,
              nameState: false
            });
            nameInputRef && nameInputRef?.current?.focus()
          }}
          onBlur={() => {
            setInputsState({
              ...initialInputState,
              nameState: true
            });
          }}
          disabled={inputsState.nameState}
        />
        <Input
          ref={loginInputRef}
          name="email"
          type="email"
          value={values.email || ''}
          onChange={e => {
            handleChange(e)
            checkValidate(emailSchema, setLoginErr, e.target.value);
          }}
          icon="EditIcon"
          placeholder="Логин"
          error={loginErr}
          errorText={
            values.email === ''
              ? 'Заполните поле'
              : 'Некорректный формат логина'
          }
          onIconClick={() => {
            setInputsState({
              ...initialInputState,
              loginState: false
            });
            loginInputRef && loginInputRef?.current?.focus()
          }}
          onBlur={() => {
            setInputsState({
              ...initialInputState,
              loginState: true
            });
          }}
          disabled={inputsState.loginState}
        />
        <Input
          ref={pswdInputRef}
          autoComplete={'false'}
          name="password"
          type="password"
          value={values.password || ''}
          onChange={e => {
            handleChange(e)
            checkValidate(passSchema, setPassErr, e.target.value);
          }}
          icon="EditIcon"
          placeholder="Пароль"
          error={passErr}
          errorText={
            values.password === ''
              ? 'Заполните поле'
              : 'Некорректный формат пароля'
          }
          onIconClick={() => {
            setInputsState({
              ...initialInputState,
              pswdState: false
            });
            pswdInputRef && pswdInputRef?.current?.focus()
          }}
          onBlur={() => {
            setInputsState({
              ...initialInputState,
              pswdState: true
            });
          }}
          disabled={inputsState.pswdState}
        />

        {isShowBtns && (
          <div className='profile__info-btns'>
            <Button size='medium' htmlType='button' onClick={reverseForm}>Отмена</Button>
            <Button size='medium' disabled={disable} htmlType='submit'>Сохранить</Button>
          </div>
        )}
      </form>
    </section>
  )
}

export default ProfileInfo