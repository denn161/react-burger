import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nameShema, emailSchema, passSchema, checkValidate } from '../../components/validation';
import { Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import './profile.scss';
import { userSelector } from '../../services/selectors/userSelector';
import Loader from '../../components/Loader/Loader';
import { getUser, updateUserInfo } from '../../services/actions/user';



const initialInputState = {
  nameState: true,
  loginState: true,
  pswdState: true
};

const ProfileInfo = () => {


  const [form, setForm] = useState({
    email: 'denn161',
    name: 'Денис',
    password: ''
  })
  const [inputsState, setInputsState] = useState(initialInputState);
  const [nameErr, setNameErr] = useState(false);
  const [loginErr, setLoginErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const nameInputRef = useRef(null);
  const loginInputRef = useRef(null);
  const pswdInputRef = useRef(null);
 

  const dispatch = useDispatch()


  const { user, loading} = useSelector(userSelector)

  const disable = nameErr || loginErr || passErr || form.name === '' || form.email === ''

  const isShowBtns = useMemo(() => {
    return form.name !== user.name || form.email !== user.email || form.password !== ''

  }, [form, user])
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(updateUserInfo(form))

  }, [dispatch, form])

  const reverseForm = useCallback((e) => {
    e.preventDefault();
    setForm({
      ...form,
      ...user
    })
    setPassErr(false)
    checkValidate(nameShema, setNameErr, user.name);
    checkValidate(emailSchema, setLoginErr, user.email);

  }, [form, user])


  const changeInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    dispatch(getUser())

  }, [dispatch])

  const updateUser = useCallback(()=>{
      setForm({...form,...user})

  },[user,form])


  useEffect(() => {
     if(user){
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
          value={form.name}
          onChange={e => {
            changeInput(e)
            checkValidate(nameShema, setNameErr, e.target.value);
          }}
          icon="EditIcon"
          placeholder="Имя"
          error={nameErr}
          errorText={
            form.name === ''
              ? 'Заполните поле'
              : 'Некорректный формат имени'
          }
          onIconClick={() => {
            setInputsState({
              ...initialInputState,
              nameState: false
            });
            nameInputRef?.current.focus()
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
          value={form.email}
          onChange={e => {
            changeInput(e)
            checkValidate(emailSchema, setLoginErr, e.target.value);
          }}
          icon="EditIcon"
          placeholder="Логин"
          error={loginErr}
          errorText={
            form.email === ''
              ? 'Заполните поле'
              : 'Некорректный формат логина'
          }
          onIconClick={() => {
            setInputsState({
              ...initialInputState,
              loginState: false
            });
            loginInputRef?.current.focus()
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
          value={form.password}
          onChange={e => {
            changeInput(e)
            checkValidate(passSchema, setPassErr, e.target.value);
          }}
          icon="EditIcon"
          placeholder="Пароль"
          error={passErr}
          errorText={
            form.password === ''
              ? 'Заполните поле'
              : 'Некорректный формат пароля'
          }
          onIconClick={() => {
            setInputsState({
              ...initialInputState,
              pswdState: false
            });
            pswdInputRef?.current.focus()
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
            <Button size='medium' htmlType='button' onClick={reverseForm} >Отмена</Button>
            <Button size='medium' disabled={disable} htmlType='submit'>Сохранить</Button>
          </div>
        )}
      </form>
    </section>
  )
}

export default ProfileInfo